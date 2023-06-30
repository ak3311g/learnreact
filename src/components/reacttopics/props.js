import { ScrollToTopOnMount } from "../Topics";

export default function Props() {
    return (
        <>
            <ScrollToTopOnMount />
            <div className="container ">
                <h1>Props</h1>
                <p>Props are arguments passed into React components. Props are passed to components via HTML attributes.</p>
                <p>React Props are like function arguments in JavaScript and attributes in HTML.</p>
                <p>React Props are read-only! You will get an error if you try to change their value.</p>
                <p>React Props are passed down from the parent component.</p>
                <p>React Props are also used to pass functions as props to child components.</p>
                <p>Let's take a look at an example where we create a component called Greet.</p>
                <p>It accepts a props argument. The props argument allows us to pass data from a parent component to a child component.</p>
                <p><b>Here's how we would use this component in another component:</b></p>
                <div>
                    <pre className="bg-black text-white fs-6">
                        <code>
                            {`
    import React from 'react';

    function Greet(props) {
        return (
            <>
                <h4>Hello {props.name}</h4>
                <p>{props.children}</p>
            </>

        )
    }

    export default Greet;
                        `}
                        </code>
                    </pre>
                </div>
                <p>Here, we have used the props argument to access the value of the name property.</p>
                <p>Here's the output:</p>
                <div className="bg-dark p-3 text-white">
                    <h4>Hello John</h4>
                    <p>John is a Software Developer</p>
                </div>
            </div>
        </>
    )
}