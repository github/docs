With per-user pricing, each person consumes one license. {% data variables.product.company_short %} identifies individuals by primary email address.

{% data variables.product.company_short %} bills for the following people.

{%- ifversion ghec %}
- Enterprise owners who are a member or owner of at least one organization in the enterprise
{%- endif %}
- Organization members, including owners
- Outside collaborators on private{% ifversion ghec %} or internal{% endif %} repositories owned by your organization, excluding forks
- Anyone with a pending invitation to become an organization owner or member
- Anyone with a pending invitation to become an outside collaborator on private{% ifversion ghec %} or internal{% endif %} repositories owned by your organization, excluding forks
{%- ifversion ghec %}
- Each user on any {% data variables.product.prodname_ghe_server %} instance that you deploy
{% endif %}

{% data variables.product.company_short %} does not bill for any of the following people.

{%- ifversion ghec %}
- Enterprise owners who are not a member or owner of at least one organization in the enterprise
- Enterprise billing managers
{%- endif %}
- Organization billing managers{% ifversion ghec %} for individual organizations on {% data variables.product.prodname_ghe_cloud %}{% endif %}
- Anyone with a pending invitation to become an{% ifversion ghec %} enterprise or{% endif %} organization billing manager
- Anyone with a pending invitation to become an outside collaborator on a public repository owned by your organization

{% note %}

**注釈**: {% data reusables.organizations.org-invite-scim %}

{% endnote %}
