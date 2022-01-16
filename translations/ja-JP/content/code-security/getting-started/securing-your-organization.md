---
title: Organizationの保護
intro: 'Organizationをセキュアに保つために、いくつもの{% data variables.product.prodname_dotcom %}の機能が利用できます。'
permissions: Organization owners can configure organization security settings.
versions:
  fpt: '*'
  ghes: '>=3.0'
  ghae: '*'
type: how_to
topics:
  - Organizations
  - Dependencies
  - Vulnerabilities
  - Advanced Security
shortTitle: Organizationの保護
---

## はじめに
このガイドは、Organizationでのセキュリティ機能の設定方法を紹介します。 Organizationのセキュリティの要件は固有のものであり、すべてのセキュリティの機能を有効化する必要はないかもしれません。 詳しい情報については「[{% data variables.product.prodname_dotcom %}のセキュリティ機能](/code-security/getting-started/github-security-features)」を参照してください。

セキュリティの機能の中には、{% data variables.product.prodname_advanced_security %}ライセンスを持っている{% ifversion fpt %}Organizationが所有するプライベートリポジトリとパブリックリポジトリでのみ{% else %}場合にのみ{% endif %}利用できるものがあります。 {% data reusables.advanced-security.more-info-ghas %}

## Organizationへのアクセス管理

権限レベルを使って、人々がOrganizationに対して行えるアクションを制御できます。 詳しい情報については、「[Organization の権限レベル](/organizations/managing-peoples-access-to-your-organization-with-roles/permission-levels-for-an-organization)」を参照してください。

{% ifversion fpt or ghes > 3.0 or ghae-next %}

## デフォルトのセキュリティポリシーの作成

独自のセキュリティポリシーを持たないOrganization内のパブリックリポジトリで表示される、デフォルトのセキュリティポリシーを作成できます。 詳しい情報については「[デフォルトのコミュニティ健全性ファイルを作成する](/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file)」を参照してください。

{% endif %}

{% ifversion fpt or ghes > 2.22 %}
## {% data variables.product.prodname_dependabot_alerts %}及び依存関係グラフの管理

デフォルトで、{% data variables.product.prodname_dotcom %}はパブリックリポジトリ内の脆弱性を検出し、{% data variables.product.prodname_dependabot_alerts %}及び依存関係グラフを生成します。 {% data variables.product.prodname_dependabot_alerts %}と依存関係グラフは、Organizationが所有するすべてのリポジトリで有効化あるいは無効化できます。

1. 自分のプロフィール写真をクリックし、続いて** Organizations**をクリックしてください。
2. Organizationの隣の** Settings（設定）**をクリックしてください。
3. **Security & analysis（セキュリティと分析）**をクリックしてください。
4. 管理したい機能の隣の**Enable all（すべてを有効化）**あるいは**Disable all（すべてを無効化**をクリックしてください。
5. あるいは**Automatically enable for new repositories（自動的に新しいリポジトリで有効化**を選択してください。

