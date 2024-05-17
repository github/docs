---
title: CodeQL code scanning for compiled languages
shortTitle: CodeQL for compiled languages
intro: 'Understand how {% data variables.product.prodname_codeql %} analyzes compiled languages, the build options available, and learn how you can customize the database generation process if you need to.'
product: '{% data reusables.gated-features.code-scanning %}'
permissions: 'People with write permissions to a repository can configure {% data variables.product.prodname_code_scanning %} for that repository by editing a workflow{% ifversion code-scanning-without-workflow %}, when advanced setup is enabled (admin permission is required to change setup){% endif %}.'
redirect_from:
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-code-scanning-for-compiled-languages
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-the-codeql-action-for-compiled-languages
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-the-codeql-workflow-for-compiled-languages
  - /code-security/secure-coding/configuring-the-codeql-workflow-for-compiled-languages
  - /code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-the-codeql-workflow-for-compiled-languages
  - /code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-the-codeql-workflow-for-compiled-languages
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-the-codeql-workflow-for-compiled-languages
  - /code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/codeql-code-scanning-for-compiled-languages
versions:
  fpt: '*'
  ghes: '*'
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
---

{% data reusables.code-scanning.enterprise-enable-code-scanning-actions %}

## About the {% data variables.code-scanning.codeql_workflow %} and compiled languages

{% data variables.product.prodname_code_scanning_caps %} works by running queries against one or more {% data variables.product.prodname_codeql %} databases. Each database contains a representation of the code in a single language in your repository. For the compiled languages {% data variables.code-scanning.compiled_languages %}, the process of populating this database {% ifversion codeql-no-build %}often{% endif %} involves building the code and extracting data.

{% ifversion codeql-no-build %}

When you enable {% data variables.product.prodname_code_scanning %}, both default and advanced setup generate a {% data variables.product.prodname_codeql %} database for analysis using the simplest method available. For {% data variables.code-scanning.no_build_support %}, the {% data variables.product.prodname_codeql %} database is generated directly from the codebase without requiring a build (`none` build mode). For other compiled languages, {% data variables.product.prodname_codeql %} builds the codebase using the `autobuild` build mode. Alternatively, you can use the `manual` build mode to specify explicit build commands to analyze only the files that are built by these custom commands.

{% elsif ghes > 3.9 %}

If you enable default setup, the `autobuild` action will be used to build your code, as part of your automatically configured {% data variables.code-scanning.codeql_workflow %}. If you enable advanced setup, the basic {% data variables.code-scanning.codeql_workflow %} uses `autobuild`. Alternatively, you can disable `autobuild` and instead specify explicit build commands to analyze only the files that are built by these custom commands.

{% else %}

The basic {% data variables.code-scanning.codeql_workflow %} uses the `autobuild` action to build your code. Alternatively, you can disable `autobuild` and instead specify explicit build commands to analyze only the files that are built by these custom commands.

{% endif %}

{% ifversion ghes < 3.10 %}

In {% data variables.product.product_name %} {{ allVersions[currentVersion].currentRelease }}, default setup does not support any compiled languages, so you must use advanced setup. Advanced setup generates a workflow file you can edit. The starter workflow files use `autobuild` to analyze compiled languages. For more information, see "[AUTOTITLE](/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/configuring-advanced-setup-for-code-scanning#configuring-advanced-setup-for-code-scanning-with-codeql)."

{% endif %}

{% ifversion codeql-no-build %}

## {% data variables.product.prodname_codeql %} build modes

{% data reusables.code-scanning.beta-no-build %}

The {% data variables.product.prodname_codeql %} action supports three different build modes for compiled languages:

- `none` - the {% data variables.product.prodname_codeql %} database is created directly from the codebase without building the codebase (supported for all interpreted languages, and additionally supported in beta for {% data variables.code-scanning.no_build_support %}).
- `autobuild` - {% data variables.product.prodname_codeql %} detects the most likely build method and uses this to attempt to build the codebase and create a database for analysis (supported for all compiled languages).
- `manual` - you define the build steps to use for the codebase in the workflow (supported for all compiled languages).

### Comparison of the build modes

{% rowheaders %}

