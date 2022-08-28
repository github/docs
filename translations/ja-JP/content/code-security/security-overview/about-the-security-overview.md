---
title: セキュリティの概要について
intro: 'You can view, filter, and sort security alerts for repositories owned by your organization or team in one place: the Security Overview page.'
product: '{% data reusables.gated-features.security-center %}'
redirect_from:
  - /code-security/security-overview/exploring-security-alerts
versions:
  fpt: '*'
  ghae: issue-4554
  ghes: '>3.1'
type: how_to
topics:
  - Security overview
  - Advanced Security
  - Alerts
  - Organizations
  - Teams
shortTitle: About security overview
---

{% data reusables.security-center.beta %}

## セキュリティの概要について

セキュリティの概要は、Organizationのセキュリティの状況の高レベルでの表示、あるいは介入が必要な問題のあるリポジトリを特定するために利用できます。 Organizationのレベルでは、セキュリティの概要はOrganizationが所有するリポジトリに関する集約されたリポジトリ固有のセキュリティ情報を表示します。 Teamレベルでは、セキュリティの概要はTeamが管理権限を持つリポジトリの固有のセキュリティ情報を表示します。 詳しい情報については「[OrganizationリポジトリへのTeamのアクセス管理](/organizations/managing-access-to-your-organizations-repositories/managing-team-access-to-an-organization-repository)」を参照してください。

The security overview indicates whether {% ifversion fpt or ghes > 3.1 %}security{% endif %}{% ifversion ghae-next %}{% data variables.product.prodname_GH_advanced_security %}{% endif %} features are enabled for repositories owned by your organization and consolidates alerts for each feature.{% ifversion fpt or ghes > 3.1 %} Security features include {% data variables.product.prodname_GH_advanced_security %} features, such as {% data variables.product.prodname_code_scanning %} and {% data variables.product.prodname_secret_scanning %}, as well as {% data variables.product.prodname_dependabot_alerts %}.{% endif %} For more information about {% data variables.product.prodname_GH_advanced_security %} features, see "[About {% data variables.product.prodname_GH_advanced_security %}](/get-started/learning-about-github/about-github-advanced-security)."{% ifversion fpt or ghes > 3.1 %} For more information about {% data variables.product.prodname_dependabot_alerts %}, see "[About alerts for vulnerable dependencies](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-alerts-for-vulnerable-dependencies#dependabot-alerts-for-vulnerable-dependencies)."{% endif %}

For more information about securing your code at the repository and organization levels, see "[Securing your repository](/code-security/getting-started/securing-your-repository)" and "[Securing your organization](/code-security/getting-started/securing-your-organization)."

セキュリティの概要では、Organizationや特定のリポジトリ内のセキュリティリスクを理解するために、アラートを表示、ソート、フィルタリングできます。 関心のある領域に集中するために、複数のフィルタを適用することができます。 たとえば、多数の{% data variables.product.prodname_dependabot_alerts %}が生じているプライベートリポジトリや、{% data variables.product.prodname_code_scanning %}アラートのないリポジトリを識別できます。

![Organizationのセキュリティの概要](/assets/images/help/organizations/security-overview.png)

For each repository in the security overview, you will see icons for each type of security feature and how many alerts there are of each type. If a security feature is not enabled for a repository, the icon for that feature will be grayed out.

![セキュリティの概要中のアイコン](/assets/images/help/organizations/security-overview-icons.png)

| アイコン                                                          | 意味                                                                                                                                                                                                             |
| ------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {% octicon "code-square" aria-label="Code scanning alerts" %} | {% data variables.product.prodname_code_scanning_capc %} アラート. 詳しい情報については「[{% data variables.product.prodname_code_scanning %}について](/code-security/secure-coding/about-code-scanning)」を参照してください。           |
| {% octicon "key" aria-label="Secret scanning alerts" %}       | {% data variables.product.prodname_secret_scanning_caps %} アラート. 詳しい情報については「[{% data variables.product.prodname_secret_scanning %}について](/code-security/secret-security/about-secret-scanning)」を参照してください。   |
| {% octicon "hubot" aria-label="Dependabot alerts" %}          | {% data variables.product.prodname_dependabot_alerts %}について受ける方法は、カスタマイズできます。 詳しい情報については、「[脆弱性のある依存関係に対するアラートについて](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)」を参照してください。 |
| {% octicon "check" aria-label="Check" %}                      | The security feature is enabled, but does not raise alerts in this repository.                                                                                                                                 |
| {% octicon "x" aria-label="x" %}                              | The security feature is not supported in this repository.                                                                                                                                                      |

