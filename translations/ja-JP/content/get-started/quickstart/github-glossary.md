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
ms.openlocfilehash: 3595b29a43cd7181bf5203f892b3bee84a237c29
ms.sourcegitcommit: 2e1852bcdd690cb66b9b5d69cb056a2bb2b9a6b4
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/10/2022
ms.locfileid: '148160845'
---
{% for glossary in glossaries %}
  ### {{ glossary.term }}
  {{ glossary.description}}
  ---
{% endfor %}

---

## 参考資料

- [公式 Git 用語集](https://www.kernel.org/pub/software/scm/git/docs/gitglossary.html)
- [Git のドキュメント](https://git-scm.com/doc)
- [Git コマンド一覧](https://git-scm.com/docs)
