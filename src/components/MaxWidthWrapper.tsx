import { stringify } from "querystring"
import { ReactNode } from "react"
import { cn } from "@/lib/utils"


//AIM: USE THIS PAGE AGAIN AND AGAIN TO MANAGE SPACING AROUND LEFT 
// RIGHT SIDE USING PROPS
const MaxWidthWrapper=({
    className,
    children
}:{
    className?:string // here ? symbolizes optionality
    children:ReactNode
})=>{
    return (<div className={cn('mx-auto w-full max-w-screen-xl px-2.5 md:px-20', className)}>
        {children}

    </div>
    )
}

export default MaxWidthWrapper