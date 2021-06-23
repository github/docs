---
title: Publishing Java packages with Gradle
intro: You can use Gradle to publish Java packages to a registry as part of your continuous integration (CI) workflow.
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /actions/language-and-framework-guides/publishing-java-packages-with-gradle
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
type: tutorial
topics:
  - Packaging
  - Publishing
  - Java
  - Gradle
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

## Introduction

{% data reusables.github-actions.publishing-java-packages-intro %}

## Prerequisites

We recommend that you have a basic understanding of workflow files and configuration options. For more information, see "[Learn {% data variables.product.prodname_actions %}](/actions/learn-github-actions)."

For more information about creating a CI workflow for your Java project with Gradle, see "[Building and testing Java with Gradle](/actions/language-and-framework-guides/building-and-testing-java-with-gradle)."

You may also find it helpful to have a basic understanding of the following:

- "[Working with the npm registry](/packages/working-with-a-github-packages-registry/working-with-the-npm-registry)"
- "[Environment variables](/actions/reference/environment-variables)"
- "[Encrypted secrets](/actions/reference/encrypted-secrets)"
- "[Authentication in a workflow](/actions/reference/authentication-in-a-workflow)"

## About package configuration

The `groupId` and `artifactId` fields in the `MavenPublication` section of the _build.gradle_ file create a unique identifier for your package that registries use to link your package to a registry.  This is similar to the `groupId` and `artifactId` fields of the Maven _pom.xml_ file.  For more information, see the "[Maven Publish Plugin](https://docs.gradle.org/current/userguide/publishing_maven.html)" in the Gradle documentation.

The _build.gradle_ file also contains configuration for the distribution management repositories that Gradle will publish packages to. Each repository must have a name, a deployment URL, and credentials for authentication.

## Publishing packages to the Maven Central Repository

Each time you create a new release, you can trigger a workflow to publish your package. The workflow in the example below runs when the `release` event triggers with type `created`. The workflow publishes the package to the Maven Central Repository if CI tests pass. For more information on the `release` event, see "[Events that trigger workflows](/actions/reference/events-that-trigger-workflows#release)."

You can define a new Maven repository in the publishing block of your _build.gradle_ file that points to your package repository.  For example, if you were deploying to the Maven Central Repository through the OSSRH hosting project, your _build.gradle_ could specify a repository with the name `"OSSRH"`.

{% raw %}
```groovy{:copy}
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

With this configuration, you can create a workflow that publishes your package to the Maven Central Repository by running the `gradle publish` command. You’ll also need to provide environment variables that contain the username and password to authenticate to the repository.

In the deploy step, you’ll need to set environment variables for the username and password or token that you use to authenticate to the Maven repository. For more information, see "[Creating and using encrypted secrets](/github/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)."


{% raw %}
```yaml{:copy}
name: Publish package to the Maven Central Repository
on:
  release:
    types: [created]
jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Set up Java
        uses: actions/setup-java@v2
        with:
          java-version: '11'
          distribution: 'adopt'
      - name: Publish package
        run: gradle publish
        env:
          MAVEN_USERNAME: ${{ secrets.OSSRH_USERNAME }}
          MAVEN_PASSWORD: ${{ secrets.OSSRH_TOKEN }}
```
{% endraw %}

{% data reusables.github-actions.gradle-workflow-steps %}
1. Runs the `gradle publish` command to publish to the `OSSRH` Maven repository. The `MAVEN_USERNAME` environment variable will be set with the contents of your `OSSRH_USERNAME` secret, and the `MAVEN_PASSWORD` environment variable will be set with the contents of your `OSSRH_TOKEN` secret.

   For more information about using secrets in your workflow, see "[Creating and using encrypted secrets](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)."

## Publishing packages to {% data variables.product.prodname_registry %}

Each time you create a new release, you can trigger a workflow to publish your package. The workflow in the example below runs when the `release` event triggers with type `created`. The workflow publishes the package to {% data variables.product.prodname_registry %} if CI tests pass. For more information on the `release` event, see "[Events that trigger workflows](/actions/reference/events-that-trigger-workflows#release)."

You can define a new Maven repository in the publishing block of your _build.gradle_ that points to {% data variables.product.prodname_registry %}.  In that repository configuration, you can also take advantage of environment variables set in your CI workflow run.  You can use the `GITHUB_ACTOR` environment variable as a username, and you can set the `GITHUB_TOKEN` environment variable with your `GITHUB_TOKEN` secret.

{% data reusables.github-actions.github-token-permissions %}

For example, if your organization is named "octocat" and your repository is named "hello-world", then the {% data variables.product.prodname_registry %} configuration in _build.gradle_ would look similar to the below example.

{% raw %}
```groovy{:copy}
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

