import { createFileRoute, Link } from '@tanstack/react-router'
import { products } from '../../data/products'

export const Route = createFileRoute('/productos/')({
  component: ProductsPage,
})

function ProductsPage() {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#0a0e1a',
      color: '#fff',
      padding: '4rem 2rem',
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500;700&display=swap');

        @keyframes slideIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }

        .product-card {
          animation: slideIn 0.6s ease-out both;
        }

        .product-card:nth-child(1) { animation-delay: 0.1s; }
        .product-card:nth-child(2) { animation-delay: 0.15s; }
        .product-card:nth-child(3) { animation-delay: 0.2s; }
        .product-card:nth-child(4) { animation-delay: 0.25s; }
        .product-card:nth-child(5) { animation-delay: 0.3s; }
        .product-card:nth-child(6) { animation-delay: 0.35s; }
      `}</style>

      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
      }}>
        <header style={{
          textAlign: 'center',
          marginBottom: '4rem',
          position: 'relative',
        }}>
          <div style={{
            display: 'inline-block',
            padding: '0.5rem 1.5rem',
            background: 'linear-gradient(90deg, #ff6b35 0%, #ff8c42 100%)',
            borderRadius: '50px',
            fontSize: '0.85rem',
            fontFamily: 'DM Sans, sans-serif',
            fontWeight: 700,
            letterSpacing: '1.5px',
            marginBottom: '1.5rem',
            textTransform: 'uppercase',
            boxShadow: '0 4px 20px rgba(255, 107, 53, 0.4)',
          }}>
            Catálogo Premium
          </div>

          <h1 style={{
            fontFamily: 'Bebas Neue, sans-serif',
            fontSize: 'clamp(3rem, 8vw, 5.5rem)',
            lineHeight: '1',
            margin: '0 0 1rem 0',
            letterSpacing: '3px',
            background: 'linear-gradient(135deg, #fff 0%, #00ff88 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            EQUIPAMIENTO DEPORTIVO
          </h1>

          <p style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            color: 'rgba(255, 255, 255, 0.7)',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6',
          }}>
            Descubre nuestra colección de productos de alto rendimiento diseñados para atletas exigentes
          </p>

          <div style={{
            width: '100px',
            height: '4px',
            background: 'linear-gradient(90deg, #ff6b35 0%, #00ff88 100%)',
            margin: '2rem auto 0',
            borderRadius: '2px',
          }} />
        </header>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: '2.5rem',
        }}>
          {products.map((product) => (
            <Link
              key={product.id}
              to="/productos/$productId"
              params={{ productId: product.id }}
              style={{ textDecoration: 'none', color: 'inherit' }}
              className="product-card"
            >
              <div
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.02) 100%)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '24px',
                  padding: '0',
                  cursor: 'pointer',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  position: 'relative',
                  overflow: 'hidden',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-12px) scale(1.02)'
                  e.currentTarget.style.borderColor = '#00ff88'
                  e.currentTarget.style.boxShadow = '0 25px 60px rgba(0, 255, 136, 0.3)'
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)'
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '250px',
                  background: 'radial-gradient(ellipse at top, rgba(0, 255, 136, 0.1) 0%, transparent 70%)',
                  pointerEvents: 'none',
                }} />

                <div style={{
                  padding: '2.5rem 2rem',
                  textAlign: 'center',
                  background: 'rgba(0, 255, 136, 0.03)',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                }}>
                  <div style={{
                    fontSize: '6rem',
                    margin: '0',
                    filter: 'drop-shadow(0 8px 20px rgba(0, 255, 136, 0.3))',
                  }}>
                    {product.imageUrl}
                  </div>
                </div>

                <div style={{
                  padding: '2rem',
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                }}>
                  <div style={{
                    display: 'flex',
                    gap: '0.5rem',
                    marginBottom: '1rem',
                    flexWrap: 'wrap',
                  }}>
                    <span style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      letterSpacing: '1px',
                      padding: '0.4rem 0.9rem',
                      borderRadius: '20px',
                      background: 'linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%)',
                      textTransform: 'uppercase',
                    }}>
                      {product.category}
                    </span>
                    <span style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      letterSpacing: '1px',
                      padding: '0.4rem 0.9rem',
                      borderRadius: '20px',
                      background: 'rgba(0, 255, 136, 0.2)',
                      color: '#00ff88',
                      textTransform: 'uppercase',
                    }}>
                      {product.sport}
                    </span>
                  </div>

                  <h3 style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '1.4rem',
                    fontWeight: 700,
                    margin: '0 0 0.8rem 0',
                    color: '#fff',
                    lineHeight: '1.3',
                  }}>
                    {product.name}
                  </h3>

                  <p style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '0.95rem',
                    color: 'rgba(255, 255, 255, 0.6)',
                    lineHeight: '1.5',
                    margin: '0 0 1.5rem 0',
                    flex: 1,
                  }}>
                    {product.description}
                  </p>

                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: 'auto',
                    paddingTop: '1rem',
                    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                  }}>
                    <div style={{
                      fontFamily: 'Bebas Neue, sans-serif',
                      fontSize: '2.2rem',
                      background: 'linear-gradient(135deg, #ff6b35 0%, #00ff88 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}>
                      ${product.price.toFixed(2)}
                    </div>

                    <div style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: '0.9rem',
                      fontWeight: 700,
                      color: '#00ff88',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      letterSpacing: '0.5px',
                    }}>
                      VER MÁS
                      <span style={{
                        transition: 'transform 0.3s ease',
                      }}>→</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
