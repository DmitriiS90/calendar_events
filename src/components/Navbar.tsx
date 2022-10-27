import React, { FC } from 'react'
import { Menu, Row } from 'antd'
import { Header } from 'antd/lib/layout/layout'
import { useNavigate } from 'react-router-dom'
import { useTypedSelector } from '../hooks/useTypedSelector.ts';
import { useDispatch } from 'react-redux';
import { AuthActionCreators } from '../store/reducers/auth/action-creators.ts';

const Navbar: FC = () => {
    const router = useNavigate()
    const dispatch = useDispatch()
    const { isAuth, user } = useTypedSelector(state => state.auth)
    
    const onClickLogin = () => {
        router('/login')
    }

    const onClickLogout = () => {
        dispatch(AuthActionCreators.logout())
    }

    return (
        <Header>
            <Row justify='end'>
                <Menu theme='dark' mode='vertical' selectable={false}>
                    {isAuth
                        ? <Menu.Item key={1}>{user.username}</Menu.Item>
                        : <Menu.Item onClick={onClickLogin} key={2}>Логин</Menu.Item>
                    }
                </Menu>

                {isAuth && (
                    <Menu theme='dark' mode='vertical' selectable={false}>
                        <Menu.Item onClick={onClickLogout} key={3}>Выйти</Menu.Item>
                    </Menu>
                )}
            </Row>
        </Header>
    )
}

export default Navbar