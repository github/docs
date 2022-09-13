---
title: プライベートモードの有効化
intro: 'プライベートモードでは、{% data variables.product.prodname_ghe_server %} はインストールにアクセスするすべてのユーザーにサインインを求めます。'
redirect_from:
  - /enterprise/admin/articles/private-mode
  - /enterprise/admin/guides/installation/security
  - /enterprise/admin/guides/installation/securing-your-instance
  - /enterprise/admin/installation/enabling-private-mode
  - /enterprise/admin/configuration/enabling-private-mode
  - /admin/configuration/enabling-private-mode
versions:
  ghes: '*'
type: how_to
topics:
  - Access management
  - Authentication
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Networking
  - Privacy
  - Security
ms.openlocfilehash: 99488886b1da5b07c2ddb5d7054c10957f6c573b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '146332785'
---
{% data variables.product.product_location %} がインターネット経由でパブリックにアクセス可能になっている場合、プライベート モードを有効にしなければなりません。 プライベート モードでは、ユーザーは `git://` 上のリポジトリを匿名で複製することはできません。 ビルトイン認証も有効化されている場合、新しいユーザがインスタンスにアカウントを作成するには管理者が招待しなければなりません。 詳しくは、「[ビルトイン認証の設定](/admin/identity-and-access-management/using-built-in-authentication/configuring-built-in-authentication)」を参照してください。

{% data reusables.enterprise_installation.image-urls-viewable-warning %}

プライベート モードを有効にすると、認証されていない Git 操作 (および {% data variables.product.product_location %} へのネットワーク アクセス権を所有する人) に、匿名 Git 読み取りアクセスを有効にしたインスタンスで、パブリック リポジトリのコードの読み取りを許可できます。 詳細については、[管理者がパブリック リポジトリへの匿名 Git 読み取りアクセスを有効にすることを許可する](/enterprise/admin/guides/user-management/allowing-admins-to-enable-anonymous-git-read-access-to-public-repositories)に関する記事を参照してください。

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.privacy %}
4. **[プライベート モード]** を選択します
  ![プライベート モードを有効にするチェックボックス](/assets/images/enterprise/management-console/private-mode-checkbox.png) {% data reusables.enterprise_management_console.save-settings %}
