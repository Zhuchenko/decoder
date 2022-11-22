import React, {useState, FunctionComponent} from 'react';

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
