---
title: Como restringir o tráfego de rede para sua empresa com uma lista de permissões de IP
shortTitle: Restricting network traffic
intro: Você pode restringir o acesso à sua empresa e permitir o acesso aos seus recursos apenas de endereços IP especificados usando uma lista de permissões de IP.
permissions: Enterprise owners can configure IP allow lists.
miniTocMaxHeadingLevel: 3
versions:
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Access management
  - Enterprise
  - Fundamentals
  - Networking
  - Security
redirect_from:
  - /admin/configuration/restricting-network-traffic-to-your-enterprise
  - /admin/configuration/configuring-your-enterprise/restricting-network-traffic-to-your-enterprise
ms.openlocfilehash: 8511499e723fdeb4a2d24c2fce627bce56ad9777
ms.sourcegitcommit: 9af8891fea10039b3374c76818634e05410e349d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 12/06/2022
ms.locfileid: '148191891'
---
## Sobre as restrições de tráfego de rede

Por padrão, os usuários autorizados podem acessar sua empresa a partir de qualquer endereço IP. Você pode restringir o acesso a recursos {% ifversion ghec %}pertencentes a organizações em uma conta corporativa {% endif %}configurando uma lista de permissões para endereços IP específicos. {% data reusables.identity-and-permissions.ip-allow-lists-example-and-restrictions %}

{% ifversion ghec %}

Se a sua empresa usa {% data variables.product.prodname_emus %} com o Azure AD e o OIDC, você pode escolher se deseja adotar o recurso de lista de permissões de IP do {% data variables.product.company_short %} ou as restrições da lista de permissões do seu IdP (provedor de identidade). Se a sua empresa não usa {% data variables.product.prodname_emus %} com o Azure AD e OIDC, você pode adotar o recurso de lista de permissões do {% data variables.product.company_short %}. 

{% elsif ghae %}

Por padrão, as regras do grupo de segurança de rede do Azure (NSG) deixam todo o tráfego de entrada aberto nas portas 22, 80, 443 e 25. Você pode entrar em contato com o {% data variables.contact.github_support %} para configurar restrições de acesso ao {% data variables.product.product_name %}.

Para restrições no uso do Azure NSGs, entre em contato com o {% data variables.contact.github_support %} com os endereços IP que têm permissão para acessar o {% data variables.product.product_name %}. Especifica os intervalos de endereços usando o formato CIDR padrão (Encaminhamento sem Classe entre Domínios). O {% data variables.contact.github_support %} vai configurar as regras de firewall apropriadas para restringir o acesso à rede por meio de HTTP, SSH, HTTPS e SMTP. Para obter mais informações, confira "[Como receber ajuda do {% data variables.contact.github_support %}](/admin/enterprise-support/receiving-help-from-github-support)".

{% endif %}

{% ifversion ghec %}

## Sobre a lista de permissões de IP do {% data variables.product.company_short %}

Você pode usar a lista de permissões de IP do {% data variables.product.company_short %} para controlar o acesso à sua empresa e a ativos pertencentes a organizações da sua empresa. 

{% data reusables.identity-and-permissions.ip-allow-lists-cidr-notation %} 

{% data reusables.identity-and-permissions.ip-allow-lists-enable %} {% data reusables.identity-and-permissions.ip-allow-lists-enterprise %} 

## Sobre a lista de permissões do seu IdP

Se estiver usando o {% data variables.product.prodname_emus %} com o Azure AD e OIDC, você poderá usar a lista de permissões do seu IdP.

O uso da lista de permissões do seu IdP desativa as configurações da lista de permissões de IP do {% data variables.product.company_short %} para todas as organizações da sua empresa e desativa as APIs do GraphQL para habilitar e gerenciar as listas de permissões de IP. 

Por padrão, o IdP executa a CAP na entrada inicial interativa do SAML ou do OIDC no {% data variables.product.company_short %} para qualquer configuração de lista de permissões de IP escolhida.

A CAP do OIDC só se aplica a solicitações à API usando um token de usuário para servidor, como um token para um {% data variables.product.prodname_oauth_app %} ou um {% data variables.product.prodname_github_app %} atuando em nome de um usuário. A CAP do OIDC não se aplica quando um {% data variables.product.prodname_github_app %} usa um token de servidor para servidor. Para obter mais informações, confira "[Como se autenticar com {% data variables.product.prodname_github_apps %}](/developers/apps/building-github-apps/authenticating-with-github-apps#authenticating-as-an-installation)" e "[Sobre o suporte para a Política de Acesso Condicional de IdPs](/enterprise-cloud@latest/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-support-for-your-idps-conditional-access-policy#github-apps-and-oauth-apps)".

Para garantir o uso contínuo da CAP do OIDC enquanto ainda aplica a política a tokens de usuário para servidor, você deve copiar todos os intervalos de IP de cada {% data variables.product.prodname_github_app %} que sua empresa usa na política do IdP. 

## Como usar a lista de permissões de IP do {% data variables.product.company_short %}

