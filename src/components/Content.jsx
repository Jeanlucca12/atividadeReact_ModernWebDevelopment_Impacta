import { useContext } from 'react';
import { CounterContext } from '../context/CounterContext';
import Header from './Header';
import List from './List';
import Button from './Button';
import InfoBox from './InfoBox';

function Content() {
  const { counter, setCounter } = useContext(CounterContext);

  const increment = () => {
    alert(`Botão clicado ${counter} vezes!`);
    setCounter(counter + 1);
  };

  return (
    <div>
      <Header text="Aprendendo React do Zero!" />
      <p>Este é um exemplo simples de um componente React.</p>
      <List />
      <Button text="Clique aqui" onClickFct={increment} />
      <InfoBox />
    </div>
  );
}

export default Content;
