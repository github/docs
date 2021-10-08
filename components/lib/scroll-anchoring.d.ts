declare module 'scroll-anchoring' {
  export function findAnchorNode(document: Document): Node | undefined
  export function preserveAnchorNodePosition<T>(
    document: Document,
    callback: () => Promise<T> | T
  ): Promise<T>
  export function preservePosition<T>(anchorNode: Node, callback: () => Promise<T> | T): Promise<T>
}
