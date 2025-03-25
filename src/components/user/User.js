import {
    useParams
} from "react-router-dom";
import {
    useEffect,
    useState
} from "react";

const User = () => {
    const { id } = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        async function fetchUser(id) {
            const response = await fetch(`http://localhost:8080/api/user/${id}`)
            const json = await response.json();

            console.log(json);
            setUser(json);
        }

        fetchUser(id);
    }, [id]);

    if (!user) {
        console.log("Loading user...")
        return <p>Загрузка...</p>
    }

    return (
        <div>
            <h3>Логин: {user.login}</h3>
            <h3>Роль: {user.userType.name}</h3>
            <h3>Расписания: </h3>
            <ul>
                {user.schedules.map(schedule => {
                    return (
                        <li key={schedule.id}>
                            <p>Название расписания: {schedule.name}</p>
                            <p>Список задач:</p>
                            <ul>
                                {schedule.tasks.map(task => {
                                    return (
                                        <li key={task.id}>
                                            <p>Название задачи: {task.name}</p>
                                            <p>Дедлайн задачи: {task.deadline}</p>
                                        </li>
                                    )
                                })}
                            </ul>
                        </li>
                    );
                })}
            </ul>

        </div>
    );
}

export default User;