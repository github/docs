---
title: Instalando CodeQL CLI no seu sistema de CI
shortTitle: Instalar a CLI do CodeQL
intro: 'Você pode instalar o {% data variables.product.prodname_codeql_cli %} e usá-lo para executar {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} em um sistema de integração contínua de terceiros.'
product: '{% data reusables.gated-features.code-scanning %}'
miniTocMaxHeadingLevel: 3
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
redirect_from:
  - /code-security/secure-coding/running-codeql-cli-in-your-ci-system
  - /code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/running-codeql-cli-in-your-ci-system
  - /code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/installing-codeql-cli-in-your-ci-system
---

{% data reusables.code-scanning.enterprise-enable-code-scanning %}

## Sobre o uso do {% data variables.product.prodname_codeql_cli %} for {% data variables.product.prodname_code_scanning %}

Você pode usar {% data variables.product.prodname_codeql_cli %} para executar o {% data variables.product.prodname_code_scanning %} no código que você está processando em um sistema de integração contínua (CI) de terceiros. {% data reusables.code-scanning.about-code-scanning %} Para obter informações, consulte "[Sobre {% data variables.product.prodname_code_scanning %} com {% data variables.product.prodname_codeql %}](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-with-codeql)." Para as especificações recomendadas (RAM, núcleos de CPU e disco) para executar a análise {% data variables.product.prodname_codeql %}, consulte "[Recursos recomendados de hardware para executar {% data variables.product.prodname_codeql %}](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/recommended-hardware-resources-for-running-codeql)".

{% data reusables.code-scanning.what-is-codeql-cli %}

Como alternativa, você pode usar {% data variables.product.prodname_actions %} para executar {% data variables.product.prodname_code_scanning %} em {% data variables.product.product_name %}. Para obter informações sobre {% data variables.product.prodname_code_scanning %} usando ações, consulte "[Configurar {% data variables.product.prodname_code_scanning %} para um repositório](/code-security/secure-coding/setting-up-code-scanning-for-a-repository)". Para obter uma visão geral das opções para os sistemas de CI, consulte "[Sobre o CodeQL {% data variables.product.prodname_code_scanning %} no seu sistema de CI](/code-security/secure-coding/about-codeql-code-scanning-in-your-ci-system)".

{% data reusables.code-scanning.licensing-note %}

## Fazer o download do {% data variables.product.prodname_codeql_cli %}

Você deve fazer o download do pacote {% data variables.product.prodname_codeql %} em https://github.com/github/codeql-action/releases. O pacote contém:

- produto de {% data variables.product.prodname_codeql_cli %}
- Uma versão compatível das consultas e bibliotecas de https://github.com/github/codeql
- Versões pré-compiladas de todas as consultas incluídas no pacote

{% ifversion ghes or ghae %}

{% note %}
Para {% data variables.product.product_name %}{% ifversion ghes %} {{ allVersions[currentVersion].currentRelease }},{% endif %}, recomendamos {% data variables.product.prodname_codeql_cli %} a versão {% data variables.product.codeql_cli_ghes_recommended_version %}.
{% endnote %}

{% endif %}

Você sempre deve usar o pacote de {% data variables.product.prodname_codeql %}, uma vez que ele garante compatibilidade e também fornece um desempenho muito melhor do que um download separado de {% data variables.product.prodname_codeql_cli %} e checkout das consultas de {% data variables.product.prodname_codeql %}. Se você estiver executando o CLI apenas em uma plataforma específica, faça o download do arquivo `codeql-bundle-PLATFORM.tar.gz` apropriado. Como alternativa, você pode fazer o download de `codeql-bundle.tar.gz`, que contém a CLI para todas as plataformas compatíveis.

{% data reusables.code-scanning.beta-codeql-packs-cli %}

## Configurando o {% data variables.product.prodname_codeql_cli %} no seu sistema de CI

Você precisa disponibilizar todo o conteúdo do pacote {% data variables.product.prodname_codeql_cli %} para cada servidor de CI no qual você deseja executar a análise de CodeQL de {% data variables.product.prodname_code_scanning %}. Por exemplo, você pode configurar cada servidor para que copie o pacote de um local interno central, interno e extraí-lo. Como alternativa, você pode usar a API REST para obter o pacote diretamente do {% data variables.product.prodname_dotcom %}, garantindo que você irá beneficiar-se das últimas melhorias das consultas. Atualizações no {% data variables.product.prodname_codeql_cli %} são lançadas a cada 2 a 3 semanas. Por exemplo:

```shell
$ wget https://{% ifversion fpt or ghec %}github.com{% else %}<em>HOSTNAME</em>{% endif %}/github/codeql-action/releases/latest/download/codeql-bundle-linux64.tar.gz
$ tar -xvzf ./codeql-bundle-linux64.tar.gz
```

