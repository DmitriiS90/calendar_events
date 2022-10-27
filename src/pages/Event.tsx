import { Button, Layout, Row, Modal } from 'antd';
import React, { FC, useEffect, useState } from 'react'
import EventCalendar from '../components/EventCalendar.tsx';
import EventForm from '../components/EventForm.tsx';
import { useActions } from '../hooks/useActions.ts';
import { useTypedSelector } from '../hooks/useTypedSelector.ts';

// FC - функциональный компонент

const Event: FC = () => {
    const [modalOpen, setModalOpen] = useState(false)

    const { fetchGuests, createEvent } = useActions()

    const { guests, events } = useTypedSelector(state => state.event)

    useEffect(() => {
        fetchGuests()
    }, [])

    const addNewEvent = (event) => {
        setModalOpen(false)
        createEvent(event)
    }

    return (
        <Layout>
            <EventCalendar events={[]} />
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