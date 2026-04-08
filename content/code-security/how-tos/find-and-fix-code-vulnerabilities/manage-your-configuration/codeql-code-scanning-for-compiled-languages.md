---
title: CodeQL code scanning for compiled languages
shortTitle: CodeQL for compiled languages
intro: Understand how {% data variables.product.prodname_codeql %} analyzes compiled languages, the build options available, and learn how you can customize the database generation process if you need to.
permissions: '{% data reusables.permissions.code-scanning-all-alerts %} if [advanced setup](/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/configuring-advanced-setup-for-code-scanning) is already enabled'
product: '{% data reusables.gated-features.code-scanning %}'
redirect_from:
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-code-scanning-for-compiled-languages
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-the-codeql-action-for-compiled-languages
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-the-codeql-workflow-for-compiled-languages
  - /code-security/secure-coding/configuring-the-codeql-workflow-for-compiled-languages
  - /code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-the-codeql-workflow-for-compiled-languages
  - /code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-the-codeql-workflow-for-compiled-languages
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-the-codeql-workflow-for-compiled-languages
  - /code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/codeql-code-scanning-for-compiled-languages
  - /code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/codeql-code-scanning-for-compiled-languages
  - /code-security/how-tos/scan-code-for-vulnerabilities/manage-your-configuration/codeql-code-scanning-for-compiled-languages
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
contentType: how-tos
---

{% data reusables.code-scanning.enterprise-enable-code-scanning-actions %}

## Compare build modes

{% rowheaders %}

| Build mode characteristic | None | Autobuild | Manual |
|---------------------------|-------------|-----------|--------|
| Used by default setup and for organization-level enablement | Yes ({% data variables.code-scanning.no_build_support %}) | Yes, where `none` is not supported | No |
| Analysis succeeds without user configuration | Yes | Variable | No |
| Completeness of analysis | Generated code not analyzed | Variable | User controlled |
| Accuracy of analysis | Good | Good | Best |

{% endrowheaders %}

## Choose a build mode

When you are setting up {% data variables.product.prodname_code_scanning %} for the first time, or across multiple repositories, it's best to use default setup. Default setup uses the simplest method available to generate a {% data variables.product.prodname_codeql %} database and analyze your code, so that you can start fixing alerts as soon as possible. Once you have resolved the initial alerts, you may want to switch to advanced setup with a manual build process for high risk repositories.

For language-specific `autobuild` behavior, runner requirements, and build-mode details for compiled languages, see [AUTOTITLE](/code-security/reference/code-scanning/codeql/codeql-build-options-and-steps-for-compiled-languages).

## Use multiple build modes in a multi-language repository

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
    echo ' make bootstrap'
    echo ' make release'
    exit 1
```

For information about the languages, libraries, and frameworks that are supported in the latest version of {% data variables.product.prodname_codeql %}, see [Supported languages and frameworks](https://codeql.github.com/docs/codeql-overview/supported-languages-and-frameworks) in the {% data variables.product.prodname_codeql %} documentation. For information about the system requirements for running the latest version of {% data variables.product.prodname_codeql %}, see [System requirements](https://codeql.github.com/docs/codeql-overview/system-requirements/#additional-software-requirements) in the {% data variables.product.prodname_codeql %} documentation.

{% ifversion codeql-dependency-caching %}

## Enable dependency caching for {% data variables.product.prodname_codeql %}

For default setup workflows, dependency caching is enabled only for {% data variables.product.github %}-hosted runners in public and private repositories.

For advanced setup workflows, dependency caching is disabled by default. To enable dependency caching for {% data variables.product.prodname_codeql %}, use the `dependency-caching` setting for the {% data variables.product.prodname_codeql %} action in your advanced setup workflow. This setting accepts the following values:

* `false`/`none`/`off`: Dependency caching is disabled (default)
* `restore`: Only restore existing caches, do not store new caches
* `store`: Only store new caches, do not restore existing caches
* `true`/`full`/`on`: Restore existing caches, and store new caches

For example, the following settings would enable dependency caching for the {% data variables.product.prodname_codeql %} action:

```yaml
    # Initializes CodeQL with dependency caching enabled
    - name: Initialize CodeQL
      uses: {% data reusables.actions.action-codeql-action-init %}
      with:
        languages: java
        dependency-caching: true
```

{% endif %}

## Use `none` build mode for {% data variables.product.prodname_codeql %}

For {% data variables.code-scanning.no_build_support %}, {% data variables.product.prodname_codeql %} creates a database without requiring a build when you enable default setup for {% data variables.product.prodname_code_scanning %} unless the repository also includes Kotlin code. If a repository contains Kotlin code in addition to Java code, default setup is enabled with the autobuild process because Kotlin analysis requires a build.

Creating a {% data variables.product.prodname_codeql %} database without a build may produce less accurate results than using `autobuild` or manual build steps if:

* The build scripts cannot be queried for dependency information, and dependency guesses are inaccurate.
* The repository normally generates code during the build process.

To use `autobuild` or manual build steps, you can use advanced setup.

>[!NOTE] For Java analysis, if `build-mode` is set to `none` and Kotlin code is found in the repository, the Kotlin code will not be analyzed and a warning will be produced. See [AUTOTITLE](/code-security/reference/code-scanning/codeql/codeql-build-options-and-steps-for-compiled-languages#building-java-and-kotlin).

## Use `autobuild` for {% data variables.product.prodname_codeql %}

The {% data variables.product.prodname_codeql %} action uses `autobuild` to analyze compiled languages in the following cases.

* Default setup is enabled and the language does not support `none` build (supported for {% data variables.code-scanning.no_build_support %}).
* Advanced setup is enabled and the workflow specifies `build-mode: autobuild`.
* Advanced setup is enabled and the workflow has an Autobuild step for the language using the `autobuild` action (`{% data reusables.actions.action-codeql-action-autobuild %}`).

### Use the `build-mode` option

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

### Use the Autobuild step

```yaml
    # Initializes the CodeQL tools for scanning.
    - name: Initialize CodeQL
      uses: {% data reusables.actions.action-codeql-action-init %}
      with:
        languages: {% raw %}${{ matrix.language }}{% endraw %}

    - name: Autobuild
      uses: {% data reusables.actions.action-codeql-action-autobuild %}
```

## Specify build steps manually

You can only specify manual build steps if you have enabled advanced setup, see [AUTOTITLE](/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/configuring-advanced-setup-for-code-scanning#configuring-advanced-setup-for-a-repository).

{% data reusables.code-scanning.autobuild-add-build-steps %}

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

```yaml
    # Autobuild attempts to build any compiled languages.
    # - name: Autobuild
    #  uses: {% data reusables.actions.action-codeql-action-autobuild %}
```

### Add build commands

When manual building is enabled, uncomment the `run` step in the workflow and add build commands that are suitable for your repository. The `run` step runs command-line programs using the operating system's shell. You can modify these commands and add more commands to customize the build process.

``` yaml
- run: |
    make bootstrap
    make release
```

For more information about the `run` keyword, see [AUTOTITLE](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsrun).

<!-- For "no-build" this is covered earlier in the article under "About CodeQL build modes". -->

If you added manual build steps for compiled languages and {% data variables.product.prodname_code_scanning %} is still not working on your repository, contact {% data variables.contact.contact_support %}.


