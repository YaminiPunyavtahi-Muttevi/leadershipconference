import Navtabcontent from "@/types/navtabcontent";
import Navtab from "@/types/navtabtype"
import { TabsResults } from "@/types/tabs"
import Image from "next/image"
import { useRouter } from "next/router";
type Props={

allTabs : TabsResults

}

const TabsComponent = ({allTabs}:Props)=>{
 
    const router = useRouter();
    const currentRoute = router.pathname;
    return(
<section className="schedule section-padding" id="section_4">
<div className="container">
    <div className="row">

        <div className="col-lg-12 col-12">
            <h2 className="mb-5 text-center">Next <u className="text-info">Schedules</u></h2>
{/* 
            <nav>
                <div className="nav nav-tabs align-items-baseline" id="nav-tab" role="tablist">
                    {allTabs.results[0].navtabs.results.map((tab:Navtab,index) =>(
                    <button className={currentRoute === tab.navtext ? "active" : " " + "nav-link"} id="nav-DayOne-tab" data-bs-toggle="tab" data-bs-target="#nav-DayOne" type="button" role="tab" aria-controls="nav-DayOne" aria-selected="true" key={index}>
                        <h3>
                            <span>{tab.navtext}</span>
                           
                            <small></small>
                        </h3>
                    </button>
))}
                  {   <button className="nav-link" id="nav-DayTwo-tab" data-bs-toggle="tab" data-bs-target="#nav-DayTwo" type="button" role="tab" aria-controls="nav-DayTwo" aria-selected="false">
                        <h3>
                            <span>{allTabs.results[0].navtabs.results[1].navtext}</span>
                            <small>August 24, 2023
                            </small>
                        </h3>
                    </button>

                    <button className="nav-link" id="nav-DayThree-tab" data-bs-toggle="tab" data-bs-target="#nav-DayThree" type="button" role="tab" aria-controls="nav-DayThree" aria-selected="false">
                        <h3>
                            <span>{allTabs.results[0].navtabs.results[2].navtext}</span>
                            <small>August 25, 2023</small>
                        </h3>
                    </button>

                    <button className="nav-link" id="nav-DayFour-tab" data-bs-toggle="tab" data-bs-target="#nav-DayFour" type="button" role="tab" aria-controls="nav-DayFour" aria-selected="false">
                        <h3>
                            <span>{allTabs.results[0].navtabs.results[3].navtext}</span>
                            <small>August 25, 2023</small>
                        </h3>
                    </button> 
                </div>
            </nav> */}
            <div className="tab-content mt-5" id="nav-tabContent">
                {allTabs.results[0].navtabscontent.results.map((tabcontent:Navtabcontent,index)=>
                (
        
                <div className={"tab-pane fade show" + currentRoute === tabcontent.tabtext ? "active" : " "}  id="nav-DayOne" role="tabpanel" aria-labelledby="nav-DayOne-tab"  key={index}>
                  
                    <div className="row border-bottom pb-5 mb-5" >
                        <div className="col-lg-4 col-12">
                           <Image src={tabcontent.eventimage.results[0].fileUrl} className="schedule-image img-fluid" alt={""} height={400} width={400}/>
                        </div>

                        <div className="col-lg-8 col-12 mt-3 mt-lg-0">
                            
                            <h4 className="mb-2">{tabcontent.tabtext}</h4>

                            <p>{tabcontent.tabdescription}</p>
                            <div className="d-flex align-items-center mt-4">
                                <div className="avatar-group d-flex">
                                    <Image src={tabcontent.speakerimage.results[0].fileUrl} className="img-fluid avatar-image" alt={""} height={400} width={400} />

                                    <div className="ms-3">
                                    {tabcontent.speakertext}
                                        <p className="speakers-text mb-0">{tabcontent.speakertitle}</p>
                                    </div>
                                </div>

                                <span className="mx-3 mx-lg-5"  >
                                    <i className="bi-clock me-2"></i>
                                   
                                     { allTabs.datetime =  new Date(tabcontent.eventtime).toString()}  
                                                   
                                </span>

                                <span className="mx-1 mx-lg-5">
                                    <i className="bi-layout-sidebar me-2"></i>
                                    {tabcontent.eventlocation}
                                </span>
                            </div>
                        </div>
                    </div>
                
         

            </div>
                   ))}
        </div>

    </div>
</div>
</div>
</section>

    )}    
    export default TabsComponent