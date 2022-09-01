If your workflow is using a personal access token (PAT) to authenticate to a registry, then we highly recommend you update your workflow to use the `GITHUB_TOKEN`.

{% ifversion fpt or ghec %}For guidance on updating your workflows that authenticate to a registry with a personal access token, see "[Upgrading a workflow that accesses a registry using a PAT](/packages/managing-github-packages-using-github-actions-workflows/publishing-and-installing-a-package-with-github-actions#upgrading-a-workflow-that-accesses-a-registry-using-a-pat)."{% endif %}

`GITHUB_TOKEN`に関する詳しい情報については「[ワークフロー中の認証](/actions/reference/authentication-in-a-workflow#using-the-github_token-in-a-workflow)」を参照してください。

For more information about the best practises when using a registry in actions, see "[Security hardening for GitHub Actions](/actions/getting-started-with-github-actions/security-hardening-for-github-actions#considering-cross-repository-access)."
