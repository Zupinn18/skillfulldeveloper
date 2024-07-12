import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import img1 from "../../../assets/skills/React.png";
import img2 from "../../../assets/skills/Bash.png";
import img3 from "../../../assets/skills/Bootstrap.png";
import img4 from "../../../assets/skills/Git.png";
import img5 from "../../../assets/skills/Github.png";
import img6 from "../../../assets/skills/NodeJs.png";
import img7 from "../../../assets/skills/MongoDB.png";
import img8 from "../../../assets/skills/python.png";
import img9 from "../../../assets/skills/CSS.png";
import img10 from "../../../assets/skills/java.png";
import img11 from "../../../assets/skills/Redux.png";
import img12 from "../../../assets/skills/Tailwind.png";
import img13 from "../../../assets/skills/C.png";
import img14 from "../../../assets/skills/C++.png";
import img15 from "../../../assets/skills/js.png";
import img16 from "../../../assets/skills/mysql.png";

const AnimationCar = ({ toggle, setToggle }) => {
  return (
    <section className="w-full mt-[70px] px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
      <div>
        <span className={`block mb-4 text-xs md:text-sm font-medium ${toggle === false ? "text-[#12372A]" : "text-[#fbfada]"}`}>
          Better every day
        </span>
        <h3 className={`text-4xl md:text-5xl font-semibold ${toggle === false ? "text-[#12372A]" : "text-[#fbfada]"}`}>
          Let's change it up a bit
        </h3>
        <p className={`text-base font-semibold md:text-lg my-4 md:my-6 ${toggle === false ? "text-[#436850]" : "text-[#adbc9f]"}`}>
          Realize your career ambitions with our 100% placement promise, connecting you to top employers in need of skilled professionals.
        </p>
        <button className="bg-[#12372A] text-white font-medium py-2 px-4 rounded transition-all hover:bg-[#0c251c] active:scale-95">
          Find a course
        </button>
      </div>
      <ShuffleGrid />
    </section>
  );
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  { id: 1, src: img1 },
  { id: 2, src: img2 },
  { id: 3, src: img3 },
  { id: 4, src: img4 },
  { id: 5, src: img5 },
  { id: 6, src: img6 },
  { id: 7, src: img7 },
  { id: 8, src: img8 },
  { id: 9, src: img9 },
  { id: 10, src: img10 },
  { id: 11, src: img11 },
  { id: 12, src: img12 },
  { id: 13, src: img13 },
  { id: 14, src: img14 },
  { id: 15, src: img15 },
  { id: 16, src: img16 },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full flex self-center bg-no-repeat bg-center bg-contain"
      style={{ backgroundImage: `url(${sq.src})` }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-4 h-[560px] gap-4">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default AnimationCar;
