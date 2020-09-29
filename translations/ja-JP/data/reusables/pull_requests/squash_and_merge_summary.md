{% data variables.product.product_location %}上のプルリクエストで**Squash and merge（squashとマージ）**オプションを選択すると、そのプルリクエストのコミットは１つのコミットにsquashされます。 トピックブランチからコントリビュータの個々のコミットをすべて見る代わりに、コミットは１つのコミットにまとめられ、デフォルトブランチにマージされます。 squashされたコミットを持つプルリクエストは、[fast-forwardオプション](https://git-scm.com/docs/git-merge#_fast_forward_merge)を使ってマージされます。

プルリクエストをsquashしてマージするには、リポジトリへの[書き込み権限](/articles/repository-permission-levels-for-an-organization/)を持っていなければならず、リポジトリでは[squashマージが許可](/articles/configuring-commit-squashing-for-pull-requests/)されていなければなりません。

![commit-squashing-diagram](/assets/images/help/pull_requests/commit-squashing-diagram.png)

squashとマージは、よりスムーズなGitの履歴をリポジトリに作り出すために利用できます。 作業途中でのコミットは、フィーチャブランチで作業しているときには役立ちますが、必ずしもGitの履歴に残すほど重要とはかぎりません。 デフォルトブランチへのマージに際してそれらのコミットを１つのコミットにsquashすれば、明快なGitの履歴と共にオリジナルの変更を残しておけます。