| Build mode characteristic | None | Autobuild | Manual |
|---------------------------|-------------|-----------|--------|
| Used by default setup and for organization-level enablement | Yes ({% data variables.code-scanning.no_build_support %}) | Yes, where `none` is not supported | No |
| Analysis succeeds without user configuration | Yes | Variable | No |
| Completeness of analysis | Generated code not analyzed | Variable | User controlled |
| Accuracy of analysis | Good | Good | Best |

{% endrowheaders %}

### Recommendations

When you are setting up {% data variables.product.prodname_code_scanning %} for the first time, or across multiple repositories, it's best to use default setup. Default setup uses the simplest method available to generate a {% data variables.product.prodname_codeql %} database and analyze your code, so that you can start fixing alerts as soon as possible. Once you have resolved the initial alerts, you may want to switch to advanced setup with a manual build process for high risk repositories.

### Using multiple build modes in a multi-language repository

For repositories with multiple compiled languages, you can use different build modes for different languages. For example, if your repository contains C/C++, C# and Java, you might want to provide manual build steps for one language (here C/C++). This workflow specifies a different build mode for each language.

```yaml
strategy:
  matrix:
    include:
      # Analyzes C and C++ code using the commands in `Build C and C++ code`
      - language: c-cpp
        build-mode: manual
      # Analyzes C# code by automatically detecting a build
      - language: csharp
        build-mode: autobuild
      # Analyzes Java code directly from the codebase without a build
      - language: java-kotlin
        build-mode: none # analyzes Java only
steps:
- name: Checkout repository
  uses: {% data reusables.actions.action-checkout %}

    # Initializes CodeQL tools and creates a codebase for analysis.
    - name: Initialize CodeQL
      uses: {% data reusables.actions.action-codeql-action-init %}
      with:
        languages: {% raw %}${{ matrix.language }}{% endraw %}
    - if: {% raw %}${{ matrix.build-mode == 'manual' }}{% endraw %}
      name: Build C and C++ code
      run: |
        echo 'If you are using a "manual" build mode for one or more of the' \
          'languages you are analyzing, replace this with the commands to build' \
          'your code, for example:'
        echo '  make bootstrap'
        echo '  make release'
        exit 1
```

{% endif %}

For information about the languages, libraries, and frameworks that are supported in the latest version of {% data variables.product.prodname_codeql %}, see "[Supported languages and frameworks](https://codeql.github.com/docs/codeql-overview/supported-languages-and-frameworks)" in the {% data variables.product.prodname_codeql %} documentation. For information about the system requirements for running the latest version of {% data variables.product.prodname_codeql %}, see "[System requirements](https://codeql.github.com/docs/codeql-overview/system-requirements/#additional-software-requirements)" in the {% data variables.product.prodname_codeql %} documentation.

{% ifversion codeql-no-build %}

## About creating a {% data variables.product.prodname_codeql %} Java database without a build

{% data variables.product.prodname_codeql %} creates a Java database without requiring a build when one or both of the following conditions is true:

-`build-mode` is set to `none`.
- Default setup is configured and Java code (but not Kotlin code) was present when {% data variables.product.prodname_codeql %} was enabled.

{% data variables.product.prodname_codeql %} will attempt to run Gradle or Maven first in order to extract accurate dependency information (but not to invoke a build), before creating a database from all Java files present.

You can read about the system requirements to run Maven or Gradle, and the rules for selecting between them, in {% ifversion codeql-kotlin-beta %}"[Building Java and Kotlin](#building-java--and-kotlin)"{% else %}"[Building Java](#building-java)"{% endif %}. If you're creating a Java database without a build, these are the same, but note that multiple root Maven or Gradle scripts are allowed. Every root Maven or Gradle project file (a build script without any build script present in an ancestor directory) is queried for dependency information, and more recent dependency versions are preferred if there is a clash.

Creating a {% data variables.product.prodname_codeql %} Java database without a build may produce less accurate results than using `autobuild` or manual build steps if:

- Gradle or Maven build scripts cannot be queried for dependency information, and dependency guesses (based on Java package names) are inaccurate.
- The analyzed code includes code that was generated during the build process.

To use `autobuild` or manual build steps, you can use advanced setup.

