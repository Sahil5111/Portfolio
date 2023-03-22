import React from "react"
import Tools3d from "../3dcomponents/Tools3d"
import ErrorBoundary from "../error/ErrorBoundary"
import ToolsFallback from "../error/ToolsFallback"

function Tools({ data }) {
    return (
        <section className="Tools section" id="portfolio">
            <div className="container1 text-center">
                <p className="section-subtitle">What I Use ?</p>
                <h6 className="section-title mb-6">Tools</h6>
                <ErrorBoundary fallback={<ToolsFallback data={data[3]}/>}>
                    {data.map(data => {
                        if (data.type == "fallback" ) return
                        return (
                            <div key={data.id} >
                                <p className="section-subtitle" >{data.type} tools</p>
                                <div className="flex flex-row flex-wrap justify-center gap-10">
                                    {data.list.map(tool => (<div className='w-28 h-28' key={tool.name}><Tools3d url={tool.url} /></div>))}
                                </div>
                            </div>
                        )
                    })}
                </ErrorBoundary>
            </div>
        </section >
    )
}


export default Tools