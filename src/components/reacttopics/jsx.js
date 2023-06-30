import "../../App.css";
import { ScrollToTopOnMount } from "../Topics";

export default function JSX() {
    return (
        <>
            <ScrollToTopOnMount />
            <div className="container mt-5">
                <h1 className="bg-dark-subtle rounded p-2">JSX</h1>
                <p className="container m-3 fs-4">
                    <span className="fs-3 fw-bold text-primary ">JSX </span>
                    is a syntax extension to JavaScript. It is used with React to describe what the user interface should look like. By using JSX, we can write HTML structures in the same file that contains JavaScript code. This makes the code easier to understand and debug.
                </p>
                <p className="container m-3 fs-4">
                    JSX is not a requirement for using React. However, it is recommended to use JSX as it makes the code easier to read and write. JSX is similar to HTML, but there are a few key differences that we need to be aware of.
                </p>
                <h3>Here's an example of JSX code</h3>
                <div className="container m-3 fs-4">
                    <code className="bg-black p-2 rounded">
                        {`const element = <h1>Hello, world!</h1>;`}
                    </code>
                </div>
                <p className="container m-3 fs-4">
                    In the above example, we have created a variable called element and assigned it a JSX expression. The JSX expression is compiled to the following JavaScript code:
                </p>
                <div className="container m-3 fs-4">
                    <code className="bg-black p-2 rounded">
                        {`const element = React.createElement('h1', null, 'Hello, world!');`}
                    </code>
                </div>
                <p className="container m-3 fs-4">
                    As you can see, JSX is converted to regular JavaScript code by the React compiler. This is why we need to import React in every file that contains JSX code.
                </p>
                <p className="container m-3 fs-4">
                    JSX is not a requirement for using React. However, it is recommended to use JSX as it makes the code easier to read and write. JSX is similar to HTML, but there are a few key differences that we need to be aware of.
                </p>
                <h2 className="text-decoration-underline">JSX Differences from HTML</h2>
                <p className="container m-3 fs-4">
                    JSX is similar to HTML, but there are a few key differences that we need to be aware of.
                </p>
                <ul className="container m-3 fs-4">
                    <li>Return a single root element</li>
                    <li>JSX elements must be closed.</li>
                    <li>camelCase all most of the things!.</li>
                </ul>
                <ol className="container m-3 fs-4">
                    <li>
                        <h3>Return a single root element</h3>
                        <p className="container m-3 fs-4">
                            In JSX, we can only return a single root element. This means that we cannot return multiple elements at once. For example, the following code will not work:
                        </p>
                        <div className="container m-3 fs-4">
                            <code className="bg-black p-2 rounded">
                                {`const element = (
                            <h1>Hello, world!</h1>
                            <h2>It is a nice day.</h2>
                            );`}
                            </code>
                        </div>
                        <p className="container m-3 fs-4">
                            The above code will throw an error because we are trying to return two elements at once. To fix this, we need to wrap the elements in a single root element. For example:
                        </p>
                        <div className="container m-3 fs-4">
                            <code className="bg-black p-2 rounded">
                                {`const element = (
                                <div>   
                                    <h1>Hello, world!</h1>
                                    <h2>It is a nice day.</h2>
                                </div>
                            )`}
                            </code>
                        </div>
                    </li>
                    <li>
                        <h3>JSX elements must be closed</h3>
                        <p className="container m-3 fs-4">
                            In JSX, we need to close all elements. For example, the following code will not work:
                        </p>
                        <div className="container m-3 fs-4">
                            <code className="bg-black p-2 rounded">
                                {`const element = <img src="image.jpg">;`}
                            </code>
                        </div>
                        <p className="container m-3 fs-4">
                            The above code will throw an error because we are trying to return an element without closing it. To fix this, we need to close the element. For example:
                        </p>
                        <div className="container m-3 fs-4">
                            <code className="bg-black p-2 rounded">
                                {`const element = <img src="image.jpg" />;`}
                            </code>
                        </div>
                    </li>
                    <li>
                        <h3>camelCase all most of the things!</h3>
                        <p className="container m-3 fs-4">
                            In JSX, we need to use camelCase for all attributes. For example, the following code will not work:
                        </p>
                        <div className="container m-3 fs-4">
                            <code className="bg-black p-2 rounded">
                                {`<img 
                            src="https://i.imgur.com/yXOvdOSs.jpg" 
                            alt="Hedy Lamarr" 
                            className="photo"
                        />`}
                            </code>
                        </div>
                    </li>
                </ol>
            </div>

        </>
    )
}