---
title: 基本的な書き方とフォーマットの構文
intro: シンプルな構文を使い、GitHub 上で文章やコードに洗練されたフォーマットを作り出してください。
redirect_from:
  - /articles/basic-writing-and-formatting-syntax
  - /github/writing-on-github/basic-writing-and-formatting-syntax
  - /github/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Basic formatting syntax
---

## ヘッディング

ヘッディングを作成するには、1 つから 6 つの <kbd>#</kbd> シンボルをヘッディングのテキストの前に追加します。 使用する <kbd>#</kbd> の数によって、ヘッディングのサイズが決まります。

```markdown
# The largest heading (最大のヘッディング)
## The second largest heading (2番目に大きなヘッディング)
###### The smallest heading (最も小さいヘッディング)
```

![表示された H1、H2、H6 のヘッディング](/assets/images/help/writing/headings-rendered.png)

When you use two or more headings, GitHub automatically generates a table of contents which you can access by clicking {% octicon "list-unordered" aria-label="The unordered list icon" %} within the file header. Each heading title is listed in the table of contents and you can click a title to navigate to the selected section.

![Screenshot highlighting the table of contents icon](/assets/images/help/repository/headings_toc.png)

## スタイル付きテキスト

You can indicate emphasis with bold, italic, strikethrough, subscript, or superscript text in comment fields and `.md` files.

| スタイル          | 構文                         | キーボードショートカット                                                                          | サンプル                                                | 出力                                    |
| ------------- | -------------------------- | ------------------------------------------------------------------------------------- | --------------------------------------------------- | ------------------------------------- |
| 太字            | `** **`もしくは`__ __`         | <kbd>Command</kbd>+<kbd>B</kbd> (Mac) or <kbd>Ctrl</kbd>+<kbd>B</kbd> (Windows/Linux) | `**これは太字のテキストです**`                                  | **これは太字のテキストです**                      |
| 斜体            | `* *`あるいは`_ _`             | <kbd>Command</kbd>+<kbd>I</kbd> (Mac) or <kbd>Ctrl</kbd>+<kbd>I</kbd> (Windows/Linux) | `*このテキストは斜体です*`                                     | *このテキストは斜体です*                         |
| 取り消し線         | `~~ ~~`                    |                                                                                       | `~~これは間違ったテキストでした~~`                                | ~~これは間違ったテキストでした~~                    |
| 太字および太字中にある斜体 | `** **`及び`_ _`             |                                                                                       | `**このテキストは_きわめて_ 重要です**`                            | **このテキストは_きわめて_重要です**                 |
| 全体が太字かつ斜体     | `*** ***`                  |                                                                                       | `***すべてのテキストがきわめて重要です***`                           | ***すべてのテキストがきわめて重要です***               |
| Subscript     | `<sub> </sub>` |                                                                                       | `<sub>This is a subscript text</sub>`   | <sub>This is a subscript text</sub>   |
| Superscript   | `<sup> </sup>` |                                                                                       | `<sup>This is a superscript text</sup>` | <sup>This is a superscript text</sup> |

## テキストの引用

You can quote text with a <kbd>></kbd>.

```markdown
Text that is not a quote

> Text that is a quote
```

![表示された引用テキスト](/assets/images/help/writing/quoted-text-rendered.png)

{% tip %}

**Tip:** When viewing a conversation, you can automatically quote text in a comment by highlighting the text, then typing <kbd>R</kbd>. {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} に続いて [** Quote reply**] をクリックすれば、コメント全体を引用できます。 キーボードショートカットに関する詳しい情報については、「[キーボードショートカット](/articles/keyboard-shortcuts/)」を参照してください。

{% endtip %}

## コードの引用

単一のバッククォートで文章内のコードやコマンドを引用できます。 バッククォート内のテキストはフォーマットされません。 You can also press the <kbd>Command</kbd>+<kbd>E</kbd> (Mac) or <kbd>Ctrl</kbd>+<kbd>E</kbd> (Windows/Linux) keyboard shortcut to insert the backticks for a code block within a line of Markdown.

