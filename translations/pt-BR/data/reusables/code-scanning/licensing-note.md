{% note %}

**Note:** {% ifversion fpt %}
The {% data variables.product.prodname_codeql_cli %} is free to use on public repositories. The {% data variables.product.prodname_codeql_cli %} is also available in private repositories owned by organizations that use {% data variables.product.prodname_ghe_cloud %} and have a license for {% data variables.product.prodname_GH_advanced_security %}. Para obter informações, consulte "[{% data variables.product.product_name %} Termos e Condições](https://securitylab.github.com/tools/codeql/license) de do CLI de {% data variables.product.prodname_codeql %} " e "[{% data variables.product.prodname_codeql %}](https://codeql.github.com/docs/codeql-cli/)".
{%- elsif ghec %} The {% data variables.product.prodname_codeql_cli %} is free to use on public repositories that are maintained on {% data variables.product.prodname_dotcom_the_website %}, and available to use on private repositories that are owned by customers with an {% data variables.product.prodname_advanced_security %} license. Para obter informações, consulte "[{% data variables.product.product_name %} Termos e Condições](https://securitylab.github.com/tools/codeql/license) de do CLI de {% data variables.product.prodname_codeql %} " e "[{% data variables.product.prodname_codeql %}](https://codeql.github.com/docs/codeql-cli/)".
{%- elsif ghes or ghae %}O {% data variables.product.prodname_codeql_cli %} está disponível para clientes com uma licença de {% data variables.product.prodname_advanced_security %}.
{% endif %}
{% endnote %}
