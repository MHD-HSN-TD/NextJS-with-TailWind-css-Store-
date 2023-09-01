import links from './data'
import Link from 'next/link'

const NavBarLinks = () => {

    //map for the  nav links

    return (
        <>
            {links.map(link => <li key={link.div}>
                <Link className="mx-2" href={link.href} > {link.name}</ Link></li>)}
        </>
    )
}

export default NavBarLinks
