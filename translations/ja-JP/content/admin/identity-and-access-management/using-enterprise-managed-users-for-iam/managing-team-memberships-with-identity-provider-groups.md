---
title: ID プロバイダー グループを使用したチーム メンバーシップの管理
shortTitle: Manage teams with your IdP
intro: 'ID プロバイダー (IdP) を介して {% data variables.product.product_name %} の Team と Organization のメンバーシップを管理するには、IdP グループを {% data variables.enterprise.prodname_emu_enterprise %} 内の Team に接続します。'
product: '{% data reusables.gated-features.emus %}'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/managing-team-memberships-with-identity-provider-groups
  - /admin/authentication/managing-your-enterprise-users-with-your-identity-provider/managing-team-memberships-with-identity-provider-groups
  - /admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/managing-team-memberships-with-identity-provider-groups
  - /admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/managing-team-memberships-with-identity-provider-groups
versions:
  ghec: '*'
type: how_to
topics:
  - Accounts
  - Enterprise
  - SSO
  - Teams
ms.openlocfilehash: 179835d6642cd5718a565869337b5420b29407a5
ms.sourcegitcommit: 2e1852bcdd690cb66b9b5d69cb056a2bb2b9a6b4
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/10/2022
ms.locfileid: '148160825'
---
## {% data variables.product.prodname_emus %} を使用したチーム管理について

{% data variables.product.prodname_emus %} を使うと、{% data variables.product.prodname_dotcom %} Team を IdP グループに接続することで、IdP を介して Enterprise 内の Team と Organization のメンバーシップを管理できます。 エンタープライズの組織のいずれかのチームを IdP グループに接続すると、IdP グループのメンバーシップに対する変更が自動的にエンタープライズに反映されるため、手動での更新やカスタム スクリプトの必要性が軽減されます。 

IdP グループまたは新しい Team 接続に変更を加えることで、{% data variables.enterprise.prodname_managed_user %}がメンバーではない Organization の Team に参加することになった場合、その{% data variables.enterprise.prodname_managed_user %}は自動的にその Organization に追加されます。 チームからグループを切断すると、他の方法で組織のメンバーシップが割り当てられない場合、チーム メンバーシップを使用して組織のメンバーになったユーザーは組織から削除されます。

{% note %}

**メモ:** Organization の所有者は、アカウントが SCIM 経由でプロビジョニング済みである限り、{% data variables.enterprise.prodname_managed_users %}を Organization に手動で追加することもできます。

{% endnote %}

IdP 上でグループ メンバーシップが変更された場合、IdP は、IdP によって決定されたスケジュールに従い、その変更と共に SCIM 要求を {% data variables.product.prodname_dotcom_the_website %} に送信するため、変更が直ちに行われるわけではありません。 チームまたは組織のメンバーシップを変更する要求は、ユーザー プロビジョニングの構成に使用されたアカウントによって行われた変更として監査ログに登録されます。

IdP グループに接続されているチームは、他のチームの親や別のチームの子にすることはできません。 IdP グループに接続したいチームが親または子チームの場合、新しいチームを作るか、チームを親チームにしている入れ子関係を削除することをお勧めします。

IdP グループに接続されたチームを含む、エンタープライズ内の任意のチームによるリポジトリへのアクセスを管理するには、{% data variables.product.prodname_dotcom_the_website %} 上で変更を行わなければなりません。 詳細については、「[組織のリポジトリに対するチームのアクセスの管理](/organizations/managing-access-to-your-organizations-repositories/managing-team-access-to-an-organization-repository)」を参照してください。

## IdP グループを Team に接続するための要件

IdP グループを {% data variables.product.prodname_dotcom %} の Team に接続するには、そのグループを IdP 内の {% data variables.product.prodname_emu_idp_application %} アプリケーションに割り当てる必要があります。 詳しくは、[{% data variables.product.prodname_emus %} の SCIM プロビジョニングの構成に関するページ](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/configuring-scim-provisioning-for-enterprise-managed-users)を参照してください。

