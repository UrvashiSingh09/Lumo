import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';

function Dashboard() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/expenses')
      .then(res => res.json())
      .then(data => setExpenses(data));
  }, []);

  const moodCounts = expenses.reduce((acc, item) => {
    acc[item.mood] = (acc[item.mood] || 0) + item.amount;
    return acc;
  }, {});

  const data = {
    labels: Object.keys(moodCounts),
    datasets: [
      {
        data: Object.values(moodCounts),
        backgroundColor: ['#f9c74f', '#f94144', '#90be6d', '#577590']
      }
    ]
  };

  return (
    <div>
      <h2>Mood-Based Spending Summary</h2>
      <Pie data={data} />
    </div>
  );
}

export default Dashboard;
