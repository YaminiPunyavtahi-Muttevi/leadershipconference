import { AboutResults } from "./aboutype"
import { SUGCONFooterResults } from "./footer"
import { SUGCONHeaderResults } from "./headertype"
import { PromoResults } from "./promotype"
import { SpeakerResults } from "./speakerstype"
import { TabsResults } from "./tabs"
import { TicketResults } from "./tickettype"
import { VenueResults } from "./venuetype"
import { VideoBannerResults } from "./videobannertype"


type page ={

    id:string
    name:string
    header:SUGCONHeaderResults
    video:VideoBannerResults
    about:AboutResults
    speakers:SpeakerResults
    tabs:TabsResults
    promo:PromoResults
    tickets:TicketResults
    venue:VenueResults
    footer:SUGCONFooterResults
}
    
    export default page
    
    export type pageResults ={
    
    total:string;
    results: page[];
    }