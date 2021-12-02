---
title: シークレットスキャンニングについて
intro: '{% data variables.product.product_name %} はリポジトリをスキャンして既知のシークレットのタイプを探し、誤ってコミットされたシークレットの不正使用を防止します。'
product: '{% data reusables.gated-features.secret-scanning %}'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /github/administering-a-repository/about-token-scanning
  - /articles/about-token-scanning
  - /articles/about-token-scanning-for-private-repositories
  - /github/administering-a-repository/about-secret-scanning
  - /code-security/secret-security/about-secret-scanning
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Secret scanning
  - Advanced Security
---

{% data reusables.secret-scanning.beta %}
{% data reusables.secret-scanning.enterprise-enable-secret-scanning %}

プロジェクトを外部サービスと通信させる場合、認証にトークンまたは秘密鍵を使用できます。 トークンや秘密鍵は、サービスプロバイダが発行できるシークレットです。 リポジトリにシークレットをチェックインする場合、リポジトリへの読み取りアクセスを持つすべてのユーザがシークレットを使用して、自分の権限で外部サービスにアクセスできます。 シークレットは、プロジェクトのリポジトリの外の、安全な専用の場所に保存することをお勧めします。

{% data variables.product.prodname_secret_scanning_caps %}は、{% data variables.product.prodname_dotcom %}リポジトリ内に存在するすべてのブランチのGit履歴全体をスキャンしてシークレットを探します。 サービスプロバイダは{% data variables.product.company_short %} と提携してスキャンするシークレットのフォーマットを提供できます。{% ifversion fpt or ghec %}詳しい情報については、「[Secret scanningのパートナープログラム](/developers/overview/secret-scanning-partner-program)」を参照してください。
{% endif %}

{% data reusables.secret-scanning.about-secret-scanning %}

{% ifversion fpt or ghec %}
## パブリックリポジトリの {% data variables.product.prodname_secret_scanning %} について

パブリックリポジトリでは、{% data variables.product.prodname_secret_scanning_caps %}は自動的に有効になります。 パブリックリポジトリにプッシュすると、{% data variables.product.product_name %} がコミットの内容をスキャンしてシークレットを探します。 プライベートリポジトリをパブリックに切り替えると、{% data variables.product.product_name %} はリポジトリ全体をスキャンしてシークレットを探します。

{% data variables.product.prodname_secret_scanning %} が認証情報一式を検出すると、弊社はそのシークレットを発行したサービスプロバイダに通知します。 サービスプロバイダは認証情報を検証し、シークレットを取り消すか、新しいシークレットを発行するか、または直接連絡する必要があるかを決定します。これは、ユーザまたはサービスプロバイダに関連するリスクに依存します。 トークン発行パートナーと弊社との連携の概要については、「[Secret scanningのパートナープログラム](/developers/overview/secret-scanning-partner-program)」を参照してください。

### List of supported secrets for public repositories

現在 {% data variables.product.product_name %} は、パブリックリポジトリをスキャンして、次のサービスプロバイダが発行したシークレットを探します。

{% data reusables.secret-scanning.partner-secret-list-public-repo %}

## プライベートリポジトリの {% data variables.product.prodname_secret_scanning %} について
{% endif %}

{% ifversion ghes or ghae %}
## {% data variables.product.product_name %} の {% data variables.product.prodname_secret_scanning %} について

{% data variables.product.prodname_secret_scanning_caps %} は、{% data variables.product.prodname_GH_advanced_security %} の一環として、Organization が所有するリポジトリ全てで使用できます。 ユーザ所有のリポジトリでは使用できません。
{% endif %}

リポジトリの管理者または Organization のオーナーは、Organization が所有する{% ifversion fpt or ghec %}プライベートな{% endif %}リポジトリで {% data variables.product.prodname_secret_scanning %} を有効化できます。 You can enable  {% data variables.product.prodname_secret_scanning %} for all your repositories, or for all new repositories within your organization.{% ifversion fpt or ghec %} {% data variables.product.prodname_secret_scanning_caps %} is not available for user-owned private repositories.{% endif %} For more information, see "[Managing security and analysis settings for your repository](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)" and "[Managing security and analysis settings for your organization](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)."

