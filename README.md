# LUMO – Emotional Finance Journal

LUMO helps users understand the emotional reasons behind their spending habits.

## Features
- Mood-based expense tracking
- Pie chart visualization
- Kind nudges based on mood
- Optional AI journal insight

## Run Instructions

### Backend
```
cd backend
npm install
node server.js
```

### Frontend
```
cd frontend
npm install
npm start
```

### AI Engine (optional)
```
cd ai_engine
pip install textblob
python -m textblob.download_corpora
python emotion_analysis.py
```
