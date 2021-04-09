{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
{% data variables.product.prodname_secret_scanning_caps %} is available {% if currentVersion == "free-pro-team@latest" %}in public repositories, and in private repositories owned by organizations with {% else %}if you have {% endif %}an {% data variables.product.prodname_advanced_security %} license. {% data reusables.advanced-security.more-info-ghas %}
{% endif %}

{% if currentVersion == "github-ae@latest" %}
{% data variables.product.prodname_secret_scanning_caps %} is available as part of {% data variables.product.prodname_GH_advanced_security %}, which is free during the beta release.
{% endif %}