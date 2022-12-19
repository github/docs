---
title: Enterprise の人を表示する
intro: Enterprise が所有するリソースやユーザライセンスの利用を監査するため、Enterprise のオーナーは、すべての Enterprise の管理者およびメンバーを表示できます。
permissions: Enterprise owners can view the people in an enterprise.
redirect_from:
  - /github/setting-up-and-managing-your-enterprise-account/viewing-people-in-your-enterprise-account
  - /articles/viewing-people-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/viewing-people-in-your-enterprise
  - /github/setting-up-and-managing-your-enterprise/managing-users-in-your-enterprise/viewing-people-in-your-enterprise
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Enterprise
shortTitle: View people in your enterprise
ms.openlocfilehash: 1c9b8402a0924c799f4747cf5a6cdae051aa4a49
ms.sourcegitcommit: 6b649e03ca2fef38c9ebbeec92102219849380e2
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/31/2022
ms.locfileid: '148120594'
---
## Enterprise 内のユーザーのリストについて

Enterprise のリソースに対するアクセスの監査を行い、ライセンスの使用状況を管理するために、Enterprise にアクセスできるすべてのユーザーのリストを確認できます。 

現在のすべての Enterprise メンバーと Enterprise 管理者{% ifversion ghec %}だけでなく、メンバーと管理者になるための保留中の招待{% endif %}が表示されます。 この情報を簡単に利用できるように、リストの検索とフィルター処理ができます。

{% ifversion ghec %}

{% data variables.product.prodname_github_connect %} がエンタープライズ用に構成されている場合は、エンタープライズのメンバーの一覧をフィルターするときに、次の制限が適用されます。

- 2 要素認証 (2FA) の状態のフィルターでは、{% data variables.product.prodname_ghe_server %} インスタンスにのみアカウントがあるメンバーは表示されません。
- 組織または 2FA 状態のいずれかのフィルターを持つ {% data variables.product.prodname_ghe_server %} インスタンスでアカウントのフィルターを組み合わせる場合、結果は表示されません。

{% data variables.product.prodname_github_connect %} の詳細については、次の記事を参照してください。

- [About {% data variables.product.prodname_github_connect %}](/enterprise-server/admin/configuration/configuring-github-connect/about-github-connect) について ({% data variables.product.prodname_ghe_server %} ドキュメント)
- {% data variables.product.prodname_ghe_managed %} ドキュメントの「[{% data variables.product.prodname_github_connect %} について](/github-ae@latest/admin/configuration/configuring-github-connect/about-github-connect)」

{% endif %}

{% ifversion enterprise-member-csv %}Enterprise のメンバーシップ情報をエクスポートすることもできます。 詳しくは、「[Enterprise のメンバーシップ情報をエクスポートする](/admin/user-management/managing-users-in-your-enterprise/exporting-membership-information-for-your-enterprise)」を参照してください。
{% endif %}

## Enterprise 管理者の表示

Enterprise の現在の Enterprise 所有者{% ifversion ghec %}と支払いマネージャー{% endif %}をすべて表示できます。{% ifversion enterprise-membership-view-improvements %}各管理者に関する役に立つ情報を表示{% ifversion ghec %}し、ロールで一覧をフィルター処理{% endif %}できます。{% endif %}ユーザー名または表示名を検索して、特定のユーザーを見つけることができます。

