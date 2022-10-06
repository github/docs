---
title: Enterprise のサプライ チェーンのセキュリティについて
intro: 開発者が自分のコードが依存している依存関係を理解し、更新するのに役立つ機能を有効にすることができます。
shortTitle: About supply chain security
permissions: ''
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - Security
  - Dependency graph
ms.openlocfilehash: f99085f6c484869623a81c7585216aca936929e1
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '145120838'
---
{% data variables.product.product_location %} の依存関係グラフを{% ifversion ghes %}有効にする{% elsif ghae %}使用する{% endif %}ことにより、ユーザーがプロジェクトの依存関係を識別できるようにすることができます。 詳しくは、「{% ifversion ghes %}[Enterprise の依存関係グラフを有効にする](/admin/code-security/managing-supply-chain-security-for-your-enterprise/enabling-the-dependency-graph-for-your-enterprise){% elsif ghae %}[依存関係グラフについて](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph){% endif %}」をご覧ください。

また、{% data variables.product.prodname_dependabot_alerts %}{% ifversion ghes > 3.2 %} と {% data variables.product.prodname_dependabot_updates %}{% endif %} を有効にすることで、{% data variables.product.product_location %} のユーザーがコード依存関係の脆弱性を見つけて修正できるようにすることもできます。 詳細については、「[企業に対する {% data variables.product.prodname_dependabot %} の有効化](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)」を参照してください。

{% data variables.product.prodname_dependabot_alerts %} を有効にすると、{% data variables.product.product_location %} 上の {% data variables.product.prodname_advisory_database %} から脆弱性のデータを表示し、データを手動で同期することができます。 詳しくは、「[Enterprise の脆弱性データを表示する](/admin/code-security/managing-supply-chain-security-for-your-enterprise/viewing-the-vulnerability-data-for-your-enterprise)」をご覧ください。
