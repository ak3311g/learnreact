import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from '@fortawesome/free-brands-svg-icons';
import "./Header.css";
import { Link } from "react-router-dom";

export default function HeaderComp() {
    return (
        <>
            <div className="toppanel">
                <Link className="header text-white p-3 m-2 rounded" to="/">
                    <FontAwesomeIcon icon={faReact} />
                    <h1 className="title flex-column">
                        Learn React JS
                        <p className="clicktitle">Click to go to homepage</p>
                    </h1>

                </Link>
                <div className="nav-bar">
                    <div className="btn-group">
                        <button type="button" className="dropdowntoggle header text-white p-3 m-2 rounded" data-bs-toggle="dropdown" aria-expanded="false">
                            <p className="title m-0 text-center w-100 flex-column">
                                        More Items
                            </p>
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end">
                            <li><button className="dropdown-item" type="button">
                                <Link className="header text-white w-100 m-1 rounded" to="/questions">
                                    <p className="title text-center w-100 flex-column">
                                        Questions
                                    </p>
                                </Link>
                            </button></li>
                            <li>
                                <button className="dropdown-item" type="button">
                                    <a className="header text-white w-100 m-1 rounded" href="https://firstlearnreacthooks.netlify.app/" target="_blank" rel="noreferrer"><p className="title text-center w-100 flex-column">
                                        React Hooks
                                    </p></a>
                                </button>
                            </li>
                            <li>
                                <button className="dropdown-item" type="button">
                                    <a className="header text-white w-100 m-1 rounded" href="mailto:ak3311g@gmail.com" target="_blank" rel="noreferrer"><p className="title text-center w-100 flex-column">
                                        Did i miss something? Mail me
                                    </p></a>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}