import React from "react"
import { useState} from "react"

function Navbar({data}) {
    const [active, setactive] = useState(false)
    const [top, settop] = useState(true)
    React.useEffect(() => {
        window.onscroll = () =>
            window.pageYOffset === 0 ? settop(true) : settop(false)
        return () => (window.onscroll = null);
    });

    function handleClick() {
        setactive(active => !active)
    }

    function handleHover(e){
        if(top) return
        console.log(e.target.textContent)
    }

    return (
        <nav className={top ? "custom-navbar affix-top" : "custom-navbar affix "} data-spy="affix" data-offset-top="20">
            <div className={`sm:px-16 px-6  w-full flex items-center py-2 fixed top-0 z-[1000] ${!top?'bg-slate-50':''}`}>
                <div className="flex">
                    <img src={data.logo} style={{ width: "50px" }} alt="logo" />
                <a className="logo" href="" style={{pointerEvents:"none"}}>
                    {data.name}</a>
                </div>
                <ul className={active ? 'nav show' : 'nav'}>
                    {data.navitem.map(item=>(<li className="item" key={item.id} onClick={handleClick} >
                        <a className="link" href={`#${item.value}`} onMouseOver={handleHover} >{item.value}</a>
                    </li>))}
                </ul>
                <div className={active ? "hamburger-box hamburger--elastic hamburger is-active" : "hamburger-box hamburger--elastic hamburger "} id="nav-toggle" onClick={handleClick}>
                    <div className="hamburger-inner"></div>
                </div>
            </div>
        </nav>
    )
}


export default Navbar