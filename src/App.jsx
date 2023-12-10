import React, { useCallback, useEffect, useState } from 'react'
import { useRoutes } from "react-router-dom"
import routes from './Routes/routes.jsx'

import { Toaster } from 'react-hot-toast'

export default function App() {

  const router = useRoutes(routes)





  return (
    <>
      {router}
      <Toaster toastOptions={{
        style: {
          background: '#363636',
          color: '#fff',
          fontFamily: "Dana"
        },
      }} />
      </>
  )
}