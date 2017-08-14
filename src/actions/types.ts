export interface PureAction {
    type: string
}

export interface PayloadAction<P> {
    payload: P
    type: string
}

export default {
    CHANGE_SIGN_IN_FROM: 'CHANGE_SIGN_IN_FROM'
}
