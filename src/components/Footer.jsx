import React from "react"


function Footer({data}) {
    return (
        <div className="container sm:px-16 px-7 sm:py-16 py-10">
        <footer className="footer">
            <div className="social-links m-auto ml-sm-auto flex place-content-center gap-4">
                {data.map(handle=>(<a key={handle.id} href={handle.link} className="link"><i style={{backgroundImage:`url(${handle.image})`}}></i></a>))}
            </div>
        </footer>
    </div>
    )
}


export default Footer