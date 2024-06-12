{% ifversion secret-scanning-non-provider-patterns %}

{% note %}

**Note:** The summary views ({% ifversion security-overview-dashboard %}"Overview", {% endif %}"Coverage" and "Risk") show data only for high confidence alerts. {% ifversion security-overview-additional-tools %}{% data variables.product.prodname_secret_scanning_caps %} {% else %}{% data variables.product.prodname_code_scanning_caps %} alerts from third-party tools, and {% data variables.product.prodname_secret_scanning %}{% endif %} alerts for ignored directories and non-provider alerts are all omitted from these views. Consequently, the individual alert views may include a larger number of open and closed alerts.

{% endnote %}

{% endif %}
