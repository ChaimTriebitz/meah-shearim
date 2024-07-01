import logo from './assets/imgs/logo-transparent.png'
import headerImg from './assets/imgs/header-img.png'
import wave from './assets/imgs/wave.png'
import mainImg from './assets/imgs/main-img.png'
import video from './assets/videos/meah-shearim.mp4'
import ariImg from './assets/imgs/ari.jpg'
import ariVideo from './assets/videos/ari.mp4'
import pdf from './assets/pdf/plans.pdf'
import { Footer } from './Footer'
import { useRef } from 'react'




function App() {
   document.title = 'Meah-Shearim'
   const scrollRef = useRef(null)


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
         {/* <Form /> */}

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
                     <h2>We are offering 16 beautifully designed apartments</h2>
                     <h2>Ranging from 2-room units to penthouses</h2>
                     <h2>Each apartment is finished to the highest standards </h2>
                     <h2>and can be customized according to your preferences</h2>
                  </div>
                  <div className="card">
                     <b>Mortgage Available</b>
                     <p>Attractive  terms</p>
                  </div>
               </div>
               <div className="row">
                  <button className='card' onClick={() => scrollRef.current.scrollIntoView({ behavior: 'smooth' })} >
                     {/* <a href="https://drive.google.com/file/d/1Eo-4uN91Z5S036xTX8EEd6KksoaAyTSN/view"><b>Customization</b></a> */}
                     <b >Customization</b>
                     <p>Opportunity for upgrades according to personal taste</p>
                  </button>
                  <div className="card">
                     <b>Modern Amenities</b>
                     <p>Sukkah Balcony, Safe room (MMAD), elevator</p>
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
         <div className="video">
            <video autoPlay muted controls>
               <source src={video} type="video/mp4" />
               Your browser does not support the video tag.
            </video>
         </div>
         <div className="ari">
            <video controls poster={ariImg}>
               <source src={ariVideo} type="video/mp4"  />
               Your browser does not support the video tag.
            </video>
         </div>
         <Footer />
         <div className='pdf' ref={scrollRef}>
            <iframe src={pdf} width="100%" height="100%" title="pdf-viewer">
               <p>Your browser does not support iframes.
                  <a href={pdf}>click here to download the PDF file.</a>
               </p>
            </iframe>
         </div>
      </div>
   )
}

export default App


