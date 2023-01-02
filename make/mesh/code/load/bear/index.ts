import { Link, LinkHint, code } from '~'
import type { MeshInputType } from '~'

export function process_codeCard_load_bear(
  input: MeshInputType,
): void {
  code
    .assumeLinkType(input, Link.Tree)
    .nest.forEach((nest, index) => {
      process_codeCard_load_bear_nestedChildren(
        code.extendWithNestScope(input, {
          index,
          nest,
        }),
      )
    })
}

export function process_codeCard_load_bear_nestedChildren(
  input: MeshInputType,
): void {
  const type = code.determineNestType(input)
  switch (type) {
    case LinkHint.StaticText:
      break
    default:
      code.throwError(
        code.generateUnhandledTermCaseError(input),
      )
  }
}
