import { Breadcrumbs } from '../Breadcrumbs'
import { useProductSubLandingContext } from 'components/context/ProductSubLandingContext'

export const SubLandingHero = () => {
  const { title, intro } = useProductSubLandingContext()
  return (
    <header className='d-flex gutter mb-6'>
      <div className='col-12'>
        <Breadcrumbs />
        <h1 className='my-3 font-mktg'>{title}</h1>
        <div 
          className='lead-mktg color-text-secondary f4 description-text' 
          dangerouslySetInnerHTML={{ __html: intro }} 
        />
      
      </div>
    </header>
  )
}