---
ms.openlocfilehash: 621271104f28983cd2cc1319a302fc1654e54acb
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: "145067779"
---

`push` と `pull_request` のイベントを使用すると、変更されるファイル パスに基づいて実行するワークフローを構成できます。 タグのプッシュに対して、パスのフィルターは評価されません。

ファイル パス パターンを包含する場合、またはファイル パス パターンの包含と除外の両方を行う場合は、`paths` フィルターを使用します。 ファイル パス パターンの除外のみを行う場合は、`paths-ignore` フィルターを使用します。 `paths` と `paths-ignore` のフィルターの両方をワークフロー内の同じイベントで使うことはできません。

`branches`/`branches-ignore` と `paths` の両方を定義すると、ワークフローは両方のフィルターが満たされた場合にのみ実行されます。

`paths` と `paths-ignore` のキーワードは、複数のパス名と一致するために `*` と `**` のワイルドカード文字を使用する glob パターンを受け入れます。 詳細については、「[フィルター パターンのチート シート](/actions/using-workflows/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet)」を参照してください。

#### 例: パスの包含

`paths` フィルターにパターンにマッチするパスが 1 つでもあれば、ワークフローは実行されます。 たとえば、次のワークフローは、JavaScript ファイル (`.js`) をプッシュするたびに実行されます。

```yaml
on:
  push:
    paths:
      - '**.js'
```

{% note %}

**注:** [パスのフィルター処理](/actions/using-workflows/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore)、[ブランチのフィルター処理](/actions/using-workflows/workflow-syntax-for-github-actions#onpull_requestpull_request_targetbranchesbranches-ignore)、または [コミット メッセージ](/actions/managing-workflow-runs/skipping-workflow-runs)のためにワークフローがスキップされた場合、そのワークフローに関連付けられているチェックは "保留中" 状態のままになります。 これらのチェックを成功させる必要がある pull request は、マージが禁止されます。 詳細については、「[スキップされるものの必要なチェックの処理](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/troubleshooting-required-status-checks#handling-skipped-but-required-checks)」を参照してください。

{% endnote %}

#### 例: パスの除外

すべてのパス名が `paths-ignore` のパターンと一致する場合、ワークフローは実行されません。 パス名が `paths-ignore` のパターンと一致しない場合は、一部のパス名がパターンと一致する場合でも、ワークフローが実行されます。

以下のパスのフィルターを持つワークフローは、リポジトリのルートにある `docs` ディレクトリ外のファイルを少なくとも 1 つ含む `push` イベントでのみ実行されます。

```yaml
on:
  push:
    paths-ignore:
      - 'docs/**'
```

#### 例: パスの包含および除外

1 つのワークフローで同じイベントのフィルター処理をするために `paths` と `paths-ignore` を使用することはできません。 1 つのイベントに対してパス パターンの包含と除外の両方を行う場合は、`paths` フィルターと `!` 文字を使用して、除外するパスを指定します。

`!` 文字を含むパスを定義する場合は、`!` 文字を含まないパスも 1 つ以上定義する必要があります。 パスの除外のみを行いたい場合は、代わりに `paths-ignore` を使用します。

パターンを定義する順序により、結果に違いが生じます:

- 肯定のマッチング パターンの後に否定のマッチング パターン（`!` のプレフィックスが付く） を定義すると、パスを除外します。
- 否定のマッチングパターンの後に肯定のマッチングパターンを定義すると、パスを再び含めます。

ファイルが `sub-project/docs` ディレクトリに存在しない限り、`push` イベントが `sub-project` ディレクトリまたはそのサブディレクトリのファイルを含む場合は、この例はいつでも実行されます。 たとえば、`sub-project/index.js` または `sub-project/src/index.js` を変更するプッシュはワークフローの実行をトリガーしますが、`sub-project/docs/readme.md` のみを変更するプッシュはワークフローの実行をトリガーしません。

```yaml
on:
  push:
    paths:
      - 'sub-project/**'
      - '!sub-project/docs/**'
```

#### Git diffの比較

{% note %}

**注:** 1,000 以上のコミットをプッシュする場合、あるいは {% data variables.product.prodname_dotcom %} がタイムアウトのために diff を生成できない場合、そのワークフローは常に実行されます。

{% endnote %}

フィルターは、変更されたファイルを評価し、`paths-ignore` または `paths` のリストに対してファイルを実行することで、ワークフローを実行すべきか判断します。 ファイルが変更されていない場合、ワークフローは実行されません。

{% data variables.product.prodname_dotcom %}はプッシュに対してはツードットdiff、Pull Requestに対してはスリードットdiffを使って変更されたファイルのリストを生成します。
- **pull request:** スリードット diff は、トピック ブランチの最新バージョンとトピック ブランチがベース ブランチと最後に同期されたコミットとの比較です。
- **既存のブランチへのプッシュ:** ツードット diff は、ヘッド SHA とベース SHA を互いに直接比較します。
- **新しいブランチへのプッシュ:** プッシュされた最も深いコミットの先祖の親に対するツードット diff です。

diff は 300 個のファイルに制限されます。 フィルターによって返された最初の 300 個のファイルに一致しないファイルが変更された場合、ワークフローは実行されません。 ワークフローが自動的に実行されるように、より具体的なフィルターを作成する必要がある場合があります。

詳細については、「[pull request でのブランチの比較について](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-comparing-branches-in-pull-requests)」を参照してください。
