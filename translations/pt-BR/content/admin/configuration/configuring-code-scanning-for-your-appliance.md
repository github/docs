---
title: Configurar a varredura de código para o seu aparelho
shortTitle: Configurar a varredura do código
intro: 'Você pode habilitar, configurar e desativar {% data variables.product.prodname_code_scanning %} para {% data variables.product.product_location %}. {% data variables.product.prodname_code_scanning_capc %} permite aos usuários varrer códigos com relação a erros e vulnerabilidades.'
product: '{% data reusables.gated-features.code-scanning %}'
miniTocMaxHeadingLevel: 4
redirect_from:
  - /enterprise/admin/configuration/configuring-code-scanning-for-your-appliance
versions:
  enterprise-server: '>=2.22'
topics:
  - Enterprise
---

{% data reusables.code-scanning.beta %}

### Sobre o {% data variables.product.prodname_code_scanning %}

{% data reusables.code-scanning.about-code-scanning %}

A tabela abaixo resume os tipos de análise disponíveis para {% data variables.product.prodname_code_scanning %} e fornece links para habilitar o recurso para repositórios individuais.

{% data reusables.code-scanning.enabling-options %}

Para os usuários do {% data variables.product.product_location %} conseguirem habilitar e usar o {% data variables.product.prodname_code_scanning %} em seus repositórios, você deve, como administrador do site, habilitar esse recurso para todo o appliance.

### Como eu sei se {% data variables.product.prodname_code_scanning %} está habilitado para meu appliance

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
1. Verificar se há uma **{% data variables.product.prodname_advanced_security %}** entrada na barra lateral esquerda. ![Barra lateral de segurança avançada](/assets/images/enterprise/management-console/sidebar-advanced-security.png)

{% data reusables.enterprise_management_console.advanced-security-license %}

### Habilitar o {% data variables.product.prodname_code_scanning %}

{% data reusables.enterprise_management_console.enable-disable-security-features %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.advanced-security-tab %}
1. Em "
{% data variables.product.prodname_advanced_security %}," clique em **{% data variables.product.prodname_code_scanning_capc %}**.
![Caixa de seleção para habilitar ou desabilitar {% data variables.product.prodname_code_scanning %}](/assets/images/enterprise/management-console/enable-code-scanning-checkbox.png)
{% data reusables.enterprise_management_console.save-settings %}

### Executar {% data variables.product.prodname_code_scanning %} usando {% data variables.product.prodname_actions %}

#### Configurar um executor auto-hospedado

{% data variables.product.prodname_ghe_server %} pode executar {% data variables.product.prodname_code_scanning %} usando um fluxo de trabalho de {% data variables.product.prodname_actions %}. Primeiro, você precisa fornecer um ou mais executores auto-hospedados de {% data variables.product.prodname_actions %} em seu ambiente. É possível fornecer executores auto-hospedados no nível da conta do repositório, organização ou empresa. Para obter mais informações, consulte "[Sobre executores auto-hospedados](/actions/hosting-your-own-runners/about-self-hosted-runners)" e "[Adicionar executores auto-hospedados](/actions/hosting-your-own-runners/adding-self-hosted-runners)".

Você deve garantir que o Git esteja na variável do PATH em qualquer executor auto-hospedados que você usar para executar ações de {% data variables.product.prodname_codeql %}.

#### Provisionar ações

{% if currentVersion ver_gt "enterprise-server@2.22" %}
Se você quiser usar ações para executar
{% data variables.product.prodname_code_scanning %} em {% data variables.product.prodname_ghe_server %}, as ações deverão estar disponíveis no seu aparelho.

A ação {% data variables.product.prodname_codeql %} está incluída na sua instalação de {% data variables.product.prodname_ghe_server %}. Se {% data variables.product.prodname_ghe_server %} tiver acesso à internet, a ação fará automaticamente o download do pacote de {% data variables.product.prodname_codeql %} necessário para realizar a análise. Como alternativa, você pode usar uma ferramenta de sincronização para tornar o pacote de análise de {% data variables.product.prodname_codeql %} disponível localmente. Para obter mais informações, consulte "[Configurar {% data variables.product.prodname_codeql %} análise em um servidor sem acesso à internet](#configuring-codeql-analysis-on-a-server-without-internet-access)" abaixo.

