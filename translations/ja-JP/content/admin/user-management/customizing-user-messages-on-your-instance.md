---
title: インスタンス上でのユーザメッセージをカスタマイズする
redirect_from:
  - /enterprise/admin/user-management/creating-a-custom-sign-in-message/
  - /enterprise/admin/user-management/customizing-user-messages-on-your-instance
intro: 'サインインおよびサインアウトページ {% if currentVersion ver_gt "enterprise-server@2.21" %}、またはすべてのページの上部にあるアナウンスバナーでユーザに表示されるカスタムメッセージを作成できます{% endif %}。'
versions:
  enterprise-server: '*'
---

メッセージの書式設定には Markdown を使用できます。 詳しい情報については、「[{% data variables.product.prodname_dotcom %}での執筆とフォーマットについて](/articles/about-writing-and-formatting-on-github/)」を参照してください。

{% note %}

**メモ:** 認証に SAML を使っている場合は、サインインページはアイデンティティプロバイダによって提示されるため、{% data variables.product.prodname_ghe_server %} でカスタマイズすることはできません。

{% endnote %}

### カスタムサインインメッセージの作成

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.messages-tab %}
5. [Sign in page] の下で [**Add message**] または [**Edit message**] をクリックします。 ![[Edit message] ボタン](/assets/images/enterprise/site-admin-settings/edit-message.png)
6. [**Sign in message**] の下に、ユーザに見せたいメッセージを入力します。 ![サインインメッセージ](/assets/images/enterprise/site-admin-settings/sign-in-message.png)
{% data reusables.enterprise_site_admin_settings.click-preview %}
  ![プレビューボタン](/assets/images/enterprise/site-admin-settings/sign-in-message-preview-button.png)
8. 表示されたメッセージを確認します。 ![サインインメッセージの表示](/assets/images/enterprise/site-admin-settings/sign-in-message-rendered.png)
{% data reusables.enterprise_site_admin_settings.save-changes %}

### カスタムサインアウトメッセージを作成する

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.messages-tab %}
5. [Sign out page] の下で [**Add message**] または [**Edit message**] をクリックします。 ![[Add message] ボタン](/assets/images/enterprise/site-admin-settings/sign-out-add-message-button.png)
6. [**Sign out message**] の下に、ユーザに見せたいメッセージを入力します。 ![サイン two_factor_auth_header メッセージ](/assets/images/enterprise/site-admin-settings/sign-out-message.png)
{% data reusables.enterprise_site_admin_settings.click-preview %}
  ![プレビューボタン](/assets/images/enterprise/site-admin-settings/sign-out-message-preview-button.png)
8. 表示されたメッセージを確認します。 ![サインアウトメッセージの表示](/assets/images/enterprise/site-admin-settings/sign-out-message-rendered.png)
{% data reusables.enterprise_site_admin_settings.save-changes %}

{% if currentVersion ver_gt "enterprise-server@2.21" %}
### Creating a global announcement banner

You can set a global announcement banner to be displayed to all users at the top of every page.

You can also set an announcement banner in the administrative shell using a command line utility. For more information, see "[Command-line utilities](/enterprise/admin/configuration/command-line-utilities#ghe-announce)."

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.messages-tab %}
1. [Sign out page] の下で [**Add message**] または [**Edit message**] をクリックします。 ![[Add message] ボタン](/assets/images/enterprise/site-admin-settings/add-announcement-button.png)
1. Under "Announcement", in the text field, type the announcement you want displayed in a banner. ![Text field to enter announcement](/assets/images/enterprise/site-admin-settings/announcement-text-field.png)
1. Optionally, under "Expires on", use the calendar drop-down menu, and select an expiration date. ![Calendar drop-down menu to choose expiration date](/assets/images/enterprise/site-admin-settings/expiration-drop-down.png)
1. [Sign in page] の下で [**Add message**] または [**Edit message**] をクリックします。 ![プレビューボタン](/assets/images/enterprise/site-admin-settings/preview-announcement-button.png)
1. [**Save changes**] をクリックします。 ![[Edit message] ボタン](/assets/images/enterprise/site-admin-settings/save-announcement-button.png)
{% endif %}
