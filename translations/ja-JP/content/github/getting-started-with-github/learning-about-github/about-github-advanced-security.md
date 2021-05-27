---
title: GitHub Advanced Securityについて
intro: '{% data variables.product.prodname_dotcom %}では、{% data variables.product.prodname_advanced_security %}ライセンスのもとでセキュリティ機能がさらに強化されます。 これらの機能は、{% data variables.product.prodname_dotcom_the_website %}のパブリックリポジトリに対しても有効になります。'
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.0'
  github-ae: '*'
topics:
  - Security
redirect_from:
  - /github/getting-started-with-github/about-github-advanced-security
---
### {% data variables.product.prodname_GH_advanced_security %} について

{% data variables.product.prodname_dotcom %}には、コードの質を改善し維持できる多くの機能があります。 依存関係グラフや{% data variables.product.prodname_dependabot_alerts %}など、一部の機能はすべてのプランに含まれます。 それ以外のセキュリティ機能には、{% data variables.product.prodname_dotcom_the_website %}のパブリックリポジトリとは別のリポジトリで{% data variables.product.prodname_GH_advanced_security %}のライセンスを実行する必要があります。 (つまり、{% data variables.product.prodname_dotcom_the_website %}のプライベートおよび内部リポジトリと、{% data variables.product.prodname_ghe_server %}のすべてのリポジトリです。)

セキュリティ機能すべての概要については、「[リポジトリのセキュリティ保護について](/github/administering-a-repository/about-securing-your-repository#setting-up-your-repository-securely)」を参照してください。 セキュリティ機能に関連するアクションの権限要件に関する詳しい情報については、「[Organization のリポジトリの権限レベル](/github/setting-up-and-managing-organizations-and-teams/repository-permission-levels-for-an-organization#permission-requirements-for-security-features)」を参照してください。

### {% data variables.product.prodname_advanced_security %}機能について

{% data variables.product.prodname_GH_advanced_security %}のライセンスでは、以下の機能が追加されます。

- **{% data variables.product.prodname_code_scanning_capc %}** - コードで、潜在的なセキュリティの脆弱性とコーディングエラーを検索します。 詳しい情報については、「[{% data variables.product.prodname_code_scanning %} について](/github/finding-security-vulnerabilities-and-errors-in-your-code/about-code-scanning)」を参照してください。

- **{% data variables.product.prodname_secret_scanning_caps %}** - シークレット、たとえばリポジトリにチェックインされているキーやトークンなどを検出します。 詳しい情報については、「[{% data variables.product.prodname_secret_scanning %} について](/github/administering-a-repository/about-secret-scanning)」を参照してください。

{% if currentVersion == "free-pro-team@latest" %}
- **依存関係のレビュー** - プルリクエストをマージする前に、依存関係に対する変更の影響を詳細に示し、脆弱性なバージョンがあればその詳細を確認できます。 For more information, see "[Reviewing dependency changes in a pull request](/github/collaborating-with-issues-and-pull-requests/reviewing-dependency-changes-in-a-pull-request)."
{% endif %}

開発中の{% data variables.product.prodname_advanced_security %}機能については、「[{% data variables.product.prodname_dotcom %} パブリックロードマップ](https://github.com/github/roadmap).」を参照してください。

{% if currentVersion ver_gt "enterprise-server@2.22" %}
### {% data variables.product.prodname_ghe_server %}で{% data variables.product.prodname_advanced_security %}機能を有効にする

この機能を使用するには、サイト管理者が{% data variables.product.product_location %}の{% data variables.product.prodname_advanced_security %}を有効にする必要があります。 詳しい情報については、「[高度なセキュリティ機能を設定する](/admin/configuration/configuring-advanced-security-features)」を参照してください。

システムを設定すると、Organizationまたはリポジトリのレベルでこの機能を有効化または無効化することができます。 詳しい情報については、「[Organization のセキュリティおよび分析設定を管理する](/github/setting-up-and-managing-organizations-and-teams/managing-security-and-analysis-settings-for-your-organization)」と「[リポジトリのセキュリティと分析設定を管理する](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)」を参照してください。
For information about purchasing a license for

{% data variables.product.prodname_GH_advanced_security %}, contact {% data variables.contact.contact_enterprise_sales %}.
{% endif %}

### {% data variables.product.prodname_dotcom_the_website %}で{% data variables.product.prodname_advanced_security %}機能を有効にする

{% data variables.product.prodname_dotcom_the_website %}のパブリックリポジトリの場合、この機能は永続的に有効になっており、無効にできるのはプロジェクトの可視性背を変更して、コードがパブリックでなくなった場合だけです。

その他すべてのリポジトリの場合は、ライセンスを有効にするとOrganizationまたはリポジトリのレベルでこの機能を有効化または無効化することができます。 {% if currentVersion == "free-pro-team@latest" %}詳しい情報については、「[Organization のセキュリティおよび分析設定を管理する](/github/setting-up-and-managing-organizations-and-teams/managing-security-and-analysis-settings-for-your-organization)」と「[リポジトリのセキュリティと分析設定を管理する](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)」を参照してください。
For information about purchasing a license for

{% data variables.product.prodname_GH_advanced_security %}, contact {% data variables.contact.contact_enterprise_sales %}.
{% endif %}
