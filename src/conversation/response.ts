import { Intent } from "./type";

export const responses: Record<Intent, string[]> = {

    [Intent.SAUDACAO]: [
        'Oi! Tudo bem?',
        'Olá! Que bom falar com você.',
        'Oi! Eu sou a Joi. Como você está?'
    ],

    [Intent.PERGUNTA_NOME]: [
        'Meu nome é Joi.',
        'Eu sou a Joi, sua assistente virtual.'
    ],

    [Intent.IDENTIDADE]: [
        'Eu sou uma assistente virtual criada para conversar e ajudar.',
        'Sou uma assistente de inteligência artificial, mas estou aprendendo cada vez mais.'
    ],

    [Intent.ESTADO_POSITIVO]: [
        'Que bom saber disso!',
        'Fico feliz que você esteja bem',
        'Ótimo! Espero que continue assim.'
    ],

    [Intent.ESTADO_NEGATIVO]: [
        'Poxa... sinto muito. Quer me contar o que aconteceu?',
        'Sinto muito que você esteja passando por isso.',
        'Estou aqui para ouvir você.'
    ],

    [Intent.MOTIVACAO]: [
        'Você não precisa resolver tudo agora. Um passo de cada vez.',
        'Continue tentando. Pequenos progressos também importam.'
    ],

    [Intent.CONVERSA]: [
        'Claro, podemos conversar.',
        'Estou aqui com você.'
    ],

    [Intent.PEDIDO_AJUDA]: [
        'Claro, vou tentar ajudar.',
        'Me explica o que você precisa.'
    ],

    [Intent.AGRADECIMENTO]: [
        'Por nada!',
        'Fico feliz em ajudar.',
        'Sempre que precisar, estou aqui.'
    ],

    [Intent.DESPEDIDA]: [
        'Tchau! Foi bom conversar com você.',
        'Até mais! Vou estar aqui quando precisar.'
    ],

    [Intent.ACEITOU_CONVERSAR]: [
        'Tudo bem, pode me contar.',
        'Conta mais hahah',
    ],

    [Intent.RECUSOU_CONVERSAR]: [
        'Tudo bem. Vou respeitar seu espaço.'
    ],

    [Intent.ABERTURA_EMOCIONAL]: [
        'Entendi... pode continuar, estou ouvindo.',
        'Estou aqui. Me conta o que aconteceu.'
    ],

    [Intent.NAO_ENTENDI]: [
        'Não entendi muito bem. Pode repetir?',
        'Ainda estou aprendendo. Pode falar de outra forma?'
    ]

};

export function getRandomResponse(intent: Intent): string {

    const options = responses[intent];

    if (!options || options.length === 0) {
        return 'Não sei o que responder ainda.';
    }

    const randomIndex = Math.floor(
        Math.random() * options.length
    );

     return options[randomIndex] ?? 'Não sei o que responder ainda.';

}