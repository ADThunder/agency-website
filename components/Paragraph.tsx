"use client";

import { motion } from "framer-motion";
import { opacityAnimation } from "@/utils/motion";
import { PropTypes } from "@/types";

const Paragraph = ({ children, cn }: PropTypes) => {
  return (
    <motion.p
      variants={opacityAnimation}
      initial="hidden"
      animate="show"
      className={`text-softblack font-semibold ${cn}`}
    >
      {children}
    </motion.p>
  );
};

export default Paragraph;
