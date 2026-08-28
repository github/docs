For example, you can allow access to the private resources exclusively from the IP address of your office network.

Once you configure a {% data variables.product.github %} IP allow list, the list determines whether users or apps can access protected resources through the web UI, APIs, or Git when they use any of the following authentication methods. 

**Interactive (web) authentication:**
* User authentication, including {% data variables.product.prodname_dotcom %} authentication, SAML, and OIDC authentication

**Non-interactive authentication:**
* {% data variables.product.pat_generic_caps %}
* OAuth app tokens
* SSH keys (including deploy keys and SSH keys used by {% data variables.product.prodname_github_apps %}
* {% data variables.product.prodname_github_app %} user-to-server or installation tokens, including the {% data variables.product.prodname_actions %}`GITHUB_TOKEN`

  > [!NOTE]
  > IP allow lists don't currently restrict access when a {% data variables.product.prodname_github_app %} is installed on a user account and uses server-to-server installation tokens to access an organization or enterprise.

The IP allow list applies to users with any role or access, including enterprise and organization owners, repository administrators, and external collaborators.
