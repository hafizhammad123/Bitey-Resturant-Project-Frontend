import MainLayout from '../Components/Layouts/MainLayout'
import FoodCard from '../Components/Ui/Card'
import Slider from '../Components/Ui/Slider'

const Home = () => {
  return (
    <>
        <MainLayout>
           <Slider/>
           <FoodCard/>
        </MainLayout>     
    </>
  )
}

export default Home