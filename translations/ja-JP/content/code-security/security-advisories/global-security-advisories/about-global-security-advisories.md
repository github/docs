---
title: グローバル セキュリティ アドバイザリについて
intro: 'グローバル セキュリティ データベースは {% data variables.product.prodname_advisory_database %} にあります。これには、オープン ソース界に影響がある CVE と {% data variables.product.company_short %} が発行したセキュリティ アドバイザリが含まれています。 どなたでもグローバル アドバイザリの改善に貢献できます。'
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Security advisories
  - Alerts
  - Vulnerabilities
  - CVEs
ms.openlocfilehash: d28de180b9fee592dcba89d03ca537d4ffd2d9eb
ms.sourcegitcommit: 27882d9b3f19979c817c25952a2fb4dc4c6f0a65
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/27/2022
ms.locfileid: '148114021'
---
## グローバル セキュリティ アドバイザリについて

{% ifversion fpt or ghec %}2 種類のアドバイザリがあります。グローバル セキュリティ アドバイザリとリポジトリ セキュリティ アドバイザリです。 リポジトリ セキュリティ アドバイザリの詳細については、「[リポジトリ セキュリティ アドバイザリについて](/code-security/security-advisories/repository-security-advisories/about-repository-security-advisories)」を参照してください。{% endif %}

グローバル セキュリティ アドバイザリは、2 つのカテゴリに分類されます。{% data variables.product.company_short %} でレビューされたアドバイザリとレビューされていないアドバイザリです。
- {% data variables.product.company_short %} でレビューされたアドバイザリは、Microsoft がサポートするエコシステム内のパッケージにマップされたセキュリティの脆弱性{% ifversion GH-advisory-db-supports-malware %}またはマルウェア{% endif %}です。
- レビューされていないアドバイザリは、National Vulnerability Database フィードから直接 {% data variables.product.prodname_advisory_database %} に自動的に公開されるセキュリティの脆弱性です。 

{% data variables.product.prodname_advisory_database %} の詳細については、「[{% data variables.product.prodname_advisory_database %} について](/code-security/security-advisories/global-security-advisories/about-the-github-advisory-database)」を参照してください。

{% data reusables.security-advisory.global-advisories %}

すべてのリポジトリ アドバイザリは、{% data variables.product.prodname_security %} キュレーション チームが確認し、グローバル アドバイザリとして検討されます。 依存関係グラフによってサポートされる任意のエコシステムのセキュリティ アドバイザリを、[github.com/advisories](https://github.com/advisories) の {% data variables.product.prodname_advisory_database %} に公開しています。

{% data variables.product.prodname_advisory_database %} の任意のアドバイザリにアクセスできます。 詳細については、「[GitHub Advisory Database のセキュリティ アドバイザリの閲覧](/code-security/security-advisories/global-security-advisories/browsing-security-advisories-in-the-github-advisory-database)」を参照してください。

{% data variables.product.prodname_advisory_database %} のアドバイザリに対する改善を提案することができます。 詳細については、「[{% data variables.product.prodname_advisory_database %} のセキュリティ アドバイザリの編集](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/editing-security-advisories-in-the-github-advisory-database)」を参照してください。
