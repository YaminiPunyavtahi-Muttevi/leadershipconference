import MEDIA_QUERY from "./media-query";

export const NAVTABCONTENT_QUERY=

`
id
name
eventimage
{
    results{
        ${MEDIA_QUERY}
    }
}
tabtext
tabdescription
speakertext
speakerimage
{
    results{
        ${MEDIA_QUERY}
    }
}
speakertitle
eventtime
eventlocation
`;

export default NAVTABCONTENT_QUERY;