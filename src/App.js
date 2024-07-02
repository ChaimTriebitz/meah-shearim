import { svgs } from './assets/svgs'
import logo from './assets/imgs/logo-transparent.png'
import headerImg from './assets/imgs/header-img.png'

import video from './assets/videos/meah-shearim.mp4'
import ariImg from './assets/imgs/ari.jpg'
import ariVideo from './assets/videos/ari.mp4'
import { Form } from './Form'
import { Footer } from './Footer'
import { Main } from './Main'
// import { PDFViewer } from './PDFViewer'


function App() {

   return (
      <div className="App" >
         <header className='header cmp'>
            <section className="left">
               <div className="logo">
                  <img src={logo} alt="logo" />
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
         <Form />

         <Main />
         <div className="video">
            <video controls>
               <source src={video} type="video/mp4" />
               Your browser does not support the video tag.
            </video>
         </div>
         <div className="ari">
            <img src={ariImg} alt="" />
            <video controls>
               <source src={ariVideo} type="video/mp4" />
               Your browser does not support the video tag.
            </video>
         </div>
         <Footer />
         {/* <PDFViewer /> */}
      </div>
   )
}

export default App


