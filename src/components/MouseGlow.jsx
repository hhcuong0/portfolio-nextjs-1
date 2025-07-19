import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

const MouseGlow = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Tăng độ phản hồi nhanh và nhạy hơn
  const springX = useSpring(mouseX, { stiffness: 300, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 25 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX - 300);
      mouseY.set(e.clientY - 300);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
        <motion.div
    className="fixed w-[600px] h-[600px] rounded-full pointer-events-none z-10"
    style={{
        left: springX,
        top: springY,
        background: "radial-gradient(circle at center, rgba(128, 78, 255, 0.25), rgba(0, 0, 0, 0))",
        filter: "blur(100px)",
        opacity: 1,
    }}
    />
  );
};

export default MouseGlow;
