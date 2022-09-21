---
title: コードブロックの作成と強調表示
intro: コードのサンプルをコードブロックにし、構文を強調表示して共有しましょう。
redirect_from:
  - /articles/creating-and-highlighting-code-blocks
  - /github/writing-on-github/creating-and-highlighting-code-blocks
  - /github/writing-on-github/working-with-advanced-formatting/creating-and-highlighting-code-blocks
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Create code blocks
ms.openlocfilehash: ba0b49795df16fbafc77ef43c6fef58684162709
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '147882418'
---
## フェンスされたコード ブロック

三連バッククォート <code>\`\`\`</code> をコード ブロック前後に入力すると、フェンスされたコード ブロックを作成できます。 ソースコードを読みやすくするために、コードブロックの前後に空の行を入れることをお勧めします。

<pre>
```
function test() {
  console.log("notice the blank line before this function?");
}
```
</pre>

![表示されたコードブロック](/assets/images/help/writing/fenced-code-block-rendered.png)

{% tip %}

**参考:** リスト内でフォーマットを保持するために、フェンスされていないコード ブロックをスペース 8 つでインデントします。

{% endtip %}

フェンスされたコード ブロックの中に 3 重のバッククォートを表示するには、4 重のバッククォートで囲みます。


<pre>
````
```
Look! You can see my backticks.
```
````
</pre>

![表示されたバッククォート付きのコード ブロック](/assets/images/help/writing/fenced-code-show-backticks-rendered.png)

{% data reusables.user-settings.enabling-fixed-width-fonts %}

## 構文の強調表示

<!-- If you make changes to this feature, check whether any of the changes affect languages listed in /get-started/learning-about-github/github-language-support. If so, please update the language support article accordingly. -->

言語識別子を追加して、コードブロックの構文を強調表示することができます。

たとえば、Ruby コードの構文を強調表示するには:

    ```ruby
    require 'redcarpet'
    markdown = Redcarpet.new("Hello World!")
    puts markdown.to_html
    ```

![Ruby の構文を強調して表示されたコードブロック](/assets/images/help/writing/code-block-syntax-highlighting-rendered.png)

[Linguist](https://github.com/github/linguist) を使って言語検出を行い、[サードパーティの文法](https://github.com/github/linguist/blob/master/vendor/README.md)を選んで構文の強調表示を行います。 どのキーワードが有効かは、[languages YAML ファイル](https://github.com/github/linguist/blob/master/lib/linguist/languages.yml)で確認できます。

{% ifversion mermaid %}
## ダイアグラムの作成

コード ブロックを使って Markdown でダイアグラムを作成することもできます。 GitHub は、Mermaid、GeoJSON、TopoJSON、ASCII STL 構文をサポートしています。 詳細については、「[Creating diagrams (ダイアグラムの作成)](/get-started/writing-on-github/working-with-advanced-formatting/creating-diagrams)」を参照してください。

{% endif %}
## 参考資料

- [{% data variables.product.prodname_dotcom %} Flavored Markdown の仕様](https://github.github.com/gfm/)
- [Basic writing and formatting syntax (基本的な書き方とフォーマットの構文)](/articles/basic-writing-and-formatting-syntax)
