import React from "react"


function About({ data }) {
    return (
        <section className="About section sm:px-16 px-7 sm:py-16 py-15" id="ABOUT">
            <div className="container1 text-center">
                <div className="about">
                    <div className="about-caption">
                        <p className="section-subtitle">Who Am I ?</p>
                        <h2 className="section-title mb-3">About Me</h2>
                        <p>
                            {data.data.map(para => (<span key={para.para} >{para.value}<br /></span>))}
                        </p>
                        <button className="btn-rounded btn btn-outline-primary mt-4" >
                            <a href="./Resume.pdf" download={"Resume"}>Download CV</a>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default About