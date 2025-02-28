For example, you can allow access to the private resources exclusively from the IP address of your office network.

After you configure an IP allow list, the list determines whether users can access protected resources through the web UI, APIs, or Git, using any of the following authentication methods:

* Username and password, using {% data variables.product.prodname_dotcom %} authentication or SAML SSO
* {% data variables.product.pat_generic_caps %}
* SSH key

The IP allow list applies to users with any role or access, including enterprise and organization owners, repository administrators, and external collaborators.
