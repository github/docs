# Unified content rendering notes

## Annotated code blocks

The `annotate` plugin parses fenced code blocks whose info string includes `annotate`. It splits the rendered output into `.annotate-row` elements, with code in `.annotate-code` and rendered notes in `.annotate-note`.

Authoring rules:

- Include `annotate` in the info string.
- Include a language on the opening code fence.
- Start notes with the single-line comment marker for the fenced language: `#`, `//`, `<!--`, `%%`, or `--`.
- Match the comment marker style to the code fence language.
- Use single-line comments only. Multiline comment syntax is not supported.
- Put a space between the comment marker and annotation text.
- Leave text after the comment marker blank to create a blank annotation.
- Do not create a blank code block.
- Put Markdown after the comment marker. Inline Markdown is supported. Avoid block Markdown such as headings, blockquotes, horizontal rules, tables, lists, or code fences.
- Consecutive lines with the comment marker become one annotation.
- Empty lines and lines that contain only spaces are discarded.
- Start the code section with a single-line comment, or rendering throws.
- For HTML fences, add a line such as `<!-- -->` after the annotations to keep syntax highlighting.

`parse-info-string.ts` must run before `remark-rehype`, and `annotate` must run before `highlight`.

## Mermaid diagrams

The `mermaid` plugin renders fenced code blocks with the `mermaid` language to inline SVG with [Pele](https://pele.run). Pages need no client JavaScript, and diagrams follow the page color mode through the variables in `stylesheets/mermaid.scss`.

Authoring rules:

- Use a `mermaid` fence. To show Mermaid source without rendering it, nest the fence in a `text` fence.
- Add `accTitle:` and `accDescr:` lines, so screen readers get a title and description.
- Liquid runs first, so `{% data %}` and `{% ifversion %}` work inside diagrams. Escape hexagon nodes such as `A{{label}}` with `{% raw %}`, or Liquid treats them as output tags.
- Pele lays out diagrams to fit the 720px article column. Flowcharts too wide for the column switch to a vertical layout.
- Links and images inside diagrams do not render.
- Invalid diagrams render as code blocks, and the server logs a warning.

`mermaid` must run before `codeHeader` and `highlight`.
