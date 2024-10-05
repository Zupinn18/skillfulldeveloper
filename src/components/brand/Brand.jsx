import React from "react";
import { motion, useMotionValue, useTransform, useAnimationFrame } from "framer-motion";
import img1 from "../../assets/google.png";
import img2 from "../../assets/fed.png";
import img3 from "../../assets/itc.png";
import img4 from "../../assets/tcs.png";
import img5 from "../../assets/amazon.png";

const images = [
  img1,
  img2,
  img3,
  img4,
  img5
];

function InfiniteLoopSlider({ children, speed = 5 }) {
    const baseX = useMotionValue(0);

    useAnimationFrame((t, delta) => {
      // Adjust the speed here by changing the multiplier
      baseX.set(baseX.get() - (delta / 1000) * speed);
      if (baseX.get() <= -100) {
        baseX.set(0);
      }
    });

  const x = useTransform(baseX, (v) => `${v}%`);

  return (
    <div className="overflow-hidden whitespace-nowrap">
      <motion.div className="inline-block" style={{ x }}>
        {children}
      </motion.div>
      <motion.div className="inline-block" style={{ x }}>
        {children}
      </motion.div>
    </div>
  );
}

export default function Brand() {
  return (
    <div className="flex justify-center items-center mt-[150px] ">
      <InfiniteLoopSlider duration={20}>
        {images.map((src, index) => (
          <img key={index} src={src} alt={`image-${index}`} className="inline-block w-36 mx-10" />
        ))}
      </InfiniteLoopSlider>
    </div>
  );
}