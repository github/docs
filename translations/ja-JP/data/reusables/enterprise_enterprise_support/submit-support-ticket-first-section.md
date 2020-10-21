1. "Your email address（メールアドレス）"の下に、{% data variables.product.product_name %}アカウントに関連づけられるメールアドレスを入力してください。 ![[Your email address] フィールド](/assets/images/enterprise/support/support-ticket-email-address-field.png)
1. "Subject（題名）"の下に、問題を説明するタイトルを入力してください。 ![Subject field (題名)](/assets/images/enterprise/support/support-ticket-subject-field.png)
1. "Description（説明）"の下に、{% data variables.contact.enterprise_support %}チームによる問題のトラブルシュートの助けになる追加情報があれば入力してください。 有益な情報の例としては、以下のようなものがあります: ![説明フィールド](/assets/images/enterprise/support/support-ticket-description-field.png)
    - 問題を再現する手順
    - 問題が発見された状況に特徴的なこと (たとえば初回の発生、あるいは特定の事象の後の発生、発生頻度、問題のビジネス上の影響、想定される緊急度)
    - 正確なエラーメッセージ
1. From the {% data variables.product.prodname_enterprise %} Product drop-down menu, select {% if currentVersion == "free-pro-team@latest" %}{% data variables.product.prodname_ghe_cloud %}{% else %}{% data variables.product.prodname_ghe_server %}{% endif %}. ![Priority (優先度) のドロップダウンメニュー](/assets/images/enterprise/support/support-ticket-ghe-product.png)
1. "Priority（緊急度）"ドロップダウンメニューから、適切な緊急度を選択してください。 For more information, see "[Assigning a priority to a support ticket]{% if currentVersion == "free-pro-team@latest" %}(/articles/about-github-premium-support-for-github-enterprise-cloud#assigning-a-priority-to-a-support-ticket){% else %}(/enterprise/admin/guides/enterprise-support/about-github-enterprise-support#assigning-a-priority-to-a-support-ticket){% endif %}." ![Priority (優先度) のドロップダウンメニュー](/assets/images/enterprise/support/support-ticket-priority.png)
    - Choose **{% data variables.product.support_ticket_priority_urgent %}** to report {% if currentVersion == "free-pro-team@latest" %}critical system failure{% else %}fatal system failures, outages impacting critical system operations, security incidents, and expired licenses{% endif %}.
    - Choose **{% data variables.product.support_ticket_priority_high %}** to report issues impacting business operations, including {% if currentVersion == "free-pro-team@latest" %}removing sensitive data (commits, issues, pull requests, uploaded attachments) from your own accounts and organization restorations{% else %}system performance issues{% endif %}, or to report critical bugs.
    - Choose **{% data variables.product.support_ticket_priority_normal %}** to {% if currentVersion == "free-pro-team@latest" %}request account recovery or spam unflagging, report user login issues{% else %}make technical requests like configuration changes and third-party integrations{% endif %}, and to report non-critical bugs.
    - Choose **{% data variables.product.support_ticket_priority_low %}** to ask general questions and submit requests for new features, purchases, training, or health checks.{% if currentVersion != "free-pro-team@latest" %}
1. From the "
{% data variables.product.prodname_enterprise %} Series" drop-down menu, select the version of {% data variables.product.prodname_ghe_server %} you're using.
  ![{% data variables.product.prodname_enterprise %} シリーズ ドロップダウンメニュー](/assets/images/enterprise/support/support-ticket-ghes-series.png)
{% endif %}
1. "Global Region（グローバルリージョン）"ドロップダウンメニューから、APAC (アジアパシフィック)、EMEA (ヨーロッパ、中東、アフリカ)、Americaのいずれかを自分の地域として選択してください。 ![[Global Region] ドロップダウンメニュー](/assets/images/enterprise/support/support-ticket-global-region.png)
1. **Add file（ファイルの追加）**をクリックし、ダウンロードしたDiagnosticsファイルを添付して、Diagnosticsをサポートチケットに含めてください。 ![[Add file] ボタン](/assets/images/enterprise/support/support-ticket-add-file.png)
