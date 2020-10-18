---
title: 基本的な書き方とフォーマットの構文
intro: シンプルな構文を使い、GitHub 上で文章やコードに洗練されたフォーマットを作り出してください。
redirect_from:
  - /articles/basic-writing-and-formatting-syntax
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### ヘッディング

ヘッディングを作成するには、1 つから 6 つの `#` シンボルをヘッディングのテキストの前に追加します。 使用する `#` の数によって、ヘッディングのサイズが決まります。

```
# The largest heading (最大のヘッディング)
## The second largest heading (2番目に大きなヘッディング)
###### The smallest heading (最も小さいヘッディング)
```

![表示された H1、H2、H6 のヘッディング](/assets/images/help/writing/headings-rendered.png)

### スタイル付きテキスト

太字、斜体、取り消し線で強調を示すことができます。

| スタイル          | 構文                 | キーボードショートカット        | サンプル                      | 出力                      |
| ------------- | ------------------ | ------------------- | ------------------------- | ----------------------- |
| 太字            | `** **`もしくは`__ __` | command/control + b | `**これは太字のテキストです**`        | **これは太字のテキストです**        |
| 斜体            | `* *`あるいは`_ _`     | command/control + i | `*このテキストは斜体です*`           | *このテキストは斜体です*           |
| 取り消し線         | `~~ ~~`            |                     | `~~これは間違ったテキストでした~~`      | ~~これは間違ったテキストでした~~      |
| 太字および太字中にある斜体 | `** **`及び`_ _`     |                     | `**このテキストは_きわめて_ 重要です**`  | **このテキストは_きわめて_重要です**   |
| 全体が太字かつ斜体     | `*** ***`          |                     | `***すべてのテキストがきわめて重要です***` | ***すべてのテキストがきわめて重要です*** |

### テキストの引用

テキストは`>`で引用できます。

```
アブラハムリンカーンの言葉：:

> フランス語で失礼します
```

![表示された引用テキスト](/assets/images/help/writing/quoted-text-rendered.png)

{% tip %}

**ヒント:** 会話を見る場合、コメントをハイライトして `r` と入力することで、コメント中のテキストを自動的に引用できます。 {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} に続いて [** Quote reply**] をクリックすれば、コメント全体を引用できます。 キーボードショートカットに関する詳しい情報については、「[キーボードショートカット](/articles/keyboard-shortcuts/)」を参照してください。

{% endtip %}

### コードの引用

単一のバッククォートで文章内のコードやコマンドを引用できます。 バッククォート内のテキストはフォーマットされません。

```
コミットされていない新しいもしくは修正されたすべてのファイルをリストするには `git status` を使ってください。
```

![表示されたインラインのコードブロック](/assets/images/help/writing/inline-code-rendered.png)

独立したブロック内にコードあるいはテキストをフォーマットするには、3 重のバッククォートを使用します。

<pre>
いくつかの基本的な Git コマンド:
```
git status
git add
git commit
```
</pre>

![表示されたコードブロック](/assets/images/help/writing/code-block-rendered.png)

詳しい情報については[コードブロックの作成とハイライト](/articles/creating-and-highlighting-code-blocks)を参照してください。

### リンク

リンクのテキストをブラケット `[ ]` で囲み、URL をカッコ `( )` で囲めば、インラインのリンクを作成できます。 キーボードショートカットの `command + k` を使用してリンクを作成することもできます。

`このサイトは [GitHub Pages](https://pages.github.com/) を使って構築されています。`

![表示されたリンク](/assets/images/help/writing/link-rendered.png)

{% tip %}

**ヒント:** {% data variables.product.product_name %}は、コメント中に適正な URL が書かれていれば自動的にリンクを生成します。 詳しい情報については[自動リンクされた参照と URL](/articles/autolinked-references-and-urls) を参照してください。

{% endtip %}

### セクションリンク

{% data reusables.repositories.section-links %}

### 相対リンク

{% data reusables.repositories.relative-links %}

### リスト

