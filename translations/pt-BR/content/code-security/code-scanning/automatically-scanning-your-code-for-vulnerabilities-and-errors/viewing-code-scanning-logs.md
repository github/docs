---
title: Visualizar os registros de varredura de código
intro: 'Você pode visualizar a saída gerada durante a análise {% data variables.product.prodname_code_scanning %} em {% data variables.product.product_location %}.'
product: '{% data reusables.gated-features.code-scanning %}'
permissions: 'If you have write permissions to a repository, you can view the {% data variables.product.prodname_code_scanning %} logs for that repository.'
miniTocMaxHeadingLevel: 4
redirect_from:
  - /code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/viewing-code-scanning-logs
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Security
shortTitle: View code scanning logs
ms.openlocfilehash: e4f4c3e601540e02c01bbe3761a11528a746a519
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147444626'
---
{% data reusables.code-scanning.beta %} {% data reusables.code-scanning.enterprise-enable-code-scanning-actions %}

## Sobre sua configuração de {% data variables.product.prodname_code_scanning %} 

Você pode usar uma série de ferramentas para configurar {% data variables.product.prodname_code_scanning %} no seu repositório. Para obter mais informações, confira "[Como configurar a {% data variables.product.prodname_code_scanning %} para um repositório](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/setting-up-code-scanning-for-a-repository#options-for-setting-up-code-scanning)".

A informação de registro e diagnóstico disponível para você depende do método que você usa para {% data variables.product.prodname_code_scanning %} no repositório. Você pode verificar o tipo da {% data variables.product.prodname_code_scanning %} que você está usando na guia **Segurança** do repositório usando o menu suspenso **Ferramenta** na lista de alertas. Para obter mais informações, confira "[Como gerenciar alertas da {% data variables.product.prodname_code_scanning %} do seu repositório](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/managing-code-scanning-alerts-for-your-repository#viewing-the-alerts-for-a-repository)".

## Sobre análise e informações de diagnóstico

Você pode visualizar as análises e informações de diagnóstico para {% data variables.product.prodname_code_scanning %} executar usando as análises de {% data variables.product.prodname_codeql %} em {% data variables.product.prodname_dotcom %}. 

As informações de **análise** são mostradas para a análise mais recente em um cabeçalho na parte superior da lista de alertas. Para obter mais informações, confira "[Como gerenciar alertas de verificação de código do seu repositório](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/managing-code-scanning-alerts-for-your-repository#viewing-the-alerts-for-a-repository)".

As informações de **diagnóstico** são exibidas nos logs de fluxo de trabalho da Ação e consistem em métricas de resumo e diagnóstico do extrator. Para obter informações sobre como acessar os logs da {% data variables.product.prodname_code_scanning %} no {% data variables.product.prodname_dotcom %}, confira "[Como ver a saída de log da {% data variables.product.prodname_code_scanning %}](#viewing-the-logging-output-from-code-scanning)" abaixo.

Se você estiver utilizando o {% data variables.product.prodname_codeql_cli %} fora de {% data variables.product.prodname_dotcom %}, você verá informações de diagnóstico na saída gerada durante a análise do banco de dados. Estas informações também estão incluídas nos resultados do SARIF que você enviou para {% data variables.product.prodname_dotcom %} com os resultados de {% data variables.product.prodname_code_scanning %}.

Para obter informações sobre a {% data variables.product.prodname_codeql_cli %}, confira "[Como configurar o {% data variables.product.prodname_codeql_cli %} no seu sistema de CI](/code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/configuring-codeql-cli-in-your-ci-system#viewing-log-and-diagnostic-information)".

### Sobre métricas resumidas

{% data reusables.code-scanning.summary-metrics %}

### Sobre diagnósticos de extração de código-fonte de {% data variables.product.prodname_codeql %}

{% data reusables.code-scanning.extractor-diagnostics %}

{% ifversion codeql-action-debug-logging %}

Você pode ver informações detalhadas sobre os erros e avisos do extrator do {% data variables.product.prodname_codeql %} que ocorreram durante a criação do banco de dados habilitando o registro em log de depuração. Para obter mais informações, confira "[Solucionar problemas do fluxo de trabalho do CodeQL](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/troubleshooting-the-codeql-workflow#creating-codeql-debugging-artifacts-by-re-running-jobs-with-debug-logging-enabled)."

{% endif %}

## Visualizar a saída do registro de {% data variables.product.prodname_code_scanning %}

Esta seção aplica-se à execução de {% data variables.product.prodname_code_scanning %} usando {% data variables.product.prodname_actions %} ({% data variables.product.prodname_codeql %} ou terceiros).

Depois de configurar o {% data variables.product.prodname_code_scanning %} para o seu repositório, você poderá inspecionar a saída das ações conforme forem executadas.

{% data reusables.repositories.actions-tab %}

  Você verá uma lista que inclui uma entrada para executar o fluxo de trabalho de {% data variables.product.prodname_code_scanning %}. O texto da entrada é o título que você deu à sua mensagem de commit.

  ![Lista de ações que mostram o fluxo de trabalho de {% data variables.product.prodname_code_scanning %}](/assets/images/help/repository/code-scanning-actions-list.png)

1. Clique na entrada para o fluxo de trabalho de {% data variables.product.prodname_code_scanning %}.

2. Clique no nome do trabalho à esquerda. Por exemplo, **Analisar (LANGUAGE)** .

  ![Saída do log do fluxo de trabalho de {% data variables.product.prodname_code_scanning %}](/assets/images/help/repository/code-scanning-logging-analyze-action.png)

1. Revise a saída de log das ações deste fluxo de trabalho enquanto elas são executadas.

1. Depois que todos os trabalhos forem concluídos, você poderá visualizar os as informações dos alertas de {% data variables.product.prodname_code_scanning %} que foram identificados. Para obter mais informações, confira "[Como gerenciar alertas da {% data variables.product.prodname_code_scanning %} do seu repositório](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository#viewing-the-alerts-for-a-repository)".

{% note %}

**Observação:** se você gerou uma solicitação de pull para adicionar o fluxo de trabalho da {% data variables.product.prodname_code_scanning %} ao repositório, os alertas da solicitação de pull só são exibidos diretamente na página da {% data variables.product.prodname_code_scanning_capc %} quando a solicitação de pull é mesclada. Se algum alerta for encontrado, você poderá vê-los antes da mesclagem da solicitação de pull clicando no link **_n_ alertas encontrados** no banner da página da {% data variables.product.prodname_code_scanning_capc %}.

![Clique no link "n alertas encontrados"](/assets/images/help/repository/code-scanning-alerts-found-link.png)

{% endnote %}
