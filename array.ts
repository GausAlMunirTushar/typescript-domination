const numberArray: number[] = [1, 2, 3];

numberArray.forEach((number) => {
  console.log(number.toFixed(2));
});

const stringArray: string[] = numberArray.map((number) => number.toFixed(2));
