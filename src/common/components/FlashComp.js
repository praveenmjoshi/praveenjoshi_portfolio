import React from 'react';

const Flash = ({visibility, message, type}) => {
    console.log('flash', visibility)
    return (
        visibility && <div className={`alert alert-${type}`}>
                <p>{message}</p>
            </div>
    )
}

export default Flash;