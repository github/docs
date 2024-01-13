---
title: Building and testing Java with Ant
intro: You can create a continuous integration (CI) workflow in GitHub Actions to build and test your Java project with Ant.
redirect_from:
  - /actions/language-and-framework-guides/building-and-testing-java-with-ant
  - /actions/guides/building-and-testing-java-with-ant
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - CI
  - Java
  - Ant
shortTitle: Build & test Java & Ant
---

{% data reusables.actions.enterprise-github-hosted-runners %}

## Introduction

This guide shows you how to create a workflow that performs continuous integration (CI) for your Java project using the Ant build system. The workflow you create will allow you to see when commits to a pull request cause build or test failures against your default branch; this approach can help ensure that your code is always healthy. You can extend your CI workflow to upload artifacts from a workflow run.

{% ifversion ghae %}
{% data reusables.actions.self-hosted-runners-software %}
{% else %}
{% data variables.product.prodname_dotcom %}-hosted runners have a tools cache with pre-installed software, which includes Java Development Kits (JDKs) and Ant. For a list of software and the pre-installed versions for JDK and Ant, see "[AUTOTITLE](/actions/using-github-hosted-runners/about-github-hosted-runners#supported-software)".
{% endif %}

## Prerequisites

You should be familiar with YAML and the syntax for {% data variables.product.prodname_actions %}. For more information, see:
- "[AUTOTITLE](/actions/using-workflows/workflow-syntax-for-github-actions)"
- "[AUTOTITLE](/actions/learn-github-actions)"

We recommend that you have a basic understanding of Java and the Ant framework. For more information, see the [Apache Ant Manual](https://ant.apache.org/manual/).

{% data reusables.actions.enterprise-setup-prereq %}

## Using an Ant starter workflow

{% data reusables.actions.starter-workflow-get-started %}

{% data variables.product.prodname_dotcom %} provides a starter workflow for Ant that should work for most Java with Ant projects. The subsequent sections of this guide give examples of how you can customize this starter workflow.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.actions.new-starter-workflow %}
1. The "{% ifversion actions-starter-template-ui %}Choose a workflow{% else %}Choose a workflow template{% endif %}" page shows a selection of recommended starter workflows. Search for "Java with Ant".
1. On the "Java with Ant" workflow, click {% ifversion actions-starter-template-ui %}**Configure**{% else %}**Set up this workflow**{% endif %}.

{%- ifversion ghes or ghae %}

   If you don't find the "Java with Ant" starter workflow, copy the following workflow code to a new file called `ant.yml` in the `.github/workflows` directory of your repository.

   ```yaml copy
   name: Java CI

   on:
     push:
       branches: [ $default-branch ]
     pull_request:
       branches: [ $default-branch ]

   jobs:
     build:
       runs-on: ubuntu-latest

       steps:
       - uses: {% data reusables.actions.action-checkout %}
       - name: Set up JDK 11
         uses: {% data reusables.actions.action-setup-java %}
         with:
           java-version: '11'
           distribution: 'temurin'
       - name: Build with Ant
         run: ant -noinput -buildfile build.xml
   ```

{%- endif %}

1. Edit the workflow as required. For example, change the Java version.
1. Click **Commit changes**.

{% ifversion fpt or ghec %}
   The `ant.yml` workflow file is added to the `.github/workflows` directory of your repository.
{% endif %}

{% data reusables.actions.java-jvm-architecture %}

## Building and testing your code

You can use the same commands that you use locally to build and test your code.

The starter workflow will run the default target specified in your _build.xml_ file.  Your default target will commonly be set to build classes, run tests and package classes into their distributable format, for example, a JAR file.

If you use different commands to build your project, or you want to run a different target, you can specify those. For example, you may want to run the `jar` target that's configured in your `_build-ci.xml_` file.

```yaml copy
steps:
  - uses: {% data reusables.actions.action-checkout %}
  - uses: {% data reusables.actions.action-setup-java %}
    with:
      java-version: '17'
      distribution: 'temurin'
  - name: Run the Ant jar target
    run: ant -noinput -buildfile build-ci.xml jar
```

## Packaging workflow data as artifacts

After your build has succeeded and your tests have passed, you may want to upload the resulting Java packages as a build artifact. This will store the built packages as part of the workflow run, and allow you to download them. Artifacts can help you test and debug pull requests in your local environment before they're merged. For more information, see "[AUTOTITLE](/actions/using-workflows/storing-workflow-data-as-artifacts)."

Ant will usually create output files like JARs, EARs, or WARs in the `build/jar` directory. You can upload the contents of that directory using the `upload-artifact` action.

```yaml copy
steps:
  - uses: {% data reusables.actions.action-checkout %}
  - uses: {% data reusables.actions.action-setup-java %}
    with:
      java-version: '17'
      distribution: 'temurin'

  - run: ant -noinput -buildfile build.xml
  - uses: {% data reusables.actions.action-upload-artifact %}
    with:
      name: Package
      path: build/jar
```
