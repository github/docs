---
title: エンタープライズでの依存関係分析情報のポリシーの適用
intro: Enterprise の Organization 内で依存関係の分析情報にポリシーを適用することも、各 Organization でポリシーを設定することもできます。
permissions: Enterprise owners can enforce policies for dependency insights in an enterprise.
redirect_from:
  - /articles/enforcing-a-policy-on-dependency-insights
  - /articles/enforcing-a-policy-on-dependency-insights-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise-account/enforcing-a-policy-on-dependency-insights-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/enforcing-a-policy-on-dependency-insights-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/setting-policies-for-organizations-in-your-enterprise-account/enforcing-a-policy-on-dependency-insights-in-your-enterprise-account
versions:
  ghec: '*'
type: how_to
topics:
  - Dependencies
  - Enterprise
  - Organizations
  - Policies
shortTitle: Policies for dependency insights
ms.openlocfilehash: 6862a5d1210eda7d9c14d77eabf21e7a9a5a25b4
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '145112565'
---
## エンタープライズでの依存関係分析情報のポリシーについて

依存関係の分析情報には、企業の組織内のリポジトリが依存しているすべてのパッケージが表示されます。 依存関係の分析情報には、セキュリティ アドバイザリとライセンスに関する集計情報が含まれます。 詳細については、「[Organization のインサイトを表示する](/organizations/collaborating-with-groups-in-organizations/viewing-insights-for-your-organization)」を参照してください。

## 依存関係の分析情報を表示するためのポリシーの適用

企業が所有するすべての組織で、組織のメンバーが依存関係の分析情報を表示できるかどうかを制御できます。 また、組織レベルで設定を管理することを所有者に許可できます。 詳細については、「[Organization の依存関係の分析情報の可視性を変更する](/organizations/managing-organization-settings/changing-the-visibility-of-your-organizations-dependency-insights)」を参照してください。

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %}
3. 左側のサイドバーで、 **[組織]** をクリックします。
  ![エンタープライズ サイドバーの [組織] タブ](/assets/images/help/business-accounts/settings-policies-org-tab.png)
4. [Organization projects] で、設定変更についての情報を確認します。 {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
5. [Organization policies] で、ドロップダウンメニューを使用してポリシーを選択します。
  ![Organization ポリシーオプションのドロップダウン メニュー](/assets/images/help/business-accounts/organization-policy-drop-down.png)
