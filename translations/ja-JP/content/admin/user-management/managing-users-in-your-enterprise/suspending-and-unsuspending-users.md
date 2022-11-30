---
title: ユーザーのサスペンドとサスペンドの解除
redirect_from:
  - /enterprise/admin/articles/suspending-a-user/
  - /enterprise/admin/articles/unsuspending-a-user/
  - /enterprise/admin/articles/viewing-suspended-users/
  - /enterprise/admin/articles/suspended-users/
  - /enterprise/admin/articles/suspending-and-unsuspending-users/
  - /enterprise/admin/user-management/suspending-and-unsuspending-users
  - /admin/user-management/suspending-and-unsuspending-users
intro: 'ユーザが企業を離れたり異動したりした場合には、{% data variables.product.product_location %} に対するそのユーザのアクセス権を削除したり変更したりしなければなりません。'
versions:
  enterprise-server: '*'
type: how_to
topics:
  - Access management
  - Enterprise
  - Security
  - User account
---
従業員が企業を退職した場合、その{% data variables.product.prodname_ghe_server %}アカウントをサスペンドすれば、{% data variables.product.prodname_enterprise %}ライセンス中のユーザライセンスを空けながら、Issue、コメント、リポジトリ、Gist、そしてそのユーザが作成した他のデータを保持しておくことができます。 サスペンドされたユーザはインスタンスにサインインすることも、コードをプッシュやプルすることもできません。

ユーザをサスペンドした場合、その変更はすぐに有効になり、ユーザには通知されません。 ユーザがリポジトリからのプルやプッシュをしようとすると、以下のエラーが返されます:

```shell
$ git clone git@[hostname]:john-doe/test-repo.git
Cloning into 'test-repo'...
ERROR: Your account is suspended. Please check with your installation administrator.
fatal: The remote end hung up unexpectedly
```

サイト管理者をサスペンドする前には、そのユーザを通常のユーザに降格させなければなりません。 詳細は「[サイト管理者の昇格あるいは降格](/enterprise/admin/user-management/promoting-or-demoting-a-site-administrator)」を参照してください。

{% tip %}

**メモ:** 仮に {% data variables.product.product_location %} で [LDAP Sync が有効化されている](/enterprise/{{ page.version }}/admin/guides/user-management/using-ldap#enabling-ldap-sync)なら、LDAP ディレクトリサーバから削除されたユーザは自動的にサスペンドされます。 インスタンスで LDAP Sync が有効化されている場合、通常のユーザのサスペンド方法は無効化されています。

{% endtip %}

### ユーザ管理ダッシュボードからユーザをサスペンドする

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.search-user %}
{% data reusables.enterprise_site_admin_settings.click-user %}
{% data reusables.enterprise_site_admin_settings.admin-top-tab %}
{% data reusables.enterprise_site_admin_settings.admin-tab %}
5. Danger Zone（危険区域）ボックス内の"Account suspension（アカウントのサスペンド）"の下の**Suspend（サスペンド）**をクリックしてください。 ![サスペンドボタン](/assets/images/enterprise/site-admin-settings/suspend.png)
6. ユーザをサスペンドする理由を入力してください。 ![サスペンドの理由](/assets/images/enterprise/site-admin-settings/suspend-reason.png)

### ユーザ管理ダッシュボードからユーザのサスペンドを解除する

ユーザのサスペンドの場合と同じく、ユーザのサスペンド解除もすぐに有効になります。 ユーザには通知されません。

{% data reusables.enterprise_site_admin_settings.access-settings %}
3. 左サイドバーで [** Suspended users**] をクリックします。 ![[Suspended users] タブ](/assets/images/enterprise/site-admin-settings/user/suspended-users-tab.png)
2. サスペンドを解除したいユーザアカウントの名前をクリックします。 ![サスペンドユーザ](/assets/images/enterprise/site-admin-settings/user/suspended-user.png)
{% data reusables.enterprise_site_admin_settings.admin-top-tab %}
{% data reusables.enterprise_site_admin_settings.admin-tab %}
4. 赤いDanger Zone（危険区域）ボックス中の"Account suspension（アカウントのサスペンド）"の下で、**Unsuspend（サスペンド解除）**をクリックしてください。 ![[Unsuspend] ボタン](/assets/images/enterprise/site-admin-settings/unsuspend.png)
5. ユーザのサスペンドを解除する理由を入力します。 ![サスペンド解除の理由](/assets/images/enterprise/site-admin-settings/unsuspend-reason.png)

### コマンドラインからユーザをサスペンドする

{% data reusables.enterprise_installation.ssh-into-instance %}
2. [ghe-user-suspend](/enterprise/{{ currentVersion }}/admin/guides/installation/command-line-utilities#ghe-user-suspend) にサスペンドするユーザの名前を添えて実行します。
  ```shell
  $ ghe-user-suspend <em>username</em>
  ```

### サスペンドされたユーザのためのカスタムメッセージを作成する

サスペンドされたユーザがサインインしようとしたときに表示されるカスタムメッセージを作成できます。

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.messages-tab %}
5. **Add message（メッセージの追加）**をクリックしてください。 ![Add message](/assets/images/enterprise/site-admin-settings/add-message.png)
6. **Suspended user message（サスペンドされたユーザへのメッセージ）**ボックスにメッセージを入力してください。 Markdownをタイプするか、Markdownツールバーを使ってメッセージのスタイルを指定できます。 ![サスペンドされたユーザへのメッセージ](/assets/images/enterprise/site-admin-settings/suspended-user-message.png)
7. **Suspended user message（サスペンドされたユーザへのメッセージ）**フィールドの下にある**Preview（プレビュー）**ボタンをクリックして、表示されるメッセージを確認してください。 ![プレビューボタン](/assets/images/enterprise/site-admin-settings/suspended-user-message-preview-button.png)
8. 表示されたメッセージを確認します。 ![サスペンドされたユーザへのメッセージの表示](/assets/images/enterprise/site-admin-settings/suspended-user-message-rendered.png)
{% data reusables.enterprise_site_admin_settings.save-changes %}

### コマンドラインからユーザのサスペンドを解除する

{% data reusables.enterprise_installation.ssh-into-instance %}
2. [ghe-user-unsuspend](/enterprise/{{ currentVersion }}/admin/guides/installation/command-line-utilities#ghe-user-unsuspend)にサスペンド解除するユーザの名前を添えて実行します。
  ```shell
  $ ghe-user-unsuspend <em>username</em>
  ```

### 参考リンク
- 「[ユーザーをサスペンドする](/rest/reference/enterprise-admin#suspend-a-user)」
