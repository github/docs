---
title: Conectar o GitHub Enterprise Server ao GitHub Enterprise Cloud
intro: 'Ao habilitar o {% data variables.product.prodname_github_connect %}, você poderá compartilhar recursos e fluxos de trabalho específicos entre a {% data variables.product.product_location_enterprise %} e o {% data variables.product.prodname_ghe_cloud %}.'
redirect_from:
  - /enterprise/admin/guides/developer-workflow/connecting-github-enterprise-to-github-com/
  - /enterprise/admin/guides/developer-workflow/connecting-github-enterprise-server-to-github-com
  - /enterprise/admin/developer-workflow/connecting-github-enterprise-server-to-githubcom/
  - /enterprise/admin/installation/connecting-github-enterprise-server-to-github-enterprise-cloud
  - /enterprise/admin/configuration/connecting-github-enterprise-server-to-github-enterprise-cloud
permissions: 'Administradores de sites para {% data variables.product.prodname_ghe_server %} que também são proprietários de uma conta corporativa ou organização do {% data variables.product.prodname_ghe_cloud %} podem ativar {% data variables.product.prodname_github_connect %}.'
versions:
  enterprise-server: '*'
---

### Sobre o {% data variables.product.prodname_github_connect %}

Para habilitar o {% data variables.product.prodname_github_connect %}, você deve configurar a conexão na {% data variables.product.product_location_enterprise %} e na sua organização do {% data variables.product.prodname_ghe_cloud %}  ou na conta corporativa.

Para configurar uma conexão, sua configuração de proxy deve permitir conectividade com o `github.com` e o `api.github.com`. Para obter mais informações, consulte "[Configurar servidor proxy web de saída](/enterprise/{{ currentVersion }}/admin/guides/installation/configuring-an-outbound-web-proxy-server)".

Após habilitar o {% data variables.product.prodname_github_connect %}, você poderá ativar recursos como a pesquisa unificada e as contribuições unificadas. Para obter mais informações sobre todos os recursos disponíveis, consulte "[Gerenciar conexões entre o {% data variables.product.prodname_ghe_server %} e o {% data variables.product.prodname_ghe_cloud %}](/enterprise/{{ currentVersion }}/admin/installation/managing-connections-between-github-enterprise-server-and-github-enterprise-cloud)".

Ao conectar a {% data variables.product.product_location_enterprise %} ao {% data variables.product.prodname_ghe_cloud %}, um registro no {% data variables.product.prodname_dotcom_the_website %} armazena as informações sobre a conexão:
- A parte da chave pública da sua licença do {% data variables.product.prodname_ghe_server %};
- Um hash da sua licença do {% data variables.product.prodname_ghe_server %};
- O nome do cliente da sua licença do {% data variables.product.prodname_ghe_server %};
- O nome de host da {% data variables.product.product_location_enterprise %};
- A versão da {% data variables.product.product_location_enterprise %};
- A conta da organização ou empresa em {% data variables.product.prodname_dotcom_the_website %} que estiver conectada a {% data variables.product.product_location_enterprise %}
- O token de autenticação usado pela {% data variables.product.product_location_enterprise %} para fazer solicitações ao {% data variables.product.prodname_dotcom_the_website %}.

Habilitar o {% data variables.product.prodname_github_connect %} também cria um {% data variables.product.prodname_github_app %} pertencente à sua conta corporativa ou organização do {% data variables.product.prodname_ghe_cloud %}. O {% data variables.product.prodname_ghe_server %} usa as credenciais do {% data variables.product.prodname_github_app %} para fazer solicitações ao {% data variables.product.prodname_dotcom_the_website %}.

O {% data variables.product.prodname_ghe_server %} armazena as credenciais do {% data variables.product.prodname_github_app %}. Essas credenciais serão replicadas em qualquer ambiente de clustering ou alta disponibilidade e serão armazenadas em qualquer backup, inclusive os instantâneos criados pelo {% data variables.product.prodname_enterprise_backup_utilities %}.
- Um token de autenticação válido por uma hora;
- Uma chave privada usada para gerar um novo token de autenticação.

Habilitar o {% data variables.product.prodname_github_connect %} não permitirá que os usuários do {% data variables.product.prodname_dotcom_the_website %} façam alterações no {% data variables.product.prodname_ghe_server %}.

Para obter mais informações sobre o gerenciamento de contas corporativas usando a API GraphQL, consulte "[Contas corporativas](/v4/guides/managing-enterprise-accounts)".
### Habilitar o {% data variables.product.prodname_github_connect %}

1. Fazer login em

{% data variables.product.product_location_enterprise %} e {% data variables.product.prodname_dotcom_the_website %}.
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.github-connect-tab %}
5. Em "{% data variables.product.prodname_dotcom_the_website %} ainda não está habilitado", clique em **Enable {% data variables.product.prodname_github_connect %}** (Habilitar o {% data variables.product.prodname_github_connect %}). Ao clicar em **Enable {% data variables.product.prodname_github_connect %}** (Habilitar o {% data variables.product.prodname_github_connect %}), você concorda com o <a href="/articles/github-connect-addendum-to-the-github-enterprise-license-agreement/" class="dotcom-only">{% data variables.product.prodname_github_connect %} Adendo ao contrato de licença do {% data variables.product.prodname_enterprise %}</a>. ![Botão Enable GitHub Connect (Habilitar o GitHub Connect)](/assets/images/enterprise/business-accounts/enable-github-connect-button.png)
6. Ao lado da conta corporativa ou organização que você pretende conectar, clique em **Connect** (Conectar). ![Botão Connect (Conectar) ao lado de uma conta corporativa ou empresa](/assets/images/enterprise/business-accounts/choose-enterprise-or-org-connect.png)

### Desconectar uma conta corporativa ou organização do {% data variables.product.prodname_ghe_cloud %} da {% data variables.product.product_location_enterprise %}

Ao se desconectar do {% data variables.product.prodname_ghe_cloud %}, o {% data variables.product.prodname_github_app %} do {% data variables.product.prodname_github_connect %} é excluído da sua conta corporativa ou organização e as credenciais armazenadas na {% data variables.product.product_location_enterprise %} são excluídas.

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.github-connect-tab %}
5. Ao lado da conta corporativa ou organização que você gostaria de desconectar, clique em **Disable {% data variables.product.prodname_github_connect %})** (Desabilitar o {% data variables.product.prodname_github_connect %}). ![Desabilitar o botão GitHub Connect ao lado do nome de uma conta corporativa ou organização](/assets/images/enterprise/business-accounts/disable-github-connect-button.png)
6. Leia as informações sobre a desconexão e clique em **Disable {% data variables.product.prodname_github_connect %}** (Desabilitar o {% data variables.product.prodname_github_connect %}). ![Botão Modal com informações de aviso sobre desconexão e confirmação](/assets/images/enterprise/business-accounts/confirm-disable-github-connect.png)

