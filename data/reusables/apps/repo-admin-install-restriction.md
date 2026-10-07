Repository admins can install {% data variables.product.prodname_github_apps %} in the organization that owns the repository if the app does not request any organization permissions or the "Repository administration" permission. When doing so, they can only install the app with access to the repositories that they administer.

{% ifversion github-app-repository-permission-improvements %}

If an organization owner has already installed an app, repository administrators can update the existing installation to give the app access to repositories that they administer. They can make this update regardless of the app's permissions because the organization owner approved those permissions when they installed the app.

{% endif %}

{% ifversion fpt or ghec or ghes > 3.19 %}Organization owners can restrict {% data variables.product.prodname_github_app %} installation by repository admins. When this restriction is enabled, repository admins cannot install or add {% data variables.product.prodname_github_apps %} for their repository and must instead request that organization owners install the desired app. For more information, see [AUTOTITLE](/organizations/managing-programmatic-access-to-your-organization/limiting-oauth-app-and-github-app-access-requests-and-installations).{% endif %}
