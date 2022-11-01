import React, { FC, useEffect, useState } from 'react'
import { Button, Layout, Row, Modal } from 'antd';
import EventCalendar from '../components/EventCalendar.tsx';
import EventForm from '../components/EventForm.tsx';
import { useActions } from '../hooks/useActions.ts';
import { useTypedSelector } from '../hooks/useTypedSelector.ts';
import { IEvent } from './../../models/IEvent.ts';


const Event: FC = () => {
    const [modalOpen, setModalOpen] = useState(false)

    const { fetchGuests, fetchEvents, createEvent } = useActions()

    const { guests, events } = useTypedSelector(state => state.event)
    const { user } = useTypedSelector(state => state.auth)

    useEffect(() => {
        fetchGuests()
        fetchEvents(user.username)
    }, [])

    const addNewEvent = (event: IEvent) => {
        setModalOpen(false)
        createEvent(event)
    }

    return (
        <Layout>
            {/* <div>{JSON.stringify(events)}</div> */}
            <EventCalendar events={events} />
            <Row justify='center'>
                <Button onClick={() => setModalOpen(true)}>Добавить событие</Button>
                <Modal
                    title="Добавить событие"
                    open={modalOpen}
                    onCancel={() => setModalOpen(false)}
                    footer={null}
                >
                    <EventForm guests={guests} submit={addNewEvent} />
                </Modal>
            </Row>
        </Layout>
    )
}

export default Event;