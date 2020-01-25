import romanNumeralsDecimal from './RomanToDecimal'

// convert roman numerals to decimal
test('convert roman numerals to decimal', () => {
  expect(romanNumeralsDecimal("IV")).toBe(4);
});

test('convert roman numerals to decimal', () => {
  expect(romanNumeralsDecimal("V")).toBe(5);
});

test('convert roman numerals to decimal', () => {
  expect(romanNumeralsDecimal("VIII")).toBe(8);
});

test('convert roman numerals to decimal', () => {
  expect(romanNumeralsDecimal("IX")).toBe(9);
});

test('convert roman numerals to decimal', () => {
  expect(romanNumeralsDecimal("XII")).toBe(12);
});

test('convert roman numerals to decimal', () => {
  expect(romanNumeralsDecimal("XXII")).toBe(22);
});

test('convert roman numerals to decimal', () => {
  expect(romanNumeralsDecimal("XXIV")).toBe(24);
});

test('convert roman numerals to decimal', () => {
  expect(romanNumeralsDecimal("CD")).toBe(400);
});

test('convert roman numerals to decimal', () => {
  expect(romanNumeralsDecimal("XXIIII")).toBe("wrong roman numerals");
});

test('convert roman numerals to decimal', () => {
  expect(romanNumeralsDecimal("VIV")).toBe("wrong roman numerals");
});