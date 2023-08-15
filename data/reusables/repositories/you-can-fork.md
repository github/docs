{% ifversion ghae %}
If the policies for your enterprise permit forking private and internal repositories, you can fork a repository to your personal account or to an organization where you have permission to create repositories. For more information, see "[AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)."

{% elsif ghes or ghec %}
You can fork a private or internal repository to your personal account or to an organization on {% data variables.location.product_location %} where you have permission to create repositories, provided that the settings for the repository and your enterprise policies allow forking. Generally, you can fork any public repository to your personal account or to an organization where you have permission to create repositories{% ifversion ghec %}, unless you're a member of an {% data variables.enterprise.prodname_emu_enterprise %}{% endif %}.

{% elsif fpt %}
You can fork any public repository to your personal account, or to an organization where you have permission to create repositories. If you have access to a private repository and the owner permits forking, you can fork the repository to your personal account, or to an organization on {% data variables.product.prodname_team %} where you have permission to create repositories. You cannot fork a private repository to an organization using {% data variables.product.prodname_free_team %}. For more information about {% data variables.product.prodname_team %} and {% data variables.product.prodname_free_team %}, see "[AUTOTITLE](/get-started/learning-about-github/githubs-plans)."
{% endif %}
