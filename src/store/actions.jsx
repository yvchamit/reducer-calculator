export const APPLY_NUMBER = 'APPLY_NUMBER';
export const CHANGE_OPERATION = 'CHANGE_OPERATION';
export const CLEAR_DISPLAY = 'CLEAR_DISPLAY';
export const EQUAL_NUMBERS = 'EQUAL_NUMBERS';
export const MEMORY_ADD = 'MEMORY_ADD';
export const MEMORY_CLEAR = 'MEMORY_CLEAR';
export const MEMORY_RECALL = 'MEMORY_RECALL';

export const applyNumber = (number) => {
  return { type: APPLY_NUMBER, payload: Number(number) };
};

export const changeOperation = (operation) => {
  return { type: CHANGE_OPERATION, payload: operation };
};

export const clearDisplay = () => {
  return { type: CLEAR_DISPLAY };
};

export const equalNumbers = () => {
  return { type: EQUAL_NUMBERS };
};

export const memoryAdd = () => {
  return { type: MEMORY_ADD };
};
export const memoryClear = () => {
  return { type: MEMORY_CLEAR };
};
export const memoryRecall = () => {
  return { type: MEMORY_RECALL };
};
