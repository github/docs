#### Workflows in forked repositories

Workflows don't run in forked repositories by default. フォークされたリポジトリの** Actions**タブでGitHub Actionsを有効化しなければなりません。

{% data reusables.actions.forked-secrets %} The `GITHUB_TOKEN` has read-only permissions in forked repositories. 詳しい情報については「[GITHUB_TOKENでの認証](/actions/configuring-and-managing-workflows/authenticating-with-the-github_token)」を参照してください。

#### フォークしたリポジトリのPull Requestイベント

For pull requests from a forked repository to the base repository, {% data variables.product.product_name %} sends the `pull_request`, `issue_comment`, `pull_request_review_comment`, `pull_request_review`, and `pull_request_target` events to the base repository. No pull request events occur on the forked repository.

{% ifversion fpt or ghec %}
初めてのコントリビューターがパブリックリポジトリにPull Requestをサブミットした場合、書き込み権限を持つメンテナがそのPull Requestに対するワークフローの実行を承認しなければならないことがあります。 詳しい情報については「[パブリックなフォークからのワークフローの実行の承認](/actions/managing-workflow-runs/approving-workflow-runs-from-public-forks)」を参照してください。
{% endif %}

{% note %}

**ノート：** フォークされたリポジトリでPull Requestをオープンした場合には、プライベートのベースリポジトリではワークフローは実行されません。

{% endnote %}

{% note %}

**ノート:** {% data variables.product.prodname_dependabot %}のPull Requestによってトリガーされたワークフローは、フォークされたリポジトリからのもののように扱われ、これらの制約を受けます。

{% endnote %}
