---
title: Configuring code scanning for compiled languages
shortTitle: Configuring for compiled languages
intro: 'You can configure how {% data variables.product.prodname_dotcom %} scans code written in compiled languages for vulnerabilities and errors.'
product: '{% data reusables.gated-features.code-scanning %}'
permissions: 'People with write permissions to a repository can configure {% data variables.product.prodname_code_scanning %} for the repository.'
versions:
  free-pro-team: '*'
---

{% data reusables.code-scanning.beta %}

{% note %}

**Note**: This article refers to {% data variables.product.prodname_code_scanning %} powered by {% data variables.product.prodname_codeql %}, not to {% data variables.product.prodname_code_scanning %} resulting from the upload of third-party static analysis tools.

{% endnote %}

### About {% data variables.product.prodname_code_scanning %} and compiled languages

To enable {% data variables.product.prodname_code_scanning %} for your repository, you add to the repository a {% data variables.product.prodname_actions %}  workflow which includes {% data variables.product.prodname_codeql %} analysis. For more information, see "[Enabling {% data variables.product.prodname_code_scanning %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/enabling-code-scanning)."

{% data reusables.code-scanning.edit-workflow %}
For more information about configuring {% data variables.product.prodname_code_scanning %} and editing workflow files, see "[Configuring {% data variables.product.prodname_code_scanning %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-code-scanning)" and  "[Configuring a workflow](/actions/configuring-and-managing-workflows/configuring-a-workflow)."

### About autobuild for {% data variables.product.prodname_codeql %}

{% data reusables.code-scanning.autobuild-compiled-languages %}

{% note %}

**Note**: If you use self-hosted runners for {% data variables.product.prodname_actions %}, you may need to install additional software to use the `autobuild` process. Additionally, if your repository requires a specific version of a build tool, you may need to install it manually. Weitere Informationen findest Du unter „[Auf GitHub-gehosteten Runnern installierte Software](/actions/reference/software-installed-on-github-hosted-runners)".

{% endnote %}

#### C/C++

| Supported system type | System name                                                 |
| --------------------- | ----------------------------------------------------------- |
| Betriebssystem        | Windows and Linux                                           |
| Build system          | Autoconf, CMake, qmake, Meson, Waf, SCons, and Linux Kbuild |

The behavior of the `autobuild` step varies according to the operating system that the extraction runs on. On Windows, the step has no default actions. On Linux, this step reviews the files present in the repository to determine the build system used:

1. Look for a build system in the root directory.
2. If none are found, search subdirectories for a unique directory with a build system for C/C++.
3. Run an appropriate command to configure the system.

#### C

| Supported system type | System name                                |
| --------------------- | ------------------------------------------ |
| Betriebssystem        | Windows and Linux                          |
| Build system          | .NET and MSbuild, as well as build scripts |

The `autobuild` process attempts to autodetect a suitable build method for C# using the following approach:

1. Invoke `dotnet build` on the solution (`.sln`) or project (`.csproj`) file closest to the root.
2. Invoke `MSbuild` (Linux) or `MSBuild.exe` (Windows) on the solution or project file closest to the root. If `autobuild` detects multiple solution or project files at the same (shortest) depth from the top level directory, it will attempt to build all of them.
3. Invoke a script that looks like a build script—_build_ and _build.sh_ (in that order, for Linux) or _build.bat_, _build.cmd_, _and build.exe_ (in that order, for Windows).


#### Java

| Supported system type | System name                               |
| --------------------- | ----------------------------------------- |
| Betriebssystem        | Windows, macOS and Linux (no restriction) |
| Build system          | Gradle, Maven and Ant                     |

The `autobuild` process tries to determine the build system for Java codebases by applying this strategy:

1. Search for a build file in the root directory. Check for Gradle then Maven then Ant build files.
2. Run the first build file found. If both Gradle and Maven files are present, the Gradle file is used.
3. Otherwise, search for build files in direct subdirectories of the root directory. If only one subdirectory contains build files, run the first file identified in that subdirectory (using the same preference as for 1). If more than one subdirectory contains build files, report an error.

### Adding build steps for a compiled language

{% data reusables.code-scanning.autobuild-add-build-steps %} For information about editing the workflow, see  "[Configuring {% data variables.product.prodname_code_scanning %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-code-scanning#editing-a-code-scanning-workflow)."

After removing the `autobuild` step, uncomment the `run` step and add build commands that are suitable for your repository. The workflow `run` step runs command-line programs using the operating system's shell. You can modify these commands and add more commands to customize the build process.

``` yaml
- run: |
  make bootstrap
  make release
```

For more information about the `run` keyword, see "[Workflow syntax for {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepsrun)."

You can also use a build matrix to update the workflow to build more than one compiled language, if this is the appropriate approach for your system and doesn't cause conflicts. For more information, see "[Configuring a build matrix](/actions/configuring-and-managing-workflows/configuring-a-workflow#configuring-a-build-matrix)."


For example, the workflow below runs one job for C/C++ analysis, and another job for Java analysis.

```yaml

name: "Code Scanning - Action"

on:
  pull_request:
    branches: [master]
  push:
    branches: [master]

jobs:
  CodeQL-Build:

    strategy:
      fail-fast: false
      matrix:
        language: [ 'cpp', 'java']

    # CodeQL runs on ubuntu-latest, windows-latest, and macos-latest
    runs-on: ubuntu-latest

    steps:
    - name: Checkout repository
      uses: actions/checkout@v2

    # Initializes the CodeQL tools for scanning.
    - name: Initialize CodeQL
      uses: github/codeql-action/init@v1
      with:
        languages: ${{ matrix.language }}

    # Autobuild attempts to build any compiled languages  (C/C++, C#, or Java).
    # If this step fails, then you should remove it and run the build manually.
    - name: Autobuild
      uses: github/codeql-action/autobuild@v1

    - name: Perform CodeQL Analysis
      uses: github/codeql-action/analyze@v1
```

For more tips and tricks about why `autobuild` won't build your code, see "[Troubleshooting {% data variables.product.prodname_code_scanning %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/troubleshooting-code-scanning)".

If you added manual build steps for compiled languages or used a build matrix and {% data variables.product.prodname_code_scanning %} is still not working on your repository, contact {% data variables.contact.contact_support %}.
