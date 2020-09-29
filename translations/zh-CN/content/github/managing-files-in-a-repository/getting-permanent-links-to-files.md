---
title: 创建文件的永久链接
intro: '在 {% data variables.product.product_location %} 上查看文件时，您可以按 "y" 键将 URL 更新为指向所查看文件精确版本的永久链接。'
redirect_from:
  - /articles/getting-a-permanent-link-to-a-file/
  - /articles/how-do-i-get-a-permanent-link-from-file-view-to-permanent-blob-url/
  - /articles/getting-permanent-links-to-files
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% tip %}

**提示**：在 {% data variables.product.product_name %} 的任意页面上按 "?" 键可查看所有可用的键盘快捷键。

{% endtip %}

### 文件视图显示分支上的最新版本

在 {% data variables.product.product_location %} 上查看文件时，通常会在分支头部看到当前版本。  例如：

* [https://github.com/github/hubot/blob/**master**/README.md](https://github.com/github/hubot/blob/master/README.md)

引用 GitHub 的 `hubot` 仓库，并显示 `master` 分支中 `README.md` 文件的当前版本。

分支头部的文件版本可能会随着新的提交而改变，因此如果您复制常规的 URL，当以后有人查看时，文件内容可能会不同。

### 按 <kbd>y</kbd> 键可永久链接到特定提交中的文件

要创建所查看文件特定版本的永久链接，不要在 URL 中使用分支名称（例如上例中的 `master` 部分），而是输入提交 id。  这将永久链接到该提交中文件的精确版本。  例如：

* [https://github.com/github/hubot/blob/**ed25584f5ac2520a6c28547ffd0961c7abd7ea49**/README.md](https://github.com/github/hubot/blob/ed25584f5ac2520a6c28547ffd0961c7abd7ea49/README.md)

将 `master` 替换为特定提交 id，文件内容将不会改变。

但是，手动查找提交 SHA 比较麻烦，因此您可以采用便捷方式，通过键入 <kbd>y</kbd> 将 URL 自动更新为永久链接版本。  然后，您可以复制该 URL，以后访问它的任何人都将看到与您所见完全一致的内容。

{% tip %}

**提示**：您可以将可解析为提交的任何标识符放在 URL 中，包括分支名称、特定提交 SHA 或标记！

{% endtip %}

### 创建指向代码段的永久链接

您可以创建指向特定版本的文件或拉取请求中特定代码行或行范围的永久链接。 更多信息请参阅“[创建指向代码段的永久链接](/articles/creating-a-permanent-link-to-a-code-snippet/)”。

### 延伸阅读

- "[存档 GitHub 仓库](/articles/archiving-a-github-repository)"
