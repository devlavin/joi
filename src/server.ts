import express from 'express';
import cors from 'cors';
import { recognizeIntent } from './conversation/intentRecognizer';
import { getResponse } from './conversation/responseEngine';
import { ConversationState } from './conversation/type';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.post('/falar', (req, res) => {
  const { texto, state } = req.body;

  const intent = recognizeIntent(texto);
  const response = getResponse(state as ConversationState, intent);

  res.json(response);
});

app.listen(PORT, () => {
  console.log(`Servidor da Joi rodando em http://localhost:${PORT}`);
});