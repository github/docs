{%- ifversion fpt %}
Detection of vulnerable calls is enabled on public repositories. This analysis is also available in private repositories owned by organizations that use {% data variables.product.prodname_ghe_cloud %} and have licensed {% data variables.product.prodname_GH_advanced_security %}.

{%- elsif ghec %}
Detection of vulnerable calls is included in {% data variables.product.product_name %} for public repositories. To detect vulnerable calls in private repositories owned by organizations, your organization must have a license for {% data variables.product.prodname_GH_advanced_security %}.

{%- elsif ghes > 3.5 %}
Detection of vulnerable calls is available for organization-owned repositories in {% data variables.product.product_name %}. Esta característica requiere una licencia para la {% data variables.product.prodname_GH_advanced_security %}.

{%- elsif ghae-issue-6076 %}
La detección de llamadas vulnerables está disponible para los repositorios que pertenecen a organizaciones de {% data variables.product.product_name %}. Esta es una característica de la {% data variables.product.prodname_GH_advanced_security %} (gratuita durante el lanzamiento beta).

{%- endif %} {% data reusables.advanced-security.more-info-ghas %}
