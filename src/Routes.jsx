import { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Layout from './components/Layout'
import Error from './components/Error'
import Loading from './components/Loading'

const Home = lazy(() => import('./pages/Home'))
const Podcast = lazy(() => import('./pages/Podcast'))
const Episode = lazy(() => import('./pages/Episode'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>
        ),
        errorElement: <Error />,
      },
      {
        path: 'podcast/:podcastId',
        element: (
          <Suspense fallback={<Loading />}>
            <Podcast />
          </Suspense>
        ),
        errorElement: <Error />,
      },
      {
        path: 'podcast/:podcastId/episode/:episodeId',
        element: (
          <Suspense fallback={<Loading />}>
            <Episode />
          </Suspense>
        ),
        errorElement: <Error />,
      },
    ],
  },
])

function Routes() {
  return <RouterProvider router={router} />
}

export default Routes
