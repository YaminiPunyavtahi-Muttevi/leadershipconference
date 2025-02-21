import { MediaResults } from "./mediatype"

type About ={
    id:string
    name:string
    title:string
    description:string
    shortdescription:string
    images:MediaResults
    text:string
  }
  export default About
  
  export type AboutResults =
  {
  total:string;
   results:About[];
  
  }
  