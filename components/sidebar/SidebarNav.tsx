import { useMainContext } from 'components/context/MainContext'
import { SidebarProduct } from './SidebarProduct'
import { SidebarHomepage } from './SidebarHomepage'

export const SidebarNav = () => {
  const { error, currentProduct } = useMainContext()

  return (
    <div
      className="d-none d-lg-block bg-primary position-sticky overflow-y-auto flex-shrink-0 pb-11 border-right"
      style={{ width: 326, height: '100vh', top: '67px' }}
      role="banner"
    >
      <nav>
        {error === '404' || !currentProduct || currentProduct.id === 'search' ? (
          <SidebarHomepage />
        ) : (
          <SidebarProduct />
        )}
      </nav>
    </div>
  )
}
