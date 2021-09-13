プライベートリポジトリのフォークの利用に依存しているなら、ユーザがどのように`pull_request`イベントの際にワークフローを実行できるかを制御するポリシーを設定できます。 これらのポリシーはプライベートリポジトリだけで使えるもので、Enterprise、Organization、リポジトリに設定できます。 Enterpriseの場合、このポリシーはすべてのOrganizationのすべてのリポジトリに適用されます。

- **Run workflows from fork pull requests（フォークのPull Requestからワークフローを実行）** - 読み取りのみの権限を持ち、シークレットにはアクセスできない`GITHUB_TOKEN`を使って、フォークのPull Requestからワークフローを実行することをユーザに許可します。
- **Send write tokens to workflows from pull requests（Pull Requestから書き込みトークンをワークフローに送信）** - 書き込み権限を持つ`GITHUB_TOKEN`の利用をフォークからのPull Requestに許可します。
- **Send secrets to workflows from pull requests（Pull Requestからワークフローにシークレットを送信）** - すべてのシークレットをPull Requestから利用可能にします。
