import { game } from "./oddEvenPrime";

describe('Odd Even Prime code kata', () => {
  test('should works when num1 < num2', () => {
    const num1 = '1';
    const num2 = '2'
    const expectedResult = 'Odd2'
    const resp = game(num1, num2);
    expect(resp).toEqual(expectedResult);
  });
  test('should works when num1 > num2', () => {
    const num1 = '2';
    const num2 = '1'
    const expectedResult = '2Odd'
    const resp = game(num1, num2);
    expect(resp).toEqual(expectedResult);
  });
  test('should works when num1 and num2 are blanks or words', () => {
    const num1 = '';
    const num2 = 'aaa'
    const expectedResult = ''
    const resp = game(num1, num2);
    expect(resp).toEqual(expectedResult);
  });
});
