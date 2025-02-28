---
title: Replace domain
intro: This demonstrates code snippets that have host names that can be replaced.
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
type: how_to
---

## Overview

If you have an article with code snippets that have the `replacedomain`
annotation on its code fence, that means the page *might* take the current
user's cookie (indicating their personal hostname) and replace that within
the code snippet.

## Shell code snippet (on)

```sh replacedomain
curl https://HOSTNAME/api/v1
```

## Shell code snippet (off)

```sh
curl https://HOSTNAME/api/v2
```

## JavaScript code snippet (on)

```js replacedomain
await fetch("https://HOSTNAME/api/v1")
```

## JavaScript code snippet (off)

```js
await fetch("https://HOSTNAME/api/v2")
```

## Not always there

In this next code snippet, the `HOSTNAME` only appears if the current
version is `ghes`. That should be fine.

```text replacedomain copy
ssh handle@{% ifversion ghes %}HOSTNAME{% else %}github.com{% endif %}
```
