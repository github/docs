{% note %}

**Note**: Currently, some features only work with {% data variables.product.pat_v1_plural %}:

- Only {% data variables.product.pat_v1_plural %} have write access for public repositories that are not owned by you or an organization that you are not a member of.{% ifversion ghec or ghes or ghae %}
- Only {% data variables.product.pat_v1_plural %} automatically have write access for internal repositories that are owned by your enterprise. {% data variables.product.pat_v2_caps %}s must be granted access to internal repositories.{% endif %}
- Outside collaborators can use only {% data variables.product.pat_v1_plural %} to access organization repositories that they are a collaborator on.{% ifversion ghec or ghes or ghae %}
- Only {% data variables.product.pat_v1_plural %} can access enterprises. ({% data variables.product.pat_v2_caps %} can access organizations owned by enterprises.){% endif %}
- The following APIs only support {% data variables.product.pat_v1_plural %}. For a list of REST API operations that are supported for {% data variables.product.pat_v2 %}, see "[Endpoints available for {% data variables.product.pat_v2 %}s](/rest/overview/endpoints-available-for-fine-grained-personal-access-tokens)".
  - GraphQL API{% ifversion ghec or ghes or ghae %}
  - REST API for enterprise administrators{% endif %}{% ifversion ghec or fpt %}
  - REST API to manage source imports{% endif %}
  - REST API to manage {% data variables.product.prodname_projects_v1_caps %}
  - REST API to manage {% data variables.product.prodname_registry %}
  - REST API to manage notifications
  - REST API to transfer a repository
  - REST API to create a repository from a template
  - REST API to create a repository for the authenticated user

{% endnote %}
