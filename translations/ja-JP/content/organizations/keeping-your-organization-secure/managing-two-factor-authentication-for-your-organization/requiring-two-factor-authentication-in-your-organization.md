---
title: Organization で 2 要素認証を要求する
intro: 'Organization のオーナーは、{% ifversion fpt or ghec %}Organization のメンバー、外部コラボレーター、支払いマネージャー{% else %}Organization のメンバー、外部のコラボレーター{% endif %}に、それぞれの個人アカウントに対する 2 要素認証の有効化を要求することで、悪意のあるアクターが Organization のリポジトリや設定にアクセスしにくくすることができます。'
redirect_from:
  - /articles/requiring-two-factor-authentication-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/requiring-two-factor-authentication-in-your-organization
  - /organizations/keeping-your-organization-secure/requiring-two-factor-authentication-in-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Require 2FA
ms.openlocfilehash: 1a6ea397b010855917f9304db9a5c51cb5440a22
ms.sourcegitcommit: 505b84dc7227e8a5d518a71eb5c7eaa65b38ce0e
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/09/2022
ms.locfileid: '147872304'
---
## Organization の2 要素認証について

{% data reusables.two_fa.about-2fa %} 組織ですべての{% ifversion fpt or ghec %}メンバー、外部コラボレーター、支払いマネージャー{% else %}メンバーと外部コラボレーター{% endif %}に、{% data variables.product.product_name %} で 2 要素認証を有効にすることを必須にできます。 2 要素認証の詳細については、「[2 要素認証 (2FA) を使用したアカウントのセキュリティ保護](/github/authenticating-to-github/securing-your-account-with-two-factor-authentication-2fa)」を参照してください。

{% ifversion fpt or ghec %}

Enterprise で Organization の 2 要素認証を必須にすることもできます。 詳細については、「[エンタープライズでのセキュリティ設定のポリシーの適用](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise)」を参照してください。

{% endif %}

{% warning %}

**警告:**

- 組織の{% ifversion fpt or ghec %}メンバー、外部コラボレーター、支払いマネージャー{% else %}メンバーと外部コラボレーター{% endif %}に対して 2 要素認証の使用を必須にする場合 (ボット アカウントを含む)、2FA を使用しないユーザーは組織から削除され、そのリポジトリへのアクセス権を失います。 Organization のプライベートリポジトリのフォークへのアクセスも失います。 組織から削除されてから 3 か月以内に、自分の個人用アカウントで 2 要素認証を有効にすれば、[そのユーザーのアクセス特権および設定を復元](/articles/reinstating-a-former-member-of-your-organization)できます。
- 必須の 2 要素認証を有効にした後に、組織の所有者、メンバー、{% ifversion fpt or ghec %}支払いマネージャー、{% endif %}または外部コラボレーターがそれぞれの個人用アカウントで 2 要素認証を無効にすると、それらは組織から自動的に削除されます。
- あなたが、2 要素認証を義務付けている Organization の唯一のオーナーである場合、その Organization での 2 要素認証義務を無効にしなければ、あなたの個人アカウントの 2 要素認証を無効にすることはできません。

{% endwarning %}

{% data reusables.two_fa.auth_methods_2fa %}

## 前提条件

{% ifversion fpt or ghec %}組織のメンバー、外部コラボレーター、支払いマネージャー{% else %}組織のメンバーと外部コラボレーター{% endif %}が 2 要素認証を使用することを必須にする前に、{% data variables.product.product_name %} で自分のアカウントの 2 要素認証を有効にする必要があります。 詳細については、「[2 要素認証 (2FA) を使用したアカウントのセキュリティ保護](/github/authenticating-to-github/securing-your-account-with-two-factor-authentication-2fa)」を参照してください。

2 要素認証の使用を必須にする前に、{% ifversion fpt or ghec %}組織のメンバー、外部コラボレーター、支払いマネージャー{% else %}組織のメンバーと外部コラボレーター{% endif %}に知らせて、それぞれのアカウントで 2 要素認証を設定するように依頼することをお勧めします。 メンバーと外部のコラボレーターがすでに 2 要素認証を使用しているかどうかを確認できます。 詳細については、「[組織内のユーザーが 2 要素認証を有効にしているかどうかの表示](/organizations/keeping-your-organization-secure/viewing-whether-users-in-your-organization-have-2fa-enabled)」を参照してください。

## Organization で 2 要素認証を要求する

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security %} {% data reusables.organizations.require_two_factor_authentication %} {% data reusables.organizations.removed_outside_collaborators %} {% ifversion fpt or ghec %}
8. Organization から削除されるメンバーまたは外部コラボレーターが存在する場合、彼らに招待状を送信して、元の権限と Organization へのアクセス権を復元できるようにすることをおすすめします。 招待を受諾できるためには、まず 2 要素認証が有効でなければなりません。
{% endif %}

## Organization から削除された人々を表示する

2 要素認証が必要なときに、コンプライアンス違反のために組織から自動的に削除されたユーザーを表示するには、組織から削除されたユーザーの[組織の監査ログを検索](/organizations/keeping-your-organization-secure/reviewing-the-audit-log-for-your-organization#accessing-the-audit-log)できます。 Audit log イベントでは、削除された理由が 2 要素認証義務に従わなかったことなのかどうかが示されます。

![2 要素認証の違反により削除されたユーザーを示す Audit log イベント](/assets/images/help/2fa/2fa_noncompliance_audit_log_search.png)

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.audit_log.audit_log_sidebar_for_org_admins %}
4. 検索クエリを入力します。 以下のように検索します:
    - 削除された組織のメンバーについては、検索クエリで `action:org.remove_member` を使用します
    - 削除された外部コラボレーターについては、検索クエリで `action:org.remove_outside_collaborator` を使用します{% ifversion fpt or ghec %}
    - 削除された支払いマネージャーについては、検索クエリで `action:org.remove_billing_manager` を使用します{% endif %}

 また、検索で[時間枠](/articles/reviewing-the-audit-log-for-your-organization/#search-based-on-time-of-action)を使用して、組織から削除されたユーザーを表示することもできます。

## 削除されたメンバーと外部コラボレーターを Organization に復帰できるようにする

2要素認証の利用の要求を有効化したときにOrganizationから削除されたメンバーあるいは外部のコラボレータがいれば、その人たちには削除されたことを知らせるメールが届きます。 そうなった場合には、彼らは個人アカウントで2FAを有効化し、OrganizationのオーナーにOrganizationへのアクセスを求めなければなりません。

## 参考資料

- 「[組織内のユーザーが 2 要素認証を有効にしているかどうかの表示](/articles/viewing-whether-users-in-your-organization-have-2fa-enabled)」
- 「[2 要素認証 (2FA) を使用したアカウントのセキュリティ保護](/articles/securing-your-account-with-two-factor-authentication-2fa)」
- 「[組織内の以前のメンバーの復帰](/articles/reinstating-a-former-member-of-your-organization)」
- 「[以前の外部のコラボレーターの組織へのアクセスの復帰](/articles/reinstating-a-former-outside-collaborator-s-access-to-your-organization)」
