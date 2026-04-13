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
        <MainLayout>
           <Slider/>
           <PopularItems/>
           <DealCards/>
           <BurgersCard/>
           <Broast/>
           <SandWich/>
           <Pizza/> 
           <PizzaSandwich/>
           <Pasta/>
           <Lasagna/>
           <Bbq/>
           <Roll/>
           <Fries/>
           <Extra />
        </MainLayout>     
    </>
  )
}

export default Home