const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/lumo', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const ExpenseSchema = new mongoose.Schema({
  amount: Number,
  mood: String,
  createdAt: { type: Date, default: Date.now },
});
const Expense = mongoose.model('Expense', ExpenseSchema);

app.post('/expenses', async (req, res) => {
  const { amount, mood } = req.body;
  const newExpense = new Expense({ amount, mood });
  await newExpense.save();
  res.status(201).json(newExpense);
});

app.get('/expenses', async (req, res) => {
  const allExpenses = await Expense.find().sort({ createdAt: -1 });
  res.json(allExpenses);
});

app.listen(5000, () => console.log('Server running on http://localhost:5000'));
