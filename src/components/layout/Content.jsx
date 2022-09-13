import './Content.css'
import { Routes, Route } from "react-router-dom";
import About from "../../views/examples/About";
import Home from "../../views/examples/Home";
import Param from "../../views/examples/Param";
import NotFound from "../../views/examples/NotFound";

const Content = props => {
    return (
        <main className="Content">
            <Routes>
                <Route path="/about" >
                    <Route element={<About />} path="/about"/>
                </Route>
                <Route path="/param/:id" >
                    <Route element={<Param />} path="/param/:id"/>
                </Route>
                <Route path="/param/:id" >
                    <Route element={<Param />} path="/param/:id"/>
                </Route>
                <Route path="/" >
                    <Route element={<Home />} path="/"/>
                </Route>
                <Route path="*" >
                    <Route element={<NotFound />} path="*"/>
                </Route>
            </Routes>

        </main>
    )
}

export default Content