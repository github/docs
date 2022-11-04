---
title: Team をアイデンティティプロバイダグループと同期する
intro: '{% data variables.product.product_name %} Team をサポートされる ID プロバイダー (IdP) グループと同期して、Team のメンバーを自動的に追加および削除することができます。'
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/synchronizing-a-team-with-an-identity-provider-group
permissions: 'Organization owners and team maintainers can synchronize a {% data variables.product.prodname_dotcom %} team with an IdP group.'
versions:
  ghae: '*'
  ghec: '*'
  feature: scim-for-ghes
topics:
  - Organizations
  - Teams
shortTitle: Synchronize with an IdP
ms.openlocfilehash: c4ea8dc13eee674b962108ba52c71e67e8462b87
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106982'
---
{% data reusables.enterprise-accounts.emu-scim-note %}

## Team の同期について

{% data reusables.identity-and-permissions.about-team-sync %}

{% ifversion ghec %}最大で5つのIdPグループを{% data variables.product.product_name %} Teamに接続できます。{% elsif ghae %}{% data variables.product.product_name %}上のTeamは1つのIdPグループに接続できます。 グループ内のすべてのユーザは自動的にチームに追加され、メンバーとして親 Organization にも追加されます。 グループを Team から切断すると、Team のメンバーシップを介して Organization のメンバーになったユーザは Organization から削除されます。{% endif %} IdP グループを複数の {% data variables.product.product_name %} Team に割り当てることができます。

{% ifversion ghec %}Team同期は5000以上のメンバーを持つIdPグループをサポートしません。{% endif %}

いったん {% data variables.product.prodname_dotcom %} Team が IdP グループに接続されたら、IdP 管理者はアイデンティティプロバイダを通して Team メンバーシップを変更する必要があります。 {% data variables.product.product_name %}上では{% ifversion ghec %}、あるいはAPIを使って{% endif %}Teamメンバーシップを管理することはできません。

{% ifversion ghec %}{% data reusables.enterprise-accounts.team-sync-override %}{% endif %}

