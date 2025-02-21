import NAV_QUERY from "./nav-query";

export const FOOTER_QUERY=

`id
name
sociallinks{


        results{
            __typename 
            ... on Socialicon
            {
              id
              name
              sociallink

            }

        }
    
}
menuitems{

    results{

        __typename
        ... on Navitem{
            id
            name
            navname
            navlink

        }

    }
}
copyrighttext
`;


export const ALL_FOOTER_QUERY= `{
data: allFooter{
 
    results{

        ${FOOTER_QUERY}
    }
}

}`;

export default ALL_FOOTER_QUERY;