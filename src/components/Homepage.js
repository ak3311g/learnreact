export default function Home() {
    return (
        <div className="container">
            <span className="fs-1 fw-bold text-primary">Reacts JS </span>
            <div>
                <p className="container m-3 fs-5">
                    React.js follows a component-based approach, where the UI is broken down into reusable components. These components encapsulate their own state and logic, making it easier to manage and maintain complex UIs.
                </p>
                <p className="container m-3 fs-5">
                    One of the key features of React.js is its ability to efficiently update only the necessary parts of the UI when there are changes, rather than re-rendering the entire page.
                </p>
            </div>

            <div className="container mt-5">
                <h1 className="fs-1 fw-bold text-primary">Installation & Setup </h1>
                <p className="container m-3 fs-5">
                    React.js is a JavaScript library, so it can be included in an HTML file using a <span className="fw-bold">script</span> tag. However, the recommended way to develop React.js applications is by using a JavaScript module bundler like webpack, which lets you write modular code and bundle it together into small packages to optimize load time.
                </p>
                <p className="container m-3 fs-5">
                    To install React.js, you need to have Node.js and npm installed on your system.
                </p>
                
                <p className="container m-3 fs-5">
                    Here is Step by Step Guide to install React JS on your system.
                </p>

                <ul className="container m-3 fs-5">
                    <li className="my-2">
                      <h3>  Step 1: Install Node.js and npm</h3>
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <img src="https://nodejs.org/static/images/logo.svg" alt="1" border="0" className="bg-black m-1 p-2 rounded"/>
                            <div className="bg-dark-subtle rounded p-2">
                                <p className="fs-6">
                                    Node.js is a JavaScript runtime environment that includes everything you need to execute a program written in JavaScript. It is used to run JavaScript on the server.
                                </p>
                                <p className="fs-6">
                                    npm is a package manager for Node.js packages. It is used to install, publish, and manage node programs in a centralized location.
                                </p>
                                <a href="https://nodejs.org/en/download/" target="_blank" rel="noreferrer" className="btn btn-primary">Download Node.js</a>
                            </div>
                        </div>
                    </li>
                    <li className="my-4">
                        <h3>Step 2: Install create-react-app</h3>
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" alt="1" border="0" className="bg-black m-1 p-2 rounded" width="90vw"/>
                            <div className="bg-dark-subtle rounded p-2">
                                <p className="fs-6">
                                    create-react-app is a command-line tool from Facebook that allows you to easily create a new React.js project.
                                </p>
                                <p className="fs-6">
                                    To install create-react-app, run the following command in your terminal:
                                </p>
                                <code className="bg-black p-2 rounded">npm install -g create-react-app</code>
                            </div>
                        </div>
                    </li>
                    <li className="my-4">
                        <h3>Step 3: Create a React.js application</h3>
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <div className="bg-dark-subtle rounded p-2">
                                <p className="fs-6">
                                    Once you have installed create-react-app, you can create a new React.js application by running the following command:
                                </p>
                                <code className="bg-black p-2 rounded">npx create-react-app my-app</code>
                                <p className="fs-6">
                                    This will create a new folder called my-app in the current directory and install all the necessary files and dependencies for your React.js application.
                                </p>
                            </div>
                        </div>
                    </li>
                    <li className="my-4">
                        <h3>Step 4: Run the React.js application</h3>
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <div className="bg-dark-subtle rounded p-2">
                                <p className="fs-6">
                                    Once the installation is complete, you can change your current directory to my-app and run the following command to start the React.js application:
                                </p>
                                <code className="bg-black p-2 rounded">cd my-app</code>
                                <br/>
                                <br/>
                                <code className="bg-black p-2 rounded">npm start</code>
                                <p className="fs-6">
                                    This will start the development server on port 3000 and open your React.js application in the browser.
                                </p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}