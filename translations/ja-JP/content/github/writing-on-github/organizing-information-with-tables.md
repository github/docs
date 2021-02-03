---
title: 情報を表に編成する
intro: '表を作成して、コメント、Issue、プルリクエスト、ウィキの情報を編成できます。'
redirect_from:
  - /articles/organizing-information-with-tables
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### 表を作成する

表は、パイプ文字 (`|`) とハイフン (`-`) を使って作成できます。 ハイフンでヘッダを作成し、パイプ文字で各列を分けます。 正しく表示されるように、表の前には空白行を 1 行追加してください。

```markdown

| ヘッダ 1 | ヘッダ 2 |
| ------------- | ------------- |
| 内容セル  | 内容セル  |
| 内容セル  | 内容セル  |
```

![レンダリングされた表](/assets/images/help/writing/table-basic-rendered.png)

表の両側のパイプ文字はオプションです。

セルの幅は変わるので、列がぴったり一致する必要はありません。 各列のヘッダ行には、ハイフンを 3 つ以上使用してください。

```markdown
| Command | Description |
| --- | --- |
| git status | List all new or modified files |
| git diff | Show file differences that haven't been staged |
```

![異なるセル幅で表示された表](/assets/images/help/writing/table-varied-columns-rendered.png)

### 表の内容をフォーマットする

表では、リンク、インラインのコードブロック、テキストスタイルなどの[フォーマット](/articles/basic-writing-and-formatting-syntax)を使用できます。

```markdown
| Command | Description |
| --- | --- |
| `git status` | List all *new or modified* files |
| `git diff` | Show file differences that **haven't been** staged |
```

![テキストをフォーマットして表示された表](/assets/images/help/writing/table-inline-formatting-rendered.png)

ヘッダー行でハイフンの左、右、両側にコロン (`:`) を使うと、列でテキストを左寄せ、右寄せ、センタリングすることができます。

```markdown
| Left-aligned | Center-aligned | Right-aligned |
| :---         |     :---:      |          ---: |
| git status   | git status     | git status    |
| git diff     | git diff       | git diff      |
```

![テキストを左寄せ、右寄せ、センタリングして表示された表](/assets/images/help/writing/table-aligned-text-rendered.png)

セルでパイプ文字 (`|`) を使用するには、パイプ文字の前に "\" を追加します。

```markdown
| Name     | Character |
| ---      | ---       |
| Backtick | `         |
| Pipe     | \|        |
```

![パイプ文字をエスケープして表示された表](/assets/images/help/writing/table-escaped-character-rendered.png)

### 参考リンク

- [{% data variables.product.prodname_dotcom %} Flavored Markdown の仕様](https://github.github.com/gfm/)
- [基本的な書き方とフォーマットの構文](/articles/basic-writing-and-formatting-syntax)
