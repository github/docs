---
title: GitHub 用語集
intro: 'この用語集では、一般的な Git と {% data variables.product.prodname_dotcom %} の用語が紹介されています。'
redirect_from:
  - /articles/github-glossary
  - /github/getting-started-with-github/github-glossary
  - /github/getting-started-with-github/quickstart/github-glossary
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: e7c6be7286d1221970c9e4e50b477fb82b4d3652
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '145125869'
---
{% for term in site.data.glossaries.external %}
  ### {% data glossaries.external[forloop.index0].term %}
  {% data glossaries.external[forloop.index0].description %}
  ---
{% endfor %}

---

## 参考資料

- [公式 Git 用語集](https://www.kernel.org/pub/software/scm/git/docs/gitglossary.html)
- [Git のドキュメント](https://git-scm.com/doc)
- [Git コマンド一覧](https://git-scm.com/docs)
