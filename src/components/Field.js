import React from "react";

const Field = props => {

    const {id, labelName, type, name, placeholder, value, onChange, error} = props;

    return (
        <div className="form-group">
            <label htmlFor={id}>{labelName}</label>
            <input
                id={id}
                type={type}
                className="form-control"
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
            {error ? <span className="invalid-feedback">{error}</span> : null}
        </div>
    )
};

export default Field;