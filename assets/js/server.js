import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const API_KEY = "AIzaSyDDhe13f1JECF1Hom0Xil3XT_xW0EWrMxE";
const MODEL_NAME = "gemini-2.5-flash";
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL_NAME}:generateContent?key=${API_KEY}`;

app.get('/api/gemini', (req, res) => {
  res.send("Servidor Amina rodando");
});

app.post('/api/gemini', async (req, res) => {
  try {
    // O frontend envia: { contents: [{ role: "user", parts: [{ text: "..." }] }] }
    const payload = req.body;

    console.log("Payload recebido do frontend:");
    console.log(JSON.stringify(payload, null, 2));

    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    const data = await response.json();

    console.log("Resposta da API do Gemini:");
    console.log(JSON.stringify(data, null, 2));

    if (!response.ok) {
      return res.status(response.status).json(data);
    }

    res.json(data);
  } catch (error) {
    console.error("Erro no backend:", error);
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy backend rodando em http://localhost:${PORT}`);
});
