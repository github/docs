{% ifversion ghec %}
If your license includes {% data variables.product.prodname_vss_ghe %}, you can identify whether a user account on {% data variables.product.prodname_dotcom_the_website %} has successfully matched with a {% data variables.product.prodname_vs %} subscriber by downloading the CSV file that contains additional license details. El estado de licencia será uno de los siguientes.
- "Matched": The user account on {% data variables.product.prodname_dotcom_the_website %} is linked with a {% data variables.product.prodname_vs %} subscriber.
- "Pending Invitation": Una invitación se envió a un suscriptor de {% data variables.product.prodname_vs %}, pero este no la ha aceptado.
- Blank: There is no {% data variables.product.prodname_vs %} association to consider for the user account on {% data variables.product.prodname_dotcom_the_website %}.
{% endif %}