{% ifversion fpt or ghes > 3.1 or ghae-next or ghec %}You can also define custom {% data variables.product.prodname_secret_scanning %} patterns that only apply to your repository or organization. 詳しい情報については「[{% data variables.product.prodname_secret_scanning %}のカスタムパターンの定義](/code-security/secret-security/defining-custom-patterns-for-secret-scanning)」を参照してください。{% endif %}

When you push commits to a{% ifversion fpt or ghec %} private{% endif %} repository with {% data variables.product.prodname_secret_scanning %} enabled, {% data variables.product.prodname_dotcom %} scans the contents of the commits for secrets.

When {% data variables.product.prodname_secret_scanning %} detects a secret in a{% ifversion fpt or ghec %} private{% endif %} repository, {% data variables.product.prodname_dotcom %} generates an alert.

- {% data variables.product.prodname_dotcom %} は、リポジトリ管理者と Organizationのオーナーにメールアラートを送信します。
{% ifversion fpt or ghes > 3.0 or ghae-next or ghec %}
- {% data variables.product.prodname_dotcom %} は、シークレットをリポジトリにコミットしたコントリビューターに、関連する {% data variables.product.prodname_secret_scanning %} アラートのリンクを記載したメールアラートを送信します。 コミット作者は、リポジトリでこのアラートを表示して、アラートを解決できます。
{% endif %}
- {% data variables.product.prodname_dotcom %} は、リポジトリのアラートを表示します。{% ifversion ghes = 3.0 %}詳しい情報については、「[{% data variables.product.prodname_secret_scanning %} からのアラートを管理する](/github/administering-a-repository/managing-alerts-from-secret-scanning)」を参照してください。{% endif %}

{% ifversion fpt or ghes > 3.0 or ghae-next or ghec %}
{% data variables.product.prodname_secret_scanning %}アラートの表示と解決に関する詳しい情報については「[{% data variables.product.prodname_secret_scanning %}からのアラートの管理](/github/administering-a-repository/managing-alerts-from-secret-scanning)」を参照してください。{% endif %}

リポジトリ管理者と Organization のオーナーは、ユーザおよび Team に {% data variables.product.prodname_secret_scanning %} アラートへのアクセスを許可できます。 詳しい情報については「[リポジトリのセキュリティ及び分析の設定の管理](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts)」を参照してください。

{% ifversion fpt or ghes > 3.0 or ghec %}
プライベートリポジトリあるいはOrganizationに渡る{% data variables.product.prodname_secret_scanning %}からの結果をモニターするには、{% data variables.product.prodname_secret_scanning %} APIが利用できます。 API に関する詳しい情報については、「[{% data variables.product.prodname_secret_scanning_caps %}](/rest/reference/secret-scanning)」を参照してください。{% endif %}

{% ifversion ghes or ghae %}
## List of supported secrets{% else %}
### List of supported secrets for private repositories
{% endif %}

{% data variables.product.prodname_dotcom %}  currently scans{% ifversion fpt or ghec %} private{% endif %} repositories for secrets issued by the following service providers.

{% data reusables.secret-scanning.partner-secret-list-private-repo %}

{% ifversion ghes < 3.2 or ghae %}
{% note %}

**注釈:** {% data variables.product.prodname_secret_scanning_caps %} では現在、シークレットを検出するための独自のパターンを定義することはできません。

{% endnote %}
{% endif %}

## 参考リンク

- 「[リポジトリをセキュアにする](/code-security/getting-started/securing-your-repository)」
- 「[アカウントとデータを安全に保つ](/github/authenticating-to-github/keeping-your-account-and-data-secure)」
