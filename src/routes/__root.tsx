import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
  component: () => (
    <>
      <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
        <Link
          to="/"
          activeProps={{ style: { fontWeight: 'bold', color: '#646cff' } }}
          style={{ marginRight: '1rem', textDecoration: 'none' }}
        >
          Home
        </Link>
        <Link
          to="/productos"
          activeProps={{ style: { fontWeight: 'bold', color: '#646cff' } }}
          style={{ marginRight: '1rem', textDecoration: 'none' }}
        >
          Productos
        </Link>
      </nav>
      <div style={{ padding: '1rem' }}>
        <Outlet />
      </div>
      <TanStackRouterDevtools />
    </>
  ),
})
