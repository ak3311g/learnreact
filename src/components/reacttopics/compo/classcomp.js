export default function Classcomp() {
    return (
        <>
            <div className="container py-5">
                <h4>Class Components</h4>
                <p>Class components are JavaScript classes that extend the base Component class included in the React library.</p>
                <p>These components are required to include a render() method that returns a React element that describes how a section of the UI (User Interface) should appear.</p>
                <p>Class components can also make use of other features such as local state and lifecycle hooks. These will be discussed in detail in later sections.</p>
                <p>Let's take a look at a simple example where we create a class component called Welcome.</p>
                <p>It extends the base React Component class which provides us with the ability to use state and lifecycle hooks.</p>
                <p>It returns a React element which is a simple JSX div element displaying a heading and a paragraph.</p>
                <p><b>Here's how we would use this component in another component:</b></p>
                <div>
                    <pre className="bg-black text-white fs-6">
                        <code>
                            {`
    import React from 'react';

    class Welcome extends React.Component {
        render() {
            return (
                <div>
                    <h1>Hello, {this.props.name}</h1>
                    <p>{this.props.children}</p>
                </div>
            );
        }
    }
                                    `}
                        </code>
                    </pre>
                </div>
                <p>Notice how we pass the name property to the Welcome component and access it within the component as this.props.name.</p>
                <p>Also, note that we are able to access the children property of the Welcome component as this.props.children.</p>
                <p><b>Here's the output of the above code:</b></p>
                <div className="bg-black text-white p-3">
                    <h1>Hello, John</h1>
                    <p>Children</p>
                </div>
                <p>Class components are mainly responsible for holding data and state. They are called container components.</p>
                <p>However, since the introduction of React Hooks, functional components can now also contain local state and perform side effects.</p>
                <p>These will be discussed in detail in later sections.</p>
            </div>

        </>
    )
}