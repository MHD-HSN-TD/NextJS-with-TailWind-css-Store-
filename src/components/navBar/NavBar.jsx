import Link from 'next/link'
import NavBarLinks from './NavBarLinks'
import NavBarDropDown from './navBarDropDown'
import { Montserrat } from 'next/font/google'
import Btn from '../elements/Btn'
import ThemeChanger from '@/components/Provider/ThemChanger'


const montserrat = Montserrat({ subsets: ['latin'], weight: ["300"] })

const NavBar = () => {


    return (
        <>
            <div className="navbar bg-neutral text-neutral-content" >

                <div className="navbar-start">
                    <NavBarDropDown />
                    <Link href={'/'} className={`btn btn-ghost normal-case text-xl  ${montserrat.className}`} >HEXSHOPE</Link>
                </div>
                <div>
                </div>



                <div className="navbar-end hidden lg:flex me-10  ">
                    <ul className="menu menu-horizontal px-3">
                        <NavBarLinks />
                        <Btn className='btn-success' name='Log In'></Btn>
                    </ul>
                    <ThemeChanger></ThemeChanger>
                </div>

            </div >
        </>
    )
}

export default NavBar
