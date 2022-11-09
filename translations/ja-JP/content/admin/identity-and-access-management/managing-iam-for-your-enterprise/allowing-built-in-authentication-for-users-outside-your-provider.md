---
title: 使用しているプロバイダーの外部ユーザーのためのビルトイン認証の許可
intro: CAS、LDAP、または SAML 認証プロバイダーにアカウントを持っていないユーザーに対して組み込みの認証を許可するように、フォールバック認証を構成できます。
redirect_from:
  - /enterprise/admin/user-management/allowing-built-in-authentication-for-users-outside-your-identity-provider
  - /enterprise/admin/authentication/allowing-built-in-authentication-for-users-outside-your-identity-provider
  - /admin/authentication/allowing-built-in-authentication-for-users-outside-your-identity-provider
  - /enterprise/admin/authentication/authenticating-users-for-your-github-enterprise-server-instance/allowing-built-in-authentication-for-users-outside-your-identity-provider
  - /admin/identity-and-access-management/authenticating-users-for-your-github-enterprise-server-instance/allowing-built-in-authentication-for-users-outside-your-identity-provider
versions:
  ghes: '*'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
shortTitle: Fallback authentication
ms.openlocfilehash: d011a710898e19dfdfa3591cbba2cbf7ae629885
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147064435'
---
## 使用しているプロバイダーの外部ユーザーのためのビルトイン認証について

既定では、{% data variables.product.product_name %} の外部認証を有効にすると、インスタンスのビルトイン認証が無効になります。 詳しくは、「[エンタープライズの認証について](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise#external-authentication)」をご覧ください。

請負業者やマシン ユーザーのアカウントなど、特定のアカウントを外部認証プロバイダーに追加できない場合は、フォールバック認証を設定できます。 フォールバック認証を使用すると、外部ユーザーのビルトイン認証が可能になり、認証プロバイダーが使用できない場合はフォールバック アカウントにアクセスできます。

ビルトイン認証を設定し、ユーザーが SAML や CAS での認証に成功すると、そのユーザーはユーザー名とパスワードで認証できなくなります。 ユーザがLDAPでの認証に成功したなら、それ以降クレデンシャルは内部的なものとは見なされません。

{% warning %}

**警告:** ビルトイン認証を無効化した場合、インスタンスへアクセスできなくなったユーザーを個別にサスペンドしなければなりません。 詳細については、[ユーザーの一時停止と一時停止解除](/enterprise/admin/guides/user-management/suspending-and-unsuspending-users)に関するページを参照してください。

{% endwarning %}

## 使用しているプロバイダーの外部ユーザーのためのビルトイン認証の設定

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.authentication %}
4. アイデンティティプロバイダを選択してください。
  ![アイデンティティ プロバイダーの選択オプション](/assets/images/enterprise/management-console/identity-provider-select.gif)
5. **[ビルトイン認証でのアカウントの作成の許可]** を選択してください。
  ![ビルトイン認証のオプションの選択](/assets/images/enterprise/management-console/built-in-auth-identity-provider-select.png)
6. 警告を読み、 **[OK]** をクリックします。

{% data reusables.enterprise_user_management.two_factor_auth_header %} {% data reusables.enterprise_user_management.2fa_is_available %}

## 使用しているプロバイダーの外部ユーザーをインスタンスで認証するために招待する

ユーザが招待を受け付けると、ユーザはIdPを通じてサインインするのではなく、ユーザ名とパスワードを使ってサインインできます。

{% data reusables.enterprise_site_admin_settings.sign-in %} {% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.invite-user-sidebar-tab %} {% data reusables.enterprise_site_admin_settings.invite-user-reset-link %}

## 参考資料

- 「[Enterprise IAM での CAS の使用](/admin/identity-and-access-management/using-cas-for-enterprise-iam)」
- 「[Enterprise IAM での LDAP の使用](/admin/identity-and-access-management/using-ldap-for-enterprise-iam)」
- 「[Enterprise IAM での SAML の使用](/admin/identity-and-access-management/using-saml-for-enterprise-iam)」
