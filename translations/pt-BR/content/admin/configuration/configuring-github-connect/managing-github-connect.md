---
title: Gerenciando o GitHub Connect
shortTitle: Manage GitHub Connect
intro: 'Você pode habilitar {% data variables.product.prodname_github_connect %} para acessar funcionalidades adicionais e fluxos de trabalho para {% data variables.product.product_location %}.'
redirect_from:
  - /enterprise/admin/guides/developer-workflow/connecting-github-enterprise-to-github-com
  - /enterprise/admin/guides/developer-workflow/connecting-github-enterprise-server-to-github-com
  - /enterprise/admin/developer-workflow/connecting-github-enterprise-server-to-githubcom
  - /enterprise/admin/installation/connecting-github-enterprise-server-to-github-enterprise-cloud
  - /enterprise/admin/configuration/connecting-github-enterprise-server-to-github-enterprise-cloud
  - /admin/configuration/connecting-github-enterprise-server-to-github-enterprise-cloud
  - /admin/configuration/managing-connections-between-github-enterprise-server-and-github-enterprise-cloud/connecting-github-enterprise-server-to-github-enterprise-cloud
  - /admin/configuration/managing-connections-between-your-enterprise-accounts/connecting-your-enterprise-account-to-github-enterprise-cloud
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - GitHub Connect
  - Infrastructure
  - Networking
ms.openlocfilehash: 0dea06870a1bc7bc951580acf3d83a9d2f0984c2
ms.sourcegitcommit: 80842b4e4c500daa051eff0ccd7cde91c2d4bb36
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/12/2022
ms.locfileid: '146332453'
---
{% data reusables.github-connect.beta %}

## Sobre o {% data variables.product.prodname_github_connect %}

Você pode acessar funcionalidades e fluxos de trabalho adicionais em {% data variables.product.product_location %}, habilitando o {% data variables.product.prodname_github_connect %}. Para obter mais informações, confira "[Sobre o {% data variables.product.prodname_github_connect %}](/admin/configuration/configuring-github-connect/about-github-connect)".

Ao habilitar {% data variables.product.prodname_github_connect %}, você configura uma conexão entre {% data variables.product.product_location %} e uma conta de organização ou empresa em {% data variables.product.prodname_ghe_cloud %}. A habilitação de {% data variables.product.prodname_github_connect %} cria um {% data variables.product.prodname_github_app %} pertencente à organização ou conta corporativa em {% data variables.product.prodname_ghe_cloud %}. O {% data variables.product.product_name %} usa as credenciais do {% data variables.product.prodname_github_app %} para fazer solicitações ao {% data variables.product.prodname_ghe_cloud %}.

{% ifversion ghes %}O {% data variables.product.prodname_ghe_server %} armazena as credenciais dos {% data variables.product.prodname_github_app %}. As credenciais a seguir serão replicadas em todos os nós em um ambiente de alta disponibilidade ou de agrupamento e armazenadas em qualquer backup, incluindo instantâneos criados por {% data variables.product.prodname_enterprise_backup_utilities %}.
- Um token de autenticação válido por uma hora;
- Uma chave privada, que é usada para gerar um novo token de autenticação {% endif %}

## Pré-requisitos

Para usar {% data variables.product.prodname_github_connect %}, você deve ter uma conta corporativa em {% data variables.product.prodname_dotcom_the_website %} que use {% data variables.product.prodname_ghe_cloud %}. Você pode já ter {% data variables.product.prodname_ghe_cloud %} incluído no seu plano. {% data reusables.enterprise.link-to-ghec-trial %}

{% ifversion ghes %} Se a sua conta corporativa ou de organização do {% data variables.product.prodname_dotcom_the_website %} usar listas de IP permitidos, você precisará adicionar o endereço IP ou a rede para o {% data variables.product.product_location %} à lista de IP permitidos no {% data variables.product.prodname_dotcom_the_website %}. Para obter mais informações, confira "[Como gerenciar endereços IP permitidos para sua organização](/enterprise-cloud@latest/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-allowed-ip-addresses-for-your-organization)" e "[Como impor políticas para configurações de segurança na sua empresa](/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-allowed-ip-addresses-for-organizations-in-your-enterprise)" na documentação do {% data variables.product.prodname_ghe_cloud %}.

