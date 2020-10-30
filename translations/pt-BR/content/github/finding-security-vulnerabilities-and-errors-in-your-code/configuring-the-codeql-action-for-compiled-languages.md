---
title: Configuring the CodeQL action for compiled languages
shortTitle: Configurar para linguagens compiladas
intro: 'You can configure how {% data variables.product.prodname_dotcom %} uses the {% data variables.product.prodname_codeql_workflow %} to scan code written in compiled languages for vulnerabilities and errors.'
product: '{% data reusables.gated-features.code-scanning %}'
permissions: 'Pessoas com permissões de gravação para um repositório podem configurar {% data variables.product.prodname_code_scanning %} para o repositório.'
redirect_from:
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-code-scanning-for-compiled-languages
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.code-scanning.beta %}
{% data reusables.code-scanning.enterprise-enable-code-scanning-actions %}

### About the {% data variables.product.prodname_codeql_workflow %} and compiled languages

Para habilitar o {% data variables.product.prodname_code_scanning %} para seu repositório, você deve adicionar ao repositório um fluxo de trabalho do {% data variables.product.prodname_actions %} que inclui análise do {% data variables.product.prodname_codeql %}. For {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %}, you add the {% data variables.product.prodname_codeql_workflow %}. Para obter mais informações, consulte "[Habilitando {% data variables.product.prodname_code_scanning %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/enabling-code-scanning).

{% data reusables.code-scanning.edit-workflow %}
For general information about configuring {% data variables.product.prodname_code_scanning %} and editing workflow files, see "[Configuring {% data variables.product.prodname_code_scanning %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-code-scanning)" and  "[Configuring a workflow](/actions/configuring-and-managing-workflows/configuring-a-workflow)."

### Sobre a autobuild para {% data variables.product.prodname_codeql %}

{% data reusables.code-scanning.autobuild-compiled-languages %}

{% note %}

**Observação**: Se você usa executores auto-hospedados para {% data variables.product.prodname_actions %}, talvez seja necessário instalar um software adicional para usar o processo de `autobuild`. Além disso, se seu repositório precisar de uma versão específica de uma ferramenta de criação, talvez seja necessário instalá-lo manualmente. Para obter mais informações, consulte "[Software instalado nos executores hospedados no GitHub](/actions/reference/software-installed-on-github-hosted-runners)".

{% endnote %}

#### C/C++

| Tipo de sistema compatível | Nome do sistema                                          |
| -------------------------- | -------------------------------------------------------- |
| Sistema operacional        | Windows e Linux                                          |
| Sistema de criação         | Autoconf, CMake, qmake, Meson, Waf, SCons e Linux Kbuild |

O comportamento da etapa de </code>autobuild` varia de acordo com o sistema operacional em que a extração é executada. No Windows, a etapa não tem ações-padrão. No Linux, esta etapa revisa os arquivos presentes no repositório para determinar o sistema de criação usado:</p>

<ol start="1">
<li>Procure um sistema de criação no diretório-raiz.</li>
<li>Se nenhum for encontrado, procure um diretório único nos subdiretórios com um sistema de criação para C/C++.</li>
<li>Execute um comando apropriado para configurar o sistema. </li>
</ol>

<h4 spaces-before="0">C</h4>

<table spaces-before="0" line-breaks-before="2">
<thead>
<tr>
  <th>Tipo de sistema compatível</th>
  <th>Nome do sistema</th>
</tr>
</thead>
<tbody>
<tr>
  <td>Sistema operacional</td>
  <td>Windows e Linux</td>
</tr>
<tr>
  <td>Sistema de criação</td>
  <td>.NET, MSbuild e scripts de criação</td>
</tr>
</tbody>
</table>

<p spaces-before="0">O processo de <code>autobuild` tenta detectar automaticamente um método de criação adequado para C# usando a seguinte abordagem:

