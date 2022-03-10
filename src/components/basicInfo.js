import React from 'react';

class basicInfo extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="information">
                <ul>
                    <li>{this.props.person.name}</li>
                    <li>{this.props.person.age}</li>
                </ul>
            </div>
        );
    }
}

export default basicInfo;