---
title: GitHubのセキュリティ機能
intro: '{% data variables.product.prodname_dotcom %}のセキュリティ機能の概要。'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Repositories
  - Dependencies
  - Vulnerabilities
  - Advanced Security
---

## {% data variables.product.prodname_dotcom %}のセキュリティ機能について

{% data variables.product.prodname_dotcom %}は、リポジトリ内及びOrganizationに渡ってコードとシークレットをセキュアに保つのに役立つ機能があります。 {% data reusables.advanced-security.security-feature-availability %}

{% data variables.product.prodname_advisory_database %}には、表示、検索、フィルタできる精選されたセキュリティ脆弱性のリストが含まれます。 {% data reusables.security-advisory.link-browsing-advisory-db %}

{% ifversion fpt or ghes or ghae-issue-4864 or ghec %}
## すべてのリポジトリで使用可能
{% endif %}
### セキュリティポリシー

リポジトリで見つけたセキュリティの脆弱性を、ユーザが内密に報告しやすくします。 詳しい情報については「[リポジトリにセキュリティポリシーを追加する](/code-security/getting-started/adding-a-security-policy-to-your-repository)」を参照してください。

{% ifversion fpt or ghec %}
### セキュリティアドバイザリ

リポジトリのコードのセキュリティの脆弱性について、非公開で議論して修正します。 その後、セキュリティアドバイザリを公開して、コミュニティに脆弱性を警告し、アップグレードするようコミュニティメンバーに促すことができます。 詳しい情報については、「[{% data variables.product.prodname_security_advisories %} について](/github/managing-security-vulnerabilities/about-github-security-advisories)」を参照してください。

{% endif %}
{% ifversion fpt or ghec or ghes > 3.2 %}

### {% data variables.product.prodname_dependabot_alerts %} およびセキュリティアップデート

セキュリティの脆弱性を含むことを把握している依存関係に関するアラートを表示し、プルリクエストを自動的に生成してこれらの依存関係を更新するかどうかを選択します。 For more information, see "[About {% data variables.product.prodname_dependabot_alerts %}](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)" and "[About {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-dependabot-security-updates)."
{% endif %}

{% ifversion ghes < 3.3 or ghae-issue-4864 %}
### {% data variables.product.prodname_dependabot_alerts %}

{% data reusables.dependabot.dependabot-alerts-beta %}

セキュリティの脆弱性を含むことを把握している依存関係に関するアラートを表示し、それらのアラートを管理します。 詳しい情報については、「[{% data variables.product.prodname_dependabot_alerts %} について](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)」を参照してください。
{% endif %}

{% ifversion fpt or ghec or ghes > 3.2 %}
### {% data variables.product.prodname_dependabot %} バージョンアップデート

{% data variables.product.prodname_dependabot %}を使って、依存関係を最新に保つためのPull Requestを自動的に発行してください。 これは、依存関係の古いバージョンの公開を減らすために役立ちます。 新しいバージョンを使用すると、セキュリティの脆弱性が発見された場合にパッチの適用が容易になり、さらに脆弱性のある依存関係を更新するため {% data variables.product.prodname_dependabot_security_updates %} がプルリクエストを発行することも容易になります。 詳しい情報については、「[{% data variables.product.prodname_dependabot_version_updates %} について](/github/administering-a-repository/about-dependabot-version-updates)」を参照してください。
{% endif %}

{% ifversion fpt or ghes or ghae-issue-4864 or ghec %}
### 依存関係グラフ
依存関係グラフを使うと、自分のリポジトリが依存しているエコシステムやパッケージ、そして自分のリポジトリに依存しているリポジトリやパッケージを調べることができます。

依存関係グラフは、リポジトリの [**Insights**] タブにあります。 詳しい情報については、「[依存関係グラフについて](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)」を参照してください。
{% endif %}

### Security overview for repositories
For all public repositories, the security overview shows which security features are enabled for the repository, and offers the option to configure any available security features that are not currently enabled.

## Available with {% data variables.product.prodname_GH_advanced_security %}

