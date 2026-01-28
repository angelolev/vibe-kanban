import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <div>
      <h1>Bienvenido al Sistema Kanban</h1>
      <p>Esta es la página principal del proyecto.</p>
      <p>
        Navega a <Link to="/productos" style={{ color: '#646cff' }}>Productos</Link> para ver el catálogo.
      </p>
    </div>
  )
}
