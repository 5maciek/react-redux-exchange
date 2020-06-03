import React from 'react';
import CurrentValue from './components/Header/CurrentValue';
import AddTransaction from './components/Header/AddTransaction';
import HighTransaction from './components/Header/HighTransaction';
import ListTransaction from './components/Main/ListTransaction';
import TotalTransaction from './components/Footer/TotalTransaction';

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
