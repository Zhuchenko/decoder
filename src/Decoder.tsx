import React, {useEffect} from 'react';

import {Cards} from './Cards';
import {useDispatch} from "react-redux";
import {deckActions} from "./redux/deckSlice";
import {createNewDeck} from "./deck";

export const Decoder = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(deckActions.setUpNewDeck(createNewDeck()));
        dispatch(deckActions.openNextCard());
    }, [dispatch]);

    return (<div className="panel"><Cards/></div>);
}
