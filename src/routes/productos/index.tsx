import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/productos/')({
  component: ProductsPage,
})

function ProductsPage() {
  const products = [
    { id: '1', name: 'Producto 1', description: 'Descripción del producto 1' },
    { id: '2', name: 'Producto 2', description: 'Descripción del producto 2' },
    { id: '3', name: 'Producto 3', description: 'Descripción del producto 3' },
    { id: '4', name: 'Producto 4', description: 'Descripción del producto 4' },
    { id: '5', name: 'Producto 5', description: 'Descripción del producto 5' },
  ]

  return (
    <div>
      <h1>Catálogo de Productos</h1>
      <p>Haz clic en un producto para ver más detalles.</p>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {products.map((product) => (
          <li
            key={product.id}
            style={{
              border: '1px solid #ccc',
              borderRadius: '8px',
              padding: '1rem',
              marginBottom: '1rem',
            }}
          >
            <h3 style={{ margin: '0 0 0.5rem 0' }}>{product.name}</h3>
            <p style={{ margin: '0 0 0.5rem 0', color: '#666' }}>
              {product.description}
            </p>
            <Link
              to="/productos/$productId"
              params={{ productId: product.id }}
              style={{ color: '#646cff', textDecoration: 'none' }}
            >
              Ver detalles →
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
