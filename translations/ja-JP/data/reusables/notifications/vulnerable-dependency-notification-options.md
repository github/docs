{% ifversion fpt or ghec %}By default, you will receive notifications:{% endif %}{% ifversion ghes or ghae %}By default, if your enterprise owner has configured email for notifications on your instance, you will receive {% data variables.product.prodname_dependabot_alerts %}:{% endif %}

- メールについては、{% data variables.product.prodname_dependabot %}がリポジトリで有効化された場合、新しいマニフェストファイルがリポジトリにコミットされた場合、重要度が重大もしくは高の新しい脆弱性が見つかった場合に送信されます（**Email each time a vulnerability is found（脆弱性が見つかるたびにメールする）**オプション）。
- in the user interface, a warning is shown in your repository's file and code views if there are any insecure dependencies (**UI alerts** option).
- on the command line, warnings are displayed as callbacks when you push to repositories with any insecure dependencies (**Command Line** option).
- インボックスについては、Web通知として表示されます。 A web notification is sent when {% data variables.product.prodname_dependabot %} is enabled for a repository, when a new manifest file is committed to the repository, and when a new vulnerability with a critical or high severity is found (**Web** option).{% ifversion not ghae %}
- {% data variables.product.prodname_mobile %}では、Web通知として表示されます。 For more information, see "[Enabling push notifications with GitHub Mobile](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#enabling-push-notifications-with-github-mobile)."{% endif %}

{% note %}

**Note:** The email and web{% ifversion not ghae %}/{% data variables.product.prodname_mobile %}{% endif %} notifications are:

- _リポジトリごと_ {% data variables.product.prodname_dependabot %}がリポジトリで有効化された場合、あるいは新しいマニフェストファイルがリポジトリにコミットされた場合。

- _Organizationごと_ 新しい脆弱性が見つかった場合。

{% endnote %}

You can customize the way you are notified about {% data variables.product.prodname_dependabot_alerts %}. たとえば、**Email a digest summary of vulnerabilities（脆弱性のダイジェストサマリーメール）**及び**Weekly security email digest（週間のセキュリティメールダイジェスト）**オプションを使って、最大10件のリポジトリに関するアラートをまとめた週間のダイジェストメールを受信できます。
