---
title: HTML comments
intro: Certain HTML comments should be deleted, some should be preserved
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
type: how_to
---

## Introduction

If you're looking at this page fully rendered in a browser, if you view
source of this page, you should not find a HTML comment in the HTML that
mentions the word `gooblygook`.

<!-- This comment should get deleted since it mentions gooblygook -->

  <!--

    Another multi-line
    HTML comments that also
    mentions the word `gooblygook`

   -->

```html
This is a <!-- html comment -->
```

You can use HTML comments inside the `<-- paragraph -->`

## Tables are OK too

| Comment | Effect |
| :-- | :-- |
| `<!-- markdownlint-disable -->` | Disable all rules |
| `<!-- markdownlint-enable -->` | Enable all rules |
