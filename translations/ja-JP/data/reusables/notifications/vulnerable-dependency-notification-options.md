{% ifversion fpt or ghec %}デフォルトでは通知を受け取ります:{% endif %}{% ifversion ghes or ghae %}デフォルトでは、Enterpriseオーナーがインスタンスでメール通知を設定していれば{% data variables.product.prodname_dependabot_alerts %}を受け取ります:{% endif %}

- メールについては、{% data variables.product.prodname_dependabot %}がリポジトリで有効化された場合、新しいマニフェストファイルがリポジトリにコミットされた場合、重要度が重大もしくは高の新しい脆弱性が見つかった場合に送信されます（**Email each time a vulnerability is found（脆弱性が見つかるたびにメールする）**オプション）。
- ユーザインターフェースについては、安全ではない依存関係があった場合に、リポジトリのファイルとコードビューに警告が表示されます（**UI alerts（UIアラート）**オプション）。
- コマンドラインについては、安全ではない依存関係を伴うプッシュをリポジトリに対して行った場合、コールバックとして警告が表示されます（**Command Line（コマンドライン）**オプション）。
- インボックスについては、Web通知として表示されます。 Web通知は、{% data variables.product.prodname_dependabot %}がリポジトリで有効化された場合、新しいマニフェストファイルがリポジトリにコミットされた場合、重要度が重大もしくは高の新しい脆弱性が見つかった場合に送信されます（**Web**オプション）。{% ifversion not ghae %}
- {% data variables.product.prodname_mobile %}では、Web通知として表示されます。 詳しい情報については「[GitHub Mobileでのプッシュ通知の有効化](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#enabling-push-notifications-with-github-mobile)」を参照してください。{% endif %}

{% note %}

**ノート:** メール及びWeb{% ifversion not ghae %} / {% data variables.product.prodname_mobile %}{% endif %}通知は以下のようになります。

- _リポジトリごと_ {% data variables.product.prodname_dependabot %}がリポジトリで有効化された場合、あるいは新しいマニフェストファイルがリポジトリにコミットされた場合。

- _Organizationごと_ 新しい脆弱性が見つかった場合。

{% endnote %}

{% data variables.product.prodname_dependabot_alerts %}に関する通知を受け取る方法をカスタマイズできます。 たとえば、**Email a digest summary of vulnerabilities（脆弱性のダイジェストサマリーメール）**及び**Weekly security email digest（週間のセキュリティメールダイジェスト）**オプションを使って、最大10件のリポジトリに関するアラートをまとめた週間のダイジェストメールを受信できます。
