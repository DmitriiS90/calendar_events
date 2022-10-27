import React, { FC, useState } from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import { rules } from '../utils/rules.ts';
import { useTypedSelector } from '../hooks/useTypedSelector.ts';
import { useDispatch } from 'react-redux';
import { AuthActionCreators } from '../store/reducers/auth/action-creators.ts';
import { useActions } from '../hooks/useActions.ts';


const LoginForm: FC = () => {
    const dispatch = useDispatch()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const { error, isLoading } = useTypedSelector(state => state.auth)

    const { login } = useActions()

    const onSubmit = () => {
        login(username, password)
    }

    return (
        <Form
            onFinish={onSubmit}
            layout="vertical"
        // onFinishFailed={onFinishFailed}
        >
            {error && <div style={{ color: 'red' }}>{error}</div>}

            <Form.Item
                label="Имя пользователя"
                name="username"
                // style={{ display: 'flex', flexDirection: 'column' }}
                rules={[rules.required('Пожалуйста введите имя пользователя!')]}
            >
                <Input value={username} onChange={e => setUsername(e.target.value)} />
            </Form.Item>

            <Form.Item
                label="Пароль"
                name="password"
                rules={[rules.required('введите пароль!')]}
            >
                <Input type="password" value={password} onChange={e => setPassword(e.target.value)} />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit" loading={isLoading}>
                    Войти
                </Button>
            </Form.Item>
        </Form>
    )
}

export default LoginForm