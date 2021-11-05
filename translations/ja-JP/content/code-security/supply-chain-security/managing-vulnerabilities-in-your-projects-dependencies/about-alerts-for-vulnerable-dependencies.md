---
title: 脆弱性のある依存関係に関するアラートについて
intro: 'リポジトリに影響を与える脆弱性を検出すると、{% data variables.product.product_name %} は {% data variables.product.prodname_dependabot_alerts %} を送信します。'
redirect_from:
  - /articles/about-security-alerts-for-vulnerable-dependencies
  - /github/managing-security-vulnerabilities/about-security-alerts-for-vulnerable-dependencies
  - /github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies
  - /code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies
versions:
  fpt: '*'
  ghes: '*'
  ghae: issue-4864
  ghec: '*'
type: overview
topics:
  - Dependabot
  - Alerts
  - Vulnerabilities
  - Repositories
  - Dependencies
shortTitle: Dependabotアラート
---

<!--For this article in earlier GHES versions, see /content/github/managing-security-vulnerabilities-->
<!--Marketing-LINK: From /features/security/software-supply-chain page "About alerts for vulnerable dependencies ".-->

## 脆弱性のある依存関係について

{% data reusables.repositories.a-vulnerability-is %}

セキュリティ上の脆弱性があるパッケージにコードが依存している場合、この脆弱性のある依存関係により、プロジェクトまたはそれを使用するユーザにさまざまな問題が発生する可能性があります。

## 脆弱性のある依存関係の検出

{% data reusables.dependabot.dependabot-alerts-beta %}

{% data variables.product.prodname_dependabot %}は脆弱性のある依存関係を検出し、以下の場合に{% data variables.product.prodname_dependabot_alerts %}を送信します。

{% ifversion fpt or ghec %}
- {% data variables.product.prodname_advisory_database %} に新しい脆弱性が追加されたとき。 詳しい情報については、「[{% data variables.product.prodname_advisory_database %} のセキュリティの脆弱性を参照する](/github/managing-security-vulnerabilities/browsing-security-vulnerabilities-in-the-github-advisory-database)」および「[{% data variables.product.prodname_security_advisories %} について](/code-security/security-advisories/about-github-security-advisories)」を参照してください。{% else %}
- 新しいアドバイザリデータが {% data variables.product.prodname_dotcom_the_website %} から 1 時間ごとに {% data variables.product.product_location %} に同期されたとき。 {% data reusables.security-advisory.link-browsing-advisory-db %}{% endif %}
- リポジトリの依存関係グラフが変更されたとき。 たとえば、コントリビューターがコミットをプッシュして、依存しているパッケージまたはバージョンを変更したとき{% ifversion fpt or ghec %}、またはいずれかの依存関係のコードが変更されたときなどです{% endif %}。 詳しい情報については、「[依存関係グラフについて](/code-security/supply-chain-security/about-the-dependency-graph)」を参照してください。

{% data reusables.repositories.dependency-review %}

