---
title: Executando um executor de CodeQL no seu sistema de CI
shortTitle: Executando um executor de CodeQL
intro: 'Você pode usar {% data variables.product.prodname_codeql_runner %} para executar {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} em um sistema de integração contínua de terceiros.'
product: '{% data reusables.gated-features.code-scanning %}'
redirect_from:
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/running-code-scanning-in-your-ci-system
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/running-codeql-code-scanning-in-your-ci-system
  - /code-security/secure-coding/running-codeql-code-scanning-in-your-ci-system
  - /code-security/secure-coding/running-codeql-runner-in-your-ci-system
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.0'
  github-ae: '*'
topics:
  - Security
---
<!--For this article in earlier GHES versions, see /content/github/finding-security-vulnerabilities-and-errors-in-your-code-->
<!--UI-LINK: When GitHub Enterprise Server doesn't have GitHub Actions set up, the Security > Code scanning alerts view links to this article.-->

{% data reusables.code-scanning.beta-codeql-runner %}
{% data reusables.code-scanning.beta %}
{% data reusables.code-scanning.enterprise-enable-code-scanning %}

### Sobre o {% data variables.product.prodname_codeql_runner %}

O {% data variables.product.prodname_codeql_runner %} é uma ferramenta que você pode usar para executar {% data variables.product.prodname_code_scanning %} no código que você está processando em um sistema de integração contínua de terceiros (CI). {% data reusables.code-scanning.about-code-scanning %} Para obter informações, consulte "[Sobre {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/about-code-scanning).

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@next" %}
Em muitos casos, é mais fácil configurar {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} usando {% data variables.product.prodname_codeql_cli %} diretamente no seu sistema de CI. O executor é mais complexo e menos clemente para ser configurado do que o CLI, e é recomendado apenas se você precisar da sua capacidade de analisar várias linguagens compiladas com uma única compilação, ou para integrar-se a processos de compilação complexos. Para obter mais informações, consulte "[Sobre a verificação de código CodeQL no seu sistema de CI](/code-security/secure-coding/about-codeql-code-scanning-in-your-ci-system)".
{% endif %}

Como alternativa, você pode usar {% data variables.product.prodname_actions %} para executar {% data variables.product.prodname_code_scanning %} em {% data variables.product.product_name %}. Para obter informações, consulte "[Configurar {% data variables.product.prodname_code_scanning %} para um repositório](/code-security/secure-coding/setting-up-code-scanning-for-a-repository)".

O {% data variables.product.prodname_codeql_runner %} é uma ferramenta de linha de comando que executa a análise de {% data variables.product.prodname_codeql %} em um checkout de um repositório do {% data variables.product.prodname_dotcom %}. Você adiciona o executor ao seu sistema de terceiros e, em seguida, chama o executor para analisar o código e fazer o upload dos resultados para o {% data variables.product.product_name %}. Estes resultados são exibidos como alertas do {% data variables.product.prodname_code_scanning %} no repositório.

{% note %}

**Observação:**
{% if currentVersion == "free-pro-team@latest" %}
* O {% data variables.product.prodname_codeql_runner %} usa o CLI de {% data variables.product.prodname_codeql %} para analisar o código e, portanto, tem as mesmas condições da licença. É grátis usar em repositórios públicos que são mantidos no {% data variables.product.prodname_dotcom_the_website %}, e disponíveis para uso em repositórios privados que são propriedade de clientes com uma licença do {% data variables.product.prodname_advanced_security %}. Para obter informações, consulte "[{% data variables.product.product_name %} Termos e Condições](https://securitylab.github.com/tools/codeql/license) de do CLI de {% data variables.product.prodname_codeql %} " e "[{% data variables.product.prodname_codeql %}](https://codeql.github.com/docs/codeql-cli/)".
{% else %}
* O {% data variables.product.prodname_codeql_runner %} está disponível para os clientes com uma licença de {% data variables.product.prodname_advanced_security %}.
{% endif %}
{% if currentVersion ver_lt "enterprise-server@3.1" or currentVersion == "github-ae@latest" %}
* O {% data variables.product.prodname_codeql_runner %} não deve ser confundido com o CLI de {% data variables.product.prodname_codeql %}. A CLI de {% data variables.product.prodname_codeql %} é uma interface de linha de comando que permite que você crie bancos de dados de {% data variables.product.prodname_codeql %} para pesquisa de segurança e executar consultas de {% data variables.product.prodname_codeql %}. Para obter mais informações, consulte "[{% data variables.product.prodname_codeql_cli %}](https://codeql.github.com/docs/codeql-cli/)".
{% endif %}
{% endnote %}

### Fazer o download do {% data variables.product.prodname_codeql_runner %}

