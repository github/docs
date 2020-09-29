---
title: Gerenciar endereços IP permitidos para sua organização
intro: Você pode restringir o acesso aos ativos da sua organização configurando uma lista de endereços IP autorizados a se conectar.
product: '{% data reusables.gated-features.allowed-ip-addresses %}'
versions:
  free-pro-team: '*'
---

Os proprietários da organização podem gerenciar endereços IP permitidos para uma organização.

### Sobre endereços IP permitidos

Você pode restringir o acesso a ativos da organização configurando uma lista de permissões para endereços IP específicos. {% data reusables.identity-and-permissions.ip-allow-lists-example-and-restrictions %}

{% data reusables.identity-and-permissions.ip-allow-lists-cidr-notation %}

{% data reusables.identity-and-permissions.ip-allow-lists-enable %}

Você também pode configurar endereços IP permitidos para as organizações em uma conta corporativa. Para obter mais informações, consulte "[Aplicar as configurações de segurança na conta corporativa](/github/setting-up-and-managing-your-enterprise-account/enforcing-security-settings-in-your-enterprise-account#managing-allowed-ip-addresses-for-organizations-in-your-enterprise-account)".

### Adicionar endereços IP permitidos

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.security %}
{% data reusables.identity-and-permissions.ip-allow-lists-add-ip %}
{% data reusables.identity-and-permissions.ip-allow-lists-add-description %}
{% data reusables.identity-and-permissions.ip-allow-lists-add-entry %}

### Habilitar endereços IP permitidos

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.security %}
3. Em "IP allow list" (Lista de permissões IP), selecione **Enable IP allow list** (Habilitar lista de permissões IP). ![Caixa de seleção para permitir endereços IP](/assets/images/help/security/enable-ip-allowlist-organization-checkbox.png)
4. Clique em **Salvar**.

### Editar endereços IP permitidos

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.security %}
{% data reusables.identity-and-permissions.ip-allow-lists-edit-entry %}
{% data reusables.identity-and-permissions.ip-allow-lists-edit-ip %}
{% data reusables.identity-and-permissions.ip-allow-lists-edit-description %}
8. Clique em **Atualizar**.

### Excluir endereços IP permitidos

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.security %}
{% data reusables.identity-and-permissions.ip-allow-lists-delete-entry %}
{% data reusables.identity-and-permissions.ip-allow-lists-confirm-deletion %}

### Usar {% data variables.product.prodname_actions %} com uma lista endereços IP permitidos

{% data reusables.github-actions.ip-allow-list-self-hosted-runners %}
