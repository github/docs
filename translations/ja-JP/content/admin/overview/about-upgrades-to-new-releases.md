---
title: 新しいリリースへのアップグレードについて
shortTitle: About upgrades
intro: '{% ifversion ghae %}{% data variables.product.product_name %} の Enterprise は、{% data variables.product.company_short %} によって定期的に最新の機能とバグ修正プログラムで更新されます。{% else %}Enterprise を新しくリリースされたバージョンにアップグレードすることで、{% data variables.product.product_name %} の新機能とバグ修正プログラムを利用できます。{% endif %}'
versions:
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Enterprise
  - Upgrades
ms.openlocfilehash: b3a2d340ef73ffe92f2117caf38a84e76ba0c8d1
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108851'
---
{% data reusables.enterprise.constantly-improving %}{% ifversion ghae %}{% data variables.product.prodname_ghe_managed %} はフルマネージドサービスであるため、{% data variables.product.company_short %} が Enterprise のアップグレードプロセスを完了します。{% endif %}

通常、機能リリースは四半期ごとに行われ、新機能と機能のアップグレードが含まれます。 {% ifversion ghae %}{% data variables.product.company_short %} は、エンタープライズを最新の機能リリースにアップグレードします。 Enterprise で予定されているダウンタイムについては、事前に通知されます。{% endif %}

{% ifversion ghes %}

{% data variables.product.prodname_ghe_server %} 3.0 以降、すべての機能リリースは少なくとも 1 つのリリース候補から始まります。 リリース候補は、完全な機能一式を備えた機能リリースとして提案されています。 リリース候補には、実際に {% data variables.product.product_name %} を使用している顧客からのフィードバックを通じてのみ見つけることができるバグまたは問題がある可能性があります。 

リリース候補が利用可能になり次第、リリース候補をテストすることで、最新の機能に早期アクセスできます。 サポートされているバージョンからリリース候補にアップグレードでき、リリース時にリリース候補からそれ以降のバージョンにアップグレードできます。 リリースが一般に利用可能になり次第、リリース候補を実行している環境をアップグレードする必要があります。 詳細については、「[アップグレード要件](/admin/enterprise-management/upgrade-requirements)」を参照してください。

リリース候補は、テスト環境またはステージング環境に展開する必要があります。 リリース候補をテストした際は、サポートに連絡してフィードバックをご提供ください。 詳細については、[{% data variables.contact.github_support %} の使用](/admin/enterprise-support)に関するページを参照してください。

フィードバックを活用して、バグ修正やその他の必要な変更を適用し、安定した本番リリースを作成します。 新しいリリース候補ごとに、以前のバージョンで見つかった問題のバグ修正が追加されます。 リリースが広く普及可能になったら、{% data variables.product.company_short %} は安定した本番リリースを公開します。

{% endif %}

{% warning %}

**警告**: 新しい機能リリースにアップグレードすると、数時間のダウンタイムが発生し、その間、どのユーザーもエンタープライズを使用できなくなります。 Enterprise 設定または REST API を使用して、グローバルアナウンスバナーを公開することにより、ダウンタイムについてユーザに通知できます。 詳細については、「[インスタンス上でのユーザメッセージをカスタマイズする](/admin/user-management/customizing-user-messages-on-your-instance#creating-a-global-announcement-banner)」と「[{% data variables.product.prodname_enterprise %} 管理](/rest/reference/enterprise-admin#announcements)」を参照してください。

{% endwarning %}

{% ifversion ghes %}

パッチ リリースは、ホットパッチとバグ修正のみで構成されており、より頻繁に発生します。 パッチ リリースは通常、最初のリリース時に利用可能になっています。リリース候補はありません。 パッチ リリースへのアップグレードには、通常 5 分未満のダウンタイムが発生します。

エンタープライズを新しいリリースにアップグレードするには、「[リリース ノート](/enterprise-server/admin/release-notes)」と「[{% data variables.product.prodname_ghe_server %} のアップグレード](/admin/enterprise-management/upgrading-github-enterprise-server)」を参照してください。 機能リリースは 2 リリースまで遅れている分にはアップグレードできるため、[{% data variables.enterprise.upgrade_assistant %}](https://support.github.com/enterprise/server-upgrade) を利用し、現在のリリース バージョンからのアップグレード パスを見つけてください。

{% endif %}

## 参考資料

- `github/roadmap` リポジトリ内の [ {% data variables.product.prodname_roadmap %} ]( {% data variables.product.prodname_roadmap_link %} ) {% ifversion ghae %}
- [ {% data variables.product.prodname_ghe_managed %} のリリースノート](/admin/release-notes) {% endif %}
