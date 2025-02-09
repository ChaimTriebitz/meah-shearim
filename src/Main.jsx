import wave from './assets/imgs/wave.png'
import mainImg from './assets/imgs/main-img.png'
import { Form } from './Form'

export const Main = () => {
   return (
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
               <div className="card">
                  <b>Customization</b>
                  <p>Opportunity for upgrades according to personal taste</p>
               </div>
               <div className="card">
                  <b>Modern Amenities</b>
                  <p>Sukkah Balcony, Safe room (Mamad), elevator</p>
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
   )
}
