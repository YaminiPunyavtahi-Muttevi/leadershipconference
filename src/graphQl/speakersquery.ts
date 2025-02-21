import FEATURECARD_QUERY from "./featurecardquery";
import MEDIA_QUERY from "./media-query";

export const SPEAKERS_QUERY=

`
id
name
text
image{results{${MEDIA_QUERY}}}
speakertitle
speakertext
featurecards {results{
    __typename 
    ... on Featurecard{  
   ${FEATURECARD_QUERY}
    } 
    }
}

`;

export default SPEAKERS_QUERY;