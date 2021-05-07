{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
{% data variables.product.prodname_secret_scanning_caps %}は{% if currentVersion == "free-pro-team@latest" %}パブリックリポジトリ及び{% data variables.product.prodname_advanced_security %}ライセンスを持つOrganizationが所有するプライベートリポジトリで{% else %}{% data variables.product.prodname_advanced_security %}ライセンスを持っていれば{% endif %}利用できます。 {% data reusables.advanced-security.more-info-ghas %}
{% endif %}

{% if currentVersion == "github-ae@latest" %}
{% data variables.product.prodname_secret_scanning_caps %}は、ベータリリースの間は無料である{% data variables.product.prodname_GH_advanced_security %}の一部として利用できます。
{% endif %}