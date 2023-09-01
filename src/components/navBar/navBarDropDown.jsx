import React from 'react'
import NavBarLinks from './NavBarLinks'
import ThemeChanger from '../Provider/ThemChanger'

const NavBarDropDown = () => {
    return (
        <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-neutral text-neutral-content mt-3 z-[1] p-2 shadow  rounded-box w-52">
                <NavBarLinks></NavBarLinks>
                <div className=' ms-3'>
                    <ThemeChanger></ThemeChanger>
                </div>

            </ul>
        </div>
    )
}

export default NavBarDropDown
