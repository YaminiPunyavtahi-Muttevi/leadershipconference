import page, {pageResults} from "../types/pagetype"
import {fetchAPI} from "../lib/api"
import { PAGE_QUERY, ALL_PAGE_QUERY } from "../graphQl/page-query";



export async function getAllPage(preview: boolean): Promise<page[]> {
  const data = await fetchAPI(`${ALL_PAGE_QUERY}`);
  

  return extractPosts(data.data);

}

 export async function getPageById(id: string): Promise<page> {

const querypage= `{ 
  data: page(id: "${id}")
  {
      ${PAGE_QUERY}
  }
}`;

const data = await fetchAPI(querypage);
return data.data.data;
}

 
function extractPosts({ data }: { data: pageResults }) {

  return data.results.map((post: page) => {
    return post;
  });
}
