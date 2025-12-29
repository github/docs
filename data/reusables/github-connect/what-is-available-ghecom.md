{% ifversion ghecom-github-connect %}
If you're connecting to an enterprise on **{% data variables.enterprise.data_residency_site %}**:
* Server Statistics is not available.
* {% data variables.product.prodname_dotcom_the_website %} actions are not available.
{%- ifversion ghes < 3.15 %}
* To use automatic user license sync, you must upgrade to {% data variables.product.prodname_ghe_server %} version 3.15 or later.
{%- endif %}
{% endif %}
