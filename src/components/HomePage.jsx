import { HomeAbout } from './HomeAbout';
import { HomeContact } from './HomeContact';
import { HomeHeader } from './HomeHeader'
import { HomeTechnologies } from './HomeTechnologies';
import { Navbar } from './Navbar';
import { PortfolioButton } from './PortfolioButton';

export const HomePage = () => {

  return (
    <div className={`flex flex-col min-h-screen `}>

      <div className="">
        <Navbar />
      </div>

      <div className="">
        <PortfolioButton/>
      </div>

      <div id="home" className="">
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
