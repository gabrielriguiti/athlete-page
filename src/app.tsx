import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from "./pages/home.page";
import ContactPage from "./pages/contact.page";
import AboutMePage from "./pages/about-me.page";

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/about-me" element={<AboutMePage/>}/>
                <Route path="/contact" element={<ContactPage/>}/>
            </Routes>
        </Router>
    );
}
