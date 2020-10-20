---
title: Configurar a varredura de código para o seu aparelho
shortTitle: Configurar a varredura do código
intro: 'Você pode habilitar, configurar e desativar {% data variables.product.prodname_code_scanning %} para {% data variables.product.product_location_enterprise %}. {% data variables.product.prodname_code_scanning_capc %} permite aos usuários varrer códigos com relação a erros e vulnerabilidades.'
product: '{% data reusables.gated-features.code-scanning %}'
miniTocMaxHeadingLevel: 4
redirect_from:
  - /enterprise/admin/configuration/configuring-code-scanning-for-your-appliance
versions:
  enterprise-server: '>=2.22'
---

{% data reusables.code-scanning.beta %}

### Sobre o {% data variables.product.prodname_code_scanning %}

{% data reusables.code-scanning.about-code-scanning %}

A tabela abaixo resume os tipos de análise disponíveis para {% data variables.product.prodname_code_scanning %} e fornece links para habilitar o recurso para repositórios individuais.

{% data reusables.code-scanning.enabling-options %}

Para os usuários do {% data variables.product.product_location_enterprise %} conseguirem habilitar e usar o {% data variables.product.prodname_code_scanning %} em seus repositórios, você deve, como administrador do site, habilitar esse recurso para todo o appliance.

### Como eu sei se {% data variables.product.prodname_code_scanning %} está habilitado para meu appliance

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
1. Verificar se há uma **{% data variables.product.prodname_advanced_security %}** entrada na barra lateral esquerda. ![Barra lateral de segurança avançada](/assets/images/enterprise/management-console/sidebar-advanced-security.png)

Se você não puder ver **{% data variables.product.prodname_advanced_security %}** na barra lateral, isso significa que sua licença não inclui suporte para recursos do {% data variables.product.prodname_advanced_security %}, incluindo {% data variables.product.prodname_code_scanning %}. A licença do {% data variables.product.prodname_advanced_security %} dá a você e aos seus usuários acesso a recursos que ajudam a tornar seus repositórios e códigos mais seguros.

### Habilitar o {% data variables.product.prodname_code_scanning %}

{% data reusables.enterprise_management_console.enable-disable-code-scanning %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.advanced-security-tab %}
1. Em "
{% data variables.product.prodname_advanced_security %}," clique em **{% data variables.product.prodname_code_scanning_capc %}**.
![Caixa de seleção para habilitar ou desabilitar {% data variables.product.prodname_code_scanning %}](/assets/images/enterprise/management-console/enable-code-scanning-checkbox.png)
{% data reusables.enterprise_management_console.save-settings %}


### Executar {% data variables.product.prodname_code_scanning %} usando {% data variables.product.prodname_actions %}

#### Configurar um executor auto-hospedado

Se você estiver inscrito no beta de {% data variables.product.prodname_actions %}, {% data variables.product.prodname_ghe_server %} poderá executar {% data variables.product.prodname_code_scanning %} usando um fluxo de trabalho de {% data variables.product.prodname_actions %}. Primeiro, você precisa fornecer um ou mais executores auto-hospedados de {% data variables.product.prodname_actions %} em seu ambiente. É possível fornecer executores auto-hospedados no nível da conta do repositório, organização ou empresa. Para obter mais informações, consulte "[Sobre executores auto-hospedados](/actions/hosting-your-own-runners/about-self-hosted-runners)" e "[Adicionar executores auto-hospedados](/actions/hosting-your-own-runners/adding-self-hosted-runners)".

Você deve garantir que o Git esteja na variável do PATH em qualquer executor auto-hospedados que você usar para executar ações de {% data variables.product.prodname_codeql %}.

#### Provisionar a ação
Para executar {% data variables.product.prodname_code_scanning %} em {% data variables.product.prodname_ghe_server %} com {% data variables.product.prodname_actions %}, a ação apropriada deve estar disponível localmente. Você pode disponibilizar a ação de três maneiras.

