import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  // Mock data
  const categories = [
    { id: 'futbol', name: 'Fútbol', description: 'Balones, botas y uniformes', icon: '⚽' },
    { id: 'gimnasio', name: 'Gimnasio', description: 'Pesas y equipamiento fitness', icon: '💪' },
    { id: 'running', name: 'Running', description: 'Zapatillas y ropa técnica', icon: '🏃' },
    { id: 'acuaticos', name: 'Acuáticos', description: 'Natación y deportes de agua', icon: '🏊' },
  ]

  const featuredProducts = [
    { id: '1', name: 'Balón de Fútbol Profesional', price: '$49.99', icon: '⚽' },
    { id: '3', name: 'Zapatillas Running Pro', price: '$129.99', icon: '👟' },
    { id: '5', name: 'Kit de Pesas 20kg', price: '$89.99', icon: '🏋️' },
  ]

  const benefits = [
    { icon: '🚚', title: 'Envío Rápido', description: 'Entrega en 24-48 horas' },
    { icon: '✓', title: 'Calidad Garantizada', description: 'Productos certificados' },
    { icon: '💰', title: 'Mejor Precio', description: 'Ofertas competitivas' },
    { icon: '🤝', title: 'Soporte 24/7', description: 'Atención personalizada' },
  ]

  return (
    <div style={{
      backgroundColor: '#0a0e1a',
      minHeight: '100vh',
      color: '#fff',
      overflow: 'hidden'
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500;700&display=swap');

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }

        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }

        @keyframes neonGlow {
          0%, 100% {
            text-shadow: 0 0 10px #00ff88, 0 0 20px #00ff88, 0 0 30px #00ff88;
          }
          50% {
            text-shadow: 0 0 20px #00ff88, 0 0 40px #00ff88, 0 0 60px #00ff88;
          }
        }

        .animate-in-1 { animation: fadeInUp 0.8s ease-out 0.2s both; }
        .animate-in-2 { animation: fadeInUp 0.8s ease-out 0.4s both; }
        .animate-in-3 { animation: fadeInUp 0.8s ease-out 0.6s both; }
        .animate-in-4 { animation: fadeInUp 0.8s ease-out 0.8s both; }
      `}</style>

      <HeroSection />
      <CategoriesSection categories={categories} />
      <FeaturedProductsSection products={featuredProducts} />
      <BenefitsSection benefits={benefits} />
      <CTASection />
    </div>
  )
}

function HeroSection() {
  return (
    <div
      style={{
        position: 'relative',
        padding: '8rem 2rem 6rem',
        textAlign: 'center',
        overflow: 'hidden',
        background: 'radial-gradient(ellipse at top, #1a2344 0%, #0a0e1a 60%)',
      }}
    >
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '10%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(255, 107, 53, 0.15) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(80px)',
        animation: 'float 8s ease-in-out infinite',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '10%',
        right: '10%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(0, 255, 136, 0.15) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(80px)',
        animation: 'float 10s ease-in-out infinite',
        animationDelay: '1s',
      }} />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'inline-block',
          padding: '0.5rem 1.5rem',
          background: 'linear-gradient(90deg, #ff6b35 0%, #ff8c42 100%)',
          borderRadius: '50px',
          fontSize: '0.9rem',
          fontFamily: 'DM Sans, sans-serif',
          fontWeight: 700,
          letterSpacing: '1px',
          marginBottom: '2rem',
          textTransform: 'uppercase',
          boxShadow: '0 4px 20px rgba(255, 107, 53, 0.4)',
        }}>
          Equipamiento Premium
        </div>

        <h1 style={{
          fontFamily: 'Bebas Neue, sans-serif',
          fontSize: 'clamp(3rem, 10vw, 7rem)',
          lineHeight: '1',
          margin: '0 0 1.5rem 0',
          letterSpacing: '2px',
          background: 'linear-gradient(135deg, #fff 0%, #00ff88 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          animation: 'neonGlow 3s ease-in-out infinite',
        }}>
          LIBERA TU<br/>POTENCIAL
        </h1>

        <p style={{
          fontFamily: 'DM Sans, sans-serif',
          fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
          margin: '0 auto 3rem',
          maxWidth: '600px',
          color: 'rgba(255, 255, 255, 0.8)',
          lineHeight: '1.6',
        }}>
          Equipamiento deportivo de élite para atletas que no aceptan límites.
          Diseñado para el rendimiento máximo.
        </p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link
            to="/productos"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              display: 'inline-block',
              padding: '1.2rem 3rem',
              fontSize: '1.1rem',
              fontWeight: 700,
              color: '#0a0e1a',
              background: 'linear-gradient(135deg, #00ff88 0%, #00cc6a 100%)',
              border: 'none',
              borderRadius: '50px',
              textDecoration: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 8px 30px rgba(0, 255, 136, 0.4)',
              position: 'relative',
              overflow: 'hidden',
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
            Explorar Catálogo
          </Link>

          <a
            href="#beneficios"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              display: 'inline-block',
              padding: '1.2rem 3rem',
              fontSize: '1.1rem',
              fontWeight: 700,
              color: '#fff',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '2px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '50px',
              textDecoration: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              backdropFilter: 'blur(10px)',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)'
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)'
            }}
          >
            Descubre Más
          </a>
        </div>
      </div>

      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '100px',
        background: 'linear-gradient(to top, #0a0e1a, transparent)',
      }} />
    </div>
  )
}

function CategoriesSection({
  categories,
}: {
  categories: Array<{ id: string; name: string; description: string; icon: string }>
}) {
  return (
    <section style={{
      padding: '6rem 2rem',
      maxWidth: '1400px',
      margin: '0 auto',
      position: 'relative',
    }}>
      <div style={{
        textAlign: 'center',
        marginBottom: '4rem',
      }}>
        <h2 style={{
          fontFamily: 'Bebas Neue, sans-serif',
          fontSize: 'clamp(2.5rem, 6vw, 4rem)',
          margin: '0 0 1rem 0',
          letterSpacing: '2px',
          color: '#fff',
        }}>
          EXPLORA POR DEPORTE
        </h2>
        <div style={{
          width: '80px',
          height: '4px',
          background: 'linear-gradient(90deg, #ff6b35 0%, #00ff88 100%)',
          margin: '0 auto',
        }} />
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '2rem',
      }}>
        {categories.map((category, index) => (
          <Link
            key={category.id}
            to="/productos"
            style={{ textDecoration: 'none', color: 'inherit' }}
            className={`animate-in-${(index % 4) + 1}`}
          >
            <div
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '20px',
                padding: '2.5rem 2rem',
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'all 0.4s ease',
                position: 'relative',
                overflow: 'hidden',
                backdropFilter: 'blur(10px)',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)'
                e.currentTarget.style.borderColor = '#00ff88'
                e.currentTarget.style.boxShadow = '0 20px 60px rgba(0, 255, 136, 0.3)'
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)'
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <div style={{
                position: 'absolute',
                top: '-50%',
                right: '-50%',
                width: '200%',
                height: '200%',
                background: 'radial-gradient(circle, rgba(0, 255, 136, 0.1) 0%, transparent 70%)',
                opacity: 0,
                transition: 'opacity 0.4s ease',
              }}
                onMouseOver={(e) => e.currentTarget.style.opacity = '1'}
                onMouseOut={(e) => e.currentTarget.style.opacity = '0'}
              />

              <div style={{
                fontSize: '5rem',
                margin: '0 0 1.5rem 0',
                filter: 'drop-shadow(0 4px 10px rgba(0, 255, 136, 0.3))',
              }}>
                {category.icon}
              </div>

              <h3 style={{
                fontFamily: 'Bebas Neue, sans-serif',
                fontSize: '2rem',
                margin: '0 0 0.5rem 0',
                letterSpacing: '1px',
                color: '#fff',
              }}>
                {category.name}
              </h3>

              <p style={{
                fontFamily: 'DM Sans, sans-serif',
                margin: 0,
                color: 'rgba(255, 255, 255, 0.6)',
                fontSize: '1rem',
              }}>
                {category.description}
              </p>

              <div style={{
                marginTop: '1.5rem',
                color: '#00ff88',
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                fontSize: '0.9rem',
                letterSpacing: '1px',
              }}>
                EXPLORAR →
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

function FeaturedProductsSection({
  products,
}: {
  products: Array<{ id: string; name: string; price: string; icon: string }>
}) {
  return (
    <section style={{
      padding: '6rem 2rem',
      maxWidth: '1400px',
      margin: '0 auto',
      background: 'radial-gradient(ellipse at center, rgba(255, 107, 53, 0.08) 0%, transparent 70%)',
    }}>
      <div style={{
        textAlign: 'center',
        marginBottom: '4rem',
      }}>
        <h2 style={{
          fontFamily: 'Bebas Neue, sans-serif',
          fontSize: 'clamp(2.5rem, 6vw, 4rem)',
          margin: '0 0 1rem 0',
          letterSpacing: '2px',
          background: 'linear-gradient(135deg, #ff6b35 0%, #00ff88 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}>
          PRODUCTOS DESTACADOS
        </h2>
        <div style={{
          width: '80px',
          height: '4px',
          background: 'linear-gradient(90deg, #ff6b35 0%, #00ff88 100%)',
          margin: '0 auto',
        }} />
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '2.5rem',
      }}>
        {products.map((product, index) => (
          <div
            key={product.id}
            className={`animate-in-${(index % 3) + 1}`}
            style={{
              background: 'linear-gradient(135deg, rgba(255, 107, 53, 0.1) 0%, rgba(0, 255, 136, 0.05) 100%)',
              border: '2px solid rgba(255, 107, 53, 0.3)',
              borderRadius: '24px',
              padding: '2rem',
              textAlign: 'center',
              cursor: 'pointer',
              transition: 'all 0.4s ease',
              position: 'relative',
              overflow: 'hidden',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-12px) rotate(-1deg)'
              e.currentTarget.style.borderColor = '#ff6b35'
              e.currentTarget.style.boxShadow = '0 25px 70px rgba(255, 107, 53, 0.4)'
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0) rotate(0deg)'
              e.currentTarget.style.borderColor = 'rgba(255, 107, 53, 0.3)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            <div style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              background: 'linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%)',
              padding: '0.4rem 1rem',
              borderRadius: '20px',
              fontSize: '0.75rem',
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              letterSpacing: '1px',
            }}>
              DESTACADO
            </div>

            <div style={{
              fontSize: '6rem',
              margin: '2rem 0 1.5rem 0',
              filter: 'drop-shadow(0 8px 20px rgba(255, 107, 53, 0.4))',
            }}>
              {product.icon}
            </div>

            <h3 style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '1.4rem',
              margin: '0 0 1rem 0',
              fontWeight: 700,
              color: '#fff',
            }}>
              {product.name}
            </h3>

            <p style={{
              fontFamily: 'Bebas Neue, sans-serif',
              fontSize: '2.5rem',
              fontWeight: 'bold',
              background: 'linear-gradient(135deg, #ff6b35 0%, #00ff88 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              margin: '0 0 2rem 0',
            }}>
              {product.price}
            </p>

            <Link
              to="/productos"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                display: 'inline-block',
                padding: '1rem 2.5rem',
                background: 'linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%)',
                color: '#fff',
                borderRadius: '50px',
                textDecoration: 'none',
                fontWeight: 700,
                fontSize: '0.95rem',
                letterSpacing: '0.5px',
                transition: 'all 0.3s ease',
                boxShadow: '0 6px 20px rgba(255, 107, 53, 0.4)',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)'
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(255, 107, 53, 0.6)'
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'scale(1)'
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(255, 107, 53, 0.4)'
              }}
            >
              VER PRODUCTO →
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}

function BenefitsSection({
  benefits,
}: {
  benefits: Array<{ icon: string; title: string; description: string }>
}) {
  return (
    <section id="beneficios" style={{
      padding: '6rem 2rem',
      maxWidth: '1400px',
      margin: '0 auto',
    }}>
      <div style={{
        textAlign: 'center',
        marginBottom: '4rem',
      }}>
        <h2 style={{
          fontFamily: 'Bebas Neue, sans-serif',
          fontSize: 'clamp(2.5rem, 6vw, 4rem)',
          margin: '0 0 1rem 0',
          letterSpacing: '2px',
          color: '#fff',
        }}>
          VENTAJAS EXCLUSIVAS
        </h2>
        <div style={{
          width: '80px',
          height: '4px',
          background: 'linear-gradient(90deg, #ff6b35 0%, #00ff88 100%)',
          margin: '0 auto',
        }} />
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '2rem',
      }}>
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className={`animate-in-${(index % 4) + 1}`}
            style={{
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '16px',
              padding: '2.5rem 1.5rem',
              textAlign: 'center',
              transition: 'all 0.3s ease',
              backdropFilter: 'blur(10px)',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'
              e.currentTarget.style.borderColor = 'rgba(0, 255, 136, 0.5)'
              e.currentTarget.style.transform = 'translateY(-5px)'
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)'
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            <div style={{
              fontSize: '3.5rem',
              margin: '0 0 1.5rem 0',
              filter: 'grayscale(0) brightness(1.2)',
            }}>
              {benefit.icon}
            </div>

            <h3 style={{
              fontFamily: 'Bebas Neue, sans-serif',
              fontSize: '1.6rem',
              margin: '0 0 0.8rem 0',
              letterSpacing: '1px',
              color: '#00ff88',
            }}>
              {benefit.title}
            </h3>

            <p style={{
              fontFamily: 'DM Sans, sans-serif',
              margin: 0,
              color: 'rgba(255, 255, 255, 0.7)',
              fontSize: '1rem',
              lineHeight: '1.5',
            }}>
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

function CTASection() {
  return (
    <section
      style={{
        padding: '8rem 2rem',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: 'radial-gradient(ellipse at center, rgba(0, 255, 136, 0.1) 0%, transparent 70%)',
      }}
    >
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(255, 107, 53, 0.15) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(100px)',
        animation: 'pulse 4s ease-in-out infinite',
      }} />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <h2 style={{
          fontFamily: 'Bebas Neue, sans-serif',
          fontSize: 'clamp(3rem, 8vw, 5rem)',
          margin: '0 0 1.5rem 0',
          letterSpacing: '3px',
          background: 'linear-gradient(135deg, #fff 0%, #00ff88 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}>
          ¿LISTO PARA DOMINAR?
        </h2>

        <p style={{
          fontFamily: 'DM Sans, sans-serif',
          fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
          margin: '0 auto 3rem',
          maxWidth: '600px',
          color: 'rgba(255, 255, 255, 0.7)',
          lineHeight: '1.6',
        }}>
          Únete a miles de atletas que han elevado su juego con nuestro equipamiento de élite
        </p>

        <Link
          to="/productos"
          style={{
            fontFamily: 'DM Sans, sans-serif',
            display: 'inline-block',
            padding: '1.4rem 4rem',
            fontSize: '1.2rem',
            fontWeight: 700,
            color: '#0a0e1a',
            background: 'linear-gradient(135deg, #00ff88 0%, #00cc6a 100%)',
            border: 'none',
            borderRadius: '50px',
            textDecoration: 'none',
            cursor: 'pointer',
            transition: 'all 0.4s ease',
            boxShadow: '0 10px 40px rgba(0, 255, 136, 0.4)',
            letterSpacing: '1px',
            textTransform: 'uppercase',
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)'
            e.currentTarget.style.boxShadow = '0 15px 60px rgba(0, 255, 136, 0.6)'
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)'
            e.currentTarget.style.boxShadow = '0 10px 40px rgba(0, 255, 136, 0.4)'
          }}
        >
          Ver Catálogo Completo
        </Link>
      </div>
    </section>
  )
}
