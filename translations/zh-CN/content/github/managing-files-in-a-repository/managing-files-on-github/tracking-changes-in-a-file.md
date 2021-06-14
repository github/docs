---
title: 跟踪文件中的更改
intro: 您可以跟踪对文件中各行的更改，了解文件的各部分如何随着时间推移而发生变化。
redirect_from:
  - /articles/using-git-blame-to-trace-changes-in-a-file/
  - /articles/tracing-changes-in-a-file/
  - /articles/tracking-changes-in-a-file
  - /github/managing-files-in-a-repository/tracking-changes-in-a-file
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Repositories
---

使用追溯视图时，您可以查看整个文件的逐行修订历史记录，也可以通过单击 {% octicon "versions" aria-label="The prior blame icon" %} 查看文件中某一行的修订历史记录。 每次单击 {% octicon "versions" aria-label="The prior blame icon" %} 后，您将看到该行以前的修订信息，包括提交更改的人员和时间。

![Git 追溯视图](/assets/images/help/repository/git_blame.png)

在文件或拉取请求中，您还可以使用 {% octicon "kebab-horizontal" aria-label="The horizontal kebab octicon" %} 菜单查看所选行或行范围的 Git 追溯。

![带有查看所选行 Git 追溯选项的 Kebab 菜单](/assets/images/help/repository/view-git-blame-specific-line.png)

{% tip %}

**提示：**在命令行中，您还可以使用 `git blame` 查看文件内各行的修订历史记录。 更多信息请参阅 [Git 的 `git blame` 文档](https://git-scm.com/docs/git-blame)。

{% endtip %}

{% data reusables.repositories.navigate-to-repo %}
2. 单击以打开您想要查看其行历史记录的文件。
3. 在文件视图的右上角，单击 **Blame（追溯）**可打开追溯视图。 ![追溯按钮](/assets/images/help/repository/blame-button.png)
4. 要查看特定行的早期修订，或重新追溯，请单击 {% octicon "versions" aria-label="The prior blame icon" %}，直至找到您有兴趣查看的更改。 ![追溯前按钮](/assets/images/help/repository/prior-blame-button.png)
