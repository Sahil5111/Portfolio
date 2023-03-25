import React from "react"
import Tilt from "react-parallax-tilt"


function Portfolio({ data,mobile }) {

    return (
        <section className="portfolio section" id="PORTFOLIO">
            <div className="container1 text-center">
                <p className="section-subtitle">What I Did ?</p>
                <h6 className="section-title mb-6">Portfolio</h6>
                <div className="row">
                    {data.map(ele => {
                        return (
                            <Tilt key={ele.id} tiltReverse={true} tiltMaxAngleX={10} tiltMaxAngleY={10} className="col-md-4" >
                                <a href={ele.url} className="portfolio-card">
                                    <img src={ele.image} className="portfolio-card-img aspect-square"
                                        alt="image" />
                                    <span className={`portfolio-card-overlay ${mobile?'visible':''}`}
                                        style={mobile?{opacity:1,width:'100%',height:'100%',borderRadius:0}:{}}
                                    >
                                        <span className="portfolio-card-caption">
                                            <h4>{ele.h4}</h4>
                                            <p className="font-weight-normal">{ele.p}</p>
                                        </span>
                                    </span>
                                </a>
                            </Tilt>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}


export default Portfolio