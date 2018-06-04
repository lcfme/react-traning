import React from 'react';
import HOComponent from './Hocomponent';

export default HOComponent(props => (
    <div>
        {props.value}
    </div>
));