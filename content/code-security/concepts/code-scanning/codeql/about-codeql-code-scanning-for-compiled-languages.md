---
title: 'About CodeQL code scanning for compiled languages'
shortTitle: CodeQL for compiled languages
intro: Understand how {% data variables.product.prodname_codeql %} analyzes compiled languages, the build options available, and learn how you can customize the database generation process if you need to.
permissions: '{% data reusables.permissions.code-scanning-all-alerts %} if [advanced setup](/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/configuring-advanced-setup-for-code-scanning) is already enabled'
product: '{% data reusables.gated-features.code-scanning %}'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Code Security
  - Code scanning
  - CodeQL
  - C/C++
  - C#
  - Java
  - Kotlin
contentType: concepts
---

## About the {% data variables.code-scanning.codeql_workflow %} and compiled languages

{% data variables.product.prodname_code_scanning_caps %} works by running queries against one or more {% data variables.product.prodname_codeql %} databases. Each database contains a representation of the code in a single language in your repository. For the compiled languages {% data variables.code-scanning.compiled_languages %}, the process of populating this database often involves building the code and extracting data.

When you enable {% data variables.product.prodname_code_scanning %}, both default and advanced setup generate a {% data variables.product.prodname_codeql %} database for analysis using the simplest method available. For {% data variables.code-scanning.no_build_support %}, the {% data variables.product.prodname_codeql %} database is generated directly from the codebase without requiring a build (`none` build mode). For other compiled languages, {% data variables.product.prodname_codeql %} builds the codebase using the `autobuild` build mode. Alternatively, you can use the `manual` build mode to specify explicit build commands to analyze only the files that are built by these custom commands.

{% ifversion codeql-dependency-caching %}

You can use dependency caching with {% data variables.product.prodname_codeql %} to store dependencies as a {% data variables.product.prodname_actions %} cache instead of downloading them from registries. See [About dependency caching for {% data variables.product.prodname_codeql %}](#about-dependency-caching-for-codeql) later in this article.

{% endif %}

## {% data variables.product.prodname_codeql %} build modes

The {% data variables.product.prodname_codeql %} action supports three different build modes for compiled languages:

* `none` - the {% data variables.product.prodname_codeql %} database is created directly from the codebase without building the codebase (supported for all interpreted languages, and additionally supported for {% data variables.code-scanning.no_build_support %}).
* `autobuild` - {% data variables.product.prodname_codeql %} detects the most likely build method and uses this to attempt to build the codebase and create a database for analysis (supported for {% data variables.code-scanning.autobuild_support %}).
* `manual` - you define the build steps to use for the codebase in the workflow (supported for {% data variables.code-scanning.manual_build_support %}).

For language-specific `autobuild` behavior, runner requirements, and guidance for manual builds, see [AUTOTITLE](/code-security/reference/code-scanning/codeql/codeql-build-options-and-steps-for-compiled-languages).

{% ifversion codeql-dependency-caching %}

## About dependency caching for {% data variables.product.prodname_codeql %}

You can use dependency caching with {% data variables.product.prodname_codeql %} to store dependencies as a {% data variables.product.prodname_actions %} cache instead of downloading them from registries. This reduces the risk of losing alerts when third party registries don't work well, and may result in a performance improvement for projects that have a large number of dependencies or work with slow registries. To read more about how caching dependencies can speed up workflows, see [AUTOTITLE](/actions/writing-workflows/choosing-what-your-workflow-does/caching-dependencies-to-speed-up-workflows).

Dependency caching works with all build modes, and is supported by {% data variables.code-scanning.codeql_dependency_caching_languages %}.

>[!NOTE]
> Using dependency caching will store {% data variables.product.prodname_codeql %}-specific caches that will be subject to cache quotas for a repository. See [AUTOTITLE](/actions/writing-workflows/choosing-what-your-workflow-does/caching-dependencies-to-speed-up-workflows#usage-limits-and-eviction-policy).

{% endif %}