1. Invocar o arquivo `dotnet build` na solução (`.sln`) ou projeto (`.csproj`) mais próximo da raiz.
2. Invocar `MSbuild` (Linux) ou `MSBuild.exe` (Windows) na solução ou no arquivo do projeto mais próximo da raiz. Se o `autobuild` detectar várias soluções ou arquivos de projeto na mesma profundidade (mais curta) do diretório de nível superior, ele tentará criar todos eles.
3. Invoca um script que parece um script de criação—_build_ e _build.sh_ (nessa ordem, para o Linux) ou _build.bat_, _build.cmd_, _e build.exe_ (nessa ordem para o Windows).

#### Java

| Tipo de sistema compatível | Nome do sistema                        |
| -------------------------- | -------------------------------------- |
| Sistema operacional        | Windows, macOS e Linux (sem restrição) |
| Sistema de criação         | Gradle, Maven e Ant                    |

O processo de `autobuild` tenta determinar o sistema de criação para bases de código do Java aplicando esta estratégia:

1. Procurar um arquivo de criação no diretório-raiz. Verifique o arquivos do Gradle, do Maven e, em seguida, do Ant.
2. Execute o primeiro arquivo de criação encontrado. Se os arquivos do Gradle e do Maven estiverem presentes, será usado o arquivo do Gradle.
3. Caso contrário, procure arquivos de criação nos subdiretórios diretos do diretório-raiz. Se apenas um subdiretório contiver arquivos de criação, execute o primeiro arquivo identificado nesse subdiretório (usando a mesma preferência de 1). Se mais de um subdiretório conter arquivos de criação, relate um erro.

### Adicionar passos de criação a uma linguagem compilada

{% data reusables.code-scanning.autobuild-add-build-steps %} Para obter informações sobre a edição do fluxo de trabalho, consulte "[Configurar {% data variables.product.prodname_code_scanning %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-code-scanning#editing-a-code-scanning-workflow)".

Depois de remover a etapa de `autobuild`, remova o comentário da etapa `executar` e adicione comandos de criação adequados ao seu repositório. A etapa do fluxo de trabalho `executar` executa programas da linha de comando que usam o shell do sistema operacional. Você pode modificar esses comandos e adicionar mais comandos para personalizar o processo de criação.

``` yaml
- run: |
  make bootstrap
  make release
```

Para obter mais informações sobre a palavra-chave `executar`, consulte "[Sintaxe de fluxo de trabalho para {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepsrun)".

Também é possível usar uma matriz para atualizar o fluxo de trabalho para criar mais de uma linguagem compilada, se esta for a abordagem apropriada para o seu sistema e não causar conflitos. Para obter mais informações, consulte "[Configurar uma matriz de criação](/actions/configuring-and-managing-workflows/configuring-a-workflow#configuring-a-build-matrix)".


Por exemplo, o fluxo de trabalho abaixo executa um trabalho para análise C/C++ e outro para análise do Java.

```yaml

name: "CodeQL"

on:
  push:
    branches: [main, ]
  pull_request:
    branches: [main]

jobs:
  CodeQL-Build:

    strategy:
      fail-fast: false
      matrix:
        language: ['cpp', 'java']

{% if currentVersion ver_gt "enterprise-server@2.21" %}    runs-on: self-hosted
{% else %}    # CodeQL runs on ubuntu-latest, windows-latest, and macos-latest
    runs-on: ubuntu-latest{% endif %}

    steps:
    - name: Checkout repository
      uses: actions/checkout@v2

    # Initializes the CodeQL tools for scanning.
    - name: Initialize CodeQL
      uses: github/codeql-action/init@v1
      with:
        languages: ${{ matrix.language }}

    # Autobuild attempts to build any compiled languages  (C/C++, C#, or Java).
    # Se esta etapa falhar, você deverá removê-lo e executar a criação manualmente.
    - name: Autobuild
      uses: github/codeql-action/autobuild@v1

    - name: Perform CodeQL Analysis
      uses: github/codeql-action/analyze@v1
```

Para obter mais dicas e truques sobre por que o `autobuild` não criará seu código, consulte[Solução de problemas para {% data variables.product.prodname_code_scanning %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/troubleshooting-code-scanning)".

Se você adicionou etapas manuais de criação para linguagens compiladas ou usou uma matriz de criação e o {% data variables.product.prodname_code_scanning %} ainda não está funcionando no seu repositório, entre em contato com {% data variables.contact.contact_support %}.
