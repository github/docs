{% ifversion ghae %}If the policies for your enterprise permit forking internal and private repositories, you{% else %}You{% endif %} can fork a repository to your personal account or any organization where you have repository creation permissions. Para obtener más información, consulta la sección "[Roles en una organización](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)".

{% ifversion fpt or ghes or ghec %}

If you have access to a private repository and the owner permits forking, you can fork the repository to your personal account or any organization on {% ifversion fpt or ghec %}{% data variables.product.prodname_team %}{% else %}{% data variables.product.product_location %}{% endif %} where you have repository creation permissions. {% ifversion fpt or ghec %}No puedes bifurcar un repositorio privado hacia una organización que utilice {% data variables.product.prodname_free_team %}. Para obtener más información, consulta la sección "[Productos de GitHub](/articles/githubs-products)".{% endif %}

{% endif %}
