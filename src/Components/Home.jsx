import { useState, useEffect } from "react";
import "./Home.css";

export default function Home({ darkMode }) {
  
  return (
    <section className={`home ${darkMode ? "dark" : "light"}`}>
      <h1>Hi, I'm Jyotsna Mahajan</h1>
      
    </section>
  );
}
