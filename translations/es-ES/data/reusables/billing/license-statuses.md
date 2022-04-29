{% ifversion ghec %}
Si tu licencia incluye {% data variables.product.prodname_vss_ghe %}, puedes identificar si una cuenta personal de {% data variables.product.prodname_dotcom_the_website %} coincidió exitosamente con un suscriptor de {% data variables.product.prodname_vs %} si descargas el archivo de CSV que contiene detalles de licencia adicionales. The license status will be one of the following.
- "Matched": The personal account on {% data variables.product.prodname_dotcom_the_website %} is linked with a {% data variables.product.prodname_vs %} subscriber.
- "Pending Invitation": An invitation was sent to a {% data variables.product.prodname_vs %} subscriber, but the subscriber has not accepted the invitation.
- Blank: There is no {% data variables.product.prodname_vs %} association to consider for the personal account on {% data variables.product.prodname_dotcom_the_website %}.
{% endif %}
