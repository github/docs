---
title: サイト管理者の昇格あるいは降格
redirect_from:
  - /enterprise/admin/articles/promoting-a-site-administrator
  - /enterprise/admin/articles/demoting-a-site-administrator
  - /enterprise/admin/user-management/promoting-or-demoting-a-site-administrator
  - /admin/user-management/promoting-or-demoting-a-site-administrator
intro: サイト管理者は、任意の通常ユーザアカウントをサイト管理者に昇格させることや、他のサイト管理者を通常のユーザに降格させることができます。
versions:
  ghes: '*'
type: how_to
topics:
  - Access management
  - Accounts
  - User account
  - Enterprise
shortTitle: Manage administrators
ms.openlocfilehash: 19daa56cf7d750d69495a6ff52655784411f56ff
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '146331697'
---
{% tip %}

**注:** [ユーザーの LDAP アクセスを構成する](/enterprise/admin/authentication/using-ldap#configuring-ldap-with-your-github-enterprise-server-instance)ときに、[LDAP 同期が有効](/enterprise/admin/authentication/using-ldap#enabling-ldap-sync)で、`Administrators group` 属性が設定されている場合、それらのユーザーはインスタンスへのサイト管理者アクセス権を自動的に持ちます。 この場合、以下のステップで手動でユーザを昇格させることはできません。ユーザを昇格させるにはLDAPの管理者グループに追加してください。

{% endtip %}

Organization 所有者へのユーザーの昇格については、「[コマンド ライン ユーティリティ](/enterprise/admin/guides/installation/command-line-utilities#ghe-org-admin-promote)」の `ghe-org-admin-promote` のセクションをご覧ください。

## Enterprise設定からユーザを昇格させる

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.people-tab %} {% data reusables.enterprise-accounts.administrators-tab %}
5. ページの右上隅にある **[Add owner]\(所有者の追加\)** をクリックします。
  ![管理者を追加するボタン](/assets/images/help/business-accounts/business-account-add-admin-button.png)
6. 検索フィールドにユーザーの名前を入力して、 **[追加]** をクリックします。
  ![管理者を追加するための検索フィールド](/assets/images/help/business-accounts/business-account-search-to-add-admin.png)

## Enterprise設定からサイト管理者を降格させる

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.people-tab %} {% data reusables.enterprise-accounts.administrators-tab %}
1. ウィンドウの左上にある [Find an administrator] 検索フィールドに、降格させたい人物のユーザ名を入力します。
  ![管理者を見つけるための検索フィールド](/assets/images/help/business-accounts/business-account-search-for-admin.png)

1. 検索結果で降格させるユーザーのユーザー名を見つけ、{% octicon "gear" %} ドロップダウン メニューを使って **[所有者の削除]** を選びます。
  ![Enterprise からの削除オプション](/assets/images/help/business-accounts/demote-admin-button.png)

## コマンドラインからユーザを昇格させる

1. アプライアンスに [SSH](/enterprise/admin/guides/installation/accessing-the-administrative-shell-ssh/) で接続します。
2. 昇格させるユーザー名を指定して [ghe-user-promote](/enterprise/admin/guides/installation/command-line-utilities#ghe-user-promote) を実行します。
  ```shell
  $ ghe-user-promote <em>username</em>
  ```

## コマンドラインからサイト管理者を降格させる

1. アプライアンスに [SSH](/enterprise/admin/guides/installation/accessing-the-administrative-shell-ssh/) で接続します。
2. 降格させるユーザー名を指定して [ghe-user-demote](/enterprise/admin/guides/installation/command-line-utilities#ghe-user-demote) を実行します。
  ```shell
  $ ghe-user-demote <em>username</em>
  ```
