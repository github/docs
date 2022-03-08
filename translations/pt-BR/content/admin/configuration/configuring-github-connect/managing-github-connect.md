---
title: Gerenciando o GitHub Connect
shortTitle: Gerenciar o GitHub Connect
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
---

{% data reusables.github-connect.beta %}

## Sobre o {% data variables.product.prodname_github_connect %}

Você pode acessar funcionalidades e fluxos de trabalho adicionais em {% data variables.product.product_location %}, habilitando o {% data variables.product.prodname_github_connect %}. Para obter mais informações, consulte "[Sobre {% data variables.product.prodname_github_connect %}](/admin/configuration/configuring-github-connect/about-github-connect)."

Ao habilitar {% data variables.product.prodname_github_connect %}, você configura uma conexão entre {% data variables.product.product_location %} e uma conta de organização ou empresa em {% data variables.product.prodname_ghe_cloud %}. A habilitação de {% data variables.product.prodname_github_connect %} cria um {% data variables.product.prodname_github_app %} pertencente à organização ou conta corporativa em {% data variables.product.prodname_ghe_cloud %}. O {% data variables.product.product_name %} usa as credenciais do {% data variables.product.prodname_github_app %} para fazer solicitações ao {% data variables.product.prodname_ghe_cloud %}.

{% ifversion ghes %}
O {% data variables.product.prodname_ghe_server %} armazena as credenciais do {% data variables.product.prodname_github_app %}. As credenciais a seguir serão replicadas em todos os nós em um ambiente de alta disponibilidade ou de agrupamento e armazenadas em qualquer backup, incluindo instantâneos criados por {% data variables.product.prodname_enterprise_backup_utilities %}.
- Um token de autenticação válido por uma hora;
- Uma chave privada usada para gerar um novo token de autenticação.
{% endif %}

## Pré-requisitos

Para usar {% data variables.product.prodname_github_connect %}, você deve ter uma conta corporativa em {% data variables.product.prodname_dotcom_the_website %} que use {% data variables.product.prodname_ghe_cloud %}. Você pode já ter {% data variables.product.prodname_ghe_cloud %} incluído no seu plano. {% data reusables.enterprise.link-to-ghec-trial %}

{% ifversion ghes %}
If your organization or enterprise account on {% data variables.product.prodname_dotcom_the_website %} uses IP allow lists, you must add the IP address or network for {% data variables.product.product_location %} to your IP allow list on {% data variables.product.prodname_dotcom_the_website %}. For more information, see "[Managing allowed IP addresses for your organization](/enterprise-cloud@latest/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-allowed-ip-addresses-for-your-organization)" and "[Enforcing policies for security settings in your enterprise](/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-allowed-ip-addresses-for-organizations-in-your-enterprise)" in the {% data variables.product.prodname_ghe_cloud %} documentation.

Para configurar a conexão, a configuração de proxy deverá permitir conectividade em `github.com`, `api.github.com` e `uploads.github.com`. For more information, see "[Configuring an outbound web proxy server](/enterprise/{{ currentVersion }}/admin/guides/installation/configuring-an-outbound-web-proxy-server)."
{% endif %}

## Habilitar o {% data variables.product.prodname_github_connect %}

Os proprietários corporativos que também são proprietários da conta de uma organização ou empresa que usa {% data variables.product.prodname_ghe_cloud %} podem habilitar {% data variables.product.prodname_github_connect %}.

Se você estiver conectando {% data variables.product.product_location %} a uma organização em {% data variables.product.prodname_ghe_cloud %} que não seja propriedade de uma conta corporativa você deveverá efetuar o login em {% data variables.product.prodname_dotcom_the_website %} como proprietário da organização.

Se você estiver conectando {% data variables.product.product_location %} a uma organização em {% data variables.product.prodname_ghe_cloud %} que pertence a uma conta corporativa ou a uma própria conta corporativa, você deveverá efetuar o login em {% data variables.product.prodname_dotcom_the_website %} como proprietário de uma empresa.

{% ifversion ghes %}
1. Entre na {% data variables.product.product_location %} e no {% data variables.product.prodname_dotcom_the_website %}.
{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.github-connect-tab %}{% else %}
1. Entre na {% data variables.product.product_location %} e no {% data variables.product.prodname_dotcom_the_website %}.
{% data reusables.enterprise-accounts.access-enterprise %}{% data reusables.enterprise-accounts.github-connect-tab %}{% endif %}
1. Em "{% data variables.product.prodname_github_connect %} ainda não está habilitado", clique em **Habilitar {% data variables.product.prodname_github_connect %}**. Ao clicar em **Habilitar {% data variables.product.prodname_github_connect %}**, você concorda com os "<a href="/github/site-policy/github-terms-for-additional-products-and-features#connect" class="dotcom-only">Termos para Produtos e Funcionalidades adicionais de {% data variables.product.prodname_dotcom %}</a>.".
{% ifversion ghes %}
![Enable GitHub Connect button](/assets/images/enterprise/business-accounts/enable-github-connect-button.png){% else %}
![Enable GitHub Connect button](/assets/images/enterprise/github-ae/enable-github-connect-button.png)
{% endif %}
1. Ao lado da conta corporativa ou organização que você pretende conectar, clique em **Connect** (Conectar). ![Botão Connect (Conectar) ao lado de uma conta corporativa ou empresa](/assets/images/enterprise/business-accounts/choose-enterprise-or-org-connect.png)

## Desabilitar {% data variables.product.prodname_github_connect %}

Os proprietários das empresas podem desabilitar {% data variables.product.prodname_github_connect %}.

When you disconnect from {% data variables.product.prodname_ghe_cloud %}, the {% data variables.product.prodname_github_connect %} {% data variables.product.prodname_github_app %} is deleted from your enterprise account or organization and credentials stored on {% data variables.product.product_location %} are deleted.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.github-connect-tab %}
1. Ao lado da conta corporativa ou organização que você deseja desconectar, clique em **Desabilitar {% data variables.product.prodname_github_connect %}**.
{% ifversion ghes %}
  ![Desabilitar o botão GitHub Connect ao lado do nome de uma conta corporativa ou organização](/assets/images/enterprise/business-accounts/disable-github-connect-button.png)
1. Leia as informações sobre desconexão e clique em **Desabilitar {% data variables.product.prodname_github_connect %}**. ![Botão Modal com informações de aviso sobre desconexão e confirmação](/assets/images/enterprise/business-accounts/confirm-disable-github-connect.png)
{% else %}
  ![Desabilitar o botão GitHub Connect ao lado do nome de uma conta corporativa ou organização](/assets/images/enterprise/github-ae/disable-github-connect-button.png)
1. Leia as informações sobre desconexão e clique em **Desabilitar {% data variables.product.prodname_github_connect %}**. ![Botão Modal com informações de aviso sobre desconexão e confirmação](/assets/images/enterprise/github-ae/confirm-disable-github-connect.png)
{% endif %} 
