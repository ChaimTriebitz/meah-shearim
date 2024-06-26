import { svgs } from './assets/svgs'
import logo from './assets/imgs/logo-transparent.png'
import headerBanner from './assets/imgs/1.png'
import headerImg from './assets/imgs/2.png'

import mainBanner from './assets/imgs/4.png'
import mainImg from './assets/imgs/3.png'
import wave from './assets/imgs/wave.png'

function App() {

   return (
      <div className="App" >
         <header className='header cmp'>
            <img className='banner' src={headerBanner} alt="" />
            <section className="section txt-section">
               <div className="img">
                  <img className='logo' src={logo} alt="logo" />
               </div>

               <h1>YOUR DREAM APARTMENT</h1>
               <span className='rec'></span>
               <h1>in the pulsing heart of Yerushalayim</h1>
            </section>
            <div className="overlay">
               <img src={headerImg} alt="" />
            </div>
         </header>
         <main className='main cmp'>
            <img className='banner' src={mainBanner} alt="" />
            <img className='wave' src={wave} alt="" />
            <div className="title">
               <h1>Your best investment for</h1>
               <h1>long-term housing or short-term rentals</h1>
            </div>
            <div className="sub-title">
               <h2>We are offering 16 beautifully designed 2-room units</h2>
               <h2>across 4 floors, each finished to the highest</h2>
               <h2>standards and providing a unique living experience</h2>
               <h2>in the pulsing heart of chareidi Jerusalem</h2>
            </div>
            <div className="cards">
               <div className="card spacer" />
               <div className="card">
                  <b>State-of-the-art design</b>
                  <p>Superior finishing ensures comfort and elegance</p>
               </div>
               <div className="card">
                  <b>Customization</b>
                  <p>Opportunity for upgrades according to personal taste</p>
               </div>
               <div className="card">
                  <b>Modern Amenities</b>
                  <p>Balcony, safe room, elevator</p>
               </div>
               <div className="card">
                  <b>Stunning Views</b>
                  <p>Upper units offer awe-inspiring views of Jerusalem including the Old City</p>
               </div>
               <div className="card">
                  <b>Prime Location</b>
                  <p>Experience the most vibrant, authentic part of Jerusalem</p>
               </div>
            </div>
            <div className="overlay">
               <img src={mainImg} alt="" />
            </div>
            <div className="ribbon">
               <h2>LIMITED TIME OPPORTUNITY</h2>
               <h2>Take advantage of our special PRESALE</h2>
            </div>
            <div className="bottom">
               <div className="txt1">
                  <h2>Meet the future in a neighborhood that</h2>
                  <h2> preserves Jerusalem’s storied past.</h2>
               </div>
               <h1>Feel the pulse, experience the authenticity</h1>
            </div>
         </main>
         <footer className='footer'>
            <p>For more information,</p>
            <b>contact Attorney Aaron Volk </b>
            <section className='contact-us'>
               <div className="item">
                  {svgs.phone}
                  <p>(617) 955-4404</p>
                  <span>|</span>
               </div>
               <div className="item">
                  {svgs.whatsapp}
                  <p>+972 544 978899</p>
                  <span>|</span>
               </div>
               <div className="item">
                  {svgs.mail}
                  <p>a@volk.co.il</p>
               </div>
            </section>
         </footer>
         {/* <div className='cmp one'>
            <section className="section txt-section">
               <i className='logo'></i>
               <h1>YOUR DREAM APARTMENT</h1>
               <span className='rec'></span>
               <h1>in the pulsing heart of Yerushalayim</h1>
            </section>
            <section className="section-two img-section">
            </section>
         </div>
         <div className='cmp two'>
            <section className="section txt-section">
               <i className='logo'></i>
               <h1>YOUR DREAM APARTMENT</h1>
               <span className='rec'></span>
               <h1>in the pulsing heart of Yerushalayim</h1>
            </section>
            <section className="section-two img-section">
            </section>
         </div> */}
      </div>
   )
}

export default App
