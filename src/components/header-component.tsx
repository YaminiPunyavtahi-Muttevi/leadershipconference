import {SUGCONHeaderResults} from '../types/headertype'
import Nav from './nav-component';
import Link from 'next/link';
import Head from 'next/head';
type Props = {
    allHeaders: SUGCONHeaderResults;
}

const SUGCONHeader = ({allHeaders}: Props) => {
    const header = allHeaders.results[0];
    return (
      
        <header id="header">
        
                <nav className="navbar navbar-expand-lg">
            <div className="container">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <Link href="#" className="navbar-brand mx-auto mx-lg-0">
                <i className="bi bi-people-fill brand-logo"></i>
                    <span className="brand-text">Leadership Conference <br/> 2025</span>
                </Link>
                  
            
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                   <Nav navResults={header.navigation} />
                    </ul>
                <div>
                        
            </div>
            </div>
        </div>


                
</nav>

          
</header>
        
    )
}

export default SUGCONHeader