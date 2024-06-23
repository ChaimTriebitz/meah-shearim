import { svgs } from './assets/svgs'

function App() {

   return (
      <div className="App" >
         <header className='header'></header>
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
