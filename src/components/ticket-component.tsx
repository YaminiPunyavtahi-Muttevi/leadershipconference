import Ticket, { TicketResults } from "@/types/tickettype"
import Link from "next/link"
type Props={

allTickets:TicketResults

}
const TicketComponent = ({allTickets}:Props)=>{

    return(
        
<section className="pricing section-padding" id="section_5">
<div className="container">
    <div className="row">

        <div className="col-lg-10 col-12 text-center mx-auto mb-5">
            <h2>Get Your <u className="text-info">Tickets</u></h2>
        </div>
{allTickets.results.map((ticket:Ticket,index)=>
        <div className="col-lg-4 col-md-6 col-12 mb-5 mb-lg-0" key={index}>
            <div className="pricing-thumb bg-white shadow-lg">                                
                <div className="pricing-title-wrap d-flex align-items-center">

                    <h4 className="pricing-title text-white mb-0">{ticket.pricetitle}</h4>

                    <h5 className="pricing-small-title text-white mb-0 ms-auto">{ticket.price}</h5>
                </div>

                <div className="pricing-body">
                    <p>
                        <i className="bi-cup me-2"></i> {ticket.icontitle}
                    </p>

                    <p>
                        <i className="bi-controller me-2"></i> {ticket.icontext}
                    </p>

                    <p>
                        <i className="bi-chat-square me-2"></i> {ticket.iconcomment}
                    </p>

                    <div className="border-bottom pb-3 mb-4"></div>

                    <p>{ticket.pricedescription}</p>

                    <Link className="custom-btn btn mt-3" href="#">{ticket.buttontext}</Link>
                </div>
            </div>
        </div>
)}
     </div>
     </div>
<div>

</div>
</section>

)}
export default TicketComponent;