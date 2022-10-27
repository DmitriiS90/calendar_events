import { IUser } from './../../../models/IUser.ts';
import { EventActionEnum, IEventAction, IEventState } from './type.ts';

const initialState: IEventState = {
    guests: [],
    events: []
}

export default function EventReducer(state = initialState, action: IEventAction): IEventState {
    switch (action.type) {
        case EventActionEnum.SET_GUESTS:
            return { ...state, guests: action.payload };

        case EventActionEnum.SET_EVENTS:
            return { ...state, events: action.payload };

        default:
            return state;
    }
}