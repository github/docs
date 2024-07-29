{% data variables.product.pat_v1_caps_plural %} are less secure. However, some features currently will only work with {% data variables.product.pat_v1_plural %}:

* Only {% data variables.product.pat_v1_plural %} have write access for public repositories that are not owned by you or an organization that you are not a member of.{% ifversion ghec or ghes %}
* Only {% data variables.product.pat_v1_plural %} automatically have write access for internal repositories that are owned by your enterprise. {% data variables.product.pat_v2_caps %}s must be granted access to internal repositories.{% endif %}
* Outside collaborators can only use {% data variables.product.pat_v1_plural %} to access organization repositories that they are a collaborator on.{% ifversion ghec or ghes %}
* Only {% data variables.product.pat_v1_plural %} can access enterprises. ({% data variables.product.pat_v2_caps %} can access organizations owned by enterprises.){% endif %}
* A few REST API endpoints are only available with a {% data variables.product.pat_v1_plural %}. To check whether an endpoint also supports {% data variables.product.pat_v2 %}s, see the documentation for that endpoint, or see "[AUTOTITLE](/rest/overview/endpoints-available-for-fine-grained-personal-access-tokens)."
