import { NavtabcontentResults } from "./navtabcontent"
import { NavtabResults } from "./navtabtype"

type Tabs={

id:string
name:string
navtabs:NavtabResults
navtabscontent: NavtabcontentResults


}
export default Tabs

export type TabsResults={

total:string;
results:Tabs[];
datetime:string;

}