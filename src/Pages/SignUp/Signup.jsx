import { useState, useContext, useEffect } from "react"
import NavBar from "../../Components/NavBar/NavBar"
import Footer from "../../Components/Footer/Footer"
import '../SignUp/signup.css'
export default function SignUp() {
    return (
      <>
      
         <NavBar />
               <section className="signup-section">
                          
                    <div className='contain-signup'>
                         <div className='dot-1'></div>
                         <div className='dot-2'></div>
                         <div className='dot-3'></div>
                         <div className='dot-4'></div>
                        <h2>Lets Get You Started Pal!</h2>
                            <form className='form-signup'>
                              <div className='form-group'>
                                    <label htmlFor='name'>Full Name:</label>
                                    <input type='name' id='name' name='name'  placeholder='Enter your name' required />                           
                                </div>


                                <div className='form-group'>
                                    <label htmlFor='email'>Email:</label>
                                    <input type='email' id='email' name='email'  placeholder='Enter your email' required />                           
                                </div>

                                 <div className='form-group'>
                                    <label htmlFor='number'>Phone Number:</label>
                                    <input type='number' id='number' name='number'  placeholder='Enter your phone number' required />                           
                                </div>
                                <div className='form-group'>
                                    <label htmlFor='password'>Password:</label>
                                    <input type='password' id='password' name='password' placeholder='Enter your password' required />    
                                </div>
                                <button type='submit' className='signup-button bg-special cursor-pointer'>Sign Up</button>
                            </form>
                        </div>
                </section>
         <Footer />
      </>
    )
}