---
title: Viewing a file
intro: You can view raw file content or trace changes to lines in a file and discover how parts of the file evolved over time.
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
shortTitle: View files and track file changes
---

## Viewing or copying the raw file content

With the raw view, you can view or copy the raw content of a file without any styling.

{% data reusables.repositories.navigate-to-repo %}
1. Click the file that you want to view.
2. In the upper-right corner of the file view, click **Raw**. ![Screenshot of the Raw button in the file header](/assets/images/help/repository/raw-file-button.png)
3. Optionally, to copy the raw file content, in the upper-right corner of the file view, click **{% octicon "copy" aria-label="The copy icon" %}**.

## Viewing the line-by-line revision history for a file

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

{% if blame-ignore-revs %}

## Ignore commits in the blame view
{% note %}

**Note:** Ignoring commits in the blame view is currently in public beta and subject to change.

{% endnote %}

All revisions specified in the `.git-blame-ignore-revs` file, which must be in the root directory of your repository, are hidden from the blame view using Git's `git blame --ignore-revs-file` configuration setting. For more information, see [`git blame --ignore-revs-file`](https://git-scm.com/docs/git-blame#Documentation/git-blame.txt---ignore-revs-fileltfilegt) in the Git documentation.

1. In the root directory of your repository, create a file named `.git-blame-ignore-revs`.
2. Add the commit hashes you want to exclude from the blame view to that file. We recommend the file to be structured as follows, including comments:

    ```ini
    # .git-blame-ignore-revs
    # Removed semi-colons from the entire codebase
    a8940f7fbddf7fad9d7d50014d4e8d46baf30592
    # Converted all JavaScript to TypeScript
    69d029cec8337c616552756310748c4a507bd75a
    ```

3. Commit and push the changes.

Now when you visit the blame view, the listed revisions will not be included in the blame. You'll see an **Ignoring revisions in .git-blame-ignore-revs** banner indicating that some commits may be hidden:

![Screenshot of a banner on the blame view linking to the .git-blame-ignore-revs file](/assets/images/help/repository/blame-ignore-revs-file.png)

This can be useful when a few commits make extensive changes to your code. You can use the file when running `git blame` locally as well:

```shell
git blame --ignore-revs-file .git-blame-ignore-revs
```

{% endif %}
