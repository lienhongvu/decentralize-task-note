import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import './styles.css';

class Note extends React.Component {

    constructor(props) {
        super(props);
        this.state = {text: '', listNotes: []};
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.setState({text: '', listNotes: [...this.state.listNotes, this.state.text]});

    };

    onChange = (event) => {
        this.setState({text: event.target.value});
    };

    render() {
        return (
            <div className="wrapper">
                <div className="inner-wrapper">
                    <div className="header">
                        <span className="title-header-text">TO DO APP</span>
                        <div/>
                    </div>

                    <div className="table">
                        <div className="row">
                            <div className="first-cell">1</div>
                            <div className="second-cell"><span className="second-cell-text to-do-text-color">TODO</span></div>
                            <div className="cell">Need to create UI stuff for to-do-daily-note based on nOS plaform</div>
                        </div>

                        <div className="row">
                            <div className="first-cell" data-title="Age">2</div>
                            <div className="second-cell"><span className="second-cell-text fix-me-text-color">FIXME</span></div>
                            <div className="cell" data-title="Location">Investigate bug happened when integrating ipfs</div>
                        </div>

                        <div className="row">
                            <div className="first-cell" data-title="Age">3</div>
                            <div className="second-cell"><span className="second-cell-text note-text-color">NOTE</span></div>
                            <div className="cell" data-title="Location">Inspired everyday</div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

const List = (props) => {
    return (
        <ul>
            {
                props.items.map((item, index) => <li key={index}>{item} </li>)
            }
        </ul>
    );
};

ReactDOM.render(
    <Note/>,
    document.getElementById("root")
);

// export default injectSheet(styles)(Note);