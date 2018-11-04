import React from 'react';

export default ({ handleChange, handleSubmit, name, email }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className="field">
                <label className="label">Name:</label>
                <div className="control">
                    <input 
                        className="input" 
                        name="name" 
                        type="text" 
                        placeholder="your name"
                        onChange={handleChange} 
                        value={name}/>
                </div>
            </div>
            <div className="field">
                <label className="label">Email:</label>
                <div className="control">
                    <input 
                        className="input" 
                        name="email" 
                        type="text" 
                        placeholder="cat@dog.com" 
                        onChange={handleChange}
                        value={email}/>
                </div>
                <div className="control">
                    <button className="button is-primary">Submit</button>
                </div>
            </div>
        </form>
    )
}