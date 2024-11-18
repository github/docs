---
title: Troubleshooting search queries
intro: 'If you encounter unexpected results while searching on {% data variables.product.product_name %}, you can troubleshoot by reviewing common problems and limitations.'
redirect_from:
  - /articles/troubleshooting-search-queries
  - /github/searching-for-information-on-github/troubleshooting-search-queries
  - /github/searching-for-information-on-github/getting-started-with-searching-on-github/troubleshooting-search-queries
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - GitHub search
shortTitle: Troubleshoot search queries
---
## Potential timeouts

Some queries are computationally expensive for our search infrastructure to execute. To keep search fast for everyone, we limit how long any individual query can run. In rare situations when a query exceeds the time limit, search returns all matches that were found prior to the timeout and informs you that a timeout occurred.

Reaching a timeout does not necessarily mean that search results are incomplete. It just means that the query was discontinued before it searched through all possible data.

## Limitations on query length

There are some limits to the length of the queries when searching across {% data variables.product.product_name %}:

* Queries longer than 256 characters are not supported
* You can't construct a query using more than five `AND`, `OR`, or `NOT` operators

Specific search types, such as code search, might have additional limitations. Check the documentation for these search types for more information. {% ifversion code-search-upgrade %} For more information on code search limitations specifically, see "[AUTOTITLE](/search-github/github-code-search/about-github-code-search#limitations)."{% endif %}

## Further reading

* "[AUTOTITLE](/search-github/getting-started-with-searching-on-github/about-searching-on-github)"
