import { ScrollToTopOnMount } from "../Topics";

export default function Hooks() {
    return (
        <>
        <ScrollToTopOnMount/>
        <div className="container py-3">
            <h1>React Hooks</h1>
            <p>React Hooks are functions that let us hook into the React state and lifecycle features from function components.</p>
            <p>React provides a few built-in Hooks like useState.</p>
            <p>You can also create your own Hooks to reuse stateful behavior between different components.</p>
            <p>Let's take a look at an example where we create a component called Clock.</p>
            <p>It displays a digital clock on the screen.</p>
            <p><b>Here's how we would use this component in another component:</b></p>
            <div>
                <pre className="bg-black text-white fs-6">
                    <code>
                        {`
    import React, { useState, useEffect } from 'react';

    function Clock() {
        const [date, setDate] = useState(new Date());

        useEffect(() => {
            const timerID = setInterval(() => tick(), 1000);
            return function cleanup() {
                clearInterval(timerID);
            };
        });

        function tick() {
            setDate(new Date());
        }

        return (
            <>
                <h4>It is {date.toLocaleTimeString()}.</h4>
            </>
        );
    }

    export default Clock;
                        `}
                    </code>
                </pre>
                </div>
                <p>Here, we have used the function component to create a Clock component.</p>
                <p>The Clock component has a state object with a property called date.</p>
                <p>The useState() method is used to initialize the state property.</p>
                <p>The useEffect() method is called after the component is rendered.</p>
                <p>Inside the useEffect() method, we set up a timer to update the date property of the state object every second.</p>
                <p>When the Clock component is unmounted, the useEffect() method is called.</p>
                <p>Inside the useEffect() method, we clear the timer.</p>
                <p>Here's the output:</p>
                <div className="bg-dark p-3 text-white">
                    <h4>It is {new Date().toLocaleTimeString()}.</h4>
                </div>
            </div>
        </>
    )
}