### Como habilitar a lista de permissões de IP do {% data variables.product.company_short %}
{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security %}
1. Em "Lista de permissões de IP", habilite a lista de permissões de IP. 
   - Se você estiver usando o {% data variables.product.prodname_emus %} com o OIDC, selecione o menu suspenso e clique em **GitHub**.
      ![Captura de tela do menu suspenso mostrando três opções de configuração da lista de permissões de IP: Desabilitada, Provedor de Identidade e GitHub](/assets/images/help/security/enable-github-ip-allow-list.png)
   
      Selecione **Habilitar lista de permissões de IP**.
      ![Captura de tela da caixa de seleção para permitir endereços IP](/assets/images/help/security/enable-ip-allow-list-ghec.png)

   - Se você não estiver usando o {% data variables.product.prodname_emus %} com o OIDC, selecione **Habilitar lista de permissões de IP**.
     ![Captura de tela da caixa de seleção para permitir endereços IP](/assets/images/help/security/enable-ip-allowlist-enterprise-checkbox.png)
1. Clique em **Salvar**.

### Adicionar endereços IP permitidos

{% data reusables.identity-and-permissions.about-adding-ip-allow-list-entries %}

{% data reusables.identity-and-permissions.ipv6-allow-lists %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %} {% data reusables.identity-and-permissions.ip-allow-lists-add-ip %} {% data reusables.identity-and-permissions.ip-allow-lists-add-description %} {% data reusables.identity-and-permissions.ip-allow-lists-add-entry %} {% data reusables.identity-and-permissions.check-ip-address %}

### Permitindo acesso de {% data variables.product.prodname_github_apps %}

{% data reusables.identity-and-permissions.ip-allow-lists-githubapps-enterprise %}

### Editar endereços IP permitidos

{% data reusables.identity-and-permissions.about-editing-ip-allow-list-entries %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %} {% data reusables.identity-and-permissions.ip-allow-lists-edit-entry %} {% data reusables.identity-and-permissions.ip-allow-lists-edit-ip %} {% data reusables.identity-and-permissions.ip-allow-lists-edit-description %}
8. Clique em **Atualizar**.
{% data reusables.identity-and-permissions.check-ip-address %}

### Verificando se um endereço IP é permitido

{% data reusables.identity-and-permissions.about-checking-ip-address %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %} {% data reusables.identity-and-permissions.check-ip-address-step %}

### Excluir endereços IP permitidos

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %} {% data reusables.identity-and-permissions.ip-allow-lists-delete-entry %} {% data reusables.identity-and-permissions.ip-allow-lists-confirm-deletion %}

## Como usar a lista de permissões do seu provedor de identidade

{% note %}

**Nota:** o uso da lista de permissões do IdP só tem suporte para {% data variables.product.prodname_emus %} com Azure AD e OIDC. 

{% endnote %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security %}
1. Em "Lista de permissões de IP", selecione o menu suspenso e clique em **Provedor de Identidade**.

   ![Captura de tela do menu suspenso mostrando três opções de configuração da lista de permissões de IP: Desabilitada, Provedor de Identidade e GitHub](/assets/images/help/security/enable-identity-provider-ip-allow-list.png)
1. Como alternativa, para permitir que os {% data variables.product.company_short %} e {% data variables.product.prodname_oauth_apps %} acessem sua empresa de qualquer endereço IP, selecione **Ignorar a verificação do IdP nos aplicativos**.

   ![Caixa de seleção usada para permitir endereços IP](/assets/images/help/security/ip-allow-list-skip-idp-check.png)
1. Clique em **Salvar**.

{% endif %}

{% ifversion ghae %}

## Habilitar endereços IP permitidos

{% data reusables.identity-and-permissions.about-enabling-allowed-ip-addresses %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %}
1. Em "Lista de IPs permitidos", selecione **Habilitar a lista de IPs permitidos**.
  ![Caixa de seleção usada para permitir endereços IP](/assets/images/help/security/enable-ip-allowlist-enterprise-checkbox.png)
4. Clique em **Salvar**.

## Adicionar endereços IP permitidos

{% data reusables.identity-and-permissions.about-adding-ip-allow-list-entries %} {% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %} {% data reusables.identity-and-permissions.ip-allow-lists-add-ip %} {% data reusables.identity-and-permissions.ip-allow-lists-add-description %} {% data reusables.identity-and-permissions.ip-allow-lists-add-entry %} {% data reusables.identity-and-permissions.check-ip-address %}

## Permitindo acesso de {% data variables.product.prodname_github_apps %}

{% data reusables.identity-and-permissions.ip-allow-lists-githubapps-enterprise %}

## Editar endereços IP permitidos

{% data reusables.identity-and-permissions.about-editing-ip-allow-list-entries %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %} {% data reusables.identity-and-permissions.ip-allow-lists-edit-entry %} {% data reusables.identity-and-permissions.ip-allow-lists-edit-ip %} {% data reusables.identity-and-permissions.ip-allow-lists-edit-description %}
8. Clique em **Atualizar**.
{% data reusables.identity-and-permissions.check-ip-address %}

## Verificando se um endereço IP é permitido

{% data reusables.identity-and-permissions.about-checking-ip-address %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %} {% data reusables.identity-and-permissions.check-ip-address-step %}

## Excluir endereços IP permitidos

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %} {% data reusables.identity-and-permissions.ip-allow-lists-delete-entry %} {% data reusables.identity-and-permissions.ip-allow-lists-confirm-deletion %}

{% endif %}

## Usar {% data variables.product.prodname_actions %} com uma lista endereços IP permitidos

{% data reusables.actions.ip-allow-list-self-hosted-runners %}
