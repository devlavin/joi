import * as readline from 'readline';
import { recognizeIntent } from './conversation/intentRecognizer';
import { getResponse } from './conversation/responseEngine';
import { ConversationState } from './conversation/type';

let currentState = ConversationState.INICIO;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

console.log('Joi: Oi! Digite algo pra começar (ou "sair" para encerrar)\n');

rl.on('line', (texto) => {
    if (texto.trim().toLowerCase() === 'sair') {
        rl.close();
        return;
    }

    const intent = recognizeIntent(texto);
    const response = getResponse(currentState, intent);

    console.log(`Joi: ${response.message}\n`);

    currentState = response.nextState;
});

rl.on('close', () => {
    console.log('Joi: Até mais!');
    process.exit(0);
});
