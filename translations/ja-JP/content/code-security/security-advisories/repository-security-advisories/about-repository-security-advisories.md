---
title: リポジトリ セキュリティ アドバイザリについて
intro: リポジトリにおけるセキュリティの脆弱性について、非公開で議論、修正、および情報を共有するには、リポジトリ セキュリティ アドバイザリを使用できます。
shortTitle: About repository security advisories
redirect_from:
  - /articles/about-maintainer-security-advisories
  - /github/managing-security-vulnerabilities/about-maintainer-security-advisories
  - /github/managing-security-vulnerabilities/about-github-security-advisories
  - /code-security/security-advisories/about-github-security-advisories
  - /code-security/repository-security-advisories/about-github-security-advisories-for-repositories
versions:
  fpt: '*'
  ghec: '*'
type: overview
topics:
  - Security advisories
  - Vulnerabilities
  - CVEs
ms.openlocfilehash: 562969ec29feda0901b79f8b6e2cb9cdb390ea56
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158822'
---
{% data reusables.repositories.security-advisory-admin-permissions %}

{% data reusables.security-advisory.security-researcher-cannot-create-advisory %}

## リポジトリ セキュリティ アドバイザリについて

{% data reusables.security-advisory.disclosing-vulnerabilities %} 詳細については、「[セキュリティ脆弱性の調整された開示について](/code-security/security-advisories/guidance-on-reporting-and-writing/about-coordinated-disclosure-of-security-vulnerabilities)」を参照してください。

{% data reusables.security-advisory.security-advisory-overview %}

リポジトリ セキュリティ アドバイザリを使うと、次のことができます。

1. セキュリティアドバイザリのドラフトを作成し、そのドラフトを用いて、プロジェクトに対する脆弱性の影響について非公開で議論します。 詳細については、「[リポジトリ セキュリティ アドバイザリの作成](/code-security/repository-security-advisories/creating-a-repository-security-advisory)」を参照してください。
2. 一時的なプライベートフォークで、脆弱性を修正するため非公式でコラボレートします。
3. パッチがリリースされたら、脆弱性のコミュニティに警告するため、セキュリティアドバイザリを公開してください。 詳細については、「[リポジトリ セキュリティ アドバイザリの公開](/code-security/repository-security-advisories/publishing-a-repository-security-advisory)」を参照してください。

{% data reusables.repositories.security-advisories-republishing %}

セキュリティアドバイザリに貢献した個人にクレジットを付与することができます。 詳細については、「[リポジトリ セキュリティ アドバイザリの編集](/code-security/repository-security-advisories/editing-a-repository-security-advisory#about-credits-for-security-advisories)」を参照してください。

{% data reusables.repositories.security-guidelines %}

セキュリティアドバイザリをリポジトリ中で作成した場合、そのセキュリティアドバイザリはリポジトリに残ります。 依存関係グラフによってサポートされる任意のエコシステムのセキュリティ アドバイザリを、[github.com/advisories](https://github.com/advisories) の {% data variables.product.prodname_advisory_database %} に公開しています。 {% data variables.product.prodname_advisory_database %} に公開されているアドバイザリに、だれでも変更を送信することができます。 詳細については、「[{% data variables.product.prodname_advisory_database %} のセキュリティ アドバイザリの編集](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/editing-security-advisories-in-the-github-advisory-database)」を参照してください。

特にnpmに対するものであるセキュリティアドバイザリについては、npmセキュリティアドバイザリにも公開します。 詳細については、[npmjs.com/advisories](https://www.npmjs.com/advisories) を確認してください。

{% data reusables.repositories.github-security-lab %}

## CVE 識別番号

{% data variables.product.prodname_security_advisories %} は、共通脆弱性識別子(CVE) リストに基づいています。 {% data variables.product.prodname_dotcom %}上のセキュリティアドバイザリフォームは、CVEの記述フォーマットにマッチする標準化されたフォームです。 

{% data variables.product.prodname_dotcom %} は CVE Numbering Authority (CNA) であり、CVE 識別番号を割り当てる権限があります。 詳細については、CVE の Web サイトで、「[About CVE](https://www.cve.org/About/Overview)」 (CVE の概要)、および「[CVE Numbering Authorities](https://www.cve.org/ProgramOrganization/CNAs)」 (CVE の番号付け機関) を参照してください。

{% data variables.product.prodname_dotcom %} でパブリックリポジトリのセキュリティアドバイザリを作成する場合、セキュリティの脆弱性に対する既存の CVE 識別番号を提供するオプションがあります。 {% data reusables.repositories.request-security-advisory-cve-id %}

セキュリティアドバイザリを公開し、{% data variables.product.prodname_dotcom %} が CVE 識別番号を脆弱性に割り当てたら、{% data variables.product.prodname_dotcom %} は CVE を MITER データベースに公開します。
詳細については、「[リポジトリ セキュリティ アドバイザリの公開](/code-security/repository-security-advisories/publishing-a-repository-security-advisory)」を参照してください。

## 公開されたセキュリティアドバイザリの {% data variables.product.prodname_dependabot_alerts %}

{% data reusables.repositories.github-reviews-security-advisories %}