{% ifversion ghes > 3.5 %}アカウントが停止されている Enterprise 所有者は、Enterprise 管理者の一覧に含まれ、停止済みとして識別されます。 表示される停止された所有者の降格を検討する必要があります。 詳細については、「[サイト管理者の昇格または降格](/admin/user-management/managing-users-in-your-enterprise/promoting-or-demoting-a-site-administrator#demoting-a-site-administrator-from-the-enterprise-settings)」を参照してください。
{% endif %}

{% ifversion not ghae %}管理者を削除することもできます。 詳しくは、 「[ Enterprise を管理するようユーザーを招待する](/admin/user-management/managing-users-in-your-enterprise/inviting-people-to-manage-your-enterprise#removing-an-enterprise-administrator-from-your-enterprise-account)」をご覧ください。
{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.people-tab %} {% data reusables.enterprise-accounts.administrators-tab %}

## メンバー{% ifversion enterprise-membership-view-improvements %}{% else %}と外部コラボレーター{% endif %}の表示

Enterprise の現在のメンバー{% ifversion enterprise-membership-view-improvements %}{% else %}または外部コラボレーター{% endif %}をすべて表示できます。 各アカウントに関する有益な情報を確認し、ロール別などの便利な方法でリストをフィルター処理できます。 ユーザ名または表示名を検索して、特定の人を見つけることが可能です。

ユーザーの名前をクリックすると、そのユーザーの Enterprise に対するアクセスに関する詳しい情報 (ユーザーが属する Organization など) が表示されます。

{% ifversion remove-enterprise-members %}Enterprise が所有するすべての Organization から、任意の Enterprise メンバーを削除することもできます。 詳しくは、「[Enterprise からのメンバーの削除](/admin/user-management/managing-users-in-your-enterprise/removing-a-member-from-your-enterprise)」をご覧ください。
{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.people-tab %}{% ifversion enterprise-membership-view-improvements %}{% else %}
1. 必要に応じて、メンバーのリストではなく外部コラボレーターのリストを表示するには、 **[外部コラボレーター]** をクリックします。

   ![Enterprise メンバーのページにある [外部コラボレーター] タブ](/assets/images/help/business-accounts/outside-collaborators-tab.png){% endif %}

{% ifversion enterprise-membership-view-improvements %}
## 外部コラボレーターの表示

Enterprise の現在の外部コラボレーターをすべて表示できます。 各コラボレーターに関する有益な情報を確認し、Organization 別などの便利な方法でリストをフィルター処理できます。 ユーザー名または表示名を検索して、特定のコラボレーターを見つけることができます。

ユーザーの名前をクリックすると、そのユーザーの Enterprise に対するアクセスに関する詳しい情報 (コラボレーターがアクセスできるすべてのリポジトリのリストなど) が表示されます。

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.people-tab %}
1. [ユーザー] で、 **[外部コラボレーター]** をクリックします。

  ![Enterprise の設定サイドバーにある [外部コラボレーター] タブ]{% ifversion ghec%}(/assets/images/help/business-accounts/outside-collaborators-tab-sidebar-dotcom.png){% else %}(/assets/images/help/business-accounts/outside-collaborators-tab-sidebar-dotcom.png){% endif %}
  
{% endif %}

{% ifversion ghec %}
## 保留中の招待の表示

Enterprise のメンバー、管理者、または外部コラボレーターになるための保留中の招待をすべて表示できます。 Organization 別などの便利な方法でリストをフィルター処理できます。 ユーザ名または表示名を検索して、特定の人を見つけることが可能です。

保留中のメンバーのリストでは、個々のアカウントにおいて、Enterprise が所有する Organization に参加するためのすべての招待を取り消すことができます。 これによって、同じユーザーが Enterprise 管理者または外部コラボレーターになるための招待が取り消されることはありません。 

{% note %}

**注:** 招待が SCIM を通じてプロビジョニングされた場合は、{% data variables.product.prodname_dotcom %} ではなく、ID プロバイダー (IdP) を通じて招待を取り消す必要があります。

{% endnote %}

{% data variables.visual_studio.prodname_vss_ghe %} を使用する場合、保留中の招待のリストには、{% data variables.product.prodname_dotcom %} でどの組織にも参加していないすべての {% data variables.product.prodname_vs %} サブスクライバーが含まれます (サブスクライバーが組織に参加するための保留中の招待を持っていない場合でも)。 {% data variables.product.prodname_vs %} サブスクライバーが {% data variables.product.prodname_enterprise %} にアクセスできるようにする方法についての詳細は、「[{% data variables.visual_studio.prodname_vss_ghe %} のセットアップ](/billing/managing-licenses-for-visual-studio-subscriptions-with-github-enterprise/setting-up-visual-studio-subscriptions-with-github-enterprise)」を参照してください。

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.people-tab %}
1. [ユーザー] で、 **[保留中の招待]** をクリックします。

   ![サイドバーにある [保留中の招待] タブのスクリーンショット](/assets/images/help/enterprises/pending-invitations-tab.png)
