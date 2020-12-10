---
title: フィルターを共有する
intro: '一定の Issue およびプルリクエストをフィルタリングする場合、ブラウザの URL は、次の表示にマッチするように自動的に更新されます。'
redirect_from:
  - /articles/sharing-filters
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

Issue が生成した URL は、どのユーザにも送れます。そして、あなたが見ているフィルタビューと同じフィルタで表示できます。

たとえば、Hubot にアサインされた Issue でフィルタリングし、最も古いオープン Issue でソートした場合、あなたの URL は、次のように更新されます:

```
/issues?q=state:open+type:issue+assignee:hubot+sort:created-asc
```

### 参考リンク

* 「[Issue およびプルリクエストをフィルタリングする](/articles/filtering-issues-and-pull-requests)」
* [Issue およびプルリクエストのソート](/articles/sorting-issues-and-pull-requests)
* 「[検索を使用して Issue およびプルリクエストをフィルタリングする](/articles/using-search-to-filter-issues-and-pull-requests)」
