   If the dev container configuration for the repository specifies permissions for accessing other repositories, you will be shown an authorization page. For more information on how this is specified in the `devcontainer.json` file, see "[AUTOTITLE](/codespaces/managing-your-codespaces/managing-repository-access-for-your-codespaces)."

   Click {% octicon "chevron-down" aria-label="The expand down icon" %} to view the details of the requested permissions.

   ![Screenshot of an authorization page for a prebuild configuration. Three permissions are listed in this request.](/assets/images/help/codespaces/prebuild-authorization-page.png)

   Click **Authorize and continue** to grant these permissions for creation of prebuilds. Alternatively, you can click **Continue without authorizing** but, if you do so, codespaces created from the resulting prebuilds may not work properly.

   {% note %}

   **Note**: Users who create codespaces using this prebuild will also be asked to grant these permissions.

   {% endnote %}
