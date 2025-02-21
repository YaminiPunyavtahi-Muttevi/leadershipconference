import NAV_QUERY from "./nav-query";
import { HEADER_QUERY } from "./Header-query";
export const SUGCONPAGE_QUERY=

`
id
name
Header{

results {
__typename
... on Sugconheader {
id
name
navigation {
  
  results{
    __typename 
    ... on Navitem{  
    ${NAV_QUERY}
    }
  }
}
}
}
}
HeroBanner
text
`;



export const ALL_SUGCONPAGE_QUERY= `{
data: allSUGCONPage{
   
    results{

        ${SUGCONPAGE_QUERY}
    }
}

}`;

export default ALL_SUGCONPAGE_QUERY;