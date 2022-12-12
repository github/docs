---
title: Configurar a varredura de código para o seu aparelho
shortTitle: Configuring code scanning
intro: 'Você pode habilitar, configurar e desativar a {% data variables.product.prodname_code_scanning %} no {% data variables.location.product_location %}. {% data variables.product.prodname_code_scanning_capc %} permite aos usuários varrer códigos com relação a erros e vulnerabilidades.'
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
ms.openlocfilehash: 11ad9bfe108d339af3992277cab0918998eb54fb
ms.sourcegitcommit: b617c4a7a1e4bf2de3987a86e0eb217d7031490f
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/11/2022
ms.locfileid: '148161083'
---
{% data reusables.code-scanning.beta %}

## Sobre a {% data variables.product.prodname_code_scanning %}

{% data reusables.code-scanning.about-code-scanning %}

Você pode configurar {% data variables.product.prodname_code_scanning %} para executar análise de {% data variables.product.prodname_codeql %} e análise de terceiros. {% data variables.product.prodname_code_scanning_capc %} também é compatível com a análise de execução nativa que utiliza {% data variables.product.prodname_actions %} ou externamente que utiliza a infraestrutura de CI/CD existente. A tabela abaixo resume todas as opções disponíveis para os usuários quando você configura o {% data variables.location.product_location %} para permitir que a {% data variables.product.prodname_code_scanning %} use ações.

{% data reusables.code-scanning.enabling-options %}

## Verificando se a sua licença inclui {% data variables.product.prodname_GH_advanced_security %}

{% data reusables.advanced-security.check-for-ghas-license %}

## Pré-requisitos para {% data variables.product.prodname_code_scanning %}

- Uma licença do {% data variables.product.prodname_GH_advanced_security %}{% ifversion ghes %} (confira "[Sobre a cobrança do {% data variables.product.prodname_GH_advanced_security %}](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security)"){% endif %}

- A {% data variables.product.prodname_code_scanning_capc %} habilitada no console de gerenciamento (confira "[Como habilitar o {% data variables.product.prodname_GH_advanced_security %} para sua empresa](/admin/advanced-security/enabling-github-advanced-security-for-your-enterprise)")

- Uma VM ou contêiner para que a análise de {% data variables.product.prodname_code_scanning %} seja executada.

## Executar {% data variables.product.prodname_code_scanning %} usando {% data variables.product.prodname_actions %}

### Configurar um executor auto-hospedado

{% data variables.product.prodname_ghe_server %} pode executar {% data variables.product.prodname_code_scanning %} usando um fluxo de trabalho de {% data variables.product.prodname_actions %}. Primeiro, você precisa fornecer um ou mais executores auto-hospedados de {% data variables.product.prodname_actions %} em seu ambiente. É possível fornecer executores auto-hospedados no nível da conta do repositório, organização ou empresa. Para obter mais informações, confira "[Sobre os executores auto-hospedados](/actions/hosting-your-own-runners/about-self-hosted-runners)" e "[Como adicionar executores auto-hospedados](/actions/hosting-your-own-runners/adding-self-hosted-runners)".

Você deve garantir que o Git esteja na variável do PATH em qualquer executor auto-hospedados que você usar para executar ações de {% data variables.product.prodname_codeql %}.

{% ifversion ghes > 3.7 or ghae > 3.7 %} {% note %}

Se você usar a {% data variables.product.prodname_codeql %} para executar a {% data variables.product.prodname_code_scanning %} para analisar o código escrito em Python na sua empresa, verifique se o executor auto-hospedado tem o Python 3 instalado.

{% endnote %} {% endif %}

### Provisionando ações para {% data variables.product.prodname_code_scanning %}

{% ifversion ghes %} Caso você deseje usar ações para executar a {% data variables.product.prodname_code_scanning %} no {% data variables.product.prodname_ghe_server %}, as ações precisam estar disponíveis no seu dispositivo.

A ação {% data variables.product.prodname_codeql %} está incluída na sua instalação de {% data variables.product.prodname_ghe_server %}. Se o {% data variables.product.prodname_ghe_server %} {{ allVersions[currentVersion].currentRelease }} e o executor do {% data variables.product.prodname_actions %} tiverem acesso à Internet, a ação baixará automaticamente o pacote da {% data variables.product.codeql_cli_ghes_recommended_version %} do {% data variables.product.prodname_codeql %} necessário para realizar a análise. Como alternativa, você pode usar uma ferramenta de sincronização para tornar a versão mais recente do pacote de análise de {% data variables.product.prodname_codeql %} disponível localmente. Para obter mais informações, confira "[Como configurar a análise do {% data variables.product.prodname_codeql %} em um servidor sem acesso à Internet](#configuring-codeql-analysis-on-a-server-without-internet-access)" abaixo.

