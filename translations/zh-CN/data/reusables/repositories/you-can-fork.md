{% ifversion ghae %}
如果您的企业策略允许复刻私有存储库和内部存储库，您可以将仓库复刻到您的个人帐户或您具有存储库创建权限的组织。 更多信息请参阅“[组织中的角色](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)”。

{% elsif ghes or ghec %}
您可以将私有或内部存储库复刻到您在
您具有存储库创建权限的 {% data variables.product.product_location %} 上的个人帐户或组织（如果存储库的设置和企业策略允许复刻）。

{% elsif fpt %}
如果您有权访问私有存储库，并且所有者允许复刻，则可以将存储库复刻到您在
您具有存储库创建权限的 {% data variables.product.prodname_team %} 上的个人帐户或组织。 您不能将私有存储库复刻到使用 {% data variables.product.prodname_free_team %} 的组织。 更多信息请参阅“[GitHub 的产品](/articles/githubs-products)”。
{% endif %}
