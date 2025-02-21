import { VideoBannerResults } from "@/types/videobannertype";
import Link from "next/link";
import VideoComponent from "./videocomponent";

type Props = {
   allVideoBanner : VideoBannerResults
}


const VideoBannerComponent = ({allVideoBanner}: Props)=> {
    const banner = allVideoBanner.results[0];
    return(

<>
<section className="hero" id="section_1">
<div className="container">
    <div className="row">

        <div className="col-lg-5 col-12 m-auto">
            <div className="hero-text">

                <h1 className="text-white mb-4"><u className="text-info">Leadership Conference</u> 2025</h1>

                <div className="d-flex justify-content-center align-items-center">
                    <span className="date-text">September 23, 2025</span>

                    <span className="location-text">Hyderabad, India</span>
                </div>

                <Link href="#section_2" className="custom-link bi-arrow-down arrow-icon"></Link>
            </div>
        </div>
    </div>
</div>

<div className="video-wrap">
    <video autoPlay loop muted className="custom-video" poster="">
        <source src="../pexels-pavel-danilyuk-8716790.mp4" type="video/mp4" />

        Your browser does not support the video tag.
    </video>
</div>
</section>


<section className="highlight">
<div className="container">
    <div className="row">
<VideoComponent videosectionResults={banner.highlightssection}/>
      </div>
</div>
</section>
</>
    )}
    export default VideoBannerComponent
