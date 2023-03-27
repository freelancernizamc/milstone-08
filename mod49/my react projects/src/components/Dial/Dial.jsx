import React from 'react';

const Dial = (props) => {
    return (
        <div style={{ border: '2px solid purple', margin: '20px' }}>
            <h3>This is Dial component</h3>
            <p> Your steps count: {props.steps}</p>
        </div>
    );
};

export default Dial;