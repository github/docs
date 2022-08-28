---
title: Conectar a sua conta corporativa ao GitHub Enterprise Cloud
shortTitle: Conectar as contas corporativas
intro: 'Ao habilitar o {% data variables.product.prodname_github_connect %}, você poderá compartilhar recursos e fluxos de trabalho específicos entre a {% data variables.product.product_location %} e o {% data variables.product.prodname_ghe_cloud %}.'
redirect_from:
  - /enterprise/admin/guides/developer-workflow/connecting-github-enterprise-to-github-com/
  - /enterprise/admin/guides/developer-workflow/connecting-github-enterprise-server-to-github-com
  - /enterprise/admin/developer-workflow/connecting-github-enterprise-server-to-githubcom/
  - /enterprise/admin/installation/connecting-github-enterprise-server-to-github-enterprise-cloud
  - /enterprise/admin/configuration/connecting-github-enterprise-server-to-github-enterprise-cloud
  - /admin/configuration/connecting-github-enterprise-server-to-github-enterprise-cloud
  - /admin/configuration/managing-connections-between-github-enterprise-server-and-github-enterprise-cloud/connecting-github-enterprise-server-to-github-enterprise-cloud
permissions: 'Enterprise owners who are also owners of a {% data variables.product.prodname_ghe_cloud %} organization or enterprise account can enable {% data variables.product.prodname_github_connect %}.'
versions:
  ghes: '*'
  ghae: next
type: how_to
topics:
  - Enterprise
  - GitHub Connect
  - Infrastructure
  - Networking
---

{% data reusables.github-connect.beta %}

## Sobre o {% data variables.product.prodname_github_connect %}

Para habilitar o {% data variables.product.prodname_github_connect %}, você deve configurar a conexão na {% data variables.product.product_location %} e na sua organização do {% data variables.product.prodname_ghe_cloud %}  ou na conta corporativa.

{% ifversion ghes %}
Para configurar uma conexão, sua configuração de proxy deve permitir conectividade com o `github.com` e o `api.github.com`. Para obter mais informações, consulte "[Configurar servidor proxy web de saída](/enterprise/{{ currentVersion }}/admin/guides/installation/configuring-an-outbound-web-proxy-server)".
{% endif %}

Após habilitar o {% data variables.product.prodname_github_connect %}, você poderá ativar recursos como a pesquisa unificada e as contribuições unificadas. Para obter mais informações sobre todas as funcionalidades disponíveis, consulte "[Gerenciando conexões entre as suas contas corporativas](/admin/configuration/managing-connections-between-your-enterprise-accounts)".

Ao conectar a {% data variables.product.product_location %} ao {% data variables.product.prodname_ghe_cloud %}, um registro no {% data variables.product.prodname_dotcom_the_website %} armazena as informações sobre a conexão:
{% ifversion ghes %}
- A parte da chave pública da sua licença do {% data variables.product.prodname_ghe_server %};
- Um hash da sua licença do {% data variables.product.prodname_ghe_server %};
- O nome do cliente da sua licença do {% data variables.product.prodname_ghe_server %};
- A versão de {% data variables.product.product_location_enterprise %}{% endif %}
- O nome do host da sua instância de {% data variables.product.product_name %}
- A conta da organização ou empresa em {% data variables.product.prodname_dotcom_the_website %} que estiver conectada a {% data variables.product.product_location %}
- O token de autenticação usado pela {% data variables.product.product_location %} para fazer solicitações ao {% data variables.product.prodname_dotcom_the_website %}.

Habilitar o {% data variables.product.prodname_github_connect %} também cria um {% data variables.product.prodname_github_app %} pertencente à sua conta corporativa ou organização do {% data variables.product.prodname_ghe_cloud %}. O {% data variables.product.product_name %} usa as credenciais do {% data variables.product.prodname_github_app %} para fazer solicitações ao {% data variables.product.prodname_dotcom_the_website %}.
{% ifversion ghes %}
O {% data variables.product.prodname_ghe_server %} armazena as credenciais do {% data variables.product.prodname_github_app %}. Essas credenciais serão replicadas em qualquer ambiente de clustering ou alta disponibilidade e serão armazenadas em qualquer backup, inclusive os instantâneos criados pelo {% data variables.product.prodname_enterprise_backup_utilities %}.
- Um token de autenticação válido por uma hora;
- Uma chave privada usada para gerar um novo token de autenticação.
{% endif %}

