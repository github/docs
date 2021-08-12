---
title: Configurar a varredura de código para o seu aparelho
shortTitle: Configurar a varredura do código
intro: 'Você pode habilitar, configurar e desativar {% data variables.product.prodname_code_scanning %} para {% data variables.product.product_location %}. {% data variables.product.prodname_code_scanning_capc %} permite aos usuários varrer códigos com relação a erros e vulnerabilidades.'
product: '{% data reusables.gated-features.code-scanning %}'
miniTocMaxHeadingLevel: 4
redirect_from:
  - /enterprise/admin/configuration/configuring-code-scanning-for-your-appliance
  - /admin/configuration/configuring-code-scanning-for-your-appliance
versions:
  enterprise-server: '>=2.22'
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - Enterprise
  - Security
---

{% data reusables.code-scanning.beta %}

### Sobre o {% data variables.product.prodname_code_scanning %}

{% data reusables.code-scanning.about-code-scanning %}

Você pode configurar {% data variables.product.prodname_code_scanning %} para executar análise de {% data variables.product.prodname_codeql %} e análise de terceiros. {% data variables.product.prodname_code_scanning_capc %} também é compatível com a análise de execução nativa que utiliza {% data variables.product.prodname_actions %} ou externamente que utiliza a infraestrutura de CI/CD existente. A tabela abaixo resume todas as opções disponíveis para os usuários quando você configurar {% data variables.product.product_location %} para permitir que {% data variables.product.prodname_code_scanning %} use ações.

{% data reusables.code-scanning.enabling-options %}

### Pré-requisitos para {% data variables.product.prodname_code_scanning %}

- Uma licença para {% data variables.product.prodname_GH_advanced_security %}{% if currentVersion ver_gt "enterprise-server@3.0" %} (consulte "[Sobre licenciamento para {% data variables.product.prodname_GH_advanced_security %}](/admin/advanced-security/about-licensing-for-github-advanced-security)"){% endif %}

- {% data variables.product.prodname_code_scanning_capc %} habilitado no console de gerenciamento (consulte "[Habilitando {% data variables.product.prodname_GH_advanced_security %} para a sua empresa](/admin/advanced-security/enabling-github-advanced-security-for-your-enterprise)")

- Uma VM ou contêiner para que a análise de {% data variables.product.prodname_code_scanning %} seja executada.

### Executar {% data variables.product.prodname_code_scanning %} usando {% data variables.product.prodname_actions %}

#### Configurar um executor auto-hospedado

{% data variables.product.prodname_ghe_server %} pode executar {% data variables.product.prodname_code_scanning %} usando um fluxo de trabalho de {% data variables.product.prodname_actions %}. Primeiro, você precisa fornecer um ou mais executores auto-hospedados de {% data variables.product.prodname_actions %} em seu ambiente. É possível fornecer executores auto-hospedados no nível da conta do repositório, organização ou empresa. Para obter mais informações, consulte "[Sobre executores auto-hospedados](/actions/hosting-your-own-runners/about-self-hosted-runners)" e "[Adicionar executores auto-hospedados](/actions/hosting-your-own-runners/adding-self-hosted-runners)".

Você deve garantir que o Git esteja na variável do PATH em qualquer executor auto-hospedados que você usar para executar ações de {% data variables.product.prodname_codeql %}.

#### Provisionando ações para {% data variables.product.prodname_code_scanning %}

{% if currentVersion ver_gt "enterprise-server@2.22" %}
Se você deseja usar ações para executar {% data variables.product.prodname_code_scanning %} em {% data variables.product.prodname_ghe_server %}, as ações deverão estar disponíveis no seu dispositivo.

A ação {% data variables.product.prodname_codeql %} está incluída na sua instalação de {% data variables.product.prodname_ghe_server %}. Se {% data variables.product.prodname_ghe_server %} tiver acesso à internet, a ação fará automaticamente o download do pacote de {% data variables.product.prodname_codeql %} necessário para realizar a análise. Como alternativa, você pode usar uma ferramenta de sincronização para tornar o pacote de análise de {% data variables.product.prodname_codeql %} disponível localmente. Para obter mais informações, consulte "[Configurar {% data variables.product.prodname_codeql %} análise em um servidor sem acesso à internet](#configuring-codeql-analysis-on-a-server-without-internet-access)" abaixo.

Você também pode disponibilizar ações de terceiros para os usuários de {% data variables.product.prodname_code_scanning %}, configurando {% data variables.product.prodname_github_connect %}. Para obter mais informações, consulte "[Configurar {% data variables.product.prodname_github_connect %} para sincronizar {% data variables.product.prodname_actions %}](/enterprise/admin/configuration/configuring-code-scanning-for-your-appliance#configuring-github-connect-to-sync-github-actions)" abaixo.

