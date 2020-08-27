import fs from 'fs'
import path from 'path'
import * as dotenv from '../../packages/dotenv/src'

const parsed = dotenv.parse(fs.readFileSync(path.join(__dirname, '../fixtures/.env'), { encoding: 'utf8' }))

describe('Dotenv parsing', () => {
  it('sets basic environment variable', () => {
    expect(parsed.BASIC).toBe('basic')
  })
  it('reads after a skipped line', () => {
    expect(parsed.AFTER_LINE).toBe('after_line')
  })
  it('defaults empty values to empty string', () => {
    expect(parsed.EMPTY).toBe('')
  })
  it('escapes single quoted values', () => {
    expect(parsed.SINGLE_QUOTES).toBe('single_quotes')
  })
})
