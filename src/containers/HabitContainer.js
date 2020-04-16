import React from 'react'
import Week from '../components/Week'

const HabitContainer = (props) => {

    // console.log(props.habitData)
    let habitsArray = props.habitData.map( 
        habit => 
        <Week 
            className="ui list" 
            key={habit.id}
            name={habit.name} 
        > 
        </Week>
    )
    return(
<div class="ui raised very padded text container segment">
        <h2>My Habits</h2>
        
        <div className="ui grid ">
            <div className="seven column row" >
                <p className="column"
                    style={{backgroundColor: "blue"}}> M </p>
                <p className="column"
                    style={{backgroundColor: "blue"}}> T </p>
                <p className="column"
                    style={{backgroundColor: "blue"}}> W </p>
                <p className="column"
                    style={{backgroundColor: "blue"}}> R </p>
                <p className="column"
                    style={{backgroundColor: "blue"}}> F </p>
                <p className="column"
                    style={{backgroundColor: "blue"}}> S </p>
                <p className="column"
                    style={{backgroundColor: "blue"}}> ☼ </p>
                
                </div>
            </div>
            {habitsArray}
            
    </div>
    )
    
}

export default HabitContainer