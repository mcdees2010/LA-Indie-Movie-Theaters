import React from 'react';
import './Form.css';

const Form = ({handleChange, theatre, handleSubmit}) => {
    return(
        <div className="formcontainer">
        <h3>Search for your favorite theatre in LA</h3>
        <p className="text">save your favorites, book a ticket, and enjoy the show.</p>
        <form className="form" onSubmit={handleSubmit}>
            <button onChange={handleChange} type="text" name="theatre" value={theatre} type="submit">look for a theatre</button>
        </form>
        </div>
    )
}

export default Form;