#### Configurar a análise de {% data variables.product.prodname_codeql %} em um servidor sem acesso à internet
Se o servidor em que você está executando {% data variables.product.prodname_ghe_server %} não estiver conectado à internet e você deseja permitir que os usuários habilitem {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} para seus repositórios, você deverá usar a ferramenta de sincronização de ação {% data variables.product.prodname_codeql %} para copiar o pacote de análises {% data variables.product.prodname_codeql %} de {% data variables.product.prodname_dotcom_the_website %} para seu servidor. A ferramenta e os detalhes de como usá-la estão disponíveis em [https://github.com/github/codeql-action-sync-tool](https://github.com/github/codeql-action-sync-tool/).

Se você configurar a ferramenta de sincronização de ação de {% data variables.product.prodname_codeql %}, você poderá usá-la para sincronizar as últimas versões da ação de {% data variables.product.prodname_codeql %} e pacote de análise associado a {% data variables.product.prodname_codeql %}. Estes são compatíveis com {% data variables.product.prodname_ghe_server %}.

{% endif %}

{% if currentVersion == "enterprise-server@2.22" %}
Para executar {% data variables.product.prodname_code_scanning %} em {% data variables.product.prodname_ghe_server %} com {% data variables.product.prodname_actions %}, as ações apropriadas devem estar disponíveis localmente. Você pode disponibilizar as ações de três maneiras.

- **Recomendado**: Você pode usar [{% data variables.product.prodname_github_connect %}](/enterprise/admin/configuration/connecting-github-enterprise-server-to-github-enterprise-cloud) para fazer o download automático das ações no {% data variables.product.prodname_dotcom_the_website %}. A máquina que hospeda sua instância deve conseguir acessar {% data variables.product.prodname_dotcom_the_website %}. Esta abordagem garante que você irá obter o software mais recente automaticamente. Para obter mais informações, consulte "[Configurar o {% data variables.product.prodname_github_connect %} para sincronizar com {% data variables.product.prodname_actions %}](/enterprise/admin/configuration/configuring-code-scanning-for-your-appliance#configuring-github-connect-to-sync-github-actions)".
- Se você desejar usar o {% data variables.product.prodname_codeql_workflow %}, você pode sincronizar o repositório do {% data variables.product.prodname_dotcom_the_website %} ao {% data variables.product.prodname_ghe_server %}, usando a ferramenta de sincronização de Ação do {% data variables.product.prodname_codeql %} disponível em [https://github. om/github/codeql-action-sync-tool](https://github.com/github/codeql-action-sync-tool/). Você pode usar essa ferramenta independentemente se {% data variables.product.product_location %} ou seus executores de {% data variables.product.prodname_actions %} terem acesso à internet, contanto que você possa acessar {% data variables.product.product_location %} e {% data variables.product.prodname_dotcom_the_website %} simultaneamente no seu computador.
- É possível criar uma cópia local do repositório de uma ação no servidor, clonando o repositório de {% data variables.product.prodname_dotcom_the_website %} que contém a ação. Por exemplo, se você quiser usar as ações para {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %}, você poderá criar um repositório na sua instância denominado `github/codeql-action`. Em seguida, clone o [repositório](https://github.com/github/codeql-action) de {% data variables.product.prodname_dotcom_the_website %} depois faça push desse repositório no repositório `github/codeql-action` da instância. Você também deverá fazer o download de qualquer uma das versões do repositório no {% data variables.product.prodname_dotcom_the_website %} e fazer o upload no repositório `github/codeql-action` de sua instância como versões.
{% endif %}

#### Configurar {% data variables.product.prodname_github_connect %} para sincronizar {% data variables.product.prodname_actions %}
1. Se você deseja fazer o download dos fluxos de trabalho de ação sob demanda a partir de {% data variables.product.prodname_dotcom_the_website %}, você deverá habilitar o {% data variables.product.prodname_github_connect %}. Para obter mais informações, consulte "[Habilitar {% data variables.product.prodname_github_connect %}](/enterprise/admin/configuration/connecting-github-enterprise-server-to-github-enterprise-cloud#enabling-github-connect)".
2. Você também precisa habilitar o {% data variables.product.prodname_actions %} para {% data variables.product.product_location %}. Para obter mais informações, consulte "[Primeiros passos com {% data variables.product.prodname_actions %} for {% data variables.product.prodname_ghe_server %}](/admin/github-actions/getting-started-with-github-actions-for-github-enterprise-server)".
3. A próxima etapa é configurar o acesso a ações no {% data variables.product.prodname_dotcom_the_website %} usando {% data variables.product.prodname_github_connect %}. Para obter mais informações, consulte "[Habilitar o acesso automático às ações de {% data variables.product.prodname_dotcom_the_website %} usando o {% data variables.product.prodname_github_connect %}](/enterprise/admin/github-actions/enabling-automatic-access-to-githubcom-actions-using-github-connect)".
4. Adicione um executor auto-hospedado ao seu repositório, organização ou conta corporativa. Para obter mais informações, consulte "[Adicionando executores auto-hospedados](/actions/hosting-your-own-runners/adding-self-hosted-runners)".

### Executar {% data variables.product.prodname_code_scanning %} usando o {% data variables.product.prodname_codeql_runner %}
Se você não quiser usar {% data variables.product.prodname_actions %}, você poderá executar {% data variables.product.prodname_code_scanning %} usando o {% data variables.product.prodname_codeql_runner %}.

O {% data variables.product.prodname_codeql_runner %} é uma ferramenta de linha de comando que você pode adicionar ao seu sistema CI/CD de terceiros. A ferramenta executa a análise do {% data variables.product.prodname_codeql %} em um checkout de um repositório do {% data variables.product.prodname_dotcom %}. Para obter mais informações, consulte "[Executar o {% data variables.product.prodname_code_scanning %} no seu sistema de CI](/github/finding-security-vulnerabilities-and-errors-in-your-code/running-codeql-code-scanning-in-your-ci-system)".
