
import { NavResults } from "./navtype"
import { SocialIconResults } from "./socialicon"

type SUGCONFooter ={

id:string
name:string
sociallinks:SocialIconResults
menuitems: NavResults
copyrighttext:string

}

export default SUGCONFooter

export type SUGCONFooterResults ={

total:string;
results: SUGCONFooter[];
}