---
title: CodeQL code scanning for compiled languages
shortTitle: CodeQL for compiled languages
intro: 'Understand the autobuild method {% data variables.product.prodname_codeql %} analysis uses to build code for compiled languages and learn how you can customize the build command if you need to.'
product: '{% data reusables.gated-features.code-scanning %}'
permissions: 'If you have write permissions to a repository, you can configure {% data variables.product.prodname_code_scanning %} for that repository.'
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
---

{% data reusables.code-scanning.beta %}
{% data reusables.code-scanning.enterprise-enable-code-scanning-actions %}

## About the {% data variables.code-scanning.codeql_workflow %} and compiled languages

{% data variables.product.prodname_code_scanning_caps %} works by running queries against one or more databases. Each database contains a representation of all of the code in a single language in your repository. For the compiled languages {% data variables.code-scanning.compiled_languages %}, the process of populating this database involves building the code and extracting data.

{% data reusables.code-scanning.autobuild-compiled-languages %}

{% ifversion code-scanning-without-workflow-310 %}

For {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %}, you can use default setup, which analyzes your code and automatically configures your {% data variables.product.prodname_code_scanning %}, or advanced setup, which generates a workflow file you can edit. {% ifversion codeql-swift-advanced-setup %}Default setup can analyze all compiled languages supported by {% data variables.product.prodname_codeql %}.{% endif %} For more information about advanced setup, see "[AUTOTITLE](/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/configuring-advanced-setup-for-code-scanning#configuring-advanced-setup-for-code-scanning-with-codeql)."

{% ifversion code-scanning-default-setup-self-hosted-310 %}
You can use default setup with self-hosted runners for all {% data variables.product.prodname_codeql %}-supported languages{% ifversion codeql-swift-advanced-setup %} except Swift{% endif %}. Default setup will always run the `autobuild` action, so you should configure your self-hosted runners to make sure they can run all necessary commands for C/C++, C#, and Java analysis. Analysis of Javascript/Typescript, Go, Ruby, Python, and Kotlin code does not currently require special configuration.
{% endif %}

{% elsif code-scanning-without-workflow %}

In {% data variables.product.product_name %} {{ allVersions[currentVersion].currentRelease }}, default setup does not support any compiled languages, so you must use advanced setup. Advanced setup generates a workflow file you can edit. The starter workflow files use `autobuild` to analyze compiled languages. For more information, see "[AUTOTITLE](/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/configuring-advanced-setup-for-code-scanning#configuring-advanced-setup-for-code-scanning-with-codeql)."

{% else %}

You set up {% data variables.product.prodname_dotcom %} to run {% data variables.product.prodname_code_scanning %} for your repository by adding a {% data variables.product.prodname_actions %} workflow to the repository. For {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %}, you add the {% data variables.code-scanning.codeql_workflow %}. For more information, see "[AUTOTITLE](/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/configuring-advanced-setup-for-code-scanning#configuring-code-scanning-using-the-codeql-action)."

{% endif %}

For information about the languages, libraries, and frameworks that are supported in the latest version of {% data variables.product.prodname_codeql %}, see "[Supported languages and frameworks](https://codeql.github.com/docs/codeql-overview/supported-languages-and-frameworks)" in the {% data variables.product.prodname_codeql %} documentation. For information about the system requirements for running the latest version of {% data variables.product.prodname_codeql %}, see "[System requirements](https://codeql.github.com/docs/codeql-overview/system-requirements/#additional-software-requirements)" in the {% data variables.product.prodname_codeql %} documentation.

If your workflow uses a `language` matrix, `autobuild` attempts to build each of the compiled languages listed in the matrix. Without a matrix `autobuild` attempts to build the supported compiled language that has the most source files in the repository. With the exception of Go, analysis of other compiled languages in your repository will fail unless you supply explicit build commands.

## About `autobuild` for {% data variables.product.prodname_codeql %}

{% data reusables.code-scanning.autobuild-compiled-languages %}

