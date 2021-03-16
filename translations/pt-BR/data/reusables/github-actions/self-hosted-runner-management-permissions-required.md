A self-hosted runner can be located in either your repository, organization, or {% if currentVersion == "free-pro-team@latest" %}enterprise account settings on {% data variables.product.prodname_dotcom %}{% elsif enterpriseServerVersions contains currentVersion and currentVersion ver_gt "enterprise-server@2.21" %} enterprise settings on {% data variables.product.product_location %}{% endif %}. To manage a self-hosted runner, you must have the following permissions, depending on where the self-hosted runner was added:
- **User repository**: You must be the repository owner.
- **Organization**: You must be an organization owner. 
- **Organization repository**: You must be an organization owner, or have admin access to the repository.
{% if currentVersion == "free-pro-team@latest" %}
- **Enterprise account**: You must be an enterprise owner.
{% elsif enterpriseServerVersions contains currentVersion and currentVersion ver_gt "enterprise-server@2.21" %}
- **Enterprise**: You must be a {% data variables.product.prodname_enterprise %} site administrator.
{% endif %}
