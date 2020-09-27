---
title: Configurar a varredura de código para o seu aparelho
shortTitle: Configurar a varredura do código
intro: 'Você pode habilitar, configurar e desativar {{ site.data.variables.product.prodname_code_scanning }} para {{ site.data.variables.product.product_location_enterprise }}. {{ site.data.variables.product.prodname_code_scanning_capc}} permite aos usuários varrer códigos com relação a erros e vulnerabilidades.'
product: '{{ site.data.reusables.gated-features.code-scanning }}'
miniTocMaxHeadingLevel: 4
redirect_from:
  - /enterprise/admin/configuration/configuring-code-scanning-for-your-appliance
versions:
  enterprise-server: '>=2.22'
---

{{ site.data.reusables.code-scanning.beta }}

### Sobre o {{ site.data.variables.product.prodname_code_scanning }}

{{ site.data.reusables.code-scanning.about-code-scanning }}

A tabela abaixo resume os tipos de análise disponíveis para {{ site.data.variables.product.prodname_code_scanning }} e fornece links para habilitar o recurso para repositórios individuais.

{{ site.data.reusables.code-scanning.enabling-options }}

Para os usuários do {{ site.data.variables.product.product_location_enterprise }} conseguirem habilitar e usar o {{ site.data.variables.product.prodname_code_scanning }} em seus repositórios, você deve, como administrador do site, habilitar esse recurso para todo o appliance.

### Como eu sei se {{ site.data.variables.product.prodname_code_scanning }} está habilitado para meu appliance

{{ site.data.reusables.enterprise_site_admin_settings.access-settings }}
{{ site.data.reusables.enterprise_site_admin_settings.management-console }}
1. Verificar se há uma **{{ site.data.variables.product.prodname_advanced_security }}** entrada na barra lateral esquerda. ![Barra lateral de segurança avançada](/assets/images/enterprise/management-console/sidebar-advanced-security.png)

Se você não puder ver **{{ site.data.variables.product.prodname_advanced_security }}** na barra lateral, isso significa que sua licença não inclui suporte para recursos do {{ site.data.variables.product.prodname_advanced_security }}, incluindo {{ site.data.variables.product.prodname_code_scanning }}. A licença do {{ site.data.variables.product.prodname_advanced_security }} dá a você e aos seus usuários acesso a recursos que ajudam a tornar seus repositórios e códigos mais seguros.

### Habilitar o {{ site.data.variables.product.prodname_code_scanning }}

{{ site.data.reusables.enterprise_management_console.enable-disable-code-scanning }}

{{ site.data.reusables.enterprise_site_admin_settings.access-settings }}
{{ site.data.reusables.enterprise_site_admin_settings.management-console }}
{{ site.data.reusables.enterprise_management_console.advanced-security-tab }}
1. Em "{{ site.data.variables.product.prodname_advanced_security }}," clique em **{{ site.data.variables.product.prodname_code_scanning_capc }}**. ![Caixa de seleção para habilitar ou desabilitar {{ site.data.variables.product.prodname_code_scanning }}](/assets/images/enterprise/management-console/enable-code-scanning-checkbox.png)
{{ site.data.reusables.enterprise_management_console.save-settings }}


### Executar {{ site.data.variables.product.prodname_code_scanning }} usando {{ site.data.variables.product.prodname_actions }}

#### Configurar um executor auto-hospedado

Se você estiver inscrito no beta de {{ site.data.variables.product.prodname_actions }}, {{ site.data.variables.product.prodname_ghe_server }} poderá executar {{ site.data.variables.product.prodname_code_scanning}} usando um fluxo de trabalho de {{ site.data.variables.product.prodname_actions }}. Primeiro, você precisa fornecer um ou mais executores auto-hospedados de {{ site.data.variables.product.prodname_actions }} em seu ambiente. É possível fornecer executores auto-hospedados no nível da conta do repositório, organização ou empresa. Para obter mais informações, consulte "[Sobre executores auto-hospedados](/actions/hosting-your-own-runners/about-self-hosted-runners)" e "[Adicionar executores auto-hospedados](/actions/hosting-your-own-runners/adding-self-hosted-runners)".

#### Provisionar a ação
Para executar {{ site.data.variables.product.prodname_code_scanning}} em {{ site.data.variables.product.prodname_ghe_server }} com {{ site.data.variables.product.prodname_actions }}, a ação apropriada deve estar disponível localmente. Você pode disponibilizar a ação de três maneiras.

