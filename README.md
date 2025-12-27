# Assignment Project

A simple demo: React + Vite frontend and Express backend for displaying a student's assessment report. The frontend fetches user data by username and shows scores with progress bars.

Tech stack
- **Frontend**: React + Vite + TypeScript
- **Backend**: Node.js + Express
- **API**: REST (JSON)

# Project structure

root/
├── frontend/
│   ├── src/home.tsx          # Reads user from URL & renders report
│   └── src/api/fetchapi.js   # API fetch helper
└── backend/
        └── index.js              # Express server with sample data

# Backend API

- Default port: 3000 (or set PORT)

**Endpoints**
- GET /
    - Returns: { "message": "Hello from Express server" }
- GET /health
    - Health check (200 OK)
- GET /api/:username
    - Sample users: rahul, smriti, smran

Sample response

{
    "data": {
        "name": "rahul",
        "Overall_score": "8/9",
        "Score": [
            { "Pronunciation": "9/9" },
            { "Fluency": "8/9" },
            { "Vocabulary": "7/9" },
            { "Grammar": "8.5/9" }
        ]
    }
}

**Frontend behavior**
- Route: /:user (e.g. http://localhost:5173/rahul)
- Reads username from URL and calls backend (fetchData)
- Converts "X/Y" scores to percentages for progress bars

**Running locally**
1) Install dependencies
```bash
cd backend && npm install
cd ../frontend && npm install
```
2) Start backend (recommended port 4000)
```bash
cd backend
PORT=4000 npm run dev
```
Or change frontend API URL to use port 3000

3) Start frontend
```bash
cd frontend
npm run dev
```

Open in browser:
- http://localhost:5173/rahul
- http://localhost:5173/smriti
- http://localhost:5173/smran

# Common issues
- ERR_CONNECTION_REFUSED — backend not running or wrong port
- CORS errors — ensure backend allows http://localhost:5173
- No data shown — check console logs and backend port

# Recommendation
- Use an environment variable for the API base URL (example .env):
```env
VITE_API_BASE_URL=http://localhost:4000/api
```
And in the frontend:
```js
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
```

Test API
```bash
curl http://localhost:4000/api/rahul
```