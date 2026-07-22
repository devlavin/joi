import { ConversationState, Intent, ConversationResponse } from './type';

export function getResponse(
    state: ConversationState,
    intent: Intent,
): ConversationResponse {
    const key = `${state}_${intent}`;

    switch (key) {
        case `${ConversationState.INICIO}_${Intent.SAUDACAO}`:
            return {
                message: 'Oi! Tudo bem?',
                nextState: ConversationState.PERGUNTOU_COMO_ESTA,
            };

        case `${ConversationState.PERGUNTOU_COMO_ESTA}_${Intent.ESTADO_POSITIVO}`:
            return {
                message: 'Que bom!',
                nextState: ConversationState.CONVERSANDO,
            };

        case `${ConversationState.PERGUNTOU_COMO_ESTA}_${Intent.ESTADO_NEGATIVO}`:
            return {
                message: 'Poxa, sinto muito. Você precisa de ajuda?',
                nextState: ConversationState.PERGUNTOU_SE_PRECISA_DE_AJUDA,
            };

        case `${ConversationState.PERGUNTOU_SE_PRECISA_DE_AJUDA}_${Intent.ACEITOU_CONVERSAR}`:
            return {
                message: 'Claro. Quer conversar sobre o que aconteceu?',
                nextState: ConversationState.OFERECEU_CONVERSA,
            };

        case `${ConversationState.PERGUNTOU_SE_PRECISA_DE_AJUDA}_${Intent.RECUSOU_CONVERSAR}`:
            return {
                message:
                    'Tudo bem. Vou respeitar seu espaço. Se precisar, estou aqui.',
                nextState: ConversationState.RESPEITOU_LIMITE,
            };

        case `${ConversationState.OFERECEU_CONVERSA}_${Intent.ACEITOU_CONVERSAR}`:
            return {
                message: 'Me conta o que houve...',
                nextState: ConversationState.PERGUNTOU_O_QUE_ACONTECEU,
            };

        case `${ConversationState.PERGUNTOU_O_QUE_ACONTECEU}_${Intent.ABERTURA_EMOCIONAL}`:
            return {
                message: 'Entendi... quer me contar o que aconteceu?',
                nextState: ConversationState.CONVERSANDO,
            };
            
        case `${ConversationState.OFERECEU_CONVERSA}_${Intent.RECUSOU_CONVERSAR}`:
            return {
                message: 'Tudo bem. Estou aqui se precisar.',
                nextState: ConversationState.RESPEITOU_LIMITE,
            };

        default:
            return { message: 'Não entendi muito bem...', nextState: state };
    }
}
