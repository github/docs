
`push`および`pull_request`イベントを使用する場合、変更されたファイルパスに基づいてワークフローを実行するよう設定できます。 パスフィルタは、タグのプッシュに対しては評価されません。

`paths`フィルタは、ファイルパスのパターンを含めたい場合や、ファイルパスのパターンを含めるとともに除外もしたい場合に使ってください。 ファイルパスパターンの除外のみをしたい場合には、`paths-ignore`を使ってください。 `paths`及び`paths-ignore`フィルタを1つのワークフロー中の同じイベントでどちらも使用することはできません。

`branches`/`branches-ignore`と`paths`の両方を定義した場合、ワークフローはどちらのフィルタも満たされた場合にのみ実行されます。

`paths` および `paths-ignore` キーワードは、`*` と `**` のワイルドカード文字を使って複数のパス名と一致させる glob パターンを受け付けます。 詳しい情報については、「[フィルタパターンのチートシート](/actions/using-workflows/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet)」を参照してください。

#### 例: パスを含める

`paths`フィルタのパターンにマッチするパスが1つでもあれば、ワークフローは実行されます。 たとえば、以下のワークフローはJavaScriptファイル(`.js`)をプッシュするたびに実行されます。

```yaml
on:
  push:
    paths:
      - '**.js'
```

{% note %}

**ノート:** [path filtering](/actions/using-workflows/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore)、[branch filtering](/actions/using-workflows/workflow-syntax-for-github-actions#onpull_requestpull_request_targetbranchesbranches-ignore)、[commit message](/actions/managing-workflow-runs/skipping-workflow-runs)によってワークフローがスキップされた場合、そのワークフローに関連づけられたチェックは、"Pending"状態のままになります。 それらのチェックの成功を必要とするPull Requestのマージはブロックされます。 詳しい情報については「[スキップされた必須のチェックの処理](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/troubleshooting-required-status-checks#handling-skipped-but-required-checks)」を参照してください。

{% endnote %}

#### 例: パスの除外

すべてのパス名が `paths-ignore` のパターンと一致する場合、ワークフローは実行されません。 `paths-ignore`内のパターンにマッチしないパス名があった場合、場合、パターンにマッチするパスがあったとしても、ワークフローは実行されます。

以下のパスフィルタを持つワークフローは、リポジトリのルートにある `docs`ディレクトリ外のファイルを少なくとも1つ含む`push`イベントでのみ実行されます。

```yaml
on:
  push:
    paths-ignore:
      - 'docs/**'
```

#### 例: パスを含めるとともに除外

`paths`及び`paths-ignore`を1つのワークフロー中の同じイベントをフィルタリングするために使うことはできません。 1つのイベントに対して含めるパスパターンと除外するパスパターンをどちらも使いたい場合には、`paths`フィルタを`!`文字と合わせて使い、除外するパスを示してください。

`!`文字を使ってパスを定義する場合、`!`文字なしで少なくとも1つのパスを定義する必要もあります。 パスの除外だけをしたい場合には、代わりに`paths-ignore`を使ってください。

パターンを定義する順序により、結果に違いが生じます:

- 肯定のマッチの後に否定のマッチングパターン（`!`がプレフィックスされている）を置くと、パスが除外されます。
- 否定のマッチングパターンの後に肯定のマッチングパターンを定義すると、パスを再び含めます。

この例は、`push`イベントに`sub-project`ディレクトリあるいはそのサブディレクトリ内のファイルが含まれ、そのファイルが`sub-project/docs`ディレクトリ内にはない場合に実行されます。 たとえば`sub-project/index.js`もしくは`sub-project/src/index.js`を変更するプッシュはワークフローを実行させますが、`sub-project/docs/readme.md`だけを変更するプッシュは実行させません。

```yaml
on:
  push:
    paths:
      - 'sub-project/**'
      - '!sub-project/docs/**'
```

#### Git diffの比較

{% note %}

**ノート：** 1,000以上のコミットをプッシュする場合、あるいは{% data variables.product.prodname_dotcom %}がタイムアウトのためにdiffを生成できない場合、そのワークフローは常に実行されます。

{% endnote %}

フィルタは、変更されたファイルを`paths-ignore`あるいは`paths`リストに対して評価することによって、ワークフローを実行すべきか判断します。 ファイルが変更されていない場合、ワークフローは実行されません。

{% data variables.product.prodname_dotcom %}はプッシュに対してはツードットdiff、Pull Requestに対してはスリードットdiffを使って変更されたファイルのリストを生成します。
- **Pull Request：** スリードットdiffは、トピックブランチの最新バージョンとトピックブランチがベースブランチと最後に同期されたコミットとの比較です。
- **既存のブランチへのプッシュ：** ツードットdiffは、headとベースのSHAを互いに直接比較します。
- **新しいブランチへのプッシュ：** 最も深いプッシュの先祖の親に対するツードットdiffです。

Diffは300ファイルに制限されています。 フィルタが返す先頭の300ファイル内にマッチしない変更されたファイルがある場合、ワークフローは実行されません。 ワークフローが自動的に実行されるよう、さらに具体的なフィルタを作成する必要があるかもしれません。

詳しい情報については「[Pull Request中のブランチの比較について](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-comparing-branches-in-pull-requests)」を参照してください。
