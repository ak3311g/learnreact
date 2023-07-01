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
                <div className="mx-3">
                More features<br/>
                Coming Soon
                </div>
                {/* <div className="nav-bar">
                    <div className="btn-group">
                        <button type="button" className="dropdowntoggle p-3 m-2" data-bs-toggle="dropdown" aria-expanded="false">
                            More Items
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end">
                            <li><button className="dropdown-item" type="button">More Topics</button></li>
                            <li><button className="dropdown-item" type="button">Did i Miss ?</button></li>
                            <li><button className="dropdown-item" type="button">Something else here</button></li>
                        </ul>
                    </div>
                </div> */}
            </div>
        </>
    )
}