Você pode fazer o download de {% data variables.product.prodname_codeql_runner %} de https://{% if currentVersion == "free-pro-team@latest" %}github.com{% else %}<em>HOSTNAME</em>{% endif %}/github/codeql-action/releases. Em alguns sistemas operacionais, talvez você precise alterar as permissões para o arquivo baixado antes de executá-lo.

No Linux:

```shell
chmod +x codeql-runner-linux
```

No macOS:

```shell
chmod +x codeql-runner-macos
sudo xattr -d com.apple.quarantine codeql-runner-macos
```

No Windows, o arquivo `codeql-runner-win.exe` normalmente não exige alteração de permissões.

### Adicionar {% data variables.product.prodname_codeql_runner %} ao seu sistema de CI

Após fazer o download de {% data variables.product.prodname_codeql_runner %} e verificar se pode ser executado, você deverá disponibilizar o executor para cada servidor de CI que você pretende usar para {% data variables.product.prodname_code_scanning %}. Por exemplo, você pode configurar cada servidor para que copie o executor de um local central interno. Como alternativa, você poderia usar a API REST para obter o executor diretamente do {% data variables.product.prodname_dotcom %}, por exemplo:

```shell
wget https://{% if currentVersion == "free-pro-team@latest" %}github.com{% else %}<em>HOSTNAME</em>{% endif %}/github/codeql-action/releases/latest/download/codeql-runner-linux
chmod +x codeql-runner-linux
```

Além disso, cada servidor de CI também precisa:

- Um {% data variables.product.prodname_github_app %} ou um token de acesso pessoal para {% data variables.product.prodname_codeql_runner %} usar. Você deve usar um token de acesso com o escopo do `repositório`, ou um {% data variables.product.prodname_github_app %} com a permissão de gravação de `security_events` e `metadados` e permissões de leitura de `conteúdo`. Para obter informações, consulte "[Criar {% data variables.product.prodname_github_apps %}](/developers/apps/building-github-apps)" e "[Criar um token de acesso pessoal](/github/authenticating-to-github/creating-a-personal-access-token)".
- Acesso ao pacote de {% data variables.product.prodname_codeql %} associado a esta versão do {% data variables.product.prodname_codeql_runner %}. Este pacote contém consultas e bibliotecas necessárias para a análise de {% data variables.product.prodname_codeql %} mais o CLI de {% data variables.product.prodname_codeql %}, que é usado internamente pelo executor. Para obter informações, consulte "[CLI de {% data variables.product.prodname_codeql %}](https://codeql.github.com/docs/codeql-cli/)".

As opções para fornecer acesso ao pacote de{% data variables.product.prodname_codeql %} são:

1. Permita o acesso dos servidores de CI a https://{% if currentVersion == "free-pro-team@latest" %}github. om{% else %}<em>HOSTNAME</em>{% endif %}/github/codeql-action para que {% data variables.product.prodname_codeql_runner %} possa fazer o download do pacote automaticamente.
1. Faça o download/extraia o pacote manualmente, armazene-o com outros recursos centrais e use <nobr>`--codeql-path`</nobr> o sinalizador para especificar o local do pacote nas chamadas para inicializar o {% data variables.product.prodname_codeql_runner %}.

### Chamar {% data variables.product.prodname_codeql_runner %}

Você deve chamar {% data variables.product.prodname_codeql_runner %} no local de checkout do repositório que deseja analisar. Os dois comandos principais são:

1. `init` necessário para inicializar o executor e criar um banco de dados de {% data variables.product.prodname_codeql %} para que cada linguagem seja analisada. Estas bases de dados são preenchidas e analisadas por comandos subsequentes.
1. `análise` necessário para preencher os bancos de dados {% data variables.product.prodname_codeql %}, analisá-los e fazer o upload dos resultados para {% data variables.product.product_name %}.

Para ambos os comandos, você deve especificar a URL de {% data variables.product.product_name %}, o repositório **OWNER/NAME e o {% data variables.product.prodname_github_apps %} ou token de acesso pessoal para usar para autenticação. Você também precisa especificar a localização do pacote CodeQL, a menos que o servidor CI tenha acesso para fazer o download diretamente do repositório `github/codeql-action`.

Você pode configurar o local onde o {% data variables.product.prodname_codeql_runner %} armazena o pacote do CodeQL para futuras análises em um servidor usando o sinalizador <nobr>`--tools-dir`</nobr> e onde armazena arquivos temporários durante a análise usando <nobr>`--temp-dir`</nobr>.

