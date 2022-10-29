import React, {useState, FunctionComponent} from 'react';
import {createListenerEntry} from "@reduxjs/toolkit/dist/listenerMiddleware";

export const Card: FunctionComponent<{ value: string }> = ({value}) => {
    const [isHidden, setIsHidden] = useState(true);

    const handleClick = () => setIsHidden(!isHidden);
    const buttonText = isHidden ? 'Show' : 'Hide'
    const cardText = isHidden ? '' : value;

    return (<div className={'card'}>
        <div>{cardText}</div>
        <button onClick={handleClick}>{buttonText}</button>
    </div>);
}
