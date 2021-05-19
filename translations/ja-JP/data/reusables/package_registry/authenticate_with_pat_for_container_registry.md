{% if currentVersion == "free-pro-team@latest" %}

PATはアカウントに対する広汎なアクセスを許可できます。 {% data variables.product.prodname_container_registry %}での認証のためのPATを作成する際には、必要な`read:packages`、`write:packages`、`delete:packages`スコープだけを選択すべきです。

{% data variables.product.prodname_actions %}ワークフロー内で{% data variables.product.prodname_container_registry %}の認証を受けるには、最善のセキュリティと体験のために`GITHUB_TOKEN`を使ってください。

個人アクセストークンで`ghcr.io`の認証を受けるワークフローの更新に関するガイダンスとしては、「[`ghcr.io`にアクセスするワークフローのアップグレード](/packages/managing-github-packages-using-github-actions-workflows/publishing-and-installing-a-package-with-github-actions#upgrading-a-workflow-that-accesses-ghcrio)」を参照してください。

{% data reusables.package_registry.github-token-security-over-pat %}

ベータの期間にアクションで{% data variables.product.prodname_container_registry %}を使いたい場合は、「[GitHub Actionsのセキュリティ強化](/actions/getting-started-with-github-actions/security-hardening-for-github-actions#considering-cross-repository-access)」にあるPATのセキュリティベストプラクティスに従ってください。

{% endif %}
