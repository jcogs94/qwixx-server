import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'

import { store } from '@reduxService/store'
import { router} from '@routes'

import SocketProvider from '@socketService/SocketProvider'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <SocketProvider>
        <RouterProvider router={router} />
      </SocketProvider>
    </Provider>
  </StrictMode>
)
