---
ms.openlocfilehash: 56ed7762c2325d0328bd52ca89fe7879b5ce4601
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: "145089583"
---
利用できるスコープとアクセスの値は以下のとおりです。

```yaml
permissions:
  actions: read|write|none
  checks: read|write|none
  contents: read|write|none
  deployments: read|write|none{% ifversion fpt or ghec %}
  id-token: read|write|none{% endif %}
  issues: read|write|none
  discussions: read|write|none
  packages: read|write|none
  pages: read|write|none
  pull-requests: read|write|none
  repository-projects: read|write|none
  security-events: read|write|none
  statuses: read|write|none
```

これらのスコープのいずれかにアクセス権を指定すると、指定されていないすべてのスコープが `none` に設定されます。

利用可能なすべてのスコープに対する読み取りあるいは書き込みアクセス権を定義するためには、以下の構文が使えます。

```yaml
permissions: read-all|write-all
```

次の構文を使用して、使用可能なすべてのスコープのアクセス許可を無効にすることができます。

```yaml
permissions: {}
```
