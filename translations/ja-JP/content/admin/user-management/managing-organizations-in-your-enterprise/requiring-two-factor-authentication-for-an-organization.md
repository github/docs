---
title: Organizationに2要素認証を要求する
intro: Organizationのメンバーと外部のコラボレータに対し、Organizatin内の個人アカウントで2要素認証を有効化することを求め、悪意ある者がOrganizationのリポジトリや設定にアクセスするのを困難にできます。
redirect_from:
  - /enterprise/admin/user-management/requiring-two-factor-authentication-for-an-organization
  - /admin/user-management/requiring-two-factor-authentication-for-an-organization
versions:
  ghes: '*'
type: how_to
topics:
  - 2FA
  - Enterprise
  - Organizations
  - Policies
  - Security
shortTitle: Require 2FA
ms.openlocfilehash: 2f7fe986cf3b13a171f85da9d5fdb74eeed0d648
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '146331641'
---
LDAP またはビルトイン認証を使用している場合、{% data variables.product.product_location %} で 2 要素認証がサポートされます。 Organizationの管理者は、メンバーに対して2要素認証の有効化を必須とすることができます。

{% data reusables.enterprise_user_management.external_auth_disables_2fa %}

詳細については、「[2 要素認証について](/github/authenticating-to-github/about-two-factor-authentication)」を参照してください。

## 2 要素認証実施にあたっての要件

Organization のメンバーと外部のコラボレーターに 2FA の使用を要求するには、自分の個人アカウントに対して [2 要素認証を有効にする](/enterprise/user/articles/securing-your-account-with-two-factor-authentication-2fa/)必要があります。

{% warning %}

**警告:**

- 2要素認証を要求すると、2FAを使わないメンバーと外部のコラボレータ（含むぼットアカウント）はOrganizationから削除され、自分のフォークやプライベートリポジトリも含めたそのOrganizationのリポジトリにアクセスできなくなります。 Organization から削除されてから 3 か月以内に個人アカウントに対して 2FA を有効にした場合は、[アクセス権と設定を元に戻す](/enterprise/user/articles/reinstating-a-former-member-of-your-organization)ことができます。
- 2FAが要求されると、2FAを無効化しているOrganizationのメンバーあるいは外部のコラボレータは、自動的にOrganizationから削除されます。
- あなたが、2 要素認証を義務付けている Organization の唯一のオーナーである場合、その Organization での 2 要素認証義務を無効にしなければ、あなたの個人アカウントの 2 要素認証を無効にすることはできません。

{% endwarning %}

2要素認証の利用を要求する前に、Organizationのメンバーと外部のコラボレータに通知をして、アカウントに2FAをセットアップしてもらうよう頼むことをおすすめします。 Organization の [ユーザー] タブで、[メンバーと外部のコラボレーターが既に 2FA を使用しているかどうか](/enterprise/user/articles/viewing-whether-users-in-your-organization-have-2fa-enabled)を確認できます。

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security %} {% data reusables.organizations.require_two_factor_authentication %} {% data reusables.organizations.removed_outside_collaborators %}

## Organization から削除された人々を表示する

2 要素認証を要求したときに、コンプライアンス違反のために Organization から自動的に削除されたユーザーを表示するには、検索フィールドで `reason:two_factor_requirement_non_compliance` を使用して[監査ログを検索](/enterprise/admin/guides/installation/searching-the-audit-log/)できます。

{% data reusables.audit_log.octicon_icon %} {% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.audit_log.audit_log_sidebar_for_site_admins %}
4. `reason:two_factor_requirement_non_compliance` を使用して検索クエリを入力します。
 ![2FA コンプライアンス違反のために削除されたユーザーを示すスタッフ ツール監査ログ イベント](/assets/images/help/2fa/2fa_noncompliance_stafftools_audit_log_search.png) 検索結果を絞り込むには:
    - 削除された Organization のメンバー、`action:org.remove_member AND reason:two_factor_requirement_non_compliance` を入力します
    - 削除された外部のコラボレーター、`action:org.remove_outside_collaborator AND reason:two_factor_requirement_non_compliance` を入力します

  また、Organization 名を使えば、特定の Organization から削除された人を見ることができます:
    - `org:octo-org AND reason:two_factor_requirement_non_compliance`
5. **[検索]** をクリックします。  

## 削除されたメンバーと外部コラボレーターを Organization に復帰できるようにする

2要素認証の利用の要求を有効化したときにOrganizationから削除されたメンバーあるいは外部のコラボレータがいれば、その人たちには削除されたことを知らせるメールが届きます。 そうなった場合には、彼らは個人アカウントで2FAを有効化し、OrganizationのオーナーにOrganizationへのアクセスを求めなければなりません。

## 参考資料

- 「[組織内のユーザーが 2 要素認証を有効にしているかどうかの表示](/enterprise/user/articles/viewing-whether-users-in-your-organization-have-2fa-enabled)」
- 「[2 要素認証 (2FA) を使用したアカウントのセキュリティ保護](/enterprise/user/articles/securing-your-account-with-two-factor-authentication-2fa)」
- 「[組織内の以前のメンバーの復帰](/enterprise/user/articles/reinstating-a-former-member-of-your-organization)」
- 「[以前の外部のコラボレーターの組織へのアクセスの復帰](/enterprise/user/articles/reinstating-a-former-outside-collaborator-s-access-to-your-organization)」
