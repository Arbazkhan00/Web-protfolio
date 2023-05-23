import Wrapper from "@/components/share/Wrapper"
import first from "@/components/Stuff/first.jpeg"
import second from "@/components/Stuff/second.jpeg"
import third from "@/components/Stuff/third.jpeg"
import writing from "@/components/Stuff/writing.jpeg"
import glowing from "@/components/Stuff/glowing.jpeg"
import light from "@/components/Stuff/light.jpeg"
import Image from "next/image"
const Manu=()=>{
    return(
      <section className="flex text-center mt-20">  <Wrapper>

      <div>
          <div >
          
                      <h1 className="text-5xl  mt-2 text-center font-semibold">Our Latest Featured Projects</h1>
                      <br />
                      <a className="font-medium  text-slate-500 mt-0">Who are in extremely love with eco friendly system</a>
              </div>
            
              <div className="gap-x columns-3  md:columns-3 mt-10  ...">
                   
                       <Image className="w-full aspect-video  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300  ..." src={first} alt="this eiditing pic"></Image>
                       <Image className="w-full aspect-video mt-10  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 ..." src={second} alt="this eiditing pic"></Image>
                       <Image className="w-full aspect-video mt-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 ..." src={third} alt="this eiditing pic"></Image>
                       <Image className="w-full aspect-video   mt-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 ..." src={writing} alt="this eiditing pic"></Image>
                       <Image className="w-full aspect-video mt-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 ..." src={glowing} alt="this eiditing pic"></Image>
                       <Image className="w-full aspect-video mt-10  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 ..." src={light} alt="this eiditing pic"></Image>
                      
                      
  
                        </div>
      </div>
      </Wrapper>
      </section>
    )
}
export default Manu