With this configuration, you can create a workflow that publishes your package to the Maven Central Repository by running the `gradle publish` command.

```yaml{:copy}
name: Publish package to GitHub Packages
on:
  release:
    types: [created]
jobs:
  publish:
    runs-on: ubuntu-latest {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
    permissions: 
      contents: read
      packages: write {% endif %}
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-java@v2
        with:
          java-version: '11'
          distribution: 'adopt'
      - name: Publish package
        run: gradle publish
        env:
          GITHUB_TOKEN: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
```

{% data reusables.github-actions.gradle-workflow-steps %}
1. Runs the `gradle publish` command to publish to {% data variables.product.prodname_registry %}. The `GITHUB_TOKEN` environment variable will be set with the content of the `GITHUB_TOKEN` secret. {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}The `permissions` key specifies the access that the `GITHUB_TOKEN` secret will allow.{% endif %}

   For more information about using secrets in your workflow, see "[Creating and using encrypted secrets](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)."

## Publishing packages to the Maven Central Repository and {% data variables.product.prodname_registry %}

You can publish your packages to both the Maven Central Repository and {% data variables.product.prodname_registry %} by configuring each in your _build.gradle_ file.

Ensure your _build.gradle_ file includes a repository for both your {% data variables.product.prodname_dotcom %} repository and your Maven Central Repository provider.

For example, if you deploy to the Central Repository through the OSSRH hosting project, you might want to specify it in a distribution management repository with the `name` set to `OSSRH`. If you deploy to {% data variables.product.prodname_registry %}, you might want to specify it in a distribution management repository with the `name` set to `GitHubPackages`.

If your organization is named "octocat" and your repository is named "hello-world", then the {% data variables.product.prodname_registry %} configuration in _build.gradle_ would look similar to the below example.

{% raw %}
```groovy{:copy}
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

```yaml{:copy}
name: Publish package to the Maven Central Repository and GitHub Packages
on:
  release:
    types: [created]
jobs:
  publish:
    runs-on: ubuntu-latest {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
    permissions: 
      contents: read
      packages: write {% endif %}
    steps:
      - uses: actions/checkout@v2
      - name: Set up Java
        uses: actions/setup-java@v2
        with:
          java-version: '11'
          distribution: 'adopt'
      - name: Publish to the Maven Central Repository
        run: gradle publish
        env: {% raw %}
          MAVEN_USERNAME: ${{ secrets.OSSRH_USERNAME }}
          MAVEN_PASSWORD: ${{ secrets.OSSRH_TOKEN }}
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}{% endraw %}
```

{% data reusables.github-actions.gradle-workflow-steps %}
1. Runs the `gradle publish` command to publish to the `OSSRH` Maven repository and {% data variables.product.prodname_registry %}. The `MAVEN_USERNAME` environment variable will be set with the contents of your `OSSRH_USERNAME` secret, and the `MAVEN_PASSWORD` environment variable will be set with the contents of your `OSSRH_TOKEN` secret. The `GITHUB_TOKEN` environment variable will be set with the content of the `GITHUB_TOKEN` secret. {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}The `permissions` key specifies the access that the `GITHUB_TOKEN` secret will allow.{% endif %}

   For more information about using secrets in your workflow, see "[Creating and using encrypted secrets](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)."
