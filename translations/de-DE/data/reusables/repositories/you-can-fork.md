{% ifversion ghae %}If the policies for your enterprise permit forking internal and private repositories, you{% else %}You{% endif %} can fork a repository to your user account or any organization where you have repository creation permissions. Weitere Informationen finden Sie unter „[Berechtigungsebenen für eine Organisation](/articles/permission-levels-for-an-organization)".

{% ifversion fpt or ghes %}

If you have access to a private repository and the owner permits forking, you can fork the repository to your user account or any organization on {% ifversion fpt %}{% data variables.product.prodname_team %}{% else %}{% data variables.product.product_location %}{% endif %} where you have repository creation permissions. {% ifversion fpt %}You cannot fork a private repository to an organization using {% data variables.product.prodname_free_team %}. For more information, see "[GitHub's products](/articles/githubs-products)."{% endif %}

{% endif %}
