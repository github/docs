セルフホストランナーは、リポジトリ、Organization、{% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}上のEnterpriseアカウント設定{% elsif ghes or ghae %} {% data variables.product.product_location %}上のEnterprise設定{% endif %}で見つかります。 セルフホストランナーを管理するには、セルフホストランナーが追加された場所に応じて以下の権限が必要になります。
- **ユーザリポジトリ**: リポジトリのオーナーでなければなりません。
- **Organization**: Organizationのオーナーでなければなりません。
- **Organizationのリポジトリ**: Organizationのオーナーであるか、リポジトリへの管理アクセス権を持っていなければなりません。
{% ifversion ghec %}
- **Enterpriseアカウント**: Enterpriseのオーナーでなければなりません。
{% elsif ghes or ghae %}
- **Enterprise**: {% data variables.product.prodname_enterprise %}サイト管理者でなければなりません。
{% endif %}
