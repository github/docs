パブリックリポジトリをフォークし、リポジトリの{% data variables.product.prodname_actions %}ワークフローへの変更を提案するPull Requestをサブミットすることは誰でもできます。 フォークからのワークフローはシークレットなどの機密データにアクセスできませんが、悪用目的で変更された場合、メンテナが迷惑を被る可能性があります。

これを防ぐために、外部コラボレータのパブリックリポジトリへのPull Requestではワークフローは自動的には動作せず、まず承認が必要になることがあります。 デフォルトでは、すべての初めてのコントリビューターは、ワークフローを実行するのに承認を必要とします。

{% note %}

**Note:** Workflows triggered by `pull_request_target` events are run in the context of the base branch. Since the base branch is considered trusted, workflows triggered by these events will always run, regardless of approval settings.

{% endnote %}
