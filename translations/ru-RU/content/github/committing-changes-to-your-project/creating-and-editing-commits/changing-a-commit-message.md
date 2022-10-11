---
title: Changing a commit message
redirect_from:
  - /articles/can-i-delete-a-commit-message/
  - /articles/changing-a-commit-message
  - /github/committing-changes-to-your-project/changing-a-commit-message
intro: 'If a commit message contains unclear, incorrect, or sensitive information, you can amend it locally and push a new commit with a new message to {% data variables.product.product_name %}. You can also change a commit message to add missing information.'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### Rewriting the most recent commit message

You can change the most recent commit message using the `git commit --amend` command.

In Git, the text of the commit message is part of the commit. Changing the commit message will change the commit ID--i.e., the SHA1 checksum that names the commit. Effectively, you are creating a new commit that replaces the old one.

### Commit has not been pushed online

If the commit only exists in your local repository and has not been pushed to {% data variables.product.product_location %}, you can amend the commit message with the `git commit --amend` command.

1. On the command line, navigate to the repository that contains the commit you want to amend.
2. Type `git commit --amend` and press **Enter**.
3. In your text editor, edit the commit message, and save the commit.
    - You can add a co-author by adding a trailer to the commit. For more information, see "[Creating a commit with multiple authors](/articles/creating-a-commit-with-multiple-authors)."
{% if currentVersion == "free-pro-team@latest" %}
    - You can create commits on behalf of your organization by adding a trailer to the commit. For more information, see "[Creating a commit on behalf of an organization](/articles/creating-a-commit-on-behalf-of-an-organization)"
{% endif %}

The new commit and message will appear on {% data variables.product.product_location %} the next time you push.

{% tip %}

You can change the default text editor for Git by changing the `core.editor` setting. For more information, see "[Basic Client Configuration](https://git-scm.com/book/en/Customizing-Git-Git-Configuration#_basic_client_configuration)" in the Git manual.

{% endtip %}

### Amending older or multiple commit messages

If you have already pushed the commit to {% data variables.product.product_location %}, you will have to force push a commit with an amended message.

{% warning %}

We strongly discourage force pushing, since this changes the history of your repository. If you force push, people who have already cloned your repository will have to manually fix their local history. For more information, see "[Recovering from upstream rebase](https://git-scm.com/docs/git-rebase#_recovering_from_upstream_rebase)" in the Git manual.

{% endwarning %}

**Changing the message of the most recently pushed commit**

1. Follow the [steps above](/articles/changing-a-commit-message#commit-has-not-been-pushed-online) to amend the commit message.
2. Use the `push --force-with-lease` command to force push over the old commit.
  ```shell
  $ git push --force-with-lease <em>example-branch</em>
  ```

**Changing the message of older or multiple commit messages**

If you need to amend the message for multiple commits or an older commit, you can use interactive rebase, then force push to change the commit history.

1. On the command line, navigate to the repository that contains the commit you want to amend.
2. Use the `git rebase -i HEAD~n` command to display a list of the last `n` commits in your default text editor.

    ```shell
    # Displays a list of the last 3 commits on the current branch
    $ git rebase -i HEAD~3
    ```
    The list will look similar to the following:

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
3. Replace `pick` with `reword` before each commit message you want to change.
  ```shell
  pick e499d89 Delete CNAME
  reword 0c39034 Better README
  reword f7fde4a Change the commit message but push the same commit.
  ```
4. Save and close the commit list file.
5. In each resulting commit file, type the new commit message, save the file, and close it.
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

### Дополнительная литература

* "[Signing commits](/articles/signing-commits)"
