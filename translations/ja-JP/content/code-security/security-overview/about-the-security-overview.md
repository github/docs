---
title: セキュリティの概要について
intro: OrganizationもしくはTeamが所有するリポジトリに関するセキュリティアラートを、セキュリティの概要ページという一カ所で表示、フィルタリング、ソートできます。
permissions: '{% data reusables.security-center.permissions %}'
product: '{% data reusables.gated-features.security-center %}'
redirect_from:
  - /code-security/security-overview/exploring-security-alerts
versions:
  fpt: '*'
  ghae: '*'
  ghes: '*'
  ghec: '*'
type: how_to
topics:
  - Security overview
  - Advanced Security
  - Alerts
  - Dependabot
  - Dependencies
  - Organizations
  - Teams
shortTitle: セキュリティの概要について
---

{% ifversion ghes < 3.5 or ghae %}
{% data reusables.security-center.beta %}
{% endif %}

## セキュリティの概要について

{% ifversion ghes or ghec or ghae %}{% elsif fpt %}{% data variables.product.prodname_ghe_cloud %}を使用するOrganizationにおいて、{% endif %}セキュリティの概要は{% ifversion ghes or ghec or ghae %}自分の{% elsif fpt %}{% endif %}Organizationのセキュリティの状況の高レベルの表示に、あるいは介入が必要な問題のあるリポジトリを特定するために利用できます。 {% ifversion ghes or ghec or ghae %}{% elsif fpt %}それらのOrganizationの{% endif %}セキュリティの概要では、集約されたセキュリティ情報あるいはリポジトリ固有のセキュリティ情報を表示できます。 {% ifversion ghes or ghec or ghae %}{% elsif fpt %}{% data variables.product.prodname_ghe_cloud %}を使用するOrganizationでは、{% endif %}セキュリティの概要を使って{% ifversion ghes or ghec or ghae %}自分の{% elsif fpt %}Organizationの{% endif %}リポジトリでどのセキュリティ機能が有効化されているかを見ることも、現在使われていない利用可能なセキュリティ機能を設定することもできます。 {% ifversion fpt %}詳しい情報については[{% data variables.product.prodname_ghe_cloud %}ドキュメンテーション](/enterprise-cloud@latest/code-security/security-overview/about-the-security-overview)を参照してください。{% endif %}

{% ifversion ghec or ghes or ghae %}
The security overview indicates whether {% ifversion fpt or ghes or ghec %}security{% endif %}{% ifversion ghae %}{% data variables.product.prodname_GH_advanced_security %}{% endif %} features are enabled for repositories owned by your organization and consolidates alerts for each feature.{% ifversion fpt or ghes or ghec %} Security features include {% data variables.product.prodname_GH_advanced_security %} features, such as {% data variables.product.prodname_code_scanning %} and {% data variables.product.prodname_secret_scanning %}, as well as {% data variables.product.prodname_dependabot_alerts %}.{% endif %} For more information about {% data variables.product.prodname_GH_advanced_security %} features, see "[About {% data variables.product.prodname_GH_advanced_security %}](/get-started/learning-about-github/about-github-advanced-security)."{% ifversion fpt or ghes or ghec %} For more information about {% data variables.product.prodname_dependabot_alerts %}, see "[About {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-alerts-for-vulnerable-dependencies#dependabot-alerts-for-vulnerable-dependencies)."{% endif %}

リポジトリ及びOrganizationレベルでのコードの保護に関する詳しい情報については「[リポジトリの保護](/code-security/getting-started/securing-your-repository)」及び「[Organizationの保護](/code-security/getting-started/securing-your-organization)」を参照してください。

あなたの会社のアプリケーションセキュリティチームは、Organizationのセキュリティの状況の幅広い分析と特定の分析の両方にセキュリティの概要を利用できます。 たとえば、Enterpriseに{% data variables.product.prodname_GH_advanced_security %}をロールアウトするのにしたがって、Organizationや特定のTeamによる機能の採用をモニタリングしたり、Organization内のすべてのリポジトリに渡って特定のタイプと重要度のアラートをすべてレビューしたりするのに概要ページを利用できます。

### アラートのフィルタリングとソートについて

セキュリティの概要では、Organizationや特定のリポジトリ内のセキュリティリスクを理解するために、アラートを表示、ソート、フィルタリングできます。 セキュリティのサマリは高度に対話型であり、アラートのリスクレベル、アラートのタイプ、機能の有効化といった修飾子に基づいて特定のカテゴリの情報を調査できます。 関心の領域をより狭めて集中するために、複数のフィルタを適用することもできます。 たとえば、多数の{% data variables.product.prodname_dependabot_alerts %}が生じているプライベートリポジトリや、{% data variables.product.prodname_code_scanning %}アラートのないリポジトリを識別できます。 詳しい情報については「[セキュリティの概要におけるアラートのフィルタリング](/code-security/security-overview/filtering-alerts-in-the-security-overview)」を参照してください。

{% ifversion security-overview-views %}

