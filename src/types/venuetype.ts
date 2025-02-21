
type Venue ={

    id:string
    name:string
    maplink:string
    venuetext:string
    venueinfo:string
    venueemail:string
    venuenumber:string
   
    }
    
    export default Venue
    
    export type VenueResults ={
    
    total:string;
    results: Venue[];
    }