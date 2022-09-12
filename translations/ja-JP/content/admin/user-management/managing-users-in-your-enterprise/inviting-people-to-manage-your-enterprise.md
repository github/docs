---
title: Enterprise を管理するようユーザを招待する
intro: 'Enterprise 所有者{% ifversion ghec %}または支払いマネージャーとなるようにユーザーを招待して、{% elsif ghes %}Enterprise 所有者を{% endif %} Enterprise アカウントに追加します。 Enterprise アカウントにアクセスする必要がなくなった Enterprise 所有者{% ifversion ghec %}または支払いマネージャー{% endif %}を削除することもできます。'
permissions: 'Enterprise owners can {% ifversion ghec %}invite other people to become{% elsif ghes %}add{% endif %} additional enterprise administrators.'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/managing-users-in-your-enterprise/inviting-people-to-manage-your-enterprise
  - /github/setting-up-and-managing-your-enterprise-account/inviting-people-to-manage-your-enterprise-account
  - /articles/inviting-people-to-collaborate-in-your-business-account
  - /articles/inviting-people-to-manage-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/inviting-people-to-manage-your-enterprise
versions:
  ghec: '*'
  ghes: '*'
type: how_to
topics:
  - Administrator
  - Enterprise
  - User account
shortTitle: Invite people to manage
ms.openlocfilehash: 7cdbee6f1b37a8300f3523712c6e0dda4293af74
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '146180448'
---
## エンタープライズ アカウントを管理できるユーザーについて

{% data reusables.enterprise-accounts.enterprise-administrators %} 詳細については、「[エンタープライズのロール](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise)」を参照してください。

{% ifversion ghes %}

{% data variables.product.prodname_dotcom_the_website %} でエンタープライズ アカウントの所有者と支払いマネージャーを管理する場合は、{% data variables.product.prodname_ghe_cloud %} ドキュメントの「[エンタープライズを管理するためのユーザーの招待](/enterprise-cloud@latest/admin/user-management/managing-users-in-your-enterprise/inviting-people-to-manage-your-enterprise)」を参照してください。

{% endif %}

{% ifversion ghec %}

エンタープライズで {% data variables.product.prodname_emus %} を使用している場合、エンタープライズ所有者は ID プロバイダー経由でのみ追加または削除できます。 詳細については、「[{% data variables.product.prodname_emus %} について](/enterprise-cloud@latest/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users)」を参照してください。

{% endif %}

{% tip %}

**ヒント:** エンタープライズ アカウントが所有する組織内のユーザーの管理の詳細については、「[エンタープライズ内のメンバーシップの管理](/articles/managing-membership-in-your-organization)」および「[ロールを使用した組織へのユーザーのアクセスの管理](/articles/managing-peoples-access-to-your-organization-with-roles)」を参照してください。

{% endtip %}

## エンタープライズ管理者のエンタープライズ アカウントへの{% ifversion ghec %}招待{% elsif ghes %}追加{% endif %}

{% ifversion ghec %}エンタープライズ アカウントに参加するようにある人を招待したら、その人はメールでの招待に応じるまでエンタープライズ アカウントにアクセスできません。 保留中の招待は 7 日後に期限切れになります。{% endif %}

{% ifversion enterprise-membership-view-improvements %} Enterprise アカウントの管理者になるための招待で、保留中のものをすべて表示できます。 詳細については、「[Viewing people in your enterprise](/admin/user-management/managing-users-in-your-enterprise/viewing-people-in-your-enterprise#viewing-pending-invitations)」 (Enterprise のメンバーを表示する) を参照してください。
{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.people-tab %} {% data reusables.enterprise-accounts.administrators-tab %}
1. 管理者の一覧の上にある {% ifversion ghec %} **[管理者の招待]** {% elsif ghes %} **[所有者の追加]** {% endif %} をクリックします。
  {% ifversion ghec %} ![エンタープライズ所有者の一覧の上にある [管理者の招待] ボタン](/assets/images/help/business-accounts/invite-admin-button.png) {% elsif ghes %} ![エンタープライズ所有者の一覧の上にある [所有者の追加] ボタン](/assets/images/help/business-accounts/add-owner-button.png) {% endif %}
1. Enterprise 管理者として招待する人のユーザ名、フルネーム、またはメール アドレスを入力して、表示された結果から適切な人を選びます。
  ![ユーザーのユーザー名、フル ネーム、またはメール アドレスを入力するためのフィールドと [招待] ボタンを備えたモーダル ボックス](/assets/images/help/business-accounts/invite-admins-modal-button.png){% ifversion ghec %}
1. **[所有者]** または **[支払いマネージャー]** を選択します。
  ![ロールの選択肢が表示されたモーダル ボックス](/assets/images/help/business-accounts/invite-admins-roles.png)
1. **[Send Invitation](招待状の送信)** をクリックします。
  ![[招待の送信] ボタン](/assets/images/help/business-accounts/invite-admins-send-invitation.png){% endif %}{% ifversion ghes %}
1. **[追加]** をクリックします。
  ![[追加] ボタン](/assets/images/help/business-accounts/add-administrator-add-button.png){% endif %}

## Enterprise アカウントから Enterprise 管理者を削除する

Enterprise アカウントから他の Enterprise 管理者を削除できるのは、Enterprise オーナーだけです。

{% ifversion ghec %}削除する管理者が企業が所有する組織のメンバーである場合は、 **[メンバーに変換]** を選択できます。このメンバーは、管理者ロールは削除されますが、組織のメンバーシップは保持されます。また、管理者ロールと組織メンバーシップの両方が **削除される [エンタープライズから削除**] を選択できます。
{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.people-tab %} {% data reusables.enterprise-accounts.administrators-tab %}
1. 削除するユーザーのユーザー名の横にある {% octicon "gear" aria-label="The Settings gear" %} をクリックし、{% ifversion ghes %} **[所有者の削除]** {% elsif ghec %} **[メンバーへの変換]** または **[エンタープライズから削除]** {% endif %} をクリックします。
  {% ifversion ghec %} ![エンタープライズ管理者を削除するメニュー オプションを含む設定の歯車](/assets/images/help/business-accounts/remove-admin.png) {% elsif ghes %} ![エンタープライズ管理者を削除するメニュー オプションを含む設定の歯車](/assets/images/help/business-accounts/ghes-remove-owner.png) {% endif %}
1. 確認メッセージを読み、{% ifversion ghes %} **[所有者の削除]** {% elsif ghec %} **[はい、<ユーザー名> をメンバーに変換します]** {% endif %} をクリックします。
