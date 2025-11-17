{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-code-security-and-analysis %}{% ifversion ghas-products %}
1. Under "{% data variables.product.prodname_secret_protection %}", to the right of "Validity checks", click **Enable**.{% else %}
{% data reusables.secret-scanning.validity-check-auto-enable %}{% endif %}
