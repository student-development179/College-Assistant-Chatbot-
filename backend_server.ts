
/**
 * GTU DESIGN ENGINEERING PROJECT: BACKEND
 * FILE: server.ts
 * 
 * Instructions:
 * 1. Initialize npm project: npm init -y
 * 2. Install dependencies: npm install express pg dotenv cors
 * 3. Run: node server.js
 */


const express = require('express');
const { Client } = require('pg');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

// DATABASE CONNECTION (NEON POSTGRES)
const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

client.connect()
  .then(() => console.log('Connected to Neon PostgreSQL'))
  .catch(err => console.error('Connection error', err.stack));

// CHAT API ENDPOINT
app.post('/chat', async (req, res) => {
  const { message } = req.json();
  
  try {
    // ILIKE keyword matching logic
    const query = `
      SELECT description, category 
      FROM branches_knowledge 
      WHERE keyword ILIKE $1 
      OR branch_name ILIKE $1 
      LIMIT 1
    `;
    const values = [`%${message}%`];
    
    const result = await client.query(query, values);
    
    if (result.rows.length > 0) {
      res.json({ 
        response: result.rows[0].description, 
        category: result.rows[0].category 
      });
    } else {
      res.json({ response: "I couldn't find that branch info in our database.", category: "Fallback" });
    }
  } catch (err) {
    res.status(500).json({ error: "Database error" });
  }
});

const PORT = 3001;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));

