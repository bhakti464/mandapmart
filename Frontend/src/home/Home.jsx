import 'react';
import Banner from './../components/Banner';
import Navbar from '../components/Navbar';
import Decor from './../components/Decor';
import Footer from './../components/Footer';
function Home() {
  return (
    <div>
      <>
        <Navbar/>
        <Banner/>
        <Decor/>
        <Footer/>
    </>
    </div>
  )
}

export default Home
