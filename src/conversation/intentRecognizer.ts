import { Intent } from './type';

export const keywordMap: Record<Intent, string[]> = {
    [Intent.SAUDACAO]: [
        'oi',
        'olá',
        'ola',
        'e aí',
        'opa',
        'eai',
        'bom dia',
        'boa tarde',
        'boa noite',
        'oi joi',
        'olá joi',
    ],
    [Intent.PERGUNTA_NOME]:[
        'qual seu nome',
        'como você chama',
        'como voce se chama',
        'quem é você',
    ],
    [Intent.ESTADO_POSITIVO]: [
        'bem',
        'estou bem',
        'to bem',
        'tô bem',
        'muito bem',
        'feliz',
        'ótimo',
        'ótima',
        'tranquilo',
        'tranquila',
        'de boa',
        'tudo certo',
    ],
    [Intent.ESTADO_NEGATIVO]: [
        'mal',
        'triste',
        'péssimo',
        'péssima',
        'desanimado',
        'desanimada',
        'não tô bem',
        'não to bem',
        'não estou bem',
        'to mal',
        'tô mal',
        'cansado',
        'cansada',
    ],
    [Intent.ABERTURA_EMOCIONAL]: ['aconteceu', 'aconteceram'],
    [Intent.ACEITOU_CONVERSAR]: ['sim', 'quero', 'pode ser'],
    [Intent.RECUSOU_CONVERSAR]: [
        'não',
        'não quero',
        'prefiro não',
        'deixa pra lá',
    ],
    [Intent.PEDIDO_AJUDA]: [
        'me ajuda',
        'ajuda',
        'preciso de ajuda',
        'pode me ajudar',
        'quero ajuda',
        'você pode me ajudar',
    ],
    [Intent.DESPEDIDA]: [
        'tchau',
        'falou',
        'até mais',
        'até',
        'fui',
        'tenho que ir',
        'até logo',
    ],
    [Intent.NAO_ENTENDI]: [],
};

export function recognizeIntent(text: string) {
    const lower = text.toLowerCase();

    for (const [intent, keywords] of Object.entries(keywordMap)) {
        const encontrou = keywords.some((palavra) => lower.includes(palavra));

        if (encontrou) {
            return intent as Intent; //type assertion
        }
    }
    return Intent.NAO_ENTENDI;
}
