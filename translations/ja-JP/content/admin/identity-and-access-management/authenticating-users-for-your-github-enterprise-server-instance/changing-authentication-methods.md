---
title: 認証方法の変更
intro: You can change the way {% data variables.product.prodname_ghe_server %} authenticates with your existing accounts at any time.
redirect_from:
- /enterprise/admin/user-management/changing-authentication-methods
- /enterprise/admin/authentication/changing-authentication-methods
- /admin/authentication/changing-authentication-methods
- /enterprise/admin/authentication/authenticating-users-for-your-github-enterprise-server-instance/changing-authentication-methods
versions:
  ghes: '*'
type: overview
topics:
- Accounts
- Authentication
- Enterprise
- Identity
shortTitle: Change authentication methods
ms.openlocfilehash: b84c1284dda90e6c0a36438db4c64c8e8a0039e4
ms.sourcegitcommit: ea9a577cff7ec16ded25ed57417c83ec04816428
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 04/07/2022
ms.locfileid: "141509340"
---
{% data variables.product.product_location %} のユーザー アカウントは、認証方式を変更しても保存され、ユーザーはユーザー名が変更されない限り、同じアカウントにログインし続けることができます。

新しい認証方式でユーザ名が変更される場合、新しいアカウントが作成されます。 管理者は、サイト管理者設定か[ユーザー管理 API](/rest/reference/enterprise-admin#update-the-username-for-a-user) を利用することでユーザーの名前を変更できます。

他に考慮しなければならない問題には以下があります。

* **パスワード:** インスタンスに組み込みの認証を使用するように切り替える場合、ユーザーは変更が完了した後に[パスワードを設定](/enterprise/user/articles/how-can-i-reset-my-password/)する必要があります。

* **サイト管理者:** 管理特権は、[SAML を使用する場合は ID プロバイダーによって制御](/enterprise/admin/guides/user-management/using-saml/#saml-attributes)されます。[LDAP を使用する場合はグループ メンバーシップによって制御](/enterprise/admin/authentication/using-ldap#configuring-ldap-with-your-github-enterprise-server-instance)できます。

* **チーム メンバーシップ:** LDAP でのみ、ディレクトリ サーバーから[チーム メンバーシップを制御](/enterprise/admin/authentication/using-ldap#configuring-ldap-with-your-github-enterprise-server-instance)できます。

* **ユーザーの一時停止:** 認証に LDAP を使う場合、{% data variables.product.prodname_ghe_server %} へのアクセスは _制限グループ_ 経由で制御できます。 LDAPに切り替えた後、制限グループが設定されているなら、既存のユーザでこれらのグループのいずれかに属してないユーザは一時停止されます。 一時停止は、ユーザがログインするか、次のLDAP Syncの間に生じます。

* **グループ メンバーシップ:** LDAP を使用して認証を行うと、制限付きグループ メンバーシップ、アカウントの状態、Active Directory に基づいて、ユーザーが自動的に[中断され、中断解除されます](/enterprise/admin/guides/user-management/suspending-and-unsuspending-users)。

* **Git 認証:** SAML と CAS では、[個人用アクセス トークン](/articles/creating-an-access-token-for-command-line-use)を使用した HTTP または HTTPS 経由の Git 認証のみがサポートされます。 HTTPあるいはHTTPS経由でのパスワード認証はサポートされていません。 LDAP では既定でパスワードベースの Git 認証がサポートされていますが、[その方法を無効](/enterprise/admin/authentication/using-ldap#disabling-password-authentication-for-git-operations)にし、個人用アクセス トークンまたは SSH キーを使用する認証を強制することをお勧めします。

* **API 認証:** SAML と CAS では、[個人用アクセス トークン](/articles/creating-an-access-token-for-command-line-use)を使用した API 認証のみがサポートされます。 Basic認証はサポートされていません。

* **2 要素認証:** {% data reusables.enterprise_user_management.external_auth_disables_2fa %}

* **使用している ID プロバイダー外のユーザーのためのビルトイン認証:** 使用中の ID プロバイダーに追加することなく、ユーザーを {% data variables.product.product_location_enterprise %} で認証するよう招待できます。 詳細については、「[使用している ID プロバイダー外のユーザーのためのビルトイン認証の許可](/enterprise/{{ currentVersion }}/admin/guides/user-management/allowing-built-in-authentication-for-users-outside-your-identity-provider)」の記事をご覧ください。
