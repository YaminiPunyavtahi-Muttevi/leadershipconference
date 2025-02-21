
import { NavResults } from "./navtype"

type SocialIcon ={

id:string
name:string
sociallink:string
}

export default SocialIcon

export type SocialIconResults ={

total:string;
results: SocialIcon[];
}