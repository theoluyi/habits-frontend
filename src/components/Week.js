import React from 'react'
import Day from './Day'
// import {Grid} from 'semantic-ui-react'


class Week extends React.Component {
    
    render() {

        return (
            <div className="ui grid">
                <div>{this.props.habit.name} <br/>Mon {this.props.weekstart.slice(5)}</div>
                <div className="seven column row">
                    <Day habitDays={this.props.habit.days} date={this.props.weekstart} />
                    <Day habitDays={this.props.habit.days} date={this.props.weekstart} />
                    <Day habitDays={this.props.habit.days} date={this.props.weekstart} />
                    <Day habitDays={this.props.habit.days} date={this.props.weekstart} />
                    <Day habitDays={this.props.habit.days} date={this.props.weekstart} />
                    <Day habitDays={this.props.habit.days} date={this.props.weekstart} />
                    <Day habitDays={this.props.habit.days} date={this.props.weekstart} />
                </div>
            </div>
        )
    }
}

export default Week