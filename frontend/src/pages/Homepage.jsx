import React from "react";
// import toast from "react-hot-toast";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useState, useEffect } from "react";

const Homepage = () => {
  const [notes, setNotes] = useState([]);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotes = async () => {
      setLoading(true);
      try {
        const res = await axios.get("http://localhost:7000/api/notes");
        setNotes(res.data || []);
      } catch (error) {
        console.error("Error fetching notes:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNotes();
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
    </div>
  );
};

export default Homepage;
