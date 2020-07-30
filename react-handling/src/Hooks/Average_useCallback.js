import React, { useState, useReducer, useMemo, useCallback } from "react";

const getAverage = (numbers) => {
  console.log("Loading ...");
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");

  const onChange = useCallback((e) => {
    setNumber(e.target.value);
  }, []);

  const onInsert = useCallback(() => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber("");
  }, [number, list]);

  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input value={number} onChange={onChange} />
      <button onClick={onInsert}>CHECK</button>
      <ul>
        {list.map((value, index) => (
          <li ket={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>Average : </b> {avg}
      </div>
    </div>
  );
};

export default Average;