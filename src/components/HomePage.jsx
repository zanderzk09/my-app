import { HomeAbout } from './HomeAbout';
import { HomeContact } from './HomeContact';
import { HomeHeader } from './HomeHeader'
import { HomeTechnologies } from './HomeTechnologies';
import { Navbar } from './Navbar';
import { PortfolioButton } from './PortfolioButton';

export const HomePage = () => {

  return (
    <div className={`relative flex flex-col min-h-screen `}>

      <div id="home" className="">
        <Navbar />
      </div>

      <div className="">
        <PortfolioButton/>
      </div>

      <div id="" className="">
        <HomeHeader/>
      </div>
  
      <div className="">
        <HomeTechnologies/>
      </div>

      <div id="about" >
        <HomeAbout/>
      </div>

      <div id="contact" >
        <HomeContact/>
      </div>

    </div>
  )
}
