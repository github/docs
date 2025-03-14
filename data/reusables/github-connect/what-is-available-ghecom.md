{% ifversion ghecom-github-connect %}
If you're connecting to an enterprise on **{% data variables.enterprise.data_residency_site %}**{% ifversion ghecom-license-sync %}, Server Statistics is not available.{% else %}:
* Server Statistics is not available.
* To use automatic user license sync, you must upgrade to {% data variables.product.prodname_ghe_server %} version 3.15 or later.{% endif %}
{% endif %}
