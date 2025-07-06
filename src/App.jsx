"use client";

import { useState } from "react";
import "./App.css";
import useMousePosition from "./useMousePosition";
import { motion } from "framer-motion";

function App() {
  const { x, y } = useMousePosition();
  const [isHovered, setIsHovered] = useState(false);
  const size = isHovered ? 400 : 40;
  return (
    <main className="main">
      <motion.div
        className="mask"
        animate={{
          webkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
          webkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut" }}
      >
        <p
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
          doloribus! Hic odit fugit beatae mollitia cumque voluptate, amet
          aliquam quos eum, accusantium voluptatum eligendi expedita neque ad
          enim ipsum nam.
        </p>
      </motion.div>
      <div className="body">
        <p>
          tempora accusamus--
          <span className="span">
            architecto, consequatur hic tenetur debitis veritatis deserunt rem
            aperiam!
          </span>{" "}
          Expedita sequi aspernatur quas earum, suscipit possimus cum laborum
          alias dolores molestiae.
        </p>
      </div>
    </main>
  );
}

export default App;
