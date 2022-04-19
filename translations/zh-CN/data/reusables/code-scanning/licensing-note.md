{% note %}

**Note:** {% ifversion fpt %}
The {% data variables.product.prodname_codeql_cli %} is free to use on public repositories. The {% data variables.product.prodname_codeql_cli %} is also available in private repositories owned by organizations that use {% data variables.product.prodname_ghe_cloud %} and have a license for {% data variables.product.prodname_GH_advanced_security %}. 有关信息请参阅“[{% data variables.product.product_name %} {% data variables.product.prodname_codeql %} 条款和条件](https://securitylab.github.com/tools/codeql/license)”和“[{% data variables.product.prodname_codeql %} CLI](https://codeql.github.com/docs/codeql-cli/)”。
{%- elsif ghec %} The {% data variables.product.prodname_codeql_cli %} is free to use on public repositories that are maintained on {% data variables.product.prodname_dotcom_the_website %}, and available to use on private repositories that are owned by customers with an {% data variables.product.prodname_advanced_security %} license. 有关信息请参阅“[{% data variables.product.product_name %} {% data variables.product.prodname_codeql %} 条款和条件](https://securitylab.github.com/tools/codeql/license)”和“[{% data variables.product.prodname_codeql %} CLI](https://codeql.github.com/docs/codeql-cli/)”。
{%- elsif ghes or ghae %}{% data variables.product.prodname_codeql_cli %} 可用于拥有 {% data variables.product.prodname_advanced_security %} 许可证的客户。
{% endif %}
{% endnote %}
