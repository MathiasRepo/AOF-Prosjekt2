// Example React component
const App = () => {
    return (
        <div>
            <h1>Hello from React!</h1>
        </div>
    );
}

// Render the React component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
    )
;

document.getElementById("booking_iframe").onload = () => {
    this.contentWindow.scrollTo(0, this.contentDocument.body.scrollHeight / 2);
}