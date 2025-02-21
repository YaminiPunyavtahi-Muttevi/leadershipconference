import { SpeakerResults } from "@/types/speakerstype"
import FeatureCardComponent from "./featurecardcomponent";
import Image from "next/image";
import Link from "next/link";
type Props={

    allSpeakers: SpeakerResults;
}

 const SpeakerComponent = ({allSpeakers}:Props)=>{
     const speaker = allSpeakers.results[0];
return(

<>
<section className="speakers section-padding" id="section_3">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-6 col-12 d-flex flex-column justify-content-center align-items-center">
                            <div className="speakers-text-info">
                                <h2 className="mb-4">Our <u className="text-info">Speakers</u></h2>

                                <p>{speaker.text}</p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-12">
                            <div className="speakers-thumb">
                                <Image src={speaker.image.results[0].fileUrl} className="img-fluid speakers-image" alt={""} height={400} width={400}/>

                                <small className="speakers-featured-text">Featured</small>

                                <div className="speakers-info">

                                    <h5 className="speakers-title mb-0">{speaker.speakertitle}</h5>

                                    <p className="speakers-text mb-0">{speaker.speakertext}</p>

                                    <ul className="social-icon">
                                        <li><Link href="#" className="social-icon-link bi-facebook"></Link></li>

                                        <li><Link href="#" className="social-icon-link bi-instagram"></Link></li>

                                        <li><Link href="#" className="social-icon-link bi-google"></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>


                        <div className="col-lg-12 col-12">
                            <div className="row">
                            <FeatureCardComponent allFeatureCards={speaker.featurecards} />
                            </div>
                        </div>

                    </div>
                </div>
            </section>

</>
)

}
 export default SpeakerComponent