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
---

## コードブロック

三連バッククォート <code>\`\`\`</code> をコードのブロック前後に入力すると、コードブロックを作成できます。 ソースコードを読みやすくするために、コードブロックの前後に空の行を入れることをお勧めします。

<pre>
```
function test() {
  console.log("この関数の前に空白行があるのがわかりますか?");
}
```
</pre>

![表示されたコードブロック](/assets/images/help/writing/fenced-code-block-rendered.png)

{% tip %}

**ヒント:** リスト内でフォーマットを保持するために、フェンスされていないコードのブロックをスペース 8 つでインデントしてください。

{% endtip %}

To display triple backticks in a fenced code block, wrap them inside quadruple backticks.


<pre>
````
```
Look! You can see my backticks.
```
````
</pre>

![Rendered fenced code with backticks block](/assets/images/help/writing/fenced-code-show-backticks-rendered.png)

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

構文強調表示のための言語検出の実行や[サードパーティの文法](https://github.com/github/linguist/blob/master/vendor/README.md)の選択には [Linguist](https://github.com/github/linguist) を使用します。 どのキーワードが有効かについては[言語 YAML ファイル](https://github.com/github/linguist/blob/master/lib/linguist/languages.yml)でご覧いただけます。

{% if mermaid %}
## Creating diagrams

You can also use code blocks to create diagrams in Markdown. GitHub supports Mermaid, geoJSON, topoJSON, and ASCII STL syntax. For more information, see "[Creating diagrams](/get-started/writing-on-github/working-with-advanced-formatting/creating-diagrams)."

{% endif %}
## 参考リンク

- [{% data variables.product.prodname_dotcom %} Flavored Markdown の仕様](https://github.github.com/gfm/)
- [基本的な書き方とフォーマットの構文](/articles/basic-writing-and-formatting-syntax)
