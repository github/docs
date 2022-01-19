プライベートリポジトリのフォークの利用に依存しているなら、ユーザがどのように`pull_request`イベントの際にワークフローを実行できるかを制御するポリシーを設定できます。 Available to private {% ifversion ghec or ghes or ghae %}and internal{% endif %} repositories only, you can configure these policy settings for {% ifversion ghec %}enterprises, {% elsif ghes or ghae %}your enterprise, {% endif %}organizations, or repositories.{% ifversion ghec or ghes or ghae %} For enterprises, the policies are applied to all repositories in all organizations.{% endif %}

- **Run workflows from fork pull requests（フォークのPull Requestからワークフローを実行）** - 読み取りのみの権限を持ち、シークレットにはアクセスできない`GITHUB_TOKEN`を使って、フォークのPull Requestからワークフローを実行することをユーザに許可します。
- **Send write tokens to workflows from pull requests（Pull Requestから書き込みトークンをワークフローに送信）** - 書き込み権限を持つ`GITHUB_TOKEN`の利用をフォークからのPull Requestに許可します。
- **Send secrets to workflows from pull requests（Pull Requestからワークフローにシークレットを送信）** - すべてのシークレットをPull Requestから利用可能にします。
