---
title: Publishing Java packages with Gradle
shortTitle: Publish Java packages with Gradle
intro: You can use Gradle to publish Java packages to a registry as part of your continuous integration (CI) workflow.
redirect_from:
  - /actions/language-and-framework-guides/publishing-java-packages-with-gradle
  - /actions/guides/publishing-java-packages-with-gradle
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Packaging
  - Publishing
  - Java
  - Gradle
---
 
{% data reusables.actions.enterprise-github-hosted-runners %}

## Introduction

{% data reusables.actions.publishing-java-packages-intro %}

## Prerequisites

We recommend that you have a basic understanding of workflow files and configuration options. For more information, see "[AUTOTITLE](/actions/learn-github-actions)."

For more information about creating a CI workflow for your Java project with Gradle, see "[AUTOTITLE](/actions/automating-builds-and-tests/building-and-testing-java-with-gradle)."

You may also find it helpful to have a basic understanding of the following:

- "[AUTOTITLE](/packages/working-with-a-github-packages-registry/working-with-the-npm-registry)"
- "[AUTOTITLE](/actions/learn-github-actions/variables)"
- "[AUTOTITLE](/actions/security-guides/using-secrets-in-github-actions)"
- "[AUTOTITLE](/actions/security-guides/automatic-token-authentication)"

## About package configuration

The `groupId` and `artifactId` fields in the `MavenPublication` section of the _build.gradle_ file create a unique identifier for your package that registries use to link your package to a registry.  This is similar to the `groupId` and `artifactId` fields of the Maven _pom.xml_ file.  For more information, see the "[Maven Publish Plugin](https://docs.gradle.org/current/userguide/publishing_maven.html)" in the Gradle documentation.

The _build.gradle_ file also contains configuration for the distribution management repositories that Gradle will publish packages to. Each repository must have a name, a deployment URL, and credentials for authentication.

## Publishing packages to the Maven Central Repository

Each time you create a new release, you can trigger a workflow to publish your package. The workflow in the example below runs when the `release` event triggers with type `created`. The workflow publishes the package to the Maven Central Repository if CI tests pass. For more information on the `release` event, see "[AUTOTITLE](/actions/using-workflows/events-that-trigger-workflows#release)."

You can define a new Maven repository in the publishing block of your _build.gradle_ file that points to your package repository.  For example, if you were deploying to the Maven Central Repository through the OSSRH hosting project, your _build.gradle_ could specify a repository with the name `"OSSRH"`.

{% raw %}

```groovy copy
plugins {
  ...
  id 'maven-publish'
}

publishing {
  ...

  repositories {
    maven {
      name = "OSSRH"
      url = "https://oss.sonatype.org/service/local/staging/deploy/maven2/"
      credentials {
        username = System.getenv("MAVEN_USERNAME")
        password = System.getenv("MAVEN_PASSWORD")
      }
    }
  }
}
```

{% endraw %}

With this configuration, you can create a workflow that publishes your package to the Maven Central Repository by running the `gradle publish` command. In the deploy step, you’ll need to set environment variables for the username and password or token that you use to authenticate to the Maven repository. For more information, see "[AUTOTITLE](/actions/security-guides/using-secrets-in-github-actions)."

```yaml copy

{% data reusables.actions.actions-not-certified-by-github-comment %}

{% data reusables.actions.actions-use-sha-pinning-comment %}

name: Publish package to the Maven Central Repository
on:
  release:
    types: [created]
jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Set up Java
        uses: {% data reusables.actions.action-setup-java %}
        with:
          java-version: '11'
          distribution: 'temurin'
      - name: Validate Gradle wrapper
        uses: gradle/wrapper-validation-action@ccb4328a959376b642e027874838f60f8e596de3
      - name: Publish package
        uses: gradle/gradle-build-action@749f47bda3e44aa060e82d7b3ef7e40d953bd629
        with:
          arguments: publish
        env:
          MAVEN_USERNAME: {% raw %}${{ secrets.OSSRH_USERNAME }}{% endraw %}
          MAVEN_PASSWORD: {% raw %}${{ secrets.OSSRH_TOKEN }}{% endraw %}
```