{% data variables.product.product_name %} が脆弱性と依存関係を検出できるエコシステムのリストについては、「[サポートされているパッケージエコシステム](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#supported-package-ecosystems)」を参照してください。

{% note %}

**注釈:** マニフェストとロックファイルを最新の状態に保つことが重要です。 依存関係グラフが現在の依存関係とバージョンを正確に反映していない場合、使用する脆弱性のある依存関係のアラートを見逃す可能性があります。 また、使用しなくなった依存関係のアラートを受け取る場合もあります。

{% endnote %}

## 脆弱性のある依存関係の {% data variables.product.prodname_dependabot %} アラート

{% data reusables.repositories.enable-security-alerts %}

{% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %} は、_パブリック_リポジトリ内の脆弱性のある依存関係を検出し、デフォルト設定で {% data variables.product.prodname_dependabot_alerts %} を生成します。 プライベートリポジトリの所有者、または管理アクセス権を持つユーザは、リポジトリの依存関係グラフと {% data variables.product.prodname_dependabot_alerts %} を有効にすることで、{% data variables.product.prodname_dependabot_alerts %} を有効化できます。

ユーザアカウントまたは Organization が所有するすべてのリポジトリの {% data variables.product.prodname_dependabot_alerts %} を有効または無効にすることもできます。 詳しい情報については、「[ユーザーアカウントのセキュリティおよび分析設定を管理する](/github/setting-up-and-managing-your-github-user-account/managing-security-and-analysis-settings-for-your-user-account)」または「[Organization のセキュリティおよび分析設定を管理する](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)」を参照してください。

For information about access requirements for actions related to {% data variables.product.prodname_dependabot_alerts %}, see "[Repository roles for an organization](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization#access-requirements-for-security-features)."

{% data variables.product.product_name %} は依存関係グラフの生成をすぐに開始し、脆弱性のある依存関係が特定されるとすぐにアラートを生成します。 グラフは通常数分以内に入力されますが、多くの依存関係を持つリポジトリの場合は時間がかかる場合があります。 詳しい情報については、「[プライベートリポジトリのデータ使用を管理する](/github/understanding-how-github-uses-and-protects-your-data/managing-data-use-settings-for-your-private-repository)」を参照してください。
{% endif %}

When {% data variables.product.product_name %} identifies a vulnerable dependency, we generate a {% data variables.product.prodname_dependabot %} alert and display it {% ifversion fpt or ghec or ghes > 3.0 %} on the Security tab for the repository and{% endif %} in the repository's dependency graph. The alert includes {% ifversion fpt or ghec or ghes > 3.0 %}a link to the affected file in the project, and {% endif %}information about a fixed version. {% data variables.product.product_name %} may also notify the maintainers of affected repositories about the new alert according to their notification preferences. 詳しい情報については、「[脆弱性のある依存関係に対する通知を設定する](/code-security/supply-chain-security/configuring-notifications-for-vulnerable-dependencies)」を参照してください。

{% ifversion fpt or ghec %}
{% data variables.product.prodname_dependabot_security_updates %} が有効になっているリポジトリの場合、アラートには、マニフェストまたはロックファイルを脆弱性を解決する最小バージョンに更新するためのPull Requestへのリンクも含まれる場合があります。 詳しい情報については、「[{% data variables.product.prodname_dependabot_security_updates %} について](/github/managing-security-vulnerabilities/about-dependabot-security-updates)」を参照してください。
{% endif %}

{% warning %}

**注釈**: {% data variables.product.product_name %} のセキュリティの機能は、すべての脆弱性を捕捉するものではありません。 当社は常に脆弱性データベースを更新し、最新の情報でアラートを生成するよう努力していますが、一定の期間内にすべてをの問題を把握したり、既知の脆弱性について通知したりすることはできません。 これらの機能は、それぞれの依存関係の潜在的な脆弱性やその他の問題に関する人によるレビューを置き換えるものではなく、必要な場合にはセキュリティサービスによるコンサルティングや、総合的な脆弱性レビューを行うことをおすすめします。

{% endwarning %}

## {% data variables.product.prodname_dependabot %}アラートへのアクセス

{% ifversion fpt or ghec %}リポジトリのセキュリティタブ、もしくは{% endif %}リポジトリの依存関係グラフにおいて、特定のプロジェクトに影響するすべてのアラートを見ることができます。 詳細については、「[リポジトリ内の脆弱な依存関係を表示・更新する](/github/managing-security-vulnerabilities/viewing-and-updating-vulnerable-dependencies-in-your-repository)」を参照してください。

デフォルトでは、新しい{% data variables.product.prodname_dependabot_alerts %}に関して影響を受けるリポジトリに管理権限を持っている人に通知を行います。 {% ifversion fpt or ghec %}{% data variables.product.product_name %}は、いかなるリポジトリについても特定された脆弱性を公開することはありません。 {% data variables.product.prodname_dependabot_alerts %} を、自分が所有または管理者権限を持っているリポジトリで作業している追加のユーザや Team に表示することもできます。 詳しい情報については「[リポジトリのセキュリティ及び分析の設定の管理](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts)」を参照してください。
{% endif %}

{% data reusables.notifications.vulnerable-dependency-notification-enable %}
{% data reusables.notifications.vulnerable-dependency-notification-delivery-method-customization2 %} 詳しい情報については「[脆弱性のある依存関係に対するアラートの設定](/code-security/supply-chain-security/configuring-notifications-for-vulnerable-dependencies)」を参照してください。

{% data variables.product.prodname_advisory_database %}内の特定の脆弱性に対応するすべての{% data variables.product.prodname_dependabot_alerts %}を見ることもできます。 {% data reusables.security-advisory.link-browsing-advisory-db %}

{% ifversion fpt or ghec %}
## 参考リンク

- 「[{% data variables.product.prodname_dependabot_security_updates %} について](/github/managing-security-vulnerabilities/about-dependabot-security-updates)」
- [リポジトリ内の脆弱な依存関係を表示・更新する](/articles/viewing-and-updating-vulnerable-dependencies-in-your-repository)
- [{% data variables.product.prodname_dotcom %} によるデータの利用方法と保護方法を理解する](/categories/understanding-how-github-uses-and-protects-your-data){% endif %}
