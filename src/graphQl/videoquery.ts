import MEDIA_QUERY from "./media-query";

export const VIDEO_QUERY=

`
id
name
videotitle
videoimage{ results{
    ${MEDIA_QUERY}
  }
}
videolink
`;

export default VIDEO_QUERY;