---
title: 搜索精确匹配的代码
intro: '您可以在 {% data variables.product.prodname_dotcom %} 上搜索仓库中精确匹配的代码。'
redirect_from:
  - /github/searching-for-information-on-github/searching-files-in-a-repository-for-exact-matches
permissions: People with read permissions to a repository can search the repository's files for exact matches.
versions:
  free-pro-team: '*'
---

{% note %}

{% data reusables.search.exact-match-beta %}要申请访问测试版，请[加入等待列表](https://github.com/features/code-search-exact-match/signup)。

{% endnote %}

### 关于搜索精确匹配的代码

{% data reusables.search.exact-match %}

默认情况下，搜索精确匹配项区分大小写和符号，不包括部分匹配或规范化语法。 例如，搜索 `let ReactDOM*` 只会返回 `let ReactDOM*`。

### 搜索精确匹配的代码

{% note %}

对于测试版，在仓库中搜索精确匹配的文件只支持编制了索引的仓库。

{% endnote %}

{% data reusables.repositories.navigate-to-repo %}
2. In the search field, type the string you'd like to find. ![Exact match search string](/assets/images/help/search/exact-match-search-string.png)
3. Optionally, click the **Options** drop-down to narrow your search. ![Exact match search Options drop-down](/assets/images/help/search/exact-match-options.png)
4. Press <kbd>Enter</kbd> or <kbd>Return</kbd> on your keyboard.
5. 在结果列表中，单击文件。

### 延伸阅读

- “[搜索代码](/github/searching-for-information-on-github/searching-code)”
- "[在 {% data variables.product.product_name %} 上导航代码](/github/managing-files-in-a-repository/navigating-code-on-github)"
