import FeatureCard, { FeatureCardResults } from "@/types/featurecardtype"
import Image from "next/image"
type Props={

    allFeatureCards: FeatureCardResults
}

const FeatureCardComponent = ({allFeatureCards}:Props)=>{

    return(

<>
{allFeatureCards.results.map((card:FeatureCard,index)=>(


<div className="col-lg-3 col-md-6 col-12" key={index}>
                                    <div className="speakers-thumb speakers-thumb-small">
                                        <Image src={card.featureimage.results[0].fileUrl} className="img-fluid speakers-image" alt={""} height={400} width={400}/>

                                        <div className="speakers-info">
                                            <h5 className="speakers-title mb-0">{card.featuretitle}</h5>

                                            <p className="speakers-text mb-0">{card.featuretext}</p>

                                            <ul className="social-icon">
                                                <li><a href="#" className="social-icon-link bi-facebook"></a></li>

                                                <li><a href="#" className="social-icon-link bi-instagram"></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
))}
</>


    )


}
export default FeatureCardComponent