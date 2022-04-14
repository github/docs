{% ifversion fpt or ghes > 3.1 or ghae-issue-4864 or ghec %}
{% ifversion fpt or ghec %}By default, you will receive notifications:{% endif %}{% ifversion ghes > 3.1 or ghae-issue-4864 %}By default, if your enterprise owner has configured email for notifications on your instance, you will receive {% data variables.product.prodname_dependabot_alerts %}:{% endif %}

- メールについては、{% data variables.product.prodname_dependabot %}がリポジトリで有効化された場合、新しいマニフェストファイルがリポジトリにコミットされた場合、重要度が重大もしくは高の新しい脆弱性が見つかった場合に送信されます（**Email each time a vulnerability is found（脆弱性が見つかるたびにメールする）**オプション）。
- ユーザインターフェースについては、脆弱な依存関係があった場合に、リポジトリのファイルとコードビューに警告が表示されます（**UI alerts（UIアラート）**オプション）。
- コマンドラインについては、脆弱な依存関係を伴うプッシュをリポジトリに対して行った場合、コールバックとして警告が表示されます（**Command Line（コマンドライン）**オプション）。
- インボックスについては、Web通知として表示されます。 A web notification is sent when {% data variables.product.prodname_dependabot %} is enabled for a repository, when a new manifest file is committed to the repository, and when a new vulnerability with a critical or high severity is found (**Web** option).{% ifversion not ghae %}
- {% data variables.product.prodname_mobile %}では、Web通知として表示されます。 For more information, see "[Enabling push notifications with GitHub Mobile](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#enabling-push-notifications-with-github-mobile)."{% endif %}

{% note %}

**Note:** The email and web{% ifversion not ghae %}/{% data variables.product.prodname_mobile %}{% endif %} notifications are:

- _リポジトリごと_ {% data variables.product.prodname_dependabot %}がリポジトリで有効化された場合、あるいは新しいマニフェストファイルがリポジトリにコミットされた場合。

- _Organizationごと_ 新しい脆弱性が見つかった場合。

{% endnote %}
通知を

{% data variables.product.prodname_dependabot_alerts %}について受ける方法は、カスタマイズできます。 たとえば、**Email a digest summary of vulnerabilities（脆弱性のダイジェストサマリーメール）**及び**Weekly security email digest（週間のセキュリティメールダイジェスト）**オプションを使って、最大10件のリポジトリに関するアラートをまとめた週間のダイジェストメールを受信できます。
{% endif %}

{% ifversion ghes = 3.1 %}
デフォルトでは、サイト管理者がインスタンスに関する通知のメールを設定すると、
{% data variables.product.prodname_dependabot_alerts %}を受信することになります:
- メールの場合、メールは重要度が重大あるいは高の脆弱性が見つかるたびに送信されます（**Email each time a vulnerability is found（脆弱性が見つかるたびにメール）**オプション）
- ユーザインターフェースでは、脆弱な依存関係がある場合にリポジトリのファイル及びコードビューに警告が表示されます（**UI alerts（UIアラート）**オプション）
- コマンドラインでは、脆弱性のある依存関係を伴うプッシュをリポジトリに対して行った場合に、コールバックとして警告が表示されます（**Command Line（コマンドライン）**オプション）
- インボックスには、重要度が重大もしくは高の新しい脆弱性に対してWeb通知が表示されます（**Web**オプション）
通知を

{% data variables.product.prodname_dependabot_alerts %}について受ける方法は、カスタマイズできます。 たとえば、**Email a digest summary of vulnerabilities（脆弱性のダイジェストサマリーメール）**及び**Weekly security email digest（週間のセキュリティメールダイジェスト）**オプションを使って、最大10件のリポジトリに関するアラートをまとめた週間のダイジェストメールを受信できます。
{% endif %}
