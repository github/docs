{% if  currentVersion == "enterprise-server@3.0" or currentVersion == "github-ae@latest" %}
{% note %}

**Note:** {% data variables.product.prodname_secret_scanning_caps %} for organization-owned repositories is currently in beta and subject to change.

{% endnote %}

{% endif %}
{% if currentVersion ver_gt "enterprise-server@3.0" %}

{% note %}

**Observação:** {% data variables.product.prodname_secret_scanning_caps %} está em beta em {% data variables.product.prodname_ghe_server %} 3.0. For the generally available release of secret scanning, upgrade to the latest release of {% data variables.product.prodname_ghe_server %}.


{% endnote %}

{% endif %}
