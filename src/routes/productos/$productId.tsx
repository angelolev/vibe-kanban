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
      <div style={{ textAlign: 'center', padding: '3rem' }}>
        <h1 style={{ fontSize: '2rem', color: '#FF6B35', marginBottom: '1rem' }}>
          Producto no encontrado
        </h1>
        <p style={{ marginBottom: '2rem', color: '#666' }}>
          El producto con ID "{productId}" no existe en nuestro catálogo.
        </p>
        <Link
          to="/productos"
          style={{
            display: 'inline-block',
            padding: '0.75rem 1.5rem',
            backgroundColor: '#1D3557',
            color: 'white',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: '600',
          }}
        >
          ← Volver a Productos
        </Link>
      </div>
    )
  }

  const backLinkStyle: React.CSSProperties = {
    display: 'inline-block',
    padding: '0.5rem 1rem',
    color: '#1D3557',
    textDecoration: 'none',
    marginBottom: '1.5rem',
    fontWeight: '600',
    borderRadius: '8px',
    border: '2px solid #1D3557',
    transition: 'all 0.2s',
  }

  const containerStyle: React.CSSProperties = {
    maxWidth: '1000px',
    margin: '0 auto',
  }

  const cardStyle: React.CSSProperties = {
    border: '1px solid #e0e0e0',
    borderRadius: '12px',
    padding: '2rem',
    backgroundColor: 'rgba(255, 255, 255, 0.02)',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  }

  const layoutStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: '1fr 2fr',
    gap: '2rem',
    alignItems: 'start',
  }

  const imageContainerStyle: React.CSSProperties = {
    textAlign: 'center',
    padding: '2rem',
    backgroundColor: 'rgba(42, 157, 143, 0.05)',
    borderRadius: '8px',
  }

  const emojiStyle: React.CSSProperties = {
    fontSize: '8rem',
    margin: '0',
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
    marginRight: '0.5rem',
  }

  const titleStyle: React.CSSProperties = {
    fontSize: '2rem',
    fontWeight: 'bold',
    margin: '0.5rem 0 1rem 0',
    color: '#1D3557',
  }

  const brandStyle: React.CSSProperties = {
    fontSize: '1rem',
    color: '#666',
    marginBottom: '1rem',
  }

  const priceStyle: React.CSSProperties = {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#FF6B35',
    margin: '1rem 0',
  }

  const ratingStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    margin: '1rem 0',
  }

  const starsStyle: React.CSSProperties = {
    color: '#FFB800',
    fontSize: '1.2rem',
  }

  const reviewsStyle: React.CSSProperties = {
    color: '#666',
    fontSize: '0.9rem',
  }

  const stockStyle: React.CSSProperties = {
    display: 'inline-block',
    padding: '0.5rem 1rem',
    backgroundColor: product.stock > 10 ? '#2A9D8F' : '#FF6B35',
    color: 'white',
    borderRadius: '8px',
    fontSize: '0.9rem',
    fontWeight: '600',
    margin: '1rem 0',
  }

  const descriptionStyle: React.CSSProperties = {
    lineHeight: '1.6',
    color: '#666',
    margin: '1.5rem 0',
  }

  const sectionTitleStyle: React.CSSProperties = {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    color: '#1D3557',
    margin: '2rem 0 1rem 0',
  }

  const specListStyle: React.CSSProperties = {
    listStyle: 'none',
    padding: '0',
  }

  const specItemStyle: React.CSSProperties = {
    padding: '0.75rem',
    marginBottom: '0.5rem',
    backgroundColor: 'rgba(29, 53, 87, 0.05)',
    borderRadius: '6px',
    borderLeft: '3px solid #2A9D8F',
  }

  const buttonStyle: React.CSSProperties = {
    padding: '1rem 2.5rem',
    backgroundColor: '#FF6B35',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    marginTop: '2rem',
    width: '100%',
    transition: 'background-color 0.2s',
  }

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 >= 0.5
    let stars = '★'.repeat(fullStars)
    if (hasHalfStar) stars += '☆'
    return stars.padEnd(5, '☆')
  }

  return (
    <div style={containerStyle}>
      <Link
        to="/productos"
        style={backLinkStyle}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#1D3557'
          e.currentTarget.style.color = 'white'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'transparent'
          e.currentTarget.style.color = '#1D3557'
        }}
      >
        ← Volver a Productos
      </Link>

      <div style={cardStyle}>
        <div style={layoutStyle}>
          <div style={imageContainerStyle}>
            <div style={emojiStyle}>{product.imageUrl}</div>
          </div>

          <div>
            <div>
              <span style={badgeStyle}>{product.category}</span>
              <span style={badgeStyle}>{product.sport}</span>
            </div>

            <h1 style={titleStyle}>{product.name}</h1>

            <p style={brandStyle}>
              <strong>Marca:</strong> {product.brand}
            </p>

            <div style={ratingStyle}>
              <span style={starsStyle}>{renderStars(product.rating)}</span>
              <span style={reviewsStyle}>
                {product.rating} ({product.reviewsCount} reseñas)
              </span>
            </div>

            <p style={priceStyle}>${product.price.toFixed(2)}</p>

            <span style={stockStyle}>
              {product.stock > 10
                ? `✓ En stock (${product.stock} disponibles)`
                : `⚠️ Pocas unidades (${product.stock} disponibles)`}
            </span>

            <p style={descriptionStyle}>{product.description}</p>

            <button
              style={buttonStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#e55a2a'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#FF6B35'
              }}
            >
              🛒 Agregar al carrito
            </button>
          </div>
        </div>

        <div>
          <h2 style={sectionTitleStyle}>Especificaciones Técnicas</h2>
          <ul style={specListStyle}>
            {product.specifications.map((spec, index) => (
              <li key={index} style={specItemStyle}>
                {spec}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
