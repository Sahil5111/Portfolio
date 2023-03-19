import React from "react"
import Header3d from '../3dcomponents/Header3d'

function Header(props) {
    return (
        <header id="home" className="header2 relative w-full h-screen mx-auto">
            <div className="overlay"></div>
            <div
                className={`absolute inset-0 top-[120px] mx-width-5 mx-auto sm:px-16 px-6 flex flex-row items-start gap-5 max-h-7`}
            >
                <div>
                    <h1 className={`font-black lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2 text-white`}>
                        Hi, I'm <span className='text-[#915EFF]'>{props.data.name}</span>
                    </h1>
                    <p className={`font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2 text-white-100`}>
                        {props.data.desc}
                    </p>
                </div>
            </div>
            <Header3d />
        </header >
    )
}


export default Header