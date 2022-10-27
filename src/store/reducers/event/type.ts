import { IEvent } from './../../../models/IEvent.ts';
import { IUser } from './../../../models/IUser.ts';

export interface IEventState {
    guests: IUser[]
    events: IEvent[]
}

export enum EventActionEnum {
    SET_GUESTS = 'SET_GUESTS',
    SET_EVENTS = 'SET_EVENTS',
    
}

export interface ISetGuestsAction {
    type: EventActionEnum.SET_GUESTS
    payload: IUser[]
}

export interface ISetEventsAction {
    type: EventActionEnum.SET_EVENTS
    payload: IEvent[]
}

export type IEventAction = ISetGuestsAction | ISetEventsAction
