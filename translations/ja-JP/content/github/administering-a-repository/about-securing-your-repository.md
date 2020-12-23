---
title: リポジトリの保護について
intro: '{% data variables.product.product_name %} には、リポジトリを安全に保つために役立つさまざまな方法があります。'
versions:
  free-pro-team: '*'
---

### リポジトリの保護設定をする

リポジトリを保護するための最初の手順は、コードを表示および変更できるユーザを設定することです。 詳しい情報については、「[リポジトリ設定を管理する](/github/administering-a-repository/managing-repository-settings)」を参照してください。

### リポジトリを保護する

{% data variables.product.prodname_dotcom %} には、コードを安全に保つために役立つセキュリティ機能が追加されています。 これらは、リポジトリの [**セキュリティ**] タブにあります。

- **セキュリティポリシー**

  リポジトリで見つけたセキュリティの脆弱性を内密に報告しやすくします。 詳しい情報については「[リポジトリにセキュリティポリシーを追加する](/github/managing-security-vulnerabilities/adding-a-security-policy-to-your-repository)」を参照してください。

- **セキュリティアドバイザリ**

  リポジトリのコードのセキュリティの脆弱性について、非公開で議論して修正します。 その後、セキュリティアドバイザリを公開して、コミュニティに脆弱性を警告し、アップグレードするように促すことができます。 詳しい情報については「[{% data variables.product.prodname_security_advisories %}について](/github/managing-security-vulnerabilities/about-github-security-advisories)」を参照してください。

- **{% data variables.product.prodname_dependabot_alerts %} and security updates**

  セキュリティの脆弱性を含むことを把握している依存関係に関するアラートを表示し、プルリクエストを自動的に生成してこれらの依存関係を更新するかどうかを選択します。 For more information, see "[About alerts for vulnerable dependencies](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)" and "[About {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-dependabot-security-updates)."

- **{% data variables.product.prodname_dependabot %} version updates**

  Use {% data variables.product.prodname_dependabot %} to automatically raise pull requests to keep your dependencies up-to-date. This helps reduce your exposure to older versions of dependencies. Using newer versions makes it easier to apply patches if security vulnerabilities are discovered, and also makes it easier for {% data variables.product.prodname_dependabot_security_updates %} to successfully raise pull requests to upgrade vulnerable dependencies. 詳しい情報については、「[{% data variables.product.prodname_dependabot_version_updates %} について](/github/administering-a-repository/about-dependabot-version-updates)」を参照してください。

- **{% data variables.product.prodname_code_scanning_capc %} アラート**

  新しいコードまたは変更されたコードのセキュリティの脆弱性とコーディングエラーを自動的に検出します。 潜在的な問題が強調表示され、あわせて詳細情報も確認できるため、デフォルトのブランチにマージする前にコードを修正できます。 詳しい情報については、「[コードスキャニングについて](/github/finding-security-vulnerabilities-and-errors-in-your-code/about-code-scanning)」を参照してください。

- **検出されたシークレット**

  {% data variables.product.prodname_dotcom %} がコードで検出したシークレットが表示されます。 リポジトリにチェックインされたトークンまたは資格情報は、侵害されたものとして扱う必要があります。 詳しい情報については、「[シークレットスキャニングについて](/github/administering-a-repository/about-secret-scanning)」を参照してください。

### 依存関係を調べる
{% data variables.product.prodname_dotcom %} の依存関係グラフを使用すると、次の情報を調べることができます。

* リポジトリが依存しているエコシステムとパッケージ
* リポジトリに依存しているリポジトリとパッケージ

You must enable the dependency graph before {% data variables.product.prodname_dotcom %} can generate {% data variables.product.prodname_dependabot_alerts %} for dependencies with security vulnerabilities.

依存関係グラフは、リポジトリの [**Insights**] タブにあります。 詳しい情報については、「[依存関係グラフについて](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)」を参照してください。
