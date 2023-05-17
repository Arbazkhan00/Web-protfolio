import { FC } from "react"

const Wrapper:FC<{children: React.ReactNode}>=({children})=>{
    return(
        <div className="max-w-screen-xl mx-auto py-2">
            {children}
        </div>

    )
}
export default Wrapper