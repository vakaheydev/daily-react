import {
    Link
} from "react-router-dom";

import styles from "../styles/css/Main.module.css";
import {
    useEffect
} from "react";

const Main = () => {
    useEffect(() => {
        document.body.classList.add(styles["custom-body"]);

        return () => {
            document.body.classList.remove(styles["custom-body"]);
        };
    }, []);

    return (
        <div className="{styles.container}">
            <div className="{styles.center-content}">
                <div className="text-center">
                    {/*<h3>Hello, {name}</h3>*/}
                    <h1 className="h1">Vaka Daily</h1>
                    <Link to="/user" className="btn btn-primary mb-3">My schedules</Link>
                </div>
            </div>
        </div>

    );
}

export default Main;