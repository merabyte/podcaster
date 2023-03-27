import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Layout from './components/Layout'
import Error from './components/Error'

import { Home, homeLoader } from './pages/Home'
import { Podcast, podcastLoader } from './pages/Podcast'
import { Episode, episodeLoader } from './pages/Episode'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: homeLoader,
        errorElement: <Error />,
      },
      {
        path: 'podcast/:podcastId',
        element: <Podcast />,
        loader: podcastLoader,
        errorElement: <Error />,
      },
      {
        path: 'podcast/:podcastId/episode/:episodeId',
        element: <Episode />,
        loader: episodeLoader,
        errorElement: <Error />,
      },
    ],
  },
])

function Routes() {
  return <RouterProvider router={router} />
}

export default Routes
