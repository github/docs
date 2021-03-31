{% if currentVersion == "free-pro-team@latest" %}
If you want to authenticate to {% data variables.product.prodname_github_container_registry %} in a {% data variables.product.prodname_actions %} workflow, then you must use a personal access token (PAT). The `GITHUB_TOKEN` does not currently have the required permissions. During the {% data variables.product.prodname_github_container_registry %} beta, the only supported form of authentication is the PAT.

PATs can grant broad access to your account. You should select only the necessary `read:packages`, `write:packages`, or `delete:packages` scope when creating a PAT to authenticate to the {% data variables.product.prodname_container_registry %}.

{% warning %}

**Note:** * By default, when you select the `write:packages` scope for your personal access token (PAT) in the user interface, the `repo` scope will also be selected. The `repo` scope offers unnecessary and broad access, which we recommend you avoid using for GitHub Actions workflows in particular. 
 
If you save this PAT for use from an action, any collaborators can configure a GitHub Actions workflow to use this PAT to get full permissions to all repositories accessible from the PAT owner's account. For more information, see "[Security hardening for GitHub Actions](/actions/getting-started-with-github-actions/security-hardening-for-github-actions#considering-cross-repository-access)." 

As a workaround, you can select just the `write:packages` scope for your PAT in the user interface with this url: `https://github.com/settings/tokens/new?scopes=write:packages` and other desired scopes such as the `delete: packages` scope. Or you can create a separate account with access only to specific repositories that push Docker images.

{% endwarning %}

If you'd like to use the {% data variables.product.prodname_container_registry %} in actions during the beta, follow our security best practices for PAT use at "[Security hardening for GitHub Actions](/actions/getting-started-with-github-actions/security-hardening-for-github-actions#considering-cross-repository-access)."

{% endif %}
