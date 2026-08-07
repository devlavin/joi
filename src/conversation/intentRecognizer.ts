import { Intent } from './type';

export const keywordMap: Record<Intent, string[]> = {
    [Intent.ABERTURA_EMOCIONAL]: [
        'aconteceu',
        'aconteceram',
        'aconteceu uma coisa',
        'alguns problemas',
    ],
    [Intent.SAUDACAO]: [
        'oi',
        'oii',
        'olá',
        'e aí',
        'opa',
        'eai',
        'bom dia',
        'boa tarde',
        'boa noite',
        'oi joi',
        'olá joi',
    ],
    [Intent.PERGUNTA_NOME]: [
        'qual seu nome',
        'como você chama',
        'como voce se chama',
        'quem é você',
    ],
    [Intent.IDENTIDADE]: [
        'o que você é',
        'o que voce faz',
        'o que voce pode fazer',
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
        'tô mal',
        'cansado',
        'cansada',
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
        'já passou',
    ],
    [Intent.MOTIVACAO]: [],
    [Intent.CONVERSA]: [],
    [Intent.ACEITOU_CONVERSAR]: ['sim', 'quero', 'pode ser'],
    [Intent.RECUSOU_CONVERSAR]: [
        'não',
        'nao',
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
    [Intent.AGRADECIMENTO]: [
        'obrigada',
        'obrigado',
        'brigada',
        'brigado',
        'obrg',
        'valeu',
        'obrigada pela ajuda',
    ],
    [Intent.NAO_ENTENDI]: [],
};

function normalizar(texto: string): string {
    return texto
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');
}

function contemPalavra(texto: string, palavra: string): boolean {
    const escaped = palavra.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`\\b${escaped}\\b`, 'i');
    return regex.test(texto);
}

export function recognizeIntent(text: string): Intent {
    const lower = normalizar(text);

    for (const [intent, keywords] of Object.entries(keywordMap)) {
        const encontrou = keywords.some((palavra) => {
            const palavraNormalizada = normalizar(palavra);
            const resultado = contemPalavra(lower, palavraNormalizada);

            if (resultado) {
                console.log('Encontrou:', palavra, '=>', intent);
            }

            return resultado;
        });

        if (encontrou) {
            return intent as Intent;
        }
    }

    return Intent.NAO_ENTENDI;
}