デフォルトでは、アーカイブされたリポジトリはOrganizationのセキュリティの概要からは除外されます。 セキュリティの概要では、アーカイブされたリポジトリを見るためにフィルタを適用できます。 詳しい情報については「[アラートのリストのフィルタリング](#filtering-the-list-of-alerts)」を参照してください。

The security overview displays active alerts raised by security features. リポジトリに対してセキュリティの概要でアラートがない場合でも、検出されていないセキュリティ脆弱性やコードのエラーは存在するかもしれません。

## Organizationのセキュリティの概要の表示

Organizationのオーナーは、Organizationのセキュリティの概要を見ることができます。

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.security-overview %}
1. アラートの種類に対する集約された情報を見るには、**Show more（さらに表示）**をクリックしてください。 ![さらに表示ボタン](/assets/images/help/organizations/security-overview-show-more-button.png)
{% data reusables.organizations.filter-security-overview %}

## Teamのセキュリティの概要の表示

Teamのメンバーは、Teamが管理者権限を持つリポジトリのセキュリティの概要を見ることができます。

{% data reusables.profile.access_org %}
{% data reusables.user_settings.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.team-security-overview %}
{% data reusables.organizations.filter-security-overview %}

## アラートのリストのフィルタリング

### リポジトリに対するリスクレベルによるフィルタリング

The level of risk for a repository is determined by the number and severity of alerts from security features. If one or more security features are not enabled for a repository, the repository will have an unknown level of risk. If a repository has no risks that are detected by security features, the repository will have a clear level of risk.

| 修飾子            | 説明                          |
| -------------- | --------------------------- |
| `risk:high`    | 高リスクのリポジトリを表示します。           |
| `risk:medium`  | 中程度のリスクのリポジトリを表示します。        |
| `risk:low`     | 低リスクのリポジトリを表示します。           |
| `risk:unknown` | リスクレベルが不明なリポジトリを表示します。      |
| `risk:clear`   | リスクレベルが検出されていないリポジトリを表示します。 |

### アラート数によるフィルタ

| 修飾子                       | 説明                                                                                                               |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| <code>code-scanning-alerts:<em>n</em></code> | *n*件の{% data variables.product.prodname_code_scanning %}アラートがあるリポジトリを表示します。 この修飾子は &gt 及び &lt j比較演算子を使用できます。   |
| <code>secret-scanning-alerts:<em>n</em></code> | *n*件の{% data variables.product.prodname_secret_scanning %}アラートを持つリポジトリを表示します。 この修飾子は &gt 及び &lt j比較演算子を使用できます。 |
| <code>dependabot-alerts:<em>n</em></code> | *n*件の{% data variables.product.prodname_dependabot_alerts %}を持つリポジトリを表示します。 この修飾子は &gt 及び &lt j比較演算子を使用できます。   |

### Filter by whether security features are enabled

| 修飾子                             | 説明                                                                              |
| ------------------------------- | ------------------------------------------------------------------------------- |
| `enabled:code-scanning`         | {% data variables.product.prodname_code_scanning %}が有効化されているリポジトリを表示します。      |
| `not-enabled:code-scanning`     | {% data variables.product.prodname_code_scanning %}が有効化されていないリポジトリを表示します。     |
| `enabled:secret-scanning`       | {% data variables.product.prodname_secret_scanning %}が有効化されているリポジトリを表示します。    |
| `not-enabled:secret-scanning`   | {% data variables.product.prodname_secret_scanning %}が有効化されているリポジトリを表示します。    |
| `enabled:dependabot-alerts`     | {% data variables.product.prodname_dependabot_alerts %}が有効化されているリポジトリを表示します。  |
| `not-enabled:dependabot-alerts` | {% data variables.product.prodname_dependabot_alerts %}が有効化されていないリポジトリを表示します。 |

### リポジトリの種類によるフィルタ

| Qualifier | Description | | -------- | -------- |{% ifversion fpt or ghes > 3.1 %} | `is:public` | Display public repositories. |{% endif %} | `is:internal` | Display internal repositories. | | `is:private` | Display private repositories. | | `archived:true` | Display archived repositories. |

### Teamによるフィルタ

| 修飾子                       | 説明                               |
| ------------------------- | -------------------------------- |
| <code>team:<em>TEAM-NAME</em></code> | *TEAM-NAME*が管理者権限を持つリポジトリを表示します。 |

### トピックによるフィルタ

| 修飾子                       | 説明                             |
| ------------------------- | ------------------------------ |
| <code>topic:<em>TOPIC-NAME</em></code> | *TOPIC-NAME*で分類されるリポジトリを表示します。 |

### アラートのリストをソート

| 修飾子                           | 説明                                                                                    |
| ----------------------------- | ------------------------------------------------------------------------------------- |
| `sort:risk`                   | セキュリティの概要中のリポジトリをリスクでソートします。                                                          |
| `sort:repos`                  | セキュリティの概要中のリポジトリを名前でアルファベット順にソートします。                                                  |
| `sort:code-scanning-alerts`   | セキュリティの概要中のリポジトリを{% data variables.product.prodname_code_scanning %}アラート数でソートします。   |
| `sort:secret-scanning-alerts` | セキュリティの概要中のリポジトリを{% data variables.product.prodname_secret_scanning %}アラート数でソートします。 |
| `sort:dependabot-alerts`      | セキュリティの概要中のリポジトリを{% data variables.product.prodname_dependabot_alerts %}数でソートします。   |
