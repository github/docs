---
title: 创建和突显代码块
intro: 通过围栏代码块和启用语法突显来分享代码样本
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
ms.contentlocale: zh-CN
ms.lasthandoff: 09/11/2022
ms.locfileid: '147882415'
---
## 隔离代码块

通过在代码块的前后输入三反引号 <code>\`\`\`</code>，可创建围栏代码块。 我们建议在代码块的前后各留一个空白行，使原始格式更易辨读。

<pre>
```
function test() {
  console.log("notice the blank line before this function?");
}
```
</pre>

![渲染的围栏代码块](/assets/images/help/writing/fenced-code-block-rendered.png)

{% tip %}

**提示：** 要在列表中保留格式，请确保将非围栏代码块缩进八个空格。

{% endtip %}

要在围栏代码块中显示三重倒引号，请将其包在四个倒引号内。


<pre>
````
```
Look! You can see my backticks.
```
````
</pre>

![使用倒引号块呈现的围栏代码](/assets/images/help/writing/fenced-code-show-backticks-rendered.png)

{% data reusables.user-settings.enabling-fixed-width-fonts %}

## 语法突出显示

<!-- If you make changes to this feature, check whether any of the changes affect languages listed in /get-started/learning-about-github/github-language-support. If so, please update the language support article accordingly. -->

您可以添加可选的语言标识符，以在围栏代码块中启用语法突显。

例如，要语法突显 Ruby 代码：

    ```ruby
    require 'redcarpet'
    markdown = Redcarpet.new("Hello World!")
    puts markdown.to_html
    ```

![渲染的启用 Ruby 语法突显的代码块](/assets/images/help/writing/code-block-syntax-highlighting-rendered.png)

我们使用 [Linguist](https://github.com/github/linguist) 执行语言检测，并选择[第三方语法](https://github.com/github/linguist/blob/master/vendor/README.md) 以强调语法。 你可以在[语言 YAML 文件](https://github.com/github/linguist/blob/master/lib/linguist/languages.yml)中找出哪些关键字有效。

{% ifversion mermaid %}
## 创建关系图

你也可以使用代码块在 Markdown 中创建关系图。 GitHub 支持 Mermaid、GeoJSON、TopoJSON 和 ASCII STL 语法。 有关详细信息，请参阅“[创建关系图](/get-started/writing-on-github/working-with-advanced-formatting/creating-diagrams)”。

{% endif %}
## 延伸阅读

- [{% data variables.product.prodname_dotcom %} 样式的 Markdown 规范](https://github.github.com/gfm/)
- [基本撰写和格式设置语法](/articles/basic-writing-and-formatting-syntax)
