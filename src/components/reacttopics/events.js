export default function Events() {
    return (
        <>
            <div className="container ">
                <h1>Events</h1>
                <p>Handling events with React elements is very similar to handling events on DOM elements.</p>
                <p>There are some syntactic differences:</p>
                <ul>
                    <li>React events are named using camelCase, rather than lowercase.</li>
                    <li>With JSX you pass a function as the event handler, rather than a string.</li>
                </ul>
                <p>For example, the HTML:</p>
                <div>
                    <pre className="bg-black text-white fs-6">
                        <code>
                            {`
    <button onclick="activateLasers()">
        Activate Lasers
    </button>
                        `}
                        </code>
                    </pre>
                </div>
                <p>is slightly different in React:</p>
                <div>
                    <pre className="bg-black text-white fs-6">
                        <code>
                            {`
    <button onClick={activateLasers}>
        Activate Lasers
    </button>
                            `}
                        </code>
                    </pre>
                </div>
                <p>Another difference is that you cannot return false to prevent default behavior in React.</p>
                <p>You must call preventDefault explicitly.</p>
                <p>For example, with plain HTML, to prevent the default link behavior of opening a new page, you can write:</p>
                <div>
                    <pre className="bg-black text-white fs-6">
                        <code>
                            {`
    <a href="#" onclick="console.log('The link was clicked.'); return false">
        Click me
    </a>
                                `}
                        </code>
                    </pre>
                </div>
                <p>In React, this could instead be:</p>
                <div>
                    <pre className="bg-black text-white fs-6">
                        <code>
                            {`
    function ActionLink() {
        function handleClick(e) {
            e.preventDefault();
            console.log('The link was clicked.');
        }

        return (
            <a href="#" onClick={handleClick}>
                Click me
            </a>
        );
    }
                                    `}
                        </code>
                    </pre>
                </div>
                <p>Here, e is a synthetic event.</p>
                <p>React defines these synthetic events according to the W3C spec, so you don't need to worry about cross-browser compatibility.</p>
                <p>When using React, you generally don't need to call addEventListener to add listeners to a DOM element after it is created.</p>
                <p>Instead, just provide a listener when the element is initially rendered.</p>
                <p>When you define a component using an ES6 class, a common pattern is for an event handler to be a method on the class.</p>
                <p>For example, this Toggle component renders a button that lets the user toggle between "ON" and "OFF" states:</p>
                <div>
                    <pre className="bg-black text-white fs-6">
                        <code>
                            {`
    class Toggle extends React.Component {
        constructor(props) {
            super(props);
            this.state = {isToggleOn: true};

            // This binding is necessary to make 'this' work in the callback
                            this.handleClick = this.handleClick.bind(this);
        }

                            handleClick() {
                                this.setState(state => ({
                                    isToggleOn: !state.isToggleOn
                                }));
        }

                            render() {
            return (
                            <button onClick={this.handleClick}>
                                {this.state.isToggleOn ? 'ON' : 'OFF'}
                            </button>
                            );
        }
    }

                            ReactDOM.render(
                            <Toggle />,
                            document.getElementById('root')
                            );
                                        `}
                        </code>
                    </pre>
                </div>
                <p>You have to be careful about the meaning of this in JSX callbacks.</p>
                <p>In JavaScript, class methods are not bound by default.</p>
                <p>If you forget to bind this.handleClick and pass it to onClick, this will be undefined when the function is actually called.</p>
                <p>This is not React-specific behavior; it is a part of how functions work in JavaScript.</p>
                <p>Generally, if you refer to a method without () after it, such as onClick={`this.handleClick`}, you should bind that method.</p>
                <p>If calling bind annoys you, there is another way you can get around this.</p>
                <p>If you are using the experimental public class fields syntax, you can use class fields to correctly bind callbacks:</p>
                <div>
                    <pre className="bg-black text-white fs-6">
                        <code>
                            {`
    class LoggingButton extends React.Component {
        // This syntax ensures 'this' is bound within handleClick.
        // Warning: this is *experimental* syntax.
        handleClick = () => {
            console.log('this is:', this);
        }

        render() {
            return (
                <button onClick={this.handleClick}>
                    Click me
                </button>
            );
        }
    }
                            `}
                        </code>
                    </pre>
                    </div>
                    <p>This syntax is enabled by default in Create React App.</p>
            </div>
        </>
    )
}