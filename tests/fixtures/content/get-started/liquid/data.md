---
title: Data Liquid tag
intro: The `data` Liquid tag can understand where it was used
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
---

## Introduction

What this fixture accomplishes is that it uses the `\{\% data %}` Liquid
tag to inject itself after some left-side whitespace. That same amount
of left-side whitespace is then "replicated" to all lines of the string
that gets injected.

In this example, the

1. Bullet point

   {% data reusables.injectables.multiple_numbers %}

1. Another bullet point

   After 3 spaces, here's the "body" of the second bullet point.

## Injected insode a code block

1. Here's some Yaml code.

   ```yaml copy
   {% data reusables.injectables.multiple_numbers %}

   {% data reusables.injectables.one_line_numbers %}

   name: Move assigned card
   on:
     issues:
       types:
         - assigned
   ```

## Injected without any leading whitespace

On its own line:

{% data reusables.injectables.multiple_numbers %}

Directly after this: {% data reusables.injectables.multiple_numbers %}

And now for a table on its own starting line

{% data reusables.injectables.some_table %}

## Insert the same table inside a bullet point

1. Point 1

   {% data reusables.injectables.paragraphs %}

1. Point 2

   What's important here is that in CommonMark when a Markdown table
   is injected and indented into a bullet point, that it works at all.

   {% data reusables.injectables.some_table %}
