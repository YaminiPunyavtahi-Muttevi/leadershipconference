import ABOUT_QUERY from "./about-query";
import MEDIA_QUERY from "./media-query";
import NAV_QUERY from "./nav-query";
import PROMO_QUERY from "./promoquery";
import SOCIALICON_QUERY from "./socialicon-query";
import SPEAKERS_QUERY from "./speakersquery";
import TABS_QUERY from "./tabs-query";
import TICKET_QUERY from "./ticket-query";
import VENUE_QUERY from "./venue-query";
import VIDEOBANNER_QUERY from "./videobannerquery";
import VIDEO_QUERY from "./videoquery";

export const PAGE_QUERY = ` 
  id
  name
  header{
    results{
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
  video{
    results{
        __typename
        ... on Videobanner{
          ${VIDEOBANNER_QUERY}
        }
    }
  } 
  about{
    results
    {
        __typename
        ... on Aboutsection{

            ${ABOUT_QUERY}
        }
    }
  }
  speakers{
    results{
      __typename
      ... on Speakers{
        ${SPEAKERS_QUERY}
      }
    }
  }
  tabs{
    results{
      __typename
      ... on Tabs{
        ${TABS_QUERY}
      }
    }
  }
  promo{
    results{
      __typename
      ... on Promo{
      ${PROMO_QUERY}
    }
  }
}
tickets{
  results
  {
    __typename
    ... on Ticket{

      ${TICKET_QUERY}
    }
  }
}
venue{
  results{
    __typename
    ... on Venue{
      ${VENUE_QUERY}
    }
  }
}
footer {results{
  __typename
  ... on Sugconfooter {
  id
  name
  sociallinks {
    
    results{
      __typename 
      ... on Socialicon{  
      ${SOCIALICON_QUERY}
      }
    }
  }
  menuitems{
    results
    {
      __typename
      ... on Navitem{
${NAV_QUERY}

      }
    }

  }
  copyrighttext
      }
    } 
  }
  `;

  export const ALL_PAGE_QUERY = `{ 
    data: allPage {
      results{
        ${PAGE_QUERY}
      }
    }
  }
  `;
  
  export default ALL_PAGE_QUERY