import ActionTypes, {PayloadAction} from './types'

// changeSignInFrom
export interface ChangeSignInFromPayload {
    username?: string,
    password?: string,
}
export type ChangeSignInFromResult = PayloadAction<ChangeSignInFromPayload>
export type ChangeSignInFromAction = (payload: ChangeSignInFromPayload) => ChangeSignInFromResult
export const changeSignInFrom = (payload: ChangeSignInFromPayload): ChangeSignInFromResult => ({
    payload,
    type: ActionTypes.CHANGE_SIGN_IN_FROM,
})