```markdown
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

{% data reusables.user-settings.enabling-fixed-width-fonts %}

## Supported color models

In issues, pull requests, and discussions, you can call out colors within a sentence by using backticks. A supported color model within backticks will display a visualization of the color.

```markdown
The background color should be `#ffffff` for light mode and `#0d1117` for dark mode.
```

![Rendered supported color model.](/assets/images/help/writing/supported-color-models-rendered.png)

Here are the currently supported color models.

| Color | 構文                        | サンプル                      | 出力                                                                                                                    |
| ----- | ------------------------- | ------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| HEX   | <code>\`#RRGGBB\`</code> | <code>\`#0969DA\`</code> | ![Rendered supported color model in HEX format.](/assets/images/help/writing/supported-color-models-hex-rendered.png) |
| RGB   | <code>\`rgb(R,G,B)\`</code> | <code>\`rgb(9, 105, 218)\`</code> | ![Rendered supported color model in RGB format.](/assets/images/help/writing/supported-color-models-rgb-rendered.png) |
| HSL   | <code>\`hsl(H,S,L)\`</code> | <code>\`hsl(212, 92%, 45%)\`</code> | ![Rendered supported color model in HSL format.](/assets/images/help/writing/supported-color-models-hsl-rendered.png) |

{% note %}

**ノート:**

- A supported color model cannot have any leading or trailing spaces within the backticks.
- The visualization of the color is only supported in issues, pull requests, and discussions.

{% endnote %}

## リンク

リンクのテキストをブラケット `[ ]` で囲み、URL をカッコ `( )` で囲めば、インラインのリンクを作成できます。 You can also use the keyboard shortcut <kbd>Command</kbd>+<kbd>K</kbd> to create a link.{% ifversion fpt or ghae-issue-5434 or ghes > 3.3 or ghec %} When you have text selected, you can paste a URL from your clipboard to automatically create a link from the selection.{% endif %}

{% ifversion fpt or ghae-issue-7103 or ghes > 3.5 or ghec %} You can also create a Markdown hyperlink by highlighting the text and using the keyboard shortcut <kbd>Command</kbd>+<kbd>V</kbd>. If you'd like to replace the text with the link, use the keyboard shortcut <kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>V</kbd>.{% endif %}

`このサイトは [GitHub Pages](https://pages.github.com/) を使って構築されています。`

![表示されたリンク](/assets/images/help/writing/link-rendered.png)

{% tip %}

**ヒント:** {% data variables.product.product_name %}は、コメント中に適正な URL が書かれていれば自動的にリンクを生成します。 詳しい情報については[自動リンクされた参照と URL](/articles/autolinked-references-and-urls) を参照してください。

{% endtip %}

## セクションリンク

{% data reusables.repositories.section-links %}

## 相対リンク

{% data reusables.repositories.relative-links %}

## Images

You can display an image by adding <kbd>!</kbd> and wrapping the alt text in `[ ]`. Then wrap the link for the image in parentheses `()`.

`![This is an image](https://myoctocat.com/assets/images/base-octocat.svg)`

![Rendered Image](/assets/images/help/writing/image-rendered.png)

{% data variables.product.product_name %} supports embedding images into your issues, pull requests{% ifversion fpt or ghec %}, discussions{% endif %}, comments  and `.md` files. You can display an image from your repository, add a link to an online image, or upload an image. For more information, see "[Uploading assets](#uploading-assets)."

{% tip %}

**Tip:** When you want to display an image which is in your repository, you should use relative links instead of absolute links.

{% endtip %}

Here are some examples for using relative links to display an image.

| コンテキスト                                                      | Relative Link                                                          |
| ----------------------------------------------------------- | ---------------------------------------------------------------------- |
| In a `.md` file on the same branch                          | `/assets/images/electrocat.png`                                        |
| In a `.md` file on another branch                           | `/../main/assets/images/electrocat.png`                                |
| In issues, pull requests and comments of the repository     | `../blob/main/assets/images/electrocat.png?raw=true`                   |
| In a `.md` file in another repository                       | `/../../../../github/docs/blob/main/assets/images/electrocat.png`      |
| In issues, pull requests and comments of another repository | `../../../github/docs/blob/main/assets/images/electrocat.png?raw=true` |

{% note %}

**Note**: The last two relative links in the table above will work for images in a private repository only if the viewer has at least read access to the private repository which contains these images.

{% endnote %}

For more information, see "[Relative Links](#relative-links)."

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5559 %}
### Specifying the theme an image is shown to

