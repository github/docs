---
title: シークレットスキャンニングについて
intro: '{% data variables.product.product_name %} はリポジトリをスキャンして既知のシークレットのタイプを探し、誤ってコミットされたシークレットの不正使用を防止します。'
product: '{% data reusables.gated-features.secret-scanning %}'
redirect_from:
  - /github/administering-a-repository/about-token-scanning
  - /articles/about-token-scanning
  - /articles/about-token-scanning-for-private-repositories
  - /github/administering-a-repository/about-secret-scanning
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.0'
  github-ae: '*'
topics:
  - Repositories
---

{% data reusables.secret-scanning.beta %}
{% data reusables.secret-scanning.enterprise-enable-secret-scanning %}

プロジェクトを外部サービスと通信させる場合、認証にトークンまたは秘密鍵を使用できます。 トークンや秘密鍵は、サービスプロバイダが発行できるシークレットです。 リポジトリにシークレットをチェックインする場合、リポジトリへの読み取りアクセスを持つすべてのユーザがシークレットを使用して、自分の権限で外部サービスにアクセスできます。 シークレットは、プロジェクトのリポジトリの外の、安全な専用の場所に保存することをお勧めします。

Service providers can partner with {% data variables.product.company_short %} to provide their secret formats for scanning.{% if currentVersion == "free-pro-team@latest" %} For more information, see "[Secret scanning](/developers/overview/secret-scanning)."
{% endif %}

{% data reusables.secret-scanning.about-secret-scanning %}

{% if currentVersion == "free-pro-team@latest" %}
### パブリックリポジトリの {% data variables.product.prodname_secret_scanning %} について

パブリックリポジトリでは、{% data variables.product.prodname_secret_scanning_caps %}は自動的に有効になります。 パブリックリポジトリにプッシュすると、{% data variables.product.product_name %} がコミットの内容をスキャンしてシークレットを探します。 プライベートリポジトリをパブリックに切り替えると、{% data variables.product.product_name %} はリポジトリ全体をスキャンしてシークレットを探します。

{% data variables.product.prodname_secret_scanning %} が認証情報一式を検出すると、弊社はそのシークレットを発行したサービスプロバイダに通知します。 サービスプロバイダは認証情報を検証し、シークレットを取り消すか、新しいシークレットを発行するか、または直接連絡する必要があるかを決定します。これは、ユーザまたはサービスプロバイダに関連するリスクに依存します。 トークン発行パートナーと弊社との連携の概要については、「[シークレットスキャンを行う](/developers/overview/secret-scanning)」を参照してください。

現在 {% data variables.product.product_name %} は、パブリックリポジトリをスキャンして、次のサービスプロバイダが発行したシークレットを探します。

{% data reusables.secret-scanning.partner-secret-list-public-repo %}

### プライベートリポジトリの {% data variables.product.prodname_secret_scanning %} について
{% endif %}

{% if currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
### {% data variables.product.product_name %} の {% data variables.product.prodname_secret_scanning %} について

{% data variables.product.prodname_secret_scanning_caps %} は、{% data variables.product.prodname_GH_advanced_security %} の一環として、Organization が所有するリポジトリ全てで使用できます。 ユーザ所有のリポジトリでは使用できません。
{% endif %}

リポジトリの管理者または Organization のオーナーは、Organization が所有する{% if currentVersion == "free-pro-team@latest" %}プライベートな{% endif %}リポジトリで {% data variables.product.prodname_secret_scanning %} を有効化できます。 You can enable  {% data variables.product.prodname_secret_scanning %} for all your repositories, or for all new repositories within your organization.{% if currentVersion == "free-pro-team@latest" %} {% data variables.product.prodname_secret_scanning_caps %} is not available for user-owned private repositories.{% endif %} For more information, see "[Managing security and analysis settings for your repository](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)" and "[Managing security and analysis settings for your organization](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)."

{% data variables.product.prodname_secret_scanning %}が有効化されている{% if currentVersion == "free-pro-team@latest" %}プライベート{% endif %}リポジトリにコミットをプッシュすると、{% data variables.product.prodname_dotcom %} はコミットの内容をスキャンしてシークレットを探します。

{% data variables.product.prodname_secret_scanning %} が{% if currentVersion == "free-pro-team@latest" %} プライベート{% endif %}リポジトリでシークレットを検出した場合、{% data variables.product.prodname_dotcom %} はアラートを生成します。

- {% data variables.product.prodname_dotcom %} は、リポジトリ管理者と Organizationのオーナーにメールアラートを送信します。
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == 'github-ae@next' %}
- {% data variables.product.prodname_dotcom %} は、シークレットをリポジトリにコミットしたコントリビューターに、関連する {% data variables.product.prodname_secret_scanning %} アラートのリンクを記載したメールアラートを送信します。 コミット作者は、リポジトリでこのアラートを表示して、アラートを解決できます。
{% endif %}
- {% data variables.product.prodname_dotcom %} は、リポジトリのアラートを表示します。{% if currentVersion == "enterprise-server@3.0" %}詳しい情報については、「[{% data variables.product.prodname_secret_scanning %} からのアラートを管理する](/github/administering-a-repository/managing-alerts-from-secret-scanning)」を参照してください。{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == 'github-ae@next' %}
For more information about viewing and resolving {% data variables.product.prodname_secret_scanning %} alerts, see "[Managing alerts from {% data variables.product.prodname_secret_scanning %}](/github/administering-a-repository/managing-alerts-from-secret-scanning)."{% endif %}

リポジトリ管理者と Organization のオーナーは、ユーザおよび Team に {% data variables.product.prodname_secret_scanning %} アラートへのアクセスを許可できます。 詳しい情報については「[リポジトリのセキュリティ及び分析の設定の管理](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts)」を参照してください。

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}
To monitor results from {% data variables.product.prodname_secret_scanning %} across your private repositories or your organization, you can use the {% data variables.product.prodname_secret_scanning %} API. API に関する詳しい情報については、「[{% data variables.product.prodname_secret_scanning_caps %}](/rest/reference/secret-scanning)」を参照してください。{% endif %}

現在 {% data variables.product.prodname_dotcom %} は、{% if currentVersion == "free-pro-team@latest" %} プライベート{% endif %} リポジトリをスキャンして、次のサービスプロバイダーが発行したシークレットを探します。

{% data reusables.secret-scanning.partner-secret-list-private-repo %}

{% note %}

**注釈:** {% data variables.product.prodname_secret_scanning_caps %} では現在、シークレットを検出するための独自のパターンを定義することはできません。

{% endnote %}

### 参考リンク

- 「[リポジトリのセキュリティ保護について](/github/administering-a-repository/about-securing-your-repository)」
- 「[アカウントとデータを安全に保つ](/github/authenticating-to-github/keeping-your-account-and-data-secure)」
