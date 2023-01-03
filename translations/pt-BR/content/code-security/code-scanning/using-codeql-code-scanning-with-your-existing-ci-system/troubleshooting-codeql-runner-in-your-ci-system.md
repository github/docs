---
title: Solução de problemas do executor do CodeQL no seu sistema de CI
shortTitle: Troubleshoot CodeQL runner
intro: 'Se você tiver problemas com o {% data variables.code-scanning.codeql_runner %}, solucione os problemas usando estas dicas.'
product: '{% data reusables.gated-features.code-scanning %}'
redirect_from:
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/troubleshooting-code-scanning-in-your-ci-system
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/troubleshooting-codeql-code-scanning-in-your-ci-system
  - /code-security/secure-coding/troubleshooting-codeql-code-scanning-in-your-ci-system
  - /code-security/secure-coding/troubleshooting-codeql-runner-in-your-ci-system
  - /code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/troubleshooting-codeql-runner-in-your-ci-system
versions:
  feature: codeql-runner-supported
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - CodeQL
  - Troubleshooting
  - Integration
  - CI
ms.openlocfilehash: b241e0c01b463a46a1eb3b47b68ba0283a94609d
ms.sourcegitcommit: b617c4a7a1e4bf2de3987a86e0eb217d7031490f
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/11/2022
ms.locfileid: '148161156'
---
{% data reusables.code-scanning.deprecation-codeql-runner %} {% data reusables.code-scanning.beta %} {% data reusables.code-scanning.not-available %}

## O comando `init` leva muito tempo para ser concluído

Para que o {% data variables.code-scanning.codeql_runner %} compile e analise o código, ele precisa acessar o pacote do {% data variables.product.prodname_codeql %}, que contém a CLI do {% data variables.product.prodname_codeql %} e as bibliotecas do {% data variables.product.prodname_codeql %}.

Quando você usa o {% data variables.code-scanning.codeql_runner %} pela primeira vez no computador, o comando `init` baixa o pacote do {% data variables.product.prodname_codeql %} no computador. Este download pode levar alguns minutos.
O pacote do {% data variables.product.prodname_codeql %} fica armazenado em cache entre as execuções. Portanto, se você usar o {% data variables.code-scanning.codeql_runner %} novamente no mesmo computador, ele não baixará o pacote do {% data variables.product.prodname_codeql %} novamente.

Para evitar esse download automático, baixe manualmente o pacote do {% data variables.product.prodname_codeql %} no computador e especifique o caminho usando o sinalizador `--codeql-path` do comando `init`.

## Nenhum código encontrado durante a criação

Se o comando `analyze` para o {% data variables.code-scanning.codeql_runner %} falhar com um erro `No source code was seen during the build`, isso indicará que o {% data variables.product.prodname_codeql %} não pôde monitorar o código. Há várias explicações para essa falha.

1. A detecção automática da linguagem identificou uma linguagem compatível, mas não há código analisável dessa linguagem no repositório. Um exemplo típico é quando o serviço de detecção de linguagem encontra um arquivo associado a determinada linguagem de programação, como um arquivo `.h` ou `.gyp`, mas nenhum código executável correspondente está presente no repositório. Para resolver o problema, você pode definir manualmente as linguagens que deseja analisar usando o sinalizador `--languages` do comando `init`. Para obter mais informações, confira "[Como configurar o {% data variables.code-scanning.codeql_runner %} no seu sistema de CI](/code-security/secure-coding/configuring-codeql-runner-in-your-ci-system)".

1. Você está analisando uma linguagem compilada sem usar o comando `autobuild` e executa as etapas de build por conta própria após a etapa `init`. Para que o build funcione, você precisará configurar o ambiente de modo que o {% data variables.code-scanning.codeql_runner %} possa monitorar o processo de build. O comando `init` gera instruções sobre como exportar as variáveis de ambiente necessárias para que você possa copiar e executar o script depois de executar o comando `init`.
   - No macOS e no Linux:
     ```shell
      $ . codeql-runner/codeql-env.sh
     ```
   - No Windows, usando o shell de comando (`cmd`) ou um arquivo em lote (`.bat`):
     ```shell
     > call codeql-runner\codeql-env.bat
     ```
   - No Windows, usando o PowerShell:
     ```shell
     > cat codeql-runner\codeql-env.sh | Invoke-Expression
     ```

   As variáveis de ambiente também são armazenadas no arquivo `codeql-runner/codeql-env.json`. Este arquivo contém um único objeto JSON que mapeia chaves de variável de ambiente com valores. Se você não puder executar o script gerado pelo comando `init`, use os dados no formato JSON.

   {% note %}

   **Observação:** se você usou o sinalizador `--temp-dir` do comando `init` para especificar um diretório personalizado para arquivos temporários, o caminho para os arquivos `codeql-env` pode ser diferente.

   {% endnote %}

1. Você está analisando uma linguagem compilada no macOS sem usar o comando `autobuild` e executa as etapas de build por conta própria após a etapa `init`. Se a opção SIP (Proteção da Integridade do Sistema) estiver habilitada, que é o padrão nas versões recentes do OSX, poderá ocorrer uma falha na análise. Para corrigir isso, coloque a variável de ambiente `$CODEQL_RUNNER` antes do comando de build. 
   Por exemplo, se o comando de build for `cmd arg1 arg2`, você deverá executar `$CODEQL_RUNNER cmd arg1 arg2`.

1. O código é criado em um contêiner ou em uma máquina separada. Se você usar um build conteinerizado ou externalizar a criação para outro computador, execute o {% data variables.code-scanning.codeql_runner %} no contêiner ou no computador em que a tarefa de build ocorrerá. Para obter mais informações, confira "[Como executar a verificação de código do CodeQL em um contêiner](/code-security/secure-coding/running-codeql-code-scanning-in-a-container)".
