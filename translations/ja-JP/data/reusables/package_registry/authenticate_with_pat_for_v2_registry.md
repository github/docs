If your workflow is using a {% data variables.product.pat_generic %} to authenticate to a registry, then we highly recommend you update your workflow to use the `GITHUB_TOKEN`.

{% ifversion fpt or ghec %}For guidance on updating your workflows that authenticate to a registry with a {% data variables.product.pat_generic %}, see "[Upgrading a workflow that accesses a registry using a {% data variables.product.pat_generic %}](/packages/managing-github-packages-using-github-actions-workflows/publishing-and-installing-a-package-with-github-actions#upgrading-a-workflow-that-accesses-a-registry-using-a-personal-access-token)."{% endif %}

For more information about the `GITHUB_TOKEN`, see "[Authentication in a workflow](/actions/reference/authentication-in-a-workflow#using-the-github_token-in-a-workflow)."

For more information about the best practices when using a registry in actions, see "[Security hardening for GitHub Actions](/actions/getting-started-with-github-actions/security-hardening-for-github-actions#considering-cross-repository-access)."
