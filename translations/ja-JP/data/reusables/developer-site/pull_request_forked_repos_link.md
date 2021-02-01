##### フォークしたリポジトリのプルリクエストイベント

{% note %}

**ノート：** フォークされたリポジトリでプルリクエストをオープンした場合には、プライベートのベースリポジトリではワークフローは実行されません。

{% endnote %}

フォークされたリポジトリからベースリポジトリに対するプルリクエストを作成した場合、{% data variables.product.prodname_dotcom %}はベースリポジトリに対して`pull_request`イベントを送り、フォークされたリポジトリではプルリクエストイベントは生じません。

デフォルトでは、フォークされたリポジトリではワークフローは実行されません。 フォークされたリポジトリの** Actions**タブでGitHub Actionsを有効化しなければなりません。

{% data reusables.actions.forked-secrets %} The permissions for the `GITHUB_TOKEN` in forked repositories is read-only. 詳しい情報については「[GITHUB_TOKENでの認証](/actions/configuring-and-managing-workflows/authenticating-with-the-github_token)」を参照してください。
