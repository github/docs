{% if currentVersion == "github-ae@latest" %}
{% warning %}

** Warning:** Self-hosted runners are currently disabled for {% data variables.product.prodname_ghe_managed %}. This is because {% data variables.product.prodname_ghe_managed %} offers guarantees for security boundaries which are incompatible with how self-hosted runners work. However, if you do need to use self-hosted runners with {% data variables.product.prodname_ghe_managed %} and understand the security implications, you can contact {% data variables.product.prodname_dotcom %} support for a security exception that will enable self-hosted runners.

If you don't need self-hosted runners, then you can use {% data variables.actions.hosted_runner %}s to run your workflows. For more information, see "[About {% data variables.actions.hosted_runner %}s](/actions/using-github-hosted-runners/about-ae-hosted-runners)."

{% endwarning %}
{% endif %}
