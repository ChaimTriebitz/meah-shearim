
function importAll(r) {
   return r.keys().map(r);
}

const images = importAll(require.context('./assets/imgs/plans', false, /\.(png|jpe?g|svg)$/));



export const PDF = ({ scrollRef }) => {
   return (
      <div className='pdf' ref={scrollRef}>
         {images.map((image, index) => (
            <div className='img' key={index} >
               <img src={image} alt={`Page ${index + 1}`} />
            </div>
         ))}
      </div>
   )
}
