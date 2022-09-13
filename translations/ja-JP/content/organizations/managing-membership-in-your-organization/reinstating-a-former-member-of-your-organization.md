---
title: 組織の以前のメンバーの回復
intro: 'Organization のオーナーは、Oraganization に{% ifversion fpt or ghec %}復帰するよう Oraganization の以前のメンバーを招待して{% else %}以前のメンバーを追加して{% endif%}、その個人の以前のロール、アクセス権、フォーク、設定を復元するかどうかを選ぶことができます。'
redirect_from:
  - /articles/reinstating-a-former-member-of-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/reinstating-a-former-member-of-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
permissions: Organization owners can reinstate a former member of an organization.
topics:
  - Organizations
  - Teams
shortTitle: Reinstate a member
ms.openlocfilehash: b9ad15f9fc882206ed7b335bcc6dea698c2f1f8e
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '145109766'
---
## メンバーの復帰について

以下のいずれかの方法でユーザがOrganizationから削除された場合、そのユーザのアクセス権限と設定は3ヶ月間保存されます。 

- 手動でユーザをOrganizationから削除した。 詳細については、「[Organization からメンバーを削除する](/organizations/managing-membership-in-your-organization/removing-a-member-from-your-organization)」を参照してください。{% ifversion not ghae %}
- メンバーと外部のコラボレータに対して2要素認証（2FA）の有効化を必須としたためにユーザが削除された。 詳細については、「[Organization で 2 要素認証を要求する](/organizations/keeping-your-organization-secure/requiring-two-factor-authentication-in-your-organization)」を参照してください。{% endif %}{% ifversion fpt or ghec %}
- SAMLシングルサインオンを適用したためOrganizationからユーザが削除された。 詳細については、{% data variables.product.prodname_ghe_cloud %} ドキュメントの「[Organization に SAML シングルサインオンを適用する](/enterprise-cloud@latest/organizations/managing-saml-single-sign-on-for-your-organization/enforcing-saml-single-sign-on-for-your-organization){% ifversion fpt %}」を参照してください。{% else %}."{% endif %}{% endif %}
- Organizationメンバーを外部のコラボレータに変換した。 詳細については「[Organization メンバーを外部コラボレーターに変換する](/organizations/managing-access-to-your-organizations-repositories/converting-an-organization-member-to-an-outside-collaborator)」を参照してください。

その期間内にユーザを Organization へ再度{% ifversion fpt or ghec %}招待{% else %}追加{% endif %}した場合、そのユーザの権限をリストアできます。

{% note %}

**注:** {% data reusables.saml.removed-users-can-rejoin %} これらのユーザーを再び参加するように招待する必要はありません。 その代わりに、ユーザは自分の個人アカウントにサインインし、Organizationにアクセスし、バナーをクリックしてSAMLシングルサインオン経由で認証してもらうことができます。

{% endnote %}

{% data reusables.two_fa.send-invite-to-reinstate-user-before-2fa-is-enabled %}

Oraganization の以前のメンバーを復帰させると、次のことがリストアできます:
 - Organization でのユーザのロール
 - Organization が所有しているリポジトリのあらゆるプライベートフォーク
 - Organization のチームでのメンバーシップ
 - Organization のリポジトリへの以前のアクセスと権限
 - Organization リポジトリでの Star
 - Organization での Issue 割り当て
 - リポジトリプラン (リポジトリのアクティビティを Watch するか Watch しないか無視するかについての通知設定)

{% ifversion ghes %} Organization のメンバーが 2 要素認証を使用していなかったために Organization から削除され、Organization は、引き続き、メンバーに 2 要素認証を使用するように要求する場合、以前のメンバーは 2 要素認証を有効化しないとメンバーシップを復帰できません。
{% endif %}

{% ifversion fpt or ghec %} Organization にユーザー単位の有料サブスクリプションがある場合、Organization の以前のメンバーを復帰させる前に、使用されていないライセンスを使用可能にしておく必要があります。 詳細については、「[ユーザーごとの価格について](/articles/about-per-user-pricing)」を参照してください。 {% data reusables.organizations.org-invite-scim %} {% endif %}

## 組織の以前のメンバーの回復

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %} {% data reusables.organizations.invite_member_from_people_tab %} {% data reusables.organizations.reinstate-user-type-username %} {% ifversion fpt or ghec %}
6. その個人の Organization での以前の権限を復元するか、以前の権限を解除して新たにアクセス権を設定するかを選択してから **[招待して復帰させる]** または **[招待して最初から設定する]** をクリックします。
  ![情報を復元するかどうかを選択します](/assets/images/help/organizations/choose_whether_to_restore_org_member_info.png) {% else %}
6. その個人の Organization での以前の権限を復元するか、以前の権限を解除して新たにアクセス権を設定するかを選択してから **[追加して復帰させる]** または **[追加して最初から設定する]** をクリックします。
  ![権限を復元するかどうかを選択します](/assets/images/help/organizations/choose_whether_to_restore_org_member_info_ghe.png) {% endif %} {% ifversion fpt or ghec %}
7. Organization の元のメンバーの以前の権限を解除した場合は、そのユーザーのロールを選択し、必要に応じていくつかのチームに追加してから、 **[招待を送信する]** をクリックします。
  ![ロールと Team のオプションと [招待を送信する] ボタン](/assets/images/help/organizations/add-role-send-invitation.png){% else %}
7. Organization の元のメンバーの以前の権限を解除した場合は、そのユーザーのロールを選択し、必要に応じていくつかのチームに追加してから、 **[メンバーを追加する]** をクリックします。
  ![ロールと Team のオプションと [メンバーを追加する] ボタン](/assets/images/help/organizations/add-role-add-member.png) {% endif %} {% ifversion fpt or ghec %} {% data reusables.organizations.user_must_accept_invite_email %} {% data reusables.organizations.cancel_org_invite %} {% endif %}

## 参考資料

- 「[Organization メンバーを外部コラボレーターに変換する](/articles/converting-an-organization-member-to-an-outside-collaborator)」
