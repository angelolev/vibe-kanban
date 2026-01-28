import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
  component: () => (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500;700&display=swap');

        body {
          margin: 0;
          padding: 0;
          background-color: #0a0e1a;
          color: #fff;
          font-family: 'DM Sans', sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>

      <nav
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          padding: '1.5rem 2rem',
          background: 'rgba(10, 14, 26, 0.95)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          maxWidth: '100%',
        }}
      >
        <Link
          to="/"
          style={{
            fontFamily: 'Bebas Neue, sans-serif',
            fontSize: '2rem',
            fontWeight: 'bold',
            letterSpacing: '2px',
            textDecoration: 'none',
            background: 'linear-gradient(135deg, #00ff88 0%, #fff 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            transition: 'all 0.3s ease',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.filter = 'brightness(1.2)'
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.filter = 'brightness(1)'
          }}
        >
          <span style={{ fontSize: '1.8rem' }}>⚡</span>
          SPORTSPRO
        </Link>

        <div style={{
          display: 'flex',
          gap: '1rem',
          alignItems: 'center',
        }}>
          <Link
            to="/"
            activeProps={{
              style: {
                background: 'linear-gradient(135deg, #00ff88 0%, #00cc6a 100%)',
                color: '#0a0e1a',
                borderColor: 'transparent',
              },
            }}
            style={{
              fontFamily: 'DM Sans, sans-serif',
              padding: '0.7rem 1.5rem',
              textDecoration: 'none',
              color: '#fff',
              fontWeight: 600,
              fontSize: '0.95rem',
              letterSpacing: '0.5px',
              transition: 'all 0.3s ease',
              borderRadius: '50px',
              border: '2px solid rgba(255, 255, 255, 0.1)',
              background: 'rgba(255, 255, 255, 0.05)',
            }}
            onMouseOver={(e) => {
              const isActive = e.currentTarget.getAttribute('aria-current') === 'page'
              if (!isActive) {
                e.currentTarget.style.borderColor = 'rgba(0, 255, 136, 0.5)'
                e.currentTarget.style.background = 'rgba(0, 255, 136, 0.1)'
              }
            }}
            onMouseOut={(e) => {
              const isActive = e.currentTarget.getAttribute('aria-current') === 'page'
              if (!isActive) {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'
              }
            }}
          >
            Inicio
          </Link>

          <Link
            to="/productos"
            activeProps={{
              style: {
                background: 'linear-gradient(135deg, #00ff88 0%, #00cc6a 100%)',
                color: '#0a0e1a',
                borderColor: 'transparent',
              },
            }}
            style={{
              fontFamily: 'DM Sans, sans-serif',
              padding: '0.7rem 1.5rem',
              textDecoration: 'none',
              color: '#fff',
              fontWeight: 600,
              fontSize: '0.95rem',
              letterSpacing: '0.5px',
              transition: 'all 0.3s ease',
              borderRadius: '50px',
              border: '2px solid rgba(255, 255, 255, 0.1)',
              background: 'rgba(255, 255, 255, 0.05)',
            }}
            onMouseOver={(e) => {
              const isActive = e.currentTarget.getAttribute('aria-current') === 'page'
              if (!isActive) {
                e.currentTarget.style.borderColor = 'rgba(0, 255, 136, 0.5)'
                e.currentTarget.style.background = 'rgba(0, 255, 136, 0.1)'
              }
            }}
            onMouseOut={(e) => {
              const isActive = e.currentTarget.getAttribute('aria-current') === 'page'
              if (!isActive) {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'
              }
            }}
          >
            Catálogo
          </Link>

          <button
            style={{
              fontFamily: 'DM Sans, sans-serif',
              padding: '0.7rem 1.5rem',
              background: 'linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%)',
              color: '#fff',
              border: 'none',
              borderRadius: '50px',
              fontWeight: 700,
              fontSize: '0.95rem',
              letterSpacing: '0.5px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(255, 107, 53, 0.3)',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(255, 107, 53, 0.5)'
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(255, 107, 53, 0.3)'
            }}
          >
            🛒 Carrito
          </button>
        </div>
      </nav>

      <div>
        <Outlet />
      </div>

      <footer style={{
        background: 'rgba(0, 0, 0, 0.4)',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        padding: '3rem 2rem 2rem',
        marginTop: '4rem',
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          marginBottom: '2rem',
        }}>
          <div>
            <h3 style={{
              fontFamily: 'Bebas Neue, sans-serif',
              fontSize: '1.8rem',
              letterSpacing: '2px',
              margin: '0 0 1rem 0',
              background: 'linear-gradient(135deg, #00ff88 0%, #fff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              SPORTSPRO
            </h3>
            <p style={{
              fontFamily: 'DM Sans, sans-serif',
              color: 'rgba(255, 255, 255, 0.6)',
              fontSize: '0.95rem',
              lineHeight: '1.6',
              margin: 0,
            }}>
              Equipamiento deportivo de élite para atletas que no aceptan límites.
            </p>
          </div>

          <div>
            <h4 style={{
              fontFamily: 'Bebas Neue, sans-serif',
              fontSize: '1.2rem',
              letterSpacing: '1px',
              margin: '0 0 1rem 0',
              color: '#00ff88',
            }}>
              NAVEGACIÓN
            </h4>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
            }}>
              <Link to="/" style={{
                fontFamily: 'DM Sans, sans-serif',
                color: 'rgba(255, 255, 255, 0.6)',
                textDecoration: 'none',
                fontSize: '0.9rem',
                transition: 'color 0.3s ease',
              }}
              onMouseOver={(e) => e.currentTarget.style.color = '#00ff88'}
              onMouseOut={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)'}>
                Inicio
              </Link>
              <Link to="/productos" style={{
                fontFamily: 'DM Sans, sans-serif',
                color: 'rgba(255, 255, 255, 0.6)',
                textDecoration: 'none',
                fontSize: '0.9rem',
                transition: 'color 0.3s ease',
              }}
              onMouseOver={(e) => e.currentTarget.style.color = '#00ff88'}
              onMouseOut={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)'}>
                Catálogo
              </Link>
            </div>
          </div>

          <div>
            <h4 style={{
              fontFamily: 'Bebas Neue, sans-serif',
              fontSize: '1.2rem',
              letterSpacing: '1px',
              margin: '0 0 1rem 0',
              color: '#00ff88',
            }}>
              CONTACTO
            </h4>
            <p style={{
              fontFamily: 'DM Sans, sans-serif',
              color: 'rgba(255, 255, 255, 0.6)',
              fontSize: '0.9rem',
              lineHeight: '1.6',
              margin: 0,
            }}>
              Email: info@sportspro.com<br/>
              Tel: +1 (555) 123-4567
            </p>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          paddingTop: '1.5rem',
          textAlign: 'center',
        }}>
          <p style={{
            fontFamily: 'DM Sans, sans-serif',
            color: 'rgba(255, 255, 255, 0.4)',
            fontSize: '0.85rem',
            margin: 0,
          }}>
            © 2024 SportsPro. Todos los derechos reservados.
          </p>
        </div>
      </footer>

      <TanStackRouterDevtools />
    </>
  ),
})
