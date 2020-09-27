---
title: Conectar o GitHub Enterprise Server ao GitHub Enterprise Cloud
intro: 'Ao habilitar o {{ site.data.variables.product.prodname_github_connect }}, você poderá compartilhar recursos e fluxos de trabalho específicos entre a {{ site.data.variables.product.product_location_enterprise }} e o {{ site.data.variables.product.prodname_ghe_cloud }}.'
redirect_from:
  - /enterprise/admin/guides/developer-workflow/connecting-github-enterprise-to-github-com/
  - /enterprise/admin/guides/developer-workflow/connecting-github-enterprise-server-to-github-com
  - /enterprise/admin/developer-workflow/connecting-github-enterprise-server-to-githubcom/
  - /enterprise/admin/installation/connecting-github-enterprise-server-to-github-enterprise-cloud
permissions: 'Administradores de sites para {{ site.data.variables.product.prodname_ghe_server }} que também são proprietários de uma conta corporativa ou organização do {{ site.data.variables.product.prodname_ghe_cloud }} podem ativar {{ site.data.variables.product.prodname_github_connect }}.'
versions:
  enterprise-server: '*'
---

### Sobre o {{ site.data.variables.product.prodname_github_connect }}

Para habilitar o {{ site.data.variables.product.prodname_github_connect }}, você deve configurar a conexão na {{ site.data.variables.product.product_location_enterprise }} e na sua organização do {{ site.data.variables.product.prodname_ghe_cloud }}  ou na conta corporativa.

Para configurar uma conexão, sua configuração de proxy deve permitir conectividade com o `github.com` e o `api.github.com`. Para obter mais informações, consulte "[Configurar servidor proxy web de saída](/enterprise/{{ currentVersion }}/admin/guides/installation/configuring-an-outbound-web-proxy-server)".

Após habilitar o {{ site.data.variables.product.prodname_github_connect }}, você poderá ativar recursos como a pesquisa unificada e as contribuições unificadas. Para obter mais informações sobre todos os recursos disponíveis, consulte "[Gerenciar conexões entre o {{ site.data.variables.product.prodname_ghe_server }} e o {{ site.data.variables.product.prodname_ghe_cloud }}](/enterprise/{{ currentVersion }}/admin/installation/managing-connections-between-github-enterprise-server-and-github-enterprise-cloud)".

Ao conectar a {{ site.data.variables.product.product_location_enterprise }} ao {{ site.data.variables.product.prodname_ghe_cloud }}, um registro no {{ site.data.variables.product.prodname_dotcom_the_website }} armazena as informações sobre a conexão:
- A parte da chave pública da sua licença do {{ site.data.variables.product.prodname_ghe_server }};
- Um hash da sua licença do {{ site.data.variables.product.prodname_ghe_server }};
- O nome do cliente da sua licença do {{ site.data.variables.product.prodname_ghe_server }};
- O nome de host da {{ site.data.variables.product.product_location_enterprise }};
- A versão da {{ site.data.variables.product.product_location_enterprise }};
- A conta corporativa ou organização no {{ site.data.variables.product.prodname_dotcom_the_website }} conectada à {{ site.data.variables.product.product_location_enterprise }};
- O token de autenticação usado pela {{ site.data.variables.product.product_location_enterprise }} para fazer solicitações ao {{ site.data.variables.product.prodname_dotcom_the_website }}.

Habilitar o {{ site.data.variables.product.prodname_github_connect }} também cria um {{ site.data.variables.product.prodname_github_app }} pertencente à sua conta corporativa ou organização do {{ site.data.variables.product.prodname_ghe_cloud }}. O {{ site.data.variables.product.prodname_ghe_server }} usa as credenciais do {{ site.data.variables.product.prodname_github_app }} para fazer solicitações ao {{ site.data.variables.product.prodname_dotcom_the_website }}.

