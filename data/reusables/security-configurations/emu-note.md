{% ifversion ghec %}

If your enterprise uses {% data variables.product.prodname_emus %}, please note that enterprise-level {% data variables.product.prodname_security_configurations %} are not automatically rolled out to user namespace repositories. There are some additional {% data variables.product.prodname_secret_scanning %} settings that can be applied to user namespace repositories within the enteprise, but you cannot apply enterprise-level  {% data variables.product.prodname_security_configurations %} to this type of user-owner repository.

{% endif %}
