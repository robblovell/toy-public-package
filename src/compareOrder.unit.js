"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var compareOrder_1 = require("./compareOrder");
describe('compareOrder', function () {
    var someFile1 = 'A.md';
    var someFile2 = 'b.md';
    var someNonFile1 = 'a';
    var someNonFile2 = 'B';
    test('Compares two files ', function () {
        expect(compareOrder_1.compareOrder(someFile1, someFile2)).toBe(-1);
        expect(compareOrder_1.compareOrder(someFile2, someFile1)).toBe(1);
        expect(compareOrder_1.compareOrder(someFile1, someFile1)).toBe(0);
    });
    test('Compares two directories ', function () {
        expect(compareOrder_1.compareOrder(someNonFile1, someNonFile2)).toBe(-1);
        expect(compareOrder_1.compareOrder(someNonFile2, someNonFile1)).toBe(1);
        expect(compareOrder_1.compareOrder(someNonFile1, someNonFile1)).toBe(0);
    });
});
