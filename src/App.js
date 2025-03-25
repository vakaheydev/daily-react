import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import User from "./components/user/User";
import './App.css';
import UserList
    from "./components/user/UserList";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<UserList />} />
                <Route path="/user/:id" element={< User />} />
            </Routes>
        </Router>
    )
}

export default App;
