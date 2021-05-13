---
title: Enterprise のユーザメッセージをカスタマイズする
redirect_from:
  - /enterprise/admin/user-management/creating-a-custom-sign-in-message/
  - /enterprise/admin/user-management/customizing-user-messages-on-your-instance
  - /admin/user-management/customizing-user-messages-on-your-instance
intro: '{% data variables.product.product_location %} でユーザに表示されるカスタムメッセージを作成できます。'
versions:
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Enterprise
---

### ユーザメッセージについて

ユーザメッセージにはいくつかの種類があります。
- {% if enterpriseServerVersions contains currentVersion %}サインインまたは{% endif %}サインアウトページ{% if currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}に表示されるメッセージ
- ポップアップウィンドウに一度表示され、閉じる必要のある必須メッセージ{% endif %}{% if currentVersion ver_gt "enterprise-server@2.21" or currentVersion == "github-ae@latest" %}
- すべてのページの上部に表示されるアナウンスバナー{% endif %}

{% if enterpriseServerVersions contains currentVersion %}
{% note %}

**メモ:** 認証に SAML を使っている場合は、サインインページはアイデンティティプロバイダによって提示されるため、{% data variables.product.prodname_ghe_server %} でカスタマイズすることはできません。

{% endnote %}

メッセージの書式設定には Markdown を使用できます。 詳しい情報については、「[{% data variables.product.prodname_dotcom %}での執筆とフォーマットについて](/articles/about-writing-and-formatting-on-github/)」を参照してください。

### カスタムサインインメッセージの作成

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.messages-tab %}
5. {% if currentVersion ver_gt "enterprise-server@2.22" %}[Sign in page] の右側{% else %}下{% endif %}にある [**Add message**] または [**Edit message**] をクリックします。 ![{% if currentVersion ver_gt "enterprise-server@2.22" %}[Add]{% else %}[Edit]{% endif %} メッセージボタン](/assets/images/enterprise/site-admin-settings/edit-message.png)
6. [**Sign in message**] の下に、ユーザに見せたいメッセージを入力します。 ![Sign in message](/assets/images/enterprise/site-admin-settings/sign-in-message.png){% if currentVersion ver_gt "enterprise-server@2.22" %}
{% data reusables.enterprise_site_admin_settings.message-preview-save %}{% else %}
{% data reusables.enterprise_site_admin_settings.click-preview %}
  ![プレビューボタン](/assets/images/enterprise/site-admin-settings/sign-in-message-preview-button.png)
8. 表示されたメッセージを確認します。 ![サインインメッセージの表示](/assets/images/enterprise/site-admin-settings/sign-in-message-rendered.png)
{% data reusables.enterprise_site_admin_settings.save-changes %}{% endif %}
{% endif %}

### カスタムサインアウトメッセージを作成する

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.messages-tab %}
5. {% if currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}[Sign in page] の右側{% else %}下{% endif %}にある [**Add message**] または [**Edit message**] をクリックします。 ![[Add message] ボタン](/assets/images/enterprise/site-admin-settings/sign-out-add-message-button.png)
6. [**Sign out message**] の下に、ユーザに見せたいメッセージを入力します。 ![Sign two_factor_auth_header message](/assets/images/enterprise/site-admin-settings/sign-out-message.png){% if currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
{% data reusables.enterprise_site_admin_settings.message-preview-save %}{% else %}
{% data reusables.enterprise_site_admin_settings.click-preview %}
  ![プレビューボタン](/assets/images/enterprise/site-admin-settings/sign-out-message-preview-button.png)
8. 表示されたメッセージを確認します。 ![サインアウトメッセージの表示](/assets/images/enterprise/site-admin-settings/sign-out-message-rendered.png)
{% data reusables.enterprise_site_admin_settings.save-changes %}{% endif %}

{% if currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
### 必須メッセージを作成する

メッセージを保存した後に初めてサインインしたときに、すべてのユーザに表示される必須メッセージを {% data variables.product.product_name %} で作成できます。 メッセージはポップアップウィンドウ内に表示され、ユーザは {% data variables.product.product_location %} を使用する前に閉じる必要があります。

必須メッセージにはさまざまな用途があります。

- 新入社員にオンボーディング情報を提供する
- {% data variables.product.product_location %} のヘルプの取得方法をユーザに伝える
- すべてのユーザが {% data variables.product.product_location %} を使用時の利用規約を確実に読むようにする

メッセージに Markdown チェックボックスを含める場合、ユーザがメッセージを閉じる前に、すべてのチェックボックスを選択する必要があります。 たとえば、必須メッセージに利用規約を含める場合、各ユーザにチェックボックスを選択して、ユーザが利用規約を読んだことを確認するように要求できます。

ユーザに必須メッセージが表示されるたびに、監査ログイベントが作成されます。 イベントには、ユーザが表示したメッセージのバージョンが含まれます。 詳しい情報については、「[監査されたアクション](/admin/user-management/audited-actions)」を参照してください。

{% note %}

**Note:** If you change the mandatory message for {% data variables.product.product_location %}, users who have already acknowledged the message will not see the new message.

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.messages-tab %}
1. [Mandatory message] の右側にある [**Add message**] をクリックします。 ![[Add message] ボタン](/assets/images/enterprise/site-admin-settings/add-mandatory-message-button.png)
1. [Mandatory message] の下のテキストボックスに、メッセージを入力します。 ![[Add message] ボタン](/assets/images/enterprise/site-admin-settings/mandatory-message-text-box.png)
{% data reusables.enterprise_site_admin_settings.message-preview-save %}

{% endif %}

{% if currentVersion ver_gt "enterprise-server@2.21" or currentVersion == "github-ae@latest" %}
### グローバルアナウンスバナーを作成する

各ページの上部にグローバルアナウンスバナーを設定し、すべてのユーザに対して表示できます。

{% if currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
コマンドラインユーティリティまたは API を使用して、
{% endif %} 管理シェルでアナウンスバナー {% if enterpriseServerVersions contains currentVersion %} を設定することもできます。 詳しい情報については、{% if enterpriseServerVersions contains currentVersion %}「[コマンドラインユーティリティ](/enterprise/admin/configuration/command-line-utilities#ghe-announce)」および{% endif %}「[{% data variables.product.prodname_enterprise %} 管理](/rest/reference/enterprise-admin#announcements)」を参照してください。
{% else %}

コマンドラインユーティリティを使用して、管理シェルでアナウンスバナーを設定することもできます。 詳しい情報については、「[コマンドラインユーティリティ](/enterprise/admin/configuration/command-line-utilities#ghe-announce)」を参照してください。

{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.messages-tab %}
1. {% if currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}[Announcement] の右側{% else %}下{% endif %}にある [**Add announcement**] をクリックします。 ![[Add message] ボタン](/assets/images/enterprise/site-admin-settings/add-announcement-button.png)
1. [Announcement] のテキストフィールドに、バナーに表示するお知らせを入力します。 ![アナウンスを入力するテキストフィールド](/assets/images/enterprise/site-admin-settings/announcement-text-field.png)
1. 必要に応じて、[Expires on] でカレンダーのドロップダウンメニューを選択し、有効期限をクリックします。 ![有効期限を選択するためのカレンダードロップダウンメニュー](/assets/images/enterprise/site-admin-settings/expiration-drop-down.png)
{% data reusables.enterprise_site_admin_settings.message-preview-save %}
{% endif %}
