---
title: 更改提交消息
redirect_from:
  - /articles/can-i-delete-a-commit-message/
  - /articles/changing-a-commit-message
intro: '如果提交消息中包含不明确、不正确或敏感的信息，您可以在本地修改它，然后将含有新消息的新提交推送到 {% data variables.product.product_name %}。 您还可以更改提交消息以添加遗漏的信息。'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### 重写最近的提交消息

您可以使用 `git commit --amend` 命令更改最近的提交消息。

In Git, the text of the commit message is part of the commit. Changing the commit message will change the commit ID--i.e., the SHA1 checksum that names the commit. Effectively, you are creating a new commit that replaces the old one.

### Commit has not been pushed online

If the commit only exists in your local repository and has not been pushed to {% data variables.product.product_location %}, you can amend the commit message with the `git commit --amend` command.

1. 在命令行上，导航到包含要修改的提交的仓库。
2. 键入 `git commit --amend`，然后按 **Enter** 键。
3. 在文本编辑器中编辑提交消息，然后保存该提交。
    - 通过在提交中添加尾行可添加合作作者。 更多信息请参阅“[创建有多个作者的提交](/articles/creating-a-commit-with-multiple-authors)”。
{% if currentVersion == "free-pro-team@latest" %}
    - 通过在提交中添加尾行可创建代表组织的提交。 更多信息请参阅“[创建代表组织的提交](/articles/creating-a-commit-on-behalf-of-an-organization)”
{% endif %}

在下次推送时，新的提交和消息将显示在 {% data variables.product.product_location %} 上。

{% tip %}

You can change the default text editor for Git by changing the `core.editor` setting. For more information, see "[Basic Client Configuration](https://git-scm.com/book/en/Customizing-Git-Git-Configuration#_basic_client_configuration)" in the Git manual.

{% endtip %}

### Amending older or multiple commit messages

If you have already pushed the commit to {% data variables.product.product_location %}, you will have to force push a commit with an amended message.

{% warning %}

We strongly discourage force pushing, since this changes the history of your repository. If you force push, people who have already cloned your repository will have to manually fix their local history. For more information, see "[Recovering from upstream rebase](https://git-scm.com/docs/git-rebase#_recovering_from_upstream_rebase)" in the Git manual.

{% endwarning %}

**Changing the message of the most recently pushed commit**

1. 按照[上述步骤](/articles/changing-a-commit-message#commit-has-not-been-pushed-online)修改提交消息。
2. 使用 `push --force` 命令强制推送经修改的旧提交。
  ```shell
  $ git push --force <em>example-branch</em>
  ```

**Changing the message of older or multiple commit messages**

If you need to amend the message for multiple commits or an older commit, you can use interactive rebase, then force push to change the commit history.

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
6. When you're ready to push your changes to GitHub, use the push --force command to force push over the old commit.
```shell
$ git push --force <em>example-branch</em>
```

For more information on interactive rebase, see "[Interactive mode](https://git-scm.com/docs/git-rebase#_interactive_mode)" in the Git manual.

{% tip %}

As before, amending the commit message will result in a new commit with a new ID. However, in this case, every commit that follows the amended commit will also get a new ID because each commit also contains the id of its parent.

{% endtip %}

{% warning %}

If you have included sensitive information in a commit message, force pushing a commit with an amended commit may not remove the original commit from {% data variables.product.product_name %}. The old commit will not be a part of a subsequent clone; however, it may still be cached on {% data variables.product.product_name %} and accessible via the commit ID. You must contact {% data variables.contact.contact_support %} with the old commit ID to have it purged from the remote repository.

{% endwarning %}

### 延伸阅读

* "[对提交签名](/articles/signing-commits)"
