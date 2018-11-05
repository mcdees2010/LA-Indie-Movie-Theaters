import React from 'react';

const Form = ({handleChange, theatre, handleSubmit}) => {
    return(
        <div className="containter">
        <form onSubmit={handleSubmit}>
            <button onChange={handleChange} type="text" name="theatre" value={theatre} type="submit">look for a theatre</button>
        </form>
        </div>
    )
}

export default Form;