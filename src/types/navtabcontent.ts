import Media, { MediaResults } from "./mediatype"


type Navtabcontent ={
    id:string
    name:string
    eventimage:MediaResults
    tabtext:string
    tabdescription:string
    speakertext:string
    speakerimage:MediaResults
    speakertitle:string
    eventtime:Date
    eventlocation:string
  }
  export default Navtabcontent
  
  export type NavtabcontentResults =
  {
  total:string;
   results:Navtabcontent[];
  
  }
  