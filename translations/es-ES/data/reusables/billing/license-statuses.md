{% ifversion ghec %}
Si tu licencia incluye {% data variables.product.prodname_vss_ghe %}, puedes identificar si una cuenta personal de {% data variables.product.prodname_dotcom_the_website %} coincidió exitosamente con un suscriptor de {% data variables.product.prodname_vs %} si descargas el archivo de CSV que contiene detalles de licencia adicionales. El estado de licencia será uno de los siguientes.
- "Matched": La cuenta personal en {% data variables.product.prodname_dotcom_the_website %} está enlazada a un suscriptor de {% data variables.product.prodname_vs %}.
- "Pending Invitation": Una invitación se envió a un suscriptor de {% data variables.product.prodname_vs %}, pero este no la ha aceptado.
- En blanco: No hay asociación de {% data variables.product.prodname_vs %} a considerar para la cuenta personal de {% data variables.product.prodname_dotcom_the_website %}.
{% endif %}
