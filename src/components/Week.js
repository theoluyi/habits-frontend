import React from 'react'
import Day from './Day'
import {Grid} from 'semantic-ui-react'


class Week extends React.Component {
    render() {
        return (
            <div className="ui grid">
                <div>{this.props.name}</div>
                <div className="seven column row">
                    <Day/>
                    <Day/>
                    <Day/>
                    <Day/>
                    <Day/>
                    <Day/>
                    <Day/>
                </div>
            </div>
        )
    }
}

export default Week