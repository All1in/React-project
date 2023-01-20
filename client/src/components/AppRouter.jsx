import React from 'react'
import { privateRoutes, publicRoutes } from '../router'
import { Route, Routes } from 'react-router-dom'
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import LoginPage from '../pages/LoginPage/LoginPage'

const AppRouter = ({ isAuthenticated }) => {
  return isAuthenticated ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route element={<route.element />} path={route.path} key={route.path} />
      ))}
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route element={<route.element />} path={route.path} key={route.path} />
      ))}
      <Route path="*" element={<LoginPage />} />
    </Routes>
  )
}

export default AppRouter
