---
title: 更改提交消息
redirect_from:
  - /articles/can-i-delete-a-commit-message
  - /articles/changing-a-commit-message
  - /github/committing-changes-to-your-project/changing-a-commit-message
  - /github/committing-changes-to-your-project/creating-and-editing-commits/changing-a-commit-message
intro: '如果提交消息中包含不明确、不正确或敏感的信息，您可以在本地修改它，然后将含有新消息的新提交推送到 {% data variables.product.product_name %}。 您还可以更改提交消息以添加遗漏的信息。'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
---

## 重写最近的提交消息

您可以使用 `git commit --amend` 命令更改最近的提交消息。

在 Git 中，提交消息的文本是提交的一部分。 更改提交消息将更改提交 ID - 即用于命名提交的 SHA1 校验和。 实际上，您是创建一个新提交以替换旧提交。

## 提交尚未推送上线

如果提交仅存在于您的本地仓库中，尚未推送到 {% data variables.product.product_location %}，您可以使用 `git commit --amend` 命令修改提交消息。

1. 在命令行上，导航到包含要修改的提交的仓库。
2. 键入 `git commit --amend`，然后按 **Enter** 键。
3. 在文本编辑器中编辑提交消息，然后保存该提交。
    - 通过在提交中添加尾行可添加合作作者。 更多信息请参阅“[创建有多个作者的提交](/pull-requests/committing-changes-to-your-project/creating-and-editing-commits/creating-a-commit-with-multiple-authors)”。
{% ifversion fpt or ghec %}
    - 通过在提交中添加尾行可创建代表组织的提交。 更多信息请参阅“[创建代表组织的提交](/pull-requests/committing-changes-to-your-project/creating-and-editing-commits/creating-a-commit-on-behalf-of-an-organization)”
{% endif %}

在下次推送时，新的提交和消息将显示在 {% data variables.product.product_location %} 上。

{% tip %}

通过更改 `core.editor` 设置可更改 Git 的默认文本编辑器。 更多信息请参阅 Git 手册中的“[基本客户端配置](https://git-scm.com/book/en/Customizing-Git-Git-Configuration#_basic_client_configuration)”。

{% endtip %}

## 修改旧提交或多个提交的消息

如果您已将提交推送到 {% data variables.product.product_location %}，则必须强制推送含有修正消息的提交。

{% warning %}

我们很不提倡强制推送，因为这会改变仓库的历史记录。 如果强制推送，已克隆仓库的人员必须手动修复其本地历史记录。 更多信息请参阅 Git 手册中的“[从上游变基恢复](https://git-scm.com/docs/git-rebase#_recovering_from_upstream_rebase)”。

{% endwarning %}

**修改最近推送提交的消息**

1. 按照[上述步骤](/articles/changing-a-commit-message#commit-has-not-been-pushed-online)修改提交消息。
2. 使用 `push --force-with-lease` 命令强制推送经修改的旧提交。
  ```shell
  $ git push --force-with-lease origin <em>example-branch</em>
  ```

**修改旧提交或多个提交的消息**

如果需要修改多个提交或旧提交的消息，您可以使用交互式变基，然后强制推送以更改提交历史记录。

1. 在命令行上，导航到包含要修改的提交的仓库。
2. 使用 `git rebase -i HEAD~n` 命令在默认文本编辑器中显示最近 `n` 个提交的列表。

    ```shell
    # Displays a list of the last 3 commits on the current branch
    $ git rebase -i HEAD~3
    ```
    此列表将类似于以下内容：

    ```shell
    pick e499d89 Delete CNAME
    pick 0c39034 Better README
    pick f7fde4a Change the commit message but push the same commit.

    # Rebase 9fdb3bd..f7fde4a onto 9fdb3bd
    #
    # Commands:
    # p, pick = use commit
    # r, reword = use commit, but edit the commit message
    # e, edit = use commit, but stop for amending
    # s, squash = use commit, but meld into previous commit
    # f, fixup = like "squash", but discard this commit's log message
    # x, exec = run command (the rest of the line) using shell
    #
    # These lines can be re-ordered; they are executed from top to bottom.
    #
    # If you remove a line here THAT COMMIT WILL BE LOST.
    #
    # However, if you remove everything, the rebase will be aborted.
    #
    # Note that empty commits are commented out
    ```
3. 在要更改的每个提交消息的前面，用 `reword` 替换 `pick`。
  ```shell
  pick e499d89 Delete CNAME
  reword 0c39034 Better README
  reword f7fde4a Change the commit message but push the same commit.
  ```
4. 保存并关闭提交列表文件。
5. 在每个生成的提交文件中，键入新的提交消息，保存文件，然后关闭它。
6. 准备好将更改推送到 GitHub 时，请使用 push - force 命令强制推送旧提交。
```shell
$ git push --force origin <em>example-branch</em>
```

有关交互式变基的更多信息，请参阅 Git 手册中的“[交互模式](https://git-scm.com/docs/git-rebase#_interactive_mode)”。

{% tip %}

如前文所述，修改提交消息会生成含有新 ID 的新提交。 但是，在这种情况下，该修改提交的每个后续提交也会获得一个新 ID，因为每个提交也包含其父提交的 ID。

{% endtip %}

{% warning %}

如果您的提交消息中包含敏感信息，则强制推送修改后的提交可能不会导致从 {% data variables.product.product_name %} 中删除原提交。 旧提交不会成为后续克隆的一部分；但是，它可能仍然缓存在 {% data variables.product.product_name %} 上，并且可通过提交 ID 访问。 您必须联系 {% data variables.contact.contact_support %} 并提供旧提交 ID，以便从远程仓库中清除它。

{% endwarning %}

## 延伸阅读

* "[对提交签名](/articles/signing-commits)"
