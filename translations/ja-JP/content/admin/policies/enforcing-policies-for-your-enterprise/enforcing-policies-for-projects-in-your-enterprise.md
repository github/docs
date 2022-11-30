---
title: エンタープライズ内でプロジェクトにポリシーを適用する
intro: 'エンタープライズの Organization 内で{% data variables.projects.projects_v2_and_v1 %}にポリシーを適用したり、各 Organization でポリシーの設定を許可することができます。'
permissions: Enterprise owners can enforce policies for projects in an enterprise.
redirect_from:
  - /articles/enforcing-project-board-settings-for-organizations-in-your-business-account
  - /articles/enforcing-project-board-policies-for-organizations-in-your-enterprise-account
  - /articles/enforcing-project-board-policies-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise-account/enforcing-project-board-policies-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/enforcing-project-board-policies-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/setting-policies-for-organizations-in-your-enterprise-account/enforcing-project-board-policies-in-your-enterprise-account
  - /admin/policies/enforcing-policies-for-your-enterprise/enforcing-project-board-policies-in-your-enterprise
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
ms.openlocfilehash: 2bb72b21094fadea8f584eb4749ed0cea69619ee
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108797'
---
## エンタープライズ内のプロジェクトのポリシーについて

エンタープライズ メンバーが{% data variables.projects.projects_v2_and_v1 %}を管理する方法を制御するポリシーを適用したり、Organization の所有者が Organization レベルで{% data variables.projects.projects_v2_and_v1 %}のポリシーを管理することを許可できます。{% ifversion project-visibility-policy %}

一部のポリシーは、新しいエクスペリエンスである{% data variables.product.prodname_projects_v2 %}と以前のエクスペリエンスである{% data variables.product.prodname_projects_v1 %} の両方に適用されますが、一部は{% data variables.product.prodname_projects_v1 %} にのみ適用されます。 各エクスペリエンスについて詳しくは、「[{% data variables.product.prodname_projects_v2 %}について](/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects)」と「[{% data variables.product.prodname_projects_v1 %}について](/issues/organizing-your-work-with-project-boards/managing-project-boards/about-project-boards)」を参照してください。
{% else %}詳しくは、[プロジェクト ボード](/issues/organizing-your-work-with-project-boards/managing-project-boards/about-project-boards)に関する説明を参照してください。{% endif %}

## Organization 全体のプロジェクトにポリシーを施行する

自分の企業で所有しているすべての Organization にわたって、Organization 全体のプロジェクト ボードを有効または無効にしたり、オーナーに Organization レベルで設定を管理させたりすることができます。

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.projects-tab %}
4. [Organization projects] で、設定変更についての情報を読みます。 {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
5. [Organization projects] で、ドロップダウンメニューを使用してポリシーを選択します。
  ![Organization プロジェクト ボード ポリシー オプションのドロップダウン メニュー](/assets/images/help/business-accounts/organization-projects-policy-drop-down.png)

{% ifversion project-visibility-policy %}
## プロジェクトの可視性の変更に関するポリシーを施行する

エンタープライズが所有するすべての Organization で、プロジェクトに対する管理者アクセスを持つユーザーがプロジェクトの可視性を変更できるようにしたり、所有者が Organization レベルで設定を管理できるようにすることができます。

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.projects-tab %}
1. [プロジェクトの可視性を変更する権限] に下で、設定の変更についての情報を確認してください。 {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
1. ドロップダウン メニューを選択し、ポリシーをクリックします。

   ![ポリシーを構成するためのドロップダウン メニューのスクリーンショット](/assets/images/help/business-accounts/project-visibility-change-drop-down.png) {% endif %}

{% ifversion projects-v1 %}
## {% data variables.product.prodname_projects_v1 %} にポリシーを施行する

一部のポリシーは、{% data variables.product.prodname_projects_v1 %} にしか適用されません。

### リポジトリのプロジェクトにポリシーを施行する

自分のエンタープライズで所有しているすべての Organization にわたって、リポジトリレベルのプロジェクトを有効または無効にしたり、所有者に Organization レベルでの設定の管理を許可することができます。

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.projects-tab %}
4. Repository projects で、設定変更についての情報を確認します。 {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
5. [Repository projects] で、ドロップダウンメニューを使用してポリシーを選択します。

   ![リポジトリのプロジェクト ボード ポリシー オプションのドロップダウン メニュー](/assets/images/help/business-accounts/repository-projects-policy-drop-down.png) {% endif %}
