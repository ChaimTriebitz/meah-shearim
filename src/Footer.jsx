import React from 'react'
import { svgs } from './assets/svgs'


export const Footer = () => {
   return (
      <footer className='footer cmp'>
         <p>For more information,</p>
         <b>contact Attorney Aaron Volk </b>
         <div className='contact-us'>
            <a className="item"
               href={`tel:6179554404`}
               title={'call me'}
            >
               {svgs.phone}
               <p>(617) 955-4404</p>
               <span>|</span>
            </a>
            <a className="item"
               href="https://wa.me/972544978899?text=meah%20shearim"
               title={'message me'}

            >
               {svgs.whatsapp}
               <p>+972 544 978899</p>
               <span>|</span>
            </a>
            <a
               className="item"
               href={`mailto:a@volk.co.il`}
               title={'mail me'}
            >
               {svgs.mail}
               <p>a@volk.co.il</p>
            </a>
         </div>
      </footer>
   )
}
