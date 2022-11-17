import { checkStrength, scorePassword } from '@/logic'
import { risky, guessable, weak, safe, secure } from '../password-examples'

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

  it('custom length config', () => {
    expect(checkStrength(secure, {lvl1: 8, lvl2: 10, lvl3: 12, lvl4: 15})).toBe('safe')
  })
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

  it('custom length config', () => {
    expect(scorePassword(secure, {lvl1: 8, lvl2: 10, lvl3: 12, lvl4: 15})).toBe(3)
  })
})
