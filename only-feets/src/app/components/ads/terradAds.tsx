'use client'
import { useEffect, useRef } from "react";

export default function AdsterraBanner({addId}): JSX.Element {
    const banner = useRef<HTMLDivElement>()

    const atOptions = {
        key: addId,
        format: 'iframe',
        height: 50,
        width: 320,
        params: {},
    }
    useEffect(() => {
    if (banner.current && !banner.current.firstChild) {
        const conf = document.createElement('script')
        const script = document.createElement('script')
        script.type = 'text/javascript'
        script.src = `//pl26680216.profitableratecpm.com/${atOptions.key}/invoke.js`
        conf.innerHTML = `atOptions = ${JSON.stringify(atOptions)}`

        banner.current.append(conf)
        banner.current.append(script)
    }
}, [banner])

    return <div id="container-94c2add6df163002cd78c7966d02b348" className="mx-2 my-5 border border-gray-200 justify-center items-center text-white text-center" ref={banner}></div>
}