{% if currentVersion == "free-pro-team@latest" %}

PATs can grant broad access to your account. You should select only the necessary `read:packages`, `write:packages`, or `delete:packages` scope when creating a PAT to authenticate to the {% data variables.product.prodname_container_registry %}.

To authenticate to the {% data variables.product.prodname_capitalized_container_registry %} within a {% data variables.product.prodname_actions %} workflow, use the `GITHUB_TOKEN` for the best security and experience.

For guidance on updating your workflows that authenticate to `ghcr.io` with a personal access token, see "[Upgrading a workflow that accesses `ghcr.io`](/packages/managing-github-packages-using-github-actions-workflows/publishing-and-installing-a-package-with-github-actions#upgrading-a-workflow-that-accesses-ghcrio)."

{% data reusables.package_registry.github-token-security-over-pat %}

If you'd like to use the {% data variables.product.prodname_container_registry %} in actions during the beta, follow our security best practices for PAT use at "[Security hardening for GitHub Actions](/actions/getting-started-with-github-actions/security-hardening-for-github-actions#considering-cross-repository-access)."

{% endif %}
