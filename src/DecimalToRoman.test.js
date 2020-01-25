import decimalRoman from './DecimalToRoman'

// convert decimal to roman numerals
test('convert decimal to roman numerals', () => {
    expect(decimalRoman(5)).toBe("V");
});

test('convert decimal to roman numerals', () => {
    expect(decimalRoman(12)).toBe("XII");
});

test('convert decimal to roman numerals', () => {
    expect(decimalRoman(67)).toBe("LXVII");
});

test('convert decimal to roman numerals', () => {
    expect(decimalRoman(324)).toBe("CCCXXIV");
});

test('convert decimal to roman numerals', () => {
    expect(decimalRoman(372)).toBe("CCCLXXII");
});

test('convert decimal to roman numerals', () => {
    expect(decimalRoman(665)).toBe("DCLXV");
});

test('convert decimal to roman numerals', () => {
    expect(decimalRoman(2345)).toBe("MMCCCXLV");
});
