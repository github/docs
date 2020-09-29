---
title: GitHub 支持的 Subversion 属性
intro: '有几个 Subversion 工作流和属性与 {% data variables.product.product_name %} 上现有的功能类似。'
redirect_from:
  - /articles/subversion-properties-supported-by-github
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### 可执行文件 (svn:executable)

我们通过在将文件模式添加到 Git 仓库之前直接进行更新来转换 `svn:executable` 属性。

### MIME 类型 (svn:mime-type)

{% data variables.product.product_name %} 内部跟踪文件的 mime 类型和添加它们的提交。

### 忽略未版本化的项目 (svn:ignore)

如果您已设置要在 Subversion 中忽略的文件和目录，{% data variables.product.product_name %} 将在内部跟踪它们。 Subversion 客户端忽略的文件与 *.gitignore* 文件中的条目完全不同。

### 目前不支持的属性

{% data variables.product.product_name %} 目前不支持 `svn:externals`、`svn:global-ignores` 或上面未列出的任何属性，包括自定义属性。
