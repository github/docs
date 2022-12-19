---
ms.openlocfilehash: 4e50754bfa8075681d503e689df630855eedbbab
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: "145089104"
---

`push` イベントを使用する場合は、特定のブランチまたはタグで実行するワークフローを構成できます。

ブランチ名パターンを含める場合、またはブランチ名パターンを含める/除外の両方を行う場合は、`branches` フィルターを使用します。 ブランチ名パターンの除外のみを行う場合は、`branches-ignore` フィルターを使用します。 `branches` と `branches-ignore` のフィルターの両方をワークフロー内の同じイベントで使うことはできません。

タグ名パターンを含める場合、またはタグ名パターンを含める/除外の両方を行う場合は、`tags` フィルターを使用します。 タグ名パターンの除外のみを行う場合は、`tags-ignore` フィルターを使用します。 `tags` と `tags-ignore` のフィルターの両方をワークフロー内の同じイベントで使うことはできません。

`tags`/`tags-ignore` または `branches`/`branches-ignore` だけを定義する場合、定義されていない Git ref に影響を与えるイベントに対してワークフローは実行されません。`tags`/`tags-ignore` および `branches`/`branches-ignore` のどちらも定義しない場合、ワークフローはブランチまたはタグに影響を与えるイベントに対して実行されます。 `branches`/`branches-ignore` と [`paths`](#onpushpull_requestpull_request_targetpathspaths-ignore) の両方を定義すると、ワークフローは両方のフィルターが満たされた場合にのみ実行されます。

`branches`、`branches-ignore`、`tags`、および `tags-ignore` のキーワードは、複数のブランチまたはタグ名に一致する文字 (`*`、`**`、`+`、`?`、`!` など) を使用する glob パターンを許容します。 名前にこれらの文字のいずれかが含まれており、リテラルの一致が必要な場合は、`\` でこれらの各特殊文字を *エスケープ* する必要があります。 glob パターンの詳細については、「[フィルター パターンのチート シート](/actions/using-workflows/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet)」を参照してください。

#### ブランチとタグを含める例

`branches` と `tags` で定義されているパターンは、Git ref の名前に対して評価されます。 たとえば、次のワークフローは、`push` イベントが発生するたびに実行されます。

- `main` という名前のブランチ (`refs/heads/main`)
- `mona/octocat` という名前のブランチ (`refs/heads/mona/octocat`)
- `releases/10` のように名前が `releases/` で始まるブランチ (`refs/heads/releases/10`)
- `v2` という名前のタグ (`refs/tags/v2`)
- `v1.9.1` のように名前が `v1.` で始まるタグ (`refs/tags/v1.9.1`)

```yaml
on:
  push:
    # Sequence of patterns matched against refs/heads
    branches:    
      - main
      - 'mona/octocat'
      - 'releases/**'
    # Sequence of patterns matched against refs/tags
    tags:        
      - v2
      - v1.*
```

#### ブランチやタグを除外する例

パターンが `branches-ignore` または `tags-ignore` パターンと一致する場合、ワークフローは実行されません。 `branches` と `tags` で定義されているパターンは、Git ref の名前に対して評価されます。 たとえば、次のワークフローは、`push` イベントがない限り、`push` イベントが発生するたびに実行されます。

- `mona/octocat` という名前のブランチ (`refs/heads/mona/octocat`)
- `beta/3-alpha` のように名前が `releases/**-alpha` と一致する ブランチ (`refs/releases/beta/3-alpha`)
- `v2` という名前のタグ (`refs/tags/v2`)
- `v1.9` のように名前が `v1.` で始まるタグ (`refs/tags/v1.9`)

```yaml
on:
  push:
    # Sequence of patterns matched against refs/heads
    branches-ignore:    
      - 'mona/octocat'
      - 'releases/**-alpha'
    # Sequence of patterns matched against refs/tags
    tags-ignore:        
      - v2
      - v1.*
```

#### ブランチやタグを含めたり除外したりする例

1 つのワークフローで同じイベントをフィルターするために `branches` と `branches-ignore` を使用することはできません。 同様に、1 つのワークフローで同じイベントをフィルターするために `tags` と `tags-ignore` を使用することはできません。 1 つのイベントに対してブランチまたはタグ パターンを含める/除外の両方を行う場合は、`branches` または `tags` フィルターと `!` 文字を使用して、除外するブランチまたはタグを指定します。

`!` 文字を含むブランチを定義する場合は、`!` 文字を含まないブランチも 1 つ以上定義する必要があります。 ブランチの除外のみを行いたい場合は、代わりに `branches-ignore` を使用します。 同様に、`!` 文字を含むタグを定義する場合は、`!` 文字を含まないタグも 1 つ以上定義する必要があります。 タグの除外のみを行いたい場合は、代わりに `tags-ignore` を使用します。

パターンを定義する順序により、結果に違いが生じます。

- 肯定のマッチング パターンの後に否定のマッチング パターン (`!` のプレフィックスが付く) を定義すると、Git ref が除外されます。
- 否定のマッチングパターンの後に肯定のマッチングパターンを定義すると、Git ref を再び含めます。

次のワークフローは、否定パターン `!releases/**-alpha` が肯定パターンに従うため、`releases/10` または `releases/beta/mona` へのプッシュで実行され、`releases/10-alpha` または `releases/beta/3-alpha` では実行されません。

```yaml
on:
  push:
    branches:
      - 'releases/**'
      - '!releases/**-alpha'
```
