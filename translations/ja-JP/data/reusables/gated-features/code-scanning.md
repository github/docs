{% ifversion fpt or ghec %}{% data variables.product.prodname_code_scanning_capc %}は、Organizationが所有する{% data variables.product.prodname_GH_advanced_security %}が有効化されたすべてのパブリック及びプライベートリポジトリで利用できます。
{%- elsif ghes > 3.0 %}{% data variables.product.prodname_code_scanning_capc %}は、Organizationが所有するリポジトリで{% data variables.product.prodname_GH_advanced_security %}が有効化されていれば利用できます。
{%- elsif ghae %}
{% data variables.product.prodname_code_scanning_capc %}は、ベータリリースの間は無料の{% data variables.product.prodname_GH_advanced_security %}の一部として利用できます。
{%- else %}
{% data variables.product.prodname_code_scanning_capc %}は、{% data variables.product.prodname_GH_advanced_security %}のライセンスを持っているなら利用できます。{% endif %} {% data reusables.advanced-security.more-info-ghas %}
