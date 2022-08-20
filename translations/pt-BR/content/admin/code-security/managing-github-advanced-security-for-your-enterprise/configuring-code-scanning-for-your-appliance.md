---
title: Configurar a varredura de código para o seu aparelho
shortTitle: Configurar a varredura do código
intro: 'Você pode habilitar, configurar e desativar {% data variables.product.prodname_code_scanning %} para {% data variables.product.product_location %}. {% data variables.product.prodname_code_scanning_capc %} permite aos usuários varrer códigos com relação a erros e vulnerabilidades.'
product: '{% data reusables.gated-features.code-scanning %}'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /enterprise/admin/configuration/configuring-code-scanning-for-your-appliance
  - /admin/configuration/configuring-code-scanning-for-your-appliance
  - /admin/advanced-security/configuring-code-scanning-for-your-appliance
versions:
  ghes: '*'
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - Enterprise
  - Security
---

{% data reusables.code-scanning.beta %}

## Sobre o {% data variables.product.prodname_code_scanning %}

{% data reusables.code-scanning.about-code-scanning %}

Você pode configurar {% data variables.product.prodname_code_scanning %} para executar análise de {% data variables.product.prodname_codeql %} e análise de terceiros. {% data variables.product.prodname_code_scanning_capc %} também é compatível com a análise de execução nativa que utiliza {% data variables.product.prodname_actions %} ou externamente que utiliza a infraestrutura de CI/CD existente. A tabela abaixo resume todas as opções disponíveis para os usuários quando você configurar {% data variables.product.product_location %} para permitir que {% data variables.product.prodname_code_scanning %} use ações.

{% data reusables.code-scanning.enabling-options %}

## Verificando se a sua licença inclui {% data variables.product.prodname_GH_advanced_security %}

{% data reusables.advanced-security.check-for-ghas-license %}

## Pré-requisitos para {% data variables.product.prodname_code_scanning %}

- Uma licença para {% data variables.product.prodname_GH_advanced_security %}{% ifversion ghes %} (consulte "[Sobre cobrança para {% data variables.product.prodname_GH_advanced_security %}](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security)"){% endif %}

- {% data variables.product.prodname_code_scanning_capc %} habilitado no console de gerenciamento (consulte "[Habilitando {% data variables.product.prodname_GH_advanced_security %} para a sua empresa](/admin/advanced-security/enabling-github-advanced-security-for-your-enterprise)")

- Uma VM ou contêiner para que a análise de {% data variables.product.prodname_code_scanning %} seja executada.

## Executar {% data variables.product.prodname_code_scanning %} usando {% data variables.product.prodname_actions %}

### Configurar um executor auto-hospedado

{% data variables.product.prodname_ghe_server %} pode executar {% data variables.product.prodname_code_scanning %} usando um fluxo de trabalho de {% data variables.product.prodname_actions %}. Primeiro, você precisa fornecer um ou mais executores auto-hospedados de {% data variables.product.prodname_actions %} em seu ambiente. É possível fornecer executores auto-hospedados no nível da conta do repositório, organização ou empresa. Para obter mais informações, consulte "[Sobre executores auto-hospedados](/actions/hosting-your-own-runners/about-self-hosted-runners)" e "[Adicionar executores auto-hospedados](/actions/hosting-your-own-runners/adding-self-hosted-runners)".

Você deve garantir que o Git esteja na variável do PATH em qualquer executor auto-hospedados que você usar para executar ações de {% data variables.product.prodname_codeql %}.

### Provisionando ações para {% data variables.product.prodname_code_scanning %}

{% ifversion ghes %}
Se você deseja usar ações para executar {% data variables.product.prodname_code_scanning %} em {% data variables.product.prodname_ghe_server %}, as ações deverão estar disponíveis no seu dispositivo.

A ação {% data variables.product.prodname_codeql %} está incluída na sua instalação de {% data variables.product.prodname_ghe_server %}. Se {% data variables.product.prodname_ghe_server %} {{ allVersions[currentVersion].currentRelease }} tem acesso à internet, a ação irá fazer o download automaticamente do pacote de {% data variables.product.prodname_codeql %} {% data variables.product.codeql_cli_ghes_recommended_version %} necessário para realizar análise. Como alternativa, você pode usar uma ferramenta de sincronização para tornar a versão mais recente do pacote de análise de {% data variables.product.prodname_codeql %} disponível localmente. Para obter mais informações, consulte "[Configurar {% data variables.product.prodname_codeql %} análise em um servidor sem acesso à internet](#configuring-codeql-analysis-on-a-server-without-internet-access)" abaixo.

