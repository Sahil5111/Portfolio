import React from "react"


function Footer({data}) {
    return (
        <div className="Footer container1 ">
        <footer className="footer">
            <div className="m-auto ml-sm-auto flex place-content-center gap-4">
                {data.map(handle=>(<a key={handle.id} href={handle.link} 
                className="p-0 h-[40px] w-[40px] rounded-full border-2 text-center grid place-content-center border-indigo-800 hover:bg-[#695aa6] hover:border-transparent bg-cover bg-center" ><img src={handle.image} alt="#" /></a>))}
            </div>
        </footer>
    </div>
    )
}


export default Footer