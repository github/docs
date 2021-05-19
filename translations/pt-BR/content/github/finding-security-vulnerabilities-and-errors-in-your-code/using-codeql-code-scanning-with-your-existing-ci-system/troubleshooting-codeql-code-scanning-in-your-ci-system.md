---
title: Solução de problemas de varredura de código do CodeQL no seu sistema de CI
shortTitle: Solução de problemas na sua CI
intro: 'Se você tiver problemas com {% data variables.product.prodname_codeql_runner %}, você poderá solucionar esses problemas usando essas dicas.'
product: '{% data reusables.gated-features.code-scanning %}'
versions:
  enterprise-server: '2.22'
topics:
  - Security
redirect_from:
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/troubleshooting-codeql-code-scanning-in-your-ci-system
---
<!--See /content/code-security/secure-coding for the latest version of this article -->

{% data reusables.code-scanning.beta-codeql-runner %}
{% data reusables.code-scanning.beta %}
{% data reusables.code-scanning.not-available %}

### O comando `init` leva muito tempo

Antes de o {% data variables.product.prodname_codeql_runner %} poder criar e analisar o código, ele precisa acessar o pacote de {% data variables.product.prodname_codeql %} que contém a CLI de {% data variables.product.prodname_codeql %} e as bibliotecas de {% data variables.product.prodname_codeql %}.

Ao usar o {% data variables.product.prodname_codeql_runner %} pela primeira vez na sua máquina, o comando `init` faz o download do pacote de {% data variables.product.prodname_codeql %} para a sua máquina. Este download pode levar alguns minutos. O pacote de {% data variables.product.prodname_codeql %} fica armazenado em cache entre as execuções. Portanto, se você usar o {% data variables.product.prodname_codeql_runner %} novamente na mesma máquina, ele não fará o download do pacote de {% data variables.product.prodname_codeql %} novamente.

Para evitar este download automático, você pode fazer o download manualmente do pacote de {% data variables.product.prodname_codeql %} para a sua máquina e especificar o caminho usando o parâmetro `--codeql-path` do comando `init`.

### Nenhum código encontrado durante a criação

Se o comando `analisar` para o {% data variables.product.prodname_codeql_runner %} falhar com um erro `Nenhum código fonte foi visto durante a criação`, isto indica que {% data variables.product.prodname_codeql %} não conseguiu monitorar o seu código. Há várias explicações para essa falha.

1. A detecção automática da linguagem identificou uma linguagem compatível, mas não há código analisável dessa linguagem no repositório. Um exemplo típico é quando nosso serviço de detecção de linguagem encontra um arquivo associado a uma determinada linguagem de programação, como um arquivo `.h`, or `.gyp`, mas nenhum código executável correspondente está presente no repositório. Para resolver o problema, você pode definir manualmente as linguagens que você deseja analisar usando o sinalizador `--languages` do comando `init`. Para obter mais informações, consulte "[Configurar o {% data variables.product.prodname_code_scanning %} no seu sistema de CI](/github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-codeql-code-scanning-in-your-ci-system)".

1. Você está analisando uma linguagem compilada sem usar o comando `autobuild` e você mesmo executa os passos de criação após a etapa `init`. Para que a criação funcione, você deve configurar o ambiente de modo que {% data variables.product.prodname_codeql_runner %} possa monitorar o código. O comando `init` gera instruções sobre como exportar as variáveis de ambiente necessárias. Portanto, você pode copiar e executar o script depois de executar o comando `init`.
   - No macOS e no Linux:
     ```shell
      $ . codeql-runner/codeql-env.sh
     ```
   - No Windows, usando o shell de comando (`cmd`) ou um arquivo de lote (`.bat`):
     ```shell
     > call codeql-runner\codeql-env.bat
     ```
   - No Windows, usando o PowerShell:
     ```shell
     > cat codeql-runner\codeql-env.sh | Invoke-Expression
     ```

   As variáveis de ambiente também são armazenadas no arquivo `codeql-runner/codeql-env.json`. Este arquivo contém um único objeto JSON que mapeia chaves de variável de ambiente com valores. Se você não conseguir executar o script gerado pelo comando `init`, você poderá usar os dados no formato JSON.

   {% note %}

   **Observação:**Se você usou o sinalizador `--temp-dir` do comando `init` para especificar um diretório personalizado para arquivos temporários, o caminho para os arquivos `codeql-env` podem ser diferentes.

   {% endnote %}

1. Você está analisando uma linguagem compilada no macOS sem usar o comando `autobuild` e você mesmo executa os passos de compilação após a etapa `init`. Se a opção SIP (Proteção da Integridade do Sistema) estiver habilitada, que é o padrão nas versões recentes do OSX, poderá ocorrer uma falha na análise. Para corrigir isso, prefixe o comando de compilação com a variável de ambiente `$CODEQL_RUNNER`. Por exemplo, se seu comando de criação for `cmd arg1 arg2`, você deverá executar `$CODEQL_RUNNER cmd arg1 arg2`.

1. O código é criado em um contêiner ou em uma máquina separada. Se você usar uma criação em contêiner ou se você externalizar a criação para outra máquina, certifique-se de executar {% data variables.product.prodname_codeql_runner %} no contêiner ou na máquina onde a tarefa de criação ocorrer. Para obter mais informações, consulte "[Executar a varredura de código do CodeQL em um contêiner](/github/finding-security-vulnerabilities-and-errors-in-your-code/running-codeql-code-scanning-in-a-container)".
