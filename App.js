const heading = React.createElement(
    "div",
    {id:"parent"},
    [
        React.createElement(
            "div",
            {id:"child"},
            [
                React.createElement(
                    "h1",
                    {id:"h1-tag"},
                    "Heading Tag H1"
                ),
                React.createElement(
                    "h2",
                    {id:"h2-tag"},
                    "Heading Tag H2"
                )
            ]
        ),
        React.createElement(
            "div",
            {id:"child"},
            [
                React.createElement(
                    "h1",
                    {id:"h1-tag"},
                    "Heading Tag H1"
                ),
                React.createElement(
                    "h2",
                    {id:"h2-tag"},
                    "Heading Tag H2"
                )
            ]
        )
    ]
)
console.log(heading)
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(heading)