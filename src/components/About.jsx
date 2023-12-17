import React from "react";

class AboutClass extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { name, location } = this.props;

        return (
            <div className="user-card">
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: @huzefaBadshah</h4>
            </div>
        )
    }
};

export default AboutClass;