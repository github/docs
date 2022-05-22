1. "Your email address（メールアドレス）"の下に、{% data variables.product.product_name %}アカウントに関連づけられるメールアドレスを入力してください。 ![[Your email address] フィールド](/assets/images/enterprise/support/support-ticket-email-address-field.png)
1. "Subject（題名）"の下に、問題を説明するタイトルを入力してください。 ![Subject field (題名)](/assets/images/enterprise/support/support-ticket-subject-field.png)
1. "Description（説明）"の下に、{% data variables.contact.enterprise_support %}チームによる問題のトラブルシュートの助けになる追加情報があれば入力してください。 有益な情報の例としては、以下のようなものがあります: ![説明フィールド](/assets/images/enterprise/support/support-ticket-description-field.png)
    - 問題を再現する手順
    - 問題が発見された状況に特徴的なこと (たとえば初回の発生、あるいは特定の事象の後の発生、発生頻度、問題のビジネス上の影響、想定される緊急度)
    - 正確なエラーメッセージ
1. {% data variables.product.prodname_enterprise %} Product（{% data variables.product.prodname_enterprise %}製品）ドロップダウンメニューから、{% if currentVersion == "free-pro-team@latest" %}{% data variables.product.prodname_ghe_cloud %}{% else %}{% data variables.product.prodname_ghe_server %}{% endif %}を選択してください。 ![Priority (優先度) のドロップダウンメニュー](/assets/images/enterprise/support/support-ticket-ghe-product.png)
1. "Priority（緊急度）"ドロップダウンメニューから、適切な緊急度を選択してください。 詳しい情報については「[サポートチケットへの優先度の割り当て]{% if currentVersion == "free-pro-team@latest" %}(/articles/about-github-premium-support-for-github-enterprise-cloud#assigning-a-priority-to-a-support-ticket){% else %}(/enterprise/admin/guides/enterprise-support/about-github-enterprise-support#assigning-a-priority-to-a-support-ticket){% endif %}」を参照してください。 ![Priority (優先度) のドロップダウンメニュー](/assets/images/enterprise/support/support-ticket-priority.png)
    - {% if currentVersion == "free-pro-team@latest" %}重大なシステムの障害{% else %}重大なシステム障害、重要なシステムの運用に影響するサービス中断、セキュリティインシデント、ライセンスの期限切れ{% endif %}を報告するには、 **{% data variables.product.support_ticket_priority_urgent %}**を選択してください。
    - {% if currentVersion == "free-pro-team@latest" %}センシティブなデータ（コミット、Issue、プルリクエスト、アップロードされた添付ファイル）の自分のアカウントとOrganizationのリストアからの削除{% else %}システムパフォーマンスの問題{% endif %}を含むビジネスにインパクトのある問題をレポートしたり、重大なバグのレポートをしたりするには**{% data variables.product.support_ticket_priority_high %}**を選択してください。
    - {% if currentVersion == "free-pro-team@latest" %}アカウントの回復やスパム認定の取り消しのリクエスト、ユーザーログインの問題のレポート{% else %}設定変更やサードパーティとのインテグレーションのような技術的なリクエスト{% endif %}や、重大ではないバグのレポートには、**{% data variables.product.support_ticket_priority_normal %}**を選択してください。
    - 一般的な質問や、新機能のリクエストのサブミット、購入、トレーニング、ヘルスチェックについては**{% data variables.product.support_ticket_priority_low %}**を選択してください。{% if enterpriseServerVersions contains currentVersion %}
1. ドロップダウンメニューの
"{% data variables.product.prodname_enterprise %} Series（{% data variables.product.prodname_enterprise %}シリーズ）"から、使用している{% data variables.product.prodname_ghe_server %}のバージョンを選択してください。
  ![{% data variables.product.prodname_enterprise %} シリーズ ドロップダウンメニュー](/assets/images/enterprise/support/support-ticket-ghes-series.png)
{% endif %}
1. "Global Region（グローバルリージョン）"ドロップダウンメニューから、APAC (アジアパシフィック)、EMEA (ヨーロッパ、中東、アフリカ)、Americaのいずれかを自分の地域として選択してください。 ![[Global Region] ドロップダウンメニュー](/assets/images/enterprise/support/support-ticket-global-region.png)
1. **Add file（ファイルの追加）**をクリックし、ダウンロードしたDiagnosticsファイルを添付して、Diagnosticsをサポートチケットに含めてください。 ![[Add file] ボタン](/assets/images/enterprise/support/support-ticket-add-file.png)
