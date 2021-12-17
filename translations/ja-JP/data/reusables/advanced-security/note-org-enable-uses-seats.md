{% ifversion fpt or ghes > 3.0 or ghec %}
{% note %}
**ノート:**

{% data variables.product.prodname_GH_advanced_security %}を有効化した場合、それらのリポジトリのコミッターは{% data variables.product.prodname_GH_advanced_security %}ライセンス上でシートを利用することになります。 このオプションは、ライセンスの容量を超えた場合には無効化されます。 {% ifversion fpt or ghec %}For more information, see "[About billing for {% data variables.product.prodname_GH_advanced_security %}](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security)."{% endif %}
{% endnote %}
{% endif %}
