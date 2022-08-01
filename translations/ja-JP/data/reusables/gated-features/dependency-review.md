{%- ifversion fpt %}
Dependency review is enabled on public repositories. Dependency review is also available in private repositories owned by organizations that use {% data variables.product.prodname_ghe_cloud %} and have a license for {% data variables.product.prodname_GH_advanced_security %}.

{%- elsif ghec %}
依存関係レビューは、パブリックリポジトリに対して{% data variables.product.product_name %}に含まれています。 To use dependency review in private repositories owned by organizations, you must have a license for {% data variables.product.prodname_GH_advanced_security %}.

{%- elsif ghes %}
Dependency review is available for organization-owned repositories in {% data variables.product.product_name %}. This feature requires a license for {% data variables.product.prodname_GH_advanced_security %}.

{%- elsif ghae %}
Dependency review is available for organization-owned repositories in {% data variables.product.product_name %}. This is a {% data variables.product.prodname_GH_advanced_security %} feature (free during the beta release).

{%- endif %} {% data reusables.advanced-security.more-info-ghas %}
