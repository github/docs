---
title: 認証のないサインアップの無効化
redirect_from:
  - /enterprise/admin/articles/disabling-sign-ups
  - /enterprise/admin/user-management/disabling-unauthenticated-sign-ups
  - /enterprise/admin/authentication/disabling-unauthenticated-sign-ups
  - /admin/authentication/disabling-unauthenticated-sign-ups
  - /enterprise/admin/authentication/authenticating-users-for-your-github-enterprise-server-instance/disabling-unauthenticated-sign-ups
  - /admin/identity-and-access-management/authenticating-users-for-your-github-enterprise-server-instance/disabling-unauthenticated-sign-ups
intro: '{% data variables.product.product_location %} に組み込みの認証を使っている場合、認証されていない個人がインスタンス上に新しいユーザー アカウントを作成するのをブロックすることができます。'
permissions: 'Site administrators can disable unauthenticated sign-ups on a {% data variables.product.product_name %} instance.'
versions:
  ghes: '*'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
shortTitle: Block unauthenticated sign-up
ms.openlocfilehash: 063da3aa1e73501d05251e40d7afcb271833afaf
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147065386'
---
## 認証のないサインアップについて

{% data reusables.enterprise_user_management.built-in-authentication-new-accounts %} {% data reusables.enterprise_user_management.unauthenticated-sign-ups %} 認証のないサインアップを無効にできます。また、インスタンスで新しいユーザ ーアカウントを作成するための招待を要求できます。

{% data reusables.enterprise_user_management.alternatively-enable-external-authentication %}

## 認証のないサインアップの無効化

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.privacy %}
3. **[サインアップを有効にする]** の選択を解除します。
![[サインアップを有効にする] チェックボックス](/assets/images/enterprise/management-console/enable-sign-up.png) {% data reusables.enterprise_management_console.save-settings %}
