import { createInterface } from 'node:readline';
import { recognizeIntent } from './conversation/intentRecognizer';
import { Intent } from './conversation/type';

const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
});

console.log('Joi iniciada!');

function conversar() {
    rl.question('Você: ', (texto: string) => {
        const intent = recognizeIntent(texto);

        // Se a pessoa se despedir, encerra a conversa
        if (intent === Intent.DESPEDIDA) {
            console.log('Joi: Foi bom conversar com você. Até logo! 👋');
            rl.close();
            return;
        }

        console.log(`Joi: Reconheci -> ${intent}`);

        conversar();
    });
}
conversar();

/*import { recognizeIntent } from './conversation/intentRecognizer';

const texto = 'qual seu nome';
const intent = recognizeIntent(texto);

console.log(`Texto: "${texto}"`);
console.log(`Intenção reconhecida: ${intent}`);*/
