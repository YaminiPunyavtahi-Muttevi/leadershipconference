
import { NavResults } from "./navtype"

type SUGCONHeader ={

id:string
name:string
navigation: NavResults
}

export default SUGCONHeader

export type SUGCONHeaderResults ={

total:string;
results: SUGCONHeader[];
}