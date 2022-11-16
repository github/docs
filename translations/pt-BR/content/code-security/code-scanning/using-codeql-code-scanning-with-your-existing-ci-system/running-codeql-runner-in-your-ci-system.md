---
title: Executando um executor de CodeQL no seu sistema de CI
shortTitle: Run CodeQL runner
intro: 'Use o {% data variables.code-scanning.codeql_runner %} para executar a {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} em um sistema de integração contínua de terceiros.'
product: '{% data reusables.gated-features.code-scanning %}'
redirect_from:
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/running-code-scanning-in-your-ci-system
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/running-codeql-code-scanning-in-your-ci-system
  - /code-security/secure-coding/running-codeql-code-scanning-in-your-ci-system
  - /code-security/secure-coding/running-codeql-runner-in-your-ci-system
  - /code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/running-codeql-runner-in-your-ci-system
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - CodeQL
  - Repositories
  - Pull requests
  - Integration
  - CI
  - SARIF
ms.openlocfilehash: 7e60376ed165a3af2da7f000c37d326cb33ade99
ms.sourcegitcommit: b617c4a7a1e4bf2de3987a86e0eb217d7031490f
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/11/2022
ms.locfileid: '148161091'
---
<!--UI-LINK: When GitHub Enterprise Server <=3.0 doesn't have GitHub Actions set up, the Security > Code scanning alerts view links to this article.-->

{% ifversion codeql-runner-supported %}

{% data reusables.code-scanning.deprecation-codeql-runner %} {% data reusables.code-scanning.beta %} {% data reusables.code-scanning.enterprise-enable-code-scanning %}

## Sobre o {% data variables.code-scanning.codeql_runner %}

O {% data variables.code-scanning.codeql_runner %} é uma ferramenta que você pode usar para executar a {% data variables.product.prodname_code_scanning %} no código que está processando em um sistema de CI (integração contínua) de terceiros. {% data reusables.code-scanning.about-code-scanning %} Para obter informações, confira "[Sobre a {% data variables.product.prodname_code_scanning %} com o {% data variables.product.prodname_codeql %}](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-with-codeql)".

Em muitos casos, é mais fácil configurar {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} usando {% data variables.product.prodname_codeql_cli %} diretamente no seu sistema de CI. 

Como alternativa, você pode usar {% data variables.product.prodname_actions %} para executar {% data variables.product.prodname_code_scanning %} em {% data variables.product.product_name %}. Para obter informações, confira "[Como configurar a {% data variables.product.prodname_code_scanning %} para um repositório](/code-security/secure-coding/setting-up-code-scanning-for-a-repository)".

O {% data variables.code-scanning.codeql_runner %} é uma ferramenta de linha de comando que executa a análise do {% data variables.product.prodname_codeql %} em um checkout de um repositório do {% data variables.product.prodname_dotcom %}. Você adiciona o executor ao sistema de terceiros e chama o executor para analisar o código e carregar os resultados no {% data variables.product.product_name %}. Estes resultados são exibidos como alertas do {% data variables.product.prodname_code_scanning %} no repositório.

{% note %}

**Observação:** {% ifversion fpt or ghec %}
* O {% data variables.code-scanning.codeql_runner %} usa a CLI do {% data variables.product.prodname_codeql %} para analisar o código e, portanto, tem as mesmas condições da licença. É grátis usar em repositórios públicos que são mantidos no {% data variables.product.prodname_dotcom_the_website %}, e disponíveis para uso em repositórios privados que são propriedade de clientes com uma licença do {% data variables.product.prodname_advanced_security %}. Para obter informações, confira "[Termos e condições do {% data variables.product.product_name %} {% data variables.product.prodname_codeql %}](https://securitylab.github.com/tools/codeql/license)" e "[CLI do {% data variables.product.prodname_codeql %}](https://codeql.github.com/docs/codeql-cli/)".
{% else %}
* O {% data variables.code-scanning.codeql_runner %} está disponível para os clientes com uma licença do {% data variables.product.prodname_advanced_security %}.
{% endif %} {% ifversion ghae %}
* O {% data variables.code-scanning.codeql_runner %} não deve ser confundido com a CLI do {% data variables.product.prodname_codeql %}. A CLI de {% data variables.product.prodname_codeql %} é uma interface de linha de comando que permite que você crie bancos de dados de {% data variables.product.prodname_codeql %} para pesquisa de segurança e executar consultas de {% data variables.product.prodname_codeql %}.
Para obter mais informações, confira "[{% data variables.product.prodname_codeql_cli %}](https://codeql.github.com/docs/codeql-cli/)".
{% endif %} {% endnote %}

## Como baixar o {% data variables.code-scanning.codeql_runner %}

Baixe o {% data variables.code-scanning.codeql_runner %} em https://{% ifversion fpt or ghec %}github.com{% else %}HOSTNAME{% endif %}/github/codeql-action/releases. Em alguns sistemas operacionais, talvez você precise alterar as permissões para o arquivo baixado antes de executá-lo.

