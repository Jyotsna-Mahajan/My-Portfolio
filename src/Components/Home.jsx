import { useState, useEffect } from "react";
import "./Home.css";

export default function Home({ darkMode }) {
  const text = "A web Developer";
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let speed = isDeleting ? 80 : 120; // deleting is slightly faster

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        setDisplayText(text.slice(0, index + 1));
        setIndex(index + 1);

        // When full text typed → start deleting
        if (index + 1 === text.length) {
          setTimeout(() => setIsDeleting(true), 1000); // wait 1 sec before deleting
        }
      } else {
        // Deleting
        setDisplayText(text.slice(0, index - 1));
        setIndex(index - 1);

        // When fully deleted → start typing again
        if (index - 1 === 0) {
          setIsDeleting(false);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [index, isDeleting, text]);


  return (
    <section className={`home ${darkMode ? "dark" : "light"}`}>
      <h1>Hi, I'm Jyotsna Mahajan</h1>
      <h2 className="typing-text">{displayText}</h2>
      
    </section>
  );
}
