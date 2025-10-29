import '../NavBar/NavBar.css'
import "tailwindcss";
import Logo from '../../assets/BooklyLogo.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { use, useEffect, useState } from 'react';
import { useTheme } from '@emotion/react';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

export default function NavBar() {
    const [clickStatus, isClicked] = useState(false);
    const clickDisplay = () => {
        isClicked(!clickStatus);
    } 
 

    return (
    <>
        <nav className='nav-bar'> 

            <div className="contain-2mobile">
                    <div className='flex items-center'>
                        <img src={Logo} alt='logo bookly' className='logo-width w-8 h-8' />
                    </div>

                    <div className='contain-burger'>
                             {clickStatus ? <FontAwesomeIcon  onClick={clickDisplay} className='burger-menue' icon={faBars} /> : <FontAwesomeIcon  onClick={clickDisplay} className='burger-menue' icon={faXmark} />}   
                    </div>
            </div>
        


            
            <div className='contain-link'>
                <Link to="/Home">Home</Link>
                <Link to="/About">About</Link>
                <Link to="/Login">Login</Link>
                <Link to="/SignUp">SignUp</Link>
            </div>

    

        <div className="contain-mobile">
    
        

                <div className={clickStatus ? 'contain-link-mobile' : 'contain-link-mobile hide'}> 
                        <Link className='url-link' to="/Home">Home</Link>
                        <Link className='url-link' to="/About">About</Link>
                        <Link className='url-link' to="/Login">Login</Link>
                        <Link className='url-link' to="/SignUp">SignUp</Link>
                    </div>
        </div>

        </nav>

    </>
       
    )
}