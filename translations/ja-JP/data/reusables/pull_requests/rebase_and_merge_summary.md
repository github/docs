{% data variables.product.product_location %}上のプルリクエストで**Rebase and merge（リベースとマージ）**オプションを選択すると、トピックブランチ（あるいはheadブランチ）のすべてのコミットが、マージコミットなしに個別にベースブランチに追加されます。 In that way, the rebase and merge behavior resembles a [fast-forward merge](https://git-scm.com/docs/git-merge#_fast_forward_merge) by maintaining a linear project history. However, rebasing achieves this by re-writing the commit history on the base branch with new commits.

{% data variables.product.product_name %}上でのリベースとマージの振る舞いは、`gitのリベース`とは少し異なっています。 {% data variables.product.prodname_dotcom %}上でのリベースとマージは、常にコミッターの情報を更新し、新しいSHAを生成しますが、{% data variables.product.prodname_dotcom %}外での`git rebase`は祖先のコミット上でリベースが生じたときにコミッター情報を変更しません。 For more information about `git rebase`, see [git-rebase](https://git-scm.com/docs/git-rebase) in the Git documentation.

プルリクエストをリベースしてマージするには、リポジトリへの[書き込み権限](/articles/repository-permission-levels-for-an-organization/)が必要で、リポジトリでは[リベースマージが許可](/articles/configuring-commit-rebasing-for-pull-requests/)されていなければなりません。

`git rebase`の視覚的な表現については、[書籍_Pro Git_の"Git Branching - Rebasing"の章](https://git-scm.com/book/en/Git-Branching-Rebasing)を参照してください。
