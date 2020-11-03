---
title: コミットメッセージの変更
redirect_from:
  - /articles/can-i-delete-a-commit-message/
  - /articles/changing-a-commit-message
intro: 'コミットメッセージに不明確、不正確、または機密情報が含まれている場合、ローカルでメッセージを修正して、{% data variables.product.product_name %}に新しいメッセージで新しいコミットをプッシュできます。 また、コミットメッセージを変更して、不足している情報を追加することも可能です。'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### 直近のコミットメッセージの書き換え

`git commit --amend` コマンドで、直近のコミットメッセージを変更できます。

Git では、コミットメッセージのテキストはコミットの一部として扱われます。 コミットメッセージを変更すると、コミット ID (コミットの SHA1 チェックサム) も変更されます。 実質的には、古いコミットに代わる新しいコミットを作成することになります。

### オンラインにプッシュされていないコミット

コミットがローカルリポジトリにのみ存在し、{% data variables.product.product_location %}にプッシュされていない場合、`git commit --amend` コマンドでコミットメッセージを修正できます。

1. コマンドラインで、修正したいコミットのあるリポジトリに移動します。
2. `git commit --amend` と入力し、**Enter** を押します。
3. テキストエディタでコミットメッセージを編集し、コミットを保存します。
    - コミットにトレーラーを追加することで、共作者を追加できます。 詳しい情報については、「[複数の作者を持つコミットを作成する](/articles/creating-a-commit-with-multiple-authors)」を参照してください。
{% if currentVersion == "free-pro-team@latest" %}
    - コミットにトレーラーを追加することで、Organization の代理でコミットを作成できます。 詳しい情報については「[Organization の代理でコミットを作成](/articles/creating-a-commit-on-behalf-of-an-organization)」を参照してください。
{% endif %}

次回のプッシュ時に、{% data variables.product.product_location %}に新たなコミットとメッセージが表示されます。

{% tip %}

Git で使うデフォルトのテキストエディタは、`core.editor` の設定で変更できます。 詳しい情報については、Git のマニュアルにある「[基本クライアント設定](https://git-scm.com/book/en/Customizing-Git-Git-Configuration#_basic_client_configuration)」を参照してください。

{% endtip %}

### 古いまたは複数のコミットメッセージの修正

すでにコミットを {% data variables.product.product_location %}にプッシュしている場合、修正済みのメッセージでコミットをフォースプッシュする必要があります。

{% warning %}

リポジトリの履歴が変更されるため、フォースプッシュは推奨されません。 フォースプッシュを行った場合、リポジトリをすでにクローンした人はローカルの履歴を手動で修正する必要があります。 詳しい情報については、Git のマニュアルにある「[上流リベースからのリカバリ](https://git-scm.com/docs/git-rebase#_recovering_from_upstream_rebase)」を参照してください。

{% endwarning %}

**Changing the message of the most recently pushed commit**

1. [上記の手順](/articles/changing-a-commit-message#commit-has-not-been-pushed-online)に従って、コミットメッセージを修正します。
2. `push --force` コマンドにより、古いコミットをフォースプッシュで上書きします。
  ```shell
  $ git push --force <em>example-branch</em>
  ```

**Changing the message of older or multiple commit messages**

複数のコミットまたは古いコミットの、メッセージを修正する必要がある場合は、インタラクティブなリベースを利用した後にフォースプッシュして、コミットの履歴を変更できます。

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

インタラクティブリベースに関する詳しい情報については、Git のマニュアルにある「[インタラクティブモード](https://git-scm.com/docs/git-rebase#_interactive_mode)」を参照してください。

{% tip %}

この方法でも、コミットメッセージを修正すると、ID が新しい新たなコミットメッセージが作成されます。 ただしこの方法では、修正したコミットに続く各コミットも新しい ID を取得します。各コミットには、親の ID が含まれているためです。

{% endtip %}

{% warning %}

修正したコミットをフォースプッシュしても元のコミットは {% data variables.product.product_name %}から削除されない場合がありますので、元のコミットメッセージに機密情報が含まれている場合は注意してください。 古いコミットは、以降のクローンには含まれませんが、{% data variables.product.product_name %}にキャッシュされ、コミット ID でアクセスできます。 リモートリポジトリから古いコミットメッセージをパージするには、古いコミット ID を添えて {% data variables.contact.contact_support %}にお問い合わせください。

{% endwarning %}

### 参考リンク

* 「[コミットに署名する](/articles/signing-commits)」