O {{ site.data.variables.product.prodname_ghe_server }} armazena as credenciais do {{ site.data.variables.product.prodname_github_app }}. Essas credenciais serão replicadas em qualquer ambiente de clustering ou alta disponibilidade e serão armazenadas em qualquer backup, inclusive os instantâneos criados pelo {{ site.data.variables.product.prodname_enterprise_backup_utilities }}.
- Um token de autenticação válido por uma hora;
- Uma chave privada usada para gerar um novo token de autenticação.

Habilitar o {{ site.data.variables.product.prodname_github_connect }} não permitirá que os usuários do {{ site.data.variables.product.prodname_dotcom_the_website }} façam alterações no {{ site.data.variables.product.prodname_ghe_server }}.

{% if currentVersion ver_gt "enterprise-server@2.18" %}
Para obter mais informações sobre o gerenciamento de contas corporativas usando a API GraphQL, consulte "[Contas corporativas](/v4/guides/managing-enterprise-accounts)".
{% endif %}
### Habilitar o {{ site.data.variables.product.prodname_github_connect }}

1. Entre na {{ site.data.variables.product.product_location_enterprise }} e no {{ site.data.variables.product.prodname_dotcom_the_website }}.
{{ site.data.reusables.enterprise_site_admin_settings.access-settings }}
{{ site.data.reusables.enterprise_site_admin_settings.business }}
{{ site.data.reusables.enterprise-accounts.settings-tab }}
{{ site.data.reusables.enterprise-accounts.github-connect-tab }}
5. Em "{{ site.data.variables.product.prodname_dotcom_the_website }} ainda não está habilitado", clique em **Enable {{ site.data.variables.product.prodname_github_connect }}** (Habilitar o {{ site.data.variables.product.prodname_github_connect }}). Ao clicar em **Enable {{ site.data.variables.product.prodname_github_connect }}** (Habilitar o {{ site.data.variables.product.prodname_github_connect }}), você concorda com o <a href="/articles/github-connect-addendum-to-the-github-enterprise-license-agreement/" class="dotcom-only">{{ site.data.variables.product.prodname_github_connect }} Adendo ao contrato de licença do {{ site.data.variables.product.prodname_enterprise }}</a>. ![Botão Enable GitHub Connect (Habilitar o GitHub Connect)](/assets/images/enterprise/business-accounts/enable-github-connect-button.png)
6. Ao lado da conta corporativa ou organização que você pretende conectar, clique em **Connect** (Conectar). ![Botão Connect (Conectar) ao lado de uma conta corporativa ou empresa](/assets/images/enterprise/business-accounts/choose-enterprise-or-org-connect.png)

### Desconectar uma conta corporativa ou organização do {{ site.data.variables.product.prodname_ghe_cloud }} da {{ site.data.variables.product.product_location_enterprise }}

Ao se desconectar do {{ site.data.variables.product.prodname_ghe_cloud }}, o {{ site.data.variables.product.prodname_github_app }} do {{ site.data.variables.product.prodname_github_connect }} é excluído da sua conta corporativa ou organização e as credenciais armazenadas na {{ site.data.variables.product.product_location_enterprise }} são excluídas.

{{ site.data.reusables.enterprise_site_admin_settings.access-settings }}
{{ site.data.reusables.enterprise_site_admin_settings.business }}
{{ site.data.reusables.enterprise-accounts.settings-tab }}
{{ site.data.reusables.enterprise-accounts.github-connect-tab }}
5. Ao lado da conta corporativa ou organização que você gostaria de desconectar, clique em **Disable {{ site.data.variables.product.prodname_github_connect }})** (Desabilitar o {{ site.data.variables.product.prodname_github_connect }}). ![Desabilitar o botão GitHub Connect ao lado do nome de uma conta corporativa ou organização](/assets/images/enterprise/business-accounts/disable-github-connect-button.png)
6. Leia as informações sobre a desconexão e clique em **Disable {{ site.data.variables.product.prodname_github_connect }}** (Desabilitar o {{ site.data.variables.product.prodname_github_connect }}). ![Botão Modal com informações de aviso sobre desconexão e confirmação](/assets/images/enterprise/business-accounts/confirm-disable-github-connect.png)

