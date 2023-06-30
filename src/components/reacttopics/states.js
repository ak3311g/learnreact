import { useState } from "react";

export default function States() {
    const [count, setCount] = useState(0);
    const [message, setMessage] = useState("Welcome Visitor");

    return (
        <>
            <div className="container py-5">
                <h1>States</h1>
                <p>State is a JavaScript object that stores a component's dynamic data and determines the component's behaviour.</p>
                <p>It is an internal data store (object) of a component. It is mutable and can be changed from within the component using the setState() method.</p>
                <p>When a component's state data changes, the rendered markup will be updated by re-invoking render().</p>
                <p>State is similar to props, but it is private and fully controlled by the component.</p>
                <p>Let's take a look at an example where we create a component called Message.</p>
                <p>It has a state object with a property called message. It also has a button that changes the state of the message property.</p>
                <p><b>Here's how we would use this component in another component:</b></p>
                <div>
                    <pre className="bg-black text-white fs-6">
                        <code>
                            {`
    import React from 'react';

    function Message() {
        const [message, setMessage] = useState("Welcome Visitor");
        return (
            <>
                <h4>{message}</h4>
                <button onClick={() => setMessage("Thank you for subscribing")}>Subscribe</button>
            </>
        )
    }

    export default Message;
                            `}
                        </code>
                    </pre>
                </div>
                <p>Here, we have used the useState() hook to create a state variable called message.</p>
                <p>useState() returns a pair of values: the current state and a function that updates it.</p>
                <p>When the user clicks on the Subscribe button, the setMessage() function is invoked with the new message.</p>
                <p>When the state is updated, the component re-renders itself and the new message is displayed.</p>
                <p>Here's the output:</p>
                <div className="bg-dark p-3 text-white">
                    <h4>{message}</h4>
                    <button onClick={() => setMessage("Thank you for subscribing")}>Subscribe</button>
                </div>
                <p>Let's take a look at another example where we create a component called Counter.</p>
                <p>It has a state object with a property called count. It also has two buttons that increment and decrement the count.</p>
                <p><b>Here's how we would use this component in another component:</b></p>
                <div>
                    <pre className="bg-black text-white fs-6">
                        <code>
                            {`
    import React from 'react';

    function Counter() {
        const [count, setCount] = useState(0);
        return (
            <>

                <h4>Count: {count}</h4>
                <button onClick={() => setCount(count + 1)}>Increment</button>
                <button onClick={() => setCount(count - 1)}>Decrement</button>
            </>
    )

    export default Counter;
                            `}
                        </code>
                    </pre>
                </div>
                <p>Here, we have used the useState() hook to create a state variable called count.</p>
                <p>useState() returns a pair of values: the current state and a function that updates it.</p>
                <p>When the user clicks on the Increment button, the setCount() function is invoked with the new count.</p>
                <p>When the user clicks on the Decrement button, the setCount() function is invoked with the new count.</p>
                <p>When the state is updated, the component re-renders itself and the new count is displayed.</p>
                <p>Here's the output:</p>
                <div className="bg-dark p-3 text-white">
                    <h4>Count: {count}</h4>
                    <button onClick={() => setCount(count + 1)}>Increment</button>
                    <button onClick={() => setCount(count - 1)}>Decrement</button>
                </div>
            </div>
        </>
    )
}