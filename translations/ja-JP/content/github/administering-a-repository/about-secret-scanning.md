---
title: シークレットスキャンニングについて
intro: '{% data variables.product.product_name %} はリポジトリをスキャンして既知のシークレットのタイプを探し、誤ってコミットされたシークレットの不正使用を防止します。'
product: '{% data reusables.gated-features.secret-scanning %}'
redirect_from:
  - /github/administering-a-repository/about-token-scanning
  - /articles/about-token-scanning
  - /articles/about-token-scanning-for-private-repositories
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.0'
---

{% data reusables.secret-scanning.beta %}
{% data reusables.secret-scanning.enterprise-enable-secret-scanning %}

プロジェクトを外部サービスと通信させる場合、認証にトークンまたは秘密鍵を使用できます。 トークンや秘密鍵は、サービスプロバイダが発行できるシークレットです。 リポジトリにシークレットをチェックインする場合、リポジトリへの読み取りアクセスを持つすべてのユーザがシークレットを使用して、自分の権限で外部サービスにアクセスできます。 シークレットは、プロジェクトのリポジトリの外の、安全な専用の場所に保存することをお勧めします。
Service providers can partner with

{% data variables.product.company_short %} to provide their secret formats for scanning.{% if currentVersion == "free-pro-team@latest" %} For more information, see "[Secret scanning](/developers/overview/secret-scanning)."
{% endif %}

{% data reusables.secret-scanning.about-secret-scanning %}

{% if currentVersion == "free-pro-team@latest" %}
### パブリックリポジトリの {% data variables.product.prodname_secret_scanning %} について

{% data variables.product.prodname_secret_scanning_caps %} is automatically enabled on public repositories. パブリックリポジトリにプッシュすると、{% data variables.product.product_name %} がコミットの内容をスキャンしてシークレットを探します。 プライベートリポジトリをパブリックに切り替えると、{% data variables.product.product_name %} はリポジトリ全体をスキャンしてシークレットを探します。

{% data variables.product.prodname_secret_scanning %} が認証情報一式を検出すると、弊社はそのシークレットを発行したサービスプロバイダに通知します。 サービスプロバイダは認証情報を検証し、シークレットを取り消すか、新しいシークレットを発行するか、または直接連絡する必要があるかを決定します。これは、ユーザまたはサービスプロバイダに関連するリスクに依存します。 For an overview of how we work with token-issuing partners, see "[Secret scanning](/developers/overview/secret-scanning)."

現在 {% data variables.product.product_name %} は、パブリックリポジトリをスキャンして、次のサービスプロバイダが発行したシークレットを探します。

{% data reusables.secret-scanning.partner-secret-list-public-repo %}

### プライベートリポジトリの {% data variables.product.prodname_secret_scanning %} について
{% endif %}

{% if enterpriseServerVersions contains currentVersion and currentVersion ver_gt "enterprise-server@2.22" %}
### About {% data variables.product.prodname_secret_scanning %} on {% data variables.product.product_name %}

{% data variables.product.prodname_secret_scanning_caps %} is available on all organization-owned repositories as part of {% data variables.product.prodname_GH_advanced_security %}. It is not available on user-owned repositories.
{% endif %}

If you're a repository administrator or an organization owner, you can enable {% data variables.product.prodname_secret_scanning %} for {% if currentVersion == "free-pro-team@latest" %} private{% endif %} repositories that are owned by organizations. You can enable  {% data variables.product.prodname_secret_scanning %} for all your repositories, or for all new repositories within your organization.{% if currentVersion == "free-pro-team@latest" %} {% data variables.product.prodname_secret_scanning_caps %} is not available for user-owned private repositories.{% endif %} For more information, see "[Managing security and analysis settings for your repository](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)" and "[Managing security and analysis settings for your organization](/github/setting-up-and-managing-organizations-and-teams/managing-security-and-analysis-settings-for-your-organization)."

When you push commits to a{% if currentVersion == "free-pro-team@latest" %} private{% endif %} repository with {% data variables.product.prodname_secret_scanning %} enabled, {% data variables.product.prodname_dotcom %} scans the contents of the commits for secrets.

When {% data variables.product.prodname_secret_scanning %} detects a secret in a{% if currentVersion == "free-pro-team@latest" %} private{% endif %} repository, {% data variables.product.prodname_dotcom %} sends alerts.

- {% data variables.product.prodname_dotcom %} は、リポジトリ管理者と Organizationのオーナーにメールアラートを送信します。

- {% data variables.product.prodname_dotcom %} は、リポジトリにアラートを表示します。 詳しい情報については、「[{% data variables.product.prodname_secret_scanning %} からのアラートを管理する](/github/administering-a-repository/managing-alerts-from-secret-scanning)」を参照してください。

Repository administrators and organization owners can grant users and teams access to {% data variables.product.prodname_secret_scanning %} alerts. For more information, see "[Managing security and analysis settings for your repository](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts)."

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}
To monitor results from
{% data variables.product.prodname_secret_scanning %} across your private repositories or your organization, you can use the {% data variables.product.prodname_secret_scanning %} API. For more information about API endpoints, see "[{% data variables.product.prodname_secret_scanning_caps %}](/rest/reference/secret-scanning)."{% endif %}

{% data variables.product.prodname_dotcom %}  currently scans{% if currentVersion == "free-pro-team@latest" %} private{% endif %} repositories for secrets issued by the following service providers.

{% data reusables.secret-scanning.partner-secret-list-private-repo %}

{% note %}

**注釈:** {% data variables.product.prodname_secret_scanning_caps %} では現在、シークレットを検出するための独自のパターンを定義することはできません。

{% endnote %}

### 参考リンク

- 「[リポジトリのセキュリティ保護について](/github/administering-a-repository/about-securing-your-repository)」
- "[Keeping your account and data secure](/github/authenticating-to-github/keeping-your-account-and-data-secure)"
