---
title: Table with ifversions
intro: Liquid if ステートメントを使用して Markdown テーブル内の特定の行を非表示にするページを示します。
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
---

## Intro

Here's an inline mention of {% data variables.product.product_name %} in Liquid.

## Table

What's important here is that in our automated translation system,
sometimes the trailing linebreak after the `%}` or `-%}` gets lost.
So this Markdown below is hand-crafted to look exactly like what happens
sometimes in our translations.

Having this fixture, albeit a bit corrupt and wrong, allows us to be
certain that our string manipulation code can do magic and fix this
so the Liquid statements have matching linebreaks compared to the English
version.

| Key | Value |
|---|---|
{% ifversion ghes -%} | GHES | Present | {%- endif -%} {%- ifversion not ghes -%} | GHES | Not | {% endif %}
