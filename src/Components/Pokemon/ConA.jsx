import React, { useState, useEffect } from "react";
import axios from "axios";

const ConA = () => {
  const [num, setNum] = useState();
  const [name, setName] = useState();
  const [moves, setMoves] = useState();
//   const [movesName, setMovesName] = useState();
    const [weight, setWeight] = useState();
    
  useEffect(() => {
    const getData=async() =>{
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
      setName(res.data.name);
      setMoves(res.data.moves.length);
    //   setMovesName(res.data.moves[4]);
      setWeight(res.data.weight);
    };
    getData();
  }, [num]);
  return (
    <div>
      <h1>
        You choose <span style={{ color: "red" }}>{num}</span> value
      </h1>
      <h1>
        My name is <span style={{ color: "green" }}>{name}</span>
      </h1>
      <h1>
        My totals moves <span style={{ color: "red" }}>{moves}</span>
      </h1>
      <h1>
        {/* My moves name <span style={{ color: "red" }}>{movesName}</span> */}
      </h1>
      <h1>
        My weight is <span style={{color:'red'}}>{weight}</span>
      </h1>

      <select value={num} onChange={(e) => setNum(e.target.value)}>
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="25">25</option>
      </select>
    </div>
  );
};

export default ConA;
