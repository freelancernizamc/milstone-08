import React from 'react';
import DeviceDetails from '../DeviceDetails/DeviceDetails';

const Device = (props) => {
    console.log(props)
    return (
        <div>
            <h3>I have a Device: {props.name}, Price: {props.price}</h3>
            <DeviceDetails></DeviceDetails>
        </div>
    );
};

export default Device;