{% ifversion ghec %} IdP を通じたチーム メンバーシップ変更はすべて、チーム同期ボットによる変更として {% data variables.product.product_name %} の監査ログに記載されます。 IdP は、Team メンバーシップのデータを 1 時間に 1 回 {% data variables.product.prodname_dotcom %} に送信します。
Team を IdP グループに接続すると、Team メンバーが削除される場合があります。 詳細については、「[同期されるチームのメンバーに関する要件](#requirements-for-members-of-synchronized-teams)」を参照してください。
{% endif %}

{% ifversion ghae %} IdP 上でグループのメンバーシップが変更された場合、IdP は IdP が決定しているスケジュールに従い、その変更と共に SCIM 要求を {% data variables.product.product_name %} に送信します。 {% data variables.product.prodname_dotcom %} Team または Organization のメンバーシップを変更するリクエストは、ユーザプロビジョニングの設定に使用されたアカウントによって行われた変更として監査ログに登録されます。 このアカウントの詳細については、「[エンタープライズ向けのユーザー プロビジョニングの構成](/admin/authentication/configuring-user-provisioning-for-your-enterprise)」を参照してください。 SCIM 要求のスケジュールについて詳しくは、Microsoft Docs の「[ユーザー プロビジョニングのステータスの確認](https://docs.microsoft.com/en-us/azure/active-directory/app-provisioning/application-provisioning-when-will-provisioning-finish-specific-user)」を参照してください。 {% endif %}

親チームは IdP グループと同期できません。 IdP グループに接続したい Team が親チームの場合、新しい Team を作るか、Team と親チームのネスト関係を削除することをお勧めします。 詳細については、「[チームについて](/articles/about-teams#nested-teams)」、「[チームの作成](/organizations/organizing-members-into-teams/creating-a-team)」、および「[組織の階層内でチームを移動する](/articles/moving-a-team-in-your-organizations-hierarchy)」を参照してください。

IdP グループに接続された Team を含めて {% data variables.product.prodname_dotcom %} Team のリポジトリに対するアクセスを管理するには、{% data variables.product.product_name %} で変更を行う必要があります。 詳細については、「[チームについて](/articles/about-teams)」および「[組織のリポジトリに対するチームのアクセスを管理する](/articles/managing-team-access-to-an-organization-repository)」を参照してください。 

{% ifversion ghec %}Team同期をAPIで管理することもできます。 詳細については、「[チームの同期](/rest/reference/teams#team-sync)」を参照してください。{% endif %}

{% ifversion ghec %}
## 同期される Team のメンバーに関する要件

チームを IdP グループに接続した後、Team 同期により、次の場合にのみ IdP グループの各メンバーが {% data variables.product.product_name %} 上の対応するチームに追加されます。
- そのユーザが {% data variables.product.product_name %} の Organization のメンバーの場合。
- そのユーザーが既に {% data variables.product.product_name %} の個人アカウントでログインしており、少なくとも 1 回は SAML シングル サインオンを介して組織またはエンタープライズ アカウントに認証されている場合。
- そのユーザの SSO ID が IdP グループのメンバーである場合。  

これらの条件を満たしていない既存の Team またはグループメンバーは、{% data variables.product.product_name %} の Team から自動的に削除され、リポジトリにアクセスできなくなります。 ユーザのリンクされた ID を取り消すと、IdP グループにマップされている Team からユーザが削除されます。 詳細については、「[組織へのメンバーの SAML アクセスの表示と管理](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization#viewing-and-revoking-a-linked-identity)」および「[エンタープライズへのユーザーの SAML アクセスの表示および管理](/enterprise-cloud@latest/admin/user-management/managing-users-in-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise#viewing-and-revoking-a-linked-identity)」を参照してください。

削除された Team メンバーは、SSO を使って Organization または Enterprise アカウントに認証され、接続先の IdP グループに移動すれば、再び Team に自動的に追加できます。

意図しない Team メンバーの削除を避けるために、Organization または Enterprise アカウントで SAML SSO を施行し、メンバーシップデータを同期するため新しい Team を作成し、IdP グループのメンバーシップを確認してから既存の Team を同期することをおすすめします。 詳細については、「[組織で SAML シングル サインオンを施行する](/articles/enforcing-saml-single-sign-on-for-your-organization)」および「[エンタープライズ向けの SAML シングル サインオンを設定する](/enterprise-cloud@latest/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise)」を参照してください。

{% endif %}

## 前提条件

{% ifversion ghec %} {% data variables.product.product_name %} チームを ID プロバイダー グループに接続する前に、組織またはエンタープライズの所有者は、組織またはエンタープライズ アカウントのチーム同期を有効にする必要があります。 詳細については、「[組織のチーム同期を管理する](/organizations/managing-saml-single-sign-on-for-your-organization/managing-team-synchronization-for-your-organization)」と「[エンタープライズ アカウントで組織のチーム同期を管理する](/enterprise-cloud@latest/admin/authentication/managing-identity-and-access-for-your-enterprise/managing-team-synchronization-for-organizations-in-your-enterprise)」を参照してください。

Team メンバーを誤って削除しないように、お使いの IdP の管理ポータルにアクセスし、現在の各 Team メンバーが、接続しようとしている IdP グループにも属していることを確認してください。 アイデンティティプロバイダにこうしたアクセスができない場合は、IdP 管理者にお問い合わせください。

SAML SSO を使って認証する必要があります。 詳細については、「[SAML シングル サインオンで認証する](/articles/authenticating-with-saml-single-sign-on)」を参照してください。

{% elsif ghae %} IdP グループを含む {% data variables.product.product_name %} チームに接続するには、最初に、サポートされている System for Cross-domain Identity Management (SCIM) を使用して {% data variables.location.product_location %}のユーザー プロビジョニングを設定する必要があります。 詳細については、「[エンタープライズ向けのユーザー プロビジョニングの構成](/admin/authentication/configuring-user-provisioning-for-your-enterprise)」を参照してください。

SCIMを使用して{% data variables.product.product_name %} のユーザプロビジョニングを設定したら、{% data variables.product.product_name %} で使用するすべての IdP グループに {% data variables.product.product_name %} アプリケーションを割り当てることができます。 詳細については、Microsoft Docs の「[GitHub AE への自動ユーザー プロビジョニングを構成する](https://docs.microsoft.com/en-us/azure/active-directory/saas-apps/github-ae-provisioning-tutorial#step-5-configure-automatic-user-provisioning-to-github-ae)」を参照してください。

{% elsif scim-for-ghes %}{% data variables.location.product_location %}の SCIM を使用してユーザー プロビジョニングを構成する必要があります。 詳しくは、「[Enterprise 用の SCIM を使用したユーザーのプロビジョニングを構成する](/admin/identity-and-access-management/using-saml-for-enterprise-iam/configuring-user-provisioning-with-scim-for-your-enterprise)」を参照してください。

{% data reusables.scim.ghes-beta-note %} {% endif %}

## IdP グループをTeam に接続する

IdP グループを {% data variables.product.product_name %} Team に接続すると、グループ内のすべてのユーザが自動的に Team に追加されます。 {% ifversion ghae %}親 Organization のメンバーになっていないユーザも Organization に追加されます。{% endif %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.specific_team %} {% data reusables.organizations.team_settings %} {% ifversion ghec %}
6. [Identity Provider Groups] で、ドロップダウンメニューを使用して最大 5 つまでアイデンティティプロバイダグループを選択します。
    ![ID プロバイダー グループを選択するドロップダウン メニュー](/assets/images/help/teams/choose-an-idp-group.png){% elsif ghae %}
6. [Identity Provider Group] で、ドロップダウンメニューを使用してリストからアイデンティティプロバイダグループを選択します。
    ![ID プロバイダー グループを選択するためのドロップダウン メニュー](/assets/images/enterprise/github-ae/teams/choose-an-idp-group.png){% endif %}
7. **[変更を保存]** をクリックします。

## IdP グループをTeam から切断する

{% data variables.product.prodname_dotcom %} Team から IdP グループを切断すると、その IdP グループを介して {% data variables.product.prodname_dotcom %} Team に割り当てられている Team メンバーは Team から削除されます。 {% ifversion ghae %} その Team 接続のためだけに親 Organization のメンバーであったユーザも、Organization から削除されます。{% endif %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.specific_team %} {% data reusables.organizations.team_settings %} {% ifversion ghec %}
6. [Identity Provider Groups] で、切断したい IdP グループの右にある {% octicon "x" aria-label="X symbol" %} をクリックします。 
    ![接続した IdP グループを GitHub チームから選択解除する](/assets/images/help/teams/unselect-idp-group.png){% elsif ghae %}
6. [Identity Provider Groups] で、切断したい IdP グループの右にある {% octicon "x" aria-label="X symbol" %} をクリックします。 
    ![接続した IdP グループを GitHub チームから選択解除する](/assets/images/enterprise/github-ae/teams/unselect-idp-group.png){% endif %}
7. **[変更を保存]** をクリックします。
