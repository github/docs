---
title: 将文件移至新位置
intro: 在编辑文件时，可以选择在仓库中随处移动，即使目录不存在。
redirect_from:
  - /articles/moving-a-file-to-a-new-location
  - /github/managing-files-in-a-repository/moving-a-file-to-a-new-location
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Repositories
---

除了更改文件位置之外，您也可以在同一提交中[更新文件内容](/articles/editing-files-in-your-repository)或[提供新名称](/articles/renaming-a-file)。

{% tip %}

**提示**：

- 如果尝试在您没有访问权限的仓库中移动文件，我们会将项目复刻到您的用户帐户，并在您提交更改后帮助您发送[拉取请求](/articles/about-pull-requests)到原仓库。
- 有些文件（如图像）需要您从命令行移动它们。 更多信息请参阅“[使用命令行将文件移至新位置](/articles/moving-a-file-to-a-new-location-using-the-command-line)”。
- {% data reusables.repositories.protected-branches-block-web-edits-uploads %}

{% endtip %}

1. 在仓库中浏览到您要移动的文件。
2. 在文件视图的右上角，单击 {% octicon "pencil" aria-label="The edit icon" %} 打开文件编辑器。 ![编辑文件图标](/assets/images/help/repository/move-file-edit-file-icon.png)
3. 在文件名字段中，按照以下原则更改文件名称： ![编辑文件名](/assets/images/help/repository/moving_files.gif)
    - 要将文件**移入子文件夹**，请输入所需文件夹的名称，后接 `/`。 新文件夹名称将变成导航层次结构中的新项目。
    - 要将文件移入**文件当前位置上方**的目录，请将光标放在文件名字段的开头，然后输入 `../` 以上跳一个完整的目录层级，或者输入 `backspace` 键以编辑父文件夹的名称。
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_file_change %}
