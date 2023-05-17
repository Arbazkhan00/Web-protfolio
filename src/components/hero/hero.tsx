import Wrapper from "@/components/share/Wrapper"
import pic from "@/components/Stuff/pic.png"
import Image from "next/image"
import Button from "@/components/share/Button"
const Hero=() => {
    return(
       
            <section className="  bg-slate-100">
                 <Wrapper>
                <div className="flex  flex-col md:flex-row items-center ">
                    <div className="flex-1">
                        <h2 className="text-2xl font-medium">This is me </h2>
                        <h1 className="text-7xl font-medium transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 ...  mt-2">Arbaz khan</h1>
                        <p className="mt-4 text-slate-500 sm:text-justify">Currently im doing Bachelor of Science inartificial intelligence From Iqra University and also doing Metaverse Course from PIAIC</p>
                        
                    </div>
                    
                    <div className="mx-35 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 ... ">
                        <Image src={pic} alt="The side pic" width={400} ></Image>
                    </div>
                </div>
                </Wrapper>
            </section>
        
    )
}
export default Hero