import { FeatureCardResults } from "./featurecardtype"
import { MediaResults } from "./mediatype"



type Speaker ={

    id:string
    name:string
    text:string
    image:MediaResults
    speakertitle:string
    speakertext:string
    featurecards:FeatureCardResults
    }
    
    export default Speaker
    
    export type SpeakerResults ={
    
    total:string;
    results: Speaker[];
    }