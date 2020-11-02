---
title: コミットメッセージの変更
redirect_from:
  - /articles/can-i-delete-a-commit-message/
  - /articles/changing-a-commit-message
intro: 'コミットメッセージに不明確、不正確、または機密情報が含まれている場合、ローカルでメッセージを修正して、{% data variables.product.product_name %}に新しいメッセージで新しいコミットをプッシュできます。 また、コミットメッセージを変更して、不足している情報を追加することも可能です。'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### 直近のコミットメッセージの書き換え

`git commit --amend` コマンドで、直近のコミットメッセージを変更できます。

In Git, the text of the commit message is part of the commit. Changing the commit message will change the commit ID--i.e., the SHA1 checksum that names the commit. Effectively, you are creating a new commit that replaces the old one.

### Commit has not been pushed online

If the commit only exists in your local repository and has not been pushed to {% data variables.product.product_location %}, you can amend the commit message with the `git commit --amend` command.

1. コマンドラインで、修正したいコミットのあるリポジトリに移動します。
2. `git commit --amend` と入力し、**Enter** を押します。
3. テキストエディタでコミットメッセージを編集し、コミットを保存します。
    - コミットにトレーラーを追加することで、共作者を追加できます。 詳しい情報については、「[複数の作者を持つコミットを作成する](/articles/creating-a-commit-with-multiple-authors)」を参照してください。
{% if currentVersion == "free-pro-team@latest" %}
    - コミットにトレーラーを追加することで、Organization の代理でコミットを作成できます。 詳しい情報については「[Organization の代理でコミットを作成](/articles/creating-a-commit-on-behalf-of-an-organization)」を参照してください。
{% endif %}

次回のプッシュ時に、{% data variables.product.product_location %}に新たなコミットとメッセージが表示されます。

{% tip %}

You can change the default text editor for Git by changing the `core.editor` setting. For more information, see "[Basic Client Configuration](https://git-scm.com/book/en/Customizing-Git-Git-Configuration#_basic_client_configuration)" in the Git manual.

{% endtip %}

### Amending older or multiple commit messages

If you have already pushed the commit to {% data variables.product.product_location %}, you will have to force push a commit with an amended message.

{% warning %}

We strongly discourage force pushing, since this changes the history of your repository. If you force push, people who have already cloned your repository will have to manually fix their local history. For more information, see "[Recovering from upstream rebase](https://git-scm.com/docs/git-rebase#_recovering_from_upstream_rebase)" in the Git manual.

{% endwarning %}

**Changing the message of the most recently pushed commit**

1. [上記の手順](/articles/changing-a-commit-message#commit-has-not-been-pushed-online)に従って、コミットメッセージを修正します。
2. `push --force` コマンドにより、古いコミットをフォースプッシュで上書きします。
  ```shell
  $ git push --force <em>example-branch</em>
  ```

**Changing the message of older or multiple commit messages**

If you need to amend the message for multiple commits or an older commit, you can use interactive rebase, then force push to change the commit history.

1. コマンドラインで、修正したいコミットのあるリポジトリに移動します。
2. `git rebase -i HEAD~n` コマンドで、デフォルトのテキストエディタに直近 `n` コミットの一覧を表示できます。

    ```shell
    # 現在のブランチの最後の 3 つのコミットのリストを表示する
    $ git rebase -i HEAD~3
    ```
    リストは、以下のようになります。

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
3. 変更する各コミットメッセージの前の `pick` を `reword` に置き換えます。
  ```shell
  pick e499d89 Delete CNAME
  reword 0c39034 Better README
  reword f7fde4a Change the commit message but push the same commit.
  ```
4. コミット一覧のファイルを保存して閉じます。
5. 生成された各コミットコミットファイルに、新しいコミットメッセージを入力し、ファイルを保存して閉じます。
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

### 参考リンク

* 「[コミットに署名する](/articles/signing-commits)」
