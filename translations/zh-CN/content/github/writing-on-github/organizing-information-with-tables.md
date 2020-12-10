---
title: 使用表格组织信息
intro: '您可以创建表格来组织评论、议题、拉取请求和 wiki 中的信息。'
redirect_from:
  - /articles/organizing-information-with-tables
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### 创建表格

您可以用竖线 `|` 和横线 `-` 创建表格。 横线用于创建每列的标题，而竖线用于分隔每列。 必须在表格前包含空白链接，以便其正确呈现。

```

| First Header  | Second Header |
| ------------- | ------------- |
| Content Cell  | Content Cell  |
| Content Cell  | Content Cell  |
```

![呈现的表格](/assets/images/help/writing/table-basic-rendered.png)

表格末尾的竖线可选。

单元格的宽度可以不同，无需在列内准确对齐。 标题行的第一列中必须至少有三个横线。

```
| Command | Description |
| --- | --- |
| git status | List all new or modified files |
| git diff | Show file differences that haven't been staged |
```

![呈现的单元格宽度不同的表格](/assets/images/help/writing/table-varied-columns-rendered.png)

### 格式化表格中的内容

您可以在表格中使用[格式](/articles/basic-writing-and-formatting-syntax)，如链接、内联代码块和文本样式：

```
| Command | Description |
| --- | --- |
| `git status` | List all *new or modified* files |
| `git diff` | Show file differences that **haven't been** staged |
```

![呈现的带格式化文本的表格](/assets/images/help/writing/table-inline-formatting-rendered.png)

您可以在标头行中横线的左侧、右侧或两侧加入冒号 `:`，靠左、靠右或居中对齐列中的文本。

```
| Left-aligned | Center-aligned | Right-aligned |
| :---         |     :---:      |          ---: |
| git status   | git status     | git status    |
| git diff     | git diff       | git diff      |
```

![呈现的文本靠左、居中和靠右对齐的表格](/assets/images/help/writing/table-aligned-text-rendered.png)

要包含竖线 `|` 作为单元格中的内容，请在竖线前使用 `\`：

```
| Name     | Character |
| ---      | ---       |
| Backtick | `         |
| Pipe     | \|        |
```

![呈现的带逸出竖线字符的表格](/assets/images/help/writing/table-escaped-character-rendered.png)

### 延伸阅读

- [{% data variables.product.prodname_dotcom %} Flavored Markdown 规格](https://github.github.com/gfm/)
- "[基本撰写和格式语法](/articles/basic-writing-and-formatting-syntax)"
