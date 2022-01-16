---
title: 重命名文件
intro: '您可以直接在 {% data variables.product.product_name %} 中重命名仓库中的任何文件。 重命名文件还提供[将文件移动到新位置](/articles/moving-a-file-to-a-new-location)的机会。'
redirect_from:
  - /articles/renaming-a-file
  - /github/managing-files-in-a-repository/renaming-a-file
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Repositories
---

{% tip %}

**提示**：

- 如果您尝试在没有访问权限的仓库中重命名文件，我们会将项目复刻到您的用户帐户，并在您提交更改后帮助您发送[拉取请求](/articles/about-pull-requests)到原始仓库。
- 通过 Web 界面创建的文件名只能包含字母数字字符和连字符 (`-`)。 要使用其他字符，请在本地创建和提交文件，然后将它们推送到仓库。
- 有些文件（如图像）需要您从命令行重命名它们。 更多信息请参阅“[使用命令行重命名文件](/articles/renaming-a-file-using-the-command-line)”。

{% endtip %}

1. 在仓库中浏览到您要重命名的文件。
2. 在文件视图的右上角，单击 {% octicon "pencil" aria-label="The edit icon" %} 打开文件编辑器。 ![编辑文件图标](/assets/images/help/repository/edit-file-icon.png)
3. 在文件名字段中，将文件名称更改为所需的新文件名。 您还可以同时更新文件的内容。 ![编辑文件名](/assets/images/help/repository/changing-file-name.png)
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_file_change %}
