import { videoResults } from "./videotype"

type VideoBanner ={
    id:string
    name:string
    highlightssection: videoResults
  }
  export default VideoBanner
  
  export type VideoBannerResults=
  {
  total:string;
   results:VideoBanner[];
  
  }
  