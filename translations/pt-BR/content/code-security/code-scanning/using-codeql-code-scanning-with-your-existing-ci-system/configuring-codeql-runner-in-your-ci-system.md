---
title: Configurar o executor do CodeQL no seu sistema de CI
shortTitle: Configure CodeQL runner
intro: 'Configure como o {% data variables.code-scanning.codeql_runner %} examina o código no projeto e carrega os resultados no {% data variables.product.prodname_dotcom %}.'
product: '{% data reusables.gated-features.code-scanning %}'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-code-scanning-in-your-ci-system
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-codeql-code-scanning-in-your-ci-system
  - /code-security/secure-coding/configuring-codeql-code-scanning-in-your-ci-system
  - /code-security/secure-coding/configuring-codeql-runner-in-your-ci-system
  - /code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/configuring-codeql-runner-in-your-ci-system
versions:
  feature: codeql-runner-supported
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - CodeQL
  - Integration
  - CI
  - Repositories
  - Pull requests
  - C/C++
  - C#
  - Java
ms.openlocfilehash: 64245dd9f320947510db3e108b30c886c95b89d1
ms.sourcegitcommit: b617c4a7a1e4bf2de3987a86e0eb217d7031490f
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/11/2022
ms.locfileid: '148161067'
---
{% data reusables.code-scanning.deprecation-codeql-runner %} {% data reusables.code-scanning.beta %} {% data reusables.code-scanning.enterprise-enable-code-scanning %}

## Sobre a configuração de {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} no seu sistema de CI

Para integrar a {% data variables.product.prodname_code_scanning %} ao seu sistema de CI, use o {% data variables.code-scanning.codeql_runner %}. Para obter mais informações, confira "[Como executar o {% data variables.code-scanning.codeql_runner %} no seu sistema de CI](/code-security/secure-coding/running-codeql-runner-in-your-ci-system)".

Em geral, você invoca o {% data variables.code-scanning.codeql_runner %} conforme mostrado a seguir.

```shell
$ /path/to-runner/codeql-runner-OS <COMMAND> <FLAGS>
```

`/path/to-runner/` depende da localização em que você baixou o {% data variables.code-scanning.codeql_runner %} no seu sistema de CI. `codeql-runner-OS` depende do sistema operacional usado.
Há três versões do {% data variables.code-scanning.codeql_runner %} (`codeql-runner-linux`, `codeql-runner-macos` e `codeql-runner-win`) para os sistemas Linux, macOS e Windows, respectivamente. 

Para personalizar a maneira como o {% data variables.code-scanning.codeql_runner %} examina o código, use sinalizadores, como `--languages` e `--queries`, ou especifique configurações personalizadas em um arquivo de configuração separado.

## Fazer a varredura de pull requests

A varredura de código sempre que uma pull request é criada impede que os desenvolvedores introduzam novas vulnerabilidades e erros no código.

Para verificar uma solicitação de pull, execute o comando `analyze` e use o sinalizador `--ref` para especificar a solicitação de pull. A referência é `refs/pull/<PR-number>/head` ou `refs/pull/<PR-number>/merge`, dependendo se você fez check-out do commit HEAD do branch de solicitação de pull ou de um commit de mesclagem com o branch base.

```shell
$ /path/to-runner/codeql-runner-linux analyze --ref refs/pull/42/merge
```

{% note %}

**Observação:** se você analisar o código com uma ferramenta de terceiros e desejar que os resultados seja exibidos como verificações de solicitação de pull, execute o comando `upload` e use o sinalizador `--ref` para especificar a solicitação de pull em vez do branch. A referência é `refs/pull/<PR-number>/head` ou `refs/pull/<PR-number>/merge`.

{% endnote %}

## Sobrescrever a detecção automática de linguagem

O {% data variables.code-scanning.codeql_runner %} detecta e examina automaticamente o código escrito nas linguagens compatíveis.

{% data reusables.code-scanning.codeql-languages-bullets %}

{% data reusables.code-scanning.specify-language-to-analyze %}

Para substituir a detecção automática de linguagem, execute o comando `init` com o sinalizador `--languages`, seguido de uma lista de palavras-chave de linguagem separada por vírgula. As palavras-chave para os idiomas compatíveis são {% data reusables.code-scanning.codeql-languages-keywords %}.

```shell
$ /path/to-runner/codeql-runner-linux init --languages cpp,java
```

