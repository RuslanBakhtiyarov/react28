import { createArray } from "../utils/array";


const MAX_MATRIX_LENGHT = 10;

const createEmptyBattlefield = () =>
    createArray(MAX_MATRIX_LENGHT, () =>
    createArray(MAX_MATRIX_LENGHT, () => 0));

const createBattlefield = () => {
    const emptyBattlefield = createBattlefield();
}


export const useGameState = () => {
    const turn = 0;
    const reset = () => console.log('');
    const matrix = createEmptyBattlefield();
    
    return {turn, reset, matrix};
}