{%- ifversion fpt %}
Detection of vulnerable calls is enabled on public repositories. Este análisis también está disponible en repositorios privados que le pertenezcan a las organizaciones que utilizan {% data variables.product.prodname_ghe_cloud %} y que tienen {% data variables.product.prodname_GH_advanced_security %} con licencia.

{%- elsif ghec %}
La detección de llamadas vulnerables se incluye en {% data variables.product.product_name %} para repositorios públicos. Para detectar llamadas vulnerables en repositorios privados que le pertenecen a las organizaciones, tu organización debe tener una licencia para {% data variables.product.prodname_GH_advanced_security %}.

{%- elsif ghes > 3.5 %}
La detección de llamadas vulnerables está disponible para los repositorios que pertenecen a organizaciones de {% data variables.product.product_name %}. Esta característica requiere una licencia para la {% data variables.product.prodname_GH_advanced_security %}.

{%- elsif ghae-issue-6076 %}
La detección de llamadas vulnerables está disponible para los repositorios que pertenecen a organizaciones de {% data variables.product.product_name %}. Esta es una característica de la {% data variables.product.prodname_GH_advanced_security %} (gratuita durante el lanzamiento beta).

{%- endif %} {% data reusables.advanced-security.more-info-ghas %}
