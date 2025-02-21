import MEDIA_QUERY from "./media-query";

export const FEATURECARD_QUERY=

`
id
name
featureimage{results{${MEDIA_QUERY}}}
featuretitle
featuretext
`;

export default FEATURECARD_QUERY;