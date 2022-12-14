---
title: Gerenciar endereços IP permitidos para sua organização
intro: Você pode restringir o acesso aos ativos privados da sua organização configurando uma lista de endereços IP autorizados a se conectar.
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/managing-allowed-ip-addresses-for-your-organization
  - /organizations/keeping-your-organization-secure/managing-allowed-ip-addresses-for-your-organization
versions:
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Manage allowed IP addresses
permissions: Organization owners can manage allowed IP addresses for an organization.
ms.openlocfilehash: f0484aae26b5acb8bac07c7b002af2d623d7dfef
ms.sourcegitcommit: 7a74d5796695bb21c30e4031679253cbc16ceaea
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/28/2022
ms.locfileid: '148184025'
---
## Sobre endereços IP permitidos

Você pode restringir o acesso a ativos privados da organização configurando uma lista de permissões para endereços IP específicos. {% data reusables.identity-and-permissions.ip-allow-lists-example-and-restrictions %}

{% ifversion ghec %} {% note %}

**Observação:** somente as organizações que usam o {% data variables.product.prodname_ghe_cloud %} podem usar listas de IPs permitidos. {% data reusables.enterprise.link-to-ghec-trial %}

{% endnote %} {% endif %}

{% data reusables.identity-and-permissions.ip-allow-lists-cidr-notation %}

{% data reusables.identity-and-permissions.ip-allow-lists-enable %}

Se você configurar uma lista de permissões, você também poderá optar por adicionar automaticamente à sua lista de permissões todos os endereços IP configurados em {% data variables.product.prodname_github_apps %} que você instalar na sua organização. O criador de um {% data variables.product.prodname_github_app %} pode configurar uma lista de permissões para o seu aplicativo, especificando os endereços IP em que o aplicativo é executado. Ao herdar a lista de permissões deles para a sua lista, você evita as solicitações de conexão do aplicativo que está sendo recusado. Para obter mais informações, confira "[Como permitir o acesso pelos {% data variables.product.prodname_github_apps %}](#allowing-access-by-github-apps)".

Você também pode configurar endereços IP permitidos no nível da conta corporativa, e as entradas na lista de permissões da conta corporativa são herdadas por todas as organizações pertencentes à empresa. {% data reusables.identity-and-permissions.org-enterprise-allow-list-interaction %} Para obter mais informações, confira "[Aplicar políticas para configurações de segurança de sua empresa](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-allowed-ip-addresses-for-organizations-in-your-enterprise)".

## Adicionar endereços IP permitidos

{% data reusables.identity-and-permissions.about-adding-ip-allow-list-entries %}

{% data reusables.identity-and-permissions.ipv6-allow-lists %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security %} {% data reusables.identity-and-permissions.ip-allow-lists-add-ip %} {% data reusables.identity-and-permissions.ip-allow-lists-add-description %} {% data reusables.identity-and-permissions.ip-allow-lists-add-entry %} {% data reusables.identity-and-permissions.check-ip-address %}

## Habilitar endereços IP permitidos

{% data reusables.identity-and-permissions.about-enabling-allowed-ip-addresses %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security %}
1. Em "Lista de IPs permitidos", selecione **Habilitar a lista de IPs permitidos**.
  ![Caixa de seleção usada para permitir endereços IP](/assets/images/help/security/enable-ip-allowlist-organization-checkbox.png)
1. Clique em **Salvar**.

## Permitindo acesso de {% data variables.product.prodname_github_apps %}

Se você estiver usando uma lista de permissão, você também pode optar por adicionar automaticamente à sua lista de permissões todos os endereços IP configurados em {% data variables.product.prodname_github_apps %} que você instalar na sua organização. 

{% data reusables.identity-and-permissions.ip-allow-lists-address-inheritance %}

{% data reusables.apps.ip-allow-list-only-apps %}

Para obter mais informações sobre como criar uma lista de permissões para um {% data variables.product.prodname_github_app %} criado por você, confira "[Como gerenciar os endereços IP permitidos para um Aplicativo do GitHub](/developers/apps/building-github-apps/managing-allowed-ip-addresses-for-a-github-app)".

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security %}
1. Em "Lista de IPs permitidos", selecione **Habilitar configuração da lista de IPs permitidos para Aplicativos do GitHub instalados**.
  ![Caixa de seleção usada para permitir endereços IP do Aplicativo do GitHub](/assets/images/help/security/enable-ip-allowlist-githubapps-checkbox.png)
1. Clique em **Salvar**.

## Editar endereços IP permitidos

{% data reusables.identity-and-permissions.about-editing-ip-allow-list-entries %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security %} {% data reusables.identity-and-permissions.ip-allow-lists-edit-entry %} {% data reusables.identity-and-permissions.ip-allow-lists-edit-ip %} {% data reusables.identity-and-permissions.ip-allow-lists-edit-description %}
1. Clique em **Atualizar**.
{% data reusables.identity-and-permissions.check-ip-address %}

## Verificando se um endereço IP é permitido

{% data reusables.identity-and-permissions.about-checking-ip-address %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security %} {% data reusables.identity-and-permissions.check-ip-address-step %}

## Excluir endereços IP permitidos

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security %} {% data reusables.identity-and-permissions.ip-allow-lists-delete-entry %} {% data reusables.identity-and-permissions.ip-allow-lists-confirm-deletion %}

## Usar {% data variables.product.prodname_actions %} com uma lista endereços IP permitidos

{% data reusables.actions.ip-allow-list-self-hosted-runners %}
