import logo from './assets/imgs/logo-transparent.png'
import headerImg from './assets/imgs/header-img.png'

export const Header = () => {
   return (
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
   )
}
