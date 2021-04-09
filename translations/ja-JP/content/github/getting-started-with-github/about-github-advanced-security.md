---
title: GitHub Advanced Securityについて
intro: '{% data variables.product.prodname_dotcom %} makes extra security features available to customers under an {% data variables.product.prodname_advanced_security %} license.{% if currentVersion == "free-pro-team@latest" %} These features are also enabled for public repositories on {% data variables.product.prodname_dotcom_the_website %}.{% endif %}'
product: '{% data reusables.gated-features.ghas %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.0'
  github-ae: '*'
topics:
  - セキュリティ
---

### {% data variables.product.prodname_GH_advanced_security %} について

{% data variables.product.prodname_dotcom %}には、コードの質を改善し維持できる多くの機能があります。 これらの一部は、依存関係グラフや {% data variables.product.prodname_dependabot_alerts %}{% endif %} など、すべてのプランに含まれています{% if currentVersion != "github-ae@latest" %}。 それ以外のセキュリティ機能には、{% data variables.product.prodname_dotcom_the_website %}のパブリックリポジトリとは別のリポジトリで{% data variables.product.prodname_GH_advanced_security %}のライセンスを実行する必要があります。

{% if currentVersion == "free-pro-team@latest" %}詳細については、「[{% data variables.product.prodname_GH_advanced_security %} のライセンスについて](/github/setting-up-and-managing-billing-and-payments-on-github/about-licensing-for-github-advanced-security)」を参照してください。{% elsif currentVersion ver_gt "enterprise-server@2.22" %}{% data variables.product.prodname_GH_advanced_security %} のライセンスの購入については、{% data variables.contact.contact_enterprise_sales %} にお問い合わせください。{% elsif currentVersion == "github-ae@latest" %}ベータリリース中の {% data variables.product.prodname_ghe_managed %} の {% data variables.product.prodname_GH_advanced_security %} は無料です。{% endif %}

### {% data variables.product.prodname_advanced_security %}機能について

{% data variables.product.prodname_GH_advanced_security %}のライセンスでは、以下の機能が追加されます。

- **{% data variables.product.prodname_code_scanning_capc %}** - コードで、潜在的なセキュリティの脆弱性とコーディングエラーを検索します。 詳しい情報については、「[{% data variables.product.prodname_code_scanning %} について](/github/finding-security-vulnerabilities-and-errors-in-your-code/about-code-scanning)」を参照してください。

- **{% data variables.product.prodname_secret_scanning_caps %}** - シークレット、たとえばリポジトリにチェックインされているキーやトークンなどを検出します。 詳しい情報については、「[{% data variables.product.prodname_secret_scanning %} について](/github/administering-a-repository/about-secret-scanning)」を参照してください。

{% if currentVersion == "free-pro-team@latest" %}
- **依存関係のレビュー** - プルリクエストをマージする前に、依存関係に対する変更の影響を詳細に示し、脆弱性なバージョンがあればその詳細を確認できます。 For more information, see "[About dependency review](/code-security/supply-chain-security/about-dependency-review)."
{% endif %}

開発中の{% data variables.product.prodname_advanced_security %}機能については、「[{% data variables.product.prodname_dotcom %} パブリックロードマップ](https://github.com/github/roadmap).」を参照してください。 セキュリティ機能すべての概要については、「[リポジトリのセキュリティ保護について](/github/administering-a-repository/about-securing-your-repository#setting-up-your-repository-securely)」を参照してください。

{% if currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
### {% data variables.product.product_name %} で {% data variables.product.prodname_advanced_security %} 機能を有効にする

{% if currentVersion ver_gt "enterprise-server@2.22" %}
サイト管理者は
これらの機能を使用する前に、{% data variables.product.product_location %} に対して {% data variables.product.prodname_advanced_security %} を有効化する必要があります。 詳しい情報については、「[高度なセキュリティ機能を設定する](/admin/configuration/configuring-advanced-security-features)」を参照してください。
{% endif %}

システムを設定すると、Organizationまたはリポジトリのレベルでこの機能を有効化または無効化することができます。 For more information, see "[Managing security and analysis settings for your organization](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)" and "[Managing security and analysis settings for your repository](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)."

{% endif %}

{% if currentVersion != "github-ae@latest" %}
### {% data variables.product.prodname_dotcom_the_website %}で{% data variables.product.prodname_advanced_security %}機能を有効にする

{% data variables.product.prodname_dotcom_the_website %} のパブリックリポジトリでは、これらの機能は永続的に有効になっており、プロジェクトの可視性を変更してコードがパブリックでなくなった場合にのみ無効化できます。

For other repositories, once you have a license for your enterprise account, you can enable and disable these features at the organization or repository level. {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}For more information, see "[Managing security and analysis settings for your organization](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)" and "[Managing security and analysis settings for your repository](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)."{% endif %}

{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
Enterprise アカウントをお持ちの場合は、Enterprise ライセンスページに Enterprise 全体のライセンス使用状況が表示されます。 詳細については、「[{% data variables.product.prodname_GH_advanced_security %} の使用状況を表示する](/github/setting-up-and-managing-billing-and-payments-on-github/viewing-your-github-advanced-security-usage)」を参照してください。

{% endif %}

{% if currentVersion == "free-pro-team@latest" %}

### 参考リンク

- "[Enforcing policies for {% data variables.product.prodname_advanced_security %} in your enterprise account](/github/setting-up-and-managing-your-enterprise/enforcing-policies-for-advanced-security-in-your-enterprise-account)"

{% elsif currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@next" %}

### 参考リンク

- "[Enforcing policies for {% data variables.product.prodname_advanced_security %} in your enterprise](/admin/policies/enforcing-policies-for-advanced-security-in-your-enterprise)"

{% endif %}
