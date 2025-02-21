import NAVTAB_QUERY from "./navtab-query";
import NAVTABCONTENT_QUERY from "./navtabcontent-query";

export const TABS_QUERY=

`
id
name
navtabs{results{
    __typename
    ... on Navtab{
        ${NAVTAB_QUERY}
    }
    
    }
}
navtabscontent{results{
    __typename
    ... on Navtabcontent
    {
${NAVTABCONTENT_QUERY}

    }
}}

`;

export default TABS_QUERY;