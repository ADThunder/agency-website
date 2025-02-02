"use client";

import { opacityAnimation } from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";

type props = {
  cn: string;
  src: string;
  variant?: {
    hidden: {};
    show: {};
  };
};

const ImageContainer = ({ cn, src, variant = opacityAnimation }: props) => {
  return (
    <motion.div
      variants={variant}
      initial="hidden"
      animate="show"
      className={`bg-softwhite ${cn}`}
    >
      <Image
        src={src}
        alt="image"
        fill
        priority
        sizes="(min-width:1024px) 100vw, (min-width:768px) 50vw, 33vw"
        className="object-cover rounded-lg"
      />
    </motion.div>
  );
};

export default ImageContainer;
