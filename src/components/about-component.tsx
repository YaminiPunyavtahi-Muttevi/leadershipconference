import { AboutResults } from "@/types/aboutype"
import Image from "next/image";
import Link from "next/link";

type Props={

    allAbout : AboutResults;

}

const AboutComponent = ({allAbout}: Props) => {
    const about = allAbout.results[0];
    return(
<>
<section className="about section-padding" id="section_2">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-10 col-12">
                            <h2 className="mb-4">Our <u className="text-info">Story</u></h2>
                        </div>

                        <div className="col-lg-6 col-12">
                            <h3 className="mb-3">{about.title}</h3>

                            <p>{about.description}</p>

                            <Link className="custom-btn custom-border-btn btn custom-link mt-3 me-3" href="#section_3">Meet Speakers</Link>

                            <Link className="custom-btn btn custom-link mt-3" href="#section_4">Check out Schedule</Link>
                        </div>

                        <div className="col-lg-6 col-12 mt-5 mt-lg-0">
                            <h4>{about.shortdescription}</h4>

                            <div className="avatar-group border-top py-5 mt-5">
                                <Image src={about.images.results[0].fileUrl} className="img-fluid avatar-image" alt={""} height={400} width={400}/>

                                <Image src={about.images.results[1].fileUrl} className="img-fluid avatar-image avatar-image-left" alt={""}  height={400} width={400} />

                                <Image src={about.images.results[2].fileUrl} className="img-fluid avatar-image avatar-image-left" alt={""}  height={400} width={400}/>

                                <Image src={about.images.results[3].fileUrl} className="img-fluid avatar-image avatar-image-left" alt={""}  height={400} width={400}/> 

                                <p className="d-inline">{about.text}</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


</>
    )
}
export default AboutComponent;