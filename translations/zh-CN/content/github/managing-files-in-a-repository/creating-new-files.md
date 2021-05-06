---
title: 创建新文件
intro: '您可以直接在 {% data variables.product.product_name %} 上为您拥有写入权限的任何仓库创建新文件。'
redirect_from:
  - /articles/creating-new-files
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Repositories
---

在 {% data variables.product.product_name %} 上创建文件时，请注意以下几点：

- 如果您尝试为没有访问权限的仓库创建新文件，我们会将项目复刻到您的用户帐户，并在您提交更改后帮助您发送[拉取请求](/articles/about-pull-requests)到原始仓库。
- 通过 Web 界面创建的文件名只能包含字母数字字符和连字符 (`-`)。 要使用其他字符，[请在本地创建和提交文件，然后将它们推送到 {% data variables.product.product_name %} 上的仓库](/articles/adding-a-file-to-a-repository-using-the-command-line)。

{% data reusables.repositories.sensitive-info-warning %}

{% data reusables.repositories.navigate-to-repo %}
2. 在仓库中，浏览到要在其中创建文件的文件夹。
{% data reusables.files.add-file %}
4. 在文件名称字段中，键入文件的名称和扩展名。 要创建子目录，请键入 `/` 目录分隔符。 ![新文件名](/assets/images/help/repository/new-file-name.png)
5. 在 **Edit new file（编辑新文件）**选项卡上，为文件添加内容。 ![新文件中的内容](/assets/images/help/repository/new-file-content.png)
6. 要查看新内容，请单击 **Preview（预览）**。 ![新文件预览按钮](/assets/images/help/repository/new-file-preview.png)
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose-commit-email %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_new_file %}

### 延伸阅读

- "[添加文件到仓库](/articles/adding-a-file-to-a-repository)"
- "[使用命令行添加文件到仓库](/articles/adding-a-file-to-a-repository-using-the-command-line)"