- **Recomendado** Você pode usar [{% data variables.product.prodname_github_connect %}](/enterprise/admin/configuration/connecting-github-enterprise-server-to-github-enterprise-cloud) para fazer o download automático das ações no {% data variables.product.prodname_dotcom_the_website %}. A máquina que hospeda sua instância deve conseguir acessar {% data variables.product.prodname_dotcom_the_website %}. Esta abordagem garante que você irá obter o software mais recente automaticamente. Para obter mais informações, consulte "[Configurar o {% data variables.product.prodname_github_connect %} para sincronizar com {% data variables.product.prodname_actions %}](/enterprise/admin/configuration/configuring-code-scanning-for-your-appliance#configuring-github-connect-to-sync-github-actions)".
- Se você desejar usar o {% data variables.product.prodname_codeql_workflow %}, você pode sincronizar o repositório do {% data variables.product.prodname_dotcom_the_website %} ao {% data variables.product.prodname_ghe_server %}, usando a ferramenta de sincronização de Ação do {% data variables.product.prodname_codeql %} disponível em [https://github. om/github/codeql-action-sync-tool](https://github.com/github/codeql-action-sync-tool/). Você pode usar essa ferramenta independentemente se {% data variables.product.product_location_enterprise %} ou seus executores de {% data variables.product.prodname_actions %} terem acesso à internet, contanto que você possa acessar {% data variables.product.product_location_enterprise %} e {% data variables.product.prodname_dotcom_the_website %} simultaneamente no seu computador.
- Você pode criar uma cópia local do repositório da ação no seu servidor, clonando o repositório de {% data variables.product.prodname_dotcom_the_website %} com a ação. Por exemplo, se você desejar usar a ação {% data variables.product.prodname_codeql %}, você poderá criar um repositório na sua instância denominada `github/codeql-action` e, em seguida, clonar o [repositório](https://github.com/github/codeql-action) a partir do {% data variables.product.prodname_dotcom_the_website %} e, posteriormente, fazer push desse repositório no repositório da sua instância `github/codeql-action`. Você também deverá fazer o download de qualquer uma das versões do repositório no {% data variables.product.prodname_dotcom_the_website %} e fazer o upload no repositório `github/codeql-action` de sua instância como versões.


##### Configurar {% data variables.product.prodname_github_connect %} para sincronizar {% data variables.product.prodname_actions %}

1. Se você deseja fazer o download dos fluxos de trabalho de ação sob demanda a partir de {% data variables.product.prodname_dotcom_the_website %}, você deverá habilitar o {% data variables.product.prodname_github_connect %}. Para obter mais informações, consulte "[Habilitar {% data variables.product.prodname_github_connect %}](/enterprise/admin/configuration/connecting-github-enterprise-server-to-github-enterprise-cloud#enabling-github-connect)".
2. Você também precisa habilitar o {% data variables.product.prodname_actions %} para {% data variables.product.product_location_enterprise %}. Para obter mais informações, consulte "[Habilitar {% data variables.product.prodname_actions %} e configurar o armazenamento](/enterprise/admin/github-actions/enabling-github-actions-and-configuring-storage)".
3. A próxima etapa é configurar o acesso a ações no {% data variables.product.prodname_dotcom_the_website %} usando {% data variables.product.prodname_github_connect %}. Para obter mais informações, consulte "[Habilitar o acesso automático às ações de {% data variables.product.prodname_dotcom_the_website %} usando o {% data variables.product.prodname_github_connect %}](/enterprise/admin/github-actions/enabling-automatic-access-to-githubcom-actions-using-github-connect)".
4. Adicione um executor auto-hospedado ao seu repositório, organização ou conta corporativa. Para obter mais informações, consulte "[Adicionando executores auto-hospedados](/actions/hosting-your-own-runners/adding-self-hosted-runners)".

Depois de configurar um executor auto-hospedado, os usuários podem habilitar o {% data variables.product.prodname_code_scanning %} para repositórios individuais em {% data variables.product.product_location_enterprise %}. Para obter mais informações, consulte "[Habilitando {% data variables.product.prodname_code_scanning %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/enabling-code-scanning).

### Executar {% data variables.product.prodname_code_scanning %} usando o {% data variables.product.prodname_codeql_runner %}
Se sua organização não está participando da versão beta do {% data variables.product.prodname_actions %} ou se você não desejar usar {% data variables.product.prodname_actions %}, você poderá executar {% data variables.product.prodname_code_scanning %} usando o {% data variables.product.prodname_codeql_runner %}.

O {% data variables.product.prodname_codeql_runner %} é uma ferramenta de linha de comando que você pode adicionar ao seu sistema CI/CD de terceiros. A ferramenta executa a análise do {% data variables.product.prodname_codeql %} em um checkout de um repositório do {% data variables.product.prodname_dotcom %}. Para obter mais informações, consulte "[Executar o {% data variables.product.prodname_code_scanning %} no seu sistema de CI](/github/finding-security-vulnerabilities-and-errors-in-your-code/running-codeql-code-scanning-in-your-ci-system)".

### Desabilitar {% data variables.product.prodname_code_scanning %}

{% data reusables.enterprise_management_console.enable-disable-code-scanning %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.advanced-security-tab %}
1. Em "
{% data variables.product.prodname_advanced_security %}", desmarque **{% data variables.product.prodname_code_scanning_capc %}**.
![Caixa de seleção para habilitar ou desabilitar {% data variables.product.prodname_code_scanning %}](/assets/images/enterprise/management-console/code-scanning-disable.png)
{% data reusables.enterprise_management_console.save-settings %}
