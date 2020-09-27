---
title: Executar a verificação de código no seu sistema de CI
shortTitle: Executar na sua CI
intro: 'Se você usa um sistema de integração contínua de terceiros, você poderá integrar {{ site.data.variables.product.prodname_codeql }} {{ site.data.variables.product.prodname_code_scanning }} a esse sistema usando o {{ site.data.variables.product.prodname_codeql_runner }}.'
product: '{{ site.data.reusables.gated-features.code-scanning }}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{{ site.data.reusables.code-scanning.beta }}
{{ site.data.reusables.code-scanning.enterprise-enable-code-scanning }}

### Sobre o {{ site.data.variables.product.prodname_codeql_runner }}

{{ site.data.reusables.code-scanning.about-code-scanning }} Para obter informações, consulte "[Sobre {{ site.data.variables.product.prodname_code_scanning }}](/github/finding-security-vulnerabilities-and-errors-in-your-code/about-code-scanning).

Você pode usar {{ site.data.variables.product.prodname_codeql_runner }} para executar o {{ site.data.variables.product.prodname_code_scanning }} no código que você está processando em um sistema de integração contínua (CI) de terceiros. Como alternativa, você pode usar {{ site.data.variables.product.prodname_actions }} para executar {{ site.data.variables.product.prodname_code_scanning }} em {{ site.data.variables.product.product_location }}. Para obter informações, consulte "[Habilitar {{ site.data.variables.product.prodname_code_scanning }} para um repositório](/github/finding-security-vulnerabilities-and-errors-in-your-code/enabling-code-scanning-for-a-repository)".

O {{ site.data.variables.product.prodname_codeql_runner }} é uma ferramenta de linha de comando que executa a análise de {{ site.data.variables.product.prodname_codeql }} em um checkout de um repositório do {{ site.data.variables.product.prodname_dotcom }}. Você adiciona o executor ao seu sistema de terceiros e, em seguida, chama o executor para analisar o código e fazer o upload dos resultados para o {{ site.data.variables.product.product_location }}. Estes resultados são exibidos como alertas do {{ site.data.variables.product.prodname_code_scanning }} no repositório.

{{ site.data.reusables.code-scanning.codeql-runner-license }}

### Fazer o download do {{ site.data.variables.product.prodname_codeql_runner }}

Você pode fazer o download do {{ site.data.variables.product.prodname_codeql_runner }} em https://github.com/github/codeql-action/releases. Em alguns sistemas operacionais, talvez você precise alterar as permissões para o arquivo baixado antes de executá-lo.

No Linux:

```shell
chmod +x codeql-runner-linux
```

No MacOS:

```shell
chmod +x codeql-runner-macos
sudo xattr -d com.apple.quarantine codeql-runner-macos
```

### Adicionar {{ site.data.variables.product.prodname_codeql_runner }} ao seu sistema de CI

Após concluído o download do {{ site.data.variables.product.prodname_codeql_runner }} e verificado que pode ser executado, você deve disponibilizar o executor para cada servidor de CI que você pretende usar para {{ site.data.variables.product.prodname_code_scanning }}. Além disso, cada servidor de CI também precisa:

- Um {{ site.data.variables.product.prodname_github_apps }} ou um token de acesso pessoal para {{ site.data.variables.product.prodname_codeql_runner }} usar. Para repositórios privados, o token deve ter o escopo do `repositório`. Para público, o token precisa apenas dos escopos `public_repo` e `repo:security_events`. Para obter informações, consulte "[Criar {{ site.data.variables.product.prodname_github_apps }}](/developers/apps/building-github-apps)" e "[Criar um token de acesso pessoal](/github/authenticating-to-github/creating-a-personal-access-token)".
- Acesso ao pacote de {{ site.data.variables.product.prodname_codeql }} associado a esta versão do {{ site.data.variables.product.prodname_codeql_runner }}. Este pacote contém CLI de {{ site.data.variables.product.prodname_codeql }}, consultas e bibliotecas necessárias para a análise de {{ site.data.variables.product.prodname_codeql }}. Para obter informações, consulte "[CLI de {{ site.data.variables.product.prodname_codeql }}](https://help.semmle.com/codeql/codeql-cli.html)".

As opções para fornecer acesso ao pacote de{{ site.data.variables.product.prodname_codeql }} são:

