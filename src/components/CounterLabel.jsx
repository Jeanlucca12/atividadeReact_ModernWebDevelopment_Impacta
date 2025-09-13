import { useContext } from 'react';
import { CounterContext } from '../context/CounterContext';

function CounterLabel() {
  const { counter } = useContext(CounterContext);
  return <span>Já foram clicados {counter} vezes!</span>;
}

export default CounterLabel;
