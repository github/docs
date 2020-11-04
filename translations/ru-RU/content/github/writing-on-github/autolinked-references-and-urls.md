---
title: Autolinked references and URLs
intro: 'References to URLs, issues, pull requests, and commits are automatically shortened and converted into links.'
redirect_from:
  - /articles/autolinked-references-and-urls
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### URLs

{% data variables.product.product_name %} automatically creates links from standard URLs.

`Visit https://github.com`

![Rendered autolinked URL](/assets/images/help/writing/url-autolink-rendered.png)

For more information on creating links, see "[Basic writing and formatting syntax](/articles/basic-writing-and-formatting-syntax/#links)."

### Issues and pull requests

Within conversations on {% data variables.product.product_name %}, references to issues and pull requests are automatically converted to shortened links. For more information, see "[About conversations on {% data variables.product.prodname_dotcom %}](/articles/about-conversations-on-github)."

{% note %}

**Note:** Autolinked references are not created in wikis or files in a repository.

{% endnote %}

| Reference type                                                   | Raw reference                                  | Short link                                                             |
| ---------------------------------------------------------------- | ---------------------------------------------- | ---------------------------------------------------------------------- |
| Issue or pull request URL                                        | https://github.com/jlord/sheetsee.js/issues/26 | [#26](https://github.com/jlord/sheetsee.js/issues/26)                  |
| `#` and issue or pull request number                             | #26                                            | [#26](https://github.com/jlord/sheetsee.js/issues/26)                  |
| `GH-` and issue or pull request number                           | GH-26                                          | [GH-26](https://github.com/jlord/sheetsee.js/issues/26)                |
| `Username/Repository#` and issue or pull request number          | jlord/sheetsee.js#26                           | [jlord/sheetsee.js#26](https://github.com/jlord/sheetsee.js/issues/26) |
| `Organization_name/Repository#` and issue or pull request number | github/linguist#4039                           | [github/linguist#4039](https://github.com/github/linguist/pull/4039)   |

### Commit SHAs

References to a commit's SHA hash are automatically converted into shortened links to the commit on {% data variables.product.product_name %}.

| Reference type          | Raw reference                                                                        | Short link                                                                                                        |
| ----------------------- | ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| Commit URL              | https://github.com/jlord/sheetsee.js/commit/a5c3785ed8d6a35868bc169f07e40e889087fd2e | [a5c3785](https://github.com/jlord/sheetsee.js/commit/a5c3785ed8d6a35868bc169f07e40e889087fd2e)                   |
| SHA                     | a5c3785ed8d6a35868bc169f07e40e889087fd2e                                             | [a5c3785](https://github.com/jlord/sheetsee.js/commit/a5c3785ed8d6a35868bc169f07e40e889087fd2e)                   |
| User@SHA                | jlord@a5c3785ed8d6a35868bc169f07e40e889087fd2e                                       | [jlord@a5c3785](https://github.com/jlord/sheetsee.js/commit/a5c3785ed8d6a35868bc169f07e40e889087fd2e)             |
| Username/Repository@SHA | jlord/sheetsee.js@a5c3785ed8d6a35868bc169f07e40e889087fd2e                           | [jlord/sheetsee.js@a5c3785](https://github.com/jlord/sheetsee.js/commit/a5c3785ed8d6a35868bc169f07e40e889087fd2e) |

### Custom autolinks to external resources

{% data reusables.repositories.autolink-references %}

### Дополнительная литература

- "[Basic writing and formatting syntax](/articles/basic-writing-and-formatting-syntax)"
