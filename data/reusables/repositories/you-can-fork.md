{% ifversion ghae %}If the policies for your enterprise permit forking internal and private repositories, you{% else %}You{% endif %} can fork a repository to your personal account or any organization where you have repository creation permissions. For more information, see "[Roles in an organization](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)."

{% ifversion fpt or ghes or ghec %}

If you have access to a private repository and the owner permits forking, you can fork the repository to your personal account or any organization on {% ifversion fpt or ghec %}{% data variables.product.prodname_team %}{% else %}{% data variables.product.product_location %}{% endif %} where you have repository creation permissions. {% ifversion fpt or ghec %}You cannot fork a private repository to an organization using {% data variables.product.prodname_free_team %}. For more information, see "[GitHub's products](/articles/githubs-products)."{% endif %}

{% endif %}
