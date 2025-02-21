import { MediaResults } from "./mediatype"

type FeatureCard ={
    id:string
    name:string
    featureimage:MediaResults
    featuretitle:string
    featuretext:string

}
export default FeatureCard    
export type FeatureCardResults ={

total:string;
results:FeatureCard[];
}