## Executar consultas adicionais

{% data reusables.code-scanning.run-additional-queries %}

{% data reusables.code-scanning.codeql-query-suites-explanation %}

Para adicionar uma ou mais consultas, transmita uma lista separada por vírgula de caminhos para o sinalizador `--queries` do comando `init`. Você também pode especificar consultas adicionais em um arquivo de configuração.

Se você também estiver usando um arquivo de configuração para as configurações personalizadas e estiver especificando consultas adicionais com o sinalizador `--queries`, o {% data variables.code-scanning.codeql_runner %} usará as consultas adicionais especificadas com o sinalizador <nobr>`--queries`</nobr> em vez de qualquer uma no arquivo de configuração.
Se desejar executar o conjunto combinado de consultas adicionais especificadas com o sinalizador e no arquivo de configuração, adicione o símbolo `+` como prefixo ao valor transmitido para <nobr>`--queries`</nobr>.
Para obter mais informações, confira "[Como usar um arquivo de configuração personalizado](#using-a-custom-configuration-file)".

No exemplo a seguir, o símbolo `+` garante que o {% data variables.code-scanning.codeql_runner %} usará as consultas adicionais com todas as consultas especificadas no arquivo de configuração referenciado.

```shell
$ /path/to-runner/codeql-runner-linux init --config-file .github/codeql/codeql-config.yml 
    --queries +security-and-quality,octo-org/python-qlpack/show_ifs.ql@main
```

## Usando um arquivo de configuração personalizado

Em vez de transmitir informações adicionais para os comandos do {% data variables.code-scanning.codeql_runner %}, você pode especificar configurações personalizadas em um arquivo de configuração separado.

O arquivo de configuração é um arquivo YAML. Ele usa uma sintaxe semelhante à sintaxe do fluxo de trabalho do {% data variables.product.prodname_actions %}, conforme ilustrado nos exemplos abaixo. Para obter mais informações, confira "[Sintaxe de fluxo de trabalho do {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions)". 

Use o sinalizador `--config-file` do comando `init` para especificar o arquivo de configuração. O valor de <nobr>`--config-file`</nobr> é o caminho para o arquivo de configuração que você deseja usar. Este exemplo carrega o arquivo de configuração _.github/codeql/codeql-config.yml_.

```shell
$ /path/to-runner/codeql-runner-linux init --config-file .github/codeql/codeql-config.yml
```

{% data reusables.code-scanning.custom-configuration-file %}

### Exemplo de arquivos de configuração

{% data reusables.code-scanning.example-configuration-files %}

## Configurar o {% data variables.product.prodname_code_scanning %} para linguagens compiladas

Para as linguagens compiladas C/C++, C#,{% ifversion codeql-go-autobuild %} Go{% endif %} e Java, o {% data variables.product.prodname_codeql %} cria o código antes de analisá-lo. {% data reusables.code-scanning.analyze-go %}

Para muitos sistemas de build comuns, o {% data variables.code-scanning.codeql_runner %} pode compilar o código automaticamente. Para tentar compilar o código automaticamente, execute `autobuild` entre as etapas `init` e `analyze`. Observe que, se seu repositório precisar de uma versão específica de uma ferramenta de criação, primeiro você precisará instalar a ferramenta de criação manualmente. 

O processo `autobuild` só tentará compilar _uma_ linguagem compilada para um repositório. A linguagem selecionada automaticamente para análise é a linguagem com mais arquivos. Caso deseje escolher uma linguagem explicitamente, use o sinalizador `--language` do comando `autobuild`.

```shell
$ /path/to-runner/codeql-runner-linux autobuild --language csharp
```

Se o comando `autobuild` não puder compilar o código, execute as etapas de build por conta própria, entre as etapas `init` e `analyze`. Para obter mais informações, confira "[Como executar o {% data variables.code-scanning.codeql_runner %} no seu sistema de CI](/code-security/secure-coding/running-codeql-runner-in-your-ci-system#compiled-language-example)".

## Carregar dados do {% data variables.product.prodname_code_scanning %} no {% data variables.product.prodname_dotcom %}

Por padrão, o {% data variables.code-scanning.codeql_runner %} carrega os resultados da {% data variables.product.prodname_code_scanning %} quando você executa o comando `analyze`. Você também pode carregar arquivos SARIF separadamente usando o comando `upload`.

