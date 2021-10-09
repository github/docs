{% ifversion fpt %}

{% data variables.product.prodname_actions %}ワークフロー内で{% data variables.product.prodname_container_registry %}の認証を受けるには、最善のセキュリティと体験のために`GITHUB_TOKEN`を使ってください。 ワークフローが`ghcr.io`での認証のために個人アクセストークン（PAT）を使っているなら、`GITHUB_TOKEN`を使うようにワークフローを更新することを強くおすすめします。

個人アクセストークンで`ghcr.io`の認証を受けるワークフローの更新に関するガイダンスとしては、「[`ghcr.io`にアクセスするワークフローのアップグレード](/packages/managing-github-packages-using-github-actions-workflows/publishing-and-installing-a-package-with-github-actions#upgrading-a-workflow-that-accesses-ghcrio)」を参照してください。

`GITHUB_TOKEN`に関する詳しい情報については「[ワークフロー中の認証](/actions/reference/authentication-in-a-workflow#using-the-github_token-in-a-workflow)」を参照してください。

アクションで{% data variables.product.prodname_container_registry %}を使っている場合は、「[GitHub Actionsのセキュリティ強化](/actions/getting-started-with-github-actions/security-hardening-for-github-actions#considering-cross-repository-access)」にあるセキュリティベストプラクティスに従ってください。

{% endif %}