1. Permitir o acesso dos servidores de CI ao {{ site.data.variables.product.prodname_dotcom_the_website }} para que o {{ site.data.variables.product.prodname_codeql_runner }} possa fazer o download do pacote automaticamente.
1. Fazer o download/extrair manualmente o pacote, armazená-lo com outros recursos centrais e usar o sinalizador `--codeql-path` para especificar a localização do pacote nas chamadas para inicializar o {{ site.data.variables.product.prodname_codeql_runner }}.
{% if currentVersion != "free-pro-team@latest" %}
1. Você pode espelhar o repositório `github/codeql-action` no {{ site.data.variables.product.product_location }}. A menos que você especifique o sinalizador <nobr>`--codeql-path`</nobr> , o executor verifica automaticamente o pacote neste local e no {{ site.data.variables.product.prodname_dotcom_the_website }}.{% endif %}

### Chamar {{ site.data.variables.product.prodname_codeql_runner }}

Você deve chamar {{ site.data.variables.product.prodname_codeql_runner }} no local de checkout do repositório que deseja analisar. Os dois comandos principais são:

1. `init` necessário para inicializar o executor e criar um banco de dados de {{ site.data.variables.product.prodname_codeql }} para que cada linguagem seja analisada. Estas bases de dados são preenchidas e analisadas por comandos subsequentes.
1. `análise` necessário para preencher os bancos de dados {{ site.data.variables.product.prodname_codeql }}, analisá-los e fazer o upload dos resultados para {{ site.data.variables.product.product_location }}.

Para ambos os comandos, você deve especificar a URL de {{ site.data.variables.product.product_location }}, o repositório *OWNER/NAME* e os aplicativos GitHub ou o token de acesso pessoal para usar na autenticação. Você também precisa especificar a localização do pacote do CodeQL, a menos que o servidor de CI tenha acesso para baixá-lo diretamente do repositório `github/codeql-action` em {{ site.data.variables.product.prodname_dotcom_the_website}}{% if currentVersion != "free-pro-team@latest" %} ou espelhado em {{ site.data.variables.product.product_location }}{% endif %}.

Você pode configurar o local onde o {{ site.data.variables.product.prodname_codeql_runner }} armazena o pacote do CodeQL para futuras análises em um servidor usando o sinalizador <nobr>`--tools-dir`</nobr> e onde armazena arquivos temporários durante a análise usando <nobr>`--temp-dir`</nobr>.

Para visualizar a referência de linha de comando para o executor, use o sinalizador `-h`. Por exemplo, para listar todos os comandos executados: `codeql-runner-OS -h` ou para listar todos os sinalizadores disponíveis para o comando `init` executado: `codeql-runner-OS init -h` (em que `OS` varia de acordo com o executável que você está usando). Para obter mais informações, consulte "[referência de comando de {{ site.data.variables.product.prodname_codeql_runner }}](/github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-code-scanning-in-your-ci-system#codeql-runner-command-reference).

#### Exemplo básico

Este exemplo executa a análise do {{ site.data.variables.product.prodname_codeql }} em um servidor de Linux CI para o repositório `octo-org/example-repo` hospedado em `{{ site.data.variables.command_line.git_url_example }}`. O processo é muito simples porque o repositório contém apenas linguagens que podem ser analisadas diretamente pelo {{ site.data.variables.product.prodname_codeql }}, sem ser criado (ou seja, Go, JavaScript, Python e TypeScript).

1. Confira o repositório a ser analisado.
1. Mova para o diretório para o local onde o repositório está reservado.
1. Inicialize {{ site.data.variables.product.prodname_codeql_runner }} e crie banco de dados do {{ site.data.variables.product.prodname_codeql }} para as linguagens detectadas.

    ```shell
    $ /path/to-runner/codeql-runner-linux init --repository octo-org/example-repo
        --github-url {{ site.data.variables.command_line.git_url_example }} --github-auth TOKEN
    > Cleaning temp directory /srv/checkout/example-repo/codeql-runner
    > ...
    > Banco de dados do CodeQL criado em /srv/checkout/example-repo/codeql-runner/codeql_databases/javascript.
    ```

