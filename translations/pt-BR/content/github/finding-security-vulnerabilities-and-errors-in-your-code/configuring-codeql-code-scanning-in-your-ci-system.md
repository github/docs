---
title: Configurar a varredura de código do CodeQL no seu sistema de de CI
shortTitle: Configurar na sua CI
intro: 'Você pode configurar como o {% data variables.product.prodname_codeql_runner %} faz a varredura do código no seu projeto e faz o upload dos resultados para o {% data variables.product.prodname_dotcom %}.'
product: '{% data reusables.gated-features.code-scanning %}'
miniTocMaxHeadingLevel: 4
redirect_from:
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-code-scanning-in-your-ci-system
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.code-scanning.beta-codeql-runner %}
{% data reusables.code-scanning.beta %}
{% data reusables.code-scanning.enterprise-enable-code-scanning %}

### Sobre a configuração de {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} no seu sistema de CI

Para integrar {% data variables.product.prodname_code_scanning %} ao seu sistema de CI, você pode usar o {% data variables.product.prodname_codeql_runner %}. Para obter mais informações, consulte "[Executar {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} no seu sistema de CI](/github/finding-security-vulnerabilities-and-errors-in-your-code/running-codeql-code-scanning-in-your-ci-system)".

De modo geral, você invoca o {% data variables.product.prodname_codeql_runner %} da seguinte forma.

```shell
$ /path/to-runner/codeql-runner-OS <COMMAND> <FLAGS>
```

`/path/to-runner/` depende do local onde você fez o download do {% data variables.product.prodname_codeql_runner %} no seu sistema de CI. `codeql-runner-OS` depende do sistema operacional que você usa. Existem três versões do {% data variables.product.prodname_codeql_runner %}, `codeql-runner-linux`, `codeql-runner-macos` e `codeql-runner-win`, para os sistemas Linux, macOS e Windows, respectivamente.

Para personalizar a maneira como o {% data variables.product.prodname_codeql_runner %} faz a varredura do seu código, você pode usar sinalizadores, como `--languages` e `--queries`, ou você pode especificar configurações personalizadas em um arquivo de configuração separado.

### Sobrescrever a detecção automática de linguagem

O {% data variables.product.prodname_codeql_runner %} detecta e faz a varredura automática do código escrito nas linguagens compatíveis.

{% data reusables.code-scanning.supported-languages %}

{% data reusables.code-scanning.specify-language-to-analyze %}

Para substituir a detecção automática de idioma, execute o comando `init` com o sinalizador `--languages`, seguido de uma lista de palavras-chave de linguagem separada por vírgulas. As palavras-chave para as linguagens compatíveis são `cpp`, `csharp`, `go`, `java`, `javascript` e `python`.

```shell
$ /path/to-runner/codeql-runner-linux init --languages cpp,java
```

### Executar consultas adicionais

{% data reusables.code-scanning.run-additional-queries %}

{% data reusables.code-scanning.codeql-query-suites %}

Para adicionar uma ou mais consultas, passe uma lista de caminhos separados por vírgulas para o sinalizador `--queries` do comando `init`. Você também pode especificar consultas adicionais em um arquivo de configuração.

Se você também estiver usando um arquivo de configuração para configurações personalizadas, e você também estiver especificando consultas adicionais com o sinalizador `--queries`, o {% data variables.product.prodname_codeql_runner %} usará as consultas adicionais especificadas com o sinalizador <nobr>`--queries`</nobr> em vez de qualquer um no arquivo de configuração. Se você desejar executar o conjunto combinado de consultas adicionais especificadas com o sinalizador e no arquivo de configuração, determine previamente o valor passado para <nobr>`--queries`</nobr> com o símbolo `+`. Para obter exemplos de arquivos de configuração, consulte "[Exemplo de arquivos de configuração](#example-configuration-files)".

No exemplo a seguir,. o símbolo `+` garante que o {% data variables.product.prodname_codeql_runner %} usará as consultas adicionais junto com quaisquer consultas especificadas no arquivo de configuração referenciado.

```shell
$ /path/to-runner/codeql-runner-linux init --config-file .github/codeql/codeql-config.yml 
    --queries +security-and-quality,octo-org/python-qlpack/show_ifs.ql@main
```

### Usar uma ferramenta de varredura de código de terceiros

Em vez de passar informações adicionais para os comandos de {% data variables.product.prodname_codeql_runner %}, você pode especificar configurações personalizadas em um arquivo de configuração separado.

O arquivo de configuração é um arquivo YAML. Ele usa uma sintaxe semelhante à sintaxe do fluxo de trabalho do {% data variables.product.prodname_actions %}, conforme ilustrado nos exemplos abaixo. Para obter mais informações, consulte "[Sintaxe de fluxo de trabalho para o {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions)".

