const shuffleArray = (array: string[]) => array.sort(() => Math.random() - 0.5);

const POSITIONS = ["1", "2", "3", "4"];

const getStartArray = () => {
    const result = [];

    for (let i = 0; i < POSITIONS.length; i++) {
        for (let j = 0; j < POSITIONS.length; j++) {
            for (let k = 0; k < POSITIONS.length; k++) {
                if (i === j || i === k || j === k) continue;
                result.push(POSITIONS[i] + POSITIONS[j] + POSITIONS[k]);
            }
        }
    }

    return result;
}

export function createNewDeck() {
    return shuffleArray(getStartArray());
}