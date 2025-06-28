import React, { useState } from 'react';

function ExpenseLogger() {
  const [amount, setAmount] = useState('');
  const [mood, setMood] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:5000/expenses', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount, mood })
    });
    await res.json();
    setAmount('');
    setMood('');

    let nudge = '';
    switch (mood) {
      case 'happy': nudge = 'Enjoy the moment, but keep tracking ✨'; break;
      case 'stress': nudge = 'Stress spending happens. Be gentle with yourself 💛'; break;
      case 'impulse': nudge = 'Try a 5-min pause before next impulse buy ⚡'; break;
      case 'reward': nudge = 'You earned it! Plan your rewards mindfully 🎉'; break;
      default: nudge = 'Keep journaling your journey!';
    }
    setMessage(nudge);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <select value={mood} onChange={(e) => setMood(e.target.value)} required>
        <option value="">Select Mood</option>
        <option value="happy">Happy 😊</option>
        <option value="stress">Stress 😩</option>
        <option value="impulse">Impulse ⚡</option>
        <option value="reward">Reward 🏆</option>
      </select>
      <button type="submit">Log Expense</button>
      {message && <p>{message}</p>}
    </form>
  );
}

export default ExpenseLogger;
