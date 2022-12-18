---
title: 自己ホストランナーの追加
intro: リポジトリ、Organization、Enterpriseにセルフホストランナーを追加できます。
redirect_from:
  - /github/automating-your-workflow-with-github-actions/adding-self-hosted-runners
  - /actions/automating-your-workflow-with-github-actions/adding-self-hosted-runners
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
shortTitle: Add self-hosted runners
ms.openlocfilehash: c58fbc6ac67fe1466458888eb0c55f58483dac6c
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109299'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

リポジトリ、Organization、Enterpriseにセルフホストランナーを追加できます。

Organization または Enterprise 管理者の場合は、Organization または Enterprise レベルでセルフホストランナーを追加することをお勧めします。 このアプローチにより、Organization または Enterprise 内の複数のリポジトリでランナーを使用できるようになり、ランナーを1か所で管理することもできます。

セルフホステッド ランナーでサポートされているオペレーティング システム、またはプロキシ サーバーでセルフホステッド ランナーを使用する方法については、「[セルフホステッド ランナーについて](/github/automating-your-workflow-with-github-actions/about-self-hosted-runners)」を参照してください。

{% ifversion not ghae %} {% warning %}

**警告:** {% data reusables.actions.self-hosted-runner-security %}

詳細については、[セルフホステッド ランナー](/github/automating-your-workflow-with-github-actions/about-self-hosted-runners#self-hosted-runner-security-with-public-repositories)に関する記述をご覧ください。

{% endwarning %} {% endif %}

{% ifversion fpt or ghec or ghes %}

セルフホステッド ランナーの数をスケーリングするように自動化を設定できます。 詳細については、「[セルフホスト ランナーによる自動スケーリング](/actions/hosting-your-own-runners/autoscaling-with-self-hosted-runners)」を参照してください。

{% endif %}

## 前提条件

{% data reusables.actions.self-hosted-runners-prerequisites %}

## リポジトリへのセルフホストランナーの追加

単一のリポジトリにセルフホストランナーを追加できます。 セルフホストランナーをユーザのリポジトリに追加するには、リポジトリのオーナーでなければなりません。 Organizationのリポジトリの場合は、Organizationのオーナーであるか、そのリポジトリの管理アクセスを持っていなければなりません。 REST API を使用してセルフホスト ランナーを追加する方法については、「[セルフホスト ランナー](/rest/reference/actions#self-hosted-runners)」を参照してください。

{% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %} {% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.settings-sidebar-actions-runners %}
1. **[新規フホスト ランナー]** をクリックします。
{% data reusables.actions.self-hosted-runner-configure %} {% elsif ghae or ghes < 3.4 %} {% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.settings-sidebar-actions-runners %}
1. {% ifversion ghes or ghae or ghec %}[ランナー]{% else %}[セルフホステッド ランナー]{% endif %} で **[ランナーの追加]** をクリックします。
{% data reusables.actions.self-hosted-runner-configure %} {% endif %} {% data reusables.actions.self-hosted-runner-check-installation-success %}

詳細については、「[セルフホスト ランナーの監視とトラブルシューティング](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners)」を参照してください。

## Organizationへのセルフホストランナーの追加

セルフホストランナーをOrganizationのレベルで追加し、Organization内の複数のリポジトリのジョブを処理するために使うことができます。 Organizationにセルフホストランナーを追加するには、Organizationのオーナーでなければなりません。 REST API を使用してセルフホスト ランナーを追加する方法については、「[セルフホスト ランナー](/rest/reference/actions#self-hosted-runners)」を参照してください。

{% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %} {% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.org_settings %} {% data reusables.organizations.settings-sidebar-actions-runners %} {% ifversion actions-hosted-runners %}1. **[新しいランナー]** をクリックし、 **[新しいセルフホステッド ランナー]** をクリックします。{% else %}1。 **[新しいランナー]** をクリックします。{% endif %} {% data reusables.actions.self-hosted-runner-configure %} {% elsif ghae or ghes < 3.4 %} {% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.org_settings %} {% data reusables.organizations.settings-sidebar-actions-runners %}
1. {% ifversion ghes or ghae %}[ランナー] で **[新規追加]** をクリックしてから、 **[新しいランナー]** をクリックします。{% endif %} {% data reusables.actions.self-hosted-runner-configure %} {% endif %} {% data reusables.actions.self-hosted-runner-check-installation-success %}

詳細については、「[セルフホスト ランナーの監視とトラブルシューティング](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners)」を参照してください。

{% data reusables.actions.self-hosted-runner-public-repo-access %}

## セルフホストランナーを Enterprise に追加する

{% ifversion fpt %}{% data variables.product.prodname_ghe_cloud %} を使用する場合、{% elsif ghec or ghes or ghae %}{% endif %}セルフホスト ランナーを Enterprise に追加できます。この場合、複数の組織に割り当てることができます。 Organization の管理者は、そのランナーを使用できるリポジトリを制御できます。 {% ifversion fpt %}詳細については、[{% data variables.product.prodname_ghe_cloud %} ドキュメント](/enterprise-cloud@latest/actions/hosting-your-own-runners/adding-self-hosted-runners#adding-a-self-hosted-runner-to-an-enterprise)を参照してください。{% endif %}

{% ifversion ghec or ghes or ghae %} 新しいランナーが既定のグループに割り当てられます。 ランナーを登録した後、ランナーのグループを変更できます。 詳細については、[セルフホスト ランナーへのアクセスの管理](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#moving-a-self-hosted-runner-to-a-group)に関するページを参照してください。

{% ifversion ghec or ghes > 3.3 or ghae > 3.3 %}

セルフホスト ランナーを Enterprise に追加するには、Enterprise のオーナーである必要があります。 REST API を使用してセルフホスト ランナーを追加する方法については、[{% data variables.product.prodname_actions %} REST API](/rest/reference/actions#self-hosted-runners) の Enterprise エンドポイントを参照してください。

{% endif %}

{% data reusables.actions.self-hosted-runner-add-to-enterprise %}

{% data reusables.actions.self-hosted-runner-check-installation-success %}

詳細については、「[セルフホスト ランナーの監視とトラブルシューティング](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners)」を参照してください。

{% data reusables.actions.self-hosted-runner-public-repo-access %}

### Enterprise ランナーをリポジトリで利用可能にする

デフォルトでは、Enterprise の「デフォルト」のセルフホストランナーグループのランナーは、Enterprise 内のすべての Organization で使用できますが、各 Organization のすべてのリポジトリで使用できるわけではありません。

Enterprise レベルのセルフホストランナーグループを Organization リポジトリで使用できるようにするには、ランナーグループの Organization の継承設定を変更して、Organization 内のリポジトリでランナーを使用できるようにする必要がある場合があります。

ランナー グループのアクセス設定の変更について詳しくは、「[グループを使用してセルフホスト ランナーへのアクセスを管理する](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#changing-the-access-policy-of-a-self-hosted-runner-group)」を参照してください。
{% endif %}

{% ifversion ghec or ghes or ghae %}

## 参考資料

- 「[Enterprise 向けセルフホスト ランナーの概要](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-self-hosted-runners-for-your-enterprise)」

{% endif %}
