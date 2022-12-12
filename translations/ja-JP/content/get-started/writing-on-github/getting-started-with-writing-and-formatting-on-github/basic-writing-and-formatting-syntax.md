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
ms.openlocfilehash: e8df0930f675834c120bbe187924f9696142e09f
ms.sourcegitcommit: e4069b5613c10d74954185995d0fb73224079463
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/17/2022
ms.locfileid: '148169249'
---
## 見出し

見出しを作成するには、1 つから 6 つの <kbd>#</kbd> シンボルを見出しのテキストの前に追加します。 使用する <kbd>#</kbd> の個数によって見出しのサイズが決まります。

```markdown
# The largest heading
## The second largest heading
###### The smallest heading
```

![表示された H1、H2、H6 のヘッディング](/assets/images/help/writing/headings-rendered.png)

2 つ以上の見出しを使用すると、GitHub では自動的に目次が生成されます。この目次には、ファイル ヘッダー内の {% octicon "list-unordered" aria-label="The unordered list icon" %} をクリックするとアクセスできます。 各見出しのタイトルが目次に一覧表示され、タイトルをクリックして選択したセクションに移動できます。 

![目次アイコンが強調表示されているスクリーンショット](/assets/images/help/repository/headings_toc.png)

## テキストのスタイル設定

コメント フィールドと `.md` ファイルでは、太字、斜体、取り消し線、下付き、上付きのテキストで強調を示すことができます。  

| スタイル | 構文 | キーボード ショートカット | 例 | 出力 |
| --- | --- | --- | --- | --- |
| 太字 | `** **` または `__ __`| <kbd>Command</kbd>+<kbd>B</kbd> (Mac) または <kbd>Ctrl</kbd>+<kbd>B</kbd> (Windows/Linux) | `**This is bold text**` | **これは太字のテキストです** |
| [斜体] | `* *` または `_ _`    | <kbd>Command</kbd>+<kbd>I</kbd> (Mac) または <kbd>Ctrl</kbd>+<kbd>I</kbd> (Windows/Linux) | `*This text is italicized*` | *このテキストは斜体です* |
| 取り消し線 | `~~ ~~` | | `~~This was mistaken text~~` | ~~これは間違ったテキストでした~~ |
| 太字および太字中にある斜体 | `** **` および `_ _` | | `**This text is _extremely_ important**` | **このテキストは _きわめて_ 重要です** |
| 全体が太字かつ斜体 | `*** **_` | | `_*_All this text is important_*_` | _ *_すべてのテキストが重要です_** |
| Subscript | `<sub> </sub>` | | `<sub>This is a subscript text</sub>` | <sub>これは下付きテキストです</sub> |
| Superscript | `<sup> </sup>` | | `<sup>This is a superscript text</sup>` | <sup>これは上付きテキストです</sup> |

## テキストの引用

<kbd>></kbd> を使用してテキストを引用符で囲みます。

```markdown
Text that is not a quote

> Text that is a quote
```

![表示された引用テキスト](/assets/images/help/writing/quoted-text-rendered.png)

{% tip %}

**ヒント**: 会話を表示するときに、テキストを強調表示して「<kbd>R</kbd>」と入力することで、コメント内のテキストを自動的に引用符で囲むことができます。{% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} をクリックしてコメント全体を引用し、続いて **返信を引用** します。 キーボード ショートカットの詳細については、「[キーボード ショートカット](/articles/keyboard-shortcuts/)」を参照してください。

{% endtip %}

## コードの引用

単一のバッククォートで文章内のコードやコマンドを引用できます。 バッククォート内のテキストはフォーマットされません。 また、<kbd>Command</kbd> + <kbd>E</kbd> キー (Mac) または <kbd>Ctrl</kbd> + <kbd>E</kbd> キー (Windows/Linux) のキーボード ショートカットを押して、Markdown 行内にコード ブロックのバッククォートを挿入することもできます。

```markdown
Use `git status` to list all new or modified files that haven't yet been committed.
```

