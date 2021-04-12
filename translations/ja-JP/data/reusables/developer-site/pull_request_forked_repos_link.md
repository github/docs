##### フォークしたリポジトリのPull Requestイベント

{% note %}

**ノート：** フォークされたリポジトリでPull Requestをオープンした場合には、プライベートのベースリポジトリではワークフローは実行されません。

{% endnote %}

フォークされたリポジトリからベースリポジトリに対するPull Requestを作成した場合、{% data variables.product.prodname_dotcom %}はベースリポジトリに対して`pull_request`イベントを送り、フォークされたリポジトリではPull Requestイベントは生じません。

デフォルトでは、フォークされたリポジトリではワークフローは実行されません。 フォークされたリポジトリの** Actions**タブでGitHub Actionsを有効化しなければなりません。

{% data reusables.actions.forked-secrets %} フォークされたリポジトリ内の`GITHUB_TOKEN`の権限は読み取りのみです。 詳しい情報については「[GITHUB_TOKENでの認証](/actions/configuring-and-managing-workflows/authenticating-with-the-github_token)」を参照してください。

{% note %}

**ノート:** {% data variables.product.prodname_dependabot %}のPull Requestによってトリガーされたワークフローは、フォークされたリポジトリからのもののように扱われ、これらの制約を受けます。

{% endnote %}
