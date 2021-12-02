---
title: Gerenciar endereços IP permitidos para sua organização
intro: Você pode restringir o acesso aos ativos da sua organização configurando uma lista de endereços IP autorizados a se conectar.
product: '{% data reusables.gated-features.allowed-ip-addresses %}'
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/managing-allowed-ip-addresses-for-your-organization
versions:
  fpt: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Gerenciar endereços IP permitidos
---

Os proprietários da organização podem gerenciar endereços IP permitidos para uma organização.

## Sobre endereços IP permitidos

Você pode restringir o acesso a ativos da organização configurando uma lista de permissões para endereços IP específicos. {% data reusables.identity-and-permissions.ip-allow-lists-example-and-restrictions %}

{% data reusables.identity-and-permissions.ip-allow-lists-cidr-notation %}

{% data reusables.identity-and-permissions.ip-allow-lists-enable %}

Se você configurar uma lista de permissões, você também poderá optar por adicionar automaticamente à sua lista de permissões todos os endereços IP configurados em {% data variables.product.prodname_github_apps %} que você instalar na sua organização. O criador de um {% data variables.product.prodname_github_app %} pode configurar uma lista de permissões para o seu aplicativo, especificando os endereços IP em que o aplicativo é executado. Ao herdar a lista de permissões deles para a sua lista, você evita as solicitações de conexão do aplicativo que está sendo recusado. Para obter mais informações, consulte "[Permitir acesso por {% data variables.product.prodname_github_apps %}](#allowing-access-by-github-apps)".

Você também pode configurar endereços IP permitidos para as organizações em uma conta corporativa. For more information, see "[Enforcing policies for security settings in your enterprise](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise)."

## Adicionar endereços IP permitidos

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.security %}
{% data reusables.identity-and-permissions.ip-allow-lists-add-ip %}
{% data reusables.identity-and-permissions.ip-allow-lists-add-description %}
{% data reusables.identity-and-permissions.ip-allow-lists-add-entry %}

## Habilitar endereços IP permitidos

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.security %}
1. Em "IP allow list" (Lista de permissões IP), selecione **Enable IP allow list** (Habilitar lista de permissões IP). ![Caixa de seleção para permitir endereços IP](/assets/images/help/security/enable-ip-allowlist-organization-checkbox.png)
1. Clique em **Salvar**.

## Permitindo acesso de {% data variables.product.prodname_github_apps %}

Se você estiver usando uma lista de permissão, você também pode optar por adicionar automaticamente à sua lista de permissões todos os endereços IP configurados em {% data variables.product.prodname_github_apps %} que você instalar na sua organização.

{% data reusables.identity-and-permissions.ip-allow-lists-address-inheritance %}

{% data reusables.apps.ip-allow-list-only-apps %}

Para mais informações sobre como criar uma lista de permissões para uma {% data variables.product.prodname_github_app %} que você criou, consulte "[Gerenciar endereços IP permitidos para um aplicativo GitHub](/developers/apps/building-github-apps/managing-allowed-ip-addresses-for-a-github-app)".

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.security %}
1. Em "Lista de permissão do IP", selecione **Habilitar o IP para a configuração da lista de aplicativos instalados no GitHub**. ![Caixa de seleção para permitir endereços IP do aplicativo GitHub](/assets/images/help/security/enable-ip-allowlist-githubapps-checkbox.png)
1. Clique em **Salvar**.

## Editar endereços IP permitidos

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.security %}
{% data reusables.identity-and-permissions.ip-allow-lists-edit-entry %}
{% data reusables.identity-and-permissions.ip-allow-lists-edit-ip %}
{% data reusables.identity-and-permissions.ip-allow-lists-edit-description %}
1. Clique em **Atualizar**.

## Excluir endereços IP permitidos

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.security %}
{% data reusables.identity-and-permissions.ip-allow-lists-delete-entry %}
{% data reusables.identity-and-permissions.ip-allow-lists-confirm-deletion %}

## Usar {% data variables.product.prodname_actions %} com uma lista endereços IP permitidos

{% ifversion ghae %}

{% data reusables.github-actions.ip-allow-list-hosted-runners %}

{% else %}

{% data reusables.github-actions.ip-allow-list-self-hosted-runners %}

{% endif %}
