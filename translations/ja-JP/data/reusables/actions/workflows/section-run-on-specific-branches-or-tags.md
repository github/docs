
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

パターンが`branches-ignore`または`tags-ignore`とマッチする場合、ワークフローは実行されません。 `branches`および`tags`で定義されているパターンは、Git refの名前と照らし合わせて評価されます。 For example, the following workflow would run whenever there is a `push` event, unless the `push` event is to:

- A branch named `mona/octocat` (`refs/heads/mona/octocat`)
- A branch whose name matches `releases/**-alpha`, like `beta/3-alpha` (`refs/releases/beta/3-alpha`)
- `v2`という名前のタグ(`refs/tags/v2`)
- A tag whose name starts with `v1.`, like `v1.9` (`refs/tags/v1.9`)

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

#### Example: Including and excluding branches and tags

You can't use `branches` and `branches-ignore` to filter the same event in a single workflow. Similarly, you can't use `tags` and `tags-ignore` to filter the same event in a single workflow. If you want to both include and exclude branch or tag patterns for a single event, use the `branches` or `tags` filter along with the `!` character to indicate which branches or tags should be excluded.

If you define a branch with the `!` character, you must also define at least one branch without the `!` character. If you only want to exclude branches, use `branches-ignore` instead. Similarly, if you define a tag with the `!` character, you must also define at least one tag without the `!` character. If you only want to exclude tags, use `tags-ignore` instead.

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