Você também pode disponibilizar ações de terceiros para os usuários de {% data variables.product.prodname_code_scanning %}, configurando {% data variables.product.prodname_github_connect %}. Para obter mais informações, consulte "[Configurar {% data variables.product.prodname_github_connect %} para sincronizar {% data variables.product.prodname_actions %}](/enterprise/admin/configuration/configuring-code-scanning-for-your-appliance#configuring-github-connect-to-sync-github-actions)" abaixo.

#### Configurar a análise de {% data variables.product.prodname_codeql %} em um servidor sem acesso à internet
Se o servidor em que você está executando {% data variables.product.prodname_ghe_server %} não estiver conectado à internet e você deseja permitir que os usuários habilitem {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} para seus repositórios, você deverá usar a ferramenta de sincronização de ação {% data variables.product.prodname_codeql %} para copiar o pacote de análises {% data variables.product.prodname_codeql %} de {% data variables.product.prodname_dotcom_the_website %} para seu servidor. A ferramenta e os detalhes de como usá-la estão disponíveis em [https://github.com/github/codeql-action-sync-tool](https://github.com/github/codeql-action-sync-tool/).

Se você configurar a ferramenta de sincronização de ação de {% data variables.product.prodname_codeql %}, você poderá usá-la para sincronizar as últimas versões da ação de {% data variables.product.prodname_codeql %} e pacote de análise associado a {% data variables.product.prodname_codeql %}. Estes são compatíveis com {% data variables.product.prodname_ghe_server %}.

{% endif %}

{% if currentVersion == "enterprise-server@2.22" %}
Para executar
{% data variables.product.prodname_code_scanning %} em {% data variables.product.prodname_ghe_server %} com {% data variables.product.prodname_actions %}, as ações apropriadas deverão estar disponíveis localmente. Você pode disponibilizar as ações de três maneiras.

- **Recomendado**: Você pode usar [{% data variables.product.prodname_github_connect %}](/enterprise/admin/configuration/connecting-github-enterprise-server-to-github-enterprise-cloud) para fazer o download automático das ações no {% data variables.product.prodname_dotcom_the_website %}. A máquina que hospeda sua instância deve conseguir acessar {% data variables.product.prodname_dotcom_the_website %}. Esta abordagem garante que você irá obter o software mais recente automaticamente. Para obter mais informações, consulte "[Configurar o {% data variables.product.prodname_github_connect %} para sincronizar com {% data variables.product.prodname_actions %}](/enterprise/admin/configuration/configuring-code-scanning-for-your-appliance#configuring-github-connect-to-sync-github-actions)".
- Se você desejar usar o {% data variables.product.prodname_codeql_workflow %}, você pode sincronizar o repositório do {% data variables.product.prodname_dotcom_the_website %} ao {% data variables.product.prodname_ghe_server %}, usando a ferramenta de sincronização de Ação do {% data variables.product.prodname_codeql %} disponível em [https://github. om/github/codeql-action-sync-tool](https://github.com/github/codeql-action-sync-tool/). Você pode usar essa ferramenta independentemente se {% data variables.product.product_location %} ou seus executores de {% data variables.product.prodname_actions %} terem acesso à internet, contanto que você possa acessar {% data variables.product.product_location %} e {% data variables.product.prodname_dotcom_the_website %} simultaneamente no seu computador.
- É possível criar uma cópia local do repositório de uma ação no servidor, clonando o repositório de {% data variables.product.prodname_dotcom_the_website %} que contém a ação. Por exemplo, se você quiser usar as ações para {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %}, você poderá criar um repositório na sua instância denominado `github/codeql-action`. Em seguida, clone o [repositório](https://github.com/github/codeql-action) de {% data variables.product.prodname_dotcom_the_website %} depois faça push desse repositório no repositório `github/codeql-action` da instância. Você também deverá fazer o download de qualquer uma das versões do repositório no {% data variables.product.prodname_dotcom_the_website %} e fazer o upload no repositório `github/codeql-action` de sua instância como versões.
{% endif %}

#### Configurar {% data variables.product.prodname_github_connect %} para sincronizar {% data variables.product.prodname_actions %}
1. Se você deseja fazer o download dos fluxos de trabalho de ação sob demanda a partir de {% data variables.product.prodname_dotcom_the_website %}, você deverá habilitar o {% data variables.product.prodname_github_connect %}. Para obter mais informações, consulte "[Habilitar {% data variables.product.prodname_github_connect %}](/enterprise/admin/configuration/connecting-github-enterprise-server-to-github-enterprise-cloud#enabling-github-connect)".
2. Você também precisa habilitar o {% data variables.product.prodname_actions %} para {% data variables.product.product_location %}. Para obter mais informações, consulte "[Primeiros passos com {% data variables.product.prodname_actions %} for {% data variables.product.prodname_ghe_server %}](/admin/github-actions/getting-started-with-github-actions-for-github-enterprise-server)".
3. A próxima etapa é configurar o acesso a ações no {% data variables.product.prodname_dotcom_the_website %} usando {% data variables.product.prodname_github_connect %}. Para obter mais informações, consulte "[Habilitar o acesso automático às ações de {% data variables.product.prodname_dotcom_the_website %} usando o {% data variables.product.prodname_github_connect %}](/enterprise/admin/github-actions/enabling-automatic-access-to-githubcom-actions-using-github-connect)".
4. Adicione um executor auto-hospedado ao seu repositório, organização ou conta corporativa. Para obter mais informações, consulte "[Adicionando executores auto-hospedados](/actions/hosting-your-own-runners/adding-self-hosted-runners)".

#### Habilitar a verificação de código para repositórios individuais
Depois que você configurar um executor auto-hospedado, {% if currentVersion == "enterprise-server@2.22" %}e provisionar as ações,{% endif %} os usuários poderão habilitar {% data variables.product.prodname_code_scanning %} para repositórios individuais em {% data variables.product.product_location %}. Para obter mais informações, consulte "[Configurar {% data variables.product.prodname_code_scanning %} para um repositório](/github/finding-security-vulnerabilities-and-errors-in-your-code/setting-up-code-scanning-for-a-repository)".

### Executar {% data variables.product.prodname_code_scanning %} usando o {% data variables.product.prodname_codeql_runner %}
Se você não quiser usar {% data variables.product.prodname_actions %}, você poderá executar {% data variables.product.prodname_code_scanning %} usando o {% data variables.product.prodname_codeql_runner %}.

O {% data variables.product.prodname_codeql_runner %} é uma ferramenta de linha de comando que você pode adicionar ao seu sistema CI/CD de terceiros. A ferramenta executa a análise do {% data variables.product.prodname_codeql %} em um checkout de um repositório do {% data variables.product.prodname_dotcom %}. Para obter mais informações, consulte "[Executar o {% data variables.product.prodname_code_scanning %} no seu sistema de CI](/github/finding-security-vulnerabilities-and-errors-in-your-code/running-codeql-code-scanning-in-your-ci-system)".

### Desabilitar {% data variables.product.prodname_code_scanning %}

{% data reusables.enterprise_management_console.enable-disable-security-features %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.advanced-security-tab %}
1. Em "
{% data variables.product.prodname_advanced_security %}", desmarque **{% data variables.product.prodname_code_scanning_capc %}**.
![Caixa de seleção para habilitar ou desabilitar {% data variables.product.prodname_code_scanning %}](/assets/images/enterprise/management-console/code-scanning-disable.png)
{% data reusables.enterprise_management_console.save-settings %}

### Habilitar ou desabilitar {% data variables.product.prodname_code_scanning %} através do shell administrativo (SSH)

Você pode habilitar ou desabilitar {% data variables.product.prodname_code_scanning %} programaticamente em {% data variables.product.product_location %}. Por exemplo, você pode habilitar {% data variables.product.prodname_code_scanning %} com suas ferramentas de código de infraestrutura quando e quando você implantar uma instância para preparação ou recuperação de desastres.

Para mais informações sobre o shell administrativo e os utilitários da linha de comando para {% data variables.product.prodname_ghe_server %}, consulte "[Acessar o shell administrativo (SSH)](/admin/configuration/accessing-the-administrative-shell-ssh)" e "[Utilitários de linha de comando](/admin/configuration/command-line-utilities#ghe-config)".

1. SSH em {% data variables.product.product_location %}.
1. Habilite {% data variables.product.prodname_code_scanning %}.
    ```shell
    ghe-config app.minio.enabled true
    ghe-config app.code-scanning.enabled true
    ```
2. Opcionalmente, desabilite {% data variables.product.prodname_code_scanning %}.
    ```shell
    ghe-config app.minio.enabled false
    ghe-config app.code-scanning.enabled false
    ```
3. Aplique a configuração.
    ```shell
  ghe-config-apply
  ```
