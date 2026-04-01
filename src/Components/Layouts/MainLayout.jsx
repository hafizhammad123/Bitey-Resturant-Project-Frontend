import Announcement from './Announcement'
import Navbar from './Navbar'


const MainLayout = ({children}) => {
  return (
   <>
    <Announcement />
    <Navbar/>
 
    {children}
   </>
  )
}

export default MainLayout
