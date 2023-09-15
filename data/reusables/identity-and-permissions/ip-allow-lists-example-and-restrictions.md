For example, you can allow access to the private resources exclusively from the IP address of your office network.

If the list allows an IP address, an authenticated user connecting to {% data variables.location.product_location %} from that address can access private resources. If the user's IP address is not allowed, that user cannot access private resources until they connect from an allowed address.

After you configure an IP allow list, the list determines whether users can access protected resources through the web UI, APIs, or Git, using any of the following authentication methods.

- Username and password, using {% data variables.product.prodname_dotcom %}  authentication or SAML SSO
- {% data variables.product.pat_generic_caps %}
- SSH key

The IP allow list applies to users with any role or access, including enterprise and organization owners, repository administrators, and external collaborators.

{% ifversion ghec %}

If a user is signed into {% data variables.location.product_location %}, the IP allow list determines whether the user can access the organization's public resources. The list does not apply to anonymous access to public resources.

Only access to organization-owned repositories is determined by an IP allow list. The list does not control access to repositories or forks of repositories owned by a {% data variables.enterprise.prodname_managed_user %}.

{% endif %}
