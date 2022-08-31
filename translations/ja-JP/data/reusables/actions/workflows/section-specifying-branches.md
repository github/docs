
`workflow_run`を使う場合、ワークフローがトリガーされるためには、どのブランチでトリガーされたワークフローが実行されなければならないかを指定できます。

`branches`及び`branches-ignore`フィルタは、複数のブランチ名にマッチさせるために`*`、`**`、`+`、`?`、`!`などの文字を使うglobパターンを受け付けます。 これらの文字のいずれかを含む名前に対してリテラルの一致をさせたい場合には、これらの特殊文字を`\`で*エスケープ*しなければなりません。 globパターンに関する詳しい情報については「[フィルタパターンのチートシート](/actions/using-workflows/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet)」を参照してください。

たとえば、以下のトリガーを持つワークフローは、`Build`という名前のワークフローが`releases/`で始まる名前のブランチで実行される場合にのみ実行されます。

```yaml
on:
  workflow_run:
    workflows: ["Build"]
    types: [requested]
    branches:
      - 'releases/**'
```

以下のトリガーを持つワークフローは、`Build`という名前のワークフローが`canary`という名前ではないブランチ上で実行される場合にのみ実行されます。

```yaml
on:
  workflow_run:
    workflows: ["Build"]
    types: [requested]
    branches-ignore:
      - "canary"
```

`branches`と`branches-ignore`を1つのワークフロー内の同じイベントに使うことはできません。 1つのイベントに対して含めるブランチパターンと除外するブランチパターンをどちらも使いたい場合には、`branches`フィルタを`!`文字と合わせて使い、除外するブランチを示してください。

パターンを定義する順序により、結果に違いが生じます。

- 肯定のマッチの後に否定のマッチングパターン（`!`がプレフィックスされている）を置くと、ブランチが除外されます。
- 否定のマッチングパターンの後に肯定のマッチングパターンを定義すると、ブランチは再び含められます。

たとえば、以下のトリガーを持つワークフローは、`Build`というナメのワークフローが`releases/10`もしくは`releases/beta/mona`という名前のブランチ上で実行されている場合に実行されますが、`releases/10-alpha`、`releases/beta/3-alpha`、`main`といった名前のブランチ上で実行されている場合には実行されません。

```yaml
on:
  workflow_run:
    workflows: ["Build"]
    types: [requested]
    branches:
      - 'releases/**'
      - '!releases/**-alpha'
```
