{% note %}

**ノート:** {% ifversion fpt %}
{% data variables.product.prodname_codeql_cli %}はパブリックリポジトリでは無料で使用できます。 {% data variables.product.prodname_codeql_cli %}は、{% data variables.product.prodname_ghe_cloud %}を使用し、{% data variables.product.prodname_GH_advanced_security %}のライセンスを持っているOrganizationが所有するプライベートリポジトリでも使用できます。 詳細については「[{% data variables.product.product_name %} {% data variables.product.prodname_codeql %}の利用規約](https://securitylab.github.com/tools/codeql/license)」及び「[{% data variables.product.prodname_codeql %} CLI](https://codeql.github.com/docs/codeql-cli/)」を参照してください。
{%- elsif ghec %}{% data variables.product.prodname_codeql_cli %}は{% data variables.product.prodname_dotcom_the_website %}でメンテナンスされているパブリックリポジトリでは無料で使用でき、{% data variables.product.prodname_advanced_security %}ライセンスを持っているお客様が所有するプライベートリポジトリでも使用できます。 詳細については「[{% data variables.product.product_name %} {% data variables.product.prodname_codeql %}の利用規約](https://securitylab.github.com/tools/codeql/license)」及び「[{% data variables.product.prodname_codeql %} CLI](https://codeql.github.com/docs/codeql-cli/)」を参照してください。
{%- elsif ghes or ghae %}{% data variables.product.prodname_codeql_cli %}は、{% data variables.product.prodname_advanced_security %}ライセンスを持つお客様にご利用いただけます。
{% endif %}
{% endnote %}
