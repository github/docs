{% ifversion packages-inherit-permissions %}

{% note %}

**Note:** If you publish a package that is linked to a repository, the package automatically inherits the access permissions of the linked repository, and {% data variables.product.prodname_actions %} workflows in the linked repository automatically get access to the package, unless your organization has disabled automatic inheritance of access permissions. For more information, see "[AUTOTITLE](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#about-inheritance-of-access-permissions)."

{% endnote %}

{% endif %}
