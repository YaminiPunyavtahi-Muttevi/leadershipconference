type Ticket ={

    id:string
    name:string
    pricetitle:string
    price:string
    icontext:string
    icontitle:string
    iconcomment:string
    pricedescription:string
    buttontext:string
    }
    
    export default Ticket
    
    export type TicketResults ={
    
    total:string;
    results: Ticket[];
    }