If `build-mode` is set to `none` and Kotlin code is found in the repository, it will not be analyzed and a warning will be produced. See {% ifversion codeql-kotlin-beta %}"[Building Java and Kotlin](#building-java--and-kotlin)"{% else %}"[Building Java](#building-java)"{% endif %}.

{% endif %}

## About Autobuild for {% data variables.product.prodname_codeql %}

{% ifversion codeql-no-build or code-scanning-without-workflow-310 %}

The {% data variables.product.prodname_codeql %} action uses `autobuild` to analyze compiled languages in the following cases.

- Default setup is enabled{% ifversion codeql-no-build %} and the language does not support `none` build (beta release supported for {% data variables.code-scanning.no_build_support %}).
- Advanced setup is enabled and the workflow specifies `build-mode: autobuild`{% endif %}.
- Advanced setup is enabled and the workflow has an Autobuild step for the language using the `autobuild` action (`{% data reusables.actions.action-codeql-action-autobuild %}`).

{% endif %}

{% ifversion codeql-no-build %}

### Example using the `build-mode` option

```yaml
# Initializes the CodeQL tools for scanning.
name: Analyze
strategy:
  matrix:
    include:
      # Analyze C and C++ code
      - language: c-cpp
        build-mode: autobuild
      # Analyze Go code
      - language: go
        build-mode: autobuild

steps:
  - uses: {% data reusables.actions.action-codeql-action-init %}
    with:
      languages: {% raw %}${{ matrix.language }}{% endraw %}
      build-mode: {% raw %}${{ matrix.build-mode }}{% endraw %}
```

### Example using the Autobuild step

{% elsif ghes and code-scanning-without-workflow-310 %}

<!--Nothing to display-->

{% elsif ghes %}

The basic {% data variables.code-scanning.codeql_workflow %} uses the `autobuild` action to build your code.

{% endif %}

```yaml
    # Initializes the CodeQL tools for scanning.
    - name: Initialize CodeQL
      uses: {% data reusables.actions.action-codeql-action-init %}
      with:
        languages: {% raw %}${{ matrix.language }}{% endraw %}

    - name: Autobuild
      uses: {% data reusables.actions.action-codeql-action-autobuild %}
```

## About specifying build steps manually

{% ifversion codeql-no-build or code-scanning-without-workflow-310 %}
You can only specify manual build steps if you have enabled advanced setup, see "[AUTOTITLE](/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/configuring-advanced-setup-for-code-scanning#configuring-advanced-setup-for-a-repository)."{% endif %}

{% data reusables.code-scanning.autobuild-add-build-steps %} For information on how to edit the workflow file, see  "[AUTOTITLE](/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning#editing-a-code-scanning-workflow)."

{% ifversion codeql-no-build %}
Update your workflow to define the `build-mode` as `manual`.

```yaml
# Initializes the CodeQL tools for scanning.
- name: Initialize CodeQL
- uses: {% data reusables.actions.action-codeql-action-init %}
  with:
    languages: {% raw %}${{ matrix.language }}{% endraw %}
    build-mode: manual
- uses: {% data reusables.actions.action-codeql-action-analyze %}
  with:
    category: {% raw %}"/language:${{ matrix.language }}"{% endraw %}
```

Alternatively, update your workflow to comment out the "Autobuild" step.

{% endif %}

```yaml
    # Autobuild attempts to build any compiled languages.
    # - name: Autobuild
    #  uses: {% data reusables.actions.action-codeql-action-autobuild %}
```

### Specifying build commands

When manual building is enabled, uncomment the `run` step in the workflow and add build commands that are suitable for your repository. The `run` step runs command-line programs using the operating system's shell. You can modify these commands and add more commands to customize the build process.

``` yaml
- run: |
    make bootstrap
    make release
```

For more information about the `run` keyword, see "[AUTOTITLE](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsrun)."

{% ifversion codeql-no-build %}<!-- For "no-build" this is covered earlier in the article under "About CodeQL build modes". -->
{% elsif ghes %}

### Specifying build commands for multiple languages

For repositories with multiple compiled languages, you can specify language-specific build commands. For example, if your repository contains C/C++, C# and Java, you might want to provide manual build steps for one language (here Java). This specifies build steps for Java while still using `autobuild` for C/C++ and C#.

