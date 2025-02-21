import SUGCONHeader, {SUGCONHeaderResults} from "../types/headertype";
import { fetchAPI } from "./api";
import ALL_HEADER_QUERY from "../graphQl/Header-query";


export async function getAllHeader(preview: boolean): Promise<SUGCONHeader[]> {
    const data = await fetchAPI(`${ALL_HEADER_QUERY}`);
    
    return extractPosts(data.data);
}


function extractPosts({ data }: { data: SUGCONHeaderResults }) {
    return data.results.map((post: SUGCONHeader) => {
      return post;
    });
}
