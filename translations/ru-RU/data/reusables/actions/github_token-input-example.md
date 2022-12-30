---
ms.openlocfilehash: eeaa56fe9499f2e74e2baa66f883d9aa31bc81f9
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: "147065733"
---
В этом примере рабочего процесса используется [действие маркировщика](https://github.com/actions/labeler), для которого требуется `GITHUB_TOKEN` в качестве значения входного параметра `repo-token`:

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