Você também pode disponibilizar ações de terceiros para os usuários de {% data variables.product.prodname_code_scanning %}, configurando {% data variables.product.prodname_github_connect %}. Para obter mais informações, confira "[Como configurar o {% data variables.product.prodname_github_connect %} para sincronizar o {% data variables.product.prodname_actions %}](/enterprise/admin/configuration/configuring-code-scanning-for-your-appliance#configuring-github-connect-to-sync-github-actions)" abaixo.

### Configurar a análise de {% data variables.product.prodname_codeql %} em um servidor sem acesso à internet
Se o servidor em que você está executando {% data variables.product.prodname_ghe_server %} não estiver conectado à internet e você deseja permitir que os usuários habilitem {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} para seus repositórios, você deverá usar a ferramenta de sincronização de ação {% data variables.product.prodname_codeql %} para copiar o pacote de análises {% data variables.product.prodname_codeql %} de {% data variables.product.prodname_dotcom_the_website %} para seu servidor. A ferramenta e os detalhes de como usá-la estão disponíveis em [https://github.com/github/codeql-action-sync-tool](https://github.com/github/codeql-action-sync-tool/).

Se você configurar a ferramenta de sincronização de ação de {% data variables.product.prodname_codeql %}, você poderá usá-la para sincronizar as últimas versões da ação de {% data variables.product.prodname_codeql %} e pacote de análise associado a {% data variables.product.prodname_codeql %}. Estes são compatíveis com {% data variables.product.prodname_ghe_server %}.

{% endif %}

### Configurar {% data variables.product.prodname_github_connect %} para sincronizar {% data variables.product.prodname_actions %}
1. Se você deseja fazer o download dos fluxos de trabalho de ação sob demanda a partir de {% data variables.product.prodname_dotcom_the_website %}, você deverá habilitar o {% data variables.product.prodname_github_connect %}. Para obter mais informações, confira "[Como habilitar o {% data variables.product.prodname_github_connect %}](/admin/configuration/managing-connections-between-your-enterprise-accounts/connecting-your-enterprise-account-to-github-enterprise-cloud#enabling-github-connect)".
2. Você também precisará habilitar o {% data variables.product.prodname_actions %} para o {% data variables.location.product_location %}. Para obter mais informações, confira "[Introdução ao {% data variables.product.prodname_actions %} para {% data variables.product.prodname_ghe_server %}](/admin/github-actions/getting-started-with-github-actions-for-github-enterprise-server)".
3. A próxima etapa é configurar o acesso a ações no {% data variables.product.prodname_dotcom_the_website %} usando {% data variables.product.prodname_github_connect %}. Para obter mais informações, confira "[Como habilitar o acesso automático às ações do {% data variables.product.prodname_dotcom_the_website %} usando o {% data variables.product.prodname_github_connect %}](/enterprise/admin/github-actions/enabling-automatic-access-to-githubcom-actions-using-github-connect)".
4. Adicione um executor auto-hospedado ao seu repositório, organização ou conta corporativa. Para obter mais informações, confira "[Como adicionar executores auto-hospedados](/actions/hosting-your-own-runners/adding-self-hosted-runners)".

## Executando a digitalização de código usando o {% data variables.product.prodname_codeql_cli %}

Se você não quiser usar {% data variables.product.prodname_actions %}, você deverá executar {% data variables.product.prodname_code_scanning %} usando o {% data variables.product.prodname_codeql_cli %}. 

O {% data variables.product.prodname_codeql_cli %} é uma ferramenta de linha de comando que você usa para analisar bases de código em qualquer máquina, incluindo um sistema de CI/CD de terceiros. Para obter mais informações, confira "[Como instalar a CLI do CodeQL no seu sistema de CI](/code-security/code-scanning/using-codeql-code-scanning-with-your-existing-ci-system/installing-codeql-cli-in-your-ci-system)".

{% ifversion codeql-runner-supported %}

## Como executar a {% data variables.product.prodname_code_scanning %} usando o {% data variables.code-scanning.codeql_runner %}

{% data reusables.code-scanning.deprecation-codeql-runner %}

Se você não quiser usar o {% data variables.product.prodname_actions %}, execute a {% data variables.product.prodname_code_scanning %} usando o {% data variables.code-scanning.codeql_runner %}. 

O {% data variables.code-scanning.codeql_runner %} é uma ferramenta de linha de comando que você pode adicionar ao seu sistema de CI/CD de terceiros. A ferramenta executa a análise do {% data variables.product.prodname_codeql %} em um checkout de um repositório do {% data variables.product.prodname_dotcom %}. Para obter mais informações, confira "[Como executar a {% data variables.product.prodname_code_scanning %} no seu sistema de CI](/github/finding-security-vulnerabilities-and-errors-in-your-code/running-codeql-code-scanning-in-your-ci-system)".

{% endif %}