1 つ以上の行の前に `-` または `*` を置くことで、順序なしリストを作成できます。

```
- George Washington
- John Adams
- Thomas Jefferson
```

![表示された順序なしリスト](/assets/images/help/writing/unordered-list-rendered.png)

リストを順序付けするには、各行の前に数字を置きます。

```
1. James Madison
2. James Monroe
3. John Quincy Adams
```

![表示された順序付きリスト](/assets/images/help/writing/ordered-list-rendered.png)

#### 入れ子になったリスト

1 つ以上のリストアイテムを他のアイテムの下にインデントすることで、入れ子になったリストを作成できます。

{% data variables.product.product_name %}上の Web のエディタあるいは [Atom](https://atom.io/) のようなモノスペースフォントを使うテキストエディタを使って入れ子になったリストを作成するには、リストが揃って見えるように編集します。 入れ子になったリストアイテムの前に空白を、リストマーカーの文字 (`-` または `*`) が直接上位のアイテム内のテキストの一文字目の下に来るように入力してください。

```
1. 最初のリストアイテム
   - 最初の入れ子になったリストアイテム
     - 2 番目の入れ子になったリストアイテム
```

![並びがハイライトされた入れ子になったリスト](/assets/images/help/writing/nested-list-alignment.png)

![2 レベルの入れ子になったアイテムを持つリスト](/assets/images/help/writing/nested-list-example-1.png)

モノスペースフォントを使っていない {% data variables.product.product_name %}のコメントエディタで入れ子になったリストを作成するには、入れ子になったリストのすぐ上にあるリストアイテムを見て、そのアイテムの内容の前にある文字数を数えます。 そして、その数だけ空白を入れ子になったリストアイテムの前に入力します。

この例では、入れ子になったリストアイテムをリストアイテム `100. 最初のリストアイテム` の下に、最低 5 つの空白で入れ子になったリストアイテムをインデントさせることで追加できます。これは、`最初のリストアイテム`の前に 5 文字 (`100. `) があるからです。

```
100. 最初のリストアイテム
     - 最初の入れ子になったリストアイテム
```

![入れ子になったリストアイテムを持つリスト](/assets/images/help/writing/nested-list-example-3.png)

同じ方法で、複数レベルの入れ子になったリストを作成できます。 たとえば、最初の入れ子になったリストアイテムは内容である`最初の入れ子になったリストアイテム`の前に 7 つの空白 (`␣␣␣␣␣-␣`) があるため、2 番目の入れ子になったリストアイテムは 7 つの空白でインデントしなければならないでしょう。

```
100. 最初のリストアイテム
     - 最初の入れ子になったリストアイテム
       - 2 番目の入れ子になったリストアイテム
```

![2 レベルの入れ子になったアイテムを持つリスト](/assets/images/help/writing/nested-list-example-2.png)

[GitHub Flavored Markdown の仕様](https://github.github.com/gfm/#example-265)には、もっと多くのサンプルがあります。

### タスクリスト

{% data reusables.repositories.task-list-markdown %}

タスクリストアイテムの説明が括弧で始まる場合、その括弧を "\" でエスケープする必要があります。

`- [ ] \(オプション) フォローアップの Issue のオープン`

詳しい情報については[タスクリストについて](/articles/about-task-lists)を参照してください。

### 人や Team のメンション

{% data variables.product.product_name %}上の人あるいは [Team](/articles/setting-up-teams/) は、`@` に加えてユーザ名もしくは Team 名を入力することでメンションできます。 This will trigger a notification and bring their attention to the conversation. コメントを編集してユーザ名や Team 名をメンションすれば、人々に通知を受信してもらえます。 For more information about notifications, see {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" %}"[About notifications](/github/managing-subscriptions-and-notifications-on-github/about-notifications){% else %}"[About notifications](/github/receiving-notifications-about-activity-on-github/about-notifications){% endif %}."

`@github/support これらのアップデートについてどう思いますか？`

![表示された @メンション](/assets/images/help/writing/mention-rendered.png)

親チームにメンションすると、その子チームのメンバーも通知を受けることになり、複数のグループの人々とのコミュニケーションがシンプルになります。 詳しい情報については[Team について](/articles/about-teams)を参照してください。

`@` シンボルを入力すると、プロジェクト上の人々あるいは Team のリストが現れます。 このリストは入力していくにつれて絞り込まれていくので、探している人あるいは Team の名前が見つかり次第、矢印キーを使ってその名前を選択し、Tab キーまたは Enter キーを押して名前の入力を完了できます。 Team については、@organization/team-name と入力すればそのチームの全メンバーにその会話をサブスクライブしてもらえます。

オートコンプリートの結果は、リポジトリのコラボレータとそのスレッドのその他の参加者に限定されます。

### Issue およびプルリクエストの参照

`#` を入力して、リポジトリ内のサジェストされた Issue およびプルリクエストのリストを表示させることができます。 Issue あるいはプルリクエストの番号あるいはタイトルを入力してリストをフィルタリングし、Tab キーまたは Enter キーを押して、ハイライトされた結果の入力を完了してください。

詳しい情報については[自動リンクされた参照と URL](/articles/autolinked-references-and-urls) を参照してください。

### 外部リソースの参照

{% data reusables.repositories.autolink-references %}

### コンテンツの添付

{% data variables.product.prodname_github_app %} には、登録されたドメインにリンクする URL に対する情報を {% data variables.product.product_name %} 内で提供するものがあります。 {% data variables.product.product_name %} は、アプリケーションが提供した情報を Issue あるいはプルリクエストのボディもしくはコメント中の URL の下に表示します。

![コンテンツの添付](/assets/images/help/writing/content-attachment.png)

To see content attachments, you must have a {% data variables.product.prodname_github_app %} that uses the Content Attachments API installed on the repository.{% if currentVersion == "free-pro-team@latest" %} For more information, see "[Installing an app in your personal account](/articles/installing-an-app-in-your-personal-account)" and "[Installing an app in your organization](/articles/installing-an-app-in-your-organization)."{% endif %}

コンテンツの添付は、Markdown のリンクの一部になっている URL には表示されません。

コンテンツの添付を利用する {% data variables.product.prodname_github_app %} の構築に関する詳しい情報については、「[コンテンツの添付を使用する](/apps/using-content-attachments)」を参照してください。

### 絵文字の利用

`:EMOJICODE:` を入力して、書き込みに絵文字を追加できます。

`@octocat :+1: このPRは素晴らしいです - マージできますね！ :shipit:`

![表示された絵文字](/assets/images/help/writing/emoji-rendered.png)

`:` を入力すると、絵文字のサジェストリストが表示されます。 このリストは、入力を進めるにつれて絞り込まれていくので、探している絵文字が見つかったら、**Tab** または **Enter** を押すと、ハイライトされているものが入力されます。

利用可能な絵文字とコードの完全なリストについては、[emoji-cheat-sheet.com](http://emoji-cheat-sheet.com)を参照してください。

### パラグラフ

テキスト行の間に空白行を残すことで、新しいパラグラフを作成できます。

### Markdown のフォーマットの無視

{% data variables.product.product_name %}に対し、Markdown のキャラクタの前に "\" を使うことで、Markdown のフォーマットを無視 (エスケープ) させることができます

`\*新しいプロジェクト\* を \*古いプロジェクト\* にリネームしましょう`

![表示されたエスケープキャラクタ](/assets/images/help/writing/escaped-character-rendered.png)

詳しい情報については Daring Fireball の [Markdown Syntax](https://daringfireball.net/projects/markdown/syntax#backslash) を参照してください。

### 参考リンク

- [{% data variables.product.prodname_dotcom %} Flavored Markdown の仕様](https://github.github.com/gfm/)
- [GitHub 上での書き込みと書式設定について](/articles/about-writing-and-formatting-on-github)
- [高度なフォーマットを使用して作業する](/articles/working-with-advanced-formatting)
- [Markdown をマスターする](https://guides.github.com/features/mastering-markdown/)