Use o sinalizador `--config-file` do comando `init` para especificar o arquivo de configuração. O valor de <nobr>`--config-file`</nobr> é o caminho para o arquivo de configuração que você deseja usar. Este exemplo carrega o arquivo de configuração _.github/codeql/codeql-config.yml_.

```shell
$ /path/to-runner/codeql-runner-linux init --config-file .github/codeql/codeql-config.yml
```

#### Exemplo de arquivo de configuração

{% data reusables.code-scanning.example-configuration-files %}

### Configurar o {% data variables.product.prodname_code_scanning %} para linguagens compiladas

Para as linguagens compiladas C/C++, C#, e Java, o {% data variables.product.prodname_codeql %} constrói o código antes de analisá-lo. {% data reusables.code-scanning.analyze-go %}

Para muitos sistemas de criação comuns, o {% data variables.product.prodname_codeql_runner %} pode construir o código automaticamente. Para tentar construir o código automaticamente, execute `autobuild` entre `init` e `analise` as etapas. Observe que, se seu repositório precisar de uma versão específica de uma ferramenta de criação, primeiro você precisará instalar a ferramenta de criação manualmente.

O processo `autobuild` sempre tenta criar _uma_ linguagem compilada para um repositório. A linguagem selecionada automaticamente para análise é a linguagem com mais arquivos. Se você quiser escolher um idioma explicitamente, use o sinalizador `--language` do comando `autobuild`.

```shell
$ /path/to-runner/codeql-runner-linux autobuild --language csharp
```

Se o comando `autobuild` não puder criar o seu código, você poderá executar as etapas de compilação, entre as etapas de `init` e de `análise`. Para obter mais informações, consulte "[Executar {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} no seu sistema de CI](/github/finding-security-vulnerabilities-and-errors-in-your-code/running-codeql-code-scanning-in-your-ci-system#compiled-language-example)".

### {% data variables.product.prodname_code_scanning_capc %} usa {% data variables.product.prodname_actions %}.

Por padrão, o {% data variables.product.prodname_codeql_runner %} faz o upload dos resultados a partir de {% data variables.product.prodname_code_scanning %} quando você executa o comando de `análise`. Você também pode carregar arquivos do SARIF separadamente, usando o comando `upload`.

Depois de enviar os dados, o {% data variables.product.prodname_dotcom %} exibirá os alertas no seu repositório. Para obter mais informações, consulte "[Gerenciar alertas de {% data variables.product.prodname_code_scanning %} para o seu repositório](/github/finding-security-vulnerabilities-and-errors-in-your-code/managing-code-scanning-alerts-for-your-repository#viewing-the-alerts-for-a-repository)".

### Comando de referência de {% data variables.product.prodname_codeql_runner %}

O {% data variables.product.prodname_codeql_runner %} é compatível os seguintes comandos e sinalizadores.

#### `init`

Inicializa o {% data variables.product.prodname_codeql_runner %} e cria um banco de dados de {% data variables.product.prodname_codeql %} para cada linguagem a ser analisada.

