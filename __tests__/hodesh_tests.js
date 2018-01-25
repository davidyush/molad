import * as hodesh from '../hodoshim'

describe('days between rosh ashonas', () => {
  it('should return correct days', () => {
    expect(hodesh.daysBetweenRoshAshonas(5,5)).toEqual(6);
    expect(hodesh.daysBetweenRoshAshonas(2,7)).toEqual(4);
    expect(hodesh.daysBetweenRoshAshonas(5,2)).toEqual(3);
  });
});
