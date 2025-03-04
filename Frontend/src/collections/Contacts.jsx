import 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import Contact from '../components/Contact';

function Contacts() {
  return (
    <div>
      <>
      <Navbar/>
      <div className='min-h-screen'><Contact /></div>
      <Footer/>
      </>
    </div>
  )
}

export default Contacts
