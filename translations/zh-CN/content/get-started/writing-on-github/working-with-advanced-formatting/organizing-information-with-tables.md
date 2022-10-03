---
title: 使用表格组织信息
intro: 您可以创建表格来组织评论、议题、拉取请求和 wiki 中的信息。
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
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: '145066758'
---
## 创建表

可以使用竖线 `|` 和连字符 `-` 创建表。 连字符用于创建每列的标题，而竖线用于分隔每列。 必须在表格前包含空白链接，以便其正确呈现。

```markdown

| First Header  | Second Header |
| ------------- | ------------- |
| Content Cell  | Content Cell  |
| Content Cell  | Content Cell  |
```

![呈现的表格](/assets/images/help/writing/table-basic-rendered.png)

表格末尾的竖线可选。

单元格的宽度可以不同，无需在列内准确对齐。 标题行的第一列中必须至少有三个横线。

```markdown
| Command | Description |
| --- | --- |
| git status | List all new or modified files |
| git diff | Show file differences that haven't been staged |
```

![呈现的单元格宽度不同的表格](/assets/images/help/writing/table-varied-columns-rendered.png)

{% data reusables.user-settings.enabling-fixed-width-fonts %}

## 格式化表格中的内容

可以在表格中使用[格式](/articles/basic-writing-and-formatting-syntax)，例如链接、内联代码块和文本样式：

```markdown
| Command | Description |
| --- | --- |
| `git status` | List all *new or modified* files |
| `git diff` | Show file differences that **haven't been** staged |
```

![呈现的带格式化文本的表格](/assets/images/help/writing/table-inline-formatting-rendered.png)

可以通过在标题行中连字符的左侧、右侧或两侧添加冒号 `:`，来靠左、靠右或居中对齐列中的文本。

```markdown
| Left-aligned | Center-aligned | Right-aligned |
| :---         |     :---:      |          ---: |
| git status   | git status     | git status    |
| git diff     | git diff       | git diff      |
```

![呈现的文本靠左、居中和靠右对齐的表格](/assets/images/help/writing/table-aligned-text-rendered.png)

若要包含竖线 `|` 作为单元格中的内容，请在竖线前使用 `\`：

```markdown
| Name     | Character |
| ---      | ---       |
| Backtick | `         |
| Pipe     | \|        |
```

![呈现的带逸出竖线字符的表格](/assets/images/help/writing/table-escaped-character-rendered.png)

## 延伸阅读

- [{% data variables.product.prodname_dotcom %} 样式的 Markdown 规范](https://github.github.com/gfm/)
- [基本撰写和格式设置语法](/articles/basic-writing-and-formatting-syntax)
