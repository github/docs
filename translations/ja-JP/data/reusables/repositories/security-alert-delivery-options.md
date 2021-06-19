{% if currentVersion != "github-ae@latest" %}
リポジトリにサポートされている依存関係マニフェストがあり
{% if currentVersion == "free-pro-team@latest" %}（そしてプライベートリポジトリの場合に依存関係グラフをセットアップしているなら）{% endif %}、リポジトリ内に脆弱な依存関係を{% data variables.product.product_name %}が検出すると、週次のダイジェストメールを受け取ることになります。 セキュリティアラートは、Web通知、個別のメール通知、日次のメールダイジェスト、{% data variables.product.product_name %}インターフェース上のアラートとして設定することもできます。 詳しい情報については、「[脆弱性のある依存関係に対するアラートについて](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)」を参照してください。
{% endif %}