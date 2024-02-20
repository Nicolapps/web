import { FC } from "react";
import { motion } from "framer-motion";
import timeframe1 from "./timeframe-1.svg";
import Image from "next/image";
import { cn } from "@/lib/tailwind";

export const Canvas: FC<{ slide: number }> = ({ slide }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={cn(
        "absolute w-full top-10 h-[calc(60%-40px)] flex items-center justify-center text-black bg-white transition-all",
        slide === 4 && "w-[calc(100%-230px)]"
      )}
    >
      <Image priority src={timeframe1} alt="TimeFrame" />
    </motion.div>
  );
};