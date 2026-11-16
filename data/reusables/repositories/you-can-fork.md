{% ifversion ghec %}
Generally, you can fork any public repository to your personal account or to an organization where you have permission to create repositories, unless you're a member of an {% data variables.enterprise.prodname_emu_enterprise %}.

Forking of private and internal repositories is governed by repository, organization, and enterprise policies. With the most permissive policies:

* You can fork a private repository to your personal account or to an organization where you have permission to create repositories, including an organization in another enterprise.
* You can fork an internal repository to your personal account or to an organization in the same enterprise as the upstream repository. You can never fork an internal repository to an organization in another enterprise.

{% elsif ghes %}
You can fork a private or internal repository to your personal account or to an organization on {% data variables.product.prodname_dotcom %} where you have permission to create repositories, provided that the settings for the repository and your enterprise policies allow forking.

Generally, you can fork any public repository to your personal account or to an organization where you have permission to create repositories.

{% elsif fpt %}
You can fork any public repository:

* To your personal account
* To an organization where you have permission to create repositories

If you have access to a private repository and the owner permits forking, you can fork the repository:

* To your personal account
* To an organization on {% data variables.product.prodname_team %} where you have permission to create repositories

You cannot fork a private repository to an organization using {% data variables.product.prodname_free_team %}. For more information about {% data variables.product.prodname_team %} and {% data variables.product.prodname_free_team %}, see [AUTOTITLE](/get-started/learning-about-github/githubs-plans).
{% endif %}
