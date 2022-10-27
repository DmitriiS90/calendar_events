import React, { FC, useEffect } from 'react'
import { Layout } from 'antd';
import './App.css';
import AppRouter from './components/AppRouter.tsx';
import Navbar from './components/Navbar.tsx';
import { useActions } from './hooks/useActions.ts';

const App: FC = () => {
  const { setUser, setAuth } = useActions()

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setUser({ username: localStorage.getItem('user') })
      setAuth(true)
    }
  }, [])

  return (
    <Layout>
      <Navbar />
      <Layout.Content>
        <AppRouter />
      </Layout.Content>
    </Layout>
  );
}

export default App;
