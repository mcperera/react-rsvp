import React from 'react';
import PropTypes from 'prop-types';

const GuestName = (props) => {
    if(props.isEditing){
        return(
            <input 
                type="text" 
                value={props.children} 
                onChange={props.handleNameEdits}
            />
        );
    }else{
        return (
            <span>{props.children}</span>
        )
    }
};

GuestName.prototype = {
    isEditing: PropTypes.bool.isRequired,
    handleNameEdits: PropTypes.func.isRequired
};

export default GuestName;