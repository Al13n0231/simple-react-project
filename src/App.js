import React, { useState } from 'react';
import MyButton from './MyButton';

function App() {

    const [counter, setCounter] = useState(0);
    const [age, setAge] = useState(0);

    function handleIncreaseCounter(){
        setCounter(counter + 1)
        console.log('counter: ', counter)
    }
    function handleDecreaseCounter(){
        setCounter(counter - 1)
        console.log('counter', counter)
    }
    function handlezeroCounter(){
        setCounter(0)
        console.log('counter', counter)
    }

    //@TODO
    // set the 3 variables below to a state that gets randomly generated
    // you can either generate it on page load
    // or for bonus you can call the random variable generators on a button click
    
    // We should see output like:
    // My name is: John
    // My age is: 87
    // My job is: Farmer


    function generatePersonData(){
        // SET THE STATES OF THOSE 3 VARIABLES TO RANDOM VALUES
        // BE CREATIVE AS TO HOW YOU COME UP WITH RANDOM NAMES AND JOBS, 
        // RANDOM AGES SHOULD BE REALISTIC... NOBODY IS 234932495342 YEARS OLD
        setAge(age + 1)
    }

    return (
        <>
        <div style={{
            maxWidth: "400px",
            padding: "10px"
        }}>
            {/* @TODO make the name below a state, that is set to a random name */}
            <div>
                My name is: Randy
            </div>
            {/* @TODO make the age below a state, that is set to a random age */}

            <div>
                My age is: {age}
            </div>
            {/* @TODO make the name job a state, that is set to a random job */}

            <div>
                My job is: Software Engineer 
            </div>
            
            <div style={{
                textAlign: "center",
                marginTop: "30px"
            }}>
                {counter}
            </div>

            <MyButton 
                backgroundColor="red" 
                color="white" 
                margin="10px" 
                padding="20px" 
                handleClick={generatePersonData}
            >
                generate person data
            </MyButton>


            {/* <MyButton 
                backgroundColor="red" 
                color="white" 
                margin="10px" 
                padding="20px" 
                handleClick={handleDecreaseCounter}
            >
                decrease counter
            </MyButton>


            <MyButton 
                backgroundColor="red" 
                color="white" 
                margin="10px" 
                padding="20px" 
                handleClick={handlezeroCounter}
            >
                reset counter
            </MyButton> */}
            
            </div>
        </>
    );
}

export default App;
