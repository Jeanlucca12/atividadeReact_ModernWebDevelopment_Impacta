import React from 'react';
import { CounterContextProvider } from './context/CounterContext';
import Content from './components/Content';

function App() {
  return (
    <CounterContextProvider>
      <Content />
    </CounterContextProvider>
  );
}

export default App;
