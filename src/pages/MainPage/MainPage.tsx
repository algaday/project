import Accordion from '../../features/accordion/components/Accordion/Accordion'
import Advantages from '../../features/advantages/components/Advantages/Advantages'
import Banner from '../../features/banner/components/Banner/Banner'
import Feedback from '../../features/feedback/components/Feedback/Feedback'
import FullMenu from '../../features/foodsMenu/components/FullMenu/FullMenu'
import Hero from '../../features/headerHero/components/Hero/Hero'
import OfferBanner from '../../features/banner/components/OfferBanner/OfferBanner'
import SpecialMenu from '../../features/specialMenu/components/SpecialMenu/SpecialMenu'

function MainPage() {
  return (
    <>
      <Hero />
      <Advantages />
      <SpecialMenu />
      <Banner />
      <OfferBanner />
      <FullMenu />
      <Feedback />
      <Accordion />
    </>
  )
}

export default MainPage
