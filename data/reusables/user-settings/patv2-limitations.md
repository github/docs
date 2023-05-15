{% data variables.product.pat_v1_caps_plural %} are less secure. However, some features currently will only work with {% data variables.product.pat_v1_plural %}:

- Only {% data variables.product.pat_v1_plural %} have write access for public repositories that are not owned by you or an organization that you are not a member of.{% ifversion ghec or ghes or ghae %}
- Only {% data variables.product.pat_v1_plural %} automatically have write access for internal repositories that are owned by your enterprise. {% data variables.product.pat_v2_caps %}s must be granted access to internal repositories.{% endif %}
- Outside collaborators can only use {% data variables.product.pat_v1_plural %} to access organization repositories that they are a collaborator on.{% ifversion ghec or ghes or ghae %}
- Only {% data variables.product.pat_v1_plural %} can access enterprises. ({% data variables.product.pat_v2_caps %} can access organizations owned by enterprises.){% endif %}
- Some REST API operations are not available to {% data variables.product.pat_v2 %}s. For a list of REST API operations that are supported for {% data variables.product.pat_v2 %}s, see "[AUTOTITLE](/rest/overview/endpoints-available-for-fine-grained-personal-access-tokens)".
