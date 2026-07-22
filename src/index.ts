import { recognizeIntent } from './conversation/intentRecognizer';
import { getResponse } from './conversation/responseEngine';
import { ConversationState } from './conversation/type';

let currentState = ConversationState.INICIO;

function falar(texto: string) {
  const intent = recognizeIntent(texto);

  console.log('Estado:', currentState);
  console.log('Intent:', intent);

  const response = getResponse(currentState, intent);

  console.log(`Você: ${texto}`);
  console.log(`Joi: ${response.message}`);

  currentState = response.nextState;
}

falar('oi');
falar('não estou bem');
falar('sim');
falar('sim');
falar('aconteceu uma coisa');