import React from 'react'
import './Signup.css'
import Crypto from '../assets/trade.png'
const Signup = () => {
  return (
    <div className='signup'>
        <div className='conatiner'>
            {/* left */}
            <div className='left'>
                <img src = {Crypto} alt=''/>
            </div>

            {/*right*/}
            <div className='right'>
                <h2>Earn Passive Income With Crypto</h2>
                <p>Earn up to 12% annual rewards on 20+ digital assests. Simply hold your assets in the app earn rewards by default at end of each months with no extra taxations. </p>
                <div className='input-conatiner'>
                    <input type='email' placeholder='Enter Your Email'/>
                    <button className='btn'>Learn More</button>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Signup
