import { ScrollToTopOnMount } from "../Topics";

export default function Lifecycle(){
    return (
        <>
        <ScrollToTopOnMount/>
            <div className="container py-3 ">
            <h1>React Lifecycle</h1>
            <p>React components have a lifecycle. They are created and rendered to the DOM, updated when their state changes or their props change, and finally, they are destroyed when they are no longer needed.</p>
            <p>React components have several "lifecycle methods" that you can override to run code at particular times in the process.</p>
            <p>Let's take a look at an example where we create a component called Clock.</p>
            <p>It displays a digital clock on the screen.</p>
            <p><b>Here's how we would use this component in another component:</b></p>
            <div>
                <pre className="bg-black text-white fs-6">
                    <code>
                        {`
    import React from 'react';

    class Clock extends React.Component {
        constructor(props) {
            super(props);
            this.state = { date: new Date() };
        }

        componentDidMount() {
            this.timerID = setInterval(() => this.tick(), 1000);
        }

        componentWillUnmount() {
            clearInterval(this.timerID);
        }

        tick() {
            this.setState({
                date: new Date()
            });
        }

        render() {
            return (
                <>
                    <h4>It is {this.state.date.toLocaleTimeString()}.</h4>
                </>
            );
        }
    }

    export default Clock;
                        `}
                    </code>
                </pre>
                </div>
                <p>Here, we have used the class component to create a Clock component.</p>
                <p>The Clock component has a state object with a property called date.</p>
                <p>The constructor() method is called before the component is mounted.</p>
                <p>When the Clock component is mounted, the componentDidMount() method is called.</p>
                <p>Inside the componentDidMount() method, we set up a timer to update the date property of the state object every second.</p>
                <p>When the Clock component is unmounted, the componentWillUnmount() method is called.</p>
                <p>Inside the componentWillUnmount() method, we clear the timer.</p>
                <p>Here's the output:</p>
                <div className="bg-dark p-3 text-white">
                    <h4>It is {new Date().toLocaleTimeString()}.</h4>
                </div>
            </div>
        </>
    )
}