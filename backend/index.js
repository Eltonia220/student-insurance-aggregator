const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // Allow frontend-backend communication

// Mock data endpoint (replace with real API later)
app.get('/api/plans', (req, res) => {
  res.json([
    { id: 1, name: "Basic Plan", price: 30, coverage: "Accidents" },
    { id: 2, name: "Premium Plan", price: 50, coverage: "Accidents + Illness" }
  ]);
});

const PORT = 3001;
app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));