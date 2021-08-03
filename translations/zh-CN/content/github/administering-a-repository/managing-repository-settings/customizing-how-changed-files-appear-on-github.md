---
title: 自定义更改的文件在 GitHub 中如何显示
intro: 要确保某些文件默认显示差异，或者计入仓库语言，您可以使用 *.gitattributes* 文件中的 `linguist-generated` 属性标记它们。
redirect_from:
  - /articles/customizing-how-changed-files-appear-on-github
  - /github/administering-a-repository/customizing-how-changed-files-appear-on-github
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Repositories
---
使用 *.gitattributes* 文件标记与给定“模式”（含指定属性）匹配的文件。 *.gitattributes* 文件采用与 _.gitignore_ 文件相同的匹配规则。 更多信息请参阅 Git 文档中的[模式格式](https://www.git-scm.com/docs/gitignore#_pattern_format)。

1. 除非 *.gitattributes* 文件已存在，否则请在仓库的根目录中创建 *.gitattributes* 文件。
2. 使用 `linguist-generated` 属性标记或取消标记要根据仓库的语言统计数据而忽略或默认隐藏差异的路径。

  例如，要将 `search/index.json` 标记为生成的文件，请将此行添加到 *.gitattributes*：

  ```
search/index.json linguist-generated=true
  ```

### 延伸阅读
- Linguist 文档中的“[生成的代码](https://github.com/github/linguist/#generated-code)”
- “[创建新文件](/articles/creating-new-files/)”