Para configurar uma conexão, sua configuração de proxy precisa permitir a conectividade com `github.com`, `api.github.com` e `uploads.github.com`. Para obter mais informações, confira "[Como configurar um servidor proxy Web de saída](/enterprise/admin/guides/installation/configuring-an-outbound-web-proxy-server)".
{% endif %}

## Habilitar o {% data variables.product.prodname_github_connect %}

Os proprietários corporativos que também são proprietários da conta de uma organização ou empresa que usa {% data variables.product.prodname_ghe_cloud %} podem habilitar {% data variables.product.prodname_github_connect %}.

Se você estiver conectando {% data variables.product.product_location %} a uma organização em {% data variables.product.prodname_ghe_cloud %} que não seja propriedade de uma conta corporativa você deveverá efetuar o login em {% data variables.product.prodname_dotcom_the_website %} como proprietário da organização.

Se você estiver conectando {% data variables.product.product_location %} a uma organização em {% data variables.product.prodname_ghe_cloud %} que pertence a uma conta corporativa ou a uma própria conta corporativa, você deveverá efetuar o login em {% data variables.product.prodname_dotcom_the_website %} como proprietário de uma empresa.

{% ifversion ghes %}
1. Entre no {% data variables.product.product_location %} e no {% data variables.product.prodname_dotcom_the_website %}.
{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.github-connect-tab %}{% else %}
1. Entre no {% data variables.product.product_location %} e no {% data variables.product.prodname_dotcom_the_website %}.
{% data reusables.enterprise-accounts.access-enterprise %}{% data reusables.enterprise-accounts.github-connect-tab %}{% endif %}
1. Em "O {% data variables.product.prodname_github_connect %} ainda não está habilitado", clique em **Habilitar o {% data variables.product.prodname_github_connect %}** . Ao clicar em **Habilitar o {% data variables.product.prodname_github_connect %}** , você concorda com os "<a href="/github/site-policy/github-terms-for-additional-products-and-features#connect" class="dotcom-only">Termos de Produtos e Recursos Adicionais do {% data variables.product.prodname_dotcom %}</a>".
{% ifversion ghes %} ![Botão Habilitar o GitHub Connect](/assets/images/enterprise/business-accounts/enable-github-connect-button.png){% else %} ![Botão Habilitar o GitHub Connect](/assets/images/enterprise/github-ae/enable-github-connect-button.png) {% endif %}
1. Ao lado da conta corporativa ou de organização que deseja conectar, clique em **Conectar**.
  ![Botão Conectar ao lado de uma conta corporativa ou de empresa](/assets/images/enterprise/business-accounts/choose-enterprise-or-org-connect.png)

## Como desabilitar o {% data variables.product.prodname_github_connect %}

Os proprietários das empresas podem desabilitar {% data variables.product.prodname_github_connect %}.

Ao se desconectar do {% data variables.product.prodname_ghe_cloud %}, o {% data variables.product.prodname_github_app %} do {% data variables.product.prodname_github_connect %} é excluído da sua conta corporativa ou organização e as credenciais armazenadas na {% data variables.product.product_location %} são excluídas.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.github-connect-tab %}
1. Ao lado da conta corporativa ou de organização que deseja desconectar, clique em **Desabilitar o {% data variables.product.prodname_github_connect %}** .
{% ifversion ghes %} ![Botão Desabilitar o GitHub Connect ao lado de uma conta corporativa ou de um nome de organização](/assets/images/enterprise/business-accounts/disable-github-connect-button.png)
1. Leia as informações sobre como desconectar e clique em **Desabilitar o {% data variables.product.prodname_github_connect %}** .
  ![Caixa de diálogo modal com informações de aviso sobre a desconexão e botão de confirmação](/assets/images/enterprise/business-accounts/confirm-disable-github-connect.png)  
{% else %} ![Botão Desabilitar o GitHub Connect ao lado de uma conta corporativa ou de um nome de organização](/assets/images/enterprise/github-ae/disable-github-connect-button.png)
1. Leia as informações sobre como desconectar e clique em **Desabilitar o {% data variables.product.prodname_github_connect %}** .
  ![Caixa de diálogo modal com informações de aviso sobre a desconexão e botão de confirmação](/assets/images/enterprise/github-ae/confirm-disable-github-connect.png) {% endif %} 
