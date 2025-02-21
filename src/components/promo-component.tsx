import { PromoResults } from "@/types/promotype"
import Link from "next/link";

type Props={

    allPromo: PromoResults;
}

const PromoComponent = ({allPromo}:Props)=>{
  const promo = allPromo.results[0];
return (

<>
<section className="call-to-action section-padding">
                <div className="container">
                    <div className="row align-items-center">

                        <div className="col-lg-7 col-12">
                            <h2 className="text-white mb-4">Become an <u className="text-info">event speaker?</u></h2>

                            <p className="text-white">{promo.promodescription}</p>
                        </div>

                        <div className="col-lg-3 col-12 ms-lg-auto mt-4 mt-lg-0">
                            <Link href="#section_5" className="custom-btn btn">{promo.promobuttontext}</Link>
                        </div>

                    </div>
                </div>
            </section>

</>

)


}
export default PromoComponent