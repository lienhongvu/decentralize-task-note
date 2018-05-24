import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import './styles.css';

class Note extends React.Component {

    constructor(props) {
        super(props);
        this.state = {text: '', listNotes: []};
    }

    render() {
        return (
            <div>New Project
            </div>
        );
    }
}

ReactDOM.render(
    <Note/>,
    document.getElementById("root")
);

// export default injectSheet(styles)(Note);