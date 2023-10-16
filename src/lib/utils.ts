import clsx, { ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
export function cn(...inputs: ClassValue[]){
    return twMerge(clsx(inputs)) //px-2 py-2 in tailwind merge u can write these in p-2 and clsx helps to resolve conflicts
    //basically you can use same qualities multiple times
}