---
title: 使用しているアイデンティティプロバイダ外のユーザのためのビルトイン認証の許可
intro: You can configure built-in authentication to authenticate users who don't have access to your identity provider that uses LDAP, SAML, or CAS.
redirect_from:
- /enterprise/admin/user-management/allowing-built-in-authentication-for-users-outside-your-identity-provider
- /enterprise/admin/authentication/allowing-built-in-authentication-for-users-outside-your-identity-provider
- /admin/authentication/allowing-built-in-authentication-for-users-outside-your-identity-provider
- /enterprise/admin/authentication/authenticating-users-for-your-github-enterprise-server-instance/allowing-built-in-authentication-for-users-outside-your-identity-provider
versions:
  ghes: '*'
type: how_to
topics:
- Accounts
- Authentication
- Enterprise
- Identity
shortTitle: Authentication outside IdP
ms.openlocfilehash: 6b78f8a0b1ec144b0eb9f4dd742b2548b79893df
ms.sourcegitcommit: ea9a577cff7ec16ded25ed57417c83ec04816428
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 04/07/2022
ms.locfileid: "141509343"
---
## <a name="about-built-in-authentication-for-users-outside-your-identity-provider"></a>使用しているアイデンティティプロバイダ外のユーザのためのビルトイン認証について

契約業者やマシンのユーザなど、特定のアカウントを使用中のアイデンティティプロバイダ（IdP）に追加できない場合、外部のユーザのためのビルトイン認証を使うことができます。 また、アイデンティティプロバイダが利用できない場合にフォールバックアカウントにアクセスするためにビルトイン認証を使うこともできます。  

ビルトイン認証が設定され、ユーザがSAMLもしくはCASでの認証に成功したなら、そのユーザはユーザ名とパスワードでの認証をすることはできません。 ユーザがLDAPでの認証に成功したなら、それ以降クレデンシャルは内部的なものとは見なされません。

特定のIdPに対するビルトイン認証は、デフォルトで無効化されています。

{% warning %}

**警告:** ビルトイン認証を無効化した場合、インスタンスへアクセスできなくなったユーザーを個別にサスペンドしなければなりません。 詳細については、[ユーザーの一時停止と一時停止解除](/enterprise/{{ currentVersion }}/admin/guides/user-management/suspending-and-unsuspending-users)に関するページを参照してください。

{% endwarning %}

## <a name="configuring-built-in-authentication-for-users-outside-your-identity-provider"></a>アイデンティティプロバイダ外のユーザのためのビルトイン認証の設定

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.authentication %}
4. アイデンティティプロバイダを選択してください。
  ![アイデンティティ プロバイダーの選択オプション](/assets/images/enterprise/management-console/identity-provider-select.gif)
5. **[ビルトイン認証でのアカウントの作成の許可]** を選択してください。
  ![ビルトイン認証のオプションの選択](/assets/images/enterprise/management-console/built-in-auth-identity-provider-select.png)
6. 警告を読み、 **[OK]** をクリックします。

{% data reusables.enterprise_user_management.two_factor_auth_header %} {% data reusables.enterprise_user_management.2fa_is_available %}

## <a name="inviting-users-outside-your-identity-provider-to-authenticate-to-your-instance"></a>使用しているアイデンティティプロバイダ外のユーザをインスタンスで認証するために招待する

ユーザが招待を受け付けると、ユーザはIdPを通じてサインインするのではなく、ユーザ名とパスワードを使ってサインインできます。

{% data reusables.enterprise_site_admin_settings.sign-in %} {% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.invite-user-sidebar-tab %} {% data reusables.enterprise_site_admin_settings.invite-user-reset-link %}

## <a name="further-reading"></a>参考資料

- "[LDAP を使用する](/enterprise/admin/authentication/using-ldap)"
- "[SAML を使用する](/enterprise/{{ currentVersion }}/admin/guides/user-management/using-saml)"
- "[CAS を使用する](/enterprise/{{ currentVersion }}/admin/guides/user-management/using-cas)"
