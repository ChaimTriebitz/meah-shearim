import { svgs } from './assets/svgs'
import logo from './assets/imgs/logo-transparent.png'
import headerImg from './assets/imgs/header-img.png'
import wave from './assets/imgs/wave.png'
import mainImg from './assets/imgs/main-img.png'

function App() {

   return (
      <div className="App" >
         <header className='header cmp'>
            <section className="left">
               <div className="logo">
                  <img  src={logo} alt="logo" />
               </div>
               <div className="txt">
                  <h1>YOUR DREAM</h1>
                  <h1>APARTMENT</h1>
                  <span className='rec'></span>
                  <h1>in the pulsing heart</h1>
                  <h1>of Yerushalayim</h1>
               </div>
            </section>
            <div className="img">
               <img src={headerImg} alt="" />
            </div>
         </header>

         <main className='main cmp'>
            <div className="title">
               <img src={wave} alt="" />
               <div className="txt">
                  <h1>Your best investment for</h1>
                  <h1>long-term housing or short-term rentals</h1>
               </div>
            </div>
            <div className="cards">
               <div className="row">
                  <div className="sub-title ">
                     <h2>We are offering 16 beautifully designed 2-room units</h2>
                     <h2>across 4 floors, each finished to the highest</h2>
                     <h2>standards and providing a unique living experience</h2>
                     <h2>in the pulsing heart of chareidi Jerusalem</h2>
                  </div>
                  <div className="card">
                     <b>State-of-the-art design</b>
                     <p>Superior finishing ensures comfort and elegance</p>
                  </div>
               </div>
               <div className="row">
                  <div className="card">
                     <b>Customization</b>
                     <p>Opportunity for upgrades according to personal taste</p>
                  </div>
                  <div className="card">
                     <b>Modern Amenities</b>
                     <p>Balcony, safe room, elevator</p>
                  </div>
               </div>
               <div className="row">
                  <div className="card">
                     <b>Stunning Views</b>
                     <p>Upper units offer awe-inspiring views of Jerusalem including the Old City</p>
                  </div>
                  <div className="card">
                     <b>Prime Location</b>
                     <p>Experience the most vibrant, authentic part of Jerusalem</p>
                  </div>
               </div>
            </div>
            <div className="img">
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
      </div>
   )
}

export default App
