import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
  component: () => (
    <>
      <nav
        style={{
          padding: '1rem 2rem',
          borderBottom: '2px solid #FF6B35',
          backgroundColor: 'rgba(29, 53, 87, 0.05)',
          display: 'flex',
          alignItems: 'center',
          gap: '2rem',
        }}
      >
        <div
          style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: '#1D3557',
            marginRight: '1rem',
          }}
        >
          ⚽ SportsPro
        </div>
        <Link
          to="/"
          activeProps={{
            style: { fontWeight: 'bold', color: '#FF6B35', borderBottom: '2px solid #FF6B35' },
          }}
          style={{
            padding: '0.5rem 1rem',
            textDecoration: 'none',
            color: '#1D3557',
            fontWeight: '600',
            transition: 'color 0.2s',
          }}
        >
          Inicio
        </Link>
        <Link
          to="/productos"
          activeProps={{
            style: { fontWeight: 'bold', color: '#FF6B35', borderBottom: '2px solid #FF6B35' },
          }}
          style={{
            padding: '0.5rem 1rem',
            textDecoration: 'none',
            color: '#1D3557',
            fontWeight: '600',
            transition: 'color 0.2s',
          }}
        >
          🏃 Productos
        </Link>
      </nav>
      <div style={{ padding: '2rem' }}>
        <Outlet />
      </div>
      <TanStackRouterDevtools />
    </>
  ),
})
