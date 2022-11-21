---
title: Configuração do fluxo de trabalho do CodeQL para linguagens compiladas
shortTitle: Configure compiled languages
intro: 'Você pode configurar como o {% data variables.product.prodname_dotcom %} usa o {% data variables.code-scanning.codeql_workflow %} para examinar o código escrito nas linguagens compiladas quanto a vulnerabilidades e erros.'
product: '{% data reusables.gated-features.code-scanning %}'
permissions: 'If you have write permissions to a repository, you can configure {% data variables.product.prodname_code_scanning %} for that repository.'
redirect_from:
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-code-scanning-for-compiled-languages
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-the-codeql-action-for-compiled-languages
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-the-codeql-workflow-for-compiled-languages
  - /code-security/secure-coding/configuring-the-codeql-workflow-for-compiled-languages
  - /code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-the-codeql-workflow-for-compiled-languages
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
  - Actions
  - Repositories
  - C/C++
  - C#
  - Java
ms.openlocfilehash: 91983e79a6381b4a38cbb1de4f6d7f228637b192
ms.sourcegitcommit: b617c4a7a1e4bf2de3987a86e0eb217d7031490f
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/11/2022
ms.locfileid: '148161196'
---
{% data reusables.code-scanning.beta %} {% data reusables.code-scanning.enterprise-enable-code-scanning-actions %}

## Sobre o {% data variables.code-scanning.codeql_workflow %} e as linguagens compiladas

Você configurou {% data variables.product.prodname_dotcom %} para executar {% data variables.product.prodname_code_scanning %} para o seu repositório, adicionando um fluxo de trabalho de {% data variables.product.prodname_actions %} ao repositório. Para a {% data variables.product.prodname_code_scanning %} do {% data variables.product.prodname_codeql %}, você adiciona o {% data variables.code-scanning.codeql_workflow %}. Para obter mais informações, confira "[Como configurar a {% data variables.product.prodname_code_scanning %} para um repositório](/code-security/secure-coding/setting-up-code-scanning-for-a-repository)".

{% data reusables.code-scanning.edit-workflow %} Para obter informações gerais sobre como configurar a {% data variables.product.prodname_code_scanning %} e editar arquivos de fluxo de trabalho, confira "[Como configurar a {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/configuring-code-scanning)" e "[Aprenda a usar o {% data variables.product.prodname_actions %}](/actions/learn-github-actions)".

##  Sobre a autobuild para {% data variables.product.prodname_codeql %}

A {% data variables.product.prodname_code_scanning_capc %} funciona executando consultas em um ou mais bancos de dados. Cada banco de dados contém uma representação de todo o código em uma linguagem única no seu repositório.   
Para as linguagens compiladas C/C++, C#,{% ifversion codeql-go-autobuild %} Go{% endif %} e Java, o processo de população desse banco de dados envolve a construção do código e a extração de dados. {% data reusables.code-scanning.analyze-go %}

{% data reusables.code-scanning.autobuild-compiled-languages %}

Se o fluxo de trabalho usar uma matriz `language`, `autobuild` tentará criar cada uma das linguagens compiladas listadas na matriz. Sem uma matriz, `autobuild` tentará criar a linguagem compilada compatível que tem mais arquivos de origem no repositório. Com exceção de Go, a análise de outras linguagens compatíveis no repositório irá falhar, a menos que você forneça comandos de criação explícitos.

{% note %}

{% ifversion ghae %} **Observação**: {% data reusables.actions.self-hosted-runners-software %} {% else %} **Observação**: caso você use executores auto-hospedados para o {% data variables.product.prodname_actions %}, talvez seja necessário instalar um software adicional para usar o processo `autobuild`. Além disso, se seu repositório precisar de uma versão específica de uma ferramenta de criação, talvez seja necessário instalá-lo manualmente. Para obter mais informações, confira "[Especificações para os executores hospedados no {% data variables.product.prodname_dotcom %}](/actions/reference/specifications-for-github-hosted-runners/#supported-software)".
{% endif %}

{% endnote %}

### C/C++

| Tipo de sistema compatível | Nome do sistema |
|----|----|
| Sistema operacional | Windows, macOS e Linux |
| Sistema de criação | Windows: MSbuild e scripts de build<br/>Linux e macOS: Autoconf, Make, CMake, qmake, Meson, Waf, SCons, Linux Kbuild e scripts de build |

O comportamento da etapa `autobuild` varia de acordo com o sistema operacional em que a extração é executada. No Windows, a etapa `autobuild` tenta fazer a detecção automática de um método de build adequado para C/C++ usando a seguinte abordagem:

1. Invocar `MSBuild.exe` no arquivo de solução (`.sln`) ou de projeto (`.vcxproj`) mais próximo da raiz.
Se `autobuild` detectar vários arquivos de solução ou de projeto na mesma profundidade (mais curta) do diretório de nível superior, ele tentará compilar todos eles.
2. Invocar um script parecido com um script de build: _build.bat_, _build.cmd_ e _build.exe_ (nessa ordem).

No Linux e no macOS, a etapa `autobuild` revisa os arquivos presentes no repositório para determinar o sistema de build usado:

1. Procure um sistema de criação no diretório-raiz.
2. Se nenhum for encontrado, procure um diretório único nos subdiretórios com um sistema de criação para C/C++.
3. Execute um comando apropriado para configurar o sistema. 

### C#