- [`autobuild` for C/C++](#autobuild-for-cc)
- [`autobuild` for C#](#autobuild-for-c){% ifversion codeql-go-autobuild %}
- [`autobuild` for Go](#autobuild-for-go){% endif %}{% ifversion codeql-kotlin-beta %}
- [`autobuild` for Java and Kotlin](#autobuild-for-java--and-kotlin){% else %}
- [`autobuild` for Java](#autobuild-for-java){% endif %}{% ifversion codeql-swift-beta %}
- [`autobuild` for Swift](#autobuild-for-swift){% endif %}

{% note %}

{% ifversion ghae %}
**Note**: {% data reusables.actions.self-hosted-runners-software %}
{% else %}
**Note**: If you use self-hosted runners for {% data variables.product.prodname_actions %}, you may need to install additional software to use the `autobuild` process. Additionally, if your repository requires a specific version of a build tool, you may need to install it manually. {% ifversion code-scanning-default-setup-self-hosted-310 %} For self-hosted runners, you should install dependencies directly in the runners themselves. We provide examples of common dependencies for C/C++, C#, and Java in each of the `autobuild` sections of this article for those languages. For more information, see "[AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/about-self-hosted-runners)."{% endif %}{% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}-hosted runners are always run with the software required by `autobuild`.{% endif %}
{% endif %}

{% endnote %}

### `autobuild` for C/C++

| Supported system type | System name |
|----|----|
| Operating system | Windows, macOS, and Linux |
| Build system | Windows: MSbuild and build scripts<br/>Linux and macOS: Autoconf, Make, CMake, qmake, Meson, Waf, SCons, Linux Kbuild, and build scripts |

The behavior of the `autobuild` step varies according to the operating system that the extraction runs on. On Windows, the `autobuild` step attempts to autodetect a suitable build method for C/C++ using the following approach:

1. Invoke `MSBuild.exe` on the solution (`.sln`) or project (`.vcxproj`) file closest to the root.
If `autobuild` detects multiple solution or project files at the same (shortest) depth from the top level directory, it will attempt to build all of them.
1. Invoke a script that looks like a build script—_build.bat_, _build.cmd_, _and build.exe_ (in that order).

On Linux and macOS, the `autobuild` step reviews the files present in the repository to determine the build system used:

1. Look for a build system in the root directory.
1. If none are found, search subdirectories for a unique directory with a build system for C/C++.
1. Run an appropriate command to configure the system.

For self-hosted runners, you will likely need to install the `gcc` compiler, and specific projects may also require access to `clang` or `mscv` executables. You will also need to install the build system (for example `msbuild`, `make`, `cmake`, `bazel`) and utilities (such as `python`, `perl`, `lex`, and `yacc`) that your projects depend on.

### `autobuild` for C#

| Supported system type | System name |
|----|----|
| Operating system | Windows, macOS, and Linux |
| Build system | .NET and MSbuild, as well as build scripts |

The `autobuild` process attempts to autodetect a suitable build method for C# using the following approach:

1. Invoke `dotnet build` on the solution (`.sln`) or project (`.csproj`) file closest to the root.
1. Invoke `MSbuild` (Linux) or `MSBuild.exe` (Windows) on the solution or project file closest to the root.
If `autobuild` detects multiple solution or project files at the same (shortest) depth from the top level directory, it will attempt to build all of them.
1. Invoke a script that looks like a build script—_build_ and _build.sh_ (in that order, for Linux) or _build.bat_, _build.cmd_, _and build.exe_ (in that order, for Windows).

For .NET Core application development on self-hosted runners, the .NET SDK is required (for `dotnet`).

For .NET Framework application development, on Windows, you will need Microsoft Build Tools (for `msbuild`) and Nuget CLI (for `nuget`). On Linux and macOS, you will require Mono Runtime (to run `mono`, `msbuild`, or `nuget`).

{% ifversion codeql-go-autobuild %}

### `autobuild` for Go

| Supported system type | System name |
|----|----|
| Operating system | Windows, macOS, and Linux |
| Build system | Go modules, `dep` and Glide, as well as build scripts including Makefiles and Ninja scripts |

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

### `autobuild` for Java {% ifversion codeql-kotlin-beta %} and Kotlin {% endif %}

| Supported system type | System name |
|----|----|
| Operating system | Windows, macOS, and Linux (no restriction) |
| Build system | Gradle, Maven and Ant |

The `autobuild` process tries to determine the build system for Java codebases by applying this strategy:

1. Search for a build file in the root directory. Check for Gradle then Maven then Ant build files.
1. Run the first build file found. If both Gradle and Maven files are present, the Gradle file is used.
1. Otherwise, search for build files in direct subdirectories of the root directory. If only one subdirectory contains build files, run the first file identified in that subdirectory (using the same preference as for 1). If more than one subdirectory contains build files, report an error.

If you're using self-hosted runners, the required version(s) of Java should be present:

- If the runner will be used for analyzing repositories that need a single version of Java, then the appropriate JDK version needs to be installed, and needs to be present in the PATH variable (so that `java` and `javac` can be found).

- If the runner will be used for analyzing repositories that need multiple versions of Java, then the appropriate JDK versions need to be installed, and can be specified via the `toolchains.xml` file. This is a configuration file, typically used by Apache Maven, that allows you to specify the location of the tools, the version of the tools, and any additional configuration that is required to use the tools. For more information, see "[Guide to Using Toolchains](https://maven.apache.org/guides/mini/guide-using-toolchains.html)" in the Apache Maven documentation.

The following executables will likely be required for a range of Java projects, and should be present in the PATH variable, but they will not be essential in all cases:

- `mvn` (Apache Maven)
- `gradle` (Gradle)
- `ant` (Apache Ant)

You will also need to install the build system (for example `make`, `cmake`, `bazel`) and utilities (such as `python`, `perl`, `lex`, and `yacc`) that your projects depend on.

{% ifversion codeql-swift-beta %}

### `autobuild` for Swift

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

#### Customizing Swift compilation in a {% data variables.code-scanning.codeql_workflow %}

`xcodebuild` and `swift build` are both supported for Swift builds. We recommend only targeting one architecture during the build. For example, `ARCH=arm64` for `xcodebuild`, or `--arch arm64` for `swift build`.

You can pass the `archive` and `test` options to `xcodebuild`. However, the standard `xcodebuild` command is recommended as it should be the fastest, and should be all that {% data variables.product.prodname_codeql %} requires for a successful scan.

For Swift analysis, you must always explicitly install dependencies managed via CocoaPods or Carthage before generating the {% data variables.product.prodname_codeql %} database.

{% endif %}

## Adding build steps for a compiled language

{% data reusables.code-scanning.autobuild-add-build-steps %} For information on how to edit the workflow file, see  "[AUTOTITLE](/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning#editing-a-code-scanning-workflow)."

After removing the `autobuild` step, uncomment the `run` step and add build commands that are suitable for your repository. The workflow `run` step runs command-line programs using the operating system's shell. You can modify these commands and add more commands to customize the build process.

``` yaml
- run: |
    make bootstrap
    make release
```

For more information about the `run` keyword, see "[AUTOTITLE](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsrun)."

If your repository contains multiple compiled languages, you can specify language-specific build commands. For example, if your repository contains C/C++, C# and Java, and `autobuild` correctly builds C/C++ and C# but fails to build Java, you could use the following configuration in your workflow, after the `init` step. This specifies build steps for Java while still using `autobuild` for C/C++ and C#:

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

For more tips and tricks about why `autobuild` won't build your code, see "[AUTOTITLE](/code-security/code-scanning/troubleshooting-code-scanning/automatic-build-failed-for-a-compiled-language)."

If you added manual build steps for compiled languages and {% data variables.product.prodname_code_scanning %} is still not working on your repository, contact {% data variables.contact.contact_support %}.
