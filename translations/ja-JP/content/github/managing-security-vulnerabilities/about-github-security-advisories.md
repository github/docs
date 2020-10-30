---
title: GitHub セキュリティアドバイザリについて
intro: '{% data variables.product.prodname_security_advisories %} を使用して、リポジトリにおけるセキュリティの脆弱性に関する情報を非公開で議論、修正、公開できます。'
redirect_from:
  - /articles/about-maintainer-security-advisories
  - /github/managing-security-vulnerabilities/about-maintainer-security-advisories
versions:
  free-pro-team: '*'
---

{% data reusables.repositories.security-advisory-admin-permissions %}

{% data reusables.security-advisory.security-researcher-cannot-create-advisory %}

### {% data variables.product.prodname_security_advisories %}について

{% data variables.product.prodname_security_advisories %} を使用すると、リポジトリメンテナがプロジェクトのセキュリティの脆弱性について非公開で議論し、修正できます。 リポジトリメンテナは、修正に協力した後、セキュリティアドバイザリを公開して、プロジェクトのコミュニティにセキュリティの脆弱性を公開します。 リポジトリメンテナは、セキュリティアドバイザリを公開することで、コミュニティがパッケージの依存関係を更新し、セキュリティの脆弱性の影響を調査しやすくなります。

{% data variables.product.prodname_security_advisories %} では、次のことができます。

1. セキュリティアドバイザリのドラフトを作成し、そのドラフトを用いて、プロジェクトに対する脆弱性の影響について非公開で議論します。
2. 一時的なプライベートフォークで、脆弱性を修正するため非公式でコラボレートします。
3. コミュニティに脆弱性を警告するため、セキュリティアドバイザリを公開します。

{% data reusables.repositories.security-advisories-republishing %}

To get started, see "[Creating a security advisory](/github/managing-security-vulnerabilities/creating-a-security-advisory)."

セキュリティアドバイザリに貢献した個人にクレジットを付与することができます。 詳しい情報については、「[セキュリティアドバイザリを編集する](/github/managing-security-vulnerabilities/editing-a-security-advisory#about-credits-for-security-advisories)」を参照してください。

{% data reusables.repositories.security-guidelines %}

{% data reusables.repositories.github-security-lab %}

### CVE 識別番号

{% data variables.product.prodname_security_advisories %} builds upon the foundation of the Common Vulnerabilities and Exposures (CVE) list. {% data variables.product.prodname_dotcom %} is a CVE Numbering Authority (CNA) and is authorized to assign CVE identification numbers. For more information, see "[About CVE](https://cve.mitre.org/about/index.html)" and "[CVE Numbering Authorities](https://cve.mitre.org/cve/cna.html)" on the CVE website.

When you create a security advisory for a public repository on {% data variables.product.prodname_dotcom %}, you have the option of providing an existing CVE identification number for the security vulnerability. {% data reusables.repositories.request-security-advisory-cve-id %}

セキュリティアドバイザリを公開し、{% data variables.product.prodname_dotcom %} が CVE 識別番号を脆弱性に割り当てたら、{% data variables.product.prodname_dotcom %} は CVE を MITER データベースに公開します。 詳しい情報については、「[セキュリティアドバイザリを公開する](/github/managing-security-vulnerabilities/publishing-a-security-advisory#requesting-a-cve-identification-number)」を参照してください。

### 公開されたセキュリティアドバイザリの {% data variables.product.prodname_dependabot_alerts %}

{% data reusables.repositories.github-reviews-security-advisories %}
