import Link from "next/link"
import Wrapper from "@/components/share/Wrapper"


const Header=()=>{
    return(
        
                    <nav className="flex sticky top-0 justify-between items-center bg-slate-100 ">
                    <Wrapper>
            
            <ul className="flex space-x-8 font-bold text-2xl  items-center " >
                <li className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 ... ">
                    <Link href={"/"}>Home</Link>
                    
                </li>
                <li className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 ...  ">
                    <Link href={"./components/SecondSection/About"}>About</Link>
                    
                </li>
                <li className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 ... ">
                    <Link href={"/Experiance"}>Service</Link>
                    
                </li>
            </ul>
            </Wrapper>
        </nav>
       

    )
}
export default Header