import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import SideBar from './containers/SideBar'
import ToDoList from './containers/ToDoList'
import GlobalStyle, { Container } from './styles'

import store from './store'
import Home from './pages/Home'
import NewTask from './pages/NewTask'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/new',
    element: <NewTask />
  }
])

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Container>
        <RouterProvider router={routes} />
      </Container>
    </Provider>
  )
}

export default App