Habilitar o {% data variables.product.prodname_github_connect %} não permitirá que os usuários do {% data variables.product.prodname_dotcom_the_website %} façam alterações no {% data variables.product.product_name %}.

Para obter mais informações sobre o gerenciamento de contas corporativas usando a API GraphQL, consulte "[Contas corporativas](/graphql/guides/managing-enterprise-accounts)".
## Habilitar o {% data variables.product.prodname_github_connect %}

{% ifversion ghes %}
1. Entre na {% data variables.product.product_location %} e no {% data variables.product.prodname_dotcom_the_website %}.
{% data reusables.enterprise-accounts.access-enterprise %}{% ifversion ghes < 3.1 %}{% data reusables.enterprise-accounts.settings-tab %}{% endif %}{% data reusables.enterprise-accounts.github-connect-tab %}{% else %}
1. Entre na {% data variables.product.product_location %} e no {% data variables.product.prodname_dotcom_the_website %}.
{% data reusables.enterprise-accounts.access-enterprise %}{% data reusables.enterprise-accounts.github-connect-tab %}{% endif %}
1. Em "{% data variables.product.prodname_github_connect %} ainda não está habilitado", clique em **Habilitar {% data variables.product.prodname_github_connect %}**. Ao clicar em **Habilitar {% data variables.product.prodname_github_connect %}**, você concorda com os "<a href="/github/site-policy/github-terms-for-additional-products-and-features#connect" class="dotcom-only">Termos para Produtos e Funcionalidades adicionais de {% data variables.product.prodname_dotcom %}</a>.".
{% ifversion ghes %}
![Enable GitHub Connect button](/assets/images/enterprise/business-accounts/enable-github-connect-button.png){% else %}
![Enable GitHub Connect button](/assets/images/enterprise/github-ae/enable-github-connect-button.png)
{% endif %}
1. Ao lado da conta corporativa ou organização que você pretende conectar, clique em **Connect** (Conectar). ![Botão Connect (Conectar) ao lado de uma conta corporativa ou empresa](/assets/images/enterprise/business-accounts/choose-enterprise-or-org-connect.png)

## Desconectando uma organização ou conta corporativa de {% data variables.product.prodname_ghe_cloud %} da sua conta corporativa

Ao se desconectar do {% data variables.product.prodname_ghe_cloud %}, o {% data variables.product.prodname_github_app %} do {% data variables.product.prodname_github_connect %} é excluído da sua conta corporativa ou organização e as credenciais armazenadas na {% data variables.product.product_location %} são excluídas.

{% data reusables.enterprise-accounts.access-enterprise %}{% ifversion ghes < 3.1 %}{% data reusables.enterprise-accounts.settings-tab %}{% endif %}{% data reusables.enterprise-accounts.github-connect-tab %}
1. Ao lado da conta corporativa ou organização que você gostaria de desconectar, clique em **Disable {% data variables.product.prodname_github_connect %})** (Desabilitar o {% data variables.product.prodname_github_connect %}).
{% ifversion ghes %}
  ![Desabilitar o botão GitHub Connect ao lado do nome de uma conta corporativa ou organização](/assets/images/enterprise/business-accounts/disable-github-connect-button.png)
1. Leia as informações sobre a desconexão e clique em **Disable {% data variables.product.prodname_github_connect %}** (Desabilitar o {% data variables.product.prodname_github_connect %}). ![Botão Modal com informações de aviso sobre desconexão e confirmação](/assets/images/enterprise/business-accounts/confirm-disable-github-connect.png)
{% else %}
  ![Desabilitar o botão GitHub Connect ao lado do nome de uma conta corporativa ou organização](/assets/images/enterprise/github-ae/disable-github-connect-button.png)
1. Leia as informações sobre a desconexão e clique em **Disable {% data variables.product.prodname_github_connect %}** (Desabilitar o {% data variables.product.prodname_github_connect %}). ![Botão Modal com informações de aviso sobre desconexão e confirmação](/assets/images/enterprise/github-ae/confirm-disable-github-connect.png)
{% endif %} 
