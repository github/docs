---
title: Building and testing Java with Maven
intro: You can create a continuous integration (CI) workflow in GitHub Actions to build and test your Java project with Maven.
redirect_from:
  - /actions/language-and-framework-guides/building-and-testing-java-with-maven
  - /actions/guides/building-and-testing-java-with-maven
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - CI
  - Java
  - Maven
shortTitle: Build & test Java with Maven
---

{% data reusables.actions.enterprise-github-hosted-runners %}

## Introduction

This guide shows you how to create a workflow that performs continuous integration (CI) for your Java project using the Maven software project management tool. The workflow you create will allow you to see when commits to a pull request cause build or test failures against your default branch; this approach can help ensure that your code is always healthy. You can extend your CI workflow to {% ifversion actions-caching %}cache files and{% endif %} upload artifacts from a workflow run.

{% ifversion ghae %}
{% data reusables.actions.self-hosted-runners-software %}
{% else %}
{% data variables.product.prodname_dotcom %}-hosted runners have a tools cache with pre-installed software, which includes Java Development Kits (JDKs) and Maven. For a list of software and the pre-installed versions for JDK and Maven, see "[AUTOTITLE](/actions/using-github-hosted-runners/about-github-hosted-runners#supported-software)".
{% endif %}

## Prerequisites

You should be familiar with YAML and the syntax for {% data variables.product.prodname_actions %}. For more information, see:
- "[AUTOTITLE](/actions/using-workflows/workflow-syntax-for-github-actions)"
- "[AUTOTITLE](/actions/learn-github-actions)"

We recommend that you have a basic understanding of Java and the Maven framework. For more information, see the [Maven Getting Started Guide](https://maven.apache.org/guides/getting-started/index.html) in the Maven documentation.

{% data reusables.actions.enterprise-setup-prereq %}

## Using a Maven starter workflow

{% data reusables.actions.starter-workflow-get-started %}

{% data variables.product.prodname_dotcom %} provides a starter workflow for Maven that should work for most Java with Maven projects. The subsequent sections of this guide give examples of how you can customize this starter workflow.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.actions.new-starter-workflow %}
1. The "{% ifversion actions-starter-template-ui %}Choose a workflow{% else %}Choose a workflow template{% endif %}" page shows a selection of recommended starter workflows. Search for "Java with Maven".
1. On the "Java with Maven" workflow, click {% ifversion actions-starter-template-ui %}**Configure**{% else %}**Set up this workflow**{% endif %}.

{%- ifversion ghes or ghae %}

   If you don't find the "Java with Maven" starter workflow, copy the following workflow code to a new file called `maven.yml` in the `.github/workflows` directory of your repository.

   ```yaml copy
   name: Java CI with Maven

   on:
     push:
       branches: [ "main" ]
     pull_request:
       branches: [ "main" ]

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
           cache: maven
       - name: Build with Maven
         run: mvn -B package --file pom.xml

       # Optional: Uploads the full dependency graph to GitHub to improve the quality of Dependabot alerts this repository can receive
       - name: Update dependency graph
         uses: advanced-security/maven-dependency-submission-action@571e99aab1055c2e71a1e2309b9691de18d6b7d6
   ```

{%- endif %}

1. Edit the workflow as required. For example, change the Java version.
1. Click **Commit changes**.

{% ifversion fpt or ghec %}
   The `maven.yml` workflow file is added to the `.github/workflows` directory of your repository.
{% endif %}

{% data reusables.actions.java-jvm-architecture %}

## Building and testing your code

You can use the same commands that you use locally to build and test your code.

The starter workflow will run the `package` target by default. In the default Maven configuration, this command will download dependencies, build classes, run tests, and package classes into their distributable format, for example, a JAR file.

If you use different commands to build your project, or you want to use a different target, you can specify those. For example, you may want to run the `verify` target that's configured in a _pom-ci.xml_ file.

```yaml copy
steps:
  - uses: {% data reusables.actions.action-checkout %}
  - uses: {% data reusables.actions.action-setup-java %}
    with:
      java-version: '17'
      distribution: 'temurin'
  - name: Run the Maven verify phase
    run: mvn --batch-mode --update-snapshots verify
```

{% ifversion actions-caching %}

## Caching dependencies

You can cache your dependencies to speed up your workflow runs. After a successful run, your local Maven repository will be stored in a cache. In future workflow runs, the cache will be restored so that dependencies don't need to be downloaded from remote Maven repositories. You can cache dependencies simply using the [`setup-java` action](https://github.com/marketplace/actions/setup-java-jdk) or can use [`cache` action](https://github.com/actions/cache) for custom and more advanced configuration.

```yaml copy
steps:
  - uses: {% data reusables.actions.action-checkout %}
  - name: Set up JDK 11
    uses: {% data reusables.actions.action-setup-java %}
    with:
      java-version: '17'
      distribution: 'temurin'
      cache: maven
  - name: Build with Maven
    run: mvn --batch-mode --update-snapshots verify
```

This workflow will save the contents of your local Maven repository, located in the `.m2` directory of the runner's home directory. The cache key will be the hashed contents of _pom.xml_, so changes to _pom.xml_ will invalidate the cache.

{% endif %}

## Packaging workflow data as artifacts

After your build has succeeded and your tests have passed, you may want to upload the resulting Java packages as a build artifact. This will store the built packages as part of the workflow run, and allow you to download them. Artifacts can help you test and debug pull requests in your local environment before they're merged. For more information, see "[AUTOTITLE](/actions/using-workflows/storing-workflow-data-as-artifacts)."

Maven will usually create output files like JARs, EARs, or WARs in the `target` directory. To upload those as artifacts, you can copy them into a new directory that contains artifacts to upload. For example, you can create a directory called `staging`. Then you can upload the contents of that directory using the `upload-artifact` action.

```yaml copy
steps:
  - uses: {% data reusables.actions.action-checkout %}
  - uses: {% data reusables.actions.action-setup-java %}
    with:
      java-version: '17'
      distribution: 'temurin'
  - run: mvn --batch-mode --update-snapshots verify
  - run: mkdir staging && cp target/*.jar staging
  - uses: {% data reusables.actions.action-upload-artifact %}
    with:
      name: Package
      path: staging
```