```yaml
- if: matrix.language == {% ifversion codeql-language-identifiers-311 %}'c-cpp'{% else %}'cpp'{% endif %} || matrix.language == 'csharp'
  name: Autobuild
  uses: {% data reusables.actions.action-codeql-action-autobuild %}
- if: matrix.language == {% ifversion codeql-language-identifiers-311 %}'java-kotlin'{% else %}'java'{% endif %}
  name: Build Java
  run: |
    make bootstrap
    make release
```

For more information about the `if` conditional, see "[AUTOTITLE](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsif)."
{% endif %}

If you added manual build steps for compiled languages and {% data variables.product.prodname_code_scanning %} is still not working on your repository, contact {% data variables.contact.contact_support %}.

## Autobuild steps for compiled languages

{% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}-hosted runners are always run with the software required by `autobuild`.{% endif %} If you use self-hosted runners for {% data variables.product.prodname_actions %}, you may need to install additional software to use the `autobuild` process. Additionally, if your repository requires a specific version of a build tool, you may need to install it manually. {% ifversion code-scanning-default-setup-self-hosted-310 or default-setup-self-hosted-runners-GHEC %} For self-hosted runners, you should install dependencies directly in the runners themselves. We provide examples of common dependencies for C/C++, C#, and Java in each of the `autobuild` sections of this article for those languages. For more information, see "[AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/about-self-hosted-runners)."{% endif %}

