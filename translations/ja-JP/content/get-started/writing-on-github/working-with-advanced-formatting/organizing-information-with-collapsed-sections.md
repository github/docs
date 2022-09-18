---
title: セクションを折りたたんで情報を整理する
intro: '`<details>` タグで折りたたまれたセクションを作成することで、Markdown を合理化できます。'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
redirect_from:
  - /github/writing-on-github/working-with-advanced-formatting/organizing-information-with-collapsed-sections
shortTitle: Collapsed sections
ms.openlocfilehash: 1a1f0669ce401946f4a7a08dd1fd41893078e3d0
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '146273099'
---
## 折りたたみセクションの作成

閲覧者が希望により展開できる、折りたたみセクションを作成して、Markdown のセクションを一時的に隠すことができます。 たとえば、すべての閲覧者には関連しない、または興味がある可能性のない技術的な詳細を issue のコメントに含める場合、それらの詳細を折りたたみセクションに配置できます。

`<details>` ブロック内のすべての Markdown は、閲覧者が {% octicon "triangle-right" aria-label="The right triange icon" %} をクリックして詳細を展開するまで折りたたまれたままです。 {% octicon "triangle-right" aria-label="The right triange icon" %} の右側にラベルを作成するには、`<details>` ブロック内で `<summary>` タグを使用します。

````markdown
<details><summary>CLICK ME</summary>
<p>

#### We can hide anything, even code!

```ruby
   puts "Hello World"
```

</p>
</details>
````

Markdown はデフォルトで折りたたまれています。

![折りたたまれてレンダリング](/assets/images/help/writing/collapsed-section-view.png)

閲覧者が {% octicon "triangle-right" aria-label="The right triange icon" %} をクリックすると、詳細が展開されます。

![開いてレンダリング](/assets/images/help/writing/open-collapsed-section.png)

## 参考資料

- [{% data variables.product.prodname_dotcom %} Flavored Markdown の仕様](https://github.github.com/gfm/)
- [Basic writing and formatting syntax (基本的な書き方とフォーマットの構文)](/articles/basic-writing-and-formatting-syntax)
