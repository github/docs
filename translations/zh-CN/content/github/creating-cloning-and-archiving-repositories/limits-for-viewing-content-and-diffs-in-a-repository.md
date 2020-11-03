---
title: 限制查看仓库中的内容和差异
intro: '有些类型的资源可能很大，需要在 {% data variables.product.product_name %} 上额外处理。 因此，可设置限制，以确保申请在合理的时间内完成。'
redirect_from:
  - /articles/what-are-the-limits-for-viewing-content-and-diffs-in-my-repository/
  - /articles/limits-for-viewing-content-and-diffs-in-a-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

以下限制大多会影响 {% data variables.product.product_name %} 和 API。

### 文本限制

超过 **1 MB** 的文本文件始终显示为纯文本。 代码不强调语法，散文文件不会转换成 HTML（如 Markdown、AsciiDoc *等*）。

超过 **5 MB** 的文本文件仅通过其源 URL 访问，将通过 `{% data variables.product.raw_github_com %}` 提供；例如 `https://{% data variables.product.raw_github_com %}/octocat/Spoon-Knife/master/index.html`。 单击 **Raw（源）**按钮获取文件的源 URL。

### 差异限制

因为差异可能很大，所以我们会对评论、拉取请求和比较视图的差异施加限制：

- 任一文件的差异不可超过 *20,000 行，*或者源差异数据不可超过 *1 MB*。 *四百行*和 *20 KB* 会自动加载为一个文件。
- 单一差异中的最大文件数限于 *3,000*。
- 单一差异中可呈现的文件（如图像、PDF 和 GeoJSON 文件）最大数量限于 *25*。

受限差异的某些部分可能会显示，但超过限制的任何部分都不会显示。

### 提交列表限制

比较视图和拉取请求页面显示 `base` 与 `head` 修订之间的提交列表。 这些列表限于 **250** 次提交。 如果超过该限制，将会出现一条表示附加评论的注释（但不显示）。
