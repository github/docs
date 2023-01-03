---
title: 以前の外部のコラボレータの Organization へのアクセスを復帰させる
intro: Organization のリポジトリ、フォーク、設定に対する元外部のコラボレータのアクセス許可を元に戻すことができます。
redirect_from:
- /articles/reinstating-a-former-outside-collaborator-s-access-to-your-organization
- /articles/reinstating-a-former-outside-collaborators-access-to-your-organization
- /github/setting-up-and-managing-organizations-and-teams/reinstating-a-former-outside-collaborators-access-to-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Organizations
- Teams
shortTitle: Reinstate collaborator
ms.openlocfilehash: 88d986f922f1a66d652dba55f10142f7e493ffa2
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "146178904"
---
Organization のプライベートリポジトリへの外部のコラボレータのアクセスが削除されると、ユーザのアクセス権限と設定は 3 か月間保存されます。 その期間内にユーザを Organization へ再度{% ifversion fpt or ghec %}招待{% else %}追加{% endif %}した場合、そのユーザの権限をリストアできます。

{% data reusables.two_fa.send-invite-to-reinstate-user-before-2fa-is-enabled %}

以前の外部コラボレーターを復帰させると、次のことがリストアできます:
 - ユーザの Organization リポジトリへの以前のアクセス
 - Organization が所有しているリポジトリのあらゆるプライベートフォーク
 - Organization のチームでのメンバーシップ
 - Organization のリポジトリへの以前のアクセスと権限
 - Organization リポジトリでの Star
 - Organization での Issue 割り当て
 - リポジトリプラン (リポジトリのアクティビティを Watch するか Watch しないか無視するかについての通知設定)

{% tip %}

**ヒント**:

 - 外部コラボレーターの組織へのアクセスを復帰させることができるのは、組織の所有者だけです。{% ifversion prevent-org-admin-add-outside-collaborator %}エンタープライズの所有者は、外部コラボレーターのアクセスを復帰させる機能を、エンタープライズの所有者のみにさらに制限できます。{% endif %}詳細については、「[組織のロール](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)」を参照してください。
 - {% data variables.product.product_location %}に対するメンバー フローの復帰には、"メンバー" という用語を使用して外部コラボレーターの復帰を記述できますが、このユーザーを復帰させて以前の権限を保持する場合、以前の[外部コラボレーターのアクセス許可](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization#outside-collaborators)のみが付与されます。{% ifversion fpt or ghec %}
 - Organization がユーザ単位の有料プランである場合、新しいメンバーを招待して参加させる、または Organization の以前のメンバーを復帰させる前に、そのためのライセンスが用意されている必要があります。 詳細については、「[ユーザーごとの価格について](/articles/about-per-user-pricing)」を参照してください。{% endif %}

{% endtip %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %} {% data reusables.organizations.invite_member_from_people_tab %} {% data reusables.organizations.reinstate-user-type-username %} {% ifversion fpt or ghec %}
1. **[招待して復帰]** をクリックして組織の外部コラボレーターの以前の権限を復元することを選択するか、 **[招待して新規に開始]** をクリックして、以前の権限をクリアして新しいアクセス許可を設定することを選択します。

  {% warning %}

  **警告:** 外部コラボレーターを組織のメンバーにアップグレードする場合は、 **[招待して新規に開始]** を選択して、このユーザーの新しいロールを選択します。 ただし、[start fresh] を選択する場合、その個人のプライベートフォークは Organization のリポジトリから失われますので、注意が必要です。 以前の外部コラボレーターを組織のメンバーに *し*、プライベート フォークを保持するには、代わりに **[招待して復帰]** を選択します。 このユーザーが招待を承諾したら、[メンバーとして組織に参加するように招待する](/articles/converting-an-outside-collaborator-to-an-organization-member)ことで、組織のメンバーに変換できます。

  {% endwarning %}

  ![設定を復元するかどうかを選択する](/assets/images/help/organizations/choose_whether_to_restore_org_member_info.png) {% else %}
6. **[追加して復帰]** をクリックして組織の外部コラボレーターの以前の権限を復元することを選択するか、 **[追加して新規に開始]** をクリックして、以前の権限をクリアして新しいアクセス許可を設定することを選択します。

  {% warning %}

  **警告:** 外部コラボレーターを組織のメンバーにアップグレードする場合は、 **[追加して新規に開始]** を選択して、このユーザーの新しいロールを選択します。 ただし、[start fresh] を選択する場合、その個人のプライベートフォークは Organization のリポジトリから失われますので、注意が必要です。 以前の外部コラボレーターを組織のメンバーに *し*、プライベート フォークを保持するには、代わりに **[追加して復帰]** を選択します。 その後、[メンバーとして組織に追加する](/articles/converting-an-outside-collaborator-to-an-organization-member)ことで、組織のメンバーに変換できます。

  {% endwarning %}

  ![設定を復元するかどうかを選択する](/assets/images/help/organizations/choose_whether_to_restore_org_member_info_ghe.png) {% endif %} {% ifversion fpt or ghec %}
7. 以前の外部コラボレーターの前の権限をクリアした場合は、そのユーザーのロールを選択し、必要に応じていくつかのチームに追加してから、 **[招待を送信する]** をクリックします。
  ![ロールと Team のオプションと [招待を送信する] ボタン](/assets/images/help/organizations/add-role-send-invitation.png){% else %}
7. 以前の外部コラボレーターの前の権限をクリアした場合は、そのユーザーのロールを選択し、必要に応じていくつかのチームに追加してから、 **[メンバーを追加する]** をクリックします。
  ![ロールとチームのオプションとメンバーの追加ボタン](/assets/images/help/organizations/add-role-add-member.png) {% endif %} {% ifversion fpt or ghec %}
8. 招待された人物は、Organizationへの招待メールを受け取ります。 Organization で 外部コラボレーターになるには、招待を受諾する必要があります。 {% data reusables.organizations.cancel_org_invite %} {% endif %}

## もっと読む

- 「[Organization のリポジトリ ロール](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)」
