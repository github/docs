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
ms.openlocfilehash: b8a436ed4e20133f1a2c4def572a60b73c48cf4d
ms.sourcegitcommit: c95a5c9bdf3ae54ad77b074739b262e7d0e8a077
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/17/2022
ms.locfileid: '148169583'
---
{% for glossary in glossaries %}
  ### {{ glossary.term }}
  {{ glossary.description }}
  ---
{% endfor %}

---

## 参考資料

- [公式 Git 用語集](https://www.kernel.org/pub/software/scm/git/docs/gitglossary.html)
- [Git のドキュメント](https://git-scm.com/doc)
- [Git コマンド一覧](https://git-scm.com/docs)
