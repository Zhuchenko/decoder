import {DeckState} from './deckSlice';

export const getRevealedCards = (state: DeckState) => state.revealedCards;
export const getCurrentCard = (state: DeckState) => state.currentCard;
export const getIsFinished = (state: DeckState) => state.isFinished;