import React, { useState, useEffect } from "react";

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
      {data && Object.keys(data).map((championId, index) => {
        const champion = data[championId];
        const imageUrl = `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${championId}_0.jpg`;
        const isHovered = hoveredIndex === index;

        return (
          <div
            key={championId}
            className={`w-full h-full object-cover p-5 ${isHovered ? 'hover:scale-105 hover:clip-path' : ''}`}
            style={{
                clipPath: isHovered ? '' : 'polygon(68% 0, 100% 15%, 100% 100%, 0 100%, 0 0)',
                transition: 'transform 0.5s ease-in-out, clip-path 0.8s ease-in-out',  
            }}
              
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <img
              className="w-full h-[80%] object-cover "
              src={imageUrl}
              alt={champion.name}
            />
            <div className="w-full h-[60px] flex justify-center items-center bg-[#061C25] duration-400 hover:bg-[#006680]">
              <p className="text-2xl text-white">{champion.name}</p>
            </div>
          </div>
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
        const response = await fetch("https://ddragon.leagueoflegends.com/cdn/14.3.1/data/ko_KR/champion.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
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

          
          
          
          
        
          
