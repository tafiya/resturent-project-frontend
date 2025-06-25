"use client"
import axios from 'axios';

import React, { useEffect, useState } from 'react';
import toast from "react-hot-toast";
const AddCategoryModal = ({ isOpen, onClose }) => {
  const [categoryName, setCategoryName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!categoryName) {
      alert("Category name is required!");
      return;
    }

    try {
      const res = await axios.post(
        "https://bistro-boss-server-green-xi.vercel.app/carts",
        {
          name: categoryName,
        }
      );
      toast.success("Successfully Category added !");
      setCategoryName("");
      if (typeof onClose === "function") {
        onClose();
      }
    } catch (error) {
      console.error("Failed to add category", error);
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
        <h2 className="text-lg font-semibold mb-2">Add Category</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Food Name"
            required
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            className="w-full mb-4 text-xs border border-white px-2 py-2 rounded-full bg-[#5b544a]  placeholder-white focus:outline-none"
          />

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
};

export default AddCategoryModal;