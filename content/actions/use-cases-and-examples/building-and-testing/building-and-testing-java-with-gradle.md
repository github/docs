---
title: Building and testing Java with Gradle
intro: You can create a continuous integration (CI) workflow in GitHub Actions to build and test your Java project with Gradle.
redirect_from:
  - /actions/language-and-framework-guides/building-and-testing-java-with-gradle
  - /actions/guides/building-and-testing-java-with-gradle
  - /actions/automating-builds-and-tests/building-and-testing-java-with-gradle
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
type: tutorial
topics:
  - CI
  - Java
  - Gradle
shortTitle: Build & test Java & Gradle
---

{% data reusables.actions.enterprise-github-hosted-runners %}

## Introduction

This guide shows you how to create a workflow that performs continuous integration (CI) for your Java project using the Gradle build system. The workflow you create will allow you to see when commits to a pull request cause build or test failures against your default branch; this approach can help ensure that your code is always healthy. You can extend your CI workflow to {% ifversion actions-caching %}cache files and{% endif %} upload artifacts from a workflow run.

{% data variables.product.prodname_dotcom %}-hosted runners have a tools cache with pre-installed software, which includes Java Development Kits (JDKs) and Gradle. For a list of software and the pre-installed versions for JDK and Gradle, see "[AUTOTITLE](/actions/using-github-hosted-runners/about-github-hosted-runners#supported-software)".

## Prerequisites

You should be familiar with YAML and the syntax for {% data variables.product.prodname_actions %}. For more information, see:
* "[AUTOTITLE](/actions/using-workflows/workflow-syntax-for-github-actions)"
* "[AUTOTITLE](/actions/learn-github-actions)"

We recommend that you have a basic understanding of Java and the Gradle framework. For more information, see the [Gradle User Manual](https://docs.gradle.org/current/userguide/userguide.html).

{% data reusables.actions.enterprise-setup-prereq %}

## Using a Gradle workflow template

{% data reusables.actions.workflow-templates-get-started %}

{% data variables.product.prodname_dotcom %} provides a workflow template for Gradle that should work for most Java with Gradle projects. The subsequent sections of this guide give examples of how you can customize this workflow template.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.actions.new-starter-workflow %}
1. The "Choose a workflow" page shows a selection of recommended workflow templates. Search for "Java with Gradle".
1. On the "Java with Gradle" workflow, click **Configure**.

{%- ifversion ghes %}

   If you don't find the "Java with Gradle" workflow template, copy the following workflow code to a new file called `gradle.yml` in the `.github/workflows` directory of your repository.

   ```yaml copy
   name: Java CI with Gradle

   on:
     push:
       branches: [ "main" ]
     pull_request:
       branches: [ "main" ]

   permissions:
     contents: read

   jobs:
     build:
       runs-on: ubuntu-latest
       steps:
       - uses: {% data reusables.actions.action-checkout %}
       - name: Set up JDK 17
         uses: {% data reusables.actions.action-setup-java %}
         with:
           java-version: '17'
           distribution: 'temurin'

       - name: Setup Gradle
         uses: gradle/actions/setup-gradle@af1da67850ed9a4cedd57bfd976089dd991e2582 # v4.0.0

       - name: Build with Gradle
         run: ./gradlew build
   ```

{%- endif %}
{% data reusables.actions.gradle-workflow-steps %}
1. The "Build with Gradle" step executes the `build` task using the [Gradle Wrapper](https://docs.gradle.org/current/userguide/gradle_wrapper.html).

1. Edit the workflow as required. For example, change the Java version.

   {% indented_data_reference reusables.actions.third-party-actions spaces=3 %}

1. Click **Commit changes**.

{% ifversion fpt or ghec %}
   The `gradle.yml` workflow file is added to the `.github/workflows` directory of your repository.
{% endif %}

{% data reusables.actions.java-jvm-architecture %}

## Building and testing your code

You can use the same commands that you use locally to build and test your code.

The workflow template will run the `build` task by default. In the default Gradle configuration, this command will download dependencies, build classes, run tests, and package classes into their distributable format, for example, a JAR file.

If you use different commands to build your project, or you want to use a different task, you can specify those. For example, you may want to run the `package` task that's configured in your _ci.gradle_ file.

```yaml copy
steps:
  - uses: {% data reusables.actions.action-checkout %}
  - uses: {% data reusables.actions.action-setup-java %}
    with:
      java-version: '17'
      distribution: 'temurin'

  - name: Setup Gradle
    uses: gradle/actions/setup-gradle@af1da67850ed9a4cedd57bfd976089dd991e2582 # v4.0.0

  - name: Build with Gradle
    run: ./gradlew -b ci.gradle package
```

{% ifversion actions-caching %}

## Caching dependencies

Your build dependencies can be cached to speed up your workflow runs. After a successful run, `gradle/actions/setup-gradle` caches important parts of the Gradle user home directory. In future jobs, the cache will be restored so that build scripts won't need to be recompiled and dependencies won't need to be downloaded from remote package repositories.

Caching is enabled by default when using the `gradle/actions/setup-gradle` action. For more information, see [`gradle/actions/setup-gradle`](https://github.com/gradle/actions/blob/main/setup-gradle/README.md#caching-build-state-between-jobs).

{% endif %}

## Packaging workflow data as artifacts

After your build has succeeded and your tests have passed, you may want to upload the resulting Java packages as a build artifact. This will store the built packages as part of the workflow run, and allow you to download them. Artifacts can help you test and debug pull requests in your local environment before they're merged. For more information, see "[AUTOTITLE](/actions/using-workflows/storing-workflow-data-as-artifacts)."

Gradle will usually create output files like JARs, EARs, or WARs in the `build/libs` directory. You can upload the contents of that directory using the `upload-artifact` action.

```yaml copy
steps:
  - uses: {% data reusables.actions.action-checkout %}
  - uses: {% data reusables.actions.action-setup-java %}
    with:
      java-version: '17'
      distribution: 'temurin'

  - name: Setup Gradle
    uses: gradle/actions/setup-gradle@af1da67850ed9a4cedd57bfd976089dd991e2582 # v4.0.0

  - name: Build with Gradle
    run: ./gradlew build

  - name: Upload build artifacts
    uses: {% data reusables.actions.action-upload-artifact %}
    with:
      name: Package
      path: build/libs
```