![表示されたインラインのコードブロック](/assets/images/help/writing/inline-code-rendered.png)

独立したブロック内にコードあるいはテキストをフォーマットするには、3 重のバッククォートを使用します。

<pre>
Some basic Git commands are:
```
git status
git add
git commit
```
</pre>

![表示されたコードブロック](/assets/images/help/writing/code-block-rendered.png)

詳細については、「[コード ブロックの作成と強調表示](/articles/creating-and-highlighting-code-blocks)」を参照してください。

{% data reusables.user-settings.enabling-fixed-width-fonts %}

## サポートされているカラー モデル

issue、pull request、ディスカッションでは、バックティックを使って文内の色を呼び出すことができます。 バックティック内でサポートされているカラー モデルでは、色の視覚化が表示されます。

```markdown
The background color should be `#ffffff` for light mode and `#0d1117` for dark mode.
```

![レンダリングでサポートされているカラー モデル。](/assets/images/help/writing/supported-color-models-rendered.png)

現在サポートされているカラー モデルを次に示します。

| Color | 構文 | 例 | 出力 |
| --- | --- | --- | --- |
| HEX | <code>\`#RRGGBB\`</code> | <code>\`#0969DA\`</code> | ![HEX 形式でレンダリングされたサポートされているカラー モデル。](/assets/images/help/writing/supported-color-models-hex-rendered.png) |
| RGB | <code>\`rgb(R,G,B)\`</code> | <code>\`rgb(9, 105, 218)\`</code> | ![RGB 形式でレンダリングされたサポートされているカラー モデル。](/assets/images/help/writing/supported-color-models-rgb-rendered.png) |
| HSL | <code>\`hsl(H,S,L)\`</code> | <code>\`hsl(212, 92%, 45%)\`</code> | ![HSL 形式でレンダリングされたサポートされているカラー モデル。](/assets/images/help/writing/supported-color-models-hsl-rendered.png) |

{% note %}

**注:**

- サポートされているカラー モデルでは、バックティック内の先頭または末尾にスペースを含めることはできません。
- 色の視覚化は、issue、pull request、ディスカッションでのみサポートされます。

{% endnote %}

## リンク

インライン リンクを作成するには、リンク テキストを角かっこ `[ ]` で囲み、URL をかっこ `( )` で囲みます。 また、キーボード ショートカット <kbd>Command</kbd> + <kbd>K</kbd> を使ってリンクを作成することもできます。{% ifversion fpt or ghae > 3.3 or ghes > 3.3 or ghec %}テキストが選ばれている場合は、クリップボードから URL を貼り付けて、選択項目からリンクを自動的に作成できます。{% endif %}

{% ifversion fpt or ghae > 3.5 or ghes > 3.5 or ghec %}テキストを強調表示にして、キーボード ショートカット <kbd>Command</kbd> + <kbd>V</kbd> を使うことで、Markdown ハイパーリンクを作ることもできます。 テキストをリンクに置き換える場合は、キーボード ショートカット <kbd>Command</kbd> + <kbd>Shift</kbd> + <kbd>V</kbd> を使います。{% endif %}

`This site was built using [GitHub Pages](https://pages.github.com/).`

![表示されたリンク](/assets/images/help/writing/link-rendered.png)

{% tip %}

**ヒント**: {% data variables.product.product_name %} では、コメント中に適正な URL が記述されていれば自動的にリンクが生成されます。 詳細については、「[自動リンクされた参照と URL](/articles/autolinked-references-and-urls)」を参照してください。

{% endtip %}

## セクションリンク

{% data reusables.repositories.section-links %}

## Relative links (相対リンク)

{% data reusables.repositories.relative-links %}

## 画像

<kbd>!</kbd> を追加して、代替テキストを `[ ]` 内にラップすると、画像を表示できます。 次に、イメージのリンクをかっこ `()` で囲みます。

`![This is an image](https://myoctocat.com/assets/images/base-octocat.svg)`

![レンダリングされたイメージ](/assets/images/help/writing/image-rendered.png)

{% data variables.product.product_name %} では、問題へのイメージの埋め込み、プル要求{% ifversion fpt or ghec %}、ディスカッション{% endif %}、コメントと `.md` ファイルがサポートされます。 リポジトリからイメージを表示したり、オンライン イメージにリンクを追加したり、イメージをアップロードしたりできます。 詳細については、「[アセットをアップロードする](#uploading-assets)」を参照してください。

{% tip %}

**ヒント**: リポジトリ内のイメージを表示する場合は、絶対リンクではなく相対リンクを使用する必要があります。

{% endtip %}

相対リンクを使用して画像を表示する例を次に示します。

| Context | 相対リンク |
| ------ | -------- |
| 同じブランチ上の `.md` ファイル内 | `/assets/images/electrocat.png` |
| 別のブランチ上の `.md` ファイル内 | `/../main/assets/images/electrocat.png` |
| リポジトリの問題、プル要求、コメント内 | `../blob/main/assets/images/electrocat.png?raw=true` |
| 別のリポジトリ内の `.md` ファイル内 | `/../../../../github/docs/blob/main/assets/images/electrocat.png` |
| 別のリポジトリの問題、プル要求、コメント内 | `../../../github/docs/blob/main/assets/images/electrocat.png?raw=true` |

{% note %}

**注**: 上記の表の最後の 2 つの相対リンクは、ビューアーがこれらのイメージを含むプライベート リポジトリに対して、少なくとも読み取りアクセス権を持っている場合にのみ、プライベート リポジトリ内のイメージについて機能します。

{% endnote %}

詳細については、「[相対リンク](#relative-links)」を参照してください。

{% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %}
### イメージが表示されるテーマの指定

HTML の `<picture>` 要素と `prefers-color-scheme` メディア機能を組み合わせて使って、Markdown で画像が表示されるテーマを指定できます。 淡色モードと濃色モードを区別するため、2 つのオプションを使用できます。 これらのオプションを使用して、暗い背景または明るい背景用に最適化された画像を表示できます。 これは、透明な PNG イメージの場合に特に有用です。

たとえば、次のコードでは、明るいテーマの太陽の画像と暗いテーマの月が表示されます。

{% data reusables.getting-started.picture-element-example %}

URL に追加されたフラグメント (`#gh-dark-mode-only` または `#gh-light-mode-only`) を使うことでテーマに基づいて画像を指定する古い方法は非推奨となり、上記の新しい方法に置き換えられて削除されます。
{% endif %}

## リスト

1 つまたは複数の行の前に <kbd>-</kbd>、<kbd>*</kbd>、または <kbd>+</kbd> を置くことで、順序なしリストを作成できます。

```markdown
- George Washington
* John Adams
+ Thomas Jefferson
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

{% data variables.product.product_name %} 上の Web エディター、または [{% data variables.product.prodname_vscode %}](https://code.visualstudio.com/) のようなモノスペース フォントを使用するテキスト エディターを使って、入れ子になったリストを作成するには、リストが揃って見えるように編集できます。 入れ子になったリスト アイテムの前に空白を、リスト マーカー文字 (<kbd>-</kbd> または <kbd>*</kbd>) が直接上位のアイテム内のテキストの一文字目の下に来るように入力してください。

```markdown
1. First list item
   - First nested list item
     - Second nested list item
```

{% tip %}

**注**: Web ベースのエディターでは、最初に目的の行を強調表示し、次に <kbd>Tab</kbd> または <kbd>Shift</kbd>+<kbd>Tab</kbd> を使用して、1 行以上のテキストをインデントまたはデデントできます。

{% endtip %}

![並びがハイライトされた入れ子になったリスト](/assets/images/help/writing/nested-list-alignment.png)

![2 レベルの入れ子になったアイテムを持つリスト](/assets/images/help/writing/nested-list-example-1.png)

モノスペースフォントを使っていない {% data variables.product.product_name %}のコメントエディタで入れ子になったリストを作成するには、入れ子になったリストのすぐ上にあるリストアイテムを見て、そのアイテムの内容の前にある文字数を数えます。 そして、その数だけ空白を入れ子になったリストアイテムの前に入力します。

この例では、入れ子になったリスト アイテムを少なくとも 5 つのスペースでインデントすることで、リスト項目 `100. First list item` の下に入れ子になったリスト アイテムを追加できます。`First list item` の前に 5 文字 (`100. `) があるためです。

```markdown
100. First list item
     - First nested list item
```

![入れ子になったリストアイテムを持つリスト](/assets/images/help/writing/nested-list-example-3.png)   

同じ方法で、複数レベルの入れ子になったリストを作成できます。 たとえば、最初の入れ子になったリスト アイテムは入れ子になったリストコンテンツ `First nested list item` の前に 7 文字 (`␣␣␣␣␣-␣`)があるため、2 番目の入れ子になったリスト アイテムを 7 つのスペースでインデントする必要があります。

```markdown
100. First list item
     - First nested list item
       - Second nested list item
```

![2 レベルの入れ子になったアイテムを持つリスト](/assets/images/help/writing/nested-list-example-2.png)    

その他の例については、「[GitHub 用の Markdown 仕様](https://github.github.com/gfm/#example-265)」を参照してください。

## タスク リスト

{% data reusables.repositories.task-list-markdown %}

タスク リスト アイテムの説明がかっこで始まる場合、そのかっこを <kbd>\\</kbd> でエスケープする必要があります。

`- [ ] \(Optional) Open a followup issue`

詳細については、「[タスク リストについて](/articles/about-task-lists)」を参照してください。

## 人や Team のメンション

<kbd>@</kbd> とユーザー名またはチーム名を入力することで、人または[チーム](/articles/setting-up-teams/)を {% data variables.product.product_name %} でメンションできます。 これにより通知がトリガーされ、会話に注意が向けられます。 コメントを編集してユーザ名や Team 名をメンションすれば、人々に通知を受信してもらえます。 通知の詳細については、「[通知について](/github/managing-subscriptions-and-notifications-on-github/about-notifications)」を参照してください。

{% note %}

**注**: ある人について、その人がリポジトリへの読み取りアクセス権をもっており、リポジトリが組織によって所有されている場合に、その人が組織のメンバーである場合にのみ、メンションに関する通知が送信されます。

{% endnote %}

`@github/support What do you think about these updates?`

![レンダリングされた @mention](/assets/images/help/writing/mention-rendered.png)

親チームにメンションすると、その子チームのメンバーも通知を受けることになり、複数のグループの人々とのコミュニケーションがシンプルになります。 詳細については、「[Team について](/articles/about-teams)」を参照してください。

<kbd>@</kbd> シンボルを入力すると、プロジェクト上の人々あるいはチームのリストが現れます。 このリストは入力していくにつれて絞り込まれていくので、探している人あるいは Team の名前が見つかり次第、矢印キーを使ってその名前を選択し、Tab キーまたは Enter キーを押して名前の入力を完了できます。 チームについては、@organization/team-name と入力すればそのチームの全メンバーにその会話をサブスクライブしてもらえます。

オートコンプリートの結果は、リポジトリのコラボレータとそのスレッドのその他の参加者に限定されます。

## Issue およびプルリクエストの参照

<kbd>#</kbd> と入力して、リポジトリ内のサジェストされた Issue とプル要求のリストを表示させることができます。 Issue あるいはプルリクエストの番号あるいはタイトルを入力してリストをフィルタリングし、Tab キーまたは Enter キーを押して、ハイライトされた結果の入力を完了してください。

詳細については、「[自動リンクされた参照と URL](/articles/autolinked-references-and-urls)」を参照してください。

## 外部リソースの参照

{% data reusables.repositories.autolink-references %}

{% ifversion ghes < 3.4 %}
## コンテンツの添付

{% data variables.product.prodname_github_apps %} には、登録されたドメインにリンクする URL に対する情報を {% data variables.product.product_name %} 内で提供するものがあります。 {% data variables.product.product_name %} は、アプリケーションが提供した情報を Issue あるいはプルリクエストのボディもしくはコメント中の URL の下に表示します。

![コンテンツの添付](/assets/images/github-apps/content_reference_attachment.png)

コンテンツ添付ファイルを表示するには、リポジトリにインストールされている Content Attachments API を使用する {% data variables.product.prodname_github_app %} が必要です。{% ifversion fpt or ghec %}詳細については、「[個人アカウントでアプリケーションをインストールする](/articles/installing-an-app-in-your-personal-account)」および「[Organization でアプリケーションをインストールする](/articles/installing-an-app-in-your-organization)」を参照してください。{% endif %}

コンテンツの添付は、Markdown のリンクの一部になっている URL には表示されません。

コンテンツの添付を利用する {% data variables.product.prodname_github_app %} の構築に関する詳細については、「[添付コンテンツを使用する](/apps/using-content-attachments)」を参照してください。{% endif %}

## アセットをアップロードする

ドラッグアンドドロップ、ファイルブラウザから選択、または貼り付けることにより、画像などのアセットをアップロードできます。 アセットをリポジトリ内の Issue、プル要求、コメント、`.md` ファイルにアップロードできます。

## 絵文字の利用

`:EMOJICODE:` と入力 すると、絵文字を書き込みに追加できます。

`@octocat :+1: This PR looks great - it's ready to merge! :shipit:`

![表示された絵文字](/assets/images/help/writing/emoji-rendered.png)

<kbd>:</kbd> と入力すると、絵文字のサジェストリストが表示されます。 このリストは、入力を進めるにつれて絞り込まれていくので、探している絵文字が見つかり次第、**Tab** または **Enter** を押して、ハイライトされているものを入力してください。

使用可能な絵文字とコードの完全な一覧については、「[絵文字チート シート](https://github.com/ikatyang/emoji-cheat-sheet/blob/master/README.md)」を参照してください。

## 段落

テキスト行の間に空白行を残すことで、新しいパラグラフを作成できます。

## 脚注

次の角かっこ構文を使用して、コンテンツに脚注を追加できます。

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

脚注は次のようにレンダリングされます。

![レンダリングされた脚注](/assets/images/site/rendered-footnote.png)

{% tip %}

**注**: Markdown 内の脚注の位置は、脚注がレンダリングされる場所には影響しません。 脚注を参照した直後に脚注を書き込むことができます。脚注は Markdown の下部に引き続きレンダリングされます。

脚注は Wiki ではサポートされていません。

{% endtip %}

## コメントを使用してコンテンツを非表示にする

{% data variables.product.product_name %} に対し、コンテンツを HTML コメント内に配置することで、レンダリングされた Markdown からコンテンツを非表示にすることができます。

<pre>
&lt;!-- This content will not appear in the rendered Markdown --&gt;
</pre>

## Markdown のフォーマットの無視

{% data variables.product.product_name %} に対し、Markdown のキャラクタの前に <kbd>\\</kbd> を使用することで、Markdown のフォーマットを無視 (エスケープ) させることができます。

`Let's rename \*our-new-project\* to \*our-old-project\*.`

![表示されたエスケープキャラクタ](/assets/images/help/writing/escaped-character-rendered.png)

詳細については、Daring Fireball の「[Markdown 構文](https://daringfireball.net/projects/markdown/syntax#backslash)」を参照してください。

## Markdown レンダリングの無効化

{% data reusables.repositories.disabling-markdown-rendering %}

## 参考資料

- [{% data variables.product.prodname_dotcom %} Flavored Markdown の仕様](https://github.github.com/gfm/)
- [GitHub 上での執筆とフォーマットについて](/articles/about-writing-and-formatting-on-github)
- [Working with advanced formatting (高度な書式設定を使った作業)](/articles/working-with-advanced-formatting)
- [{% data variables.product.prodname_dotcom %} での記述に関するクイックスタート](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/quickstart-for-writing-on-github)