No Linux:

```shell
chmod +x codeql-runner-linux
```

No macOS:

```shell
chmod +x codeql-runner-macos
sudo xattr -d com.apple.quarantine codeql-runner-macos
```

No Windows, o arquivo `codeql-runner-win.exe` geralmente não exige nenhuma alteração nas permissões.

## Como adicionar o {% data variables.code-scanning.codeql_runner %} ao seu sistema de CI

Depois de baixar o {% data variables.code-scanning.codeql_runner %} e verificar se ele pode ser executado, você deverá disponibilizar o executor para cada servidor de CI que pretende usar para a {% data variables.product.prodname_code_scanning %}. Por exemplo, você pode configurar cada servidor para que copie o executor de um local central interno. Como alternativa, você poderia usar a API REST para obter o executor diretamente do {% data variables.product.prodname_dotcom %}, por exemplo: 

```shell
wget https://{% ifversion fpt or ghec %}github.com{% else %}HOSTNAME{% endif %}/github/codeql-action/releases/latest/download/codeql-runner-linux
chmod +x codeql-runner-linux
```

Além disso, cada servidor de CI também precisa:

- Um {% data variables.product.prodname_github_app %} ou um {% data variables.product.pat_generic %} para uso do {% data variables.code-scanning.codeql_runner %}. Você precisa usar um token de acesso com o escopo `repo` ou um {% data variables.product.prodname_github_app %} com a permissão de gravação em `security_events` e permissões de leitura em `metadata` e em `contents`. Para obter informações, confira "[Como criar {% data variables.product.prodname_github_apps %}](/developers/apps/building-github-apps)" e "[Como criar um {% data variables.product.pat_generic %}](/github/authenticating-to-github/creating-a-personal-access-token)".
- Acesso ao pacote do {% data variables.product.prodname_codeql %} associado a esta versão do {% data variables.code-scanning.codeql_runner %}. Este pacote contém consultas e bibliotecas necessárias para a análise de {% data variables.product.prodname_codeql %} mais o CLI de {% data variables.product.prodname_codeql %}, que é usado internamente pelo executor. Para obter informações, confira "[CLI do {% data variables.product.prodname_codeql %}](https://codeql.github.com/docs/codeql-cli/)".

As opções para fornecer acesso ao pacote de{% data variables.product.prodname_codeql %} são:

1. Permita que os servidores de CI acessem https://{% ifversion fpt or ghec %}github.com{% else %}HOSTNAME{% endif %}/github/codeql-action para que o {% data variables.code-scanning.codeql_runner %} possa baixar o pacote automaticamente.
1. Baixe/extraia manualmente o pacote, armazene-o com outros recursos centrais e use o sinalizador <nobr>`--codeql-path`</nobr> para especificar a localização do pacote em chamadas para inicializar o {% data variables.code-scanning.codeql_runner %}.

## Como chamar o {% data variables.code-scanning.codeql_runner %}

Você deve chamar o {% data variables.code-scanning.codeql_runner %} na localização de checkout do repositório que deseja analisar. Os dois comandos principais são:

1. `init`, necessário para inicializar o executor e criar um banco de dados do {% data variables.product.prodname_codeql %} para cada linguagem a ser analisada. Estas bases de dados são preenchidas e analisadas por comandos subsequentes.
1. `analyze`, necessário para preencher os bancos de dados do {% data variables.product.prodname_codeql %}, analisá-los e carregar os resultados no {% data variables.product.product_name %}.

Para os dois comandos, você precisa especificar a URL do {% data variables.product.product_name %}, o *OWNER/NAME* do repositório e os {% data variables.product.prodname_github_apps %} ou o {% data variables.product.pat_generic %} a serem usados para autenticação. Você também precisa especificar o local do pacote do CodeQL, a menos que o servidor de CI tenha acesso para baixá-lo diretamente do repositório `github/codeql-action`.

Configure a localização em que o {% data variables.code-scanning.codeql_runner %} armazena o pacote do CodeQL para análise futura em um servidor usando o sinalizador <nobr>`--tools-dir`</nobr> e a localização em que ele armazena os arquivos temporários durante a análise usando <nobr>`--temp-dir`</nobr>.

Para ver a referência de linha de comando do executor, use o sinalizador `-h`. Por exemplo, para listar todos os comandos, execute `codeql-runner-OS -h`, ou para listar todos os sinalizadores disponíveis para o comando `init`, execute `codeql-runner-OS init -h` (em que `OS` varia de acordo com o executável que está sendo usado). Para obter mais informações, confira "[Como configurar a {% data variables.product.prodname_code_scanning %} no seu sistema de CI](/code-security/secure-coding/configuring-codeql-runner-in-your-ci-system#codeql-runner-command-reference)".

{% data reusables.code-scanning.upload-sarif-alert-limit %}

### Exemplo básico

