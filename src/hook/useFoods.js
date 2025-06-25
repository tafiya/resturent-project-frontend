"use client";
import { useEffect, useState } from "react";
import axios from "axios";

const useFoods = () => {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchFoods = async () => {
    try {
      const res = await axios.get("https://bistro-boss-server-green-xi.vercel.app/menu");
      setFoods(res.data);
    } catch (err) {
      setError("Failed to fetch foods");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFoods();
  }, []);

  return { foods, loading, error };
};

export default useFoods;
