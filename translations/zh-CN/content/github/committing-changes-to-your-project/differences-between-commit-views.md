---
title: 提交视图之间的差异
redirect_from:
  - /articles/differences-between-commit-views
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

在 {% data variables.product.product_name %} 上，您可以按以下方式查看仓库的提交历史记录：

- 直接导航到仓库的[提交页面](https://github.com/mozilla/rust/commits/master)
- 单击文件，然后单击 **History（历史）**，获得 [特定文件的提交历史记录](https://github.com/mozilla/rust/commits/master/README.md)

这两个提交视图有时可能显示_不同_的信息。 单个文件的历史记录可能忽略在仓库提交历史记录中找到的提交。

Git 有几种不同的方式来显示仓库的历史记录。 当 Git 显示单个文件的历史记录时，会通过忽略未更改文件的提交来简化历史记录。 Git 不是查看每一个提交来决定其是否接触文件，而是会省略整个分支，前提是该分支合并时没有影响文件的最终内容。 将不会显示接触文件的分支上的任何提交。

对于单个文件的提交历史记录，{% data variables.product.product_name %} 明确遵循此简单策略。 它会移除对最终结果没有作用的提交，简化历史记录。 例如，如果侧分支做了更改，然后还原，则该提交不会显示在分支历史记录中。 这可提高分支审查的效率，因为您只看到影响文件的提交。

此截断视图可能并不总是包含您需要的信息。 如果要查看整个历史记录，{% data variables.product.product_name %} 会在仓库的提交页面提供信息更多的视图。

有关 Git 如何考虑提交历史记录的详细信息，可阅读 `git log`帮助文章的 [“历史记录简化”](https://git-scm.com/docs/git-log#_history_simplification)部分。

### 延伸阅读

- "[对提交签名](/articles/signing-commits)"
- "[搜索提交](/articles/searching-commits)"
