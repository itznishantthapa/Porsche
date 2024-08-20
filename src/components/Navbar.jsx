import React from 'react'
import porsche_logo from '../assets/logo.png';

function Navbar() {
    return (
        <>

            <div className="navbar flex justify-between items-center  h-[15vh] font-michroma px-4">
                <div className="logo h-[70px] w-[100px] ml-2">
                    <img  src={porsche_logo} alt="Logo" />
                </div>
                <div className="nav-elements flex justify-between items-center list-none w-[70vh] ">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Pricing</li>
                    <li>Contact</li>
                </div>
                <div className="signup">
                    <button className='bg-custom-red text-white h-[56px] w-[182px] rounded-3xl'>Sign Up</button>
                </div>
            </div>

        </>
    )
}

export default Navbar