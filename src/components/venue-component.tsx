import { VenueResults } from "@/types/venuetype"
import Link from "next/link";
type Props ={

allVenue : VenueResults

}
const VenueComponent = ({allVenue}:Props)=>{
    const venue = allVenue.results[0];
return(
<section className="venue section-padding" id="section_6">
<div className="container">
    <div className="row">

        <div className="col-lg-12 col-12">
            <h2 className="mb-5">Here you go <u className="text-info">Venue</u></h2>
        </div>

        <div className="col-lg-6 col-12">
            <iframe className="google-map" src={venue.maplink} width="100%" height="371.59"  loading="lazy"></iframe>
        </div>

        <div className="col-lg-6 col-12 mt-5 mt-lg-0">
            <div className="venue-thumb bg-white shadow-lg">
                
                <div className="venue-info-title">
                    <h2 className="text-white mb-0">{venue.venuetext}</h2>
                </div>

                <div className="venue-info-body">
                    <h4 className="d-flex">
                        <i className="bi-geo-alt me-2"></i> 
                        <span>{venue.venueinfo}</span>
                    </h4>

                    <h5 className="mt-4 mb-3">
                        <Link href="mailto:123@gmail.com">
                            <i className="bi-envelope me-2"></i>
                           {venue.venueemail}
                        </Link>
                    </h5>

                    <h5 className="mb-0">
                        <Link href="tel: 1234567890">
                            <i className="bi-telephone me-2"></i>
                           {venue.venuenumber}
                        </Link>
                    </h5>
                </div>
            </div>
        </div>

    </div>
</div>
</section>
)}
export default VenueComponent;