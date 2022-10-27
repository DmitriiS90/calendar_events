import { AuthActionCreators } from './auth/action-creators.ts';
import { EventActionCreators } from './event/action-creators.ts';

export const allActionCreators = {
    ...AuthActionCreators,
    ...EventActionCreators
}