import { ParserNestNodeType } from '~parse'

export function getCodeAsNumber(
  nest: ParserNestNodeType,
): number {
  let line = nest.line[0]

  if (line && line.like === 'code') {
    let type = line.base
    let rest = line.code

    switch (type) {
      case 'b':
        return parseInt(rest, 2)
      case 'x':
        return parseInt(rest, 16)
      case 'o':
        return parseInt(rest, 8)
      case 'h':
        return parseInt(rest, 16)
      default:
        throw new Error(line.code)
    }
  } else {
    throw new Error('Oops')
  }
}
