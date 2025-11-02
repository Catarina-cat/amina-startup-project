import express from 'express';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { solicitarResposta } from './ai-gemini.js';

const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Raiz do projeto onde estão os HTMLs
app.use(express.static(path.join(__dirname, '../../')));

// Pasta assets para CSS, JS, imagens
app.use('/assets', express.static(path.join(__dirname, '../../assets')));

app.use(express.json());

app.post("/api/gemini", async (req, res) => {
    const { prompt } = req.body;
    console.log(req.body);

    try {
        const resposta = await solicitarResposta(prompt);
        res.json({ resposta });
    } catch (e) {
        console.error("Erro ao chamar Gemini:", e);
        res.status(500).json({ error: "Erro interno do servidor." });
    }
});

// Para rotas que não existam, devolver o index.html 
app.get(/.*/, (req, res) => {
   res.sendFile(path.join(__dirname, '../../index.html'));
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
