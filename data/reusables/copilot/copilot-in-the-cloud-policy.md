{% data variables.copilot.copilot_in_the_cloud_short %} is a connected experience that lets users start and resume cloud sessions across the {% data variables.product.github %} website, {% data variables.product.prodname_mobile %}, {% data variables.copilot.copilot_cli_short %}, and the {% data variables.copilot.github_copilot_app_short %}. See [AUTOTITLE](/copilot/concepts/copilot-surfaces/copilot-on-github).

The **{% data variables.copilot.copilot_in_the_cloud_short %}** policy determines:

* Whether users can access the chat interface or assign work to {% data variables.product.prodname_copilot_short %} on the {% data variables.product.github %} website and {% data variables.product.prodname_mobile %}
* Whether users can start sessions in cloud sandboxes from local clients ({% data variables.copilot.copilot_cli_short %} and the {% data variables.copilot.github_copilot_app_short %})

This feature is enabled by default. To ensure data security, chat sessions are scoped by default to either a single organization or the user's personal repositories. If you have enabled single sign-on (SSO), users will need to authenticate with SSO to access session data from a repository associated with that organization.
