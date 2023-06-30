export default function Router() {
    return (
        <>
            <div className="container ">
                <h1>Router</h1>
                <p>React Router is a collection of navigational components that compose declaratively with your application.</p>
                <p>Whether you want to have bookmarkable URLs for your web app or a composable way to navigate in React Native, React Router works wherever React is rendering--so take your pick!</p>
                <p>Web apps are all about communicating state, and React Router makes that incredibly simple with <code>Route</code>.</p>
                <p>Whenever you need to render something based on the location, use a <code>Route</code>.</p>
                <p>React Router will match that location to a route and will render their content.</p>
                <p>It does that through the children prop.</p>
                <p>It's worth mentioning that the children prop can be used with any component, not just Route.</p>
                <p>It's a powerful pattern that can be used to compose any number of components together.</p>
                <p>Here's a simple example of a <code>Route</code> that renders its children when the location matches the route's path:</p>
                <div>
                    <pre className="bg-black text-white fs-6">
                        <code>
                            {`
    import { Route } from "react-router-dom";
    
    <Route path="/about">
        <About />
    </Route>
                            `}
                        </code>
                    </pre>
                </div>
                <p>When the current location matches the path, the route will render a React element. When the path does not match, the route will not render anything.</p>
                <p>It's also worth mentioning that the path prop can also accept an array of paths that will match the same component.</p>
                <p>Here's an example:</p>
                <div>
                    <pre className="bg-black text-white fs-6">
                        <code>
                            {`
    import { Route } from "react-router-dom";

    <Route path={["/about", "/info"]}>
        <About />
    </Route>
                            `}
                        </code>
                    </pre>
                </div>
                <p>When the current location matches either path, the route will render a React element.</p>
                <p>When the path does not match either path, the route will not render anything.</p>
                <p>It's also worth mentioning that the path prop can also accept an array of paths that will match the same component.</p>
                <p>Here's an example:</p>
                <div>
                    <pre className="bg-black text-white fs-6">
                        <code>
                            {`
    import { Route } from "react-router-dom";
        
    <Route path={["/about", "/info"]}>
        <About />
    </Route>
                            `}
                        </code>
                    </pre>
                </div>
            </div>
        </>
    )
}