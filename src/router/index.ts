import React from 'React'
import Login from '../pages/Login.tsx'
import Event from '../pages/Event.tsx'

export interface IRoute {
    path: string
    component: React.ComponentType
    exact?: boolean
}

export enum RouterNames {
    LOGIN = '/login',
    EVENT = '/'
}

export const publicRoutes: IRoute[] = [
    { path: RouterNames.LOGIN, exact: true, component: Login },
]

export const privateRoutes: IRoute[] = [
    { path: RouterNames.EVENT, exact: true, component: Event }
]