---
title: Building and testing Java with Gradle
intro: You can create a continuous integration (CI) workflow in GitHub Actions to build and test your Java project with Gradle.
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /actions/language-and-framework-guides/building-and-testing-java-with-gradle
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
type: 'tutorial'
topics:
  - 'CI'
  - 'Java'
  - 'Gradle'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

### Introduction

This guide shows you how to create a workflow that performs continuous integration (CI) for your Java project using the Gradle build system. The workflow you create will allow you to see when commits to a pull request cause build or test failures against your default branch; this approach can help ensure that your code is always healthy. You can extend your CI workflow to cache files and upload artifacts from a workflow run.

{% if currentVersion == "github-ae@latest" %}For instructions on how to make sure your {% data variables.actions.hosted_runner %} has the required software installed, see "[Creating custom images](/actions/using-github-hosted-runners/creating-custom-images)."
{% else %}
{% data variables.product.prodname_dotcom %}-hosted runners have a tools cache with pre-installed software, which includes Java Development Kits (JDKs) and Gradle. For a list of software and the pre-installed versions for JDK and Gradle, see "[Specifications for {% data variables.product.prodname_dotcom %}-hosted runners](/actions/reference/specifications-for-github-hosted-runners/#supported-software)".
{% endif %}

### Prerequisites

You should be familiar with YAML and the syntax for {% data variables.product.prodname_actions %}. For more information, see:
- "[Workflow syntax for {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions)"
- "[Learn {% data variables.product.prodname_actions %}](/actions/learn-github-actions)"

We recommend that you have a basic understanding of Java and the Gradle framework. For more information, see [Getting Started](https://docs.gradle.org/current/userguide/getting_started.html) in the Gradle documentation.

{% data reusables.actions.enterprise-setup-prereq %}

### Starting with a Gradle workflow template

{% data variables.product.prodname_dotcom %} provides a Gradle workflow template that will work for most Gradle-based Java projects. For more information, see the [Gradle workflow template](https://github.com/actions/starter-workflows/blob/main/ci/gradle.yml).

To get started quickly, you can choose the preconfigured Gradle template when you create a new workflow. For more information, see the "[{% data variables.product.prodname_actions %} quickstart](/actions/quickstart)."

You can also add this workflow manually by creating a new file in the `.github/workflows` directory of your repository.

{% raw %}
```yaml{:copy}
name: Java CI

on: [push]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v2
      - name: Set up JDK 11
        uses: actions/setup-java@v2
        with:
          java-version: '11'
          distribution: 'adopt'
      - name: Build with Gradle
        run: ./gradlew build
```
{% endraw %}

This workflow performs the following steps:

1. The `checkout` step downloads a copy of your repository on the runner.
2. The `setup-java` step configures the Java 11 JDK by Adoptium.
3. The "Build with Gradle" step runs the `gradlew` wrapper script to ensure that your code builds, tests pass, and a package can be created.

The default workflow templates are excellent starting points when creating your build and test workflow, and you can customize the template to suit your project’s needs.

{% data reusables.github-actions.example-github-runner %}

{% data reusables.github-actions.java-jvm-architecture %}

### Building and testing your code

You can use the same commands that you use locally to build and test your code.

The starter workflow will run the `build` task by default. In the default Gradle configuration, this command will download dependencies, build classes, run tests, and package classes into their distributable format, for example, a JAR file.

If you use different commands to build your project, or you want to use a different task, you can specify those. For example, you may want to run the `package` task that's configured in your _ci.gradle_ file.

{% raw %}
```yaml{:copy}
steps:
  - uses: actions/checkout@v2
  - uses: actions/setup-java@v2
    with:
      java-version: '11'
      distribution: 'adopt'
  - name: Run the Gradle package task
    run: ./gradlew -b ci.gradle package
```
{% endraw %}

### Caching dependencies

When using {% data variables.product.prodname_dotcom %}-hosted runners, you can cache your dependencies to speed up your workflow runs. After a successful run, your local Gradle package cache will be stored on GitHub Actions infrastructure. In future workflow runs, the cache will be restored so that dependencies don't need to be downloaded from remote package repositories. For more information, see "<a href="/actions/guides/caching-dependencies-to-speed-up-workflows" class="dotcom-only">Caching dependencies to speed up workflows</a>" and the [`cache` action](https://github.com/marketplace/actions/cache).

{% raw %}
```yaml{:copy}
steps:
  - uses: actions/checkout@v2
  - name: Set up JDK 11
    uses: actions/setup-java@v2
    with:
      java-version: '11'
      distribution: 'adopt'
  - name: Cache Gradle packages
    uses: actions/cache@v2
    with:
      path: |
        ~/.gradle/caches
        ~/.gradle/wrapper
      key: ${{ runner.os }}-gradle-${{ hashFiles('**/*.gradle*', '**/gradle-wrapper.properties') }}
      restore-keys: |
        ${{ runner.os }}-gradle-
  - name: Build with Gradle
    run: ./gradlew build
  - name: Cleanup Gradle Cache
    # Remove some files from the Gradle cache, so they aren't cached by GitHub Actions.
    # Restoring these files from a GitHub Actions cache might cause problems for future builds.
    run: |
      rm -f ~/.gradle/caches/modules-2/modules-2.lock
      rm -f ~/.gradle/caches/modules-2/gc.properties
```
{% endraw %}

This workflow will save the contents of your local Gradle package cache, located in the `.gradle/caches` and `.gradle/wrapper` directories of the runner's home directory. The cache key will be the hashed contents of the gradle build files (including the Gradle wrapper properties file), so any changes to them will invalidate the cache.

### Packaging workflow data as artifacts

After your build has succeeded and your tests have passed, you may want to upload the resulting Java packages as a build artifact. This will store the built packages as part of the workflow run, and allow you to download them. Artifacts can help you test and debug pull requests in your local environment before they're merged. For more information, see "[Persisting workflow data using artifacts](/actions/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts)."

Gradle will usually create output files like JARs, EARs, or WARs in the `build/libs` directory. You can upload the contents of that directory using the `upload-artifact` action.

{% raw %}
```yaml{:copy}
steps:
  - uses: actions/checkout@v2
  - uses: actions/setup-java@v2
    with:
      java-version: '11'
      distribution: 'adopt'

  - run: ./gradlew build
  - uses: actions/upload-artifact@v2
    with:
      name: Package
      path: build/libs
```
{% endraw %}
