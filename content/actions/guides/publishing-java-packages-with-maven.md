---
title: Publishing Java packages with Maven
intro: You can use Maven to publish Java packages to a registry as part of your continuous integration (CI) workflow.
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /actions/language-and-framework-guides/publishing-java-packages-with-maven
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
type: tutorial
topics:
  - Packaging
  - Publishing
  - Java
  - Maven
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

## Introduction

{% data reusables.github-actions.publishing-java-packages-intro %}

## Prerequisites

We recommend that you have a basic understanding of workflow files and configuration options. For more information, see "[Learn {% data variables.product.prodname_actions %}](/actions/learn-github-actions)."

For more information about creating a CI workflow for your Java project with Maven, see "[Building and testing Java with Maven](/actions/language-and-framework-guides/building-and-testing-java-with-maven)."

You may also find it helpful to have a basic understanding of the following:

- "[Working with the npm registry](/packages/working-with-a-github-packages-registry/working-with-the-npm-registry)"
- "[Environment variables](/actions/reference/environment-variables)"
- "[Encrypted secrets](/actions/reference/encrypted-secrets)"
- "[Authentication in a workflow](/actions/reference/authentication-in-a-workflow)"

## About package configuration

The `groupId` and `artifactId` fields in the _pom.xml_ file create a unique identifier for your package that registries use to link your package to a registry.  For more information see [Guide to uploading artifacts to the Central Repository](http://maven.apache.org/repository/guide-central-repository-upload.html) in the Apache Maven documentation.

The _pom.xml_ file also contains configuration for the distribution management repositories that Maven will deploy packages to. Each repository must have a name and a deployment URL. Authentication for these repositories can be configured in the _.m2/settings.xml_ file in the home directory of the user running Maven.

You can use the `setup-java` action to configure the deployment repository as well as authentication for that repository. For more information, see [`setup-java`](https://github.com/actions/setup-java).

## Publishing packages to the Maven Central Repository

Each time you create a new release, you can trigger a workflow to publish your package. The workflow in the example below runs when the `release` event triggers with type `created`. The workflow publishes the package to the Maven Central Repository if CI tests pass. For more information on the `release` event, see "[Events that trigger workflows](/actions/reference/events-that-trigger-workflows#release)."

In this workflow, you can use the `setup-java` action. This action installs the given version of the JDK into the `PATH`, but it also configures a Maven _settings.xml_ for publishing packages. By default, the settings file will be configured for {% data variables.product.prodname_registry %}, but it can be configured to deploy to another package registry, such as the Maven Central Repository. If you already have a distribution management repository configured in _pom.xml_, then you can specify that `id` during the `setup-java` action invocation.

For example, if you were deploying to the Maven Central Repository through the OSSRH hosting project, your _pom.xml_ could specify a distribution management repository with the `id` of `ossrh`.

{% raw %}
```xml{:copy}
<project ...>
  ...
  <distributionManagement>
    <repository>
      <id>ossrh</id>
      <name>Central Repository OSSRH</name>
      <url>https://oss.sonatype.org/service/local/staging/deploy/maven2/</url>
    </repository>
  </distributionManagement>
</project>
```
{% endraw %}

With this configuration, you can create a workflow that publishes your package to the Maven Central Repository by specifying the repository management `id` to the `setup-java` action. You’ll also need to provide environment variables that contain the username and password to authenticate to the repository.

In the deploy step, you’ll need to set the environment variables to the username that you authenticate with to the repository, and to a secret that you’ve configured with the password or token to authenticate with.  For more information, see "[Creating and using encrypted secrets](/github/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)."


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
      - name: Set up Maven Central Repository
        uses: actions/setup-java@v2
        with:
          java-version: '11'
          distribution: 'adopt'
          server-id: ossrh
          server-username: MAVEN_USERNAME
          server-password: MAVEN_PASSWORD
      - name: Publish package
        run: mvn --batch-mode deploy
        env:
          MAVEN_USERNAME: ${{ secrets.OSSRH_USERNAME }}
          MAVEN_PASSWORD: ${{ secrets.OSSRH_TOKEN }}
```
{% endraw %}

This workflow performs the following steps:

1. Checks out a copy of project's repository.
1. Sets up the Java JDK, and also configures the Maven _settings.xml_ file to add authentication for the `ossrh` repository using the `MAVEN_USERNAME` and `MAVEN_PASSWORD` environment variables.
1. {% data reusables.github-actions.publish-to-maven-workflow-step %}

   For more information about using secrets in your workflow, see "[Creating and using encrypted secrets](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)."

## Publishing packages to {% data variables.product.prodname_registry %}

Each time you create a new release, you can trigger a workflow to publish your package. The workflow in the example below runs when the `release` event triggers with type `created`. The workflow publishes the package to {% data variables.product.prodname_registry %} if CI tests pass. For more information on the `release` event, see "[Events that trigger workflows](/actions/reference/events-that-trigger-workflows#release)."

In this workflow, you can use the `setup-java` action. This action installs the given version of the JDK into the `PATH`, and also sets up a Maven _settings.xml_ for publishing the package to {% data variables.product.prodname_registry %}. The generated _settings.xml_ defines authentication for a server with an `id` of `github`, using the `GITHUB_ACTOR` environment variable as the username and the `GITHUB_TOKEN` environment variable as the password. The `GITHUB_TOKEN` environment variable is assigned the value of the special `GITHUB_TOKEN` secret.

{% data reusables.github-actions.github-token-permissions %}

For a Maven-based project, you can make use of these settings by creating a distribution repository in your _pom.xml_ file with an `id` of `github` that points to your {% data variables.product.prodname_registry %} endpoint.

For example, if your organization is named "octocat" and your repository is named "hello-world", then the {% data variables.product.prodname_registry %} configuration in _pom.xml_ would look similar to the below example.

{% raw %}
```xml{:copy}
<project ...>
  ...
  <distributionManagement>
    <repository>
      <id>github</id>
      <name>GitHub Packages</name>
      <url>https://maven.pkg.github.com/octocat/hello-world</url>
    </repository>
  </distributionManagement>
</project>
```
{% endraw %}

With this configuration, you can create a workflow that publishes your package to {% data variables.product.prodname_registry %} by making use of the automatically generated _settings.xml_.

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
        run: mvn --batch-mode deploy
        env:
          GITHUB_TOKEN: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
```

This workflow performs the following steps:

1. Checks out a copy of project's repository.
1. Sets up the Java JDK, and also automatically configures the Maven _settings.xml_ file to add authentication for the `github` Maven repository to use the `GITHUB_TOKEN` environment variable.
1. {% data reusables.github-actions.publish-to-packages-workflow-step %}

   For more information about using secrets in your workflow, see "[Creating and using encrypted secrets](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)."

## Publishing packages to the Maven Central Repository and {% data variables.product.prodname_registry %}

You can publish your packages to both the Maven Central Repository and {% data variables.product.prodname_registry %} by using the `setup-java` action for each registry.

Ensure your _pom.xml_ file includes a distribution management repository for both your {% data variables.product.prodname_dotcom %} repository and your Maven Central Repository provider. For example, if you deploy to the Central Repository through the OSSRH hosting project, you might want to specify it in a distribution management repository with the `id` set to `ossrh`, and you might want to specify {% data variables.product.prodname_registry %} in a distribution management repository with the `id` set to `github`.

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
      - name: Set up Java for publishing to Maven Central Repository
        uses: actions/setup-java@v2
        with:
          java-version: '11'
          distribution: 'adopt'
          server-id: ossrh
          server-username: MAVEN_USERNAME
          server-password: MAVEN_PASSWORD
      - name: Publish to the Maven Central Repository
        run: mvn --batch-mode deploy
        env:{% raw %}
          MAVEN_USERNAME: ${{ secrets.OSSRH_USERNAME }}
          MAVEN_PASSWORD: ${{ secrets.OSSRH_TOKEN }}
      - name: Set up Java for publishing to GitHub Packages
        uses: actions/setup-java@v2
        with:
          java-version: '11'
          distribution: 'adopt'
      - name: Publish to GitHub Packages
        run: mvn --batch-mode deploy
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}{% endraw %}
```

This workflow calls the `setup-java` action twice.  Each time the `setup-java` action runs, it overwrites the Maven _settings.xml_ file for publishing packages.  For authentication to the repository, the _settings.xml_ file references the distribution management repository `id`, and the username and password.

This workflow performs the following steps:

1. Checks out a copy of project's repository.
1. Calls `setup-java` the first time. This configures the Maven _settings.xml_ file for the `ossrh` repository, and sets the authentication options to environment variables that are defined in the next step.
1. {% data reusables.github-actions.publish-to-maven-workflow-step %}
1. Calls `setup-java` the second time. This automatically configures the Maven _settings.xml_ file for {% data variables.product.prodname_registry %}.
1. {% data reusables.github-actions.publish-to-packages-workflow-step %}

   For more information about using secrets in your workflow, see "[Creating and using encrypted secrets](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)."
