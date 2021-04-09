{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}
{% note %}
**ノート:**

{% data variables.product.prodname_GH_advanced_security %}を有効化した場合、それらのリポジトリのコミッターは{% data variables.product.prodname_GH_advanced_security %}ライセンス上でシートを利用することになります。 このオプションは、ライセンスの容量を超えた場合には無効化されます。 {% if currentVersion == "free-pro-team@latest" %}詳しい情報については「[{% data variables.product.prodname_GH_advanced_security %}のライセンスについて](/github/setting-up-and-managing-billing-and-payments-on-github/about-licensing-for-github-advanced-security)」を参照してください。{% endif %}
{% endnote %}
{% endif %}