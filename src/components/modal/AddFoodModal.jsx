"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function AddFoodModal({ isOpen, onClose }) {
  const [foodName, setFoodName] = useState("");
  const [foodCategory, setFoodCategory] = useState("");
  const [foodImage, setFoodImage] = useState(null);
  const [form, setForm] = useState({ name: "", category: "", image: "" });
  const [imageUploading, setImageUploading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageUpload = async (e) => {
    setFoodImage(e.target.files[0]);
    const file = e.target.files[0];
    if (!file) return;
    setImageUploading(true);

    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "my_preset"); // replace with your preset

    try {
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/demnpqwx3/image/upload",
        data
      );
      setForm({ ...form, image: res.data.secure_url });
    } catch (error) {
      console.error("Image upload failed:", error);
    } finally {
      setImageUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.category || !form.image) {
        toast.error("All fields are required!");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/foods", form);
      toast.success("Successfully Food added !");
      //   alert("Food added ✅");
      setForm({ name: "", category: "", image: "" });
      setFoodImage(null)
      // ✅ Correct function call now
      if (typeof onClose === "function") {
        onClose();
      }
    } catch (error) {
      console.error("Failed to add food", error);
      toast.error("Something went wrong");
  
    }
  };
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    // Clean up when unmount or closed
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleFileChange = (e) => {
    setFoodImage(e.target.files[0]);
  };

  // ✅ Clicking on backdrop closes modal
  const handleBackdropClick = (e) => {
    if (e.target.id === "modal-backdrop") {
      onClose();
    }
  };
  return (
    <div
      id="modal-backdrop"
      onClick={handleBackdropClick}
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-[#505052] border border-white 
         rounded-xl px-6 py-4 w-full max-w-[280px] text-center text-white"
      >
        <h2 className="text-lg font-semibold mb-2">Add Food</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Food Name"
            required
            value={form.name}
            onChange={handleChange}
            className="w-full mb-4 text-xs border border-white px-2 py-2 rounded-full bg-[#5b544a]  placeholder-white focus:outline-none"
          />

          <input
            type="text"
            name="category"
            placeholder="Food Category"
            value={form.category}
            required
            onChange={handleChange}
            className="w-full mb-4 text-xs border border-white   px-2 py-2 rounded-full bg-[#5b544a]  placeholder-white focus:outline-none"
          />

          <label
            htmlFor="food-image"
            className="w-full text-xs mb-4 px-3.5 py-2  rounded-full bg-[#6a4a48] border-2 border-dashed border-red-400 cursor-pointer"
          >
            {foodImage ? foodImage.name : "Upload or Drag image here"}
          </label>
          <input
            id="food-image"
            accept="image/*"
            type="file"
            onChange={handleImageUpload}
            className="hidden"
          />
          {imageUploading && <p>Uploading Image...</p>}
          <button
            type="submit"
            // onClick={onclose()}
            className="w-full bg-red-600 mt-4 py-2 rounded-full font-semibold hover:bg-red-700 transition"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
}
