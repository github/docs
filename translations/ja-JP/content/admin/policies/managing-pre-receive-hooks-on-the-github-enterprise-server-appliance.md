---
title: GitHub Enterprise Server アプライアンスで pre-receive フックを管理する
intro: 'pre-receive フックの {% data variables.product.prodname_ghe_server %} アプライアンス内での利用方法を設定する'
redirect_from:
  - /enterprise/admin/developer-workflow/managing-pre-receive-hooks-on-the-github-enterprise-server-appliance
  - /enterprise/admin/guides/developer-workflow/managing-pre-receive-hooks-on-the-github-enterprise-appliance/
  - /enterprise/admin/policies/managing-pre-receive-hooks-on-the-github-enterprise-server-appliance
versions:
  enterprise-server: '*'
topics:
  - Enterprise
---

### pre-receiveフックの作成

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.hooks-tab %}
4. **Add pre-receive hook（pre-receiveフックの追加）**をクリックしてください。 ![pre-receive フックを追加する](/assets/images/enterprise/site-admin-settings/add-pre-receive-hook.png)
5. **Hook name（フック名）**フィールドに、作成したいフックの名前を入力してください。 ![pre-receive フックに名前を付ける](/assets/images/enterprise/site-admin-settings/hook-name.png)
6. **Environment（環境）**ドロップダウンメニューから、フックを動作させたい環境を選択してください。 ![フックの環境](/assets/images/enterprise/site-admin-settings/environment.png)
7. [**Script**] の下で、[**Select hook repository**]ドロップダウンメニューから、pre-receive フックスクリプトを含むリポジトリを選択してください。 **Select file（ファイルの選択）**ドロップダウンメニューから、pre-receiveフックスクリプトのファイル名を選択してください。 ![フックスクリプト](/assets/images/enterprise/site-admin-settings/hook-script.png)
8. スクリプトを強制するには**Use the exit-status to accept or reject pushes（プッシュを受け入れるか拒否するかを終了ステータスで決める）**を選択してください。 このオプションの選択を外すと、終了ステータスの値が無視され、スクリプトをテストできるようになります。 このモードでは、スクリプトの出力はコマンドラインでユーザに見えますが、Web インターフェースには表示されません。 ![exit-status の利用](/assets/images/enterprise/site-admin-settings/use-exit-status.png)
9. pre-receiveフックをすべてのリポジトリで実行したい場合は、**Enable this pre-receive hook on all repositories by default（デフォルトで全リポジトリ上でこのpre-receiveフックを有効化する）**を選択してください。 ![すべてのリポジトリでフックを有効化](/assets/images/enterprise/site-admin-settings/enable-hook-all-repos.png)
10. 管理者もしくはオーナー権限を持つOrganizationのメンバーがこのpre-receiveフックを有効化あるいは無効化できるようにしたい場合には、**Administrators can enable and disable this hook（管理者がこのフックを有効化及び無効化できるようにする）**を選択してください。 ![管理者によるフックの有効化もしくは無効化](/assets/images/enterprise/site-admin-settings/admins-enable-hook.png)

### pre-receiveフックの編集

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.hooks-tab %}
1. 編集したい pre-receive フックの隣の {% octicon "pencil" aria-label="The edit icon" %} をクリックします。 ![pre-receiveの編集](/assets/images/enterprise/site-admin-settings/edit-pre-receive-hook.png)

### pre-receiveフックの削除

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.hooks-tab %}
2. 削除したい pre-receive フックの隣の {% octicon "x" aria-label="X symbol" %} をクリックします。 ![pre-receiveの編集](/assets/images/enterprise/site-admin-settings/delete-pre-receive-hook.png)

### Organizationのためのpre-receiveフックの設定

Organizationの管理者がOrganizationのフックの権限を設定できるのは、サイト管理者がpre-receiveフックの作成時に**Administrators can enable or disable this hook（管理者がこのフックを有効化及び無効化できるようにする）**オプションを選択している場合のみです。 リポジトリのpre-receiveフックを設定するには、Organizationの管理者もしくはオーナーでなければなりません。

{% data reusables.profile.enterprise_access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
4. 左のサイトバーで**Hooks（フック）**をクリックしてください。 ![フックサイドバー](/assets/images/enterprise/orgs-and-teams/hooks-sidebar.png)
5. 設定したいpre-receiveフックの隣の**Hook permissions（フックの権限）**ドロップダウンメニューをクリックしてください。 pre-receiveフックの有効化もしくは無効化を選択するか、リポジトリ管理者による設定を許可してください。 ![フックの権限](/assets/images/enterprise/orgs-and-teams/hook-permissions.png)

### リポジトリのためのpre-receiveフックの設定

サイト管理者がpre-receiveフックの作成時に**Administrators can enable or disable this hook（管理者がこのフックを有効化及び無効化できるようにする）**オプションを選択している場合にのみ、リポジトリのオーナーがフックを設定できます。 Organizationで、Organizationのオーナーは**Configurable（設定可能）** フック権限を選択している必要もあります。 リポジトリのpre-receiveフックを設定するには、リポジトリのオーナーでなければなりません。

{% data reusables.profile.enterprise_access_profile %}
2. **Repositories（リポジトリ）**をクリックし、pre-receiveフックを設定したいリポジトリを選択してください。 ![リポジトリ](/assets/images/enterprise/repos/repositories.png)
{% data reusables.repositories.sidebar-settings %}
4. 左のサイドバーで、**Hooks & Services（フックとサービス）**をクリックしてください。 ![フックとサービス](/assets/images/enterprise/repos/hooks-services.png)
5. 設定したいpre-receiveフックの隣の**Hook permissions（フックの権限）**ドロップダウンメニューをクリックしてください。 pre-receiveフックを有効化するか無効化するかを選択してください。 ![リポジトリのフックの権限](/assets/images/enterprise/repos/repo-hook-permissions.png)
