import React from "react";

class StatefulGreeting extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            /* initial state */
            introduction: "Hello",
            buttonText: "Exit"
        }
    }
}