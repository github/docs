---
title: About packaging with GitHub Actions
intro: 'You can set up workflows in {% data variables.product.prodname_actions %} to produce packages and upload them to {% data variables.product.prodname_registry %} or another package hosting provider.'
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /actions/automating-your-workflow-with-github-actions/about-packaging-with-github-actions
  - /actions/publishing-packages-with-github-actions/about-packaging-with-github-actions
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### About packaging steps

A packaging step is a common part of a continuous integration or continuous delivery workflow. After building and testing your application, a runnable or deployable artifact is produced in the form of a package. For example, a continuous integration workflow for a Java project may run `mvn package` to produce a JAR file. Or, a CI workflow for a Node.js application may create a Docker container.

Depending on the kind of application you're building, this package can be downloaded locally for manual testing, made available for users to download, or deployed to a staging or production environment.

### Packaging in continuous integration workflows

Creating a package at the end of a continuous integration workflow can help during code reviews on a pull request. After building and testing your code, a packaging step can produce a runnable or deployable artifact. Your workflow can then take that artifact and upload it as part of the workflow.

Now, when reviewing a pull request, you'll be able to look at the workflow run and download the artifact that was produced.

![Download artifact drop-down menu](/assets/images/help/repository/artifact-drop-down.png)

This will let you run the code in the pull request on your machine, which can help with debugging or testing the pull request.

### Workflows for publishing packages

In addition to uploading packaging artifacts for testing in a continuous integration workflow, you can create workflows that build your project and publish packages to a package registry.

* **Publish packages to {% data variables.product.prodname_registry %}**
  {% data variables.product.prodname_registry %} can act as a package hosting service for many types of packages. You can choose to share your packages with all of {% data variables.product.prodname_dotcom %}, or private packages to share with collaborators or an organization. For more information, see "[About {% data variables.product.prodname_registry %}](/github/managing-packages-with-github-packages/about-github-packages)."

  You may want to publish packages to {% data variables.product.prodname_registry %} on every push into the default branch. This will allow developers on your project to always be able to run and test the latest build out of master easily, by installing it from {% data variables.product.prodname_registry %}.

* **Publish packages to a package registry**  
  For many projects, publishing to a package registry is performed whenever a new version of a project is released. For example, a project that produces a JAR file may upload new releases to the Maven Central repository. Or, a .NET project may produce a nuget package and upload it to the NuGet Gallery.

  You can automate this by creating a workflow that publishes packages to a package registry on every release creation. For more information, see "[Creating releases](/github/administering-a-repository/creating-releases)."

### Дополнительная литература

- "[Publishing Node.js packages](/actions/automating-your-workflow-with-github-actions/publishing-nodejs-packages)"
