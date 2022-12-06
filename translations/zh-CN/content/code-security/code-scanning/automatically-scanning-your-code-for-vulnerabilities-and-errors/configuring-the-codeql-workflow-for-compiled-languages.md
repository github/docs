---
title: 为编译的语言配置 CodeQL 工作流
shortTitle: Configure compiled languages
intro: '可以配置 {% data variables.product.prodname_dotcom %} 如何使用 {% data variables.code-scanning.codeql_workflow %} 扫描用编译语言编写的代码以查找漏洞和错误。'
product: '{% data reusables.gated-features.code-scanning %}'
permissions: 'If you have write permissions to a repository, you can configure {% data variables.product.prodname_code_scanning %} for that repository.'
miniTocMaxHeadingLevel: 3
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
  - Kotlin
ms.openlocfilehash: 4c594a9ca19064da6c017155fad27b37b083e7e3
ms.sourcegitcommit: dac72908e8660cb4a347fbf73beab61034eed8c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/25/2022
ms.locfileid: '148182264'
---
{% data reusables.code-scanning.beta %} {% data reusables.code-scanning.enterprise-enable-code-scanning-actions %}

## 关于 {% data variables.code-scanning.codeql_workflow %} 和编译语言

通过添加 {% data variables.product.prodname_actions %} 工作流程到仓库，设置 {% data variables.product.prodname_dotcom %} 对仓库运行 {% data variables.product.prodname_code_scanning %}。 对于 {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %}，可以添加 {% data variables.code-scanning.codeql_workflow %}。 有关详细信息，请参阅“[为存储库设置 {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/setting-up-code-scanning-for-a-repository)”。

{% data reusables.code-scanning.edit-workflow %} 有关配置 {% data variables.product.prodname_code_scanning %} 和编辑工作流文件的一般信息，请参阅“[配置 {% data variables.product.prodname_code_scanning %} ](/code-security/secure-coding/configuring-code-scanning)”和“[了解 {% data variables.product.prodname_actions %}](/actions/learn-github-actions)”。

##  关于 {% data variables.product.prodname_codeql %} 的自动构建

{% data variables.product.prodname_code_scanning_capc %} 的工作原理是针对一个或多个数据库运行查询。 每个数据库都包含仓库中所有代码的单一语言表示形式。   
对于编译语言 C/C++、C#、{% ifversion codeql-go-autobuild %} Go、{% endif %}{% ifversion codeql-kotlin-beta %}Kotlin {% endif %}和 Java，填充此数据库的过程涉及构建代码和提取数据。 {% data reusables.code-scanning.analyze-go %}

{% data reusables.code-scanning.autobuild-compiled-languages %}

如果你的工作流使用 `language` 矩阵，`autobuild` 会尝试生成矩阵中列出的每种编译语言。 如果不使用矩阵，则 `autobuild` 会尝试生成在存储库中具有最多源文件的受支持编译语言。 除 Go 以外，除非您提供明确的构建命令，否则您仓库中其他编译语言的分析将失败。

{% note %}

{% ifversion ghae %} **注意**：{% data reusables.actions.self-hosted-runners-software %} {% else %} **注意**：如果使用 {% data variables.product.prodname_actions %} 的自承载运行器，则可能需要安装其他软件才能使用 `autobuild` 进程。 此外，如果您的仓库需要特定版本的构建工具，您可能需要手动安装它。 有关详细信息，请参阅“[{% data variables.product.prodname_dotcom %} 托管的运行器的规范](/actions/reference/specifications-for-github-hosted-runners/#supported-software)”。
{% endif %}

{% endnote %}

### C/C++

| 支持的系统类型 | 系统名称 |
|----|----|
| 操作系统 | Windows、macOS 和 Linux |
| 构建系统 | Windows：MSbuild 和生成脚本<br/>Linux 和 macOS：Autoconf、Make、CMake、qmake、Meson、Waf、SCons、Linux Kbuild 和生成脚本 |

`autobuild` 步骤的行为因运行提取的操作系统而异。 在 Windows 上，`autobuild` 步骤尝试使用以下方法自动检测适合 C/C++ 的生成方法：

1. 对离根最近的解决方案 (`.sln`) 或项目 (`.vcxproj`) 文件调用 `MSBuild.exe`。
如果 `autobuild` 在顶层目录下的相同（最短）深度检测到多个解决方案或项目文件，它将尝试生成所有这些文件。
2. 调用看起来像生成脚本的脚本：build.bat、build.cmd 和 build.exe（按此顺序）  。

在 Linux 和 macOS 上，`autobuild` 步骤检查存储库中存在的文件，以确定使用的生成系统：

1. 在根目录中查找构建系统。
2. 如果未找到，则搜索子目录以查找含有 C/C++ 构建系统的唯一目录。
3. 运行适当的命令来配置系统。 

### C#

| 支持的系统类型 | 系统名称 |
|----|----|
| 操作系统 | Windows 和 Linux |
| 构建系统 | .NET 和 MSbuild，以及构建脚本 |

`autobuild` 进程尝试使用以下方法自动检测适合 C# 的构建方法：

1. 对离根最近的解决方案 (`.sln`) 或项目 (`.csproj`) 文件调用 `dotnet build`。
2. 对离根最近的解决方案或项目文件调用 `MSbuild` (Linux) 或 `MSBuild.exe` (Windows)。
如果 `autobuild` 在顶层目录下的相同（最短）深度检测到多个解决方案或项目文件，它将尝试生成所有这些文件。
3. 调用看起来像生成脚本的脚本：build 和 build.sh（对于 Linux，按此顺序）或 build.bat、build.cmd 和 build.exe（对于 Windows，按此顺序）    。

{% ifversion codeql-go-autobuild %}

### Go

| 支持的系统类型 | 系统名称 |
|----|----|
| 操作系统 | Windows、macOS 和 Linux |
| 构建系统 | Go 模块、`dep` 和 Glide，以及生成脚本，包括 Makefiles 和 Ninja 脚本 |

`autobuild` 过程尝试在提取所有 `.go` 文件之前自动检测安装 Go 存储库所需的依赖项的合适方法：

1. 调用 `make`、`ninja`、`./build` 或 `./build.sh`（按该顺序），直到其中一个命令成功，后续 `go list ./...` 也成功，这表示已安装所需的依赖项。
2. 如果这些命令都没有成功，请查找 `go.mod`、`Gopkg.toml` 或 `glide.yaml`，并分别运行 `go get`（除非正在使用供应商）、`dep ensure -v` 或 `glide install` 以尝试安装依赖项。
3. 最后，如果未找到这些依赖项管理器的配置文件，请重新排列适合添加到 `GOPATH` 的存储库目录结构，并使用 `go get` 安装依赖项。 提取完成后，目录结构恢复为正常。
4. 提取存储库中的所有 Go 代码，类似于运行 `go build ./...`。

{% endif %}

### Java {% ifversion codeql-kotlin-beta %}和 Kotlin{% endif %}

| 支持的系统类型 | 系统名称 |
|----|----|
| 操作系统 | Windows、macOS 和 Linux（无限制） |
| 构建系统 | Gradle、Maven 和 Ant |

`autobuild` 进程尝试通过应用此策略来确定 Java 代码库的生成系统：

1. 在根目录中搜索构建文件。 先后检查 Gradle、Maven 和 Ant 构建文件。
2. 运行找到的第一个构建文件。 如果 Gradle 和 Maven 文件都存在，则使用 Gradle 文件。
3. 否则，在根目录的直接子目录中搜索构建文件。 如果只有一个子目录包含构建文件，则运行该子目录中标识的第一个文件（使用与 1 相同的首选项）。 如果多个子目录包含构建文件，则报告错误。

## 添加编译语言的构建步骤

{% data reusables.code-scanning.autobuild-add-build-steps %} 有关如何编辑工作流文件的信息，请参阅“[配置 {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/configuring-code-scanning#editing-a-code-scanning-workflow)”。

删除 `autobuild` 步骤后，取消注释 `run` 步骤并添加适合存储库的生成命令。 工作流 `run` 步骤会使用操作系统的 shell 来运行命令行程序。 可以修改这些命令并添加更多命令以自定义生成过程。

``` yaml
- run: |
    make bootstrap
    make release
```

有关 `run` 关键字的详细信息，请参阅“[{% data variables.product.prodname_actions %} 的工作流语法](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepsrun)”。

如果存储库包含多个编译语言，可以指定特定于语言的生成命令。 例如，如果存储库包含 C/C++、C# 和 Java，而 `autobuild` 正确生成了 C/C++ 和 C#，但未能生成 Java，那么在 `init` 步骤之后，可以在工作流中使用以下配置。 这指定了 Java 的生成步骤，同时仍然为 C/C++ 和 C# 使用 `autobuild`：

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

有关 `if` 条件的详细信息，请参阅“[GitHub Actions 的工作流语法](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepsif)”。

有关为什么 `autobuild` 无法生成代码的更多提示和技巧，请参阅“[{% data variables.product.prodname_codeql %} 工作流故障排除](/code-security/secure-coding/troubleshooting-the-codeql-workflow)”。

如果您为编译语言添加了手动构建步骤，但 {% data variables.product.prodname_code_scanning %} 仍然无法处理您的仓库，请联系 {% data variables.contact.contact_support %}。
