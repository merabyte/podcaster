import { Link, Outlet, useNavigation } from 'react-router-dom'
import Loading from '../Loading'

function Layout() {
  const navigation = useNavigation()
  const isLoading = navigation.state === 'loading'

  return (
    <main className="pt-0 pr-2 pb-2 pl-2">
      <header className="sticky top-0 z-10 flex items-center py-2 border-b border-solid bg-white">
        <div className="flex-1">
          <Link to="/" className="text-sky-600 font-semibold hover:text-sky-800">
            Podcaster
          </Link>
        </div>
        {isLoading && (
          <div className="pr-2">
            <Loading />
          </div>
        )}
      </header>

      <section className="flex justify-center pt-6">
        <div className="flex-1 max-w-5xl">
          <Outlet />
        </div>
      </section>
    </main>
  )
}

export default Layout
