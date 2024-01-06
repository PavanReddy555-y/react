import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

export function HtmlComponetn() {
    return (
        <div>
            <h1>Hyper Text Markup Language</h1>
        </div>
    )
}
export function CssComponetn() {
    return (
        <div>
            <h1>Cascading Style Sheet</h1>
        </div>
    )
}

export default function SpaCompomnent() {
    return (
        <div className="continer-fluid">
            <BrowserRouter>
                <nav>
                    <ul>
                        <li><Link to="/html">HTML</Link></li>
                        <li><Link to="/css">CSS</Link></li>
                        <li><Link to="/js">Java Script</Link></li>
                    </ul>
                </nav>
                <hr />
                <Routes>
                    {/* Default Content Route */}
                    <Route path="/" element={
                        <div>
                            <h2>Home Page / Default Page</h2>
                        </div>
                    } />

                    {/* Wild Card Route  */}
                    <Route path="*" element={
                        <div>
                            <code>Requested Page Not Found</code>
                        </div>
                    } />
                    {/* <Route path="html" element={
                        <div>
                            <h1>Hyper Text Markup Language</h1>
                        </div>
                    } /> */}
                    <Route path="html" element={<HtmlComponetn />} />
                    <Route path="css" element={
                        // <div>
                        //     <h1>Cascading Style Sheet</h1>
                        // </div>
                        < CssComponetn />
                    } />
                    <Route path="js" element={
                        <div>
                            <h1>Java Script</h1>
                        </div>
                    } />
                </Routes>
            </BrowserRouter>
        </div>
    )
}