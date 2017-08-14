import ActionTypes, {PayloadAction} from '../actions/types'
import {SignInFrom} from './types'

const initialState: SignInFrom = {
    username: '',
    password: '',
}

export default (state: SignInFrom = initialState,
                action: PayloadAction<SignInFrom>,): SignInFrom => {
    switch (action.type) {
        case ActionTypes.CHANGE_SIGN_IN_FROM:
            return {
                ...state,
                ...action.payload
            }
        default:
            break
    }
    return state
}
