import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <>
        <div className="container py-2">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h3>Contact</h3>
                    <h6 className="d-inline"> Email: </h6><a href="mailto:ak3311g@gmail.com" className="text-decoration-none text-black fs-7 fw-bold"><FontAwesomeIcon className="fs-5 text-black" icon={faEnvelope}/></a>
                    <h6 className="d-inline">GitHub: </h6><a href="https://github.com/ak3311g" className="text-decoration-none text-black fs-7 fw-bold"><FontAwesomeIcon className="fs-5 text-black" icon={faGithub}/></a>
                    <h6 className="d-inline">LinkedIn: </h6><a href="https://www.linkedin.com/in/rfankit23/" className="text-decoration-none text-black fs-7 fw-bold"><FontAwesomeIcon className="fs-5 text-black" icon={faLinkedin}/></a>
                </div>
            </div>  
        </div>
    </>
  );
}