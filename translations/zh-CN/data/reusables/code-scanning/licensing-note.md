{% note %}

**注意：** {% ifversion fpt %}
 {% data variables.product.prodname_codeql_cli %} 可在公共存储库上免费使用。 {% data variables.product.prodname_codeql_cli %} 也可用于使用 {% data variables.product.prodname_ghe_cloud %} 并有 {% data variables.product.prodname_GH_advanced_security %} 许可证的组织拥有的私有存储库。 有关信息请参阅“[{% data variables.product.product_name %} {% data variables.product.prodname_codeql %} 条款和条件](https://securitylab.github.com/tools/codeql/license)”和“[{% data variables.product.prodname_codeql %} CLI](https://codeql.github.com/docs/codeql-cli/)”。
{%- elsif ghec %} {% data variables.product.prodname_codeql_cli %} 可以免费用于在 {% data variables.product.prodname_dotcom_the_website %}上维护的公共存储库，并可用于具有 {% data variables.product.prodname_advanced_security %} 许可证的客户拥有的私有存储库。 有关信息请参阅“[{% data variables.product.product_name %} {% data variables.product.prodname_codeql %} 条款和条件](https://securitylab.github.com/tools/codeql/license)”和“[{% data variables.product.prodname_codeql %} CLI](https://codeql.github.com/docs/codeql-cli/)”。
{%- elsif ghes or ghae %}{% data variables.product.prodname_codeql_cli %} 可用于拥有 {% data variables.product.prodname_advanced_security %} 许可证的客户。
{% endif %}
{% endnote %}