- [Building C/C++](#building-cc)
- [Building C#](#building-c){% ifversion codeql-go-autobuild %}
- [Building Go](#building-go){% endif %}{% ifversion codeql-kotlin-beta %}
- [Building Java and Kotlin](#building-java--and-kotlin){% else %}
- [Building Java](#building-java){% endif %}{% ifversion codeql-swift-beta %}
- [Building Swift](#building-swift){% endif %}

{% note %}

**Note**: If your workflow uses a `language` matrix, `autobuild` attempts to build each of the compiled languages listed in the matrix. Without a matrix `autobuild` attempts to build the supported compiled language that has the most source files in the repository. With the exception of Go, analysis of other compiled languages in your repository will fail unless you supply explicit build commands.

{% endnote %}

## Building C/C++

{% ifversion codeql-no-build %}{% data variables.product.prodname_codeql %} supports build modes `autobuild` or `manual` for C/C++ code.

### Autobuild summary{% endif %}

| Supported system type | System name |
|----|----|
| Operating system | Windows, macOS, and Linux |
| Build system | Windows: MSbuild and build scripts<br/>Linux and macOS: Autoconf, Make, CMake, qmake, Meson, Waf, SCons, Linux Kbuild, and build scripts |

The behavior of the `autobuild` step varies according to the operating system that the extraction runs on.

### Windows autodetection

On Windows, the `autobuild` step attempts to autodetect a suitable build method for C/C++ using the following approach:

1. Invoke `MSBuild.exe` on the solution (`.sln`) or project (`.vcxproj`) file closest to the root.
If `autobuild` detects multiple solution or project files at the same (shortest) depth from the top level directory, it will attempt to build all of them.
1. Invoke a script that looks like a build script—_build.bat_, _build.cmd_, _and build.exe_ (in that order).

### Linux and macOS autodetection

On Linux and macOS, the `autobuild` step reviews the files present in the repository to determine the build system used:

1. Look for a build system in the root directory.
1. If none are found, search subdirectories for a unique directory with a build system for C/C++.
1. Run an appropriate command to configure the system.

#### Runner requirements

{% ifversion codeql-cpp-autoinstall-dependencies %}
On Ubuntu Linux runners, `autobuild` may try to automatically install dependencies required by the detected configuration and build steps. By default, this behavior is enabled on {% data variables.product.prodname_dotcom %}-hosted runners and disabled on self-hosted runners. You can enable or disable this feature explicitly by setting `CODEQL_EXTRACTOR_CPP_AUTOINSTALL_DEPENDENCIES` to `true` or `false` in the environment. For more information about defining environment variables, see "[AUTOTITLE](/actions/learn-github-actions/variables#defining-environment-variables-for-a-single-workflow)."
{% endif %}

For self-hosted runners{% ifversion codeql-cpp-autoinstall-dependencies %}, unless automatic installation of dependencies is enabled{% endif %}, you will likely need to install the `gcc` compiler, and specific projects may also require access to `clang` or `msvc` executables. You will also need to install the build system (for example `msbuild`, `make`, `cmake`, `bazel`) and utilities (such as `python`, `perl`, `lex`, and `yacc`) that your projects depend on.
{%- ifversion codeql-cpp-autoinstall-dependencies %}
If you enable automatic installation of dependencies, you must ensure that the runner is using Ubuntu and that it can run `sudo apt-get` without requiring a password.
{%- endif %}

## Building C#

{% ifversion codeql-no-build %}{% data variables.product.prodname_codeql %} supports build modes `autobuild` or `manual` for C# code.

### Autobuild summary{% endif %}

| Supported system type | System name |
|----|----|
| Operating system | Windows, macOS, and Linux |
| Build system | .NET and MSbuild, as well as build scripts |

### Windows autodetection

The `autobuild` process attempts to autodetect a suitable build method for C# using the following approach:

1. Invoke `dotnet build` on the solution (`.sln`) or project (`.csproj`) file closest to the root.
1. Invoke `MSBuild.exe` on the solution or project file closest to the root.
If `autobuild` detects multiple solution or project files at the same (shortest) depth from the top level directory, it will attempt to build all of them.
1. Invoke a script that looks like a build script—`build.bat`, `build.cmd`, and `build.exe` (in that order).

#### Runner requirements

For .NET Core application development on self-hosted runners, the .NET SDK is required (for `dotnet`).

For .NET Framework application development, you will need Microsoft Build Tools (for `msbuild`) and Nuget CLI (for `nuget`).

### Linux and macOS autodetection

1. Invoke `dotnet build` on the solution (`.sln`) or project (`.csproj`) file closest to the root.
1. Invoke `MSbuild` on the solution or project file closest to the root.
If `autobuild` detects multiple solution or project files at the same (shortest) depth from the top level directory, it will attempt to build all of them.
1. Invoke a script that looks like a build script—`build` and `build.sh` (in that order).

#### Runner requirements

For .NET Core application development on self-hosted runners, the .NET SDK is required (for `dotnet`).

For .NET Framework application development, you will require Mono Runtime (to run `mono`, `msbuild`, or `nuget`).

{% ifversion codeql-go-autobuild %}

## Building Go

{% ifversion codeql-no-build %}{% data variables.product.prodname_codeql %} supports build modes `autobuild` or `manual` for Go code.

### Autobuild summary{% endif %}

| Supported system type | System name |
|----|----|
| Operating system | Windows, macOS, and Linux |
| Build system | Go modules, `dep` and Glide, as well as build scripts including Makefiles and Ninja scripts |

### Autodetection

The `autobuild` process attempts to autodetect a suitable way to install the dependencies needed by a Go repository before extracting all `.go` files:

1. Invoke `make`, `ninja`, `./build` or `./build.sh` (in that order) until one of these commands succeeds and a subsequent `go list ./...` also succeeds, indicating that the needed dependencies have been installed.
1. If none of those commands succeeded, look for `go.mod`, `Gopkg.toml` or `glide.yaml`, and run `go get` (unless vendoring is in use), `dep ensure -v` or `glide install` respectively to try to install dependencies.
1. Finally, if configurations files for these dependency managers are not found, rearrange the repository directory structure suitable for addition to `GOPATH`, and use `go get` to install dependencies. The directory structure reverts to normal after extraction completes.
1. Extract all Go code in the repository, similar to running `go build ./...`.

{% ifversion code-scanning-without-workflow %}

{% note %}

**Note:** If you use default setup, it will look for a `go.mod` file to automatically install a compatible version of the Go language.{% ifversion code-scanning-default-setup-self-hosted-310 %} If you're using a self-hosted runner with default setup that doesn't have internet access, you can manually install a compatible version of Go.{% endif %}

{% endnote %}

{% endif %}
{% endif %}

## Building Java {% ifversion codeql-kotlin-beta %} and Kotlin {% endif %}

{% ifversion codeql-no-build %}{% data variables.product.prodname_codeql %} supports the following build modes.

- Java: `none`, `autobuild`, or `manual`
- Kotlin: `autobuild` or `manual`

When you first enable default setup for a repository, if only Java code is detected then the build mode is set to `none`. If Kotlin or a combination of Java and Kotlin code is detected, then the build mode is set to `autobuild`.

If you later add Kotlin code to a repository that uses the `none` build mode, {% data variables.product.prodname_codeql %} analysis reports a warning message explaining that Kotlin is not supported. You will need to disable default setup and re-enable it. When you re-enable default setup, the build mode will change to `autobuild` so that both languages can be analyzed. Alternatively, you can change to an advanced setup. For more information, see "[AUTOTITLE](/code-security/code-scanning/troubleshooting-code-scanning/kotlin-detected-in-no-build)."

### Autobuild summary{% endif %}

| Supported system type | System name |
|----|----|
| Operating system | Windows, macOS, and Linux (no restriction) |
| Build system | Gradle, Maven and Ant |

### Autodetection

The `autobuild` process tries to determine the build system for Java codebases by applying this strategy:

1. Search for a build file in the root directory. Check for Gradle then Maven then Ant build files.
1. Run the first build file found. If both Gradle and Maven files are present, the Gradle file is used.
1. Otherwise, search for build files in direct subdirectories of the root directory. If only one subdirectory contains build files, run the first file identified in that subdirectory (using the same preference as for 1). If more than one subdirectory contains build files, report an error.

### Runner requirements

If you're using self-hosted runners, the required version(s) of Java should be present:

- If the runner will be used for analyzing repositories that need a single version of Java, then the appropriate JDK version needs to be installed, and needs to be present in the PATH variable (so that `java` and `javac` can be found).

- If the runner will be used for analyzing repositories that need multiple versions of Java, then the appropriate JDK versions need to be installed, and can be specified via the `toolchains.xml` file. This is a configuration file, typically used by Apache Maven, that allows you to specify the location of the tools, the version of the tools, and any additional configuration that is required to use the tools. For more information, see "[Guide to Using Toolchains](https://maven.apache.org/guides/mini/guide-using-toolchains.html)" in the Apache Maven documentation.

The following executables will likely be required for a range of Java projects, and should be present in the PATH variable, but they will not be essential in all cases:

- `mvn` (Apache Maven)
- `gradle` (Gradle)
- `ant` (Apache Ant)

You will also need to install the build system (for example `make`, `cmake`, `bazel`) and utilities (such as `python`, `perl`, `lex`, and `yacc`) that your projects depend on.

{% ifversion codeql-swift-beta %}

## Building Swift

{% ifversion codeql-no-build %}{% data variables.product.prodname_codeql %} supports build modes `autobuild` or `manual` for Swift code.

### Autobuild summary{% endif %}

| Supported system type | System name |
|----|----|
| Operating system | macOS |
| Build system | Xcode |

The `autobuild` process tries to build the biggest target from an Xcode project or workspace.

{% endif %}

{% ifversion codeql-swift-beta %}

{% data reusables.code-scanning.beta-swift-support %}

Code scanning of Swift code uses macOS runners by default. {% ifversion fpt or ghec %}Since {% data variables.product.company_short %}-hosted macOS runners are more expensive than Linux and Windows runners, we recommend that you build only the code that you want to analyze. For more information about pricing for {% data variables.product.company_short %}-hosted runners, see "[AUTOTITLE](/billing/managing-billing-for-github-actions/about-billing-for-github-actions)."{% endif %}

{% data reusables.code-scanning.default-setup-swift-self-hosted-runners %}

### Customizing Swift compilation in a {% data variables.code-scanning.codeql_workflow %}

`xcodebuild` and `swift build` are both supported for Swift builds. We recommend only targeting one architecture during the build. For example, `ARCH=arm64` for `xcodebuild`, or `--arch arm64` for `swift build`.

You can pass the `archive` and `test` options to `xcodebuild`. However, the standard `xcodebuild` command is recommended as it should be the fastest, and should be all that {% data variables.product.prodname_codeql %} requires for a successful scan.

For Swift analysis, you must always explicitly install dependencies managed via CocoaPods or Carthage before generating the {% data variables.product.prodname_codeql %} database.

{% endif %}
