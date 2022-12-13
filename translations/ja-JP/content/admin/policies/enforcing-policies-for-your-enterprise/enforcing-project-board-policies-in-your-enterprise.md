---
title: 企業内でプロジェクト ボード ポリシーを適用する
intro: Enterprise の Organization 内のプロジェクトにポリシーを適用することも、各 Organization でポリシーを設定することもできます。
permissions: Enterprise owners can enforce policies for project boards in an enterprise.
redirect_from:
- /articles/enforcing-project-board-settings-for-organizations-in-your-business-account
- /articles/enforcing-project-board-policies-for-organizations-in-your-enterprise-account
- /articles/enforcing-project-board-policies-in-your-enterprise-account
- /github/setting-up-and-managing-your-enterprise-account/enforcing-project-board-policies-in-your-enterprise-account
- /github/setting-up-and-managing-your-enterprise/enforcing-project-board-policies-in-your-enterprise-account
- /github/setting-up-and-managing-your-enterprise/setting-policies-for-organizations-in-your-enterprise-account/enforcing-project-board-policies-in-your-enterprise-account
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: how_to
topics:
- Enterprise
- Policies
- Projects
shortTitle: Project board policies
ms.openlocfilehash: 5be8c2fd41b456a24b286cd1a4ab3ef493abf278
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "145116381"
---
## 企業内のプロジェクト ボードのポリシーについて

ポリシーを適用して、{% data variables.product.product_name %} の企業のメンバーがプロジェクト ボードを管理する方法を制御できます。 また、Organization のオーナーがプロジェクト ボードのポリシーを管理できるようにすることもできます。 詳細については、「[プロジェクト ボードについて](/issues/organizing-your-work-with-project-boards/managing-project-boards/about-project-boards)」を参照してください。

## Organization 全体のプロジェクトボードでポリシーを施行する

自分の企業で所有しているすべての Organization にわたって、Organization 全体のプロジェクト ボードを有効または無効にしたり、オーナーに Organization レベルで設定を管理させたりすることができます。

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.projects-tab %}
4. [Organization projects] で、設定変更についての情報を読みます。 {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
5. [Organization projects] で、ドロップダウンメニューを使用してポリシーを選択します。
  ![Organization プロジェクト ボード ポリシー オプションのドロップダウン メニュー](/assets/images/help/business-accounts/organization-projects-policy-drop-down.png)

## リポジトリのプロジェクトボードでのポリシーを施行する

自分の企業で所有しているすべての Organization にわたって、リポジトリ レベルのプロジェクト ボードを有効または無効にしたり、オーナーに Organization レベルで設定を管理させたりすることができます。

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.projects-tab %}
4. Repository projects で、設定変更についての情報を確認します。 {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
5. [Repository projects] で、ドロップダウンメニューを使用してポリシーを選択します。
  ![リポジトリのプロジェクト ボード ポリシー オプションのドロップダウン メニュー](/assets/images/help/business-accounts/repository-projects-policy-drop-down.png)
