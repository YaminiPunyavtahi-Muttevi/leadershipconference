type Media ={
    id:string
    name:string
    fileName:string
    fileUrl:string
    description:string
    fileWidth:string
    fileHeight:string
    fileId:string
    fileSize:string
    fileType:string
  }
  export default Media
  
  export type MediaResults=
  {
   total: string;
   results:Media[];
  
  }
  