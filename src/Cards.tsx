import React, {useEffect,} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {createNewDeck} from "./deck";
import {Card} from "./Card";
import * as deckSelectors from './redux/selectors';
import {deckActions} from './redux/deckSlice';

export const Cards = () => {
    const currentCard = useSelector(deckSelectors.getCurrentCard);
    const revealedCards = useSelector(deckSelectors.getRevealedCards);
    const isFinished = useSelector(deckSelectors.getIsFinished);

    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(deckActions.openNextCard());
    }

    return (
        <div className="cards">
            {isFinished ?
                <div>finished</div> :
                <>
                    {currentCard && <Card value={currentCard}/>}
                    <button onClick={handleClick}>Next</button>
                </>
            }
            <div className="card-list">
                {revealedCards.map(card =>
                    <div className="card-in-list">{card}</div>)
                }
            </div>
        </div>
    );
}
