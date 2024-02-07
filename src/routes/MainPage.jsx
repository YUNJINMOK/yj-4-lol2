import { useEffect } from "react";
import { useState } from "react";


export default function MainPage() {
  const [data, setData] = useState();

useEffect(() => {
  const url = "https://ddragon.leagueoflegends.com/cdn/14.3.1/data/ko_KR/champion.json";

  fetch(url)
    .then((res) => res.json())
    .then((jsonData) => {
      setData(jsonData.data);
    })
    .catch((error) => {
      console.error('Error fetching champion data:', error);
    });
}, []);


if (data) {
  const championIds = Object.keys(data);
  console.log(championIds);
  
}
return (
  <>
  <div className="flex flex-wrap justify-around gap-10">
    {data && Object.keys(data).map(championId => {
      const champion = data[championId];
      const imageUrl = `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${championId}_1.jpg`;

      return (
        <div key={championId}>
          <img className="w-[250px] h-[400px] object-cover" src={imageUrl} alt={champion.name} />
          <p>{champion.name}</p>
        </div>
      );
    })}
    </div>
  </>
);

}
