import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export type DeckState = {
    deck: string[];
    revealedCards: string[];
    currentCard?: string;
    isFinished: boolean;
};

const initialState: DeckState = {
    deck: [],
    revealedCards: [],
    currentCard: undefined,
    isFinished: false,
};

export const deckSlice = createSlice({
    name: 'deck',
    initialState,
    reducers: {
        setUpNewDeck: (state, action: PayloadAction<string[]>) => {
            state.deck =  action.payload;
            state.revealedCards = [];
            state.isFinished =  false;
            state.currentCard =  undefined;
        },

        openNextCard: (state) => {
            if (state.isFinished) return;

            if (state.currentCard) state.revealedCards.push(state.currentCard);

            state.currentCard = state.deck.pop();

            if (!state.currentCard) {
                state.isFinished = true;
            }
        },
    }
});

export const deckActions = {...deckSlice.actions};
export const deckReducer = deckSlice.reducer;
