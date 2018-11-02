import React from 'react';

const Form = ({handleChange, theatre, handleSubmit}) => {
    return(
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} type="text" name="theatre" placeholder="search for a theatre..." value={theatre}/>
            <input type="submit"/>
        </form>
    )
}

export default Form;