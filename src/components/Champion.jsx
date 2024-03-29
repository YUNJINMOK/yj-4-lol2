import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function ChampionGrid({ data }) {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    return (
        <div className="max-w-[1440px] grid grid-cols-5">
            {data &&
                Object.keys(data).map((championId, index) => {
                    const champion = data[championId];
                    const imageUrl = `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${championId}_0.jpg`;
                    const isHovered = hoveredIndex === index;

                    return (
                        <Link to="Detail">
                            <motion.div
                                key={championId}
                                className="w-full h-full object-cover p-5 overflow-hidden"
                                style={{
                                    clipPath: isHovered ? '' : 'polygon(68% 0, 100% 15%, 100% 100%, 0 100%, 0 0)',
                                }}
                                whileHover={{
                                    scale: 1.05,
                                    transition: { duration: 0.5, ease: 'easeInOut' },
                                }}
                                initial={{ clipPath: 'polygon(68% 0, 100% 15%, 100% 100%, 0 100%, 0 0)' }}
                                animate={{
                                    scale: isHovered ? 1.05 : 1,
                                    clipPath: isHovered ? '' : 'polygon(68% 0, 100% 15%, 100% 100%, 0 100%, 0 0)',
                                }}
                                onMouseEnter={() => handleMouseEnter(index)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <img className="w-full h-[80%] object-cover" src={imageUrl} alt={champion.name} />
                                <motion.div
                                    className="w-full h-[60px] flex justify-center items-center"
                                    style={{ backgroundColor: isHovered ? '#006680' : '#061C25' }}
                                    transition={{ duration: 0.6, ease: 'easeInOut' }}
                                >
                                    <p className="text-2xl text-white">{champion.name}</p>
                                </motion.div>
                            </motion.div>
                        </Link>
                    );
                })}
        </div>
    );
}

export default function Champion() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://ddragon.leagueoflegends.com/cdn/14.3.1/data/ko_KR/champion.json');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const jsonData = await response.json();
                setData(jsonData.data);
            } catch (error) {
                console.error('Error fetching champion data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <ChampionGrid data={data} />
        </div>
    );
}
