import NAV_QUERY from "./nav-query";

export const HEADER_QUERY=

`id
name
Navigation{


        results{
            __typename 
            .. on Navitem
            {
              id
              name
              navname
              navlink

            }

        }
    
}
`;


export const ALL_HEADER_QUERY= `{
data: allHeader{
 
    results{

        ${HEADER_QUERY}
    }
}

}`;

export default ALL_HEADER_QUERY;