---
title: 编辑其他用户仓库中的文件
intro: '当您编辑其他用户仓库中的文件时，我们会为您自动 [复刻仓库](/articles/fork-a-repo) 并 [打开拉取请求](/articles/creating-a-pull-request)。'
redirect_from:
  - /articles/editing-files-in-another-users-repository/
  - /articles/editing-files-in-another-user-s-repository
  - /articles/editing-files-in-another-users-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Repositories
---

1. 才其他用户的仓库中，浏览到包含要编辑文件的文件夹。 单击要编辑文件的名称。
2. 在文件内容上方，单击 {% octicon "pencil" aria-label="The edit icon" %}。 此时，GitHub 会为您复刻仓库。
3. 对文件做任何需要的更改。 ![文件中的新内容](/assets/images/help/repository/edit-readme-light.png)
{% data reusables.files.preview_change %}
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose-commit-email %}
6. 单击 **Propose file change（提议文件更改）**。 ![提交更改按钮](/assets/images/help/repository/propose_file_change_button.png)
7. 为您的拉取请求输标题和说明。 ![拉取请求说明页面](/assets/images/help/pull_requests/pullrequest-description.png)
8. 单击 **Create pull request（创建拉取请求）**。 ![拉取请求按钮](/assets/images/help/pull_requests/pullrequest-send.png)

### 延伸阅读

* “[编辑仓库中的文件](/articles/editing-files-in-your-repository)”
