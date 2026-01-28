import { createFileRoute, Link } from '@tanstack/react-router'
import { products } from '../../data/products'

export const Route = createFileRoute('/productos/')({
  component: ProductsPage,
})

function ProductsPage() {
  const containerStyle: React.CSSProperties = {
    maxWidth: '1200px',
    margin: '0 auto',
  }

  const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    marginBottom: '2rem',
  }

  const titleStyle: React.CSSProperties = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#FF6B35',
    marginBottom: '0.5rem',
  }

  const subtitleStyle: React.CSSProperties = {
    fontSize: '1.1rem',
    color: '#666',
  }

  const gridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '1.5rem',
    padding: '0',
  }

  const cardStyle: React.CSSProperties = {
    border: '1px solid #e0e0e0',
    borderRadius: '12px',
    padding: '1.5rem',
    backgroundColor: 'rgba(255, 255, 255, 0.02)',
    transition: 'transform 0.2s, box-shadow 0.2s',
    cursor: 'pointer',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  }

  const emojiStyle: React.CSSProperties = {
    fontSize: '3rem',
    marginBottom: '1rem',
    textAlign: 'center',
  }

  const badgeStyle: React.CSSProperties = {
    display: 'inline-block',
    backgroundColor: '#2A9D8F',
    color: 'white',
    padding: '0.25rem 0.75rem',
    borderRadius: '12px',
    fontSize: '0.85rem',
    fontWeight: '600',
    marginBottom: '0.75rem',
  }

  const productNameStyle: React.CSSProperties = {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    margin: '0 0 0.5rem 0',
    color: '#1D3557',
  }

  const priceStyle: React.CSSProperties = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#FF6B35',
    margin: '0.5rem 0',
  }

  const descriptionStyle: React.CSSProperties = {
    margin: '0 0 1rem 0',
    color: '#666',
    fontSize: '0.95rem',
    lineHeight: '1.5',
  }

  const buttonStyle: React.CSSProperties = {
    display: 'inline-block',
    padding: '0.625rem 1.25rem',
    backgroundColor: '#1D3557',
    color: 'white',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: '600',
    fontSize: '0.95rem',
    transition: 'background-color 0.2s',
  }

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <h1 style={titleStyle}>🏃 Tienda Deportiva</h1>
        <p style={subtitleStyle}>
          Encuentra el mejor equipamiento deportivo para tu rendimiento
        </p>
      </div>

      <div style={gridStyle}>
        {products.map((product) => (
          <div
            key={product.id}
            style={cardStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)'
              e.currentTarget.style.boxShadow = '0 4px 16px rgba(255, 107, 53, 0.2)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)'
            }}
          >
            <div style={emojiStyle}>{product.imageUrl}</div>
            <span style={badgeStyle}>{product.category}</span>
            <h3 style={productNameStyle}>{product.name}</h3>
            <p style={priceStyle}>${product.price.toFixed(2)}</p>
            <p style={descriptionStyle}>{product.description}</p>
            <Link
              to="/productos/$productId"
              params={{ productId: product.id }}
              style={buttonStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#2A9D8F'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#1D3557'
              }}
            >
              Ver detalles →
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
