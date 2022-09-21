---
title: ワークフロー、シークレット、ランナーを Organization と共有する
shortTitle: Sharing workflows with your organization
intro: スターター ワークフロー、シークレット、およびセルフホストランナーを共有することで、Organization 機能を使用して Team とコラボレーションする方法を学びます。
redirect_from:
  - /actions/learn-github-actions/sharing-workflows-with-your-organization
  - /actions/learn-github-actions/sharing-workflows-secrets-and-runners-with-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
ms.openlocfilehash: bf80624fe1118d424a57f7c22efab6368c914819
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '147884262'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 概要

ワークフローやその他の {% data variables.product.prodname_actions %} 機能を Team と共有する必要がある場合は、{% data variables.product.prodname_dotcom %} Organization 内でのコラボレーションを検討します。 Organization を使用すると、シークレット、成果物、およびセルフホストランナーを一元的に保存および管理できます。 `.github` リポジトリでスターターワークフローを作成し、Organization 内の他のユーザーと共有することもできます。

## {% ifversion internal-actions %}アクションと{% endif %}ワークフローの共有

{% ifversion internal-actions %} 個々のアクションとワークフロー全体の両方を、アクションまたはワークフローを公開するかどうかにかかわらず、Organization と共有できます。 ワークフローファイルでアクションとワークフローを参照することで、アクションとワークフローを正確に再利用できます。また、新しいワークフローのテンプレートを提供するスターターワークフローを作成できます。
{% else %} Organization は、ワークフローを正確に再利用するか、新しいワークフローのテンプレートを提供するスターターワークフローを作成することでワークフローを共有できます。
{% endif %}

{% ifversion internal-actions %}
### 企業とアクションを共有する

{% data reusables.actions.internal-actions-summary %} {% endif %}

{% ifversion fpt or ghes > 3.3 or ghae-issue-4757 or ghec %}
### ワークフローの再利用

{% data reusables.actions.reusable-workflows %} {% endif %}

### スターターワークフローの使用

{% data reusables.actions.workflow-organization-templates %} 詳しくは、「[Organization のスターターワークフローの作成](/actions/using-workflows/creating-starter-workflows-for-your-organization)」を参照してください。

## Organization 内でシークレットを共有する

Organization 内でシークレットを一元管理し、選択したリポジトリで使用できるようにすることができます。 これは、1 つの場所でシークレットを更新し、その変更をシークレットを使用するすべてのリポジトリワークフローに適用できるということを示します。

Organizationでシークレットを作成する場合、ポリシーを使用して、そのシークレットにアクセスできるリポジトリを制限できます。 たとえば、すべてのリポジトリにアクセスを許可したり、プライベート リポジトリまたは指定したリポジトリ のリストのみにアクセスを制限したりできます。

{% data reusables.actions.permissions-statement-secrets-organization %}

{% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.org_settings %} {% data reusables.actions.sidebar-secret %}
1. **[新しいシークレット]** をクリックします。
1. **[名前]** 入力ボックスにシークレットの名前を入力します。
1. シークレットの **[値]** を入力します。
1. **[リポジトリアクセス]** ドロップダウンリストから、アクセスポリシーを選びます。
1. **[シークレットの追加]** をクリックします。

## Organization 内でセルフホストランナーを共有する

Organization の管理者は、セルフホストランナーをグループに追加してから、グループにアクセスできるリポジトリを制御するポリシーを作成できます。

詳細については、「[グループを使用してセルフホスト ランナーへのアクセスを管理する](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups)」を参照してください。


## 次の手順

{% data variables.product.prodname_actions %} の学習を続けるなら、「[組織のスターター ワークフローの作成](/actions/using-workflows/creating-starter-workflows-for-your-organization)」を参照してください。
