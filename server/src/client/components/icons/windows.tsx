import { SVGProps } from "react"
import { twMerge } from "tailwind-merge"

export default function Windows(props: SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={800} height={800} viewBox="0 0 20 20" {...props} className={twMerge("w-5 h-5", props.className)}>
            <path fill="currentColor" fillRule="evenodd" d="M9.146 10.434c.005 2 .01 5.395.016 8.035 3.614.489 7.228.992 10.836 1.531 0-3.151.004-6.289 0-9.287-3.617 0-7.233-.279-10.852-.279M0 10.435v6.787c2.726.367 5.452.72 8.172 1.12.005-2.625-.002-5.251-.002-7.877-2.723.005-5.446-.039-8.17-.03m0-7.592v6.768c2.726.007 5.452-.034 8.177-.031-.002-2.62-.002-5.236-.005-7.856-2.727.34-5.455.702-8.172 1.12m20 6.628c-3.612.014-7.224.069-10.838.08-.002-2.663-.002-5.322 0-7.983A791.79 791.79 0 0 1 19.998 0c.002 3.158 0 6.314.002 9.472" />
        </svg>
    )
}
