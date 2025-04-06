{%- ifversion fpt %}
The {% data variables.dependency-review.action_name %} is available for public repositories. The {% data variables.dependency-review.action_name %} is also available in private repositories owned by organizations that use {% data variables.product.prodname_ghe_cloud %} and have a license for {% data variables.product.prodname_GH_advanced_security %}.

{%- elsif ghec %}
The {% data variables.dependency-review.action_name %} is available for public repositories. To configure the {% data variables.dependency-review.action_name %} in private repositories owned by organizations, you must have a license for {% data variables.product.prodname_GH_advanced_security %}.

{%- elsif ghes %}
The {% data variables.dependency-review.action_name %} is available for organization-owned repositories in {% data variables.product.product_name %}. This feature requires a license for {% data variables.product.prodname_GH_advanced_security %}.

{%- endif %} {% data reusables.advanced-security.more-info-ghas %}
