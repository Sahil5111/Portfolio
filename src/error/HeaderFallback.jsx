import React from "react"


function HeaderFallback({ data }) {
    return (
        <header id="home" className="header" style={{ backgroundImage: 'url(./assets/imgs/header.jpg)' }}>
            <div className="overlay" style={{ zIndex: 0 }}></div>
            <div className="header-content container">
                <h1 className="header-title">
                    <span className="up">HI!</span>
                    <span className="down">I am {data.name}</span>
                </h1>
                <p className="header-subtitle">{data.desc}</p>

                <button className="btn btn-primary">
                    <a href="#Portfolio">
                        Visit My Works
                    </a>
                </button>
            </div>
        </header>
    )
}


export default HeaderFallback