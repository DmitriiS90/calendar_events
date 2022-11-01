import { AppDispatch } from './../../index';
import { IUser } from '../../../models/IUser.ts';
import { ISetUserAction, AuthActionEnum } from './type.ts';
import axios from 'axios';
import UserService from '../../../api/UserService.ts';

export const AuthActionCreators = {
    setUser: (user: IUser): ISetUserAction => ({ type: AuthActionEnum.SET_USER, payload: user }),
    setAuth: (auth: boolean): ISetUserAction => ({ type: AuthActionEnum.SET_AUTH, payload: auth }),
    setError: (error: string): ISetUserAction => ({ type: AuthActionEnum.SET_ERROR, payload: error }),
    setIsLoading: (isLoading: boolean): ISetUserAction => ({ type: AuthActionEnum.SET_IS_LOADING, payload: isLoading }),
    login: (username: string, password: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AuthActionCreators.setIsLoading(true))
            setTimeout(async () => {
                const response = await UserService.getUsers()
                const mockUser = response.data.find(user => user.username === username && user.password === password)

                console.log(mockUser);

                if (mockUser) {
                    localStorage.setItem('auth', 'true')
                    localStorage.setItem('user', mockUser.username)
                    dispatch(AuthActionCreators.setUser(mockUser))
                    dispatch(AuthActionCreators.setAuth(true))
                } else {
                    dispatch(AuthActionCreators.setError('Пользовотель ввел не коректный логин'))

                }

                dispatch(AuthActionCreators.setIsLoading(false))
            }, 1000)

        } catch (error) {
            dispatch(AuthActionCreators.setError('Произошла ошибка в логине'))
        }
    },
    logout: () => async (dispatch: AppDispatch) => {
        localStorage.removeItem('auth')
        localStorage.removeItem('user')

        dispatch(AuthActionCreators.setAuth(false))
        dispatch(AuthActionCreators.setUser({} as IUser))
    }
}