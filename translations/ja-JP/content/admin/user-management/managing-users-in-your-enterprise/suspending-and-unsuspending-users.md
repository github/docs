---
title: ユーザーのサスペンドとサスペンドの解除
redirect_from:
  - /enterprise/admin/articles/suspending-a-user
  - /enterprise/admin/articles/unsuspending-a-user
  - /enterprise/admin/articles/viewing-suspended-users
  - /enterprise/admin/articles/suspended-users
  - /enterprise/admin/articles/suspending-and-unsuspending-users
  - /enterprise/admin/user-management/suspending-and-unsuspending-users
  - /admin/user-management/suspending-and-unsuspending-users
intro: 'ユーザーが企業を離れたり異動したりした場合には、{% data variables.product.product_location %} に対するそのユーザーのアクセス権を削除したり変更したりしなければなりません。'
versions:
  ghes: '*'
type: how_to
topics:
  - Access management
  - Enterprise
  - Security
  - User account
shortTitle: Manage user suspension
ms.openlocfilehash: d888678438f62fb585dac1cab4905ff02d8eb824
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '146331905'
---
従業員が企業を退職した場合、その{% data variables.product.prodname_ghe_server %}アカウントをサスペンドすれば、{% data variables.product.prodname_enterprise %}ライセンス中のユーザライセンスを空けながら、Issue、コメント、リポジトリ、Gist、そしてそのユーザが作成した他のデータを保持しておくことができます。 サスペンドされたユーザはインスタンスにサインインすることも、コードをプッシュやプルすることもできません。

ユーザをサスペンドした場合、その変更はすぐに有効になり、ユーザには通知されません。 ユーザがリポジトリからのプルやプッシュをしようとすると、以下のエラーが返されます:

```shell
$ git clone git@[hostname]:john-doe/test-repo.git
Cloning into 'test-repo'...
ERROR: Your account is suspended. Please check with your installation administrator.
fatal: The remote end hung up unexpectedly
```

サイト管理者をサスペンドする前には、そのユーザを通常のユーザに降格させなければなりません。 詳細については、「[サイト管理者の昇格または降格](/enterprise/admin/user-management/promoting-or-demoting-a-site-administrator)」を参照してください。

{% tip %}

**注:** {% data variables.product.product_location %} に対して [LDAP 同期が有効](/enterprise/admin/authentication/using-ldap#enabling-ldap-sync)になっている場合、ユーザーが LDAP ディレクトリ サーバーから削除されると、そのユーザーは自動的に一時停止されます。 インスタンスで LDAP Sync が有効化されている場合、通常のユーザのサスペンド方法は無効化されています。

{% endtip %}

## ユーザ管理ダッシュボードからユーザをサスペンドする

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.search-user %} {% data reusables.enterprise_site_admin_settings.click-user %} {% data reusables.enterprise_site_admin_settings.admin-top-tab %} {% data reusables.enterprise_site_admin_settings.admin-tab %}
5. [アカウントの一時停止] の赤い [危険ゾーン] ボックスで、 **[一時停止]** をクリックします。
![[一時停止] ボタン](/assets/images/enterprise/site-admin-settings/suspend.png)
6. ユーザをサスペンドする理由を入力してください。
![一時停止の理由](/assets/images/enterprise/site-admin-settings/suspend-reason.png)

## ユーザ管理ダッシュボードからユーザのサスペンドを解除する

ユーザのサスペンドの場合と同じく、ユーザのサスペンド解除もすぐに有効になります。 ユーザには通知されません。

{% data reusables.enterprise_site_admin_settings.access-settings %}
3. 左側のサイドバーで、 **[一時停止されたユーザー]** をクリックします。
![[一時停止されたユーザー] タブ](/assets/images/enterprise/site-admin-settings/user/suspended-users-tab.png)
2. サスペンドを解除したいユーザアカウントの名前をクリックします。
![一時停止されたユーザー](/assets/images/enterprise/site-admin-settings/user/suspended-user.png) {% data reusables.enterprise_site_admin_settings.admin-top-tab %} {% data reusables.enterprise_site_admin_settings.admin-tab %}
4. [アカウントの一時停止] の赤い [危険ゾーン] ボックスで、 **[停止解除]** をクリックします。
![[停止解除] ボタン](/assets/images/enterprise/site-admin-settings/unsuspend.png)
5. ユーザのサスペンドを解除する理由を入力します。
![停止解除の理由](/assets/images/enterprise/site-admin-settings/unsuspend-reason.png)

## コマンドラインからユーザをサスペンドする

{% data reusables.enterprise_installation.ssh-into-instance %}
2. 一時停止するユーザー名を指定して [ghe-user-suspend](/enterprise/admin/guides/installation/command-line-utilities#ghe-user-suspend) を実行します。
  ```shell
  $ ghe-user-suspend <em>username</em>
  ```

## サスペンドされたユーザのためのカスタムメッセージを作成する

サスペンドされたユーザがサインインしようとしたときに表示されるカスタムメッセージを作成できます。

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.messages-tab %}
5. **[メッセージの追加]** をクリックします。
![メッセージの追加](/assets/images/enterprise/site-admin-settings/add-message.png)
6. **[一時停止されたユーザーへのメッセージ]** ボックスにメッセージを入力します。 Markdownをタイプするか、Markdownツールバーを使ってメッセージのスタイルを指定できます。
![一時停止されたユーザーへのメッセージ](/assets/images/enterprise/site-admin-settings/suspended-user-message.png)
7. **[一時停止されたユーザーへのメッセージ]** フィールドの下にある **[プレビュー]** ボタンをクリックして、表示されたメッセージを表示します。
![プレビュー ボタン](/assets/images/enterprise/site-admin-settings/suspended-user-message-preview-button.png)
8. 表示されたメッセージを確認します。
![表示された一時停止されたユーザーへのメッセージ](/assets/images/enterprise/site-admin-settings/suspended-user-message-rendered.png) {% data reusables.enterprise_site_admin_settings.save-changes %}

## コマンドラインからユーザのサスペンドを解除する

{% data reusables.enterprise_installation.ssh-into-instance %}
2. 停止解除するユーザー名を指定して [ghe-user-unsuspend](/enterprise/admin/guides/installation/command-line-utilities#ghe-user-unsuspend) を実行します。
  ```shell
  $ ghe-user-unsuspend <em>username</em>
  ```

## 参考資料
- 「[ユーザーの一時停止](/rest/reference/enterprise-admin#suspend-a-user)」
