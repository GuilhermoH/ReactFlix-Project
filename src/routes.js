import {BrowserRouter, Route,Routes} from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Films from "./pages/Films";
import Erro from "./pages/Error";
function RoutesApp(){
    return(
        <BrowserRouter>
            <Header/>
            <Routes>

                <Route path="/" element={<Home/>}/>
                <Route path="/films" element={<Films/>}/>
                <Route path="/films/:id" element={<Films/>}/>
                <Route path="*" element={<Erro/>}/>
            </Routes>

        </BrowserRouter>
    )
}
export default RoutesApp;