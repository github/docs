---
title: Personalizar mensagens de usuário na instância
redirect_from:
  - /enterprise/admin/user-management/creating-a-custom-sign-in-message/
  - /enterprise/admin/user-management/customizing-user-messages-on-your-instance
intro: 'É possível criar {% if currentVersion ver_gt "enterprise-server@2.15" %}mensagens personalizadas que os usuários verão nas páginas de entrada e saída{% else %}uma mensagem personalizada que os usuários verão na página de entrada{% endif %}.'
versions:
  enterprise-server: '*'
---

Você pode usar markdown para formatar sua mensagem. Para obter mais informações, consulte "[Sobre gravação e formatação no {% data variables.product.prodname_dotcom %}](/articles/about-writing-and-formatting-on-github/)".

{% note %}

**Observação:** se você estiver usando SAML para fazer autenticação, a página de login será apresentada pelo seu provedor de identidade e não será possível personalizá-la pelo {% data variables.product.prodname_ghe_server %}.

{% endnote %}

### Criar mensagem personalizada de login

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.messages-tab %}
5. Em "Sign in page" (Página de login), clique em **Add message** (Adicionar mensagem) ou **Edit message** (Editar mensagem). ![Botão Edit message (Editar mensagem)](/assets/images/enterprise/site-admin-settings/edit-message.png)
6. Em **Sign in message** (Mensagem de login), digite a mensagem que você pretende exibir para os usuários. ![Mensagem de login](/assets/images/enterprise/site-admin-settings/sign-in-message.png)
{% data reusables.enterprise_site_admin_settings.click-preview %}
  ![Botão Preview (Visualizar)](/assets/images/enterprise/site-admin-settings/sign-in-message-preview-button.png)
8. Revise a mensagem renderizada. ![Mensagem de login renderizada](/assets/images/enterprise/site-admin-settings/sign-in-message-rendered.png)
{% data reusables.enterprise_site_admin_settings.save-changes %}

### Criar mensagem personalizada de logout

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.messages-tab %}
5. Em "Sign out page" (Página de logout), clique em **Add message** (Adicionar mensagem) ou **Edit message** (Editar mensagem). ![Botão Add message (Adicionar mensagem)](/assets/images/enterprise/site-admin-settings/sign-out-add-message-button.png)
6. Em **Sign out message** (Mensagem de logout), digite a mensagem que você pretende exibir para os usuários. ![Mensagem de login two_factor_auth_header](/assets/images/enterprise/site-admin-settings/sign-out-message.png)
{% data reusables.enterprise_site_admin_settings.click-preview %}
  ![Botão Preview (Visualizar)](/assets/images/enterprise/site-admin-settings/sign-out-message-preview-button.png)
8. Revise a mensagem renderizada. ![Mensagem de logout renderizada](/assets/images/enterprise/site-admin-settings/sign-out-message-rendered.png)
{% data reusables.enterprise_site_admin_settings.save-changes %}

{% if currentVersion ver_gt "enterprise-server@2.21" %}
### Criar um banner de anúncio global

Você pode definir um banner de anúncio global para ser exibido para todos os usuários na parte superior de cada página.

Você também pode definir um banner de anúncio no shell administrativo usando um utilitário de linha de comando. Para obter mais informações, consulte "[Utilitários de linha de comando](/enterprise/admin/configuration/command-line-utilities#ghe-announce)".

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.messages-tab %}
1. Em "Sign in page" (Página de login), clique em **Add message** (Adicionar mensagem) ou **Edit message** (Editar mensagem). ![Botão Add message (Adicionar mensagem)](/assets/images/enterprise/site-admin-settings/add-announcement-button.png)
1. Em "Anúncio", no campo de texto, digite o anúncio que deseja exibir em um banner. ![Campo de texto para digitar o anúncio](/assets/images/enterprise/site-admin-settings/announcement-text-field.png)
1. Opcionalmente, em "Vence em", use o menu suspenso do calendário e selecione uma data de validade. ![Menu suspenso do calendário para escolher data de vencimento](/assets/images/enterprise/site-admin-settings/expiration-drop-down.png)
1. Opcionalmente, para ver como ficará o banner, clique em **Pré-visualizar**. ![Botão Preview (Visualizar)](/assets/images/enterprise/site-admin-settings/preview-announcement-button.png)
1. Clique em **Save changes** (Salvar alterações). ![Botão Edit message (Editar mensagem)](/assets/images/enterprise/site-admin-settings/save-announcement-button.png)
{% endif %}
