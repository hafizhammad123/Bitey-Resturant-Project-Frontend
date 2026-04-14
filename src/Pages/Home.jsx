import MainLayout from '../Components/Layouts/MainLayout'
import PopularItems from '../Components/Layouts/PopularItems'
import Bbq from '../Components/Ui/BBQ.JSX'
import Broast from '../Components/Ui/Broast'
import BurgersCard from '../Components/Ui/BurgersCard'
import DealCards from '../Components/Ui/DealsCard'
import Extra from '../Components/Ui/Extra'
import Fries from '../Components/Ui/Fries'
import Lasagna from '../Components/Ui/lasagna'
import Pasta from '../Components/Ui/Pasta'
import Pizza from '../Components/Ui/Pizza'
import PizzaSandwich from '../Components/Ui/PizzaSandwich'
import Roll from '../Components/Ui/Roll'
import SandWich from '../Components/Ui/Sandwich'
import Slider from '../Components/Ui/Slider'

const Home = () => {
  return (
    <>
      <MainLayout >
        <div id='home'>
          <Slider />
        </div>

        <PopularItems />
        <DealCards />
        <div id="burger">
          <BurgersCard />
        </div>

        <div id="broast">
          <Broast />
        </div>

        <div id="sandwich">
          <SandWich />
        </div>

        <div id="pizza">
          <Pizza />
        </div>

        <div id="pizzaSandwich">
          <PizzaSandwich />
        </div>

        <div id="pasta">
          <Pasta />
        </div>

        <div id="lasagna">
          <Lasagna />
        </div>

        <div id="bbq">
          <Bbq />
        </div>

        <div id="roll">
          <Roll />
        </div>

        <div id="fries">
          <Fries />
        </div>

        <div id="extra">
          <Extra />
        </div>
      </MainLayout>
    </>
  )
}

export default Home