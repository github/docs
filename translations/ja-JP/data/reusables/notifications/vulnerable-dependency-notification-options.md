{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" %}
{% if currentVersion == "free-pro-team@latest"%}デフォルトでは、通知を受け取ることになります：{% endif %}{% if enterpriseServerVersions contains currentVersion and currentVersion gt "enterprise-server@3.1" %}デフォルトでは、サイト管理者がインスタンス上でメール通知を設定していれば、{% data variables.product.prodname_dependabot_alerts %}を受け取ることになります:{% endif %}

- メールについては、{% data variables.product.prodname_dependabot %}がリポジトリで有効化された場合、新しいマニフェストファイルがリポジトリにコミットされた場合、重要度が重大もしくは高の新しい脆弱性が見つかった場合に送信されます（**Email each time a vulnerability is found（脆弱性が見つかるたびにメールする）**オプション）。
- ユーザインターフェースについては、脆弱な依存関係があった場合に、リポジトリのファイルとコードビューに警告が表示されます（**UI alerts（UIアラート）**オプション）。
- コマンドラインについては、脆弱な依存関係を伴うプッシュをリポジトリに対して行った場合、コールバックとして警告が表示されます（**Command Line（コマンドライン）**オプション）。
- インボックスについては、Web通知として表示されます。 Web通知は、{% data variables.product.prodname_dependabot %}がリポジトリで有効化された場合、新しいマニフェストファイルがリポジトリにコミットされた場合、重要度が重大もしくは高の新しい脆弱性が見つかった場合に送信されます（**Web**オプション）。
- {% data variables.product.prodname_mobile %}では、Web通知として表示されます。 詳しい情報については「[GitHub for mobileでのプッシュ通知の有効化](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#enabling-push-notifications-with-github-for-mobile)」を参照してください。

{% note %}

**ノート:** メール及びWeb / {% data variables.product.prodname_mobile %}通知は以下のようになります。

- _リポジトリごと_ {% data variables.product.prodname_dependabot %}がリポジトリで有効化された場合、あるいは新しいマニフェストファイルがリポジトリにコミットされた場合。

- _Organizationごと_ 新しい脆弱性が見つかった場合。

{% endnote %}
通知を

{% data variables.product.prodname_dependabot_alerts %}について受ける方法は、カスタマイズできます。 たとえば、**Email a digest summary of vulnerabilities（脆弱性のダイジェストサマリーメール）**及び**Weekly security email digest（週間のセキュリティメールダイジェスト）**オプションを使って、最大10件のリポジトリに関するアラートをまとめた週間のダイジェストメールを受信できます。
{% endif %}

{% if currentVersion == "enterprise-server@2.22" or currentVersion == "enterprise-server@3.0" or currentVersion == "enterprise-server@3.1" %}
デフォルトでは、サイト管理者がインスタンスに関する通知のメールを設定すると、
{% data variables.product.prodname_dependabot_alerts %}を受信することになります:
- メールの場合、メールは{% if currentVersion ver_gt "enterprise-server@2.23" %}重要度が重大あるいは高の{% endif %}脆弱性が見つかるたびに送信されます（**Email each time a vulnerability is found（脆弱性が見つかるたびにメール）**オプション）
- ユーザインターフェースでは、脆弱な依存関係がある場合にリポジトリのファイル及びコードビューに警告が表示されます（**UI alerts（UIアラート）**オプション）
- コマンドラインでは、脆弱性のある依存関係を伴うプッシュをリポジトリに対して行った場合に、コールバックとして警告が表示されます（**Command Line（コマンドライン）**オプション）
- インボックスには、{% if currentVersion ver_gt "enterprise-server@2.23" %}重要度が重大もしくは高の新しい脆弱性に対して{% endif %}Web通知が表示されます（**Web**オプション）
通知を

{% data variables.product.prodname_dependabot_alerts %}について受ける方法は、カスタマイズできます。 たとえば、**Email a digest summary of vulnerabilities（脆弱性のダイジェストサマリーメール）**及び**Weekly security email digest（週間のセキュリティメールダイジェスト）**オプションを使って、最大10件のリポジトリに関するアラートをまとめた週間のダイジェストメールを受信できます。
{% endif %}

{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.22" %}
デフォルトでは、サイト管理者がインスタンスに関する通知のメールを設定すると、セキュリティアラートを受信することになります。
- メールの場合、メールは脆弱性が見つかるたびに送信されます（**Email each time a vulnerability is found（脆弱性が見つかるたびにメール）**オプション）
- ユーザインターフェースでは、リポジトリのファイル及びコードビューに警告が表示されます（**UI alerts（UIアラート）**オプション）
- コマンドラインでは、脆弱性を伴うプッシュをリポジトリに対して行った場合に、コールバックとして警告が表示されます（**Command Line（コマンドライン）**オプション）
- インボックスには、Web通知として表示されます（**Web**オプション）

セキュリティアラートに関する通知を受ける方法はカスタマイズできます。 たとえば、**Email a digest summary of vulnerabilities（脆弱性のダイジェストサマリーメール）**及び**Weekly security email digest（週間のセキュリティメールダイジェスト）**オプションを使って、最大10件のリポジトリに関するアラートをまとめた週間のダイジェストメールを受信できます。
{% endif %}
