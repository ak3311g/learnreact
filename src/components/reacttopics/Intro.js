import { ScrollToTopOnMount } from "../Topics";

export default function Introduction() {
    return (
        <>
            <ScrollToTopOnMount />
            <div className="container mt-5">
                <h1 className="bg-dark-subtle rounded p-2">Introduction</h1>
                <p className="container m-3 fs-4">
                    <span className="fs-3 fw-bold text-primary ">Reacts JS </span>
                    is a JavaScript library for building user interfaces. It was developed by Facebook and released in 2013.
                </p>
                <p className="container m-3 fs-4">
                    React.js follows a component-based approach, where the UI is broken down into reusable components. These components encapsulate their own state and logic, making it easier to manage and maintain complex UIs. React.js uses a virtual DOM (Document Object Model) to efficiently update and render components in response to changes.
                </p>
                <p className="container m-3 fs-4">
                    One of the key features of React.js is its ability to efficiently update only the necessary parts of the UI when there are changes, rather than re-rendering the entire page. This is achieved through a process called reconciliation, where React.js compares the virtual DOM with the actual DOM and updates only the differences, resulting in improved performance.
                </p>
            </div>
        </>
    )
}