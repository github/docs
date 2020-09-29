---
title: 编辑仓库中的文件
intro: '您可以使用文件编辑器，在任何仓库中的 {% data variables.product.product_name %} 上直接编辑文件。'
redirect_from:
  - /articles/editing-files/
  - /articles/editing-files-in-your-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% tip %}

**提示**：{% data reusables.repositories.protected-branches-block-web-edits-uploads %}

{% endtip %}

{% note %}

**注意：** {% data variables.product.product_name %} 的文件编辑器使用 [CodeMirror](https://codemirror.net/)。

{% endnote %}

1. 在您的仓库中，浏览至要编辑的文件。
{% data reusables.repositories.edit-file %}
3. 在 **Edit file（编辑文件）** 选项卡上，对文件做所需的更改。 ![文件中的新内容](/assets/images/help/repository/edit-readme-light.png)
{% data reusables.files.preview_change %}
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose-commit-email %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_file_change %}

### 延伸阅读

* “[编辑其他用户仓库中的文件](/articles/editing-files-in-another-user-s-repository)”
