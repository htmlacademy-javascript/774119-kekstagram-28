const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const createRandomIdFromRangeGenerator = (min, max) => {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      console.error(`Перебраны все числа из диапазона от ${ min } до ${ max}`);
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};

const getRandomArrayElements = (elements, numberElements) => {
  const idOfElements = createRandomIdFromRangeGenerator(0, elements.length - 1);
  const newElements = [];
  for (let i = 0; i < numberElements; i++) {
    newElements.push(elements[idOfElements()]);
  }
  return newElements.join(' ');
};

export {getRandomInteger, createRandomIdFromRangeGenerator, getRandomArrayElements};
