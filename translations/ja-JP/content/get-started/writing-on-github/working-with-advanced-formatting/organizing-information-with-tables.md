---
title: 情報を表に編成する
intro: 表を作成して、コメント、Issue、プルリクエスト、ウィキの情報を編成できます。
redirect_from:
  - /articles/organizing-information-with-tables
  - /github/writing-on-github/organizing-information-with-tables
  - /github/writing-on-github/working-with-advanced-formatting/organizing-information-with-tables
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Organized data with tables
ms.openlocfilehash: 6045e9f27432233cbfcdb654c303bc02ea5666cd
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '145068603'
---
## テーブルの作成

パイプ (`|`) とハイフン (`-`) を使用してテーブルを作成できます。 ハイフンは各列のヘッダーの作成に使用され、パイプは各列の区切りに使用されます。 正しく表示されるように、表の前には空白行を 1 行追加してください。

```markdown

| First Header  | Second Header |
| ------------- | ------------- |
| Content Cell  | Content Cell  |
| Content Cell  | Content Cell  |
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

{% data reusables.user-settings.enabling-fixed-width-fonts %}

## 表の内容をフォーマットする

表内では、リンク、インライン コード ブロック、テキスト スタイルなどの[書式設定](/articles/basic-writing-and-formatting-syntax)を使用できます。

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

セルでパイプ文字 (`|`) を使用するには、パイプ文字の前に (`\`) を追加します。

```markdown
| Name     | Character |
| ---      | ---       |
| Backtick | `         |
| Pipe     | \|        |
```

![パイプ文字をエスケープして表示された表](/assets/images/help/writing/table-escaped-character-rendered.png)

## 参考資料

- [{% data variables.product.prodname_dotcom %} Flavored Markdown の仕様](https://github.github.com/gfm/)
- [Basic writing and formatting syntax (基本的な書き方とフォーマットの構文)](/articles/basic-writing-and-formatting-syntax)
