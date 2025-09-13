import { useContext, useEffect, useState } from 'react';
import { CounterContext } from '../context/CounterContext';

function InfoBox() {
  const { counter } = useContext(CounterContext);
  const [resto, setResto] = useState(0);

  useEffect(() => {
    setResto(counter % 2);
  }, [counter]);

  return (
    <div>
      <p>O resto da divisão por 2 do contador é: {resto}</p>
    </div>
  );
}

export default InfoBox;
