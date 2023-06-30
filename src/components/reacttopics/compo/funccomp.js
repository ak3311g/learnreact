export default function Funcomp() {
    return (
        <>
            <div className="container py-5 ">
                <h1>Functional Components</h1>
                <p>Functional components are simply JavaScript functions. These are typically arrow functions but can also be created with the regular function keyword.</p>
                <p>These functions take in an optional input which is an object with properties called props and returns a React element that describes how a section of the UI (User Interface) should appear.</p>
                <p>Functional components are also sometimes referred to as stateless components as they simply accept data and display them in some form; that is they are mainly responsible for rendering UI.</p>

                <div className="container">
                    <h2>Functional Component Syntax</h2>
                    <p>Functional components can be defined either by using a function declaration or an arrow function expression.</p>
                    <p>Let's take a look at a simple example where we create a functional component called Welcome.</p>
                    <p>It accepts a props object as its parameter which we can use to access properties passed to it.</p>
                    <p>It returns a React element which is a simple JSX div element displaying a heading and a paragraph.</p>
                    <p><b>Here's how we would use this component in another component:</b></p>
                    <div>
                        <pre className="bg-black text-white fs-6">
                            <code>
                                {`
    import React from 'react';

    function Welcome(props) {
        return (
            <div>
                <h1>Hello, {props.name}</h1>
                <p>{props.children}</p>
            </div>
        );
    `}
                            </code>
                        </pre>
                    </div>
                </div>
                <p>Notice how we pass the name property to the Welcome component and access it within the component as props.name.</p>
                <p>Also, note that we are able to access the children property of the Welcome component as props.children.</p>
                <p><b>Here's the output of the above code:</b></p>
                <div className="bg-black text-white p-3">
                    <h1>Hello, John</h1>
                    <p>Children</p>
                </div>
                <p>Functional components are mainly responsible for rendering UI and have no state of their own. They are called presentational components.</p>
                <p>However, since the introduction of React Hooks, functional components can now also contain local state and perform side effects.</p>
                <p>These will be discussed in detail in later sections.</p>
            </div>
        </>
    )
}