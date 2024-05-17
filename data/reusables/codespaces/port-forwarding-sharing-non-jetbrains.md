## Sharing a port

{% note %}

**Note:** You can only make a port private to an organization if your organization uses {% data variables.product.prodname_team %} or {% data variables.product.prodname_ghe_cloud %}.

{% endnote %}

If you want to share a forwarded port with others, you can either make the port private to your organization or make the port public. After you make a port private to your organization, anyone in the organization with the port's URL can view the running application. After you make a port public, anyone who knows the URL and port number can view the running application without needing to authenticate.

{% note %}

**Note:** Your choice of port visibility options may be limited by a policy configured for your organization. For more information, see "[AUTOTITLE](/codespaces/managing-codespaces-for-your-organization/restricting-the-visibility-of-forwarded-ports)."

{% endnote %}
