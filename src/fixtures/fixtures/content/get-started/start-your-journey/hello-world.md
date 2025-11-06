---
title: Hello World
intro: 'Follow this Hello World exercise to get started with {% data variables.product.product_name %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
type: quick_start
topics:
  - Pull requests
  - Fundamentals
---

## Introduction

This is just a test.

{% ifversion volvo %}
Ove loves Volvos.
{% else %}
Apparently, a Saab it is.
{% endif %}

Try changing the current version from "Free, Pro, & Team" to something
like "Enterprise Server X.Y". It should change the above sentence.

## Link to a page with variable title

[AUTOTITLE](/get-started/start-your-journey/dynamic-title)

[AUTOTITLE](/get-started/foo/cross-version-linking)

## Use of a reusable that might have auto-title links

{% data reusables.gated-features.more-info %}

## Octicons for testing

This section tests octicon rendering with auto-generated aria-labels.

Here's a check icon without aria-label: {% octicon "check" %}

Here's a git-branch icon without aria-label: {% octicon "git-branch" %}

Here's a check icon with custom aria-label: {% octicon "check" aria-label="Supported" %}

Here's an x icon with custom aria-label: {% octicon "x" aria-label="Not supported" %}

Here's a rocket icon with width attribute: {% octicon "rocket" width="32" %}
