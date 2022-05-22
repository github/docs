---
title: Configuring the CodeQL workflow for compiled languages
shortTitle: Configure compiled languages
intro: 'You can configure how {% data variables.product.prodname_dotcom %} uses the {% data variables.product.prodname_codeql_workflow %} to scan code written in compiled languages for vulnerabilities and errors.'
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
---


{% data reusables.code-scanning.beta %}
{% data reusables.code-scanning.enterprise-enable-code-scanning-actions %}

## About the {% data variables.product.prodname_codeql_workflow %} and compiled languages

You set up {% data variables.product.prodname_dotcom %} to run {% data variables.product.prodname_code_scanning %} for your repository by adding a {% data variables.product.prodname_actions %} workflow to the repository. For {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %}, you add the {% data variables.product.prodname_codeql_workflow %}. For more information, see "[Setting up {% data variables.product.prodname_code_scanning %} for a repository](/code-security/secure-coding/setting-up-code-scanning-for-a-repository)."

{% data reusables.code-scanning.edit-workflow %} 
For general information about configuring {% data variables.product.prodname_code_scanning %} and editing workflow files, see "[Configuring {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/configuring-code-scanning)" and  "[Learn {% data variables.product.prodname_actions %}](/actions/learn-github-actions)."

##  About autobuild for {% data variables.product.prodname_codeql %}

Code scanning works by running queries against one or more databases. Each database contains a representation of all of the code in a single language in your repository. For the compiled languages C/C++, C#, and Java, the process of populating this database involves building the code and extracting data. {% data reusables.code-scanning.analyze-go %}

{% data reusables.code-scanning.autobuild-compiled-languages %}

If your workflow uses a `language` matrix, `autobuild` attempts to build each of the compiled languages listed in the matrix. Without a matrix `autobuild` attempts to build the supported compiled language that has the most source files in the repository. With the exception of Go, analysis of other compiled languages in your repository will fail unless you supply explicit build commands.

{% note %}

{% ifversion ghae %}
**Note**: {% data reusables.actions.self-hosted-runners-software %}
{% else %}
**Note**: If you use self-hosted runners for {% data variables.product.prodname_actions %}, you may need to install additional software to use the `autobuild` process. Additionally, if your repository requires a specific version of a build tool, you may need to install it manually. For more information, see "[Specifications for {% data variables.product.prodname_dotcom %}-hosted runners](/actions/reference/specifications-for-github-hosted-runners/#supported-software)".
{% endif %}

{% endnote %}

### C/C++

| Supported system type | System name |
|----|----|
| Operating system | Windows, macOS, and Linux |
| Build system | Windows: MSbuild and build scripts<br/>Linux and macOS: Autoconf, Make, CMake, qmake, Meson, Waf, SCons, Linux Kbuild, and build scripts |

The behavior of the `autobuild` step varies according to the operating system that the extraction runs on. On Windows, the `autobuild` step attempts to autodetect a suitable build method for C/C++ using the following approach:

1. Invoke `MSBuild.exe` on the solution (`.sln`) or project (`.vcxproj`) file closest to the root.
If `autobuild` detects multiple solution or project files at the same (shortest) depth from the top level directory, it will attempt to build all of them.
2. Invoke a script that looks like a build script—_build.bat_, _build.cmd_, _and build.exe_ (in that order).

On Linux and macOS, the `autobuild` step reviews the files present in the repository to determine the build system used:

1. Look for a build system in the root directory.
2. If none are found, search subdirectories for a unique directory with a build system for C/C++.
3. Run an appropriate command to configure the system. 

### C#

| Supported system type | System name |
|----|----|
| Operating system | Windows and Linux |
| Build system | .NET and MSbuild, as well as build scripts |

The `autobuild` process attempts to autodetect a suitable build method for C# using the following approach:

1. Invoke `dotnet build` on the solution (`.sln`) or project (`.csproj`) file closest to the root.
2. Invoke `MSbuild` (Linux) or `MSBuild.exe` (Windows) on the solution or project file closest to the root.
If `autobuild` detects multiple solution or project files at the same (shortest) depth from the top level directory, it will attempt to build all of them.
3. Invoke a script that looks like a build script—_build_ and _build.sh_ (in that order, for Linux) or _build.bat_, _build.cmd_, _and build.exe_ (in that order, for Windows).

### Java

| Supported system type | System name |
|----|----|
| Operating system | Windows, macOS, and Linux (no restriction) |
| Build system | Gradle, Maven and Ant |

The `autobuild` process tries to determine the build system for Java codebases by applying this strategy:

1. Search for a build file in the root directory. Check for Gradle then Maven then Ant build files.
2. Run the first build file found. If both Gradle and Maven files are present, the Gradle file is used.
3. Otherwise, search for build files in direct subdirectories of the root directory. If only one subdirectory contains build files, run the first file identified in that subdirectory (using the same preference as for 1). If more than one subdirectory contains build files, report an error.

## Adding build steps for a compiled language

{% data reusables.code-scanning.autobuild-add-build-steps %} For information on how to edit the workflow file, see  "[Configuring {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/configuring-code-scanning#editing-a-code-scanning-workflow)."

After removing the `autobuild` step, uncomment the `run` step and add build commands that are suitable for your repository. The workflow `run` step runs command-line programs using the operating system's shell. You can modify these commands and add more commands to customize the build process. 

``` yaml
- run: |
  make bootstrap
  make release
```

For more information about the `run` keyword, see "[Workflow syntax for {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepsrun)."

If your repository contains multiple compiled languages, you can specify language-specific build commands. For example, if your repository contains C/C++, C# and Java, and `autobuild` correctly builds C/C++ and C# but fails to build Java, you could use the following configuration in your workflow, after the `init` step. This specifies build steps for Java while still using `autobuild` for C/C++ and C#:

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

For more information about the `if` conditional, see "[Workflow syntax for GitHub Actions](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepsif)."

For more tips and tricks about why `autobuild` won't build your code, see "[Troubleshooting the {% data variables.product.prodname_codeql %} workflow](/code-security/secure-coding/troubleshooting-the-codeql-workflow)."

If you added manual build steps for compiled languages and {% data variables.product.prodname_code_scanning %} is still not working on your repository, contact {% data variables.contact.contact_support %}.
