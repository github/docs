---
title: フォーク内を検索する
intro: 'By default, [forks](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks) are not shown in search results. リポジトリの検索にフォークを含めることができます。一定の要件を満たす場合は、コードの検索でもできます。'
redirect_from:
  - /articles/searching-in-forks
  - /github/searching-for-information-on-github/searching-in-forks
  - /github/searching-for-information-on-github/searching-on-github/searching-in-forks
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub search
---

[リポジトリの検索](/search-github/searching-on-github/searching-for-repositories)結果でフォークを表示するには、クエリに `fork:true` または `fork:only` を追加します。

フォークは、親リポジトリより Star が多い場合に限り、[コード検索](/search-github/searching-on-github/searching-code)用にインデックスされます。 親より Star が少ないフォークのコードは検索できません。 コード検索結果で親リポジトリより Star の多いフォークを表示するには、クエリに `fork:true` または `fork:only` を追加します。

`fork:true` 修飾子は、フォークを含む、検索クエリにマッチする全ての結果を表示できます。 `fork:only` 修飾子は、検索クエリにマッチするフォークだけを表示できます。__

| 修飾子         | サンプル                                                                                                                                                                          |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `fork:true` | [**github fork:true**](https://github.com/search?q=github+fork%3Atrue&type=Repositories) は、フォークを含め、「github」という単語を含む全てのリポジトリにマッチします。                                           |
|             | [**android language:java fork:true**](https://github.com/search?q=android+language%3Ajava+fork%3Atrue&type=Code) は、フォークおよびリポジトリの両方にある Java で記述された「android」という単語があるコードにマッチします。 |
| `fork:only` | [**github fork:only**](https://github.com/search?q=github+fork%3Aonly&type=Repositories) は、「github」という単語を含むすべてのフォークリポジトリにマッチします。                                              |
|             | [**forks:>500 fork:only**](https://github.com/search?q=forks%3A%3E500+fork%3Aonly&type=Repositories) は、フォークが 500 超の、フォークであるリポジトリのみを表示します。                                     |

## 参考リンク

- 「[フォークについて](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks)」
- "[GitHub での検索について](/search-github/getting-started-with-searching-on-github/about-searching-on-github)"
