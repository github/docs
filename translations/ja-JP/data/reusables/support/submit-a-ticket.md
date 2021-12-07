1. Select the **Account or organization** drop-down menu and click the name of your enterprise. ![Account field](/assets/images/help/support/account-field.png)
1. Select the **From** drop-down menu and click the email address you'd like {% data variables.contact.github_support %} to contact. ![メールフィールド](/assets/images/help/support/from-field.png)
1. Select the **Product** drop-down menu and click **GitHub Enterprise Server (self-hosted)**. ![Product field](/assets/images/help/support/product-field.png)
1. Select the **Release series** drop-down menu and click the release {% data variables.product.product_location_enterprise %} is running. ![Release field](/assets/images/help/support/release-field.png)
1. Select the **Priority** drop-down menu and click the appropriate urgency. For more information, see "[Assigning a priority to a support ticket](/admin/enterprise-support/overview/about-github-enterprise-support#assigning-a-priority-to-a-support-ticket)." ![Priority field](/assets/images/help/support/priority-field.png)
    - {% ifversion fpt or ghec %}重大なシステムの障害{% else %}重大なシステム障害、重要なシステムの運用に影響するサービス中断、セキュリティインシデント、ライセンスの期限切れ{% endif %}を報告するには、 **{% data variables.product.support_ticket_priority_urgent %}**を選択してください。
    - {% ifversion fpt or ghec %}センシティブなデータ（コミット、Issue、プルリクエスト、アップロードされた添付ファイル）の自分のアカウントとOrganizationのリストアからの削除{% else %}システムパフォーマンスの問題{% endif %}を含むビジネスにインパクトのある問題をレポートしたり、重大なバグのレポートをしたりするには**{% data variables.product.support_ticket_priority_high %}**を選択してください。
    - {% ifversion fpt or ghec %}アカウントの回復やスパム認定の取り消しのリクエスト、ユーザーログインの問題のレポート{% else %}設定変更やサードパーティとのインテグレーションのような技術的なリクエスト{% endif %}や、重大ではないバグのレポートには、**{% data variables.product.support_ticket_priority_normal %}**を選択してください。
    - 一般的な質問をしたり、新機能、購入、トレーニング、ヘルスチェックのリクエストのサブミットをするには、**{% data variables.product.support_ticket_priority_low %}**を選択してください。
{%- ifversion ghes or ghec %}
1. Optionally, if your account includes {% data variables.contact.premium_support %} and your ticket is {% ifversion ghes %}urgent or high{% elsif ghec %}high{% endif %} priority, you can request a callback. Select **Request a callback from GitHub Support**, select the country code drop-down menu to choose your country, and enter your phone number. ![Request callback option](/assets/images/help/support/request-callback.png)
{%- endif %}
1. [Subject] には、サブミットしようとしている問題がわかりやすい題名を入力してください。 ![Subject field (題名)](/assets/images/help/support/subject-field.png)
5. [How can we help] には、Support チームが問題のトラブルシューティングをするうえで役立つと考えられる追加情報をすべて入力してください。 有益な情報の例としては、以下のようなものがあります: ![[How can we help] フィールド](/assets/images/help/support/how-can-we-help-field.png)
    - 問題を再現する手順
    - 問題が発見された状況に特徴的なこと (たとえば初回の発生、あるいは特定の事象の後の発生、発生頻度、問題のビジネス上の影響、想定される緊急度)
    - 正確なエラーメッセージ
6. Optionally, attach diagnostics files and other files by dragging and dropping, uploading, or pasting from the clipboard.
7. [**Send request**] をクリックします。 ![[Send request] ボタン](/assets/images/help/support/send-request-button.png)