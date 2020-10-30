---
title: 关于仓库语言
intro: 仓库中的文件和目录确定构成仓库的语言。 您可以查看仓库的语言以快速获取仓库的概述。
redirect_from:
  - /articles/my-repository-is-marked-as-the-wrong-language/
  - /articles/why-isn-t-my-favorite-language-recognized/
  - /articles/my-repo-is-marked-as-the-wrong-language/
  - /articles/why-isn-t-sql-recognized-as-a-language/
  - /articles/why-isn-t-my-favorite-language-recognized-by-github/
  - /articles/about-repository-languages
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% data variables.product.product_name %} 使用开源 [Linguist 库](https://github.com/github/linguist)来确定语言突出和仓库统计数据的文件语言。 Language statistics will update after you push changes to your default branch.

有些文件难以识别，有时项目包含的库和供应商文件多于其主要代码。 如果您收到错误结果，请查阅 Linguist [故障排除指南](https://github.com/github/linguist#troubleshooting)寻求帮助。

### 标记语言

标记语言渲染到 HTML，并使用开源[标记库](https://github.com/github/markup)内联显示。 目前，我们不接受在 {% data variables.product.product_name %} 中显示新的标记语言。 但我们会主动维护目前的标记语言。 如果您发现问题，[请创建议题](https://github.com/github/markup/issues/new)。
