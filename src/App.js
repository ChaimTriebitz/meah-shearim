import video from './assets/videos/meah-shearim.mp4'
import ariImg from './assets/imgs/ari.jpg'
import ariVideo from './assets/videos/ari.mp4'
import { Footer } from './Footer'
import { Main } from './Main'
import { Form } from './Form'
// import { PDFViewer } from './PDFViewer'
import { useRef } from 'react'
import { Msg } from './Msg'
import { PDF } from './PDF'
import { Header } from './Header'




function App() {
   document.title = 'Meah-Shearim'
   const scrollRef = useRef(null)


   return (
      <div className="App" >
         <Msg />
         <Header />
         <Form />

         <Main />
         <div className="video">
            <video autoPlay muted controls>
               <source src={video} type="video/mp4" />
               Your browser does not support the video tag.
            </video>
         </div>
         <div className="ari">
            <video controls poster={ariImg}>
               <source src={ariVideo} type="video/mp4" />
               Your browser does not support the video tag.
            </video>
         </div>
         <Footer />
         <PDF scrollRef={scrollRef} />
      </div>
   )
}

export default App


