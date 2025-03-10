* {% data variables.product.prodname_actions %} are enabled.{% ifversion fpt %}
* It is publicly visible{% ifversion ghas-products-cloud %}, or {% data variables.product.prodname_GH_code_security %} is enabled.{% endif %}{%- elsif ghec %}
* It is publicly visible, or {% data variables.product.prodname_GH_code_security %} is enabled.{%- elsif ghes %}
* {% data variables.product.prodname_GH_code_security %} is enabled.{% endif %}
