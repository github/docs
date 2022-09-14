---
ms.openlocfilehash: a35ad50ac71e34c7aecdc8f58720f962375acabd
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: "145067787"
---

`workflow_run` イベントを使用する場合は、ワークフローをトリガーするためにトリガーするワークフローが稼働する必要があるブランチを指定できます。

`branches` フィルターと `branches-ignore` フィルターは、複数のブランチ名に一致する文字 (`*`、`**`、`+`、`?` など) を使用する glob パターンを受け入れます。`!` 名前にこれらの文字のいずれかが含まれており、リテラルの一致が必要な場合は、`\` でこれらの各特殊文字を *エスケープ* する必要があります。 glob パターンの詳細については、「[フィルター パターンのチート シート](/actions/using-workflows/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet)」を参照してください。

たとえば、次のトリガーを持つワークフローは、名前が `releases/` で始まるブランチで `Build` という名前のワークフローが稼働している場合にのみ実行されます。

```yaml
on:
  workflow_run:
    workflows: ["Build"]
    types: [requested]
    branches:
      - 'releases/**'
```

次のトリガーを持つワークフローは、名前が `canary` でないブランチで `Build` という名前のワークフローが稼働している場合にのみ実行されます。

```yaml
on:
  workflow_run:
    workflows: ["Build"]
    types: [requested]
    branches-ignore:
      - "canary"
```

`branches` と `branches-ignore` のフィルターの両方をワークフロー内の同じイベントで使うことはできません。 1 つのイベントに対して分岐パターンの適用と除外の両方を行う場合は、`branches` フィルターと `!` 文字を使用して、除外する分岐を指定します。

パターンを定義する順序により、結果に違いが生じます。

- 肯定のマッチング パターンの後に否定のマッチング パターン（`!` のプレフィックスが付く） を定義すると、ブランチを除外します。
- 否定のマッチング パターンの後に肯定のマッチング パターンを定義すると、ブランチを再び含めます。

たとえば、次のトリガーを持つワークフローは、名前が `releases/10` または `releases/beta/mona` で始まるブランチで `Build` という名前のワークフローが稼働している場合にのみ実行されますが、`releases/10-alpha`、`releases/beta/3-alpha` または `main` という名前のブランチでは実行されません。

```yaml
on:
  workflow_run:
    workflows: ["Build"]
    types: [requested]
    branches:
      - 'releases/**'
      - '!releases/**-alpha'
```