エンタープライズ内のチームを 1 つの IdP グループに接続できます。 同じ IdP グループをエンタープライズ内の複数のチームに割り当てることができます。

既存のチームを IdP グループに接続する場合は、最初に手動で追加されたすべてのメンバーを削除する必要があります。 エンタープライズ内のチームを IdP グループに接続した後、IdP 管理者は ID プロバイダーを通じてチーム メンバーシップを変更する必要があります。 チーム メンバーシップを {% data variables.product.prodname_dotcom_the_website %} で管理することはできません。

## IdP グループに接続された新しいチームの作成

組織のメンバーは、新しいチームを作成し、チームを IdP グループに接続できます。 

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.new_team %} {% data reusables.organizations.team_name %} {% data reusables.organizations.team_description %}
1. チームを接続するには、[Identity Provider Groups]\(ID プロバイダー グループ\) ドロップダウン メニューを選択し、接続するチームをクリックします。
    ![ID プロバイダー グループを選択するドロップダウン メニュー](/assets/images/help/teams/choose-an-idp-group.png) {% data reusables.organizations.team_visibility %} {% data reusables.organizations.create_team %}

## 既存のチームと IdP グループ間の接続の管理

組織の所有者とチームの保守担当者は、IdP グループとチームの間の既存の接続を管理できます。

{% note %}

**注**: {% data variables.product.prodname_dotcom_the_website %} の既存のチームを初めて IdP グループに接続する前に、{% data variables.product.prodname_dotcom_the_website %} のチームのすべてのメンバーを最初に削除する必要があります。 詳細については、「[Team から Organization メンバーを削除する](/github/setting-up-and-managing-organizations-and-teams/removing-organization-members-from-a-team)」を参照してください。

{% endnote %}

{% data reusables.profile.access_profile %}

{% data reusables.profile.access_org %} {% data reusables.organizations.specific_team %} {% data reusables.organizations.team_settings %}
1. 必要に応じて、[Identity Provider Groups]\(ID プロバイダー グループ\) で、切断したい IdP グループの右にある {% octicon "x" aria-label="X symbol" %} をクリックします。 
    ![接続した IdP グループを GitHub チームから選択解除する](/assets/images/enterprise/github-ae/teams/unselect-idp-group.png)
1. IdP グループを接続するには、[Identity Provider Groups]\(ID プロバイダー グループ\) で、ドロップダウン メニューを使用してリストから ID プロバイダー グループを選択します。
    ![ID プロバイダー グループを選択するドロップダウン メニュー](/assets/images/enterprise/github-ae/teams/choose-an-idp-group.png)
1. **[変更を保存]** をクリックします。

## IdP グループ、グループ メンバーシップ、接続されたチームの表示

IdP グループの一覧を確認したり、IdP グループに接続されているチームを確認したり、{% data variables.product.product_name %}. の各 IdP グループのメンバーシップを確認したりできます。 IdP のグループのメンバーシップを編集する必要があります。

{% data reusables.enterprise-accounts.access-enterprise %}
1. IdP グループの一覧を確認するには、左側のサイドバーで {% octicon "key" aria-label="The key icon" %} **[ID プロバイダー]** をクリックします。
    ![エンタープライズ サイドバーの [ID プロバイダー] タブを示すスクリーンショット](/assets/images/help/enterprises/enterprise-account-identity-provider-tab.png)
2. IdP グループに接続されているメンバーとチームを表示するには、グループの名前をクリックします。
    ![IdP グループの一覧を示すスクリーンショット。グループ名が強調表示されています](/assets/images/help/enterprises/select-idp-group.png)
4. IdP グループに接続されているチームを表示するには、 **[チーム]** をクリックします。 
    ![[チーム] ボタンを示すスクリーンショット](/assets/images/help/enterprises/idp-groups-team-switcher.png)