| Tipo de sistema compatível | Nome do sistema |
|----|----|
| Sistema operacional | Windows e Linux |
| Sistema de criação | .NET, MSbuild e scripts de criação |

O processo `autobuild` tenta fazer a detecção automática de um método de build adequado para C# usando a seguinte abordagem:

1. Invocar `dotnet build` no arquivo de solução (`.sln`) ou de projeto (`.csproj`) mais próximo da raiz.
2. Invocar `MSbuild` (Linux) ou `MSBuild.exe` (Windows) no arquivo de solução ou de projeto mais próximo da raiz.
Se `autobuild` detectar vários arquivos de solução ou de projeto na mesma profundidade (mais curta) do diretório de nível superior, ele tentará compilar todos eles.
3. Invocar um script parecido com um script de build: _build_ e _build.sh_ (nessa ordem, para o Linux) ou _build.bat_, _build.cmd_ e _build.exe_ (nessa ordem, para o Windows).

{% ifversion codeql-go-autobuild %}

### Go

| Tipo de sistema compatível | Nome do sistema |
|----|----|
| Sistema operacional | Windows, macOS e Linux |
| Sistema de criação | Módulos Go, `dep` e Glide, bem como scripts de build, incluindo Makefiles e scripts Ninja |

O processo `autobuild` tenta fazer a detecção automática de uma forma adequada para instalar as dependências necessárias em um repositório Go antes de extrair todos os arquivos `.go`:

1. Invoque `make`, `ninja`, `./build` ou `./build.sh` (nessa ordem) até que um desses comandos seja bem-sucedido e um próximo `go list ./...` também seja bem-sucedido, indicando que as dependências necessárias foram instaladas.
2. Se nenhum desses comandos for bem-sucedido, procure `go.mod`, `Gopkg.toml` ou `glide.yaml` e execute `go get` (a menos que a cópia para a pasta Vendor esteja em uso), `dep ensure -v` ou `glide install`, respectivamente, para tentar instalar as dependências.
3. Por fim, se os arquivos de configurações desses gerenciadores de dependência não forem encontrados, reorganize a estrutura de diretório do repositório adequada para adição a `GOPATH` e use `go get` para instalar as dependências. A estrutura de diretório é revertida para normal após a conclusão da extração.
4. Extraia todo o código Go no repositório, semelhante à execução de `go build ./...`.

{% endif %}

### Java

| Tipo de sistema compatível | Nome do sistema |
|----|----|
| Sistema operacional | Windows, macOS e Linux (sem restrição) |
| Sistema de criação | Gradle, Maven e Ant |

O processo `autobuild` tenta determinar o sistema de build para bases de código Java aplicando esta estratégia:

1. Procurar um arquivo de criação no diretório-raiz. Verifique o arquivos do Gradle, do Maven e, em seguida, do Ant.
2. Execute o primeiro arquivo de criação encontrado. Se os arquivos do Gradle e do Maven estiverem presentes, será usado o arquivo do Gradle.
3. Caso contrário, procure arquivos de criação nos subdiretórios diretos do diretório-raiz. Se apenas um subdiretório contiver arquivos de criação, execute o primeiro arquivo identificado nesse subdiretório (usando a mesma preferência de 1). Se mais de um subdiretório conter arquivos de criação, relate um erro.

## Adicionar passos de criação a uma linguagem compilada

{% data reusables.code-scanning.autobuild-add-build-steps %} Para obter informações sobre como editar o arquivo de fluxo de trabalho, confira "[Como configurar a {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/configuring-code-scanning#editing-a-code-scanning-workflow)".

Depois de remover a etapa `autobuild`, remova o comentário da etapa `run` e adicione comandos de build adequados ao seu repositório. A etapa `run` do fluxo de trabalho executa programas de linha de comando usando o shell do sistema operacional. Você pode modificar esses comandos e adicionar mais comandos para personalizar o processo de compilação.

``` yaml
- run: |
    make bootstrap
    make release
```

Para obter mais informações sobre a palavra-chave `run`, confira "[Sintaxe de fluxo de trabalho do {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepsrun)".

Se o repositório contiver várias linguagens compiladas, você poderá especificar comandos de compilação específicos da linguagem. Por exemplo, se o repositório contiver C/C++, C# e Java e `autobuild` compilar corretamente C/C++ e C#, mas não compila Java, você poderá usar a configuração a seguir no seu fluxo de trabalho, após a etapa `init`. Isso especifica as etapas de compilação para Java enquanto ainda usa `autobuild` para C/C++ e C#:

```yaml
- if: matrix.language == 'cpp' || matrix.language == 'csharp' 
  name: Autobuild
  uses: {% data reusables.actions.action-codeql-action-autobuild %}

- if: matrix.language == 'java' 
  name: Build Java
  run: |
    make bootstrap
    make release
```

Para obter mais informações sobre o condicional `if`, confira "[Sintaxe de fluxo de trabalho do GitHub Actions](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepsif)".

Para obter mais dicas e truques sobre por que o `autobuild` não compilará seu código, confira "[Solução de problemas de fluxo de trabalho do {% data variables.product.prodname_codeql %}](/code-security/secure-coding/troubleshooting-the-codeql-workflow)".

Se você adicionou etapas de criação manual para linguagens compiladas, mas o {% data variables.product.prodname_code_scanning %} ainda não está funcionando no seu repositório, entre em contato com {% data variables.contact.contact_support %}.
