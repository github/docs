---
ms.openlocfilehash: eeaa56fe9499f2e74e2baa66f883d9aa31bc81f9
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: "147065730"
---
In diesem Beispielworkflow wird die [Beschrifteraktion](https://github.com/actions/labeler) verwendet, die das `GITHUB_TOKEN` als Wert für den `repo-token`-Eingabeparameter erfordert:

```yaml{:copy}
name: Pull request labeler
on: [ pull_request_target ]

permissions:
  contents: read
  pull-requests: write

jobs:
  triage:
    runs-on: ubuntu-latest
    steps:
      - uses: {% data reusables.actions.action-labeler %}
        with:
          repo-token: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
```
