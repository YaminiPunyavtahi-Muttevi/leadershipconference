import {SUGCONFooterResults} from '../types/footer'
import Link from 'next/link';
import Head from 'next/head';
import Nav from '@/types/navtype';
type Props = {
    allFooters: SUGCONFooterResults;
}

const SUGCONFooter = ({allFooters}: Props) => {
    const footer = allFooters.results[0];
    return(
        <footer className="site-footer">
        <div className="container">
            <div className="row align-items-center">

                <div className="col-lg-12 col-12 border-bottom pb-5 mb-5">
                    <div className="d-flex">
                        <a href="#" className="navbar-brand">
                       <i className="bi bi-people-fill brand-logo"></i>
                            <span className="brand-text">Leadership Conference<br/> 2025</span>
                        </a>

                        <ul className="social-icon ms-auto">
                            <li><Link href={footer.sociallinks.results[0].sociallink} className="social-icon-link bi-linkedin"> </Link></li>

                            <li><Link href={footer.sociallinks.results[1].sociallink} className="social-icon-link bi-facebook"></Link></li>

                            <li><Link href={footer.sociallinks.results[2].sociallink} className="social-icon-link bi-twitter"></Link></li>
                        </ul>
                    </div>
                </div>

                <div className="col-lg-7 col-12">
                    <ul className="footer-menu d-flex flex-wrap">
                            {footer.menuitems.results.map((menu:Nav,index)=> (
                        <li className="footer-menu-item" key={index}>
                            <Link href={menu.navlink} className="footer-menu-link">{menu.navname}</Link>

                        </li>
                            ))}
                        
                       
                    </ul>
                </div>

                    
                <div className="col-lg-5 col-12 ms-lg-auto">
                    <div className="copyright-text-wrap d-flex align-items-center">
                        <p className="copyright-text ms-lg-auto me-4 mb-0">{footer.copyrighttext}
                        
                        <br/>All Rights Reserved. 
      
                        </p>

                        <a href="#section_1" className="bi-arrow-up arrow-icon custom-link"></a>
                    </div>
                </div>

            </div>
        </div>
    </footer>
    )
}
export default SUGCONFooter