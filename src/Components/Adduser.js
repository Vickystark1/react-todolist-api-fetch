import React from 'react'
import '../Components/user.css'

const AddUser = ({ onAdd }) => {

    // handle submit function
    const handleOnSubmit = (e) => {
        e.preventDefault();
        onAdd(e.target.name.value);
        e.target.name.value = "";


    }

    return (
        <div className='list center'>
            <form onSubmit={handleOnSubmit}>
                <h1 className='headertitle'>React Todo List Using API</h1>
                <span ><input placeholder='Add Todo'  name='name' required /></span>
                <button onSubmit={handleOnSubmit}>Add</button>
            </form>
        </div>
    )
}

export default AddUser