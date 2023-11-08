import React from 'react';
import { AppUI } from './AppUI';
import { TodoProvider } from '../TodoContext';
// import { useLocalStorage } from './useLocalStorage';



function App() {
  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
}

export default App;
