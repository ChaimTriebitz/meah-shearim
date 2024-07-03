import { useState } from 'react'
import pdf from './assets/pdf/plans.pdf'




export const PDF = ({ scrollRef }) => {
   const [isLoading, setIsLoading] = useState(true)
   return (
      <div className='pdf' ref={scrollRef}>
         <p>{isLoading ? 'Loading...' : ''}</p>
         
         <iframe
            src={pdf}
            title="PDF Viewer"
            width="100%"
            height="100%"
            style={{ border: 'none' }}
            onLoad={() => setIsLoading(false)}
         />
      </div>
   )
}
