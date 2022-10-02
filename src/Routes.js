import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";
import Create from "./pages/Create/Create";
import Event from "./pages/Event";
import Home from "./pages/Home/Home";

function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/create" element={<Create />} />
                <Route path="/event" element={<Event />} />
            </Routes>
        </Router>
    );
}

export default AppRouter;