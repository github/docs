---
title: Organizing information with tables
intro: 'You can build tables to organize information in comments, issues, pull requests, and wikis.'
redirect_from:
  - /articles/organizing-information-with-tables
  - /github/writing-on-github/organizing-information-with-tables
  - /github/writing-on-github/working-with-advanced-formatting/organizing-information-with-tables
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Organized data with tables
---
## Creating a table

You can create tables with pipes `|` and hyphens `-`. Hyphens are used to create each column's header, while pipes separate each column. You must include a blank line before your table in order for it to correctly render.

```markdown

| First Header  | Second Header |
| ------------- | ------------- |
| Content Cell  | Content Cell  |
| Content Cell  | Content Cell  |
```

![Screenshot of a Markdown table with two columns of equal width as rendered on {% data variables.product.prodname_dotcom %}. Headers render in boldface, and alternate content rows have gray shading.](/assets/images/help/writing/table-basic-rendered.png)

The pipes on either end of the table are optional.

Cells can vary in width and do not need to be perfectly aligned within columns. There must be at least three hyphens in each column of the header row.

```markdown
| Command | Description |
| --- | --- |
| git status | List all new or modified files |
| git diff | Show file differences that haven't been staged |
```

![Screenshot of a Markdown table with two columns of differing width as rendered on {% data variables.product.prodname_dotcom %}. Rows list the commands "git status" and "git diff" and their descriptions.](/assets/images/help/writing/table-varied-columns-rendered.png)

{% data reusables.user-settings.enabling-fixed-width-fonts %}

## Formatting content within your table

You can use [formatting](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) such as links, inline code blocks, and text styling within your table:

```markdown
| Command | Description |
| --- | --- |
| `git status` | List all *new or modified* files |
| `git diff` | Show file differences that **haven't been** staged |
```

![Screenshot of a Markdown table with two columns of differing width as rendered on {% data variables.product.prodname_dotcom %}. The commands "git status" and "git diff" are formatting as code blocks.](/assets/images/help/writing/table-inline-formatting-rendered.png)

You can align text to the left, right, or center of a column by including colons `:` to the left, right, or on both sides of the hyphens within the header row.

```markdown
| Left-aligned | Center-aligned | Right-aligned |
| :---         |     :---:      |          ---: |
| git status   | git status     | git status    |
| git diff     | git diff       | git diff      |
```

![Screenshot of a Markdown table with three columns as rendered on {% data variables.product.prodname_dotcom %}, showing how text within cells can be set to align left, center, or right.](/assets/images/help/writing/table-aligned-text-rendered.png)

To include a pipe `|` as content within your cell, use a `\` before the pipe:

```markdown
| Name     | Character |
| ---      | ---       |
| Backtick | `         |
| Pipe     | \|        |
```

![Screenshot of a Markdown table as rendered on {% data variables.product.prodname_dotcom %} showing how pipes, which normally close cells, can display inside cells when prefaced by a backslash.](/assets/images/help/writing/table-escaped-character-rendered.png)

## Further reading

- [{% data variables.product.prodname_dotcom %} Flavored Markdown Spec](https://github.github.com/gfm/)
- "[AUTOTITLE](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)"
