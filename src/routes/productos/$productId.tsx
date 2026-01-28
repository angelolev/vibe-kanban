import { createFileRoute, Link } from '@tanstack/react-router'
import { products } from '../../data/products'

export const Route = createFileRoute('/productos/$productId')({
  component: ProductDetailPage,
})

function ProductDetailPage() {
  const { productId } = Route.useParams()
  const product = products.find((p) => p.id === productId)

  if (!product) {
    return (
      <div style={{
        minHeight: '100vh',
        backgroundColor: '#0a0e1a',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
      }}>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500;700&display=swap');
        `}</style>

        <div style={{ textAlign: 'center', maxWidth: '600px' }}>
          <div style={{
            fontSize: '8rem',
            marginBottom: '2rem',
            filter: 'grayscale(1) opacity(0.3)',
          }}>🔍</div>

          <h1 style={{
            fontFamily: 'Bebas Neue, sans-serif',
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            margin: '0 0 1rem 0',
            letterSpacing: '2px',
            color: '#fff',
          }}>
            PRODUCTO NO ENCONTRADO
          </h1>

          <p style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '1.1rem',
            marginBottom: '2rem',
            color: 'rgba(255, 255, 255, 0.6)',
            lineHeight: '1.6',
          }}>
            El producto con ID "{productId}" no existe en nuestro catálogo.
          </p>

          <Link
            to="/productos"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              display: 'inline-block',
              padding: '1rem 2.5rem',
              background: 'linear-gradient(135deg, #00ff88 0%, #00cc6a 100%)',
              color: '#0a0e1a',
              borderRadius: '50px',
              textDecoration: 'none',
              fontWeight: 700,
              fontSize: '1rem',
              transition: 'all 0.3s ease',
              boxShadow: '0 8px 30px rgba(0, 255, 136, 0.4)',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 255, 136, 0.6)'
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 255, 136, 0.4)'
            }}
          >
            ← Volver al Catálogo
          </Link>
        </div>
      </div>
    )
  }

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 >= 0.5
    let stars = '★'.repeat(fullStars)
    if (hasHalfStar) stars += '☆'
    return stars.padEnd(5, '☆')
  }

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#0a0e1a',
      color: '#fff',
      padding: '3rem 2rem',
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500;700&display=swap');

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }

        .fade-in {
          animation: fadeIn 0.6s ease-out;
        }

        .scale-in {
          animation: scaleIn 0.8s ease-out;
        }
      `}</style>

      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
      }}>
        <Link
          to="/productos"
          className="fade-in"
          style={{
            fontFamily: 'DM Sans, sans-serif',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.8rem 1.5rem',
            color: '#fff',
            textDecoration: 'none',
            marginBottom: '2rem',
            fontWeight: 600,
            borderRadius: '50px',
            border: '2px solid rgba(255, 255, 255, 0.2)',
            transition: 'all 0.3s ease',
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)',
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.borderColor = '#00ff88'
            e.currentTarget.style.background = 'rgba(0, 255, 136, 0.1)'
            e.currentTarget.style.transform = 'translateX(-5px)'
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)'
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'
            e.currentTarget.style.transform = 'translateX(0)'
          }}
        >
          ← Volver al Catálogo
        </Link>

        <div style={{
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.02) 100%)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '32px',
          overflow: 'hidden',
          position: 'relative',
        }}
        className="scale-in">
          <div style={{
            position: 'absolute',
            top: '-50%',
            right: '-20%',
            width: '60%',
            height: '150%',
            background: 'radial-gradient(circle, rgba(0, 255, 136, 0.1) 0%, transparent 70%)',
            filter: 'blur(80px)',
            pointerEvents: 'none',
          }} />

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.2fr',
            gap: '0',
            position: 'relative',
          }}>
            <div style={{
              background: 'radial-gradient(ellipse at center, rgba(0, 255, 136, 0.08) 0%, transparent 70%)',
              padding: '4rem 3rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRight: '1px solid rgba(255, 255, 255, 0.1)',
              position: 'relative',
            }}>
              <div style={{
                position: 'absolute',
                top: '2rem',
                left: '2rem',
                display: 'flex',
                gap: '0.5rem',
                flexDirection: 'column',
              }}>
                <span style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  letterSpacing: '1px',
                  padding: '0.4rem 0.9rem',
                  borderRadius: '20px',
                  background: 'linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%)',
                  textTransform: 'uppercase',
                  display: 'inline-block',
                  boxShadow: '0 4px 15px rgba(255, 107, 53, 0.4)',
                }}>
                  {product.category}
                </span>
                <span style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  letterSpacing: '1px',
                  padding: '0.4rem 0.9rem',
                  borderRadius: '20px',
                  background: 'rgba(0, 255, 136, 0.2)',
                  color: '#00ff88',
                  textTransform: 'uppercase',
                  display: 'inline-block',
                }}>
                  {product.sport}
                </span>
              </div>

              <div style={{
                fontSize: 'clamp(10rem, 15vw, 16rem)',
                filter: 'drop-shadow(0 15px 40px rgba(0, 255, 136, 0.4))',
                textAlign: 'center',
              }}>
                {product.imageUrl}
              </div>
            </div>

            <div style={{
              padding: '4rem 3rem',
              display: 'flex',
              flexDirection: 'column',
            }}>
              <div>
                <p style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '0.9rem',
                  color: 'rgba(255, 255, 255, 0.6)',
                  marginBottom: '0.5rem',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  fontWeight: 600,
                }}>
                  {product.brand}
                </p>

                <h1 style={{
                  fontFamily: 'Bebas Neue, sans-serif',
                  fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                  margin: '0 0 1.5rem 0',
                  letterSpacing: '2px',
                  lineHeight: '1.1',
                  background: 'linear-gradient(135deg, #fff 0%, #00ff88 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  {product.name}
                </h1>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  marginBottom: '2rem',
                  padding: '1rem 0',
                  borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                }}>
                  <span style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '1.5rem',
                    color: '#FFB800',
                  }}>
                    {renderStars(product.rating)}
                  </span>
                  <span style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '0.95rem',
                    color: 'rgba(255, 255, 255, 0.6)',
                  }}>
                    {product.rating} ({product.reviewsCount} reseñas)
                  </span>
                </div>

                <p style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '1.1rem',
                  lineHeight: '1.7',
                  color: 'rgba(255, 255, 255, 0.7)',
                  marginBottom: '2rem',
                }}>
                  {product.description}
                </p>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '2rem',
                  padding: '1.5rem',
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '16px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}>
                  <div>
                    <p style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: '0.85rem',
                      color: 'rgba(255, 255, 255, 0.6)',
                      margin: '0 0 0.3rem 0',
                      letterSpacing: '1px',
                      textTransform: 'uppercase',
                    }}>
                      Precio
                    </p>
                    <div style={{
                      fontFamily: 'Bebas Neue, sans-serif',
                      fontSize: '3.5rem',
                      background: 'linear-gradient(135deg, #ff6b35 0%, #00ff88 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      lineHeight: '1',
                    }}>
                      ${product.price.toFixed(2)}
                    </div>
                  </div>

                  <div style={{
                    fontFamily: 'DM Sans, sans-serif',
                    padding: '0.7rem 1.5rem',
                    borderRadius: '50px',
                    background: product.stock > 10
                      ? 'rgba(0, 255, 136, 0.2)'
                      : 'rgba(255, 107, 53, 0.2)',
                    color: product.stock > 10 ? '#00ff88' : '#ff6b35',
                    fontSize: '0.9rem',
                    fontWeight: 700,
                    letterSpacing: '0.5px',
                  }}>
                    {product.stock > 10
                      ? `✓ En Stock (${product.stock})`
                      : `⚠️ Últimas (${product.stock})`}
                  </div>
                </div>

                <button
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    width: '100%',
                    padding: '1.5rem 3rem',
                    fontSize: '1.2rem',
                    fontWeight: 700,
                    color: '#0a0e1a',
                    background: 'linear-gradient(135deg, #00ff88 0%, #00cc6a 100%)',
                    border: 'none',
                    borderRadius: '50px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 10px 40px rgba(0, 255, 136, 0.4)',
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)'
                    e.currentTarget.style.boxShadow = '0 15px 60px rgba(0, 255, 136, 0.6)'
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)'
                    e.currentTarget.style.boxShadow = '0 10px 40px rgba(0, 255, 136, 0.4)'
                  }}
                >
                  🛒 Agregar al Carrito
                </button>
              </div>
            </div>
          </div>

          <div style={{
            padding: '3rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            background: 'rgba(0, 0, 0, 0.2)',
          }}>
            <h2 style={{
              fontFamily: 'Bebas Neue, sans-serif',
              fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
              margin: '0 0 2rem 0',
              letterSpacing: '2px',
              color: '#fff',
            }}>
              ESPECIFICACIONES TÉCNICAS
            </h2>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: '1rem',
            }}>
              {product.specifications.map((spec, index) => (
                <div
                  key={index}
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    padding: '1.2rem 1.5rem',
                    background: 'rgba(255, 255, 255, 0.03)',
                    borderRadius: '12px',
                    borderLeft: '3px solid #00ff88',
                    fontSize: '0.95rem',
                    color: 'rgba(255, 255, 255, 0.8)',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = 'rgba(0, 255, 136, 0.08)'
                    e.currentTarget.style.transform = 'translateX(5px)'
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)'
                    e.currentTarget.style.transform = 'translateX(0)'
                  }}
                >
                  {spec}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
