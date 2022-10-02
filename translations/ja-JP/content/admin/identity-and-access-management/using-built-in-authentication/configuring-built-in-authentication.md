---
title: ビルトイン認証の設定
intro: '既定の認証方式を使用する場合、すべての認証の詳細は {% data variables.product.product_location %} に格納されます。'
permissions: 'Site administrators can configure authentication for a {% data variables.product.product_name %} instance.'
redirect_from:
  - /enterprise/admin/user-management/using-built-in-authentication
  - /enterprise/admin/authentication/using-built-in-authentication
  - /admin/authentication/using-built-in-authentication
  - /enterprise/admin/authentication/authenticating-users-for-your-github-enterprise-server-instance/using-built-in-authentication
  - /admin/identity-and-access-management/authenticating-users-for-your-github-enterprise-server-instance/using-built-in-authentication
versions:
  ghes: '*'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
shortTitle: Configure built-in authentication
ms.openlocfilehash: 6fbcd68efc953b5a32139a6907975e6918976860
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/09/2022
ms.locfileid: '147717814'
---
## ビルトイン認証について

既定では、{% data variables.product.product_name %} によって組み込みの認証が使用されます。 各ユーザーは、招待から、またはサインアップして {% data variables.product.product_location %} のユーザー アカウントを作成し、そのアカウントの資格情報を使って認証し、インスタンスにアクセスします。 {% data variables.product.product_name %} インスタンスによって、アカウントの認証情報が格納されます。

認証されていないユーザーがご利用のインスタンスに新しいユーザー アカウントを作成できないようにすることができます。 詳しくは、「[認証のないサインアップの無効化](/admin/identity-and-access-management/using-built-in-authentication/disabling-unauthenticated-sign-ups)」をご覧ください。

{% data reusables.enterprise_user_management.alternatively-enable-external-authentication %}

## ビルトイン認証の設定

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.authentication %}
4. **[ビルトイン認証]** を選びます。
![ビルトイン認証のオプションの選択](/assets/images/enterprise/management-console/built-in-auth-select.png)

{% data reusables.enterprise_user_management.two_factor_auth_header %} {% data reusables.enterprise_user_management.2fa_is_available %}

## アカウントの作成

インスタンスが作成されたら、自分の管理者アカウントを作成する必要があります。

1. `http(s)://[hostname]/join` の [管理者アカウントの作成] ページで、ユーザー名、パスワード、メールアドレスを選び、 **[アカウントの作成]** をクリックします。
![[管理者アカウントの作成]](/assets/images/enterprise/site-admin-settings/create-first-admin-acct.png) {% data reusables.enterprise_site_admin_settings.sign-in %}

## 次の手順

<a name="inviting-users"></a>

組み込み認証を構成し、管理アカウントを作成したら、アカウントを作成してインスタンスを使用するようにユーザーを招待できます。 詳しくは、「[インスタンスを使用するようにユーザーを招待する](/admin/identity-and-access-management/using-built-in-authentication/inviting-people-to-use-your-instance)」をご覧ください。

## 参考資料

- 「[通知のためのメール設定](/admin/configuration/configuring-your-enterprise/configuring-email-for-notifications)」
