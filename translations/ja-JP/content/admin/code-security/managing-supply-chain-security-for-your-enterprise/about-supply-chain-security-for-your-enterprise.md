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
ms.openlocfilehash: 7f1c658285e88065ad1a232fc13c9186be143119
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107198'
---
{% data variables.location.product_location %}の依存関係グラフを{% ifversion ghes %}有効にする{% elsif ghae %}使用する{% endif %}ことにより、ユーザーがプロジェクトの依存関係を識別できるようにすることができます。 詳しくは、「{% ifversion ghes %}[Enterprise の依存関係グラフを有効にする](/admin/code-security/managing-supply-chain-security-for-your-enterprise/enabling-the-dependency-graph-for-your-enterprise){% elsif ghae %}[依存関係グラフについて](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph){% endif %}」をご覧ください。

また、{% data variables.product.prodname_dependabot_alerts %}{% ifversion ghes %} と {% data variables.product.prodname_dependabot_updates %}{% endif %} を有効にすることで、{% data variables.location.product_location %}のユーザーがコードの依存関係の脆弱性を見つけて修正できるようにすることもできます。 詳細については、「[企業に対する {% data variables.product.prodname_dependabot %} の有効化](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)」を参照してください。

{% data variables.product.prodname_dependabot_alerts %} を有効にすると、{% data variables.location.product_location %}上の {% data variables.product.prodname_advisory_database %} からの脆弱性データを表示し、データを手動で同期することができます。 詳しくは、「[Enterprise の脆弱性データを表示する](/admin/code-security/managing-supply-chain-security-for-your-enterprise/viewing-the-vulnerability-data-for-your-enterprise)」をご覧ください。
