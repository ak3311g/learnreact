import { ScrollToTopOnMount } from "../Topics";
import Classcomp from "./compo/classcomp";
import Funcomp from "./compo/funccomp";

export default function Components() {
    return(
        <>
        <ScrollToTopOnMount />
        <div className="container">
            <h1>Components</h1>
            <p>Components are the building blocks of any React app and a typical React app will have many of these. Simply put, a component is a JavaScript class or function that optionally accepts inputs i.e. properties(props) and returns a React element that describes how a section of the UI (User Interface) should appear.</p>
            <p>Components are the heart of React's powerful, declarative programming model. React Router is a collection of navigational components that compose declaratively with your application. Whether you want to have bookmarkable URLs for your web app or a composable way to navigate in React Native, React Router works wherever React is rendering--so take your pick!</p>
            
            <div className="container">
                <h2>Types of Components</h2>
                <p>There are two types of components in React:</p>
                <ul>
                    <li>
                        <Funcomp/>
                    </li>

                    <li>
                        <Classcomp/>
                    </li>
                </ul>
            </div>
        </div>
        </>
    )
}