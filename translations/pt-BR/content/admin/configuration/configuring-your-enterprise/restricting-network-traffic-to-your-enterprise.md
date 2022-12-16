---
title: Restringir o tráfego de rede para a sua empresa
shortTitle: Restricting network traffic
intro: Você pode usar um IP permitir que a lista restrinja o acesso ao seu negócio a conexões a partir de endereços IP especificados.
versions:
  ghae: '*'
type: how_to
topics:
- Access management
- Enterprise
- Fundamentals
- Networking
- Security
redirect_from:
- /admin/configuration/restricting-network-traffic-to-your-enterprise
ms.openlocfilehash: 4172596d7907cd7aab809d34cf5953eec3956329
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 07/13/2022
ms.locfileid: "145095969"
---
## <a name="about-ip-allow-lists"></a>Sobre listas de permissões de IP

Por padrão, os usuários autorizados podem acessar sua empresa a partir de qualquer endereço IP. Os proprietários de empresas podem restringir o acesso a ativos pertencentes a organizações na conta corporativa, configurando uma lista de permissão de endereços IP específicos. {% data reusables.identity-and-permissions.ip-allow-lists-example-and-restrictions %}

{% data reusables.identity-and-permissions.ip-allow-lists-cidr-notation %}

{% data reusables.identity-and-permissions.ip-allow-lists-enable %} {% data reusables.identity-and-permissions.ip-allow-lists-enterprise %} 

Você também pode configurar endereços IP permitidos para uma organização individual. Para obter mais informações, confira "[Como gerenciar os endereços IP permitidos para sua organização](/organizations/keeping-your-organization-secure/managing-allowed-ip-addresses-for-your-organization)".

Por padrão, as regras do grupo de segurança de rede do Azure (NSG) deixam todo o tráfego de entrada aberto nas portas 22, 80, 443 e 25. Proprietários de empresa podem entrar em contato com {% data variables.contact.github_support %} para configurar as restrições de acesso para sua instância.

Para restrições no nível da instância que usam o Azure NSGs, entre em contato com {% data variables.contact.github_support %} com os endereços IP que devem ter permissão para acessar a sua instância corporativa. Especifica os intervalos de endereços usando o formato CIDR padrão (Encaminhamento sem Classe entre Domínios). {% data variables.contact.github_support %} irá configurar as regras de firewall apropriadas para sua empresa para restringir o acesso à rede por meio de HTTP, SSH, HTTPS e SMTP. Para obter mais informações, confira "[Como receber ajuda do {% data variables.contact.github_support %}](/admin/enterprise-support/receiving-help-from-github-support)".

## <a name="adding-an-allowed-ip-address"></a>Adicionar endereços IP permitidos

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %} {% data reusables.identity-and-permissions.ip-allow-lists-add-ip %} {% data reusables.identity-and-permissions.ip-allow-lists-add-description %} {% data reusables.identity-and-permissions.ip-allow-lists-add-entry %}

## <a name="allowing-access-by--data-variablesproductprodname_github_apps-"></a>Permitindo acesso de {% data variables.product.prodname_github_apps %}

{% data reusables.identity-and-permissions.ip-allow-lists-githubapps-enterprise %}

## <a name="enabling-allowed-ip-addresses"></a>Habilitar endereços IP permitidos

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %}
1. Em "Lista de IPs permitidos", selecione **Habilitar a lista de IPs permitidos**.
  ![Caixa de seleção usada para permitir endereços IP](/assets/images/help/security/enable-ip-allowlist-enterprise-checkbox.png)
4. Clique em **Salvar**.

## <a name="editing-an-allowed-ip-address"></a>Editar endereços IP permitidos

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %} {% data reusables.identity-and-permissions.ip-allow-lists-edit-entry %} {% data reusables.identity-and-permissions.ip-allow-lists-edit-ip %} {% data reusables.identity-and-permissions.ip-allow-lists-edit-description %}
8. Clique em **Atualizar**.

## <a name="deleting-an-allowed-ip-address"></a>Excluir endereços IP permitidos

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %} {% data reusables.identity-and-permissions.ip-allow-lists-delete-entry %} {% data reusables.identity-and-permissions.ip-allow-lists-confirm-deletion %}

## <a name="using--data-variablesproductprodname_actions--with-an-ip-allow-list"></a>Usar {% data variables.product.prodname_actions %} com uma lista endereços IP permitidos

{% data reusables.actions.ip-allow-list-self-hosted-runners %}
