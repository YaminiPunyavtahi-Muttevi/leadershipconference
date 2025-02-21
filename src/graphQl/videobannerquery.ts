import VIDEO_QUERY from "./videoquery";
export const VIDEOBANNER_QUERY=

`
id
name
highlightssection{
    results
    {
    __typename 
    ... on Video{  
    ${VIDEO_QUERY}
    } 
    }
}


`;

export default VIDEOBANNER_QUERY;