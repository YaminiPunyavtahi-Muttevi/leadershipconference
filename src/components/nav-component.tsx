import Nav, { NavResults } from '../types/navtype';
import Link from 'next/link';
import { useRouter } from "next/router";


type Props = {
    navResults: NavResults;
}

const Nav = ({navResults}: Props) => {
    const router = useRouter();
    const currentRoute = router.pathname;

    return(
       <>
        {navResults.results.map((menu: Nav,index) => (
        
<li className="nav-item" key={index}><Link className={currentRoute === menu.navlink ? "active" : " " + "nav-link click-scroll"} href={menu.navlink}>{menu.navname}</Link>
     </li>
   
        ))}
    
        </>
    )

} 

export default Nav;