---
title: Building and testing Java with Ant
intro: You can create a continuous integration (CI) workflow in GitHub Actions to build and test your Java project with Ant.
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /actions/language-and-framework-guides/building-and-testing-java-with-ant
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
type: tutorial
topics:
  - CI
  - Java
  - Ant
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

### Introduction

This guide shows you how to create a workflow that performs continuous integration (CI) for your Java project using the Ant build system. The workflow you create will allow you to see when commits to a pull request cause build or test failures against your default branch; this approach can help ensure that your code is always healthy. You can extend your CI workflow to upload artifacts from a workflow run.

{% if currentVersion == "github-ae@latest" %}For instructions on how to make sure your {% data variables.actions.hosted_runner %} has the required software installed, see "[Creating custom images](/actions/using-github-hosted-runners/creating-custom-images)."
{% else %}
{% data variables.product.prodname_dotcom %}-hosted runners have a tools cache with pre-installed software, which includes Java Development Kits (JDKs) and Ant. For a list of software and the pre-installed versions for JDK and Ant, see "[Specifications for {% data variables.product.prodname_dotcom %}-hosted runners](/actions/reference/specifications-for-github-hosted-runners/#supported-software)".
{% endif %}

### Требования

You should be familiar with YAML and the syntax for {% data variables.product.prodname_actions %}. Дополнительные сведения см. в:
- "[Workflow syntax for {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions)"
- "[Learn {% data variables.product.prodname_actions %}](/actions/learn-github-actions)"

We recommend that you have a basic understanding of Java and the Ant framework. For more information, see the [Apache Ant Manual](https://ant.apache.org/manual/).

{% data reusables.actions.enterprise-setup-prereq %}

### Starting with an Ant workflow template

{% data variables.product.prodname_dotcom %} provides an Ant workflow template that will work for most Ant-based Java projects. For more information, see the [Ant workflow template](https://github.com/actions/starter-workflows/blob/main/ci/ant.yml).

To get started quickly, you can choose the preconfigured Ant template when you create a new workflow. For more information, see the "[{% data variables.product.prodname_actions %} quickstart](/actions/quickstart)."

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
      - name: Set up JDK 1.8
        uses: actions/setup-java@v1
        with:
          java-version: 1.8
      - name: Build with Ant
        run: ant -noinput -buildfile build.xml
```
{% endraw %}

This workflow performs the following steps:

1. The `checkout` step downloads a copy of your repository on the runner.
2. The `setup-java` step configures the Java 1.8 JDK.
3. The "Build with Ant" step runs the default target in your `build.xml` in non-interactive mode.

The default workflow templates are excellent starting points when creating your build and test workflow, and you can customize the template to suit your project’s needs.

{% data reusables.github-actions.example-github-runner %}

{% data reusables.github-actions.java-jvm-architecture %}

### Building and testing your code

You can use the same commands that you use locally to build and test your code.

The starter workflow will run the default target specified in your _build.xml_ file.  Your default target will commonly be set to build classes, run tests and package classes into their distributable format, for example, a JAR file.

If you use different commands to build your project, or you want to run a different target, you can specify those. For example, you may want to run the `jar` target that's configured in your _build-ci.xml_ file.

{% raw %}
```yaml{:copy}
steps:
  - uses: actions/checkout@v2
  - uses: actions/setup-java@v1
    with:
      java-version: 1.8
  - name: Run the Ant jar target
    run: ant -noinput -buildfile build-ci.xml jar
```
{% endraw %}

### Packaging workflow data as artifacts

After your build has succeeded and your tests have passed, you may want to upload the resulting Java packages as a build artifact. This will store the built packages as part of the workflow run, and allow you to download them. Artifacts can help you test and debug pull requests in your local environment before they're merged. For more information, see "[Persisting workflow data using artifacts](/actions/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts)."

Ant will usually create output files like JARs, EARs, or WARs in the `build/jar` directory. You can upload the contents of that directory using the `upload-artifact` action.

{% raw %}
```yaml{:copy}
steps:
  - uses: actions/checkout@v2
  - uses: actions/setup-java@v1
  - run: ant -noinput -buildfile build.xml
  - uses: actions/upload-artifact@v2
    with:
      name: Package
      path: build/jar
```
{% endraw %}
