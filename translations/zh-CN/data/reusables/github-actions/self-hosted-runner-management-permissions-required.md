自托管运行器可位于 {% data variables.product.prodname_dotcom %} 的组织或仓库设置中。 要管理自托管运行器，您必须拥有以下权限，具体取决于添加自托管运行器的位置：
- **User repository**: You must be the repository owner.
- **Organization**: You must be an organization owner.
- **Organization repository**: You must be an organization owner, or have admin access to the repository.
{% if currentVersion == "free-pro-team@latest" %}
- **Enterprise account**: You must be an enterprise owner.
{% else if currentVersion != "free-pro-team@latest" and currentVersion ver_gt "enterprise-server@2.21" %}
- **Enterprise**: You must be a {% data variables.product.prodname_enterprise %} site administrator.
{% endif %}
