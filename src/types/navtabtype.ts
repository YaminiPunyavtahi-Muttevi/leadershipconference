

type Navtab ={
    id:string
    name:string
    navtext:string
    navdate: Date
  }
  export default Navtab
  
  export type NavtabResults =
  {
  total:string;
   results:Navtab[];
  
  }
  