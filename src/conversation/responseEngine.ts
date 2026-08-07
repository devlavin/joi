import { ConversationState, Intent, ConversationResponse } from './type';
import { getRandomResponse } from './response';

export function getResponse(
    state: ConversationState,
    intent: Intent,
): ConversationResponse {
    if (intent === Intent.DESPEDIDA) {
        return { message: getRandomResponse(Intent.DESPEDIDA), nextState: ConversationState.INICIO };
    }
    if (intent === Intent.AGRADECIMENTO) {
        return { message: getRandomResponse(Intent.AGRADECIMENTO), nextState: state };
    }
    if (intent === Intent.PERGUNTA_NOME) {
        return { message: getRandomResponse(Intent.PERGUNTA_NOME), nextState: ConversationState.CONVERSANDO };
    }
    if (intent === Intent.IDENTIDADE) {
        return { message: getRandomResponse(Intent.IDENTIDADE), nextState: state };
    }
    if (intent === Intent.PEDIDO_AJUDA) {
        return { message: getRandomResponse(Intent.PEDIDO_AJUDA), nextState: state };
    }

    const key = `${state}_${intent}`;

    switch (key) {

        // ===== INICIO =====
        case `${ConversationState.INICIO}_${Intent.SAUDACAO}`:
            return {
                message: getRandomResponse(Intent.SAUDACAO),
                nextState: ConversationState.PERGUNTOU_COMO_ESTA,
            };

        // ===== PERGUNTOU_COMO_ESTA =====
        case `${ConversationState.PERGUNTOU_COMO_ESTA}_${Intent.ESTADO_POSITIVO}`:
            return {
                message: getRandomResponse(Intent.ESTADO_POSITIVO),
                nextState: ConversationState.INICIO,
            };

        case `${ConversationState.PERGUNTOU_COMO_ESTA}_${Intent.ESTADO_NEGATIVO}`:
            return {
                message: getRandomResponse(Intent.ESTADO_NEGATIVO),
                nextState: ConversationState.PERGUNTOU_SE_PRECISA_DE_AJUDA,
            };

        // ===== PERGUNTOU_SE_PRECISA_DE_AJUDA =====
        case `${ConversationState.PERGUNTOU_SE_PRECISA_DE_AJUDA}_${Intent.ACEITOU_CONVERSAR}`:
            return {
                message: getRandomResponse(Intent.ACEITOU_CONVERSAR),
                nextState: ConversationState.OFERECEU_CONVERSA,
            };

        case `${ConversationState.PERGUNTOU_SE_PRECISA_DE_AJUDA}_${Intent.RECUSOU_CONVERSAR}`:
            return {
                message: getRandomResponse(Intent.RECUSOU_CONVERSAR),
                nextState: ConversationState.RESPEITOU_LIMITE,
            };

        // ===== OFERECEU_CONVERSA =====
        case `${ConversationState.OFERECEU_CONVERSA}_${Intent.ACEITOU_CONVERSAR}`:
            return {
                message: getRandomResponse(Intent.ACEITOU_CONVERSAR),
                nextState: ConversationState.PERGUNTOU_O_QUE_ACONTECEU,
            };

        case `${ConversationState.OFERECEU_CONVERSA}_${Intent.RECUSOU_CONVERSAR}`:
            return {
                message: getRandomResponse(Intent.RECUSOU_CONVERSAR),
                nextState: ConversationState.RESPEITOU_LIMITE,
            };

        // ===== PERGUNTOU_O_QUE_ACONTECEU =====
        case `${ConversationState.PERGUNTOU_O_QUE_ACONTECEU}_${Intent.ABERTURA_EMOCIONAL}`:
            return {
                message: getRandomResponse(Intent.ABERTURA_EMOCIONAL),
                nextState: ConversationState.CONVERSANDO,
            };

        case `${ConversationState.PERGUNTOU_O_QUE_ACONTECEU}_${Intent.ESTADO_POSITIVO}`:
            return {
                message: getRandomResponse(Intent.ESTADO_POSITIVO),
                nextState: ConversationState.INICIO,
            };

        // ===== CONVERSANDO =====
        case `${ConversationState.CONVERSANDO}_${Intent.ESTADO_POSITIVO}`:
            return {
                message: getRandomResponse(Intent.ESTADO_POSITIVO),
                nextState: ConversationState.CONVERSANDO,
            };

        default:
            return {
                message: getRandomResponse(Intent.NAO_ENTENDI),
                nextState: state,
            };
    }
}