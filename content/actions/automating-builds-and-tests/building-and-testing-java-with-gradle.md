---
title: Building and testing Java with Gradle
intro: You can create a continuous integration (CI) workflow in GitHub Actions to build and test your Java project with Gradle.
redirect_from:
  - /actions/language-and-framework-guides/building-and-testing-java-with-gradle
  - /actions/guides/building-and-testing-java-with-gradle
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - CI
  - Java
  - Gradle
shortTitle: Build & test Java & Gradle
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## Introduction

This guide shows you how to create a workflow that performs continuous integration (CI) for your Java project using the Gradle build system. The workflow you create will allow you to see when commits to a pull request cause build or test failures against your default branch; this approach can help ensure that your code is always healthy. You can extend your CI workflow to {% ifversion actions-caching %}cache files and{% endif %} upload artifacts from a workflow run.

{% ifversion ghae %}
{% data reusables.actions.self-hosted-runners-software %}
{% else %}
{% data variables.product.prodname_dotcom %}-hosted runners have a tools cache with pre-installed software, which includes Java Development Kits (JDKs) and Gradle. For a list of software and the pre-installed versions for JDK and Gradle, see "[Specifications for {% data variables.product.prodname_dotcom %}-hosted runners](/actions/reference/specifications-for-github-hosted-runners/#supported-software)".
{% endif %}

## Prerequisites

You should be familiar with YAML and the syntax for {% data variables.product.prodname_actions %}. For more information, see:
- "[Workflow syntax for {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions)"
- "[Learn {% data variables.product.prodname_actions %}](/actions/learn-github-actions)"

We recommend that you have a basic understanding of Java and the Gradle framework. For more information, see [Getting Started](https://docs.gradle.org/current/userguide/getting_started.html) in the Gradle documentation.

{% data reusables.actions.enterprise-setup-prereq %}

## Using the Gradle starter workflow

{% data variables.product.prodname_dotcom %} provides a Gradle starter workflow that will work for most Gradle-based Java projects. For more information, see the [Gradle starter workflow](https://github.com/actions/starter-workflows/blob/main/ci/gradle.yml).

To get started quickly, you can choose the preconfigured Gradle starter workflow when you create a new workflow. For more information, see the "[{% data variables.product.prodname_actions %} quickstart](/actions/quickstart)."

You can also add this workflow manually by creating a new file in the `.github/workflows` directory of your repository.

```yaml{:copy}
{% data reusables.actions.actions-not-certified-by-github-comment %}

name: Java CI

on: [push]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Set up JDK 11
        uses: {% data reusables.actions.action-setup-java %}
        with:
          java-version: '11'
          distribution: 'adopt'
      - name: Validate Gradle wrapper
        uses: gradle/wrapper-validation-action@e6e38bacfdf1a337459f332974bb2327a31aaf4b
      - name: Build with Gradle
        uses: gradle/gradle-build-action@67421db6bd0bf253fb4bd25b31ebb98943c375e1
        with:
          arguments: build
```

This workflow performs the following steps:

1. The `checkout` step downloads a copy of your repository on the runner.
2. The `setup-java` step configures the Java 11 JDK by Adoptium.
3. The "Validate Gradle wrapper" step validates the checksums of Gradle Wrapper JAR files present in the source tree.
4. The "Build with Gradle" step does a build using the `gradle/gradle-build-action` action provided by the Gradle organization on {% data variables.product.prodname_dotcom %}. The action takes care of invoking Gradle, collecting results, and caching state between jobs. For more information see [`gradle/gradle-build-action`](https://github.com/gradle/gradle-build-action).

The default starter workflows are excellent starting points when creating your build and test workflow, and you can customize the starter workflow to suit your project’s needs.

{% data reusables.actions.example-github-runner %}

{% data reusables.actions.java-jvm-architecture %}

## Building and testing your code

You can use the same commands that you use locally to build and test your code.

The starter workflow will run the `build` task by default. In the default Gradle configuration, this command will download dependencies, build classes, run tests, and package classes into their distributable format, for example, a JAR file.

If you use different commands to build your project, or you want to use a different task, you can specify those. For example, you may want to run the `package` task that's configured in your _ci.gradle_ file.

```yaml{:copy}
steps:
  - uses: {% data reusables.actions.action-checkout %}
  - uses: {% data reusables.actions.action-setup-java %}
    with:
      java-version: '11'
      distribution: 'adopt'
  - name: Validate Gradle wrapper
    uses: gradle/wrapper-validation-action@e6e38bacfdf1a337459f332974bb2327a31aaf4b
  - name: Run the Gradle package task
    uses: gradle/gradle-build-action@67421db6bd0bf253fb4bd25b31ebb98943c375e1
    with:
      arguments: -b ci.gradle package
```

{% ifversion actions-caching %}

## Caching dependencies

Your build dependencies can be cached to speed up your workflow runs. After a successful run, the `gradle/gradle-build-action` caches important parts of the Gradle user home directory. In future jobs, the cache will be restored so that build scripts won't need to be recompiled and dependencies won't need to be downloaded from remote package repositories.

Caching is enabled by default when using the `gradle/gradle-build-action` action. For more information, see [`gradle/gradle-build-action`](https://github.com/gradle/gradle-build-action#caching).

{% endif %}

## Packaging workflow data as artifacts

After your build has succeeded and your tests have passed, you may want to upload the resulting Java packages as a build artifact. This will store the built packages as part of the workflow run, and allow you to download them. Artifacts can help you test and debug pull requests in your local environment before they're merged. For more information, see "[Persisting workflow data using artifacts](/actions/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts)."

Gradle will usually create output files like JARs, EARs, or WARs in the `build/libs` directory. You can upload the contents of that directory using the `upload-artifact` action.

```yaml{:copy}
steps:
  - uses: {% data reusables.actions.action-checkout %}
  - uses: {% data reusables.actions.action-setup-java %}
    with:
      java-version: '11'
      distribution: 'adopt'
  - name: Validate Gradle wrapper
    uses: gradle/wrapper-validation-action@e6e38bacfdf1a337459f332974bb2327a31aaf4b
  - name: Build with Gradle
    uses: gradle/gradle-build-action@67421db6bd0bf253fb4bd25b31ebb98943c375e1
    with:
      arguments: build
  - uses: {% data reusables.actions.action-upload-artifact %}
    with:
      name: Package
      path: build/libs
```
