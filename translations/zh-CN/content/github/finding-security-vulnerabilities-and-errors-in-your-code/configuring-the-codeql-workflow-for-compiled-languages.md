---
title: 为编译语言配置 CodeQL 工作流程
shortTitle: 为编译语言配置
intro: '您可以配置 {% data variables.product.prodname_dotcom %} 如何使用 {% data variables.product.prodname_codeql_workflow %} 扫描用编译语言编写的代码以查找漏洞和错误。'
product: '{% data reusables.gated-features.code-scanning %}'
permissions: 'If you have write permissions to a repository, you can configure {% data variables.product.prodname_code_scanning %} for that repository.'
versions:
  enterprise-server: '2.22'
topics:
  - Security
---

{% data reusables.code-scanning.beta %}
{% data reusables.code-scanning.enterprise-enable-code-scanning-actions %}

### 关于 {% data variables.product.prodname_codeql_workflow %} 和编译语言

通过添加 {% data variables.product.prodname_actions %} 工作流程到仓库，设置 {% data variables.product.prodname_dotcom %} 对仓库运行 {% data variables.product.prodname_code_scanning %}。 对于 {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %}，您可以添加 {% data variables.product.prodname_codeql_workflow %}。 更多信息请参阅“[为仓库设置 {% data variables.product.prodname_code_scanning %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/setting-up-code-scanning-for-a-repository)”。

{% data reusables.code-scanning.edit-workflow %}
有关配置
{% data variables.product.prodname_code_scanning %} 和编辑工作流程文件的一般信息，请参阅“[配置 {% data variables.product.prodname_code_scanning %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-code-scanning)”和“[了解 {% data variables.product.prodname_actions %}](/actions/learn-github-actions)”。

### 关于 {% data variables.product.prodname_codeql %} 的自动构建

代码扫描的工作方式是对一个或多个数据库运行查询。 每个数据库都包含仓库中所有代码的单一语言表示形式。 对于编译语言 C/C++、C# 和 Java，填充此数据库的过程涉及构建代码和提取数据。 {% data reusables.code-scanning.analyze-go %}

{% data reusables.code-scanning.autobuild-compiled-languages %}

如果您的工作流程使用 `language` 矩阵，`autobuild` 将尝试构建矩阵中列出的每种编译语言。 如果不使用矩阵，`autobuild` 将尝试构建涵盖仓库中最多源文件的受支持编译语言。 除 Go 以外，除非您提供明确的构建命令，否则您仓库中其他编译语言的分析将失败。

{% note %}

{% if currentversion == "github-ae@latest" %} **注意**：有关如何确定 {% data variables.actions.hosted_runner %} 已安装所需软件的说明，请参阅“[创建自定义映像](/actions/using-github-hosted-runners/creating-custom-images)”。
{% else %}
**注意**：如果您将自托管运行器用于
{% data variables.product.prodname_actions %}，您可能需要安装其他软件才能使用`自动构建`流程。 此外，如果您的仓库需要特定版本的构建工具，您可能需要手动安装它。 更多信息请参阅“[{% data variables.product.prodname_dotcom %} 托管运行器的规范](/actions/reference/specifications-for-github-hosted-runners/#supported-software)”。
{% endif %}

{% endnote %}

#### C/C++

| 支持的系统类型 | 系统名称                                                                                                       |
| ------- | ---------------------------------------------------------------------------------------------------------- |
| 操作系统    | Windows、macOS 和 Linux                                                                                      |
| 构建系统    | Windows：MSbuild 和构建脚本<br/>Linux 和 macOS：Autoconf、Make、CMake、qmake、Meson、Waf、SCons、Linux Kbuild 和构建脚本 |

`autobuild` 步骤的行为因提取运行所在的操作系统而异。 在 Windows 上，`autobuild` 步骤尝试使用以下方法自动检测合适的 C/C# 构建方法：

1. 在最接近根目录的解决方案 (`.sln`) 或项目 (`.vcxproj`) 文件上调用 `MSBuild.exe`。 如果 `autobuild` 在顶层目录下的相同深度（最短）检测到多个解决方案或项目文件，它将尝试构建所有这些文件。
2. 调用看起来像构建脚本的脚本—_build.bat_、_build.cmd_ _和 build.exe_（按此顺序）。

在 Linux 和 macOS 上，`autobuild` 步骤检查仓库中存在的文件，以确定所使用的构建系统：

1. 在根目录中查找构建系统。
2. 如果未找到，则搜索子目录以查找含有 C/C++ 构建系统的唯一目录。
3. 运行适当的命令来配置系统。

#### C

| 支持的系统类型 | 系统名称                  |
| ------- | --------------------- |
| 操作系统    | Windows 和 Linux       |
| 构建系统    | .NET 和 MSbuild，以及构建脚本 |

`autobuild` 进程尝试使用以下方法自动检测合适的 C# 构建方法：

1. 在最接近根目录的解决方案 (`.sln`) 或项目 (`.csproj`) 文件上调用 `dotnet build`。
2. 在最接近根目录的解决方案或项目文件上调用 `MSbuild` (Linux) 或 `MSBuild.exe` (Windows)。 如果 `autobuild` 在顶层目录下的相同深度（最短）检测到多个解决方案或项目文件，它将尝试构建所有这些文件。
3. 调用一个看起来像构建脚本的脚本—_build_ 和 _build.sh_（对于 Linux，按此顺序）或 _build.bat_、_build.cmd_ 和 _build.exe_（对于 Windows，按此顺序）。

#### Java

| 支持的系统类型 | 系统名称                       |
| ------- | -------------------------- |
| 操作系统    | Windows、macOS 和 Linux（无限制） |
| 构建系统    | Gradle、Maven 和 Ant         |

`autobuild` 进程尝试通过应用此策略来确定 Java 代码库的构建系统：

1. 在根目录中搜索构建文件。 先后检查 Gradle、Maven 和 Ant 构建文件。
2. 运行找到的第一个构建文件。 如果 Gradle 和 Maven 文件都存在，则使用 Gradle 文件。
3. 否则，在根目录的直接子目录中搜索构建文件。 如果只有一个子目录包含构建文件，则运行该子目录中标识的第一个文件（使用与 1 相同的首选项）。 如果多个子目录包含构建文件，则报告错误。

### 添加编译语言的构建步骤

{% data reusables.code-scanning.autobuild-add-build-steps %} 有关如何编辑工作流程文件的更多信息，请参阅“[配置 {% data variables.product.prodname_code_scanning %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-code-scanning#editing-a-code-scanning-workflow)”。

删除 `autobuild` 步骤后，请取消注释 `run` 步骤并添加适合您仓库的构建命令。 工作流程 `run` 步骤使用操作系统的 shell 运行命令行程序。 您可以修改这些命令并添加更多命令来自定义构建过程。

``` yaml
- run: |
  make bootstrap
  make release
```

有关 `run` 关键词的更多信息，请参阅“[{% data variables.product.prodname_actions %} 的工作流程语法](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepsrun)”。

如果仓库中包含多种编译语言，您可以指定特定于语言的构建命令。 例如，如果您的仓库包含 C/C++、C# 和 Java，并且 `autobuild` 正确地构建了 C/C++ 和 C#，但未能构建 Java，您可以在 `init` 步骤之后的工作流程中使用以下配置。 这将指定 Java 的构建步骤，而对 C/C++ 和 C# 仍然使用 `autobuild`：

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

有关 `if` 条件的更多信息，请参阅“[GitHub 操作的工作流程语法](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepsif)”。

有关为什么 `autobuild` 无法构建代码的更多提示和技巧，请参阅“[{% data variables.product.prodname_codeql %} 工作流程疑难解答](/github/finding-security-vulnerabilities-and-errors-in-your-code/troubleshooting-the-codeql-workflow)”。

如果您为编译语言添加了手动构建步骤，但 {% data variables.product.prodname_code_scanning %} 仍然无法处理您的仓库，请联系 {% data variables.contact.contact_support %}。
