---
title: Organization の基本レベルの権限の設定
intro: Organization が所有しているリポジトリに対して、基本レベルの権限を設定できます。
permissions: Organization owners can set base permissions for an organization.
redirect_from:
- /github/setting-up-and-managing-organizations-and-teams/setting-base-permissions-for-an-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Organizations
- Teams
shortTitle: Set base permissions
ms.openlocfilehash: 734ced023e4a1043634650ff3e4305727397095c
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "146179928"
---
## Organization の基本レベルの権限について

Organization のリポジトリにアクセスするとき Organization の全メンバーに適用される基本レベルの権限を設定できます。 基本レベルの権限は、外部のコラボレーターには適用されません。

{% ifversion fpt or ghec %}既定では、Organization のメンバーには、Organization のリポジトリに対する **読み取り** アクセス許可が付与されます。{% endif %}

Organizationのリポジトリに対する管理者アクセスがあるユーザが、リポジトリに対してそれより高いレベルのアクセスを付与すると、基本レベルのアクセスは、付与された高いアクセスによってオーバーライドされます。

{% ifversion custom-repository-roles %} 組織の基本アクセス許可より低いアクセス権を持つ継承されたロールでカスタム リポジトリ ロールを作成した場合、そのロールに割り当てられたメンバーは、継承されたロールではなく組織の基本アクセス許可が既定値になります。 詳細については、「[Organization のカスタム リポジトリ ロールの管理](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization)」を参照してください。
{% endif %}

## 基本レベルの権限の設定

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.member-privileges %}
5. [Base permissions] で、ドロップダウンを使用して新しい基本レベルの権限を選択します。
  ![[基本レベルの権限] ドロップダウンから新しい権限レベルを選択する](/assets/images/help/organizations/base-permissions-drop-down.png)
6. 変更を確認します。 確認するには、 **[既定のアクセス許可を PERMISSION に変更]** をクリックします。
  ![基本レベルの権限の変更を確認して確定する](/assets/images/help/organizations/base-permissions-confirm.png)

## 参考資料

- 「[Organization のリポジトリ ロール](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)」
- 「[外部コラボレーターを Organization のリポジトリに追加する](/organizations/managing-access-to-your-organizations-repositories/adding-outside-collaborators-to-repositories-in-your-organization)」
