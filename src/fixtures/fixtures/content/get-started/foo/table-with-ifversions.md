---
title: Table with ifversions
intro: Demonstrates a page that uses Liquid if statements to hide certain rows in a Markdown table
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
---

## Intro

Here's an inline mention of {% data variables.product.product_name %} in Liquid.

## Table

| Key | Value |
|---|---|
| {% ifversion ghes %} |
| GHES | Present |
| {% endif %} |
| {% ifversion not ghes %} |
| GHES | Not |
| {% endif %} |
