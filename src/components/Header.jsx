import React from "react"
import Header3d from '../3dcomponents/Header3d'
import ErrorBoundary from "../error/ErrorBoundary"
import HeaderFallback from "../error/HeaderFallback"

function Header(props) {
    return (
        <ErrorBoundary fallback={<HeaderFallback data={props.data} />}>
            <header id="HOME" className="header2 relative w-full h-screen mx-auto" style={{backgroundImage:'url(./assets/imgs/header.jpg)'}}>
                <div className="overlay"></div>
                <div
                    className={`absolute inset-0 top-[120px] mx-width-5 mx-auto sm:px-16 px-6 flex flex-row items-start gap-5 max-h-7`}
                >
                    <div >
                        <h1 className={`font-black lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2 text-white`}>
                            Hi, I'm <span className='text-[#915EFF]'>{props.data.name}</span>
                        </h1>
                        <p className={`font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2 text-white-100`}>
                            {props.data.desc}
                        </p>
                    </div>
                </div>
                <Header3d isMobile={props.mobile}/>
                {props.mobile && <div className="w-full h-full absolute top-0 left-0 flex flex-col pointer-events-none">
                    <div className="h-1/2 w-full pointer-events-auto"></div>
                    <div className="h-1/2 w-full flex flex-row">
                        <div className="h-full w-1/4 pointer-events-auto"></div>
                        <div className="h-full w-1/4 ml-auto pointer-events-auto"></div>
                    </div>
                </div>}
            </header >
        </ErrorBoundary>
    )
}


export default Header