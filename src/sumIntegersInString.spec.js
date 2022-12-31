import { sumOfIntegersInString } from "./sumIntegersInString";

describe('Sum Integers in String code kata', () => {
  test('should works with a short string', () => {
    const value = 'h3ll0w0rld1';
    const expectedResult = 4
    const resp = sumOfIntegersInString(value);
    expect(resp).toEqual(expectedResult);
  });
  test('should works with a long string', () => {
    const value = 'The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog';
    const expectedResult = 3635
    const resp = sumOfIntegersInString(value);
    expect(resp).toEqual(expectedResult);
  });
  test('should works only with numbers', () => {
    const value = '5699';
    const expectedResult = 5699
    const resp = sumOfIntegersInString(value);
    expect(resp).toEqual(expectedResult);
  })
  test('should works only with letters', () => {
    const value = 'qwerty';
    const expectedResult = 0
    const resp = sumOfIntegersInString(value);
    expect(resp).toEqual(expectedResult);
  });
  test('should works without characters', () => {
    const value = '';
    const expectedResult = 0
    const resp = sumOfIntegersInString(value);
    expect(resp).toEqual(expectedResult);
  });
});
