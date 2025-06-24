"use client";
import { useEffect, useState } from "react";
import axios from "axios";

const useCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCategories = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/categories");
      
      const rawCategories = res.data.data;

      // ✅ Filter distinct categories by `name`
      const uniqueCategoriesMap = new Map();
      rawCategories.forEach((cat) => {
        if (!uniqueCategoriesMap.has(cat.name)) {
          uniqueCategoriesMap.set(cat.name, cat); // use cat._id or keep original
        }
      });

      const uniqueCategories = Array.from(uniqueCategoriesMap.values());

      setCategories(uniqueCategories);
    } catch (err) {
      setError("Failed to fetch categories");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return { categories, loading, error };
};

export default useCategories;
