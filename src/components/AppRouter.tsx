import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useTypedSelector } from '../hooks/useTypedSelector.ts';
import { RouterNames } from '../router/index.ts';
import { privateRoutes, publicRoutes } from '../router/index.ts';

const AppRouter = () => {
    const { isAuth } = useTypedSelector(state => state.auth)

    return (
        isAuth
            ? <>
                <Routes>
                    {privateRoutes.map(route => <Route
                        path={route.path}
                        exact={route.exact}
                        element={<route.component />}
                        key={route.path}
                    />)}
                </Routes>
                <Navigate to={RouterNames.EVENT} />
            </>
            : <>
                <Routes>
                    {publicRoutes.map(route => <Route
                        path={route.path}
                        exact={route.exact}
                        element={<route.component />}
                        key={route.path}
                    />)}

                </Routes>
                <Navigate to={RouterNames.LOGIN} />
            </>
    )
}

export default AppRouter;