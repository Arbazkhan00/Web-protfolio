import { FC } from "react"

const Button:FC<{children: React.ReactNode}>=({children})=>{
    return(
        <>
            <button className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 py-2 px-4 rounded-full mt-3 shadow text-white ">
                
                {children}
            </button>
            
        </>
        
    )
}
export default Button