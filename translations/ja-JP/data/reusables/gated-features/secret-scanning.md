{% if currentVersion == "free-pro-team@latest" %}{% data variables.product.prodname_secret_scanning_caps %}は、すべてのパブリック及びOrganizationが所有する{% data variables.product.prodname_GH_advanced_security %}が有効化されたプライベートリポジトリで利用できます。
{%- elsif currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@next" %}{% data variables.product.prodname_secret_scanning_caps %}は、Organizationが所有するリポジトリで{% data variables.product.prodname_GH_advanced_security %}が有効化されていれば利用できます。
{%- elsif currentVersion == "github-ae@latest" %}
{% data variables.product.prodname_secret_scanning_caps %}は、ベータリリースの間は無料である{% data variables.product.prodname_GH_advanced_security %}の一部として利用できます。
{%- else %}
{% data variables.product.prodname_secret_scanning_caps %}は、{% data variables.product.prodname_GH_advanced_security %}のライセンスを持っているなら利用できます。{% endif %} {% data reusables.advanced-security.more-info-ghas %}