{% data reusables.actions.gradle-workflow-steps %}
1. Runs the [`gradle/gradle-build-action`](https://github.com/gradle/gradle-build-action) action with the `publish` argument to publish to the `OSSRH` Maven repository. The `MAVEN_USERNAME` environment variable will be set with the contents of your `OSSRH_USERNAME` secret, and the `MAVEN_PASSWORD` environment variable will be set with the contents of your `OSSRH_TOKEN` secret.

   For more information about using secrets in your workflow, see "[AUTOTITLE](/actions/security-guides/using-secrets-in-github-actions)."

## Publishing packages to {% data variables.product.prodname_registry %}

Each time you create a new release, you can trigger a workflow to publish your package. The workflow in the example below runs when the `release` event triggers with type `created`. The workflow publishes the package to {% data variables.product.prodname_registry %} if CI tests pass. For more information on the `release` event, see "[AUTOTITLE](/actions/using-workflows/events-that-trigger-workflows#release)."

You can define a new Maven repository in the publishing block of your _build.gradle_ that points to {% data variables.product.prodname_registry %}.  In that repository configuration, you can also take advantage of environment variables set in your CI workflow run.  You can use the `GITHUB_ACTOR` environment variable as a username, and you can set the `GITHUB_TOKEN` environment variable with your `GITHUB_TOKEN` secret.

{% data reusables.actions.github-token-permissions %}

For example, if your organization is named "octocat" and your repository is named "hello-world", then the {% data variables.product.prodname_registry %} configuration in _build.gradle_ would look similar to the below example.

{% raw %}

```groovy copy
plugins {
  ...
  id 'maven-publish'
}

publishing {
  ...

  repositories {
    maven {
      name = "GitHubPackages"
      url = "https://maven.pkg.github.com/octocat/hello-world"
      credentials {
        username = System.getenv("GITHUB_ACTOR")
        password = System.getenv("GITHUB_TOKEN")
      }
    }
  }
}
```

{% endraw %}

With this configuration, you can create a workflow that publishes your package to {% data variables.product.prodname_registry %} by running the `gradle publish` command.

```yaml copy

{% data reusables.actions.actions-not-certified-by-github-comment %}

{% data reusables.actions.actions-use-sha-pinning-comment %}

name: Publish package to GitHub Packages
on:
  release:
    types: [created]
jobs:
  publish:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      packages: write
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - uses: {% data reusables.actions.action-setup-java %}
        with:
          java-version: '11'
          distribution: 'temurin'
      - name: Validate Gradle wrapper
        uses: gradle/wrapper-validation-action@ccb4328a959376b642e027874838f60f8e596de3
      - name: Publish package
        uses: gradle/gradle-build-action@749f47bda3e44aa060e82d7b3ef7e40d953bd629
        with:
          arguments: publish
        env:
          GITHUB_TOKEN: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
```

{% data reusables.actions.gradle-workflow-steps %}
1. Runs the [`gradle/gradle-build-action`](https://github.com/gradle/gradle-build-action) action with the `publish` argument to publish to {% data variables.product.prodname_registry %}. The `GITHUB_TOKEN` environment variable will be set with the content of the `GITHUB_TOKEN` secret. The `permissions` key specifies the access that the `GITHUB_TOKEN` secret will allow.

   For more information about using secrets in your workflow, see "[AUTOTITLE](/actions/security-guides/using-secrets-in-github-actions)."

## Publishing packages to the Maven Central Repository and {% data variables.product.prodname_registry %}

You can publish your packages to both the Maven Central Repository and {% data variables.product.prodname_registry %} by configuring each in your _build.gradle_ file.

Ensure your _build.gradle_ file includes a repository for both your {% data variables.product.prodname_dotcom %} repository and your Maven Central Repository provider.

For example, if you deploy to the Central Repository through the OSSRH hosting project, you might want to specify it in a distribution management repository with the `name` set to `OSSRH`. If you deploy to {% data variables.product.prodname_registry %}, you might want to specify it in a distribution management repository with the `name` set to `GitHubPackages`.

If your organization is named "octocat" and your repository is named "hello-world", then the configuration in _build.gradle_ would look similar to the below example.

{% raw %}

```groovy copy
plugins {
  ...
  id 'maven-publish'
}

publishing {
  ...

  repositories {
    maven {
      name = "OSSRH"
      url = "https://oss.sonatype.org/service/local/staging/deploy/maven2/"
      credentials {
        username = System.getenv("MAVEN_USERNAME")
        password = System.getenv("MAVEN_PASSWORD")
      }
    }
    maven {
      name = "GitHubPackages"
      url = "https://maven.pkg.github.com/octocat/hello-world"
      credentials {
        username = System.getenv("GITHUB_ACTOR")
        password = System.getenv("GITHUB_TOKEN")
      }
    }
  }
}
```

{% endraw %}

With this configuration, you can create a workflow that publishes your package to both the Maven Central Repository and {% data variables.product.prodname_registry %} by running the `gradle publish` command.

```yaml copy

{% data reusables.actions.actions-not-certified-by-github-comment %}

{% data reusables.actions.actions-use-sha-pinning-comment %}

name: Publish package to the Maven Central Repository and GitHub Packages
on:
  release:
    types: [created]
jobs:
  publish:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      packages: write
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Set up Java
        uses: {% data reusables.actions.action-setup-java %}
        with:
          java-version: '11'
          distribution: 'temurin'
      - name: Validate Gradle wrapper
        uses: gradle/wrapper-validation-action@ccb4328a959376b642e027874838f60f8e596de3
      - name: Publish package
        uses: gradle/gradle-build-action@749f47bda3e44aa060e82d7b3ef7e40d953bd629
        with:
          arguments: publish
        env: {% raw %}
          MAVEN_USERNAME: ${{ secrets.OSSRH_USERNAME }}
          MAVEN_PASSWORD: ${{ secrets.OSSRH_TOKEN }}
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}{% endraw %}
```

{% data reusables.actions.gradle-workflow-steps %}
1. Runs the [`gradle/gradle-build-action`](https://github.com/gradle/gradle-build-action) action with the `publish` argument to publish to the `OSSRH` Maven repository and {% data variables.product.prodname_registry %}. The `MAVEN_USERNAME` environment variable will be set with the contents of your `OSSRH_USERNAME` secret, and the `MAVEN_PASSWORD` environment variable will be set with the contents of your `OSSRH_TOKEN` secret. The `GITHUB_TOKEN` environment variable will be set with the content of the `GITHUB_TOKEN` secret. The `permissions` key specifies the access that the `GITHUB_TOKEN` secret will allow.

   For more information about using secrets in your workflow, see "[AUTOTITLE](/actions/security-guides/using-secrets-in-github-actions)."
