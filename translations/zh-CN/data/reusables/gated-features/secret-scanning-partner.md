{%- ifversion fpt %}
{% data variables.product.prodname_secret_scanning_partner_caps %} is automatically run on public repositories in all products on {% data variables.product.prodname_dotcom_the_website %}. {% data variables.product.prodname_secret_scanning_GHAS_caps %} is available for repositories owned by organizations that use {% data variables.product.prodname_ghe_cloud %} and have a license for {% data variables.product.prodname_GH_advanced_security %}.

{%- elsif ghec %}
{% data variables.product.prodname_secret_scanning_partner_caps %} is automatically run on all public repositories. If you have a license for {% data variables.product.prodname_GH_advanced_security %}, you can enable and configure {% data variables.product.prodname_secret_scanning_GHAS %} for any repository owned by an organization.

{%- elsif ghes %}
{% data variables.product.prodname_secret_scanning_caps %} is available for organization-owned repositories in {% data variables.product.product_name %} if your enterprise has a license for {% data variables.product.prodname_GH_advanced_security %}.

{%- elsif ghae %}
{% data variables.product.prodname_secret_scanning_caps %} 可用于 {% data variables.product.product_name %} 中的组织拥有的存储库。 这是一项 {% data variables.product.prodname_GH_advanced_security %} 功能（在测试版期间免费）。

{%- endif %} {% ifversion not ghae %}更多信息请参阅“[GitHub 的产品](/articles/githubs-products)”。{% endif %}
