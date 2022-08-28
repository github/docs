{% if enterpriseServerVersions contains currentVersion %}
サイト管理者は、
この機能を使えるようにするには、{% data variables.product.product_location %}の脆弱な依存関係に対する{% if currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot %}{% else %}セキュリティ{% endif %}アラートを有効化しなければなりません。 詳しい情報については、「[{% data variables.product.prodname_ghe_server %}の脆弱性のある依存関係に関するセキュリティアラートの有効化](/enterprise/{{ currentVersion }}/admin/configuration/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server)」を参照してください。
{% endif %}
