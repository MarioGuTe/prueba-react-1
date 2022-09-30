import { useState, useEffect } from "react";

const MiApi = (props) => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    consultarInformacion();
  }, []);

  const consultarInformacion = async () => {
    const url = "https://pokeapi.co/api/v2/pokemon/";
    const response = await fetch(url);
    const data = await response.json();
    setInfo(data.results);
  };

  return (
    <div className="poke-container">
      {info.map((d, idx) => {
        let src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
          idx + 1
        }.png`;
        if (d.name.includes(props.search)) {
          return (
            <div>
              <h2>{d.name}</h2>
              <img src={src} alt="" />
              <h3>Nro: {idx + 1}</h3>
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
};

export default MiApi;
