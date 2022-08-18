
`push`イベントを使う場合、特定のブランチもしくはタグでワークフローを実行するように設定できます。

ブランチ名のパターンを含めたい場合、あるいはブランチ名のパターンを含めるとともに除外もしたい場合に、`branches`フィルターを使ってください。 ブランチ名のパターンを除外のみしたい場合には、`branches-ignore`フィルターを使ってください。 `branches`及び`branches-ignore`フィルタを1つのワークフロー中の同じイベントでどちらも使用することはできません。

タグ名のパターンを含めたい場合、あるいはタグ名のパターンを含めるとともに除外もしたい場合に、`tags`フィルターを使ってください。 タグ名のパターンを除外のみしたい場合には、`tags-ignore`フィルターを使ってください。 `tags`及び`tags-ignore`フィルタを1つのワークフロー中の同じイベントでどちらも使用することはできません。

`tags`/`tags-ignore`のみ、もしくは`branches`/`branches-ignore`だけを定義した場合、ワークフローは未定義のGit refに影響するイベントに対しては実行されません。 `tags`/`tags-ignore`あるいは`branches`/`branches-ignore`のどちらも定義しなかった場合、ブランチもしくはタグに影響するイベントに対して実行されます。 `branches`/`branches-ignore`及び[`paths`](#onpushpull_requestpull_request_targetpathspaths-ignore)をどちらも定義した場合、ワークフローは双方のフィルタを満たす場合にのみ実行されます。

`branches`、`branches-ignore`、`tags`、`tags-ignore`のキーワードは、1つ以上ののブランチもしくはタグ名にマッチする`*`、`**`、`+`、`?`、`!`といった文字を使うglobパターンを受け付けます。 これらの文字のいずれかを含む名前に対してリテラルの一致をさせたい場合には、これらの特殊文字を`\`で*エスケープ*しなければなりません。 globパターンに関する詳しい情報については「[フィルタパターンのチートシート](/actions/using-workflows/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet)」を参照してください。

#### 例: ブランチ及びタグ名を含める

`branches`および`tags`で定義されているパターンは、Git refの名前と照らし合わせて評価されます。 たとえば、次のワークフローは以下に対する`push`イベントがあった場合に実行されます。

- `main`という名前のブランチ(`refs/heads/main`)
- `mona/octocat`という名前のブランチ(`refs/heads/mona/octocat`)
- `releases/10`のように`releases/`で始まる名前のブランチ(`refs/heads/releases/10`)
- `v2`という名前のタグ(`refs/tags/v2`)
- `v1.9.1`のように`v1.`で始まる名前のタグ(`refs/tags/v1.9.1`)

```yaml
on:
  push:
    # refs/headsに対してマッチするパターンのシーケンス
    branches:    
      - main
      - 'mona/octocat'
      - 'releases/**'
    # refs/tagsに対してマッチするパターンのシーケンス
    tags:        
      - v2
      - v1.*
```

#### 例: ブランチ及びタグの除外

パターンが`branches-ignore`または`tags-ignore`とマッチする場合、ワークフローは実行されません。 `branches`および`tags`で定義されているパターンは、Git refの名前と照らし合わせて評価されます。 たとえば、次のワークフローは`push`イベントがあり、その`push`イベントが以下に対するものでない場合に実行されます。

- `mona/octocat`という名前のブランチ(`refs/heads/mona/octocat`)
- `beta/3-alpha`のように、`releases/**-alpha`にマッチする名前のブランチ(`refs/releases/beta/3-alpha`)
- `v2`という名前のタグ(`refs/tags/v2`)
- `v1.9`のように`v1.`で始まる名前のタグ(`refs/tags/v1.9`)

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

#### 例: ブランチとタグを含めるとともに除外

`branches`及び`branches-ignore`フィルタを1つのワークフロー中の同じイベントをフィルタリングするために使うことはできません。 同様に、`tags`及び`tags-ignore`を1つのワークフロー中の同じイベントをフィルタリングするために使うことはできません。 1つのイベントに対してブランチもしくはタグパターンを含めるとともに除外したい場合には、`branches`もしくは`tags`フィルタを`!`文字とともに使って、除外すべきブランチもしくはタグを示してください。

`!`文字を使ってブランチを定義する場合、`!`文字なしで少なくとも1つのブランチを定義する必要もあります。 ブランチの除外だけをしたい場合には、代わりに`branches-ignore`を使ってください。 同様に、`!`文字でタグを定義する場合には、`!`なしで少なくとも1つのタグを定義する必要があります。 タグの除外だけをしたい場合には、代わりに`tags-ignore`を使ってください。

パターンを定義する順序により、結果に違いが生じます。

- 肯定のマッチングパターンの後に否定のマッチングパターン ("`!`" のプレフィクス) を定義すると、Git ref を除外します。
- 否定のマッチングパターンの後に肯定のマッチングパターンを定義すると、Git ref を再び含めます。

以下のワークフローは、`releases/10` や `releases/beta/mona` へのプッシュで実行されますが、`releases/10-alpha` や `releases/beta/3-alpha` へのプッシュでは実行されません。肯定のマッチングパターンの後に、否定のマッチングパターン `!releases/**-alpha` が続いているからです。

```yaml
on:
  push:
    branches:
      - 'releases/**'
      - '!releases/**-alpha'
```
