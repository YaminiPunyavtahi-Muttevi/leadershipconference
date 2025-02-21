import { MediaResults } from "./mediatype"



type video ={

    id:string
    name:string
    videotitle:string
    videoimage:MediaResults
    videolink:string
    }
    
    export default video
    
    export type videoResults ={
    
    total:string;
    results: video[];
    }