You can specify the theme an image is displayed for in Markdown by using the HTML `<picture>` element in combination with the `prefers-color-scheme` media feature. We distinguish between light and dark color modes, so there are two options available. You can use these options to display images optimized for dark or light backgrounds. This is particularly helpful for transparent PNG images.

For example, the following code displays a sun image for light themes and a moon for dark themes:

```HTML
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://user-images.githubusercontent.com/25423296/163456776-7f95b81a-f1ed-45f7-b7ab-8fa810d529fa.png">
  <source media="(prefers-color-scheme: light)" srcset="https://user-images.githubusercontent.com/25423296/163456779-a8556205-d0a5-45e2-ac17-42d089e3c3f8.png">
  <img alt="Shows an illustrated sun in light color mode and a moon with stars in dark color mode." src="https://user-images.githubusercontent.com/25423296/163456779-a8556205-d0a5-45e2-ac17-42d089e3c3f8.png">
</picture>
```

The old method of specifying images based on the theme, by using a fragment appended to the URL (`#gh-dark-mode-only` or `#gh-light-mode-only`), is deprecated and will be removed in favor of the new method described above.
{% endif %}

## リスト

You can make an unordered list by preceding one or more lines of text with <kbd>-</kbd> or <kbd>*</kbd>.

```markdown
- George Washington
- John Adams
- Thomas Jefferson
```

![表示された順序なしリスト](/assets/images/help/writing/unordered-list-rendered.png)

リストを順序付けするには、各行の前に数字を置きます。

```markdown
1. James Madison
2. James Monroe
3. John Quincy Adams
```

![表示された順序付きリスト](/assets/images/help/writing/ordered-list-rendered.png)

### 入れ子になったリスト

1 つ以上のリストアイテムを他のアイテムの下にインデントすることで、入れ子になったリストを作成できます。

