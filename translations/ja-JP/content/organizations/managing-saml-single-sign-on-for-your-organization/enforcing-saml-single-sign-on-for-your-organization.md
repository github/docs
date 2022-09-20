---
title: Organization で SAML シングルサインオンを施行する
intro: Organizationのオーナーと管理者は、SAML SSOを施行してすべてのOrganizationメンバーがアイデンティティプロバイダ（IdP）経由で認証を受けなければならないようにすることができます。
redirect_from:
  - /articles/enforcing-saml-single-sign-on-for-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/enforcing-saml-single-sign-on-for-your-organization
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Enforce SAML single sign-on
ms.openlocfilehash: 78c6ca3297705511e419a96742a8887d01d7b70d
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '145125622'
---
## OrganizationでのSAML SSOの施行について

SAML SSO を有効化すると、{% data variables.product.prodname_dotcom %} は {% data variables.product.prodname_dotcom_the_website %} 上の Organization のリソースにアクセスしたメンバーに IdP で認証を受けるように求めます。これは、その IdP 上のアイデンティティにメンバーの個人アカウントをリンクします。 メンバーは、IdPで認証を受ける前に引き続きOrganizationのリソースにアクセスできます。

![Organizationへのアクセスに際してSAML SSOで承認を受けるよう求めるバナー](/assets/images/help/saml/sso-has-been-enabled.png)

OrganizationでもSAML SSOを施行できます。 {% data reusables.saml.when-you-enforce %} この施行によって、IdP経由での認証を受けなかったメンバーや管理者は、Organizationから削除されます。 {% data variables.product.company_short %}は削除された各メンバーにメール通知を送信します。 

{% data reusables.saml.ghec-only %}

{% data reusables.saml.removed-users-can-rejoin %} ユーザが3ヶ月以内にOrganizationに再参加すれば、ユーザのアクセス権限や設定はリストアされます。 詳細については、「[Oraganization の以前のメンバーを復帰させる](/articles/reinstating-a-former-member-of-your-organization)」を参照してください。

OrganizationのIdPで外部アイデンティティがセットアップされていないボットやサービスアカウントも、SAML SSOの施行時に削除されます。 ボットとサービス アカウントの詳細については、「[SAML シングル サインオンを使用したボットとサービス アカウントの管理](/articles/managing-bots-and-service-accounts-with-saml-single-sign-on)」を参照してください。

OrganizationがEnterpriseアカウントで管理されている場合、そのEnterpriseアカウントでSAMLを必須とすると、OrganizationレベルのSAMLの設定は上書きされ、Enterprise内のすべてのOrganizatonでSAML SSOが施行されます。 詳細については、「[エンタープライズ向けの SAML シングル サインオンの構成](/enterprise-cloud@latest/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise)」を参照してください。

{% tip %}

**ヒント:** {% data reusables.saml.testing-saml-sso %}

{% endtip %}

## OrganizationでのSAML SSOの施行

1. OrganizationでSAML SSOを有効化してテストし、続いて最低一回はIdPで認証を受けてください。 詳細については、「[Organization 向けの SAML シングル サインオンを有効化してテストする](/articles/enabling-and-testing-saml-single-sign-on-for-your-organization)」を参照してください。
1. OrganizatonでSAML SSOを施行する準備をしてください。 詳細については、「[Organization での SAML シングル サインオンの強制を準備する](/organizations/managing-saml-single-sign-on-for-your-organization/preparing-to-enforce-saml-single-sign-on-in-your-organization)」を参照してください。
{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security %}
1. [SAML シングル サインオン] で、 **[_ORGANIZATION_ Organization の全メンバーに対して SAML SSO 認証を要求する]** を選択します。
    ![[SAML SSO 認証を要求する] チェックボックス](/assets/images/help/saml/require-saml-sso-authentication.png)
1. IdP経由で認証されていないOrganizationのメンバーがいれば、{% data variables.product.company_short %}はそのメンバーを表示します。 SAML SSOを施行すると、{% data variables.product.company_short %}はそれらのメンバーをOrganizationから削除します。 警告を確認し、 **[メンバーを削除して SAML シングル サインオンを要求する]** をクリックします。
    ![Organization から削除されるメンバーのリストがある [SAML SSO 強制の確認] ダイアログ](/assets/images/help/saml/confirm-saml-sso-enforcement.png)
1. "Single sign-on recovery codes（シングルサインオンのリカバリコード）"の下で、リカバリコードを確認してください。 リカバリコードは、パスワードマネージャーのような安全な場所に保存してください。

## 参考資料

- 「[Organization へのメンバーの SAML アクセスの表示と管理](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization)」
