import {compareOrder} from './compareOrder'

describe('compareOrder', () => {

    const someFile1 = 'A.md'
    const someFile2 = 'b.md'
    const someNonFile1 = 'a'
    const someNonFile2 = 'B'
    test('Compares two files ', () => {
        expect(compareOrder(someFile1, someFile2)).toBe(-1)
        expect(compareOrder(someFile2, someFile1)).toBe(1)
        expect(compareOrder(someFile1, someFile1)).toBe(0)
    })

    test('Compares two directories ', () => {
        expect(compareOrder(someNonFile1, someNonFile2)).toBe(-1)
        expect(compareOrder(someNonFile2, someNonFile1)).toBe(1)
        expect(compareOrder(someNonFile1, someNonFile1)).toBe(0)

    })
})