| Sinalizador                      | Obrigatório | Valor de entrada                                                                                                                                                                                       |
| -------------------------------- |:-----------:| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--repository`                   |      ✓      | Nome do repositório a ser inicializado.                                                                                                                                                                |
| `--github-url`                   |      ✓      | URL da instância do {% data variables.product.prodname_dotcom %} onde seu repositório está hospedado.                                                                                                  |
| `--github-auth`                  |      ✓      | Um token de {% data variables.product.prodname_github_apps %} ou token de acesso pessoal.                                                                                                            |
| `--languages`                    |             | Lista de linguagens para análise separada por vírgulas. Por padrão, o {% data variables.product.prodname_codeql_runner %} detecta e analisa todas as linguagens compatíveis no repositório.          |
| `--queries`                      |             | Lista separada por vírgulas de consultas adicionais a serem executadas, além do conjunto-padrão de consultas de segurança.                                                                             |
| `--config-file`                  |             | Caminho para o arquivo de configuração personalizado.                                                                                                                                                  |
| `--codeql-path`                  |             | Caminho para uma cópia do CLI de {% data variables.product.prodname_codeql %} executável a ser usado. Por padrão, o {% data variables.product.prodname_codeql_runner %} faz o download de uma cópia. |
| `--temp-dir`                     |             | Diretório onde os arquivos temporários são armazenados. O padrão é _./codeql-runner_.                                                                                                                  |
| `--tools-dir`                    |             | Diretório onde as ferramentas de {% data variables.product.prodname_codeql %} e outros arquivos são armazenados entre as execuções. O padrão é um subdiretório do diretório home.                      |
| <nobr>`--checkout-path`</nobr> |             | O caminho para o checkout do seu repositório. O padrão é o diretório de trabalho atual.                                                                                                                |
| `--debug`                        |             | Nenhum. Imprime mais resultados verbose.                                                                                                                                                               |
| `-h`, `--help`                   |             | Nenhum. Exibe ajuda para o comando.                                                                                                                                                                    |

#### `autobuild`

Tenta construir o código para as linguagens compiladas C/C++, C# e Java. Para essas linguagens, {% data variables.product.prodname_codeql %} cria o código antes de analisá-lo. Executar `autobuild` entre as etapas de `init` e `analise`.

| Sinalizador                 | Obrigatório | Valor de entrada                                                                                                                            |
| --------------------------- |:-----------:| ------------------------------------------------------------------------------------------------------------------------------------------- |
| `--language`                |             | A linguagem a ser criada. Por padrão, o {% data variables.product.prodname_codeql_runner %} cria a linguagem compilada com mais arquivos. |
| <nobr>`--temp-dir`</nobr> |             | Diretório onde os arquivos temporários são armazenados. O padrão é _./codeql-runner_.                                                       |
| `--debug`                   |             | Nenhum. Imprime mais resultados verbose.                                                                                                    |
| `-h`, `--help`              |             | Nenhum. Exibe ajuda para o comando.                                                                                                         |

#### `analyze`

Analisa o código nos bancos de dados do {% data variables.product.prodname_codeql %} e faz o upload dos resultados para o {% data variables.product.product_location %}.

| Sinalizador                      | Obrigatório | Valor de entrada                                                                                                                                                                                        |
| -------------------------------- |:-----------:| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--repository`                   |      ✓      | Nome do repositório a ser analisado.                                                                                                                                                                    |
| `--commit`                       |      ✓      | SHA do commit a ser analisado. No Git e no Azure DevOps, isso corresponde ao valor de `git rev-parse HEAD`. No Jenkins, isso corresponde a `$GIT_COMMIT`.                                               |
| `--ref`                          |      ✓      | Nome da referência para análise, por exemplo `refs/heads/main`. No Git e no Jenkins, isso corresponde ao valor de `git simbolic-ref HEAD`. No Azure DevOps, isso corresponde a `$(Build.SourceBranch)`. |
| `--github-url`                   |      ✓      | URL da instância do {% data variables.product.prodname_dotcom %} onde seu repositório está hospedado.                                                                                                   |
| `--github-auth`                  |      ✓      | Um token de {% data variables.product.prodname_github_apps %} ou token de acesso pessoal.                                                                                                             |
| <nobr>`--checkout-path`</nobr> |             | O caminho para o checkout do seu repositório. O padrão é o diretório de trabalho atual.                                                                                                                 |
| `--no-upload`                    |             | Nenhum. Impede que o {% data variables.product.prodname_codeql_runner %} faça o upload dos resultados para {% data variables.product.product_location %}.                                             |
| `--output-dir`                   |             | Diretório onde os arquivos SARIF de saída são armazenados. O padrão está no diretório de arquivos temporários.                                                                                          |
| `--temp-dir`                     |             | Diretório onde os arquivos temporários são armazenados. O padrão é _./codeql-runner_.                                                                                                                   |
| `--debug`                        |             | Nenhum. Imprime mais resultados verbose.                                                                                                                                                                |
| `-h`, `--help`                   |             | Nenhum. Exibe ajuda para o comando.                                                                                                                                                                     |

#### `fazer upload`

Faz o upload dos arquivos SARIF para {% data variables.product.product_location %}.

| Sinalizador                      | Obrigatório | Valor de entrada                                                                                                                                                                                             |
| -------------------------------- |:-----------:| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--sarif-file`                   |      ✓      | O arquivo SARIF a ser subido ou um diretório que contém vários arquivos SARIF.                                                                                                                               |
| `--repository`                   |      ✓      | Nome do repositório que foi analisado.                                                                                                                                                                       |
| `--commit`                       |      ✓      | SHA do commit que foi analisado. No Git e no Azure DevOps, isso corresponde ao valor de `git rev-parse HEAD`. No Jenkins, isso corresponde a `$GIT_COMMIT`.                                                  |
| `--ref`                          |      ✓      | Nome da referência que foi analisada, por exemplo `refs/heads/main`. No Git e no Jenkins, isso corresponde ao valor de `git simbolic-ref HEAD`. No Azure DevOps, isso corresponde a `$(Build.SourceBranch)`. |
| `--github-url`                   |      ✓      | URL da instância do {% data variables.product.prodname_dotcom %} onde seu repositório está hospedado.                                                                                                        |
| `--github-auth`                  |      ✓      | Um token de {% data variables.product.prodname_github_apps %} ou token de acesso pessoal.                                                                                                                  |
| <nobr>`--checkout-path`</nobr> |             | O caminho para o checkout do seu repositório. O padrão é o diretório de trabalho atual.                                                                                                                      |
| `--debug`                        |             | Nenhum. Imprime mais resultados verbose.                                                                                                                                                                     |
| `-h`, `--help`                   |             | Nenhum. Exibe ajuda para o comando.                                                                                                                                                                          |
