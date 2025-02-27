import 'react'
import Navbar from '../components/Navbar'
import Collection from './../components/Collection';
import Footer from '../components/Footer';
import list from "../../public/list.json" 

function Collections() {
    console.log(list)
  return (
    <div>
      <>
      <Navbar/>
      <div className='min-h-screen'><Collection/></div>
      <Footer/>
      </>
    </div>
  )
}

export default Collections
