import '../Footer/Footer.css'
import 'tailwindcss'
import Logo from '../../assets/BooklyLogo.png';
import { Link } from 'react-router-dom';
export default function Footer() {
    return (
<footer className='w-full flex h-100 flex-row justify-center items-center font-sans py-8 mt-auto'>
  <div className='flex flex-row flex-wrap justify-center gap-8 max-w-6xl mx-auto px-4'>
    
    <div className='flex flex-col items-center justify-center min-w-[200px]'>
      <img src={Logo} className='w-8 h-8' alt='Company Logo' />
      <p className='mt-2 text-center'>Business Description</p>
    </div>
    
    <div className='flex flex-col min-w-[150px]'>
      <h3 className='font-bold mb-2'>Quick Links</h3>
      <Link to="/Home" className='hover:underline'>Home</Link>
      <Link to="/About" className='hover:underline'>About</Link>
      <Link to="/Login" className='hover:underline'>Login</Link>
      <Link to="/SignUp" className='hover:underline'>SignUp</Link>
    </div>

    <div className='flex flex-col min-w-[200px]'>
      <h3 className='font-bold mb-2'>Contact Us</h3>
      <p>
        Richmond, VA<br />
        +1 804-247-7171<br />
        info@americanstax.com
      </p>
    </div>
  </div>    
</footer>
    )
}