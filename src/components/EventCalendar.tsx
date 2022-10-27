import React, { FC } from 'react'
import { Calendar } from 'antd';
import { IEvent } from '../models/IEvent.ts';

export interface EventCalendarProps {
    events: IEvent[]
}

const EventCalendar: FC<EventCalendarProps> = () => {
    return (
        <Calendar />
    )
}

export default EventCalendar;