import { IntroSection, ShowSection } from '@/components/pages'
import { PortfolioLayout } from '@/components/shared'


const HomePage = () => {
  return (
    <PortfolioLayout className='grid grid-cols-2'>
      <IntroSection />
      <ShowSection />
    </PortfolioLayout>
  )
}

export default HomePage