---
title: OAuth アプリと GitHub アプリのアクセス要求を制限する
intro: 'Organization の所有者は、外部コラボレーターが {% data variables.product.prodname_oauth_apps %} と {% data variables.product.prodname_github_apps %} へのアクセスを Organization に要求できるようにするかどうかを選べます。'
versions:
  feature: limit-app-access-requests
permissions: Organization owners can limit who can make app access requests to the organization.
topics:
  - Organizations
  - GitHub Apps
  - OAuth Apps
shortTitle: Limit app access requests
ms.openlocfilehash: 6c991ecfbdac75f1bb3bb4fdb5ea3a0692f1d040
ms.sourcegitcommit: 30b0931723b704e219c736e0de7afe0fa799da29
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/30/2022
ms.locfileid: '148186436'
---
## 統合アクセス要求について

統合アクセス要求が有効になっている場合、外部コラボレーターは、Organization によってまだ承認されていない {% data variables.product.prodname_github_apps %} と {% data variables.product.prodname_oauth_apps %} へのアクセスを Organization に要求できます。 統合アクセス要求が無効になっている場合は、Organization のメンバーだけが、承認されていない {% data variables.product.prodname_github_apps %} と {% data variables.product.prodname_oauth_apps %} へのアクセスを Organization に要求できます。 外部コラボレーターは、要求している外部コラボレーターがアクセスできるのと同じリソースに事前承認済みの {% data variables.product.prodname_github_apps %} と {% data variables.product.prodname_oauth_apps %} がアクセスすることに同意できます。

既定では、統合アクセス要求は有効になっています。 Organization の外部コラボレーターが多い場合は、レビューする必要がある要求の数を減らすために、統合アクセス要求を無効にできます。 

## 統合アクセス要求を有効または無効にする

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.profile.org_member_privileges %}
1. [統合アクセス要求] で、 **[外部コラボレーターからの統合要求を許可する]** をオンまたはオフにして、 **[保存]** をクリックします。
    ![統合アクセス要求の設定のスクリーンショット](/assets/images/help/organizations/integration-access-requests.png)
