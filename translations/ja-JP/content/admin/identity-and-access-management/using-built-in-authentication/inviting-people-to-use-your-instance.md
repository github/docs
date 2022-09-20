---
title: インスタンスを使用するようにユーザーを招待する
intro: '{% data variables.product.product_name %} に組み込みの認証を使う場合は、メール アドレスでユーザーを招待して、自分のインスタンスにユーザー アカウントを作成できます。'
versions:
  ghes: '*'
permissions: 'Enterprise owners can invite people to create a user account on a {% data variables.product.product_name %} instance.'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
shortTitle: Invite people
ms.openlocfilehash: d7ccb5e06f297a11ba97fa41d8250821909e5e3d
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/09/2022
ms.locfileid: '147717798'
---
## 新しいユーザーの招待について

{% data reusables.enterprise_user_management.built-in-authentication-new-accounts %} {% data reusables.enterprise_user_management.unauthenticated-sign-ups %}

認証されていないサインアップを無効にし、インスタンスに新しいユーザー アカウントを作成するための招待を要求できます。 詳しくは、「[認証されていないサインアップの無効化](/admin/identity-and-access-management/using-built-in-authentication/disabling-unauthenticated-sign-ups)」を参照してください。

{% data reusables.enterprise_user_management.alternatively-enable-external-authentication %} 

## ユーザー アカウントを作成するようにユーザーを招待する

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.invite-user-sidebar-tab %} {% data reusables.enterprise_site_admin_settings.invite-user-reset-link %}

{% data variables.product.product_location %} で通知のメールを構成している場合、インスタンスは指定されたメール アドレスに招待を送信します。 詳しくは、「[通知のためのメール設定](/admin/configuration/configuring-your-enterprise/configuring-email-for-notifications)」をご覧ください。
