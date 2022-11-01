import axios from 'axios';
import { AppDispatch } from './../../index';
import { IEvent } from './../../../models/IEvent.ts';
import { IUser } from '../../../models/IUser.ts';
import { ISetEventsAction, ISetGuestsAction } from './type.ts';
import { EventActionEnum } from './type.ts';
import UserService from '../../../api/UserService.ts';

export const EventActionCreators = {
    setGuests: (payload: IUser[]): ISetGuestsAction => ({ type: EventActionEnum.SET_GUESTS, payload }),
    setEvents: (payload: IEvent[]): ISetEventsAction => ({ type: EventActionEnum.SET_EVENTS, payload }),
    fetchGuests: () => async (dispatch: AppDispatch) => {
        try {
            const response = await UserService.getUsers()

            dispatch(EventActionCreators.setGuests(response.data))
        } catch (error) {
            console.log(error);
        }
    },
    createEvent: (event: IEvent) => async (dispatch: AppDispatch) => {
        try {
            const events = localStorage.getItem('events') || '[]'
            const json = JSON.parse(events) as IEvent[]
            json.push(event)

            dispatch(EventActionCreators.setEvents(json))
            localStorage.setItem('events', JSON.stringify(json))
        } catch (error) {
            console.log(error);
        }
    },
    fetchEvents: (username: string) => async (dispatch: AppDispatch) => {
        try {
            const events = localStorage.getItem('events') || '[]'
            const json = JSON.parse(events) as IEvent[]
            const currentUserEvents = json.filter(event => event.author === username || event.guest === username)

            dispatch(EventActionCreators.setEvents(currentUserEvents))
        } catch (error) {
            console.log(error);
        }
    },
}