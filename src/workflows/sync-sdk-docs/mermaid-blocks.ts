// convert-mermaid.ts replaces these blocks with images, and escape-liquid.ts
// skips the same blocks, so both steps must agree on what a mermaid block is.
export const MERMAID_BLOCK = /```mermaid\n([\s\S]*?)```/g
