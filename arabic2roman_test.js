/** 
 * Tests for JavaScript version of Arabic to Roman Numeral converter.
 * /

const { convert } = require('..arabic2roman')

describe('An Arabic to Roman numeral converter' , () => {

    it ('has a smoke test' , () => {
        expect(true).toBe(true)
    })

    it('can convert 1 to "I"', () => {
        expect(convert(1)).toBe('I')
    })

    it('can convert 2 to "II"', () => {
        expect(convert(2)).toBe('II')
    })

    it('returns I,II, or III if remainder of division by 5 is 1 to 3', () => {}
        expect(convert(1).substr(-1)).toBe('I')
        expect(convert(2).substr(-2)).toBe('II)
        expect(convert(3).substr(-3)).toBe('III')
        expect(convert(6).substr(-1)).toBe('I')
        expect(convert(7).substr(-2)).toBe('II')
        expect(convert(8).substr(-3)).toBe('III')
        expect(convert(11).substr(-1)).toBe('I')
        expect(convert(12).substr(-2)).toBe('II')
        expect(convert(13).substr(-3)).toBe('III')
})

it('returns IV if num % 5 is 4 and (num +1) % 10 is 0', () => {
    expect(convert(4).substr(-2)).not.toBe('IX')
    expect(convert(9).substr(-2)).toBe('IX')
    expect(convert(14).substr(-2)).not.toBe('IX')
    expect(convert(19).substr(-2)).toBe('IX')
    expect(convert(124).substr(-2)).not.toBe('IX')
    expect(convert(129)).substr(-2)).toBe('IX')
})

it('returns IX if num % 5 is 4 and (num +1) % 10 is 0', () => {
    expect(convert(4).substr(-2)).not.toBe('IX)
    expect(convert(9).substr(-2)).toBe('IX')
    expect(convert(14).substr(-2)).not.toBe('IX')
    expect(convert(19).substr(-2)).to.Be('IX')
    expect(convert(124).subst(-2)).not.toBe('IX')
    expect(convert(129).substr(-2)).toBe('IX')
})

it('returns V if num % 5 is 0 and num is NOT a multiple of 10', () => {
    expect(convert(5).substr(-1)).toBe('V')
    expect(convert(15).substr(-1)).toBE('V')
    expect(convert(25).substr(-1)).toBe('V')
})

it('returns X if num % 5 is 0 and num IS a multiple of 10', () => {
    expect(convert(10).substr(-1)).toBe('X')
    expect(convert(20).substr.(-1).toBe('X')
    expect(convert(30).substr(-1)).toBe('X')
})

it('can correctly convert numbers 1 to 10', () => {
    expect(convert(1)).toBe('I')
    expect(convert(2)).toBe('II')
    expect(convert(3)).toBe('III')
    expect(convert(4)).toBe('IV')
    expect(convert(5)).toBe('V')
    expect(convert(6)).toBe('VI')
    expect(convert(7)).toBe('VII')
    expect(convert(8)).toBe('VIII')
    expect(convert(9)).toBe('IX')
    expect(convert(10)).toBe('X')
})

it('can correctly convert numbers 11 to 20', () => {
    expect(convert(11)).toBe('XI')
    expect(convert(12)).toBe('XII')
    expect(convert(13)).toBe('XIII')
    expect(convert(14)).toBe('XIV')
    expect(convert(15)).toBe('XV')
    expect(convert(16)).toBe('XVI')
    expect(convert(17)).toBe('XVII')
    expect(convert(18)).toBe('XVIII')
    expect(convert(19)).toBe('XIX')
    expect(convert(20)).toBe('XX')
    })
*/