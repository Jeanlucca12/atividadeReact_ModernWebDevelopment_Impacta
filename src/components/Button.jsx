import CounterLabel from './CounterLabel';

function Button({ text, onClickFct }) {
  return (
    <button onClick={onClickFct}>
      {text}. <CounterLabel />
    </button>
  );
}

export default Button;
