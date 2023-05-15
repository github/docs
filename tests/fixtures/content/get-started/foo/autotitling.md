---
title: Autotitling
intro: Internal links that use AUTOTITLE should just work
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
---

## Introduction

Links that use the word `AUTOTITLE` in the Markdown become the
title of the document it links to.

For example "[AUTOTITLE](/get-started/quickstart/hello-world)."

It should also work if the URL as a query string, like this:
[AUTOTITLE](/get-started/quickstart/hello-world?tool=linux)

Equally, if the link has a hash on it:
[AUTOTITLE](/get-started/quickstart/hello-world#this-hash)

Or, a combination of query string and hash:
[AUTOTITLE](/get-started/quickstart/hello-world?tool=linux#this-hash)
