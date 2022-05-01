{% ifversion ghae %}If the policies for your enterprise permit forking internal and private repositories, you{% else %}You{% endif %} can fork a repository to your personal account or any organization where you have repository creation permissions. 詳しい情報については「[Organization内のロール](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)」を参照してください。

{% ifversion fpt or ghes or ghec %}

If you have access to a private repository and the owner permits forking, you can fork the repository to your personal account or any organization on {% ifversion fpt or ghec %}{% data variables.product.prodname_team %}{% else %}{% data variables.product.product_location %}{% endif %} where you have repository creation permissions. {% ifversion fpt or ghec %}ぷらいべーとリポジトリは、{% data variables.product.prodname_free_team %}を使っているOrganizationにはフォークできません。 詳しい情報については「[GitHubの製品](/articles/githubs-products)」を参照してください。{% endif %}

{% endif %}
