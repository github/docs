---
title: リポジトリの保護について
intro: '{% data variables.product.product_name %} には、リポジトリを安全に保つために役立つさまざまな方法があります。'
redirect_from:
  - /github/administering-a-repository/about-securing-your-repository
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.0'
  github-ae: '*'
topics:
  - Repositories
---

### リポジトリの保護設定をする

リポジトリを保護するための最初の手順は、コードを表示および変更できるユーザを設定することです。 詳しい情報については、「[リポジトリ設定を管理する](/github/administering-a-repository/managing-repository-settings)」を参照してください。

### リポジトリを保護する

{% data variables.product.prodname_dotcom %} には、コードを安全に保つために役立つセキュリティ機能が追加されています。 これらは、リポジトリの [**セキュリティ**] タブにあります。

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
#### すべてのリポジトリで使用可能

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == 'github-ae@next' %}
- **セキュリティポリシー**

  Make it easy for your users to confidentially report security vulnerabilities they've found in your repository. 詳しい情報については「[リポジトリにセキュリティポリシーを追加する](/code-security/getting-started/adding-a-security-policy-to-your-repository)」を参照してください。
{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
- **セキュリティアドバイザリ**

  リポジトリのコードのセキュリティの脆弱性について、非公開で議論して修正します。 その後、セキュリティアドバイザリを公開して、コミュニティに脆弱性を警告し、アップグレードするように促すことができます。 詳しい情報については「[{% data variables.product.prodname_security_advisories %}について](/github/managing-security-vulnerabilities/about-github-security-advisories)」を参照してください。

- **{% data variables.product.prodname_dependabot_alerts %} およびセキュリティアップデート**

  セキュリティの脆弱性を含むことを把握している依存関係に関するアラートを表示し、プルリクエストを自動的に生成してこれらの依存関係を更新するかどうかを選択します。 詳しい情報については、「[脆弱性のある依存関係に対するアラートについて](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)」 および「[{% data variables.product.prodname_dependabot_security_updates %} について](/github/managing-security-vulnerabilities/about-dependabot-security-updates)」を参照してください。
 {% endif %}

{% if currentVersion ver_gt "enterprise-server@2.22" %}
- **{% data variables.product.prodname_dependabot_alerts %}**

  セキュリティの脆弱性を含むことを把握している依存関係に関するアラートを表示し、それらのアラートを管理します。 詳しい情報については、「[脆弱性のある依存関係に対するアラートについて](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)」を参照してください。
  {% endif %}

{% if currentVersion == "free-pro-team@latest" %}
- **{% data variables.product.prodname_dependabot %} バージョンアップデート**

  Use {% data variables.product.prodname_dependabot %} to automatically raise pull requests to keep your dependencies up-to-date. これは、依存関係の古いバージョンの公開を減らすために役立ちます。 新しいバージョンを使用すると、セキュリティの脆弱性が発見された場合にパッチの適用が容易になり、さらに脆弱性のある依存関係を更新するため {% data variables.product.prodname_dependabot_security_updates %} がプルリクエストを発行することも容易になります。 詳しい情報については、「[{% data variables.product.prodname_dependabot_version_updates %} について](/github/administering-a-repository/about-dependabot-version-updates)」を参照してください。
  {% endif %}
  {% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}

#### {% if currentVersion == "free-pro-team@latest" %}パブリックリポジトリおよび{% endif %}{% data variables.product.prodname_advanced_security %} が有効になっているリポジトリで使用可能

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
These features are available {% if currentVersion == "free-pro-team@latest" %}for all public repositories, and for private repositories owned by organizations with {% else %}if you have {% endif %}an {% data variables.product.prodname_advanced_security %} license. {% data reusables.advanced-security.more-info-ghas %}
  {% endif %}

- **{% data variables.product.prodname_code_scanning_capc %} アラート**

  新しいコードまたは変更されたコードのセキュリティの脆弱性とコーディングエラーを自動的に検出します。 潜在的な問題が強調表示され、あわせて詳細情報も確認できるため、デフォルトのブランチにマージする前にコードを修正できます。 詳しい情報については、「[コードスキャニングについて](/github/finding-security-vulnerabilities-and-errors-in-your-code/about-code-scanning)」を参照してください。

- **{% data variables.product.prodname_secret_scanning_caps %} アラート**

  {% if currentVersion == "free-pro-team@latest" %}プライベートリポジトリで、{% else %}{% endif %}any secrets that {% data variables.product.prodname_dotcom %} がコードで見つけたシークレットを表示します。 リポジトリにチェックインされたトークンまたは資格情報は、侵害されたものとして扱う必要があります。 詳しい情報については、「[シークレットスキャニングについて](/github/administering-a-repository/about-secret-scanning)」を参照してください。

{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
- **依存関係のレビュー** - プルリクエストをマージする前に、依存関係に対する変更の影響を詳細に示し、脆弱性なバージョンがあればその詳細を確認できます。 For more information, see "[About dependency review](/code-security/supply-chain-security/about-dependency-review)."
{% endif %}

{% if currentVersion != "github-ae@latest" %}
### 依存関係を調べる
{% data variables.product.prodname_dotcom %} の依存関係グラフを使用すると、次の情報を調べることができます。

* リポジトリが依存しているエコシステムとパッケージ
* リポジトリに依存しているリポジトリとパッケージ

{% data variables.product.prodname_dotcom %} がセキュリティの脆弱性のある依存関係に対して {% data variables.product.prodname_dependabot_alerts %} を生成する前に、依存関係グラフを有効にする必要があります。 {% if currentVersion == "free-pro-team@latest" %} 依存関係グラフを有効にすると、{% data variables.product.prodname_dotcom %} はプルリクエストの依存関係レビューも実行します。{% endif %}

依存関係グラフは、リポジトリの [**Insights**] タブにあります。 詳しい情報については、「[依存関係グラフについて](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)」を参照してください。
{% endif %}
