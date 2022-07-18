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
shortTitle: Visualizar os registros de digitalização de código
---

{% data reusables.code-scanning.beta %}
{% data reusables.code-scanning.enterprise-enable-code-scanning-actions %}

## Sobre sua configuração de {% data variables.product.prodname_code_scanning %}

Você pode usar uma série de ferramentas para configurar {% data variables.product.prodname_code_scanning %} no seu repositório. Para obter mais informações, consulte "[Configuração do {% data variables.product.prodname_code_scanning %} para um repositório](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/setting-up-code-scanning-for-a-repository#options-for-setting-up-code-scanning)".

A informação de registro e diagnóstico disponível para você depende do método que você usa para {% data variables.product.prodname_code_scanning %} no repositório. Você pode verificar o tipo de {% data variables.product.prodname_code_scanning %} que você está usando na aba **Segurança** do seu repositório, usando o menu suspenso **Ferramenta** na lista de alerta. Para obter mais informações, consulte "[Gerenciar alertas de {% data variables.product.prodname_code_scanning %} para o seu repositório](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/managing-code-scanning-alerts-for-your-repository#viewing-the-alerts-for-a-repository)".

## Sobre análise e informações de diagnóstico

Você pode visualizar as análises e informações de diagnóstico para {% data variables.product.prodname_code_scanning %} executar usando as análises de {% data variables.product.prodname_codeql %} em {% data variables.product.prodname_dotcom %}.

**As informações de análise** são exibidas para a análise mais recente em um cabeçalho, na parte superior da lista de alertas. Para obter mais informações, consulte "[Gerenciar alertas de varredura de código para seu repositório](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/managing-code-scanning-alerts-for-your-repository#viewing-the-alerts-for-a-repository). "

**A informação de diagnóstico** é exibida nos logs de fluxo de trabalho de ação e consiste em métricas resumidas e diagnósticos de extrator. Para obter informações sobre o acesso aos registros de {% data variables.product.prodname_code_scanning %} em {% data variables.product.prodname_dotcom %}, consulte "[Visualizar a saída do registro de {% data variables.product.prodname_code_scanning %}](#viewing-the-logging-output-from-code-scanning)" abaixo.

Se você estiver utilizando o {% data variables.product.prodname_codeql_cli %} fora de {% data variables.product.prodname_dotcom %}, você verá informações de diagnóstico na saída gerada durante a análise do banco de dados. Estas informações também estão incluídas nos resultados do SARIF que você enviou para {% data variables.product.prodname_dotcom %} com os resultados de {% data variables.product.prodname_code_scanning %}.

Para obter informações sobre o {% data variables.product.prodname_codeql_cli %}, consulte "[Configurar {% data variables.product.prodname_codeql_cli %} no seu sistema de CI](/code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/configuring-codeql-cli-in-your-ci-system#viewing-log-and-diagnostic-information)".

### Sobre métricas resumidas

{% data reusables.code-scanning.summary-metrics %}

### Sobre diagnósticos de extração de código-fonte de {% data variables.product.prodname_codeql %}

{% data reusables.code-scanning.extractor-diagnostics %}

## Visualizar a saída do registro de {% data variables.product.prodname_code_scanning %}

Esta seção aplica-se à execução de {% data variables.product.prodname_code_scanning %} usando {% data variables.product.prodname_actions %} ({% data variables.product.prodname_codeql %} ou terceiros).

Depois de configurar o {% data variables.product.prodname_code_scanning %} para o seu repositório, você poderá inspecionar a saída das ações conforme forem executadas.

{% data reusables.repositories.actions-tab %}

  Você verá uma lista que inclui uma entrada para executar o fluxo de trabalho de {% data variables.product.prodname_code_scanning %}. O texto da entrada é o título que você deu à sua mensagem de commit.

  ![Lista de ações que mostram o fluxo de trabalho de {% data variables.product.prodname_code_scanning %}](/assets/images/help/repository/code-scanning-actions-list.png)

1. Clique na entrada para o fluxo de trabalho de {% data variables.product.prodname_code_scanning %}.

2. Clique no nome do trabalho à esquerda. Por exemplo, **Analise (LANGUAGE)**.

  ![Saída do log do fluxo de trabalho de {% data variables.product.prodname_code_scanning %}](/assets/images/help/repository/code-scanning-logging-analyze-action.png)

1. Revise a saída de log das ações deste fluxo de trabalho enquanto elas são executadas.

1. Depois que todos os trabalhos forem concluídos, você poderá visualizar os as informações dos alertas de {% data variables.product.prodname_code_scanning %} que foram identificados. Para obter mais informações, consulte "[Gerenciar alertas de {% data variables.product.prodname_code_scanning %} para o seu repositório](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository#viewing-the-alerts-for-a-repository)".

{% note %}

**Observação:** Se você criou um pull request para adicionar o fluxo de trabalho de {% data variables.product.prodname_code_scanning %} ao repositório, os alertas desse pull request não serão exibidos diretamente na página de {% data variables.product.prodname_code_scanning_capc %} até que o pull request seja mesclado. Se algum alerta for encontrado, você poderá visualizá-los, antes do merge do pull request, clicando no link dos **_n_ alertas encontrados** no banner na página de {% data variables.product.prodname_code_scanning_capc %}.

![Clique no link "n alertas encontrados"](/assets/images/help/repository/code-scanning-alerts-found-link.png)

{% endnote %}
