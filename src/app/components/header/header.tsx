import Link from "next/link"
import Wrapper from "../share/Wrapper"


const Header=()=>{
    return(
        <header className="flex sticky top-0 justify-center items-center ">
                   
                    <Wrapper>
                        
            <ul className="flex space-x-8 font-bold text-2xl  items-center " >
                <li className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 ... ">
                    <Link href={"/"}>Home</Link>
                    
                </li>
                <li className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 ...  ">
                    <Link href="/components/about">About</Link>
                    
                </li>
                <li className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 ... ">
                    <Link href="/components/services">Service</Link>
                    
                </li>
            </ul>
          
            </Wrapper>
            </header>
       

    )
}
export default Header