1. 必要に応じて、Enterprise が所有する Organization に参加するためのアカウントの招待をすべて取り消す場合は、アカウントの右側にある [{% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}] をクリックして、 **[招待の取り消し]** をクリックします。

   ![[招待の取り消し] ボタンのスクリーンショット](/assets/images/help/enterprises/cancel-enterprise-member-invitation.png)
1. 必要に応じて、Enterprise 管理者または外部コラボレーターの保留中の招待を表示する場合は、[保留中のメンバー] の **[管理者]** または **[外部コラボレーター]** をクリックします。

   ![[メンバー]、[管理者]、[外部コラボレーター] タブのスクリーンショット](/assets/images/help/enterprises/pending-invitations-type-tabs.png)

## {% data variables.enterprise.prodname_emu_enterprise %} の一時停止されたメンバーの表示

Enterprise で {% data variables.product.prodname_emus %} を使っている場合は、一時停止されたユーザーを表示することができます。 中断されたユーザーとは、{% data variables.product.prodname_emu_idp_application %} アプリケーションから割り当て解除されたか、ID プロバイダーから削除された後にプロビジョニング解除されたメンバーです。 詳細については、「[{% data variables.product.prodname_emus %} について](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/about-enterprise-managed-users)」を参照してください。

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.people-tab %}
1. 中断されたメンバーのリストを表示するには、アクティブなメンバーのリストの上にある **[中断済み]** をクリックします。
  ![[中断済み] オプションを示すスクリーンショット](/assets/images/help/enterprises/view-suspended-members.png)

{% endif %}

## 休眠ユーザの表示

{% ifversion ghes or ghae %}中断されていない{% endif %}サイト管理者ではないすべての休眠ユーザーのリストを表示できます。 {% data reusables.enterprise-accounts.dormant-user-activity-threshold %} 詳細については、「[休眠ユーザーの管理](/admin/user-management/managing-users-in-your-enterprise/managing-dormant-users)」を参照してください。

{% ifversion filter-by-enterprise-member-type %}
## {% data variables.enterprise.prodname_emu_enterprise %}{% endif %} 内のメンバーの種類{% ifversion ghec %}によるフィルター処理

{% ifversion ghec %}Enterprise で {% data variables.product.prodname_emus %} を使っている場合、{% elsif ghes or ghae %}{% endif %} 種類によって Organization のメンバー リストをフィルター処理して、メンバーシップの管理が IdP を介しているか、直接かを判断できます。 IdP により管理されるメンバーシップは IdP グループを通じて追加され、IdP グループは Organization 内のチームに接続されました。 直接管理されているメンバーシップは、Organization に手動で追加されました。 メンバーシップが Organization で管理される方法によって、メンバーシップを削除する方法が決まります。 このフィルターを使用して、メンバーを Organization に追加した方法を確認して、メンバーを削除する方法を確認できます。{% ifversion ghec %}詳しくは、「[{% data variables.product.prodname_emus %}](/enterprise-cloud@latest/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/about-enterprise-managed-users#about-organization-membership-management) について」を参照してください。{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %}
1. [Organization] の下の検索バーで、Organization の名前を入力し始め、検索結果に Organization が表示されたら Organization の名前をクリックします。
   ![Organization の検索フィールドのスクリーンショット](/assets/images/help/enterprises/organization-search.png)
1. Organization 名の下で、{% octicon "person" aria-label="The Person icon" %} **[ユーザー]** をクリックします。
   ![[ユーザー] タブのスクリーンショット](/assets/images/help/enterprises/emu-organization-people-tab.png)
1. メンバーのリストの上の **[種類]** をクリックし、表示するメンバーの種類を選びます。
   ![[種類] ボタンのスクリーンショット](/assets/images/help/enterprises/filter-by-member-type.png)

{% endif %}

{% ifversion ghec or ghes %}
## 検証済みドメインのメール アドレスを持たないメンバーの表示

{% data variables.product.prodname_dotcom_the_website %} のユーザー アカウントに関連付けられている検証済みドメインのメール アドレスを持たない、Enterprise 内のメンバーの一覧を表示できます。

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.verified-domains-tab %}
1. [通知の基本設定] で、{% octicon "eye" aria-label="The github eye icon" %} **[承認または確認済みのドメインのメール アドレスを持たない Enterprise メンバーを表示する]** リンクをクリックします。
{% endif %}

## 参考資料

- "[Enterprise におけるロール](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise)"
