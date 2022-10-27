import React, { FC, useState } from 'react'
import { Moment } from 'moment';
import { Button, Checkbox, Form, Input, DatePicker, Row, Select } from 'antd';
import { rules } from '../utils/rules.ts';
import { IUser } from '../models/IUser.ts';
import { IEvent } from '../models/IEvent.ts';
import { formatDate } from '../utils/date.ts';
import { useTypedSelector } from '../hooks/useTypedSelector.ts';

interface EventFormProps {
    guests: IUser[],
    submit: (event: IEvent) => void
}

const EventForm: FC<EventFormProps> = ({ guests, submit }) => {
    const { user } = useTypedSelector(state => state.auth)

    const [event, setEvent] = useState<IEvent>({
        author: '',
        guest: '',
        date: '',
        description: ''
    } as IEvent);

    const selectDate = (date: Moment | null) => {
        if (date) {
            setEvent({ ...event, date: formatDate(date?.toDate()) })
        };
    }

    const submitForm = () => {
        submit({...event, author: user.username})
        
        console.log({...event, author: user.username});
    }

    return (
        <Form onFinish={submitForm}>
            <Form.Item
                label="Описание события"
                name="description"
                rules={[rules.required()]}
            >
                <Input value={event.description} onChange={e => setEvent({ ...event, description: e.target.value })} />
            </Form.Item>

            <Form.Item
                label="Выберите дату"
                name="date"
                rules={[rules.required()]}
            >
                <DatePicker onChange={date => selectDate(date)} />
            </Form.Item>

            <Form.Item
                label="Веберите гостя"
                name="guest"
                rules={[rules.required()]}
            >
                <Select onChange={(guest: string) => setEvent({ ...event, guest })}>
                    {guests.map(g => <Select.Option value={g.username} key={g.username}>{g.username}</Select.Option>)}
                </Select>
            </Form.Item>

            <Row justify='end'>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Создать
                    </Button>
                </Form.Item>
            </Row>
        </Form>
    )
}

export default EventForm