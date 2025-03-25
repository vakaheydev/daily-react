import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import User from "./components/user/User";
import './App.css';
import UserList
    from "./components/user/UserList";
import Main
    from "./components/Main";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/user/:id" element={< User />} />
                <Route path="/user" element={< UserList />} />
            </Routes>
        </Router>
    )
}

export default App;
