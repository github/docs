{% if currentVersion == "free-pro-team@latest" %}

To authenticate to {% data variables.product.prodname_github_container_registry %} within a {% data variables.product.prodname_actions %} workflow, use the `GITHUB_TOKEN` for the best security and experience.

For guidance on updating your workflows that authenticate to `ghcr.io` with a personal access token, see "[Upgrading a workflow that accesses `ghcr.io`](/packages/guides/using-github-packages-with-github-actions#upgrading-a-workflow-that-accesses-ghcrio)."

{% data reusables.package_registry.github-token-security-over-pat %}

ベータの期間にアクションで{% data variables.product.prodname_container_registry %}を使いたい場合は、「[GitHub Actionsのセキュリティ強化](/actions/getting-started-with-github-actions/security-hardening-for-github-actions#considering-cross-repository-access)」にあるPATのセキュリティベストプラクティスに従ってください。

{% endif %}
