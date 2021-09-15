---
title: Building and testing Java with Maven
intro: You can create a continuous integration (CI) workflow in GitHub Actions to build and test your Java project with Maven.
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /actions/language-and-framework-guides/building-and-testing-java-with-maven
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
type: tutorial
topics:
  - CI
  - Java
  - Maven
shortTitle: Build & test Java with Maven
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

## Introduction

This guide shows you how to create a workflow that performs continuous integration (CI) for your Java project using the Maven software project management tool. The workflow you create will allow you to see when commits to a pull request cause build or test failures against your default branch; this approach can help ensure that your code is always healthy. You can extend your CI workflow to cache files and upload artifacts from a workflow run.

{% ifversion ghae %}For instructions on how to make sure your {% data variables.actions.hosted_runner %} has the required software installed, see "[Creating custom images](/actions/using-github-hosted-runners/creating-custom-images)."
{% else %}
{% data variables.product.prodname_dotcom %}-hosted runners have a tools cache with pre-installed software, which includes Java Development Kits (JDKs) and Maven. For a list of software and the pre-installed versions for JDK and Maven, see "[Specifications for {% data variables.product.prodname_dotcom %}-hosted runners](/actions/reference/specifications-for-github-hosted-runners/#supported-software)".
{% endif %}

## Prerequisites

You should be familiar with YAML and the syntax for {% data variables.product.prodname_actions %}. For more information, see:
- "[Workflow syntax for {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions)"
- "[Learn {% data variables.product.prodname_actions %}](/actions/learn-github-actions)"

We recommend that you have a basic understanding of Java and the Maven framework. For more information, see the [Maven Getting Started Guide](http://maven.apache.org/guides/getting-started/index.html) in the Maven documentation.

{% data reusables.actions.enterprise-setup-prereq %}

## Starting with a Maven workflow template

{% data variables.product.prodname_dotcom %} provides a Maven workflow template that will work for most Maven-based Java projects. For more information, see the [Maven workflow template](https://github.com/actions/starter-workflows/blob/main/ci/maven.yml).

To get started quickly, you can choose the preconfigured Maven template when you create a new workflow. For more information, see the "[{% data variables.product.prodname_actions %} quickstart](/actions/quickstart)."

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
      - name: Build with Maven
        run: mvn --batch-mode --update-snapshots verify
```
{% endraw %}

This workflow performs the following steps:

1. The `checkout` step downloads a copy of your repository on the runner.
2. The `setup-java` step configures the Java 11 JDK by Adoptium.
3. The "Build with Maven" step runs the Maven `package` target in non-interactive mode to ensure that your code builds, tests pass, and a package can be created.

The default workflow templates are excellent starting points when creating your build and test workflow, and you can customize the template to suit your project’s needs.

{% data reusables.github-actions.example-github-runner %}

{% data reusables.github-actions.java-jvm-architecture %}

## Building and testing your code

You can use the same commands that you use locally to build and test your code.

The starter workflow will run the `package` target by default. In the default Maven configuration, this command will download dependencies, build classes, run tests, and package classes into their distributable format, for example, a JAR file.

If you use different commands to build your project, or you want to use a different target, you can specify those. For example, you may want to run the `verify` target that's configured in a _pom-ci.xml_ file.

{% raw %}
```yaml{:copy}
steps:
  - uses: actions/checkout@v2
  - uses: actions/setup-java@v2
    with:
      java-version: '11'
      distribution: 'adopt'
  - name: Run the Maven verify phase
    run: mvn --batch-mode --update-snapshots verify
```
{% endraw %}

## Caching dependencies

When using {% data variables.product.prodname_dotcom %}-hosted runners, you can cache your dependencies to speed up your workflow runs. After a successful run, your local Maven repository will be stored on GitHub Actions infrastructure. In future workflow runs, the cache will be restored so that dependencies don't need to be downloaded from remote Maven repositories. You can cache dependencies simply using the [`setup-java` action](https://github.com/marketplace/actions/setup-java-jdk) or can use [`cache` action](https://github.com/actions/cache) for custom and more advanced configuration. 

{% raw %}
```yaml{:copy}
steps:
  - uses: actions/checkout@v2
  - name: Set up JDK 11
    uses: actions/setup-java@v2
    with:
      java-version: '11'
      distribution: 'adopt'
      cache: maven
  - name: Build with Maven
    run: mvn --batch-mode --update-snapshots verify
```
{% endraw %}

This workflow will save the contents of your local Maven repository, located in the `.m2` directory of the runner's home directory. The cache key will be the hashed contents of _pom.xml_, so changes to _pom.xml_ will invalidate the cache.

## Packaging workflow data as artifacts

After your build has succeeded and your tests have passed, you may want to upload the resulting Java packages as a build artifact. This will store the built packages as part of the workflow run, and allow you to download them. Artifacts can help you test and debug pull requests in your local environment before they're merged. For more information, see "[Persisting workflow data using artifacts](/actions/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts)."

Maven will usually create output files like JARs, EARs, or WARs in the `target` directory. To upload those as artifacts, you can copy them into a new directory that contains artifacts to upload. For example, you can create a directory called `staging`. Then you can upload the contents of that directory using the `upload-artifact` action.

{% raw %}
```yaml{:copy}
steps:
  - uses: actions/checkout@v2
  - uses: actions/setup-java@v2
    with:
      java-version: '11'
      distribution: 'adopt'
  - run: mvn --batch-mode --update-snapshots verify
  - run: mkdir staging && cp target/*.jar staging
  - uses: actions/upload-artifact@v2
    with:
      name: Package
      path: staging
```
{% endraw %}