Este exemplo executa a análise do {% data variables.product.prodname_codeql %} em um servidor de CI do Linux para o repositório `octo-org/example-repo` hospedado em `{% data variables.command_line.git_url_example %}`. O processo é muito simples porque o repositório contém apenas linguagens que podem ser analisadas diretamente pelo {% data variables.product.prodname_codeql %}, sem ser criado (ou seja, Go, JavaScript, Python e TypeScript).

Neste exemplo, o servidor tem acesso para baixar o pacote do {% data variables.product.prodname_codeql %} diretamente do repositório `github/codeql-action`, ou seja, não é necessário usar o sinalizador `--codeql-path`.

1. Confira o repositório a ser analisado.
1. Mova para o diretório para o local onde o repositório está reservado.
1. Inicialize o {% data variables.code-scanning.codeql_runner %} e crie bancos de dados do {% data variables.product.prodname_codeql %} para as linguagens detectadas.

    ```shell
    $ echo "$TOKEN" | /path/to-runner/codeql-runner-linux init --repository octo-org/example-repo
        --github-url {% data variables.command_line.git_url_example %} --github-auth-stdin
    > Cleaning temp directory /srv/checkout/example-repo/codeql-runner
    > ...
    > Created CodeQL database at /srv/checkout/example-repo/codeql-runner/codeql_databases/javascript.
    ```

{% data reusables.code-scanning.codeql-runner-analyze-example %}

### Exemplo de linguagem compilada

Este exemplo é semelhante ao exemplo anterior. No entanto, desta vez, o repositório tem o código em C/C++, C# ou Java. Para criar um banco de dados de {% data variables.product.prodname_codeql %} para essas linguagens, o CLI precisa monitorar a criação. No final do processo de inicialização, o executor informa o comando que você precisa configurar o ambiente antes de criar o código. Você precisa executar esse comando antes de chamar o processo normal de build de CI e executar o comando `analyze`.

1. Confira o repositório a ser analisado.
1. Mova para o diretório para o local onde o repositório está reservado.
1. Inicialize o {% data variables.code-scanning.codeql_runner %} e crie bancos de dados do {% data variables.product.prodname_codeql %} para as linguagens detectadas.
    ```shell
    $ echo "$TOKEN" | /path/to-runner/codeql-runner-linux init --repository octo-org/example-repo-2
        --github-url {% data variables.command_line.git_url_example %} --github-auth-stdin
    > Cleaning temp directory /srv/checkout/example-repo-2/codeql-runner
    > ...
    > CodeQL environment output to "/srv/checkout/example-repo-2/codeql-runner/codeql-env.json"
      and "/srv/checkout/example-repo-2/codeql-runner/codeql-env.sh".
      Please export these variables to future processes so that CodeQL can monitor the build, for example by running 
      ". /srv/checkout/example-repo-2/codeql-runner/codeql-env.sh".
    ```
1. Obtenha o script gerado pela ação `init` para configurar o ambiente para monitorar o build. Observe o ponto e espaço principal no seguinte trecho do código.

    ```shell
    $ . /srv/checkout/example-repo-2/codeql-runner/codeql-env.sh
    ```

1. Crie o código. No macOS, você precisa adicionar a variável de ambiente `$CODEQL_RUNNER` como prefixo ao comando de build. Para obter mais informações, confira "[Solução de problemas do {% data variables.code-scanning.codeql_runner %} no sistema de CI](/code-security/secure-coding/troubleshooting-codeql-runner-in-your-ci-system#no-code-found-during-the-build)".

{% data reusables.code-scanning.codeql-runner-analyze-example %}

{% note %}

**Observação:** se você usar um build conteinerizado, precisará executar o {% data variables.code-scanning.codeql_runner %} no contêiner em que a tarefa de build ocorre.

{% endnote %}

## Leitura adicional

- "[Como configurar o {% data variables.code-scanning.codeql_runner %} no seu sistema de CI](/code-security/secure-coding/configuring-codeql-runner-in-your-ci-system)"
- "[Solução de problemas do {% data variables.code-scanning.codeql_runner %} no seu sistema de CI](/code-security/secure-coding/troubleshooting-codeql-runner-in-your-ci-system)"

{% else %}

## Sobre o {% data variables.code-scanning.codeql_runner %}

O {% data variables.code-scanning.codeql_runner %} foi preterido. A versão 2.7.6 da [{% data variables.product.prodname_codeql_cli %}](https://github.com/github/codeql-cli-binaries/releases) tem paridade completa de recursos.

Para obter informações sobre como migrar para a {% data variables.product.prodname_codeql_cli %}, confira "[Como migrar do executor do CodeQL para a CLI do CodeQL](/code-security/code-scanning/using-codeql-code-scanning-with-your-existing-ci-system/migrating-from-the-codeql-runner-to-codeql-cli)".

## Leitura adicional

- [Reprovação do executor do CodeQL](https://github.blog/changelog/2021-09-21-codeql-runner-deprecation/) no blog do GitHub

{% endif %}