{% ifversion fpt %}
The following {% data variables.product.prodname_GH_advanced_security %} features are available and free of charge for public repositories on {% data variables.product.prodname_dotcom_the_website %}. Organizations that use {% data variables.product.prodname_ghe_cloud %} with a license for {% data variables.product.prodname_GH_advanced_security %} can use the full set of features in any of their repositories. For a list of the features available with {% data variables.product.prodname_ghe_cloud %}, see the [{% data variables.product.prodname_ghe_cloud %} documentation](/enterprise-cloud@latest/code-security/getting-started/github-security-features#available-with-github-advanced-security).

{% elsif ghec %}
Many {% data variables.product.prodname_GH_advanced_security %} features are available and free of charge for public repositories on {% data variables.product.prodname_dotcom_the_website %}. Organizations within an enterprise that has a {% data variables.product.prodname_GH_advanced_security %} license can use all the following features on their repositories. {% data reusables.advanced-security.more-info-ghas %}

{% elsif ghes %}
{% data variables.product.prodname_GH_advanced_security %} features are available for enterprises with a license for {% data variables.product.prodname_GH_advanced_security %}. The features are restricted to repositories owned by an organization. {% data reusables.advanced-security.more-info-ghas %}

{% elsif ghae %}
{% data variables.product.prodname_GH_advanced_security %} features are available for repositories owned by an organization. {% data reusables.advanced-security.more-info-ghas %}
{% endif %}

### {% data variables.product.prodname_code_scanning_capc %}

新しいコードまたは変更されたコードのセキュリティの脆弱性とコーディングエラーを自動的に検出します。 潜在的な問題が強調表示され、あわせて詳細情報も確認できるため、デフォルトのブランチにマージする前にコードを修正できます。 詳しい情報については、「[コードスキャニングについて](/github/finding-security-vulnerabilities-and-errors-in-your-code/about-code-scanning)」を参照してください。

{% ifversion fpt or ghec %}
### {% data variables.product.prodname_secret_scanning_partner_caps %}

Automatically detect leaked secrets across all public repositories. {% data variables.product.company_short %} informs the relevant service provider that the secret may be compromised. For details of the supported secrets and service providers, see "[{% data variables.product.prodname_secret_scanning_caps %} patterns](/code-security/secret-scanning/secret-scanning-patterns)."
{% endif %}

{% ifversion not fpt %}
### {% data variables.product.prodname_secret_scanning_GHAS_caps %}

{% ifversion ghec %}
Available only with a license for {% data variables.product.prodname_GH_advanced_security %}.
{% endif %}

Automatically detect tokens or credentials that have been checked into a repository. You can view alerts for any secrets that {% data variables.product.company_short %} finds in your code, so that you know which tokens or credentials to treat as compromised. 詳しい情報については、「[シークレットスキャニングについて](/code-security/secret-scanning/about-secret-scanning#about-secret-scanning-for-advanced-security)」を参照してください。
{% endif %}

{% ifversion fpt or ghes > 3.1 or ghae-issue-4864 or ghec %}
### 依存関係のレビュー

Pull Requestをマージする前に、依存関係に対する変更の影響を詳細に示し、脆弱なバージョンがあればその詳細を確認できます。 詳しい情報については「[依存関係のレビュー](/code-security/supply-chain-security/about-dependency-review)」を参照してください。
{% endif %}

{% ifversion ghec or ghes > 3.1 or ghae-issue-4554 %}
### Security overview for organizations{% ifversion ghec or ghes > 3.4 or ghae-issue-6199 %}, enterprises,{% endif %} and teams

{% ifversion ghec %}
Available only with a license for {% data variables.product.prodname_GH_advanced_security %}.
{% endif %}

Review the security configuration and alerts for your organization and identify the repositories at greatest risk. For more information, see "[About the security overview](/code-security/security-overview/about-the-security-overview)."
{% endif %}

## 参考リンク
- "[{% data variables.product.prodname_dotcom %}の製品](/github/getting-started-with-github/githubs-products)"
- 「[{% data variables.product.prodname_dotcom %}言語サポート](/github/getting-started-with-github/github-language-support)」
