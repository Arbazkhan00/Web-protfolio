import Wrapper from "@/components/share/Wrapper";
import pic from "@/components/Stuff/pic.png"
import Image from "next/image";
import Button from "@/components/share/Button";
const About=()=>{
    return(
        
            <section>
                <Wrapper>
            <div className=" flex flex-col md:flex-row mt-5 justify-between items-center">
                <div className="mx-30 font-medium ">
                    <Image src={pic} alt="About Pic" width={500}></Image>
                </div>
                <div >
                        <h2 className="text-2xl font-medium">About Me</h2>
                        <h1 className="text-5xl font-medium transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 ...  mt-2">PERSONAL DETAILS</h1>
                        <p className="mt-4 text-slate-500">My name is Arbaz khan<br/>Im from Murree<br/>
                        Umair Shopping Mall Nayab Garments GPO Chowk Murree<br/>
                       Email: arbazjani8@gmail.com 
                            Currently im doing Bachelor of Science in artificial intelligence From Iqra University and also doing Metaverse Course from PIAIC...</p>
                        
                    </div>
            </div>
            </Wrapper>
            </section>
   
    )
}
export default About