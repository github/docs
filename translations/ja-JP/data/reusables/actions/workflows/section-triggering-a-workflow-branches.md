---
ms.openlocfilehash: 476305b7c40430f20edb235a1c1ce73482464c90
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "146064236"
---
`pull_request` イベントと `pull_request_target` イベントを使用する場合は、特定のブランチを対象とする pull request に対してのみ実行するようにワークフローを構成できます。

ブランチ名パターンを包含する場合、またはブランチ名パターンの包含と除外の両方を行う場合は、`branches` フィルターを使用します。 ブランチ名パターンの除外のみを行う場合は、`branches-ignore` フィルターを使用します。 `branches` と `branches-ignore` のフィルターの両方をワークフロー内の同じイベントで使うことはできません。

`branches`/`branches-ignore` と [`paths`](#onpushpull_requestpull_request_targetpathspaths-ignore) の両方を定義すると、ワークフローは両方のフィルターが満たされた場合にのみ実行されます。

`branches` と `branches-ignore` のキーワードは、複数のブランチ名に一致する文字 (`*`、`**`、`+`、`?`、`!` など) を使用する glob パターンを受け入れます。 名前にこれらの文字のいずれかが含まれており、リテラルの一致が必要な場合は、`\` でこれらの各特殊文字をエスケープする必要があります。 glob パターンの詳細については、「[フィルター パターンのチート シート](/actions/using-workflows/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet)」を参照してください。

#### 例: ブランチの包含

`branches` で定義されているパターンは、Git ref の名前に対して評価されます。 たとえば、次のワークフローは、pull request の対象となる `pull_request` イベントが発生するたびに実行されます。

- `main` という名前のブランチ (`refs/heads/main`)
- `mona/octocat` という名前のブランチ (`refs/heads/mona/octocat`)
- 名前が `releases/10` のように `releases/` で始まるブランチ (`refs/heads/releases/10`)

```yaml
on:
  pull_request:
    # Sequence of patterns matched against refs/heads
    branches:    
      - main
      - 'mona/octocat'
      - 'releases/**'
```

#### 例: ブランチの除外

パターンが `branches-ignore` パターンと一致する場合、ワークフローは実行されません。 `branches` で定義されているパターンは、Git ref の名前に対して評価されます。 たとえば、次のワークフローは、pull request の対象とならない限り、`pull_request` イベントが発生するたびに実行されます。

- `mona/octocat` という名前のブランチ (`refs/heads/mona/octocat`)
- 名前が `releases/beta/3-alpha` のように `releases/**-alpha` と一致する ブランチ (`refs/heads/releases/beta/3-alpha`)

```yaml
on:
  pull_request:
    # Sequence of patterns matched against refs/heads
    branches-ignore:    
      - 'mona/octocat'
      - 'releases/**-alpha'
```

#### 例: パスの包含および除外

1 つのワークフローで同じイベントのフィルター処理をするために `branches` と `branches-ignore` を使用することはできません。 1 つのイベントに対して分岐パターンの適用と除外の両方を行う場合は、`branches` フィルターと `!` 文字を使用して、除外する分岐を指定します。

`!` 文字を含むブランチを定義する場合は、`!` 文字を含まないブランチも 1 つ以上定義する必要があります。 ブランチの除外のみを行いたい場合は、代わりに `branches-ignore` を使用します。

パターンを定義する順序により、結果に違いが生じます。

- 肯定のマッチング パターンの後に否定のマッチング パターン (`!` のプレフィックスが付く) を定義すると、Git ref が除外されます。
- 否定のマッチングパターンの後に肯定のマッチングパターンを定義すると、Git ref を再び含めます。

次のワークフローは、否定のパターン `!releases/**-alpha` が肯定のパターンの後に続くため、`releases/10` または `releases/beta/mona` を対象とする pull request の `pull_request` イベントで実行されますが、`releases/10-alpha` または `releases/beta/3-alpha` を対象とする pull request では実行されません。

```yaml
on:
  pull_request:
    branches:    
      - 'releases/**'
      - '!releases/**-alpha'
```