詳しい情報については「[脆弱な依存関係に対するアラートについて](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)」、「[リポジトリの依存関係の調査](/code-security/supply-chain-security/exploring-the-dependencies-of-a-repository#enabling-and-disabling-the-dependency-graph-for-a-private-repository)」、「[Organizationのセキュリティと分析設定の管理](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)」を参照してください。

{% endif %}

{% ifversion fpt or ghes > 3.1 %}

## 依存関係レビューの管理

依存関係レビューを使うと、Pull Requestがリポジトリにマージされる前に、Pull Request内での依存関係の変化を可視化できます。 依存関係レビューは、すべてのパブリックリポジトリと、依存関係グラフが有効化された{% data variables.product.prodname_advanced_security %}ライセンスを持つOrganizationが所有するリポジトリで利用できます。 詳しい情報については「[依存関係レビューについて](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review)」を参照してください。

{% endif %}

{% ifversion fpt %}
## {% data variables.product.prodname_dependabot_security_updates %}の管理

{% data variables.product.prodname_dependabot_alerts %}を使用するリポジトリでは、{% data variables.product.prodname_dependabot_security_updates %}を有効化して脆弱性が検出された際にセキュリティ更新でPull Requestを発行させることができます。 Organization全体で、すべてのリポジトリで{% data variables.product.prodname_dependabot_security_updates %}を有効化あるいは無効化することもできます。

1. 自分のプロフィール写真をクリックし、続いて** Organizations**をクリックしてください。
2. Organizationの隣の** Settings（設定）**をクリックしてください。
3. **Security & analysis（セキュリティと分析）**をクリックしてください。
4. {% data variables.product.prodname_dependabot_security_updates %}の隣の**Enable all（すべてを有効化）**あるいは**Disable all（すべてを無効化）**をクリックしてください。
5. あるいは**Automatically enable for new repositories（自動的に新しいリポジトリで有効化**を選択してください。

詳しい情報については「[{% data variables.product.prodname_dependabot_security_updates %}について](/code-security/supply-chain-security/about-dependabot-security-updates)」及び「[Organizationのセキュリティ及び分析設定の管理](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)」を参照してください。

## {% data variables.product.prodname_dependabot_version_updates %}の管理

{% data variables.product.prodname_dependabot %}を有効化して、依存関係を最新の状態に保つためのPull Requestを自動的に発行するようにできます。 詳しい情報については「[{% data variables.product.prodname_dependabot_version_updates %}について](/code-security/supply-chain-security/about-dependabot-version-updates)」を参照してください。

{% data variables.product.prodname_dependabot_version_updates %}を有効化するには、設定ファイルの*dependabot.yml*を作成しなければなりません。 詳しい情報については「[バージョンアップデートの有効化と無効化](/code-security/supply-chain-security/enabling-and-disabling-version-updates)」を参照してください。

{% endif %}

{% ifversion fpt or ghes > 2.22 or ghae %}
## {% data variables.product.prodname_GH_advanced_security %}の管理

Organizationが{% data variables.product.prodname_advanced_security %}のライセンスを持っているなら、{% data variables.product.prodname_advanced_security %}の機能を有効化あるいは無効化できます。

1. 自分のプロフィール写真をクリックし、続いて** Organizations**をクリックしてください。
2. Organizationの隣の** Settings（設定）**をクリックしてください。
3. **Security & analysis（セキュリティと分析）**をクリックしてください。
4. {% data variables.product.prodname_GH_advanced_security %}の隣の**Enable all（すべてを有効化）**あるいは**Disable all（すべてを無効化）**をクリックしてください。
5. あるいは**Automatically enable for new private repositories（自動的に新しいプライベートリポジトリで有効化**を選択してください。

詳しい情報については「[{% data variables.product.prodname_GH_advanced_security %}について](/github/getting-started-with-github/about-github-advanced-security)」及び「[Organizationのセキュリティ及び分析設定の管理](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)」を参照してください。

## {% data variables.product.prodname_secret_scanning %}の設定
{% data variables.product.prodname_secret_scanning_caps %}は、{% data variables.product.prodname_advanced_security %}のライセンスを{% ifversion fpt %}持つOrganizationが所有するプライベートリポジトリと、すべてのパブリックリポジトリで{% else %}持っていれば{% endif %}利用できます。

{% data variables.product.prodname_advanced_security %}が有効化されているOrganizationのすべてのリポジトリで、{% data variables.product.prodname_secret_scanning %}を有効化あるいは無効化できます。

1. 自分のプロフィール写真をクリックし、続いて** Organizations**をクリックしてください。
2. Organizationの隣の** Settings（設定）**をクリックしてください。
3. **Security & analysis（セキュリティと分析）**をクリックしてください。
4. {% data variables.product.prodname_secret_scanning_caps %}の隣の**Enable all（すべてを有効化）**あるいは**Disable all（すべてを無効化）**をクリックしてください（{% data variables.product.prodname_GH_advanced_security %}リポジトリのみ）。
5. あるいは**Automatically enable for private repositories added to {% data variables.product.prodname_advanced_security %}**を選択してください。

詳しい情報については「[Organizatonのためのセキュリティ及び分析設定の管理](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)」を参照してください。

{% endif %}

## 次のステップ
{% ifversion fpt or ghes > 3.1 or ghae-next %}You can view, filter, and sort security alerts for repositories owned by your organization in the security overview. For more information, see "[About the security overview](/code-security/security-overview/about-the-security-overview)."{% endif %}

セキュリティの機能からのアラートを表示及び管理して、コード中の依存関係と脆弱性に対処できます。 詳しい情報については{% ifversion fpt or ghes > 2.22 %}「[リポジトリ中の脆弱な依存関係の表示と更新](/code-security/supply-chain-security/viewing-and-updating-vulnerable-dependencies-in-your-repository)」、{% endif %}{% ifversion fpt %}「[依存関係の更新のためのPull Requestの管理](/code-security/supply-chain-security/managing-pull-requests-for-dependency-updates)」、{% endif %}「[リポジトリの{% data variables.product.prodname_code_scanning %}の管理](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository)」、「[{% data variables.product.prodname_secret_scanning %}からのアラートの管理](/code-security/secret-security/managing-alerts-from-secret-scanning)」を参照してください。

{% ifversion fpt %}セキュリティの脆弱性があるなら、セキュリティアドバイザリを作成して非公開で議論し、脆弱性を修正できます。 詳しい情報については「[{% data variables.product.prodname_security_advisories %}について](/code-security/security-advisories/about-github-security-advisories)」及び「[セキュリティアドバイザリの作成](/code-security/security-advisories/creating-a-security-advisory)」を参照してください。
{% endif %}
