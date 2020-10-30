---
title: Navigating code on GitHub
intro: 'You can understand the relationships within and across repositories by navigating code directly in {% data variables.product.product_name %}.'
redirect_from:
  - /articles/navigating-code-on-github
versions:
  free-pro-team: '*'
---

### About navigating code on {% data variables.product.prodname_dotcom %}

Navigating code functions use the open source library [`semantic`](https://github.com/github/semantic). The following languages are supported:
- CodeQL
- Go
- Java
- JavaScript
- PHP
- Python
- Ruby
- TypeScript

{% note %}

**Note**: Code navigation works for active branches. If the feature is enabled for you but you don't see links to the definitions of functions and methods, push to the branch and try again.

{% endnote %}

### Jumping to the definition of a function or method

You can jump to a function or method's definition within the same repository by clicking the function or method call in a file.

![Jump-to-definition tab](/assets/images/help/repository/jump-to-definition-tab.png)

### Finding all references of a function or method

You can find all references for a function or method within the same repository by clicking the function or method call in a file, then clicking the **References** tab.

![Find all references tab](/assets/images/help/repository/find-all-references-tab.png)

### 더 읽을거리
- "[Searching code](/github/searching-for-information-on-github/searching-code)"
