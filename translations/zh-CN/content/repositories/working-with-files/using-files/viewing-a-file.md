---
title: 查看文件
intro: 您可以查看原始文件内容或跟踪对文件中各行的更改，了解文件的各部分如何随着时间推移而发生变化。
redirect_from:
  - /articles/using-git-blame-to-trace-changes-in-a-file
  - /articles/tracing-changes-in-a-file
  - /articles/tracking-changes-in-a-file
  - /github/managing-files-in-a-repository/tracking-changes-in-a-file
  - /github/managing-files-in-a-repository/managing-files-on-github/tracking-changes-in-a-file
  - /repositories/working-with-files/using-files/tracking-changes-in-a-file
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: 查看文件和跟踪文件更改
---

## 查看或复制原始文件内容

使用原始视图，您可以查看或复制文件的原始内容，而无需任何样式。

{% data reusables.repositories.navigate-to-repo %}
1. 单击要查看的文件。
2. 在文件视图的右上角，单击 **Raw（原始）**。 ![文件标头中 Raw 按钮的屏幕截图](/assets/images/help/repository/raw-file-button.png)
3. （可选）要复制原始文件内容，请在文件视图的右上角单击 **{% octicon "copy" aria-label="The copy icon" %}**。

## 查看文件的逐行修订历史记录

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

{% ifversion blame-ignore-revs %}

## 在追溯视图中忽略提交

在 `.git-blame-ignore-revs` 文件中指定的所有修订（必须位于存储库的根目录中）都使用 Git 的 `git blame --ignore-revs-file` 配置设置从追溯视图中隐藏。 更多信息请参阅 Git 文档中的 [`git blame --ignore-revs-file`](https://git-scm.com/docs/git-blame#Documentation/git-blame.txt---ignore-revs-fileltfilegt)。

1. 在存储库的根目录中，创建一个名为 `.git-blame-ignore-revs` 的文件。
2. 将要从追溯视图中排除的提交哈希添加到该文件。 我们建议文件结构如下，包括注释：

    ```ini
    # .git-blame-ignore-revs
    # Removed semi-colons from the entire codebase
    a8940f7fbddf7fad9d7d50014d4e8d46baf30592
    # Converted all JavaScript to TypeScript
    69d029cec8337c616552756310748c4a507bd75a
    ```

3. 提交并推送更改。

现在访问追溯视图时，列出的修订将不会包含在追溯中。 您将会看到一个 **Ignoring revisions in .git-blame-ignore-revs（忽略 .git-blame-ignore-revs 中的修订）**横幅，表示某些提交可能被隐藏：

![指向 .git-blame-ignore-revs 文件的追溯视图上的横幅屏幕截图](/assets/images/help/repository/blame-ignore-revs-file.png)

当一些提交对代码进行大量更改时，这可能很有用。 您也可以在本地运行 `git blame` 时使用该文件：

```shell
git blame --ignore-revs-file .git-blame-ignore-revs
```

{% endif %}
