{% ifversion fpt %}

To authenticate to the {% data variables.product.prodname_container_registry %} within a {% data variables.product.prodname_actions %} workflow, use the `GITHUB_TOKEN` for the best security and experience. If your workflow is using a personal access token (PAT) to authenticate to `ghcr.io`, then we highly recommend you update your workflow to use the `GITHUB_TOKEN`.

For guidance on updating your workflows that authenticate to `ghcr.io` with a personal access token, see "[Upgrading a workflow that accesses `ghcr.io`](/packages/managing-github-packages-using-github-actions-workflows/publishing-and-installing-a-package-with-github-actions#upgrading-a-workflow-that-accesses-ghcrio)."

For more information about the `GITHUB_TOKEN`, see "[Authentication in a workflow](/actions/reference/authentication-in-a-workflow#using-the-github_token-in-a-workflow)."

If you're using the {% data variables.product.prodname_container_registry %} in actions, follow our security best practices at "[Security hardening for GitHub Actions](/actions/getting-started-with-github-actions/security-hardening-for-github-actions#considering-cross-repository-access)."

{% endif %}