Depois de enviar os dados, o {% data variables.product.prodname_dotcom %} exibirá os alertas no seu repositório. 
- Se você os carregou em uma solicitação de pull, por exemplo `--ref refs/pull/42/merge` ou `--ref refs/pull/42/head`, os resultados serão exibidos como alertas em uma verificação de solicitação de pull. Para obter mais informações, confira "[Como fazer a triagem de alertas de verificação de código em solicitações de pull](/code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests)".
- Se você os carregou em um branch, por exemplo, `--ref refs/heads/my-branch`, os resultados serão exibidos na guia **Segurança** do repositório. Para obter mais informações, confira "[Como gerenciar alertas de verificação de código do seu repositório](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository#viewing-the-alerts-for-a-repository)".

## Referência de comandos do {% data variables.code-scanning.codeql_runner %}

O {% data variables.code-scanning.codeql_runner %} dá suporte aos comandos e aos sinalizadores a seguir.

### `init`

Inicializa o {% data variables.code-scanning.codeql_runner %} e cria um banco de dados do {% data variables.product.prodname_codeql %} para cada linguagem a ser analisada.

| Sinalizador | Obrigatório | Valor de entrada |
| ---- |:--------:| ----------- |
| `--repository` | ✓ | Nome do repositório a ser inicializado. |
| `--github-url` | ✓ | URL da instância do {% data variables.product.prodname_dotcom %} onde seu repositório está hospedado. |
| <nobr>`--github-auth-stdin`</nobr> | ✓ | Leia o token dos {% data variables.product.prodname_github_apps %} ou o {% data variables.product.pat_generic %} da saída padrão. |
| `--languages` | | Lista de linguagens para análise separada por vírgulas. Por padrão, o {% data variables.code-scanning.codeql_runner %} detecta e analisa todas as linguagens compatíveis no repositório. |
| `--queries` | | Lista separada por vírgulas de consultas adicionais a serem executadas, além do conjunto-padrão de consultas de segurança. Isso substitui a configuração `queries` no arquivo de configuração personalizado. |
| `--config-file` | | Caminho para o arquivo de configuração personalizado. |
| `--codeql-path` | | Caminho para uma cópia do CLI de {% data variables.product.prodname_codeql %} executável a ser usado. Por padrão, o {% data variables.code-scanning.codeql_runner %} baixa uma cópia. |
| `--temp-dir` | | Diretório onde os arquivos temporários são armazenados. O padrão é `./codeql-runner`. |
| `--tools-dir` | | Diretório onde as ferramentas de {% data variables.product.prodname_codeql %} e outros arquivos são armazenados entre as execuções. O padrão é um subdiretório do diretório home. |
| <nobr>`--checkout-path`</nobr> | | O caminho para o checkout do seu repositório. O padrão é o diretório de trabalho atual. | 
| `--debug` | | Nenhum. Imprime mais resultados verbose. |
| <nobr>`--trace-process-name`</nobr> | | Avançado, apenas para Windows. Nome do processo em que um rastreador do Windows deste processo é injetado. |
| <nobr>`--trace-process-level`</nobr> | | Avançado, apenas para Windows. Número de níveis acima do processo principal em que um rastreador do Windows deste processo é injetado. |
| `-h`, `--help` | | Nenhum. Exibe ajuda para o comando. |

### `autobuild`

Tenta construir o código para as linguagens compiladas C/C++, C# e Java. Para essas linguagens, {% data variables.product.prodname_codeql %} cria o código antes de analisá-lo. Execute `autobuild` entre as etapas `init` e `analyze`.

| Sinalizador | Obrigatório | Valor de entrada |
| ---- |:--------:| ----------- |
| `--language` | | A linguagem a ser criada. Por padrão, o {% data variables.code-scanning.codeql_runner %} compila a linguagem compilada com o maior número de arquivos. |
| <nobr>`--temp-dir`</nobr> | | Diretório onde os arquivos temporários são armazenados. O padrão é `./codeql-runner`. |
| `--debug` | | Nenhum. Imprime mais resultados verbose. |
| <nobr> `-h`, `--help`</nobr> | | Nenhum. Exibe ajuda para o comando. |

### `analyze`

Analisa o código nos bancos de dados do {% data variables.product.prodname_codeql %} e carrega os resultados no {% data variables.product.product_name %}.

