import React from 'react'
import {Card} from 'semantic-ui-react'


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
        return (
               this.state.unmarked && "black" 
            || this.state.complete && "green" 
            || this.state.skipped && "white" 
            || this.state.missed && "pink"
        )
    }

    render() {
        return (
            <div 
                className="column"
                style={{backgroundColor: this.colorToggle()}} 
                onClick={this.handleClick}
            > 
            ⠀
            </div>
        )
    }
}

export default Day