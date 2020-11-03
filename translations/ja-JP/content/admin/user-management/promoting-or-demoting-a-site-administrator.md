---
title: サイト管理者の昇格あるいは降格
redirect_from:
  - /enterprise/admin/articles/promoting-a-site-administrator/
  - /enterprise/admin/articles/demoting-a-site-administrator/
  - /enterprise/admin/user-management/promoting-or-demoting-a-site-administrator
intro: 'サイト管理者は、任意の通常ユーザアカウントをサイト管理者に昇格させることや、他のサイト管理者を通常のユーザに降格させることができます。'
versions:
  enterprise-server: '*'
---

{% tip %}

**メモ:** [ユーザの LDAP アクセスの設定](/enterprise/{{ page.version }}/admin/guides/user-management/using-ldap#configuring-ldap-with-your-github-enterprise-server-instance)時に [LDAP Sync が有効](/enterprise/{{ page.version }}/admin/guides/user-management/using-ldap#enabling-ldap-sync)になっており、`Administrators group` 属性が設定されている場合、それらのユーザは自動的にインスタンスに対するサイト管理者アクセスを持つことになります。 この場合、以下のステップで手動でユーザを昇格させることはできません。ユーザを昇格させるにはLDAPの管理者グループに追加してください。

{% endtip %}

ユーザの Organization のオーナーへの昇格に関する情報については「[コマンドラインユーティリティ](/enterprise/{{ currentVersion }}/admin/guides/installation/command-line-utilities#ghe-org-admin-promote)」の `ghe-org-admin-promote` セクションを参照してください。

### Enterprise設定からユーザを昇格させる

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% data reusables.enterprise-accounts.people-tab %}
{% data reusables.enterprise-accounts.administrators-tab %}
5. ページの右上にある[**Add owner**] をクリックします。 ![管理者を追加するボタン](/assets/images/help/business-accounts/business-account-add-admin-button.png)
6. 検索フィールドでユーザ名を入力し、[**Add**] をクリックします。 ![管理者を追加するための検索フィールド](/assets/images/help/business-accounts/business-account-search-to-add-admin.png)

### Enterprise設定からサイト管理者を降格させる

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% data reusables.enterprise-accounts.people-tab %}
{% data reusables.enterprise-accounts.administrators-tab %}
1. ウィンドウの左上にある [Find an administrator] 検索フィールドに、降格させたい人物のユーザ名を入力します。 ![管理者を見つけるための検索フィールド](/assets/images/help/business-accounts/business-account-search-for-admin.png)

1. In the search results, find the username of the person you want to demote, then use the {% octicon "gear" %} drop-down menu, and select **Remove owner**. ![Enterprise から削除するオプション](/assets/images/help/business-accounts/demote-admin-button.png)

### コマンドラインからユーザを昇格させる

1. アプライアンスに [SSH](/enterprise/{{ currentVersion }}/admin/guides/installation/accessing-the-administrative-shell-ssh/) で接続してください。
2. [ghe-user-promote](/enterprise/{{ currentVersion }}/admin/guides/installation/command-line-utilities#ghe-user-promote) に昇格させたいユーザ名を渡して実行してください。
  ```shell
  $ ghe-user-promote <em>username</em>
  ```

### コマンドラインからサイト管理者を降格させる

1. アプライアンスに [SSH](/enterprise/{{ currentVersion }}/admin/guides/installation/accessing-the-administrative-shell-ssh/) で接続してください。
2. [ghe-user-demote](/enterprise/{{ currentVersion }}/admin/guides/installation/command-line-utilities#ghe-user-demote) に降格させたいユーザ名を渡して実行してください。
  ```shell
  $ ghe-user-demote <em>username</em>
  ```