- **Recomendado** Você pode usar [{{ site.data.variables.product.prodname_github_connect }}](/enterprise/admin/configuration/connecting-github-enterprise-server-to-github-enterprise-cloud) para fazer o download automático das ações no {{ site.data.variables.product.prodname_dotcom_the_website }}. A máquina que hospeda sua instância deve conseguir acessar {{ site.data.variables.product.prodname_dotcom_the_website }}. Esta abordagem garante que você irá obter o software mais recente automaticamente. Para obter mais informações, consulte "[Configurar o {{ site.data.variables.product.prodname_github_connect }} para sincronizar com {{ site.data.variables.product.prodname_actions }}](/enterprise/admin/configuration/configuring-code-scanning-for-your-appliance#configuring-github-connect-to-sync-github-actions)".
- Se você desejar usar o {{ site.data.variables.product.prodname_codeql_workflow }}, você pode sincronizar o repositório do {{ site.data.variables.product.prodname_dotcom_the_website }} ao {{ site.data.variables.product.prodname_ghe_server }}, usando a ferramenta de sincronização de Ação do {{ site.data.variables.product.prodname_codeql }} disponível em [https://github. om/github/codeql-action-sync-tool](https://github.com/github/codeql-action-sync-tool/). Você pode usar essa ferramenta independentemente se {{ site.data.variables.product.product_location_enterprise }} ou seus executores de {{ site.data.variables.product.prodname_actions }} terem acesso à internet, contanto que você possa acessar {{ site.data.variables.product.product_location_enterprise }} e {{ site.data.variables.product.prodname_dotcom_the_website }} simultaneamente no seu computador.
- Você pode criar uma cópia local do repositório da ação no seu servidor, clonando o repositório de {{ site.data.variables.product.prodname_dotcom_the_website }} com a ação. Por exemplo, se você desejar usar a ação {{ site.data.variables.product.prodname_codeql }}, você poderá criar um repositório na sua instância denominada `github/codeql-action` e, em seguida, clonar o [repositório](https://github.com/github/codeql-action) a partir do {{ site.data.variables.product.prodname_dotcom_the_website }} e, posteriormente, fazer push desse repositório no repositório da sua instância `github/codeql-action`. Você também deverá fazer o download de qualquer uma das versões do repositório no {{ site.data.variables.product.prodname_dotcom_the_website }} e fazer o upload no repositório `github/codeql-action` de sua instância como versões.


##### Configurar {{ site.data.variables.product.prodname_github_connect }} para sincronizar {{ site.data.variables.product.prodname_actions }}

1. Se você deseja fazer o download dos fluxos de trabalho de ação sob demanda a partir de {{ site.data.variables.product.prodname_dotcom_the_website }}, você deverá habilitar o {{ site.data.variables.product.prodname_github_connect }}. Para obter mais informações, consulte "[Habilitar {{ site.data.variables.product.prodname_github_connect }}](/enterprise/admin/configuration/connecting-github-enterprise-server-to-github-enterprise-cloud#enabling-github-connect)".
2. Você também precisa habilitar o {{ site.data.variables.product.prodname_actions }} para {{ site.data.variables.product.product_location_enterprise }}. Para obter mais informações, consulte "[Habilitar {{ site.data.variables.product.prodname_actions }} e configurar o armazenamento](/enterprise/admin/github-actions/enabling-github-actions-and-configuring-storage)".
3. A próxima etapa é configurar o acesso a ações no {{ site.data.variables.product.prodname_dotcom_the_website }} usando {{ site.data.variables.product.prodname_github_connect }}. Para obter mais informações, consulte "[Habilitar o acesso automático às ações de {{ site.data.variables.product.prodname_dotcom_the_website }} usando o {{ site.data.variables.product.prodname_github_connect }}](/enterprise/admin/github-actions/enabling-automatic-access-to-githubcom-actions-using-github-connect)".
4. Adicione um executor auto-hospedado ao seu repositório, organização ou conta corporativa. Para obter mais informações, consulte "[Adicionando executores auto-hospedados](/actions/hosting-your-own-runners/adding-self-hosted-runners)".

Depois de configurar um executor auto-hospedado, os usuários podem habilitar o {{ site.data.variables.product.prodname_code_scanning }} para repositórios individuais em {{ site.data.variables.product.product_location_enterprise }}. Para obter mais informações, consulte "[Habilitando {{ site.data.variables.product.prodname_code_scanning }}](/github/finding-security-vulnerabilities-and-errors-in-your-code/enabling-code-scanning).

### Executar {{ site.data.variables.product.prodname_code_scanning }} usando o {{ site.data.variables.product.prodname_codeql_runner }}
Se sua organização não está participando da versão beta do {{ site.data.variables.product.prodname_actions }} ou se você não desejar usar {{ site.data.variables.product.prodname_actions }}, você poderá executar {{ site.data.variables.product.prodname_code_scanning }} usando o {{ site.data.variables.product.prodname_codeql_runner }}.

O {{ site.data.variables.product.prodname_codeql_runner }} é uma ferramenta de linha de comando que você pode adicionar ao seu sistema CI/CD de terceiros. A ferramenta executa a análise do {{ site.data.variables.product.prodname_codeql }} em um checkout de um repositório do {{ site.data.variables.product.prodname_dotcom }}. Para obter mais informações, consulte "[Executar o {{ site.data.variables.product.prodname_code_scanning }} no seu sistema de CI](/github/finding-security-vulnerabilities-and-errors-in-your-code/running-code-scanning-in-your-ci-system)".

### Desabilitar {{ site.data.variables.product.prodname_code_scanning }}

{{ site.data.reusables.enterprise_management_console.enable-disable-code-scanning }}

{{ site.data.reusables.enterprise_site_admin_settings.access-settings }}
{{ site.data.reusables.enterprise_site_admin_settings.management-console }}
{{ site.data.reusables.enterprise_management_console.advanced-security-tab }}
1. Em "{{ site.data.variables.product.prodname_advanced_security }}", desmarque **{{ site.data.variables.product.prodname_code_scanning_capc }}**. ![Caixa de seleção para habilitar ou desabilitar {{ site.data.variables.product.prodname_code_scanning }}](/assets/images/enterprise/management-console/code-scanning-disable.png)
{{ site.data.reusables.enterprise_management_console.save-settings }}
