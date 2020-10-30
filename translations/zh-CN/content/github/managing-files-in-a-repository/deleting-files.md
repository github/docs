---
title: 删除文件
intro: '可以删除 {% data variables.product.product_name %} 上仓库内的任何文件。'
redirect_from:
  - /articles/deleting-files
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% tip %}

**提示**：如果您尝试删除无权访问的仓库中的文件，我们会将项目复刻到您的用户帐户，并在您提交更改后，帮助您将[拉取请求](/articles/about-pull-requests)发送到原来的仓库。

{% endtip %}

1. 浏览到要删除仓库中的文件。
2. At the top of the file, click
{% octicon "trashcan" aria-label="The trashcan icon" %}.
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose-commit-email %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_file_change %}

{% danger %}

**注意**：由于 Git 是一个版本控制系统，如果您以后需要恢复文件，它始终会提供支持。 如果出于某些原因，*确实*需要**完全**删除仓库中的文件，例如意外提交敏感文件，应遵循[我们有关删除敏感数据的文章](/articles/removing-sensitive-data-from-a-repository)中的步骤。

{% enddanger %}
