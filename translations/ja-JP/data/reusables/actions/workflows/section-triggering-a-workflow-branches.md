`pull_request`及び`pull_request_target`イベントを使う場合、特定のブランチをターゲットとするPull Requestに対してだけ実行されるようにワークフローを設定できます。

ブランチ名のパターンを含めたい場合、あるいはぶらん名のパターンを含めるとともに除外もしたい場合に、`branches`フィルタを使ってください。 ブランチ名のパターンを除外のみしたい場合に`branches-ignore`フィルタを使ってください。 `branches`と`branches-ignore`を1つのワークフロー内の同じイベントに使うことはできません。

`branches`/`branches-ignore`と[`paths`](#onpushpull_requestpull_request_targetpathspaths-ignore)の両方を定義した場合、ワークフローはどちらのフィルタも満たされた場合にのみ実行されます。

`branches`及び`branches-ignore`キーワードは、複数のブランチ名にマッチさせるために`*`、`**`、`+`、`?`、`!`などの文字を使うglobパターンを受け付けます。 これらの文字のいずれかを含む名前に対してリテラルの一致をさせたい場合には、これらの特殊文字を`\`でエスケープしなければなりません。 globパターンに関する詳しい情報については「[フィルタパターンのチートシート](/actions/using-workflows/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet)」を参照してください。

#### 例: ブランチを含める

`branches`で定義されているパターンは、Git refの名前と照らし合わせて評価されます。 たとえば、次のワークフローは以下をターゲットとするPull Requestに対する`pull_request`イベントがあった場合に実行されます。

- `main`という名前のブランチ(`refs/heads/main`)
- `mona/octocat`という名前のブランチ(`refs/heads/mona/octocat`)
- `releases/10`のように`releases/`で始まる名前のブランチ(`refs/heads/releases/10`)

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

パターンが`tags-ignore`とマッチする場合、ワークフローは実行されません。 `branches`で定義されているパターンは、Git refの名前と照らし合わせて評価されます。 たとえば、次のワークフローは以下をターゲットとしないPull Requestに対する`pull_request`イベントがあった場合に実行されます。

- `mona/octocat`という名前のブランチ(`refs/heads/mona/octocat`)
- `releases/beta/3-alpha`のように、`releases/**-alpha`にマッチする名前のブランチ(`refs/releases/beta/3-alpha`)

```yaml
on:
  pull_request:
    # Sequence of patterns matched against refs/heads
    branches-ignore:    
      - 'mona/octocat'
      - 'releases/**-alpha'
```

#### 例: ブランチを含めるとともに除外

`branches`及び`branches-ignore`フィルタを1つのワークフロー中の同じイベントをフィルタリングするために使うことはできません。 1つのイベントに対して含めるブランチパターンと除外するブランチパターンをどちらも使いたい場合には、`branches`フィルタを`!`文字と合わせて使い、除外するブランチを示してください。

`!`文字を使ってブランチを定義する場合、`!`文字なしで少なくとも1つのブランチを定義する必要もあります。 ブランチの除外だけをしたい場合には、代わりに`branches-ignore`を使ってください。

パターンを定義する順序により、結果に違いが生じます。

- 肯定のマッチングパターンの後に否定のマッチングパターン ("`!`" のプレフィクス) を定義すると、Git ref を除外します。
- 否定のマッチングパターンの後に肯定のマッチングパターンを定義すると、Git ref を再び含めます。

以下のワークフローは、`releases/10` や `releases/beta/mona` への`pull_request`イベントで実行されますが、`releases/10-alpha` や `releases/beta/3-alpha`に対するPull Requstでは実行されません。肯定のマッチングパターンの後に、否定のマッチングパターン `!releases/**-alpha` が続いているからです。

```yaml
on:
  pull_request:
    branches:    
      - 'releases/**'
      - '!releases/**-alpha'
```
