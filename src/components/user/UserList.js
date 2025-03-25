import {
    useEffect,
    useState
} from "react";

import { Link } from "react-router-dom";

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function fetchUsers() {
            const response = await fetch("http://localhost:8080/api/user");
            const json = await response.json();

            setUsers(json);
        }

        fetchUsers()
    }, []);

    return (
        <div>
            <h2>Список пользователей</h2>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        <Link to={`/user/${user.id}`}>{user.login}</Link> - {user.login}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default UserList;