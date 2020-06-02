import React from 'react';
import CurrentValue from './CurrentValue';
import AddTransaction from './AddTransaction';
import HighTransaction from './HighTransaction';
import ListTransaction from './ListTransaction';
import TotalTransaction from './TotalTransaction';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header>
        <CurrentValue />
        <AddTransaction />
        <HighTransaction />
      </header>
      <main>
        <ListTransaction />
      </main>
      <footer>
        <TotalTransaction />
      </footer>
    </div>
  );
}

export default App;