Para visualizar a referência de linha de comando para o executor, use o sinalizador `-h`. Por exemplo, para listar todos os comandos executados: `codeql-runner-OS -h` ou para listar todos os sinalizadores disponíveis para o comando `init` executado: `codeql-runner-OS init -h` (em que `OS` varia de acordo com o executável que você está usando). Para obter mais informações, consulte "[Configurar o {% data variables.product.prodname_code_scanning %} no seu sistema de CI](/code-security/secure-coding/configuring-codeql-runner-in-your-ci-system#codeql-runner-command-reference)".

{% data reusables.code-scanning.upload-sarif-alert-limit %}

#### Exemplo básico

Este exemplo executa a análise do {% data variables.product.prodname_codeql %} em um servidor de Linux CI para o repositório `octo-org/example-repo` hospedado em `{% data variables.command_line.git_url_example %}`. O processo é muito simples porque o repositório contém apenas linguagens que podem ser analisadas diretamente pelo {% data variables.product.prodname_codeql %}, sem ser criado (ou seja, Go, JavaScript, Python e TypeScript).

Neste exemplo, o servidor tem acesso para fazer o download do pacote {% data variables.product.prodname_codeql %} diretamente do repositório `github/codeql-action`. Portanto, não há necessidade de usar o sinalizador `--codeql-path`.

1. Confira o repositório a ser analisado.
1. Mova para o diretório para o local onde o repositório está reservado.
1. Inicialize {% data variables.product.prodname_codeql_runner %} e crie banco de dados do {% data variables.product.prodname_codeql %} para as linguagens detectadas.

    ```shell
    $ /path/to-runner/codeql-runner-linux init --repository octo-org/example-repo
        --github-url {% data variables.command_line.git_url_example %} --github-auth TOKEN
    > Cleaning temp directory /srv/checkout/example-repo/codeql-runner
    > ...
    > Banco de dados do CodeQL criado em /srv/checkout/example-repo/codeql-runner/codeql_databases/javascript.
    ```

{% data reusables.code-scanning.codeql-runner-analyze-example %}

#### Exemplo de linguagem compilada

Este exemplo é semelhante ao exemplo anterior. No entanto, desta vez, o repositório tem o código em C/C++, C# ou Java. Para criar um banco de dados de {% data variables.product.prodname_codeql %} para essas linguagens, o CLI precisa monitorar a criação. No final do processo de inicialização, o executor informa o comando que você precisa configurar o ambiente antes de criar o código. Você precisa executar esse comando antes de chamar o processo de criação normal da CI e, em seguida, executar o comando `analisar`.

1. Confira o repositório a ser analisado.
1. Mova para o diretório para o local onde o repositório está reservado.
1. Inicialize {% data variables.product.prodname_codeql_runner %} e crie banco de dados do {% data variables.product.prodname_codeql %} para as linguagens detectadas.

    ```shell
    $ /path/to-runner/codeql-runner-linux init --repository octo-org/example-repo-2
        --github-url {% data variables.command_line.git_url_example %} --github-auth TOKEN
    > Cleaning temp directory /srv/checkout/example-repo-2/codeql-runner
    > ...
    > CodeQL environment output to "/srv/checkout/example-repo-2/codeql-runner/codeql-env.json"
      and "/srv/checkout/example-repo-2/codeql-runner/codeql-env.sh".
      Exporte essas variáveis para processos futuros para que o CodeQL possa monitorar a criação, por exemplo, executando 
". /srv/checkout/example-repo-2/codeql-runner/codeql-env.sh".
      ```

1. Extraia o script gerado pela ação `iniciar` para configurar o ambiente a fim de monitorar a criação. Observe o ponto e espaço principal no seguinte trecho do código.

    ```shell
    $ . /srv/checkout/example-repo-2/codeql-runner/codeql-env.sh
    ```

1. Crie o código. No macOS, você precisa prefixar o comando de criação com a variável de ambiente `$CODEQL_RUNNER`. Para obter mais informações, consulte "[Solução de problemas {% data variables.product.prodname_codeql_runner %} no seu sistema CI](/code-security/secure-coding/troubleshooting-codeql-runner-in-your-ci-system#no-code-found-during-the-build)#no-code-found-during-the-build)."

{% data reusables.code-scanning.codeql-runner-analyze-example %}

{% note %}

**Observação:** Se você usar uma criação conteinerizada, você deverá executar o {% data variables.product.prodname_codeql_runner %} no contêiner em que ocorre a tarefa de criação.

{% endnote %}

### Leia mais

- "[Configurar {% data variables.product.prodname_codeql_runner %} no seu sistema de CI](/code-security/secure-coding/configuring-codeql-runner-in-your-ci-system)"
- "[Solução de problemas de {% data variables.product.prodname_codeql_runner %} no seu sistema de CI](/code-security/secure-coding/troubleshooting-codeql-runner-in-your-ci-system)"
