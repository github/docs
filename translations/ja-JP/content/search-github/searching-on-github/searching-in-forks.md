---
title: フォーク内を検索する
intro: '既定では、[フォーク](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks)は検索結果に表示されません。 リポジトリの検索にフォークを含めることができます。一定の要件を満たす場合は、コードの検索でもできます。'
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
ms.openlocfilehash: 6375fdecd7dba47447b37207467e008f0e7b3fc0
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/09/2022
ms.locfileid: '147785791'
---
[リポジトリ検索](/search-github/searching-on-github/searching-for-repositories)結果にフォークを表示するには、クエリに `fork:true` または `fork:only` を追加します。

フォークは、親リポジトリよりも Star が多い場合にのみ、[コード検索](/search-github/searching-on-github/searching-code)のためのインデックスが作成されます。 親より Star が少ないフォークのコードは検索できません。 コード検索結果に親リポジトリよりも Star が多いフォークを表示するには、クエリに `fork:true` または `fork:only` を追加します。

`fork:true` 修飾子を使うと、フォークを含む、検索クエリに一致する結果をすべて検索できます。 `fork:only` 修飾子を使うと、検索クエリに一致するフォーク _のみ_ が検索されます。

| 修飾子  | 例
| ------------- | -------------
| `fork:true` | [**github fork:true**](https://github.com/search?q=github+fork%3Atrue&type=Repositories) は、フォークを含む、"github" という単語を含むすべてのリポジトリと一致します。
| | [**android language:java fork:true**](https://github.com/search?q=android+language%3Ajava+fork%3Atrue&type=Code) は、フォークと通常のリポジトリの両方で、Java で記述された "android" という単語を含むコードに一致します。
| `fork:only` | [**github fork:only**](https://github.com/search?q=github+fork%3Aonly&type=Repositories) は、"github" という単語を含むすべてのフォーク リポジトリと一致します。
| | [**forks:>500 fork:only**](https://github.com/search?q=forks%3A%3E500+fork%3Aonly&type=Repositories) は、フォークが 500 個を超えるリポジトリに一致し、フォークであるリポジトリのみを返します。

## 参考資料

- 「[フォークについて](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks)」
- 「[GitHub での検索について](/search-github/getting-started-with-searching-on-github/about-searching-on-github)」
