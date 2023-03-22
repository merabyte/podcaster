import { Link, Outlet } from 'react-router-dom'

function Layout() {
  return (
    <main className="p-2">
      <header className="text-sky-700 font-semibold pb-2 border-b border-solid">
        <Link to="/">Podcaster</Link>
      </header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/podcast/1">Podcast</Link>
          </li>
          <li>
            <Link to="/podcast/1/episode/1">Episode</Link>
          </li>
        </ul>
      </nav>
      <section className="py-2">
        <Outlet />
      </section>
    </main>
  )
}

export default Layout
