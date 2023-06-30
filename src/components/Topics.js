import { Link } from "react-router-dom";
import "./Topics.css";

export function ScrollToTopOnMount() {
    window.scrollTo(0, 0);
    return null;
}

export default function ReactTopics() {
    return (
        <>
            <div className="list-container">
                <ul className="list-group">
                    <li className="reacttopics">
                        <Link to="/Introduction">Introduction</Link>
                    </li>
                    <li className="reacttopics">
                        <Link to="/JSX">JSX</Link>
                    </li>
                    <li className="reacttopics">
                        <Link to="/Components">Components</Link>
                    </li>
                    <li className="reacttopics">
                        <Link to="/Props">Props</Link>
                    </li>
                    <li className="reacttopics">
                        <Link to="/State">State</Link>
                    </li>
                    <li className="reacttopics">
                        <Link to="/Lifecycle">Lifecycle</Link>
                    </li>
                    <li className="reacttopics">
                        <Link to="/Hooks">Hooks</Link>
                    </li>
                    <li className="reacttopics">
                        <Link to="/Events">Events</Link>
                    </li>
                    <li className="reacttopics">
                        <Link to="/Router">Router</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}