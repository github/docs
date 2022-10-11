---
title: CASの利用
redirect_from:
  - /enterprise/admin/articles/configuring-cas-authentication
  - /enterprise/admin/articles/about-cas-authentication
  - /enterprise/admin/user-management/using-cas
  - /enterprise/admin/authentication/using-cas
  - /admin/authentication/using-cas
  - /enterprise/admin/authentication/authenticating-users-for-your-github-enterprise-server-instance/using-cas
  - /admin/identity-and-access-management/authenticating-users-for-your-github-enterprise-server-instance/using-cas
intro: 'Central Authentication Service (CAS) を使用して複数の Web アプリケーションへのアクセスを一元化する場合は、インスタンスの CAS 認証を構成することで、{% data variables.product.product_name %} を統合できます。'
versions:
  ghes: '*'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
  - SSO
ms.openlocfilehash: 4bd9c8baf32ab09c593a251ca4f1cb698e075501
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '147884278'
---
## {% data variables.product.product_name %} の CAS 認証について

CAS は、複数の Web アプリケーションへの認証を一元化するシングル サインオン (SSO) プロトコルです。 詳細については、Wikipedia で "[Central Authentication Service](https://en.wikipedia.org/wiki/Central_Authentication_Service)" を参照してください。

CAS を構成すると、{% data variables.product.product_location %} を使用するユーザーは、個人用アクセス トークンを使用して、HTTP 経由で API または Git 要求を認証する必要があります。 CAS 資格情報を使用してこれらの要求を認証することはできません。 詳細については、[個人アクセス トークンの作成](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)に関する記事を参照してください。

CAS を構成する場合、ID プロバイダー (IdP) のアカウントを持つユーザーは、ユーザーが {% data variables.product.product_location %} にサインインするまで、ユーザー ライセンスを消費しません。

{% data reusables.enterprise_user_management.built-in-authentication %}

## CASでのユーザ名についての考慮

{% data reusables.enterprise_user_management.consider-usernames-for-external-authentication %} 詳細については、「[外部認証のユーザー名に関する考慮事項](/admin/identity-and-access-management/managing-iam-for-your-enterprise/username-considerations-for-external-authentication)」を参照してください。

## CASの属性

以下の属性が利用できます。

| 属性名           | 型     | 説明 |
|--------------------------|----------|-------------|
| `username`               | 必須 | {% data variables.product.prodname_ghe_server %} のユーザ名 |

## CASの設定

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.authentication %}
3. **[CAS]** を選びます。

   ![認証用の CAS の選択のスクリーンショット](/assets/images/enterprise/management-console/cas-select.png)
4. {% data reusables.enterprise_user_management.built-in-authentication-option %}

   ![CAS のフォールバック組み込み認証オプションのスクリーンショット](/assets/images/enterprise/management-console/cas-built-in-authentication.png)
5. **[サーバー URL]** フィールドに、CAS サーバーの完全な URL を入力します。 {% data variables.product.prodname_ghe_server %} で検証できない証明書が CAS サーバーで使用されている場合、`ghe-ssl-ca-certificate-install` を使用して信頼済みの証明書としてインストールできます。 詳細については、「[コマンド ライン ユーティリティ](/admin/configuration/configuring-your-enterprise/command-line-utilities#ghe-ssl-ca-certificate-install)」を参照してください。
