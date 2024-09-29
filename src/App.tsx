import {BrowserRouter, Routes, Route} from "react-router-dom";
import AdviceGenerator from "./pages/AdviceGenerator";

const basename = import.meta.env.BASE_URL;

export default function App() {

    return (
        <BrowserRouter basename={basename}>
            <Routes>
                <Route path="/" element={<AdviceGenerator/>}/>
            </Routes>
        </BrowserRouter>
    );
}
