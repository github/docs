---
title: Whitespace
intro: Demonstrates use of `-` in Liquid tags
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
---

## Paragraphs

Text above.

{% data variables.product.product_name %}

Test below.

## Paragraph

Text before. {% data variables.product.product_name %} Text after.

Cram{% ifversion fpt %}FPT{% endif %}ped.

## List

- One
- {% data variables.product.product_name %}
- Three
