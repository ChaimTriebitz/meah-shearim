import React from 'react'
import { svgs } from './assets/svgs'


export const Footer = () => {
   return (
      <footer className='footer cmp'>
         <p>For more information,</p>
         <b>contact Attorney Aaron Volk </b>
         <div className='contact-us'>
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
         </div>
      </footer>
   )
}