Depois de extrair o pacote do {% data variables.product.prodname_codeql_cli %}, você poderá executar o executável `codeql` no servidor:

- Ao executar `/<extraction-root>/codeql/codeql`, onde `<extraction-root>` é a pasta onde você extraiu o pacote {% data variables.product.prodname_codeql_cli %}.
- Adicionando `/<extraction-root>/codeql` ao seu `PATH`, para que você possa executar o executável como apenas `codeql`.

## Testando a configuração de {% data variables.product.prodname_codeql_cli %}

Depois de extrair o pacote de {% data variables.product.prodname_codeql_cli %}, você pode executar o comando a seguir para verificar se a CLI está configurada corretamente para criar e analisar bases de dados.

- `codeql resolve qlpacks` se `/<extraction-root>/codeql` estiver em `PATH`.
- Caso contrário, `/<extraction-root>/codeql/codeql resolve qlpacks`.

**Extrair da saída bem-sucedida:**
```
codeql/cpp-all (/<extraction-root>/qlpacks/codeql/cpp-all/<version>)
codeql/cpp-examples (/<extraction-root>/qlpacks/codeql/cpp-examples/<version>)
codeql/cpp-queries (/<extraction-root>/qlpacks/codeql/cpp-queries/<version>)
codeql/csharp-all (/<extraction-root>/qlpacks/codeql/charp-all/<version>)
codeql/csharp-examples (/<extraction-root>/qlpacks/codeql/charp-examples/<version>)
codeql/csharp-queries (/<extraction-root>/qlpacks/codeql/charp-queries/<version>)
codeql/java-all (/<extraction-root>/qlpacks/codeql/java-all/<version>)
codeql/java-examples (/<extraction-root>/qlpacks/codeql/java-examples/<version>)
codeql/java-queries (/<extraction-root>/qlpacks/codeql/java-queries/<version>)
codeql/javascript-all (/<extraction-root>/qlpacks/codeql/javascript-all/<version>)
codeql/javascript-examples (/<extraction-root>/qlpacks/codeql/javascript-examples/<version>)
codeql/javascript-queries (/<extraction-root>/qlpacks/codeql/javascript-queries/<version>)
codeql/python-all (/<extraction-root>/qlpacks/codeql/python-all/<version>)
codeql/python-examples (/<extraction-root>/qlpacks/codeql/python-examples/<version>)
codeql/python-queries (/<extraction-root>/qlpacks/codeql/python-queries/<version>)
codeql/ruby-all (/<extraction-root>/qlpacks/codeql/ruby-all/<version>)
codeql/ruby-examples (/<extraction-root>/qlpacks/codeql/ruby-examples/<version>)
codeql/ruby-queries (/<extraction-root>/qlpacks/codeql/ruby-queries/<version>)
...
```

Você deve verificar se a saída contém as linguagens esperadas e também se o local do diretório de arquivos qlpack está correto. O local deve estar dentro do pacote de {% data variables.product.prodname_codeql_cli %} extraído, mostrado acima como `<extraction root>`, a menos que você esteja usando uma verificação `github/codeql`. Se o {% data variables.product.prodname_codeql_cli %} não conseguir localizar os qlpacks para as linguagens esperadas, certifique-se de que você faz o download do pacote {% data variables.product.prodname_codeql %} e não uma cópia independente do {% data variables.product.prodname_codeql_cli %}.

## Gerando um token para autenticação com {% data variables.product.product_name %}

Cada servidor de CI precisa de um {% data variables.product.prodname_github_app %} ou token de acesso pessoal para {% data variables.product.prodname_codeql_cli %} para usar para fazer o upload dos resultados para {% data variables.product.product_name %}. Você deve usar um token de acesso ou um {% data variables.product.prodname_github_app %} com a permissão de gravação de `security_events`. Se os servidores de CI já usam um token com este escopo para repositórios de checkout de {% data variables.product.product_name %}, potencialmente você poderia permitir que {% data variables.product.prodname_codeql_cli %} usasse o mesmo token. Caso contrário, você deve criar um novo token com a permissão de gravação de `security_events` e adicionar isso à loja secreta do sistema de CI. Para obter informações, consulte "[Criar {% data variables.product.prodname_github_apps %}](/developers/apps/building-github-apps)" e "[Criar um token de acesso pessoal](/github/authenticating-to-github/creating-a-personal-access-token)".

## Próximas etapas

Agora você está pronto para configurar o sistema de CI para executar a análise de {% data variables.product.prodname_codeql %}, gerar resultados e enviá-los para {% data variables.product.product_name %} onde os resultados serão correspondidos com um branch ou pull request e exibidos como alertas de {% data variables.product.prodname_code_scanning %}. Para obter informações detalhadas, consulte "[Configurar {% data variables.product.prodname_codeql_cli %} no seu sistema de CI](/code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/configuring-codeql-cli-in-your-ci-system)".
