import { checkStrength, scorePassword } from '@/logic'
import { risky, guessable, weak, safe, secure, common } from '../password-examples'
import {describe, it, expect} from 'vitest'

describe('checkStrength', () => {
  it('return risky', () => {
    expect(checkStrength(risky)).toBe('risky')
  })

  it('return guessable', () => {
    expect(checkStrength(guessable)).toBe('guessable')
  })

  it('return weak', () => {
    expect(checkStrength(weak)).toBe('weak')
  })

  it('return safe', () => {
    expect(checkStrength(safe)).toBe('safe')
  })

  it('return secure', () => {
    expect(checkStrength(secure)).toBe('secure')
  })

  it('return risky common', () => {
    expect(checkStrength(common)).toBe('risky')
  })

  it('return risky empty', () => {
    expect(checkStrength('')).toBe('risky')
  });

})

describe('scorePassword', () => {
  it('return risky = 0', () => {
    expect(scorePassword(risky)).toBe(0)
  })

  it('return guessable = 1', () => {
    expect(scorePassword(guessable)).toBe(1)
  })

  it('return weak = 2', () => {
    expect(scorePassword(weak)).toBe(2)
  })

  it('return safe = 3', () => {
    expect(scorePassword(safe)).toBe(3)
  })

  it('return secure = 4', () => {
    expect(scorePassword(secure)).toBe(4)
  })

  it('return risky common = 0', () => {
    expect(scorePassword(common)).toBe(0)
  })

  it('return risky empty = 0', () => {
    expect(scorePassword('')).toBe(0)
  })

  it('returns 0 for length 4', () => {
    expect(scorePassword('ab1!')).toBe(0)
  })

  it('returns 0 for length 5', () => {
    expect(scorePassword('abcde')).toBe(0)
  })

  it('returns 0 for length 8', () => {
    expect(scorePassword('abcdefgh')).toBe(0)
  })

  it('returns 1 for length 9', () => {
    expect(scorePassword('abcdefghi')).toBe(1)
  })

  it('returns 1 for length 12', () => {
    expect(scorePassword('abcdefghijkl')).toBe(1)
  })

  it('returns 2 for length 13', () => {
    expect(scorePassword('abcdefghijklm')).toBe(2)
  })

  it('returns 2 for length 20', () => {
    expect(scorePassword('abcdefghijklmnopqrst')).toBe(2)
  })

  it('returns 3 for length 21', () => {
    expect(scorePassword('abcdefghijklmnopqrstu')).toBe(3)
  })

  it('keeps length score at 1 for length 13 when repeated chars are present', () => {
    expect(scorePassword('aaaaaabcdefgh')).toBe(1)
  })

  it('keeps length score at 1 for length 21 when repeated chars are present', () => {
    expect(scorePassword('aaaaaabcdefghijklmnop')).toBe(1)
  })
})
