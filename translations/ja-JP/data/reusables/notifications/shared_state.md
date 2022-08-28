{% tip %}

**Tip:** Web通知とメール通知の両方を受信する場合、通知の既読あるいは未読状態を自動的に同期して、対応するメール通知を読んだら自動的にWeb通知が既読としてマークされるようにできます。 この同期を有効化するには、メールクライアントは{% if currentVersion == "free-pro-team@latest" %}`notifications@github.com`{% else %}{% if currentVersion == "github-ae@latest" %}{% data variables.product.product_name %}のホスト名{% elsif enterpriseServerVersions contains currentVersion %}サイト管理者が設定した{% data variables.product.product_location %}{% endif %}の`no-reply`メールアドレス{% endif %}からの画像を表示できなければなりません。

{% endtip %}
