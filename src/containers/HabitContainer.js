import React from 'react'
import Week from '../components/Week'

const HabitContainer = (props) => {
    let today = new Date()
    function formatDate(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();
    
        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;
    
        return [year, month, day].join('-');
    }
    function setToMonday( date ) {
        var day = date.getDay() || 7;  
        if( day !== 1 ) 
            date.setHours(-24 * (day - 1)); 
        return formatDate(date);
    }

    let habitsArray = props.habitData.map(habit => 
        <Week 
            className="ui list" 
            key={habit.id}
            habit={habit}
            weekstart={setToMonday(today)} />
    )

    return(
        <div className="ui raised very padded text container segment">
            <h2>My Habits</h2>
            <div className="ui grid ">
                <div id="days of the week" className="seven column row" >
                    <p className="column"
                        style={{backgroundColor: "gray"}}> M </p>
                    <p className="column"
                        style={{backgroundColor: "White"}}> T </p>
                    <p className="column"
                        style={{backgroundColor: "gray"}}> W </p>
                    <p className="column"
                        style={{backgroundColor: "White"}}> R </p>
                    <p className="column"
                        style={{backgroundColor: "gray"}}> F </p>
                    <p className="column"
                        style={{backgroundColor: "White"}}> S </p>
                    <p className="column"
                        style={{backgroundColor: "gray"}}> ☼ </p>
                </div>
            </div>
            {habitsArray}
        </div>
    )
}

export default HabitContainer