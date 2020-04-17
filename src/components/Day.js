import React from 'react'
// import {Card} from 'semantic-ui-react'


class Day extends React.Component {

    state = {
        unmarked: true,
        complete: false,
        skipped: false,
        missed: false
    }

    handleClick = (event) => {
        if (this.state.unmarked) {
            this.setState({unmarked: false, complete: true})
        }
        if (this.state.complete) {
            this.setState({complete: false, skipped: true})
        }
        if (this.state.skipped) {
            this.setState({skipped: false, missed: true})
        }
        if (this.state.missed) {
            this.setState({missed: false, unmarked: true})
        }

    }

    colorToggle = () => {
        switch (true) {
            case this.state.unmarked:
                return "black"
            case this.state.complete: 
            return "green"
            case this.state.skipped: 
            return "gray"
            case this.state.missed: 
            return "red"
            default:
                return "black"

        }
    }
    // colorToggle = () => {
    //     return (
    //            this.state.unmarked && "black" 
    //         || this.state.complete && "green" 
    //         || this.state.skipped && "white" 
    //         || this.state.missed && "pink"
    //     )
    // }

    render() {
        console.log(this.props.habitDays)
        return (
            <div 
                className="column"
                style={{backgroundColor: this.colorToggle()}} 
                onClick={this.handleClick}
                date={this.props.date}
            > 
            ⠀
            </div>
        )
    }
}

export default Day