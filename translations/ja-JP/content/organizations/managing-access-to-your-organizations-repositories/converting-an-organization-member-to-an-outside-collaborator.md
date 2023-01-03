---
title: Organization メンバーを外部コラボレーターに変換する
intro: Organization の現在のメンバーが、コンサルタントや一時的な雇用者などで、特定のリポジトリへのアクセスのみが必要な場合は、そのメンバーを外部コラボレーターに変換できます。
permissions: Organization owners can convert an organization member to an outside collaborator.
redirect_from:
- /articles/converting-an-organization-member-to-an-outside-collaborator
- /github/setting-up-and-managing-organizations-and-teams/converting-an-organization-member-to-an-outside-collaborator
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Organizations
- Teams
shortTitle: Convert member to collaborator
ms.openlocfilehash: 4b9330559895ec96cb6c842d89dbe4e9a8773685
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "146754599"
---
## Organization メンバーから外部コラボレーターへの変換について

組織のメンバーを外部のコラボレーターに変換できます。 外部コラボレーターの詳細については、「[外部のコラボレータを Organization のリポジトリに追加する](/organizations/managing-access-to-your-organizations-repositories/adding-outside-collaborators-to-repositories-in-your-organization)」を参照してください。

{% ifversion fpt or ghec %}組織の所有者が企業の場合、組織のメンバーを外部のコラボレーターに{% elsif ghes or ghae %}変換すること{% endif %}は制限される可能性があります。 詳細については、{% data variables.product.prodname_ghe_cloud %} ドキュメントの「[企業でリポジトリ管理ポリシーを適用する]({% ifversion fpt %}/enterprise-cloud@latest{% endif %}/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-inviting-{% ifversion fpt or ghec %}outside-{% endif %}collaborators-to-repositories){% ifversion ghec or ghes or ghae %}」「{% elsif fpt %}」を参照してください。{% endif %}

{% data reusables.organizations.outside-collaborators-use-seats %} {% data reusables.organizations.outside_collaborator_forks %}

Organization のメンバーが外部コラボレーターに変換された後は、現在の Team メンバーシップによって許可されるリポジトリにしかアクセスできません。 Organization の明示的なメンバーではなくなり、以下のことができなくなります:

- チームの作成
- Organization の全メンバーおよび Team の表示
- 表示されている Team を @mention する
- チームメンテナになる

詳細については、「[Organization のロール](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)」を参照してください。

アクセスが期待通りであることを確実にするために、Organization メンバーの、リポジトリへのアクセスを確認することをおすすめします。 詳細については、「[Organization のリポジトリへの個人のアクセスを管理する](/articles/managing-an-individual-s-access-to-an-organization-repository)」を参照してください。

Organization のメンバーを外部コラボレーターに変換する際、Organization メンバーとしての権限は 3 か月保存されるので、この期間内に、そのユーザーを Organization に{% ifversion fpt or ghec %}再参加するよう招待{% else %}再追加{% endif %}すれば、メンバーとしての権限を回復できます。 詳細については、「[Oraganization の以前のメンバーを復帰させる](/articles/reinstating-a-former-member-of-your-organization)」を参照してください。

## Organization メンバーを外部コラボレーターに変換する

{% note %}

**注:** Organization 所有者{% ifversion not fpt %}または Enterprise 所有者{% endif %}が外部コラボレーターを追加する機能を制限している場合は、Organization メンバーを外部コラボレーターに変換できない場合があります。

{% endnote %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %}
4. 外部コラボレーターに変換したい人を選択します。
  ![2 人のメンバーが選択されたメンバー リスト](/assets/images/help/teams/list-of-members-selected-bulk.png)
5. メンバーのリストの上のドロップダウン メニューで、 **[外部コラボレーターに変換]** をクリックします。
  ![メンバーを外部コラボレーターに変換するオプションのあるドロップダウン メニュー](/assets/images/help/teams/user-bulk-management-options.png)
6. メンバーの外部コラボレーターへの変換に関する情報を読み、 **[外部コラボレーターに変換]** をクリックします。
  ![外部コラボレーターの権限に関する情報と [外部コラボレーターに変換] ボタン](/assets/images/help/teams/confirm-outside-collaborator-bulk.png)

## 参考資料

- 「[外部コラボレーターを Organization のリポジトリに追加する](/articles/adding-outside-collaborators-to-repositories-in-your-organization)」
- 「[外部コラボレーターを Organization リポジトリから削除する](/articles/removing-an-outside-collaborator-from-an-organization-repository)」
- 「[外部コラボレーターを Organization メンバーに変換する](/articles/converting-an-outside-collaborator-to-an-organization-member)」
