---
title: Configurar o fluxo de trabalho do CodeQL para linguagens compiladas
shortTitle: Configurar para linguagens compiladas
intro: 'Você pode configurar como o {% data variables.product.prodname_dotcom %} usa o {% data variables.product.prodname_codeql_workflow %} para varrer o código escrito em linguagens compiladas para obter vulnerabilidades e erros.'
product: '{% data reusables.gated-features.code-scanning %}'
permissions: 'If you have write permissions to a repository, you can configure {% data variables.product.prodname_code_scanning %} for that repository.'
versions:
  enterprise-server: '2.22'
topics:
  - Security
redirect_from:
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-the-codeql-workflow-for-compiled-languages
---

<!--See /content/code-security/secure-coding for the latest version of this article -->

{% data reusables.code-scanning.beta %}
{% data reusables.code-scanning.enterprise-enable-code-scanning-actions %}

### Sobre o {% data variables.product.prodname_codeql_workflow %} e linguagens compiladas

Você configurou {% data variables.product.prodname_dotcom %} para executar {% data variables.product.prodname_code_scanning %} para o seu repositório, adicionando um fluxo de trabalho de {% data variables.product.prodname_actions %} ao repositório. Para {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %}, você adiciona o {% data variables.product.prodname_codeql_workflow %}. Para obter mais informações, consulte "[Configurar {% data variables.product.prodname_code_scanning %} para um repositório](/github/finding-security-vulnerabilities-and-errors-in-your-code/setting-up-code-scanning-for-a-repository)".

{% data reusables.code-scanning.edit-workflow %}
Para obter informações gerais sobre a configuração de {% data variables.product.prodname_code_scanning %} e edição de arquivos de fluxo de trabalho, consulte "[Configurar {% data variables.product.prodname_code_scanning %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-code-scanning)" e "[Aprenda {% data variables.product.prodname_actions %}](/actions/learn-github-actions)".

### Sobre a autobuild para {% data variables.product.prodname_codeql %}

A varredura de código funciona executando consultas contra um ou mais bancos de dados. Cada banco de dados contém uma representação de todo o código em uma linguagem única no seu repositório. Para as linguagens compiladas de C/C++, C#, e Java, o processo de preenchimento deste banco de dados envolve a construção do código e extração de dados. {% data reusables.code-scanning.analyze-go %}

{% data reusables.code-scanning.autobuild-compiled-languages %}

Se o fluxo de trabalho usar uma matriz de `linguagem`, `autobuild` tentará criar cada uma das linguagens compiladas listadas na matriz. Sem uma matriz, `autobuild` tenta criar a linguagem compilada compatível que tem mais arquivos de origem no repositório. Com exceção de Go, a análise de outras linguagens compatíveis no repositório irá falhar, a menos que você forneça comandos de criação explícitos.

{% note %}

**Observação**: Se você usa executores auto-hospedados para {% data variables.product.prodname_actions %}, talvez seja necessário instalar um software adicional para usar o processo de `autobuild`. Além disso, se seu repositório precisar de uma versão específica de uma ferramenta de criação, talvez seja necessário instalá-lo manualmente. Para obter mais informações, consulte "[Especificações para executores hospedados no {% data variables.product.prodname_dotcom %}](/actions/reference/specifications-for-github-hosted-runners/#supported-software)".

{% endnote %}

#### C/C++

| Tipo de sistema compatível | Nome do sistema                                                                                                                        |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| Sistema operacional        | Windows, macOS e Linux                                                                                                                 |
| Sistema de criação         | Windows: MSbuild e scripts de criação<br/>Linux e macOS: Autoconf, Make, CMake, qmake, Meson, Waf, SCons, Linux Kbuild e scripts |

O comportamento da etapa de </code>autobuild` varia de acordo com o sistema operacional em que a extração é executada. No Windows, o <code>autobuild` tenta detectar automaticamente um método de criação adequado para C/C++ usando a seguinte abordagem:

1. Invocar `MSBuild.exe` sobre a solução (`.sln`) ou arquivo (`.vcxproj`) de projeto mais próximo da raiz. Se o `autobuild` detectar várias soluções ou arquivos de projeto na mesma profundidade (mais curta) do diretório de nível superior, ele tentará criar todos eles.
2. Invoca um script que se parece com um script de criação-_build.bat_, _build.cmd_, _e build.exe_ (nessa ordem).

No Linux e no macOS, a etapa de `autobuild` revisa os arquivos presentes no repositório para determinar o sistema de criação usado:

1. Procure um sistema de criação no diretório-raiz.
2. Se nenhum for encontrado, procure um diretório único nos subdiretórios com um sistema de criação para C/C++.
3. Execute um comando apropriado para configurar o sistema.

#### C

| Tipo de sistema compatível | Nome do sistema                    |
| -------------------------- | ---------------------------------- |
| Sistema operacional        | Windows e Linux                    |
| Sistema de criação         | .NET, MSbuild e scripts de criação |

O processo de `autobuild` tenta detectar automaticamente um método de criação adequado para C# usando a seguinte abordagem:

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

{% data reusables.code-scanning.autobuild-add-build-steps %} Para obter informações sobre como editar o arquivo de fluxo de trabalho, consulte "[Configurar o {% data variables.product.prodname_code_scanning %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-code-scanning#editing-a-code-scanning-workflow)".

Depois de remover a etapa de `autobuild`, remova o comentário da etapa `executar` e adicione comandos de criação adequados ao seu repositório. A etapa do fluxo de trabalho `executar` executa programas da linha de comando que usam o shell do sistema operacional. Você pode modificar esses comandos e adicionar mais comandos para personalizar o processo de criação.

``` yaml
- run: |
  make bootstrap
  make release
```

Para obter mais informações sobre a palavra-chave `executar`, consulte "[Sintaxe de fluxo de trabalho para {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepsrun)".

Se seu repositório contém várias linguagens compiladas, você pode especificar comandos de compilação específicos da linguagem. Por exemplo, se o seu repositório contém C/C++, C# e Java, e o `autobuild` cria C/C++ e C# corretamente mas falha ao criar Java, você poderia utilizar a configuração a seguir no seu fluxo de trabalho, após a etapa `init`. Isto especifica etapas de criação para Java ao mesmo tempo que usa `autobuild` para C/C++ e C#:

```yaml
- if: matrix.language == 'cpp' || matrix.language == 'csharp' 
  name: Autobuild
  uses: github/codeql-action/autobuild@v1

- if: matrix.language == 'java' 
  name: Build Java
  run: |
    make bootstrap
    make release
```

Para obter mais informações sobre `se` condicional, consulte "[Sintaxe de fluxo de trabalho para o GitHub Actions](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepsif).

Para obter mais dicas e truques sobre por que o`autobuild` não criará o seu código, consulte[Solução de problemas sobre o fluxo de trabalho do {% data variables.product.prodname_codeql %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/troubleshooting-the-codeql-workflow)".

Se você adicionou etapas de criação manual para linguagens compiladas, mas o {% data variables.product.prodname_code_scanning %} ainda não está funcionando no seu repositório, entre em contato com {% data variables.contact.contact_support %}.