Você também pode disponibilizar ações de terceiros para os usuários de {% data variables.product.prodname_code_scanning %}, configurando {% data variables.product.prodname_github_connect %}. Para obter mais informações, consulte "[Configurar {% data variables.product.prodname_github_connect %} para sincronizar {% data variables.product.prodname_actions %}](/enterprise/admin/configuration/configuring-code-scanning-for-your-appliance#configuring-github-connect-to-sync-github-actions)" abaixo.

### Configurar a análise de {% data variables.product.prodname_codeql %} em um servidor sem acesso à internet
Se o servidor em que você está executando {% data variables.product.prodname_ghe_server %} não estiver conectado à internet e você deseja permitir que os usuários habilitem {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} para seus repositórios, você deverá usar a ferramenta de sincronização de ação {% data variables.product.prodname_codeql %} para copiar o pacote de análises {% data variables.product.prodname_codeql %} de {% data variables.product.prodname_dotcom_the_website %} para seu servidor. A ferramenta e os detalhes de como usá-la estão disponíveis em [https://github.com/github/codeql-action-sync-tool](https://github.com/github/codeql-action-sync-tool/).

Se você configurar a ferramenta de sincronização de ação de {% data variables.product.prodname_codeql %}, você poderá usá-la para sincronizar as últimas versões da ação de {% data variables.product.prodname_codeql %} e pacote de análise associado a {% data variables.product.prodname_codeql %}. Estes são compatíveis com {% data variables.product.prodname_ghe_server %}.

{% endif %}

### Configurar {% data variables.product.prodname_github_connect %} para sincronizar {% data variables.product.prodname_actions %}
1. Se você deseja fazer o download dos fluxos de trabalho de ação sob demanda a partir de {% data variables.product.prodname_dotcom_the_website %}, você deverá habilitar o {% data variables.product.prodname_github_connect %}. Para obter mais informações, consulte "[Habilitando {% data variables.product.prodname_github_connect %}](/admin/configuration/managing-connections-between-your-enterprise-accounts/connecting-your-enterprise-account-to-github-enterprise-cloud#enabling-github-connect)."
2. Você também precisa habilitar o {% data variables.product.prodname_actions %} para {% data variables.product.product_location %}. Para obter mais informações, consulte "[Primeiros passos com {% data variables.product.prodname_actions %} for {% data variables.product.prodname_ghe_server %}](/admin/github-actions/getting-started-with-github-actions-for-github-enterprise-server)".
3. A próxima etapa é configurar o acesso a ações no {% data variables.product.prodname_dotcom_the_website %} usando {% data variables.product.prodname_github_connect %}. Para obter mais informações, consulte "[Habilitar o acesso automático às ações de {% data variables.product.prodname_dotcom_the_website %} usando o {% data variables.product.prodname_github_connect %}](/enterprise/admin/github-actions/enabling-automatic-access-to-githubcom-actions-using-github-connect)".
4. Adicione um executor auto-hospedado ao seu repositório, organização ou conta corporativa. Para obter mais informações, consulte "[Adicionando executores auto-hospedados](/actions/hosting-your-own-runners/adding-self-hosted-runners)".

## Executando a digitalização de código usando o {% data variables.product.prodname_codeql_cli %}

Se você não quiser usar {% data variables.product.prodname_actions %}, você deverá executar {% data variables.product.prodname_code_scanning %} usando o {% data variables.product.prodname_codeql_cli %}.

O {% data variables.product.prodname_codeql_cli %} é uma ferramenta de linha de comando que você usa para analisar bases de código em qualquer máquina, incluindo um sistema de CI/CD de terceiros. Para obter mais informações, consulte "[Instalando a CLI do CodeQL no seu sistema de CI](/code-security/code-scanning/using-codeql-code-scanning-with-your-existing-ci-system/installing-codeql-cli-in-your-ci-system)."

{% ifversion codeql-runner-supported %}

## Executar {% data variables.product.prodname_code_scanning %} usando o {% data variables.product.prodname_codeql_runner %}

{% data reusables.code-scanning.deprecation-codeql-runner %}

Se você não quiser usar {% data variables.product.prodname_actions %}, você poderá executar {% data variables.product.prodname_code_scanning %} usando o {% data variables.product.prodname_codeql_runner %}.

O {% data variables.product.prodname_codeql_runner %} é uma ferramenta de linha de comando que você pode adicionar ao seu sistema CI/CD de terceiros. A ferramenta executa a análise do {% data variables.product.prodname_codeql %} em um checkout de um repositório do {% data variables.product.prodname_dotcom %}. Para obter mais informações, consulte "[Executar o {% data variables.product.prodname_code_scanning %} no seu sistema de CI](/github/finding-security-vulnerabilities-and-errors-in-your-code/running-codeql-code-scanning-in-your-ci-system)".

{% endif %}
