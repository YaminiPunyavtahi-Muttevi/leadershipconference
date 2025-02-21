import page from "@/types/pagetype";
import { pageResults } from "@/types/pagetype";
import { getAllPage ,getPageById} from "@/lib/page-query";
import Head from 'next/head';
import { PAGE_ID } from "@/lib/constants";
import HeaderComponent from "@/components/header-component";
import { JSONContent } from "@tiptap/core";
import { richTextProfile } from "@/lib/richTextConfiguration";
import { generateHTML } from "@tiptap/html";
import VideoBannerComponent from "@/components/videobanner-component";
import AboutComponent from "@/components/about-component";
import SpeakerComponent from "@/components/speakers-component";
import PromoComponent from "@/components/promo-component";
import TicketComponent from "@/components/ticket-component";
import VenueComponent from "@/components/venue-component";
import SUGCONFooter from "@/components/footer-component";
import Script from "next/script";
import TabsComponent from "@/components/tabs-component";
import ChatbotEmbed from "@/components/ChatbotEmbed";

export async function getStaticProps({ preview = false}){
    const allPage = await getAllPage(preview);
    const page = await getPageById(PAGE_ID);
    return{
        props: {allPage, page ,preview},
        // Next.js will attempt to re-generate the page:
        // - When a request comes in
        // - At most once every 10 seconds
        revalidate: 10, //in seconds
    }
    
  }
  
  type Props = {
    allPage: page[];
    page: page;
  }
  
  const page = ({allPage,page}: Props) => {

  
    
    return (
  <>
      <Head>
      


      </Head>
      <main>

    <HeaderComponent allHeaders={page.header} />
     <VideoBannerComponent allVideoBanner={page.video} /> 
     <AboutComponent allAbout={page.about}/>
     <SpeakerComponent allSpeakers={page.speakers}/>
     <TabsComponent allTabs={page.tabs}/>
     <PromoComponent allPromo={page.promo}/>
     <TicketComponent allTickets={page.tickets} />
    <VenueComponent allVenue={page.venue}  />
    <section className="contact section-padding" id="section_7">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-8 col-12 mx-auto">
                            <form className="custom-form contact-form bg-white shadow-lg" action="#" method="post" role="form">
                                <h2>Please Say Hi</h2>

                                <div className="row">
                                    <div className="col-lg-4 col-md-4 col-12">                                    
                                        <input type="text" name="name" id="name" className="form-control" placeholder="Name" required />
                                    </div>

                                    <div className="col-lg-4 col-md-4 col-12">         
                                        <input type="email" name="email" id="email" pattern="[^ @]*@[^ @]*" className="form-control" placeholder="Email" required />
                                    </div>

                                    <div className="col-lg-4 col-md-4 col-12">                                    
                                        <input type="text" name="subject" id="subject" className="form-control" placeholder="Subject" />
                                    </div>

                                    <div className="col-12">
                                        <textarea className="form-control"  id="message" name="message" placeholder="Message"></textarea>

                                        <button type="submit" className="form-control">Submit</button>
                                    </div>

                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </section>
        <SUGCONFooter allFooters={page.footer}/>
        <ChatbotEmbed/> 
      </main>

      </>
  
      
    )
  }
  export default page;
  