{% ifversion ghes > 2.21 %}
{% note %}

**Note:** With {% data variables.product.prodname_github_connect %} enabled, {% data variables.product.prodname_actions %} will try to find the repository on your {% data variables.product.prodname_ghe_server %} instance first before falling back to {% data variables.product.prodname_dotcom %}. If a user creates an organization and repository in your enterprise that matches an organization and repository name on {% data variables.product.prodname_dotcom %}, the repository on your enterprise will be used in place of the {% data variables.product.prodname_dotcom %} repository. A malicious user could take advantage of this behavior to run code as part of a workflow.

{% endnote %}
{% endif %}
