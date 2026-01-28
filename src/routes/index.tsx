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

  // Reusable styles
  const styles = {
    section: {
      padding: '3rem 1rem',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    sectionHeading: {
      fontSize: '2.5em',
      textAlign: 'center' as const,
      marginBottom: '2rem',
      marginTop: 0,
    },
    grid: {
      display: 'flex',
      flexWrap: 'wrap' as const,
      gap: '1.5rem',
      justifyContent: 'center',
    },
    card: {
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '1.5rem',
      flex: '1 1 250px',
      maxWidth: '280px',
      textAlign: 'center' as const,
      transition: 'transform 0.2s, border-color 0.2s',
      cursor: 'pointer',
    },
    button: {
      display: 'inline-block',
      padding: '0.8em 2em',
      fontSize: '1.1em',
      fontWeight: 500,
      color: '#fff',
      backgroundColor: '#646cff',
      border: 'none',
      borderRadius: '8px',
      textDecoration: 'none',
      cursor: 'pointer',
      transition: 'background-color 0.25s',
    },
  }

  return (
    <div>
      <HeroSection styles={styles} />
      <CategoriesSection categories={categories} styles={styles} />
      <FeaturedProductsSection products={featuredProducts} styles={styles} />
      <BenefitsSection benefits={benefits} styles={styles} />
      <CTASection styles={styles} />
    </div>
  )
}

function HeroSection({ styles }: { styles: any }) {
  return (
    <div
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '5rem 1rem',
        textAlign: 'center',
        color: '#fff',
      }}
    >
      <h1 style={{ fontSize: '3em', margin: '0 0 1rem 0', lineHeight: '1.2' }}>
        Tu Tienda de Artículos Deportivos de Confianza
      </h1>
      <p style={{ fontSize: '1.3em', margin: '0 0 2rem 0', opacity: 0.95 }}>
        Encuentra el equipo perfecto para llevar tu rendimiento al siguiente nivel
      </p>
      <Link
        to="/productos"
        style={{
          ...styles.button,
          fontSize: '1.2em',
          padding: '1em 2.5em',
        }}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#535bf2')}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#646cff')}
      >
        Ver Catálogo
      </Link>
    </div>
  )
}

function CategoriesSection({
  categories,
  styles,
}: {
  categories: Array<{ id: string; name: string; description: string; icon: string }>
  styles: any
}) {
  return (
    <section style={styles.section}>
      <h2 style={styles.sectionHeading}>Explora por Categoría</h2>
      <div style={styles.grid}>
        {categories.map((category) => (
          <Link
            key={category.id}
            to="/productos"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <div
              style={styles.card}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)'
                e.currentTarget.style.borderColor = '#646cff'
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.borderColor = '#ccc'
              }}
            >
              <div style={{ fontSize: '4em', margin: '0 0 0.5rem 0' }}>
                {category.icon}
              </div>
              <h3 style={{ fontSize: '1.5em', margin: '0 0 0.5rem 0' }}>
                {category.name}
              </h3>
              <p style={{ margin: 0, color: '#666', fontSize: '0.95em' }}>
                {category.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

function FeaturedProductsSection({
  products,
  styles,
}: {
  products: Array<{ id: string; name: string; price: string; icon: string }>
  styles: any
}) {
  return (
    <section style={{ ...styles.section, backgroundColor: 'rgba(100, 108, 255, 0.03)' }}>
      <h2 style={styles.sectionHeading}>Productos Destacados</h2>
      <div style={styles.grid}>
        {products.map((product) => (
          <div key={product.id} style={styles.card}>
            <div style={{ fontSize: '4em', margin: '0 0 1rem 0' }}>
              {product.icon}
            </div>
            <h3 style={{ fontSize: '1.3em', margin: '0 0 0.5rem 0' }}>
              {product.name}
            </h3>
            <p style={{ fontSize: '1.5em', fontWeight: 'bold', color: '#646cff', margin: '0.5rem 0 1rem 0' }}>
              {product.price}
            </p>
            <Link
              to="/productos"
              style={{
                color: '#646cff',
                textDecoration: 'none',
                fontWeight: 500,
              }}
            >
              Ver más →
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}

function BenefitsSection({
  benefits,
  styles,
}: {
  benefits: Array<{ icon: string; title: string; description: string }>
  styles: any
}) {
  return (
    <section style={styles.section}>
      <h2 style={styles.sectionHeading}>¿Por Qué Comprar con Nosotros?</h2>
      <div style={styles.grid}>
        {benefits.map((benefit, index) => (
          <div
            key={index}
            style={{
              ...styles.card,
              border: 'none',
              backgroundColor: 'rgba(100, 108, 255, 0.05)',
            }}
          >
            <div style={{ fontSize: '3em', margin: '0 0 1rem 0' }}>
              {benefit.icon}
            </div>
            <h3 style={{ fontSize: '1.3em', margin: '0 0 0.5rem 0' }}>
              {benefit.title}
            </h3>
            <p style={{ margin: 0, color: '#666', fontSize: '0.95em' }}>
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

function CTASection({ styles }: { styles: any }) {
  return (
    <section
      style={{
        padding: '4rem 1rem',
        textAlign: 'center',
        borderTop: '2px solid #646cff',
        backgroundColor: 'rgba(100, 108, 255, 0.03)',
      }}
    >
      <h2 style={{ fontSize: '2.5em', margin: '0 0 1rem 0' }}>
        ¿Listo para Empezar?
      </h2>
      <p style={{ fontSize: '1.2em', margin: '0 0 2rem 0', color: '#666' }}>
        Explora nuestro catálogo completo de productos deportivos
      </p>
      <Link
        to="/productos"
        style={{
          ...styles.button,
          fontSize: '1.1em',
          padding: '0.9em 2.5em',
        }}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#535bf2')}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#646cff')}
      >
        Ver Todos los Productos
      </Link>
    </section>
  )
}
