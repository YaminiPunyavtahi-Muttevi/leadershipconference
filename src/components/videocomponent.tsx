import { videoResults } from "@/types/videotype";
import video from "@/types/videotype";
import Image from "next/image";
import Link from "next/link";

type Props = {
    videosectionResults: videoResults;
}


const VideoComponent =  ({videosectionResults}: Props) => {
    return(
        <>
       { videosectionResults.results.map((vid: video,index) => (
<div className="col-lg-4 col-md-6 col-12" key={index}>
<div className="highlight-thumb">
    <Image src={vid.videoimage.results[0].fileUrl} className="highlight-image img-fluid" alt={""} height={400} width={600}>

    </Image>

    <div className="highlight-info">
        <h3 className="highlight-title">{vid.videotitle}</h3>

        <Link href={vid.videolink} className="bi-youtube highlight-icon" />
    </div>
</div>
</div>
        ))}
        
        </>
    )}
        
       
export default VideoComponent;