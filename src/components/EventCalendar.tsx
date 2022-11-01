import React, { FC } from 'react'
import { Badge, BadgeProps, Calendar } from 'antd';
import { Moment } from 'moment';
import { IEvent } from '../models/IEvent.ts';
import { formatDate } from '../utils/date.ts';

export interface EventCalendarProps {
    events: IEvent[]
}

const EventCalendar: FC<EventCalendarProps> = ({ events }) => {
    const dateCellRender = (value: Moment) => {
        const formateData = formatDate(value.toDate())

        const currentDayEvents = events.filter(event => event.date === formateData)

        return (
            <div>
                {/* {currentDayEvents.map((event, index) => <div key={index}>{event.description}</div>)} */}
                
                <ul className="events">
                    {currentDayEvents.map((event, index) => (
                        <li key={index}>
                            <Badge status={event as BadgeProps['status']} text={event.description} />
                        </li>
                    ))}
                </ul>
            </div>
        );
    };

    return (
        <Calendar dateCellRender={dateCellRender} />
    )
}

export default EventCalendar;