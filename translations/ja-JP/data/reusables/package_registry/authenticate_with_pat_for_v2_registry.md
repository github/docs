ワークフローがレジストリでの認証のために個人アクセストークン（PAT）を使っているなら、`GITHUB_TOKEN`を使うようにワークフローを更新することを強くおすすめします。

{% ifversion fpt or ghec %}個人アクセストークンでレジストリの認証を受けるワークフローの更新に関するガイダンスとしては、「[レジストリにPATを使ってアクセスするワークフローのアップグレード](/packages/managing-github-packages-using-github-actions-workflows/publishing-and-installing-a-package-with-github-actions#upgrading-a-workflow-that-accesses-a-registry-using-a-pat)」を参照してください。{% endif %}

`GITHUB_TOKEN`に関する詳しい情報については「[ワークフロー中の認証](/actions/reference/authentication-in-a-workflow#using-the-github_token-in-a-workflow)」を参照してください。

アクションでレジストリを使う際のベストプラクティスに関する詳しい情報については「[GitHub Actionsのセキュリティ強化](/actions/getting-started-with-github-actions/security-hardening-for-github-actions#considering-cross-repository-access)」を参照してください。
