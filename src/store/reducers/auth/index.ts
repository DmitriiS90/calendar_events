import { IUser } from './../../../models/IUser.ts';
import { AuthActionEnum, IAuthAction, IAuthState } from './type.ts';

const initialState: IAuthState = {
    isAuth: false,
    error: '',
    isLoading: false,
    user: {} as IUser
}

export default function AuthReducer(state = initialState, action: IAuthAction): IAuthState {
    switch (action.type) {
        case AuthActionEnum.SET_AUTH:
            return { ...state, isAuth: action.payload, isLoading: false };

        case AuthActionEnum.SET_ERROR:
            return { ...state, error: action.payload, isLoading: false };

        case AuthActionEnum.SET_USER:
            return { ...state, user: action.payload };

        case AuthActionEnum.SET_IS_LOADING:
            return { ...state, isLoading: action.payload };

        default:
            return state;
    }
}