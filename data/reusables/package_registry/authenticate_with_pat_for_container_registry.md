{% if currentVersion == "free-pro-team@latest" %}
If you want to authenticate to {% data variables.product.prodname_github_container_registry %} in a {% data variables.product.prodname_actions %} workflow, then you must use a personal access token (PAT). The `GITHUB_TOKEN` does not currently have the required permissions. During the {% data variables.product.prodname_github_container_registry %} beta, the only supported form of authentication is the PAT.

PATs can grant broad access to your account. You should select only the necessary `read:packages`, `write:packages`, or `delete:packages` scope when creating a PAT to authenticate to the {% data variables.product.prodname_container_registry %}.

{% warning %}

**Note:** Granting the `write:packages` scope on the PAT also grants the `repo` scope! If you save this PAT for use from an Action, any collaborators can configure an Actions workflow to use this PAT to get full permissions to all repositories accessable from the PAT owner's account. We recommend creating a separate account with access only to the specific repositories that want to push Docker images (see "[Security hardening for GitHub Actions](/actions/getting-started-with-github-actions/security-hardening-for-github-actions#considering-cross-repository-access)").

{% endwarning %}

If you'd like to use the {% data variables.product.prodname_container_registry %} in actions during the beta, follow our security best practices for PAT use at "[Security hardening for GitHub Actions](/actions/getting-started-with-github-actions/security-hardening-for-github-actions#considering-cross-repository-access)."

{% endif %}
