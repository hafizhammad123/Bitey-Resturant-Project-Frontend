import Announcement from './Announcement'
import Footer from './Footer'
import Navbar from './Navbar'


const MainLayout = ({ children }) => {
  return (
    <>
      <Announcement />
    
        <Navbar/>
    

      {children}

      <Footer />
    </>
  )
}

export default MainLayout
