---
title: 删除仓库中的文件
intro: '您可以删除 {% data variables.product.product_name %} 仓库中的单个文件{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}或整个目录{% endif %}。'
redirect_from:
  - /articles/deleting-files
  - /github/managing-files-in-a-repository/deleting-files
  - /github/managing-files-in-a-repository/deleting-a-file-or-directory
  - /github/managing-files-in-a-repository/deleting-files-in-a-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
permissions: 'People with write permissions can delete files{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %} or directories{% endif %} in a repository.'
topics:
  - Repositories
---

### 关于文件{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}和目录{% endif %}删除

您可以删除仓库中的单个文件{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}或整个目录，包括目录中的所有文件{% endif %}。

如果您尝试在您没有写入权限的仓库中删除文件{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}或目录{% endif %}，我们会将项目复刻到您的用户帐户，并在您提交更改后帮助您向原始仓库发送拉取请求。 更多信息请参阅“[关于拉取请求](/github/collaborating-with-issues-and-pull-requests/about-pull-requests)”。

如果您删除的文件{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}或目录{% endif %}包含敏感数据，则该数据仍然可以在仓库的 Git 历史记录中访问。 要从 {% data variables.product.product_name %} 中彻底删除文件，您必须从仓库的历史记录中删除该文件。 更多信息请参阅“[从仓库中删除敏感数据](/github/authenticating-to-github/removing-sensitive-data-from-a-repository)”。

### 删除文件

1. 浏览到要删除仓库中的文件。
2. 在文件顶部，单击 {% octicon "trash" aria-label="The trash icon" %}。
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose-commit-email %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_file_change %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}
### 删除目录

1. 浏览到仓库中要删除的目录。
1. 在右上角，单击 {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}，然后单击 **Delete directory（删除目录）**。 ![删除目录的按钮](/assets/images/help/repository/delete-directory-button.png)
1. 审查要删除的文件。
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose-commit-email %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_file_change %}
{% endif %}