1. Preencha os bancos de dados de {{ site.data.variables.product.prodname_codeql_runner }}, analise-os e faça o upload dos resultados para {{ site.data.variables.product.product_name }}.

    ```shell
    $ /path/to-runner/codeql-runner-linux analyze --repository octo-org/example-repo
        --github-url {{ site.data.variables.command_line.git_url_example }} --github-auth TOKEN
        --commit 5b6a3078b31dc346e5ce7b86837d6abbe7a18bbd --ref refs/heads/main
    > Finalizing database creation
    > ...
    > POST /repos/octo-org/example-repo/code-scanning/sarifs - 202 in 786ms
    > Successfully uploaded results
    ```

O servidor tem acesso para fazer o download do pacote de {{ site.data.variables.product.prodname_codeql }} diretamente do repositório `github/codeql-action` no {{ site.data.variables.product.prodname_dotcom_the_website}}{% if currentVersion != "free-pro-team@latest" %} ou espelhado no {{ site.data.variables.product.product_location }}{% endif %}. Portanto, não há necessidade de usar o sinalizador `--codeql-path`. Quando a análise for concluída, o {{ site.data.variables.product.prodname_codeql_runner }} faz o upload dos resultados para a visualização de {{ site.data.variables.product.prodname_code_scanning }}. Para obter mais informações, consulte "[Gerenciando alertas do {{ site.data.variables.product.prodname_code_scanning }}](/github/finding-security-vulnerabilities-and-errors-in-your-code/managing-alerts-from-code-scanning)."

#### Exemplo de linguagem compilada

Este exemplo é semelhante ao exemplo anterior. No entanto, desta vez, o repositório tem o código em C/C++, C# ou Java. Para criar um banco de dados de {{ site.data.variables.product.prodname_codeql }} para essas linguagens, o CLI precisa rastrear a criação. No final do processo de inicialização, o executor informa o comando que você precisa configurar o ambiente antes de criar o código. Você precisa executar esse comando antes de chamar o processo de criação normal da CI e, em seguida, executar o comando `analisar`.

1. Confira o repositório a ser analisado.
1. Mova para o diretório para o local onde o repositório está reservado.
1. Inicialize {{ site.data.variables.product.prodname_codeql_runner }} e crie banco de dados do {{ site.data.variables.product.prodname_codeql }} para as linguagens detectadas.

    ```shell
    $ /path/to-runner/codeql-runner-linux init --repository octo-org/example-repo-2
        --github-url {{ site.data.variables.command_line.git_url_example }} --github-auth TOKEN
    > Cleaning temp directory /srv/checkout/example-repo-2/codeql-runner
    > ...
    > CodeQL environment output to "/srv/checkout/example-repo-2/codeql-runner/codeql-env.json"
      and "/srv/checkout/example-repo-2/codeql-runner/codeql-env.sh".
      Exporte essas variáveis para processos futuros para que a criação possa ser rastreada, por exemplo, executando "
      . /srv/checkout/example-repo-2/codeql-runner/codeql-env.sh".
      ```

1. Execute o script gerado pela ação `init` para configurar o ambiente para rastrear a criação.

    ```shell
    $ . /srv/checkout/example-repo-2/codeql-runner/codeql-env.sh
    ```

1. Crie o código.
1. Preencha os bancos de dados de {{ site.data.variables.product.prodname_codeql }}, analise-os e faça o upload dos resultados para o GitHub.

    ```shell
    $ /path/to-runner/codeql-runner-linux analyze --repository octo-org/example-repo-2
        --github-url {{ site.data.variables.command_line.git_url_example }} --github-auth TOKEN
        --commit ae7b655ef30b50fb726ae7b3daa79571a39d194d --ref refs/heads/main
    > Finalizing database creation
    > ...
    > POST /repos/octo-org/example-repo-2/code-scanning/sarifs - 202 in 573ms
    > Successfully uploaded results
    ```

{% note %}

**Observação:** Se você usar uma criação conteinerizada, você deverá executar o {{ site.data.variables.product.prodname_codeql_runner }} no contêiner em que ocorre a tarefa de criação.

{% endnote %}

### Leia mais

- "[Configurar a verificação de código no seu sistema de CI](/github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-code-scanning-in-your-ci-system)"
- "[Solução de problemas na varredura de código](/github/finding-security-vulnerabilities-and-errors-in-your-code/troubleshooting-code-scanning)"