| Sinalizador | Obrigatório | Valor de entrada |
| ---- |:--------:| ----------- |
| `--repository` | ✓ | Nome do repositório a ser analisado. |
| `--commit` | ✓ | SHA do commit a ser analisado. No Git e no Azure DevOps, isso corresponde ao valor de `git rev-parse HEAD`. No Jenkins, isso corresponde a `$GIT_COMMIT`. |
| `--ref` | ✓ | Nome da referência a ser analisada, por exemplo, `refs/heads/main` ou `refs/pull/42/merge`. No Git ou no Jenkins, isso corresponde ao valor de `git symbolic-ref HEAD`. No Azure DevOps, isso corresponde a `$(Build.SourceBranch)`. |
| `--github-url` | ✓ | URL da instância do {% data variables.product.prodname_dotcom %} onde seu repositório está hospedado. |
| <nobr>`--github-auth-stdin`</nobr> | ✓ | Leia o token dos {% data variables.product.prodname_github_apps %} ou o {% data variables.product.pat_generic %} da saída padrão. |
| <nobr>`--checkout-path`</nobr> | | O caminho para o checkout do seu repositório. O padrão é o diretório de trabalho atual.  |
| `--no-upload` | | Nenhum. Impede que o {% data variables.code-scanning.codeql_runner %} carregue os resultados no {% data variables.product.product_name %}. |
| `--output-dir` | | Diretório onde os arquivos SARIF de saída são armazenados. O padrão está no diretório de arquivos temporários. |
| `--ram` | | A quantidade de memória a ser usada ao executar consultas. O padrão é usar toda a memória disponível. |
| <nobr>`--no-add-snippets`</nobr> | | Nenhum. Exclui snippets de código da saída de SARIF. |
| <nobr>`--category`<nobr> | | A categoria a incluir no arquivo de resultados SARIF para esta análise. Uma categoria pode ser usada para distinguir várias análises para a mesma ferramenta e commit, mas executado em diferentes linguagens ou diferentes partes do código. Esse valor será exibido como a propriedade `<run>.automationDetails.id` no SARIF v2.1.0. |
| `--threads` | | Número de threads a serem usados ao executar consultas. O padrão é usar todos os núcleos disponíveis. |
| `--temp-dir` | | Diretório onde os arquivos temporários são armazenados. O padrão é `./codeql-runner`. |
| `--debug` | | Nenhum. Imprime mais resultados verbose. |
| `-h`, `--help` | | Nenhum. Exibe ajuda para o comando. |

### `upload`

Carrega arquivos SARIF no {% data variables.product.product_name %}.

{% note %}

**Observação**: se você analisar o código com o executor do CodeQL, o comando `analyze` carregará os resultados SARIF por padrão. Use o comando `upload` para carregar os resultados SARIF que foram gerados por outras ferramentas.

{% endnote %}

| Sinalizador | Obrigatório | Valor de entrada |
| ---- |:--------:| ----------- |
| `--sarif-file` | ✓ | O arquivo SARIF a ser subido ou um diretório que contém vários arquivos SARIF. |
| `--repository` | ✓ | Nome do repositório que foi analisado. |
| `--commit` | ✓ | SHA do commit que foi analisado. No Git e no Azure DevOps, isso corresponde ao valor de `git rev-parse HEAD`. No Jenkins, isso corresponde a `$GIT_COMMIT`. |
| `--ref` | ✓ | Nome da referência que foi analisada, por exemplo, `refs/heads/main` ou `refs/pull/42/merge`. No Git ou no Jenkins, isso corresponde ao valor de `git symbolic-ref HEAD`. No Azure DevOps, isso corresponde a `$(Build.SourceBranch)`. |
| `--github-url` | ✓ | URL da instância do {% data variables.product.prodname_dotcom %} onde seu repositório está hospedado. |
| <nobr>`--github-auth-stdin`</nobr> | ✓ | Leia o token dos {% data variables.product.prodname_github_apps %} ou o {% data variables.product.pat_generic %} da saída padrão. |
| <nobr>`--checkout-path`</nobr> | | O caminho para o checkout do seu repositório. O padrão é o diretório de trabalho atual.  |
| `--debug` | | Nenhum. Imprime mais resultados verbose. |
| `-h`, `--help` | | Nenhum. Exibe ajuda para o comando. |
