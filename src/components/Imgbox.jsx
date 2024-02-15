import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Imgbox() {
    const [isHovered, setIsHovered] = useState(false);

    const hoverScale = 1.1;
    return (
        <div className="w-[680px] h-[186px] border border-white ml-3 flex items-center bg-white rounded-xl">
            <motion.div whileHover={{ scale: hoverScale }}>
                <img
                    className="w-[1/2] h-full object-cover"
                    src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt0892d4110e805ae5/65b47ada60a27526967fc27e/013024_Smolder_Champion_Spotlight_Banner.jpg?quality=90&crop=12%3A7&width=300"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                />
            </motion.div>
            <div className="flex flex-col pl-5 ">
                <span className="text-[#22CBE6] font-bold text-sm">게임 업데이트</span>
                <span className="text-black text-3xl font-bold">스몰더 챔피언 집중탐구</span>
            </div>
        </div>
    );
}
