{% ifversion ghae %}If the policies for your enterprise permit forking internal and private repositories, you{% else %}You{% endif %} can fork a repository to your personal account or any organization where you have repository creation permissions. 更多信息请参阅“[组织中的角色](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)”。

{% ifversion fpt or ghes or ghec %}

If you have access to a private repository and the owner permits forking, you can fork the repository to your personal account or any organization on {% ifversion fpt or ghec %}{% data variables.product.prodname_team %}{% else %}{% data variables.product.product_location %}{% endif %} where you have repository creation permissions. {% ifversion fpt or ghec %}您不能将私有仓库复刻到使用 {% data variables.product.prodname_free_team %} 的组织。 更多信息请参阅“[GitHub 的产品](/articles/githubs-products)”。{% endif %}

{% endif %}
