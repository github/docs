---
title: GitHub セキュリティアドバイザリについて
intro: '{% data variables.product.prodname_security_advisories %} を使用して、リポジトリにおけるセキュリティの脆弱性に関する情報を非公開で議論、修正、公開できます。'
redirect_from:
  - /articles/about-maintainer-security-advisories
  - /github/managing-security-vulnerabilities/about-maintainer-security-advisories
  - /github/managing-security-vulnerabilities/about-github-security-advisories
versions:
  fpt: '*'
  ghec: '*'
type: overview
topics:
  - Security advisories
  - Vulnerabilities
  - CVEs
shortTitle: セキュリティアドバイザリ
---

{% data reusables.repositories.security-advisory-admin-permissions %}

{% data reusables.security-advisory.security-researcher-cannot-create-advisory %}

## {% data variables.product.prodname_security_advisories %} について

{% data reusables.security-advisory.disclosing-vulnerabilities %} 詳しい情報については「[セキュリティ脆弱性の調整された開示について](/code-security/security-advisories/about-coordinated-disclosure-of-security-vulnerabilities)」を参照してください。

{% data reusables.security-advisory.security-advisory-overview %}

{% data variables.product.prodname_security_advisories %} では、次のことができます。

1. セキュリティアドバイザリのドラフトを作成し、そのドラフトを用いて、プロジェクトに対する脆弱性の影響について非公開で議論します。 詳しい情報については、「[セキュリティアドバイザリを作成する](/github/managing-security-vulnerabilities/creating-a-security-advisory)」を参照してください。
2. 一時的なプライベートフォークで、脆弱性を修正するため非公式でコラボレートします。
3. パッチがリリースされたら、脆弱性のコミュニティに警告するため、セキュリティアドバイザリを公開してください。 詳しい情報については、「[セキュリティアドバイザリを公開する](/github/managing-security-vulnerabilities/publishing-a-security-advisory)」を参照してください。

{% data reusables.repositories.security-advisories-republishing %}

セキュリティアドバイザリに貢献した個人にクレジットを付与することができます。 詳しい情報については、「[セキュリティアドバイザリを編集する](/github/managing-security-vulnerabilities/editing-a-security-advisory#about-credits-for-security-advisories)」を参照してください。

{% data reusables.repositories.security-guidelines %}

セキュリティアドバイザリをリポジトリ中で作成した場合、そのセキュリティアドバイザリはリポジトリに残ります。 依存関係グラフでサポートされているあらゆるエコシステムに対するセキュリティアドバイザリは、[github.com/advisories](https://github.com/advisories)上の{% data variables.product.prodname_advisory_database %}に公開します。 特にnpmに対するものであるセキュリティアドバイザリについては、npmセキュリティアドバイザリにも公開します。 詳しい情報については[npmjs.com/advisories](https://www.npmjs.com/advisories)を参照してください。

{% data reusables.repositories.github-security-lab %}

## CVE 識別番号

{% data variables.product.prodname_security_advisories %} は、共通脆弱性識別子(CVE) リストに基づいています。 {% data variables.product.prodname_dotcom %}上のセキュリティアドバイザリフォームは、CVEの記述フォーマットにマッチする標準化されたフォームです。

{% data variables.product.prodname_dotcom %} は CVE Numbering Authority (CNA) であり、CVE 識別番号を割り当てる権限があります。 詳細については、CVE Web サイトの「[CVE について](https://cve.mitre.org/about/index.html)」および「[CVE Numbering Authorities](https://cve.mitre.org/cve/cna.html)」を参照してください。

{% data variables.product.prodname_dotcom %} でパブリックリポジトリのセキュリティアドバイザリを作成する場合、セキュリティの脆弱性に対する既存の CVE 識別番号を提供するオプションがあります。 {% data reusables.repositories.request-security-advisory-cve-id %}

セキュリティアドバイザリを公開し、{% data variables.product.prodname_dotcom %} が CVE 識別番号を脆弱性に割り当てたら、{% data variables.product.prodname_dotcom %} は CVE を MITER データベースに公開します。 詳しい情報については、「[セキュリティアドバイザリを公開する](/github/managing-security-vulnerabilities/publishing-a-security-advisory#requesting-a-cve-identification-number)」を参照してください。

## 公開されたセキュリティアドバイザリの {% data variables.product.prodname_dependabot_alerts %}

{% data reusables.repositories.github-reviews-security-advisories %}
