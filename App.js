import React from 'react';
import ExpenseLogger from './components/ExpenseLogger';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div>
      <h1>LUMO – Emotional Finance Journal</h1>
      <ExpenseLogger />
      <Dashboard />
    </div>
  );
}

export default App;
