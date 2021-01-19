---
title: Personalizar mensagens de usuário para sua empresa
redirect_from:
  - /enterprise/admin/user-management/creating-a-custom-sign-in-message/
  - /enterprise/admin/user-management/customizing-user-messages-on-your-instance
  - /admin/user-management/customizing-user-messages-on-your-instance
intro: 'You can create custom messages that users will see on {% data variables.product.product_location %}.'
versions:
  enterprise-server: '*'
  github-ae: '*'
---

### About user messages

There are several types of user messages.
- Messages that appear on the {% if enterpriseServerVersions contains currentVersion %}sign in or {% endif %}sign out page{% if currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
- Mandatory messages, which appear once in a pop-up window that must be dismissed{% endif %}{% if currentVersion ver_gt "enterprise-server@2.21" or currentVersion == "github-ae@latest" %}
- Announcement banners, which appear at the top of every page{% endif %}

{% if enterpriseServerVersions contains currentVersion %}
{% note %}

**Observação:** se você estiver usando SAML para fazer autenticação, a página de login será apresentada pelo seu provedor de identidade e não será possível personalizá-la pelo {% data variables.product.prodname_ghe_server %}.

{% endnote %}

Você pode usar markdown para formatar sua mensagem. Para obter mais informações, consulte "[Sobre gravação e formatação no {% data variables.product.prodname_dotcom %}](/articles/about-writing-and-formatting-on-github/)".

### Criar mensagem personalizada de login

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.messages-tab %}
5. {% if currentVersion ver_gt "enterprise-server@2.22" %}To the right of{% else %}Under{% endif %} "Sign in page", click **Add message** or **Edit message**. ![{% if currentVersion ver_gt "enterprise-server@2.22" %}Add{% else %}Edit{% endif %} message button](/assets/images/enterprise/site-admin-settings/edit-message.png)
6. Em **Sign in message** (Mensagem de login), digite a mensagem que você pretende exibir para os usuários. ![Sign in message](/assets/images/enterprise/site-admin-settings/sign-in-message.png){% if currentVersion ver_gt "enterprise-server@2.22" %}
{% data reusables.enterprise_site_admin_settings.message-preview-save %}{% else %}
{% data reusables.enterprise_site_admin_settings.click-preview %}
  ![Botão Preview (Visualizar)](/assets/images/enterprise/site-admin-settings/sign-in-message-preview-button.png)
8. Revise a mensagem renderizada. ![Mensagem de login renderizada](/assets/images/enterprise/site-admin-settings/sign-in-message-rendered.png)
{% data reusables.enterprise_site_admin_settings.save-changes %}{% endif %}
{% endif %}

### Criar mensagem personalizada de logout

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.messages-tab %}
5. {% if currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}To the right of{% else %}Under{% endif %} "Sign out page", click **Add message** or **Edit message**. ![Botão Add message (Adicionar mensagem)](/assets/images/enterprise/site-admin-settings/sign-out-add-message-button.png)
6. Em **Sign out message** (Mensagem de logout), digite a mensagem que você pretende exibir para os usuários. ![Sign two_factor_auth_header message](/assets/images/enterprise/site-admin-settings/sign-out-message.png){% if currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
{% data reusables.enterprise_site_admin_settings.message-preview-save %}{% else %}
{% data reusables.enterprise_site_admin_settings.click-preview %}
  ![Botão Preview (Visualizar)](/assets/images/enterprise/site-admin-settings/sign-out-message-preview-button.png)
8. Revise a mensagem renderizada. ![Mensagem de logout renderizada](/assets/images/enterprise/site-admin-settings/sign-out-message-rendered.png)
{% data reusables.enterprise_site_admin_settings.save-changes %}{% endif %}

{% if currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
### Creating a mandatory message

You can create a mandatory message that {% data variables.product.product_name %} will show to all users the first time they sign in after you save the message. The message appears in a pop-up window that the user must dismiss before the user can use {% data variables.product.product_location %}. Mandatory messages have a variety of uses.

- Providing onboarding information for new employees
- Telling users how to get help with {% data variables.product.product_location %}
- Ensuring that all users read your terms of service for using {% data variables.product.product_location %}

If you include Markdown checkboxes in the message, all checkboxes must be selected before the user can dismiss the message. For example, if you include your terms of service in the mandatory message, you can require that each user selects a checkbox to confirm the user has read the terms.

Each time a user sees a mandatory message, an audit log event is created. The event includes the version of the message that the user saw. For more information see "[Audited actions](/admin/user-management/audited-actions)."

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.messages-tab %}
1. To the right of "Mandatory message", click **Add message**. ![Botão Add message (Adicionar mensagem)](/assets/images/enterprise/site-admin-settings/add-mandatory-message-button.png)
1. Under "Mandatory message", in the text box, type your message. ![Botão Add message (Adicionar mensagem)](/assets/images/enterprise/site-admin-settings/mandatory-message-text-box.png)
{% data reusables.enterprise_site_admin_settings.message-preview-save %}

{% endif %}

{% if currentVersion ver_gt "enterprise-server@2.21" or currentVersion == "github-ae@latest" %}
### Criar um banner de anúncio global

Você pode definir um banner de anúncio global para ser exibido para todos os usuários na parte superior de cada página.

{% if currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
You can also set an announcement banner
{% if enterpriseServerVersions contains currentVersion %} in the administrative shell using a command line utility or{% endif %} using the API. Para obter mais informações, consulte {% if enterpriseServerVersions contains currentVersion %}"[Utilitários de linha de comando](/enterprise/admin/configuration/command-line-utilities#ghe-announce)" e {% endif %}"[Administração de {% data variables.product.prodname_enterprise %}](/rest/reference/enterprise-admin#announcements)".
{% else %}

Você também pode definir um banner de anúncio no shell administrativo usando um utilitário de linha de comando. Para obter mais informações, consulte "[Utilitários de linha de comando](/enterprise/admin/configuration/command-line-utilities#ghe-announce)".

{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.messages-tab %}
1. {% if currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}To the right of{% else %}Under{% endif %} "Announcement", click **Add announcement**. ![Botão Add message (Adicionar mensagem)](/assets/images/enterprise/site-admin-settings/add-announcement-button.png)
1. Em "Anúncio", no campo de texto, digite o anúncio que deseja exibir em um banner. ![Campo de texto para digitar o anúncio](/assets/images/enterprise/site-admin-settings/announcement-text-field.png)
1. Optionally, under "Expires on", select the calendar drop-down menu and click an expiration date. ![Menu suspenso do calendário para escolher data de vencimento](/assets/images/enterprise/site-admin-settings/expiration-drop-down.png)
{% data reusables.enterprise_site_admin_settings.message-preview-save %}
{% endif %}
