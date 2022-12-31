import { sumOfIntegersInString } from "./sumIntegersInString";

describe('Sum Integers in String code kata', () => {
  test('should works', () => {
    const value = 'h3ll0w0rld1';
    const expectedResult = 4
    const resp = sumOfIntegersInString(value);
    expect(resp).toEqual(expectedResult);
  });
  test('should works', () => {
    const value = 'The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog';
    const expectedResult = 3635
    const resp = sumOfIntegersInString(value);
    expect(resp).toEqual(expectedResult);
  });
  test('should works', () => {
    const value = '5699';
    const expectedResult = 5699
    const resp = sumOfIntegersInString(value);
    expect(resp).toEqual(expectedResult);
  })
  test('should works', () => {
    const value = 'qwerty';
    const expectedResult = 0
    const resp = sumOfIntegersInString(value);
    expect(resp).toEqual(expectedResult);
  });
  test('should works', () => {
    const value = '';
    const expectedResult = 0
    const resp = sumOfIntegersInString(value);
    expect(resp).toEqual(expectedResult);
  });
});