セキュリティの概要では、Organizationとリポジトリの双方のレベルにおいて、Secret scanningアラートやCode scanningアラートといったとくていのセキュリティ機能のための専用のビューがあります。 これらのビューを使って、分析をアラートの特定セットに制限し、さらにそれぞれのビューに固有のフィルタ群で結果をさらに絞り込むことができます。 たとえば、Secret scanningアラートビューでは、`Secret type`フィルタを使ってGitHubの個人アクセストークンのような特定のシークレットだけのSecret scanningアラートを表示させることができます。 リポジトリレベルでは、セキュリティの概要を使って特定のリポジトリの現在のセキュリティの状況を評価し、そのリポジトリでまだ使われていない追加のセキュリティ機能を設定できます。

{% endif %}

![Organizationのセキュリティの概要](/assets/images/help/organizations/security-overview.png)

セキュリティの概要中の各リポジトリで、セキュリティ機能のそれぞれの種類のアイコンと、それぞれの種類についていくつのアラートがあるかが表示されます。 リポジトリでセキュリティの機能が有効化されていないなら、その機能のアイコンはグレー表示されます。 加えて、各リポジトリについてCode scanning、Dependabot、Secret scanningアラートに基づいてリスクスコアが計算されます。 このスコアはベータであり、注意して使用してください。 このアルゴリズムとアプローチは変更されることがあります。

![セキュリティの概要中のアイコン](/assets/images/help/organizations/security-overview-icons.png)

| アイコン                                                          | 意味                                                                                                                                                                                                                                                   |
| ------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {% octicon "code-square" aria-label="Code scanning alerts" %} | {% data variables.product.prodname_code_scanning_capc %} アラート. 詳しい情報については「[{% data variables.product.prodname_code_scanning %}について](/code-security/secure-coding/about-code-scanning)」を参照してください。                                                 |
| {% octicon "key" aria-label="Secret scanning alerts" %}       | {% data variables.product.prodname_secret_scanning_caps %} アラート. 詳しい情報については「[{% data variables.product.prodname_secret_scanning %}について](/code-security/secret-security/about-secret-scanning)」を参照してください。                                         |
| {% octicon "hubot" aria-label="Dependabot alerts" %}          | {% data variables.product.prodname_dependabot_alerts %}について受ける方法は、カスタマイズできます。 詳しい情報については「[{% data variables.product.prodname_dependabot_alerts %}について](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)」を参照してください。 |
| {% octicon "check" aria-label="Check" %}                      | セキュリティ機能は有効化されていますが、このリポジトリではアラートを発していません。                                                                                                                                                                                                           |
| {% octicon "x" aria-label="x" %}                              | このリポジトリでは、このセキュリティ機能はサポートされていません。                                                                                                                                                                                                                    |

セキュリティの概要は、セキュリティ機能が発したアクティブなアラートを表示します。 リポジトリに対してセキュリティの概要でアラートがない場合でも、検出されていないセキュリティ脆弱性やコードのエラーは存在するかもしれません。

### Organizationレベルのセキュリティの概要について

Organizationのレベルでは、セキュリティの概要はOrganizationが所有するリポジトリに関する集約されたリポジトリ固有のセキュリティ情報を表示します。 Organizationレベルでセキュリティ機能によって情報をフィルタリングできます。

{% ifversion ghec or ghes > 3.4 or ghae-issue-6199 %}
### Enterpriseレベルのセキュリティの概要について
Enterpriseのレベルでは、セキュリティの概要はEnterpriseにおける集約されたセキュリティ情報と、リポジトリ固有のセキュリティ情報を表示します。 Enterpriseが所有しており、セキュリティアラートがあるリポジトリを見ることも、Enterpirse全体にわたってすべてのセキュリティアラートあるいはセキュリティ機能固有のアラートを見ることもできます。

Enterprise内のOrganizationのオーナー及びOrganizationのセキュリティ管理者も、Enterpriseレベルのセキュリティ概要への限定されたアクセスを持ちます。 それらの人々は、完全なアクセスを持っているOrganizationのリポジトリとアラートだけを見ることができます。

{% elsif fpt %}
### Enterpriseレベルのセキュリティの概要について
Enterpriseのレベルでは、セキュリティの概要はEnterpriseにおける集約された情報と、リポジトリ固有の情報を表示します。 詳しい情報については{% data variables.product.prodname_ghe_cloud %}、ドキュメンテーションの、「[Enterpriseレベルのセキュリティの概要について](/enterprise-cloud@latest/code-security/security-overview/about-the-security-overview#about-the-enterprise-level-security-overview)を参照してください。
{% endif %}

### Teamレベルのセキュリティの概要について
Teamレベルでは、セキュリティの概要はTeamが管理権限を持つリポジトリの固有のセキュリティ情報を表示します。 詳しい情報については「[OrganizationリポジトリへのTeamのアクセス管理](/organizations/managing-access-to-your-organizations-repositories/managing-team-access-to-an-organization-repository)」を参照してください。
{% endif %}