{% data variables.product.product_name %}上の Web のエディタあるいは [Atom](https://atom.io/) のようなモノスペースフォントを使うテキストエディタを使って入れ子になったリストを作成するには、リストが揃って見えるように編集します。 Type space characters in front of your nested list item, until the list marker character (<kbd>-</kbd> or <kbd>*</kbd>) lies directly below the first character of the text in the item above it.

```markdown
1. 最初のリストアイテム
   - 最初の入れ子になったリストアイテム
     - 2 番目の入れ子になったリストアイテム
```

{% tip %}

**Note**: In the web-based editor, you can indent or dedent one or more lines of text by first highlighting the desired lines and then using <kbd>Tab</kbd> or <kbd>Shift</kbd>+<kbd>Tab</kbd> respectively.

{% endtip %}

![並びがハイライトされた入れ子になったリスト](/assets/images/help/writing/nested-list-alignment.png)

![2 レベルの入れ子になったアイテムを持つリスト](/assets/images/help/writing/nested-list-example-1.png)

モノスペースフォントを使っていない {% data variables.product.product_name %}のコメントエディタで入れ子になったリストを作成するには、入れ子になったリストのすぐ上にあるリストアイテムを見て、そのアイテムの内容の前にある文字数を数えます。 そして、その数だけ空白を入れ子になったリストアイテムの前に入力します。

この例では、入れ子になったリストアイテムをリストアイテム `100. 最初のリストアイテム` の下に、最低 5 つの空白で入れ子になったリストアイテムをインデントさせることで追加できます。これは、`最初のリストアイテム`の前に 5 文字 (`100. `) があるからです。

```markdown
100. 最初のリストアイテム
     - 最初の入れ子になったリストアイテム
```

![入れ子になったリストアイテムを持つリスト](/assets/images/help/writing/nested-list-example-3.png)

同じ方法で、複数レベルの入れ子になったリストを作成できます。 For example, because the first nested list item has seven characters (`␣␣␣␣␣-␣`) before the nested list content `First nested list item`, you would need to indent the second nested list item by seven spaces.

```markdown
100. 最初のリストアイテム
     - 最初の入れ子になったリストアイテム
       - 2 番目の入れ子になったリストアイテム
```

![2 レベルの入れ子になったアイテムを持つリスト](/assets/images/help/writing/nested-list-example-2.png)

[GitHub Flavored Markdown の仕様](https://github.github.com/gfm/#example-265)には、もっと多くのサンプルがあります。

## タスクリスト

{% data reusables.repositories.task-list-markdown %}

If a task list item description begins with a parenthesis, you'll need to escape it with <kbd>\\</kbd>:

`- [ ] \(オプション) フォローアップの Issue のオープン`

詳しい情報については[タスクリストについて](/articles/about-task-lists)を参照してください。

## 人や Team のメンション

You can mention a person or [team](/articles/setting-up-teams/) on {% data variables.product.product_name %} by typing <kbd>@</kbd> plus their username or team name. これにより通知がトリガーされ、会話に注意が向けられます。 コメントを編集してユーザ名や Team 名をメンションすれば、人々に通知を受信してもらえます。 For more information about notifications, see "[About notifications](/github/managing-subscriptions-and-notifications-on-github/about-notifications)."

{% note %}

**Note:** A person will only be notified about a mention if the person has read access to the repository and, if the repository is owned by an organization, the person is a member of the organization.

{% endnote %}

`@github/support これらのアップデートについてどう思いますか？`

![表示された @メンション](/assets/images/help/writing/mention-rendered.png)

親チームにメンションすると、その子チームのメンバーも通知を受けることになり、複数のグループの人々とのコミュニケーションがシンプルになります。 詳しい情報については[Team について](/articles/about-teams)を参照してください。

Typing an <kbd>@</kbd> symbol will bring up a list of people or teams on a project. このリストは入力していくにつれて絞り込まれていくので、探している人あるいは Team の名前が見つかり次第、矢印キーを使ってその名前を選択し、Tab キーまたは Enter キーを押して名前の入力を完了できます。 Team については、@organization/team-name と入力すればそのチームの全メンバーにその会話をサブスクライブしてもらえます。

オートコンプリートの結果は、リポジトリのコラボレータとそのスレッドのその他の参加者に限定されます。

## Issue およびプルリクエストの参照

You can bring up a list of suggested issues and pull requests within the repository by typing <kbd>#</kbd>. Issue あるいはプルリクエストの番号あるいはタイトルを入力してリストをフィルタリングし、Tab キーまたは Enter キーを押して、ハイライトされた結果の入力を完了してください。

詳しい情報については[自動リンクされた参照と URL](/articles/autolinked-references-and-urls) を参照してください。

## 外部リソースの参照

{% data reusables.repositories.autolink-references %}

{% ifversion ghes < 3.4 %}
## コンテンツの添付

Some {% data variables.product.prodname_github_apps %} provide information in {% data variables.product.product_name %} for URLs that link to their registered domains. {% data variables.product.product_name %} は、アプリケーションが提供した情報を Issue あるいはプルリクエストのボディもしくはコメント中の URL の下に表示します。

![コンテンツの添付](/assets/images/github-apps/content_reference_attachment.png)

To see content attachments, you must have a {% data variables.product.prodname_github_app %} that uses the Content Attachments API installed on the repository.{% ifversion fpt or ghec %} For more information, see "[Installing an app in your personal account](/articles/installing-an-app-in-your-personal-account)" and "[Installing an app in your organization](/articles/installing-an-app-in-your-organization)."{% endif %}

コンテンツの添付は、Markdown のリンクの一部になっている URL には表示されません。

For more information about building a {% data variables.product.prodname_github_app %} that uses content attachments, see "[Using Content Attachments](/apps/using-content-attachments)."{% endif %}

## アセットをアップロードする

ドラッグアンドドロップ、ファイルブラウザから選択、または貼り付けることにより、画像などのアセットをアップロードできます。 アセットをリポジトリ内の Issue、プルリクエスト、コメント、および `.md` ファイルにアップロードできます。

## 絵文字の利用

`:EMOJICODE:` を入力して、書き込みに絵文字を追加できます。

`@octocat :+1: このPRは素晴らしいです - マージできますね！ :shipit:`

![表示された絵文字](/assets/images/help/writing/emoji-rendered.png)

Typing <kbd>:</kbd> will bring up a list of suggested emoji. このリストは、入力を進めるにつれて絞り込まれていくので、探している絵文字が見つかったら、**Tab** または **Enter** を押すと、ハイライトされているものが入力されます。

利用可能な絵文字とコードの完全なリストについては、[絵文字チートシート](https://github.com/ikatyang/emoji-cheat-sheet/blob/master/README.md)を参照してください。

## パラグラフ

テキスト行の間に空白行を残すことで、新しいパラグラフを作成できます。

{% ifversion fpt or ghae or ghes > 3.2 or ghec %}
## Footnotes

You can add footnotes to your content by using this bracket syntax:

```
Here is a simple footnote[^1].

A footnote can also have multiple lines[^2].  

You can also use words, to fit your writing style more closely[^note].

[^1]: My reference.
[^2]: Every new line should be prefixed with 2 spaces.  
  This allows you to have a footnote with multiple lines.
[^note]:
    Named footnotes will still render with numbers instead of the text but allow easier identification and linking.  
    This footnote also has been made with a different syntax using 4 spaces for new lines.
```

The footnote will render like this:

![Rendered footnote](/assets/images/site/rendered-footnote.png)

{% tip %}

**Note**: The position of a footnote in your Markdown does not influence where the footnote will be rendered. You can write a footnote right after your reference to the footnote, and the footnote will still render at the bottom of the Markdown.

Footnotes are not supported in wikis.

{% endtip %}
{% endif %}

## Hiding content with comments

You can tell {% data variables.product.product_name %} to hide content from the rendered Markdown by placing the content in an HTML comment.

<pre>
&lt;!-- This content will not appear in the rendered Markdown --&gt;
</pre>

## Markdown のフォーマットの無視

You can tell {% data variables.product.product_name %} to ignore (or escape) Markdown formatting by using <kbd>\\</kbd> before the Markdown character.

`\*新しいプロジェクト\* を \*古いプロジェクト\* にリネームしましょう`

![表示されたエスケープキャラクタ](/assets/images/help/writing/escaped-character-rendered.png)

詳しい情報については Daring Fireball の [Markdown Syntax](https://daringfireball.net/projects/markdown/syntax#backslash) を参照してください。

{% ifversion fpt or ghes > 3.2 or ghae-issue-5232 or ghec %}

## Disabling Markdown rendering

{% data reusables.repositories.disabling-markdown-rendering %}

{% endif %}

## 参考リンク

- [{% data variables.product.prodname_dotcom %} Flavored Markdown の仕様](https://github.github.com/gfm/)
- [GitHub 上での書き込みと書式設定について](/articles/about-writing-and-formatting-on-github)
- [高度なフォーマットを使用して作業する](/articles/working-with-advanced-formatting)
- [Markdown をマスターする](https://guides.github.com/features/mastering-markdown/)
