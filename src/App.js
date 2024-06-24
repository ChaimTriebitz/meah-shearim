import { svgs } from './assets/svgs'
import logo from './assets/imgs/logo-transparent.png'
import headerBanner from './assets/imgs/1.png'

function App() {

   return (
      <div className="App" >
         <header className='header'>
            <img className='banner' src={headerBanner} alt="" />
            <section className="section txt-section">
               <div className="img">
                  <img className='logo' src={logo} alt="logo" />
               </div>

               <h1>YOUR DREAM APARTMENT</h1>
               <span className='rec'></span>
               <h1>in the pulsing heart of Yerushalayim</h1>
            </section>
         </header>
         <main className='main'></main>
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
