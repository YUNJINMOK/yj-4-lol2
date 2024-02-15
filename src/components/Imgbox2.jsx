import { motion } from 'framer-motion';
import { useState } from 'react';

export function Imgbox2({ url, title, text }) {
    const [isHovered, setIsHovered] = useState(false);
    const hoverScale = 1.1;
    return (
        <div className="w-[500px] h-[186px] flex border border-gray-800">
            <motion.div whileHover={{ scale: hoverScale }} className="w-[40%] h-full">
                <img
                    className="w-full h-full object-cover"
                    src={url}
                    alt={title}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                />
            </motion.div>
            <div className="w-[60%] h-full flex flex-col items-start justify-center pl-5">
                <span className="text-[#22CBE6] font-bold text-sm">{title}</span>
                <span className="text-black text-xl font-bold">{text}</span>
            </div>
        </div>
    );
}
