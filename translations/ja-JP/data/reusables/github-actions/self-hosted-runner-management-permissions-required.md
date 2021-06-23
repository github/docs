セルフホストランナーは、リポジトリ、Organization、{% if currentVersion == "free-pro-team@latest" %}{% data variables.product.prodname_dotcom %}上のEnterpriseアカウント設定{% elsif enterpriseServerVersions contains currentVersion and currentVersion ver_gt "enterprise-server@2.21" or currentVersion == "github-ae@latest" %} {% data variables.product.product_location %}上のEnterprise設定{% endif %}で見つかります。 セルフホストランナーを管理するには、セルフホストランナーが追加された場所に応じて以下の権限が必要になります。
- **ユーザリポジトリ**: リポジトリのオーナーでなければなりません。
- **Organization**: Organizationのオーナーでなければなりません。
- **Organizationのリポジトリ**: Organizationのオーナーであるか、リポジトリへの管理アクセス権を持っていなければなりません。
{% if currentVersion == "free-pro-team@latest" %}
- **Enterpriseアカウント**: Enterpriseのオーナーでなければなりません。
{% elsif enterpriseServerVersions contains currentVersion and currentVersion ver_gt "enterprise-server@2.21" or currentVersion == "github-ae@latest" %}
- **Enterprise**: {% data variables.product.prodname_enterprise %}サイト管理者でなければなりません。
{% endif %}
