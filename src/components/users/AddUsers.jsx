import React from 'react'
import { useState } from 'react';
import Card from '../ui/Card';
import classes from "./addUser.module.css"
import Button from '../ui/Button';
import ErrorModal from '../ui/ErrorModal';

const AddUsers = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    // const userInputs = {enteredUsername, enteredAge};
    // const [showModal, setShowModal] = useState(false)
    const [error, setError] = useState();

    const handleUsername=(e)=>{
        setEnteredUsername(e.target.value)
    }

    const handleAge=(e)=>{
        setEnteredAge(e.target.value)
    }
    
    const addUserHandler=(e)=>{
        e.preventDefault();

        if(enteredUsername.trim().length===0 || enteredAge.trim().length ===0){
            // setShowModal(true);
            setError({
                title: 'Invalid Input',
                message: 'Please enter a valid name and age(non-empty values).'
            });
            return;
        } 
        if(+enteredAge<1){
            // setShowModal(true)
            setError({
                title: 'Invalid Age',
                message: 'Please enter a valid age.'
            });
            return;
        }
        
        // props.onUpdateUsers(userInputs)
        props.onUpdateUsers(enteredUsername, enteredAge)
        setEnteredUsername('')
        setEnteredAge ('')
    }

    const errorHandler=()=>{
        // setShowModal(false)
        setError(!error)
    }

  return (
    <>
    {error && (<ErrorModal onConfirm={errorHandler} title={error.title} message={error.message}/>)}
    <Card className={classes.input}>
    <form onSubmit={addUserHandler}>
        <label htmlFor='username' >Username</label>
        <input id='username' type="text"  value={enteredUsername} onChange={handleUsername} />
        <label htmlFor='age' >Age(Years)</label>
        <input id='age' type="number" value={enteredAge} onChange={handleAge} />
        <Button type='submit'> Add Users</Button>
    </form>
    </Card>
    </>
  )
}

export default AddUsers;