import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/productos/$productId')({
  component: ProductDetailPage,
})

function ProductDetailPage() {
  const { productId } = Route.useParams()

  // Simulated product data - in a real app, this would come from an API
  const productData: Record<string, { name: string; description: string; price: string; details: string }> = {
    '1': {
      name: 'Producto 1',
      description: 'Descripción del producto 1',
      price: '$99.99',
      details: 'Este es un producto de alta calidad con características premium.',
    },
    '2': {
      name: 'Producto 2',
      description: 'Descripción del producto 2',
      price: '$149.99',
      details: 'Producto innovador con tecnología de última generación.',
    },
    '3': {
      name: 'Producto 3',
      description: 'Descripción del producto 3',
      price: '$79.99',
      details: 'Excelente relación calidad-precio para uso diario.',
    },
    '4': {
      name: 'Producto 4',
      description: 'Descripción del producto 4',
      price: '$199.99',
      details: 'Producto premium diseñado para profesionales.',
    },
    '5': {
      name: 'Producto 5',
      description: 'Descripción del producto 5',
      price: '$59.99',
      details: 'Opción económica sin comprometer la calidad.',
    },
  }

  const product = productData[productId]

  if (!product) {
    return (
      <div>
        <h1>Producto no encontrado</h1>
        <p>El producto con ID "{productId}" no existe.</p>
        <Link to="/productos" style={{ color: '#646cff' }}>
          ← Volver a Productos
        </Link>
      </div>
    )
  }

  return (
    <div>
      <Link to="/productos" style={{ color: '#646cff', textDecoration: 'none', marginBottom: '1rem', display: 'inline-block' }}>
        ← Volver a Productos
      </Link>
      <div
        style={{
          border: '1px solid #ccc',
          borderRadius: '8px',
          padding: '2rem',
          marginTop: '1rem',
        }}
      >
        <h1 style={{ margin: '0 0 1rem 0' }}>{product.name}</h1>
        <p style={{ fontSize: '1.5rem', color: '#646cff', fontWeight: 'bold', margin: '0 0 1rem 0' }}>
          {product.price}
        </p>
        <p style={{ margin: '0 0 1rem 0', color: '#666' }}>{product.description}</p>
        <hr style={{ margin: '1.5rem 0', border: 'none', borderTop: '1px solid #eee' }} />
        <h2 style={{ margin: '0 0 0.5rem 0', fontSize: '1.2rem' }}>Detalles</h2>
        <p style={{ margin: '0', lineHeight: '1.6' }}>{product.details}</p>
        <div style={{ marginTop: '2rem' }}>
          <button
            style={{
              padding: '0.75rem 2rem',
              backgroundColor: '#646cff',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '1rem',
            }}
          >
            Agregar al carrito
          </button>
        </div>
      </div>
      <p style={{ marginTop: '1rem', color: '#666', fontSize: '0.9rem' }}>
        ID del producto: {productId}
      </p>
    </div>
  )
}
