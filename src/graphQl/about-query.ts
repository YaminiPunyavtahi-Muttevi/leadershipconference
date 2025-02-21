import MEDIA_QUERY from "./media-query";

export const ABOUT_QUERY=

`
id
name
title
description
shortdescription
images
{ results{
    ${MEDIA_QUERY}
  }
}
text
`;

export default ABOUT_QUERY;