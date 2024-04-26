---
title: Publishing and installing a package with GitHub Actions
intro: 'You can configure a workflow in {% data variables.product.prodname_actions %} to automatically publish or install a package from {% data variables.product.prodname_registry %}.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /github/managing-packages-with-github-packages/using-github-packages-with-github-actions
  - /packages/using-github-packages-with-your-projects-ecosystem/using-github-packages-with-github-actions
  - /packages/guides/using-github-packages-with-github-actions
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
shortTitle: Publish & install with Actions
layout: inline
---

{% data reusables.package_registry.packages-ghes-release-stage %}

## About {% data variables.product.prodname_registry %} with {% data variables.product.prodname_actions %}

{% data reusables.repositories.about-github-actions %} {% data reusables.repositories.actions-ci-cd %} For more information, see "[AUTOTITLE](/actions/learn-github-actions)."

You can extend the CI and CD capabilities of your repository by publishing or installing packages as part of your workflow.

{% ifversion packages-registries-v2 %}

### Authenticating to package registries with granular permissions

Some {% data variables.product.prodname_registry %} registries support granular permissions. This means you can choose to allow packages to be scoped to a user or an organization, or linked to a repository. For the list of registries that support granular permissions, see "[AUTOTITLE](/packages/learn-github-packages/about-permissions-for-github-packages#granular-permissions-for-userorganization-scoped-packages)."

{% data reusables.package_registry.authenticate_with_pat_for_v2_registry %}

### Authenticating to package registries with repository-scoped permissions

{% endif %}

{% ifversion packages-registries-v2 %}Some {% data variables.product.prodname_registry %} registries only support repository-scoped permissions, and do not support granular permissions. For a list of these registries, see "[AUTOTITLE](/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."

If you want your workflow to access a {% data variables.product.prodname_registry %} registry that does not support granular permissions, then{% else %}To authenticate to package registries on {% data variables.product.product_name %},{% endif %} we recommend using the `GITHUB_TOKEN` that {% data variables.product.product_name %} automatically creates for your repository when you enable {% data variables.product.prodname_actions %}. You should set the permissions for this access token in the workflow file to grant read access for the `contents` scope and write access for the `packages` scope. For forks, the `GITHUB_TOKEN` is granted read access for the parent repository. For more information, see "[AUTOTITLE](/actions/security-guides/automatic-token-authentication)."

You can reference the `GITHUB_TOKEN` in your workflow file using the {% raw %}`${{ secrets.GITHUB_TOKEN }}`{% endraw %} context. For more information, see "[AUTOTITLE](/actions/security-guides/automatic-token-authentication)."

## About permissions and package access

{% ifversion packages-registries-v2 %}

### Packages scoped to users or organizations

Registries that support granular permissions allow users to create and administer packages as free-standing resources at the organization level. Packages can be scoped to an organization or personal account and you can customize access to each of your packages separately from repository permissions.

All workflows accessing registries that support granular permissions should use the `GITHUB_TOKEN` instead of a {% data variables.product.pat_generic %}. For more information about security best practices, see "[AUTOTITLE](/actions/security-guides/security-hardening-for-github-actions#using-secrets)."

### Packages scoped to repositories

{% endif %}

When you enable GitHub Actions, GitHub installs a GitHub App on your repository. The `GITHUB_TOKEN` secret is a GitHub App installation access token. You can use the installation access token to authenticate on behalf of the GitHub App installed on your repository. The token's permissions are limited to the repository that contains your workflow. For more information, see "[AUTOTITLE](/actions/security-guides/automatic-token-authentication#about-the-github_token-secret)."

{% data variables.product.prodname_registry %} allows you to push and pull packages through the `GITHUB_TOKEN` available to a {% data variables.product.prodname_actions %} workflow.

{% ifversion packages-registries-v2 %}

## Default permissions and access settings for packages modified through workflows

For packages in registries that support granular permissions, when you create, install, modify, or delete a package through a workflow, there are some default permission and access settings used to ensure admins have access to the workflow. You can adjust these access settings as well. For the list of registries that support granular permissions, see "[AUTOTITLE](/packages/learn-github-packages/about-permissions-for-github-packages#granular-permissions-for-userorganization-scoped-packages)."

For example, by default if a workflow creates a package using the `GITHUB_TOKEN`, then:
- The package inherits the visibility and permissions model of the repository where the workflow is run.
- Repository admins where the workflow is run become the admins of the package once the package is created.

These are more examples of how default permissions work for workflows that manage packages.

| {% data variables.product.prodname_actions %} workflow task | Default permissions and access |
|----|----|
| Download an existing  | - If the package is public, any workflow running in any repository can download the package. <br> - If the package is internal, then all workflows running in any repository owned by the Enterprise account can download the package. For enterprise-owned organizations, you can read any repository in the enterprise <br> - If the package is private, only workflows running in repositories that are given read permission on that package can download the package. {% data reusables.package_registry.public-forks-private-packages %} <br>
| Upload a new version to an existing package | - If the package is private, internal, or public, only workflows running in repositories that are given write permission on that package can upload new versions to the package.
| Delete a package or versions of a package | - If the package is private, internal, or public, only workflows running in repositories that are given admin permission can delete existing versions of the package.

You can also adjust access to packages in a more granular way or adjust some of the default permissions behavior. For more information, see "[AUTOTITLE](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility)."

{% endif %}

## Publishing a package using an action

You can use {% data variables.product.prodname_actions %} to automatically publish packages as part of your continuous integration (CI) flow. This approach to continuous deployment (CD) allows you to automate the creation of new package versions, if the code meets your quality standards. For example, you could create a workflow that runs CI tests every time a developer pushes code to a particular branch. If the tests pass, the workflow can publish a new package version to {% data variables.product.prodname_registry %}.

{% data reusables.package_registry.actions-configuration %}

The following example demonstrates how you can use {% data variables.product.prodname_actions %} to build {% ifversion not fpt or ghec %}and test{% endif %} your app, and then automatically create a Docker image and publish it to {% data variables.product.prodname_registry %}. The relevant settings are explained in the code. For full details about each element in a workflow, see "[AUTOTITLE](/actions/using-workflows/workflow-syntax-for-github-actions)."

Create a new workflow file in your repository (such as `.github/workflows/deploy-image.yml`), and add the following YAML.

{% ifversion fpt or ghec %}
{% data reusables.package_registry.publish-docker-image %}

{% else %}

{% note %}

**Notes:**

- {% data reusables.actions.actions-not-certified-by-github %}
- {% data reusables.actions.actions-use-sha-pinning %}

{% endnote %}

```yaml annotate copy
#
name: Create and publish a Docker image

# Configures this workflow to run every time a change is pushed to the branch called `release`.
on:
  push:
    branches: ['release']

jobs:
# This job checks out the repository contents, installs `npm`, uses npm and webpack to build the app, and uploads the built files as an artifact that can be downloaded later in the workflow.
# It assumes that the built files are written to a directory called `public`.
  run-npm-build:
    runs-on: ubuntu-latest
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: npm install and build webpack
        run: |
          npm install
          npm run build
      - uses: {% data reusables.actions.action-upload-artifact %}
        with:
          name: webpack artifacts
          path: public/

# This job uses `npm test` to test the code. `needs: run-npm-build` makes this job dependent on the `run-npm-build` job.
  run-npm-test:
    runs-on: ubuntu-latest
    needs: run-npm-build
    strategy:
      matrix:
        os: [ubuntu-latest]
        node-version: [14.x, 16.x]
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Use Node.js {% raw %}${{ matrix.node-version }}{% endraw %}
        uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: {% raw %}${{ matrix.node-version }}{% endraw %}
      - uses: {% data reusables.actions.action-download-artifact %}
        with:
          name: webpack artifacts
          path: public
      - name: npm install, and test
        run: |
          npm install
          npm test
        env:
          CI: true

# This job publishes the package. `needs: run-npm-test` makes this job dependent on the `run-npm-test` job.
  build-and-push-image:
    runs-on: ubuntu-latest
    needs: run-npm-test {% ifversion ghes %}
    # Sets the permissions granted to the `GITHUB_TOKEN` for the actions in this job.
    permissions:
      contents: read
      packages: write {% endif %}
      #
    steps:
      - name: Checkout
        uses: {% data reusables.actions.action-checkout %}
      # Uses the `docker/login-action` action to log in to the registry using the account and password that will publish the packages. Once published, the packages are scoped to the account defined here.
      - name: Log in to GitHub Docker Registry
        uses: docker/login-action@65b78e6e13532edd9afa3aa52ac7964289d1a9c1
        with:
          registry: docker.pkg.github.com
          username: {% raw %}${{ github.actor }}{% endraw %}
          password: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
      # This step uses the `docker/build-push-action` action to build the image, based on your repository's `Dockerfile`. If the build succeeds, it pushes the image to {% data variables.product.prodname_registry %}.
      # It uses the `tags` parameter to tag the image with the SHA of the commit that triggered the workflow.
      - name: Build and push Docker image
        uses: docker/build-push-action@f2a1d5e99d037542a71f64918e516c093c6f3fc4
        with:
          push: true
          tags: |
            docker.pkg.github.com/{% raw %}${{ github.repository }}/octo-image:${{ github.sha }}{% endraw %}
```

{% endif %}

This new workflow will run automatically every time you push a change to a branch named `release` in the repository. You can view the progress in the **Actions** tab.

A few minutes after the workflow has completed, the new package will be visible in your repository. To find your available packages, see "[AUTOTITLE](/packages/learn-github-packages/viewing-packages#viewing-a-repositorys-packages)."

## Installing a package using an action

You can install packages as part of your CI flow using {% data variables.product.prodname_actions %}. For example, you could configure a workflow so that anytime a developer pushes code to a pull request, the workflow resolves dependencies by downloading and installing packages hosted by {% data variables.product.prodname_registry %}. Then, the workflow can run CI tests that require the dependencies.

Installing packages hosted by {% data variables.product.prodname_registry %} through {% data variables.product.prodname_actions %} requires minimal configuration or additional authentication when you use the `GITHUB_TOKEN`.{% ifversion fpt or ghec %} Data transfer is also free when an action installs a package. For more information, see "[AUTOTITLE](/billing/managing-billing-for-github-packages/about-billing-for-github-packages)."{% endif %}

{% data reusables.package_registry.actions-configuration %}

{% ifversion packages-registries-v2 %}

## Upgrading a workflow that accesses a registry using a {% data variables.product.pat_generic %}

{% data variables.product.prodname_registry %} supports the `GITHUB_TOKEN` for easy and secure authentication in your workflows. If you're using a registry that supports granular permissions, and your workflow is using a {% data variables.product.pat_generic %} to authenticate to the registry, then we highly recommend you update your workflow to use the `GITHUB_TOKEN`.

For more information about the `GITHUB_TOKEN`, see "[AUTOTITLE](/actions/security-guides/automatic-token-authentication#using-the-github_token-in-a-workflow)."

Using the `GITHUB_TOKEN`, instead of a {% data variables.product.pat_v1 %} with the `repo` scope, increases the security of your repository as you don't need to use a long-lived {% data variables.product.pat_generic %} that offers unnecessary access to the repository where your workflow is run. For more information about security best practices, see "[AUTOTITLE](/actions/security-guides/security-hardening-for-github-actions#using-secrets)."

1. Navigate to your package landing page.
{% data reusables.package_registry.package-settings-actions-access %}
1. To ensure your package has access to your workflow, you must add the repository where the workflow is stored to your package. {% data reusables.package_registry.package-settings-add-repo %}
   {% note %}

   **Note:** Adding a repository to your package {% data variables.package_registry.package-settings-actions-access-menu %} is different than connecting your package to a repository. For more information, see "[AUTOTITLE](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#ensuring-workflow-access-to-your-package)" and "[AUTOTITLE](/packages/learn-github-packages/connecting-a-repository-to-a-package)."

   {% endnote %}
1. Optionally, use {% data variables.package_registry.package-settings-actions-access-role-dropdown %}
1. Open your workflow file. On the line where you log in to the registry, replace your {% data variables.product.pat_generic %} with {% raw %}`${{ secrets.GITHUB_TOKEN }}`{% endraw %}.

For example, this workflow publishes a Docker image to the {% data variables.product.prodname_container_registry %} and uses {% raw %}`${{ secrets.GITHUB_TOKEN }}`{% endraw %} to authenticate. For more information, see "[Set up Automated Builds](https://docs.docker.com/docker-hub/builds/)" in the Docker documentation.

```yaml annotate copy
#
name: Demo Push

# This workflow runs when any of the following occur:
# - A push is made to a branch called `main` or `seed`
# - A tag starting with "v" is created
# - A pull request is created or updated
on:
  push:
    branches:
      - main
      - seed
    tags:
      - v*
  pull_request:
  # This creates an environment variable called `IMAGE_NAME ` with the value `ghtoken_product_demo`.
env:
  IMAGE_NAME: ghtoken_product_demo
#
jobs:
  # This pushes the image to {% data variables.product.prodname_registry %}.
  push:
    runs-on: ubuntu-latest
    permissions:
      packages: write
      contents: read
      #
    steps:
      - uses: {% data reusables.actions.action-checkout %}

      - name: Build image
        run: docker build . --file Dockerfile --tag $IMAGE_NAME --label "runnumber=${GITHUB_RUN_ID}"

      - name: Log in to registry
        run: echo "{% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}" | docker login ghcr.io -u {% raw %}${{ github.actor }}{% endraw %} --password-stdin
        #
      - name: Push image
        run: |
          IMAGE_ID=ghcr.io/{% raw %}${{ github.repository_owner }}{% endraw %}/$IMAGE_NAME

          # This changes all uppercase characters to lowercase.
          IMAGE_ID=$(echo $IMAGE_ID | tr '[A-Z]' '[a-z]')
          # This strips the git ref prefix from the version.
          VERSION=$(echo "{% raw %}${{ github.ref }}{% endraw %}" | sed -e 's,.*/\(.*\),\1,')
          # This strips the "v" prefix from the tag name.
          [[ "{% raw %}${{ github.ref }}{% endraw %}" == "refs/tags/"* ]] && VERSION=$(echo $VERSION | sed -e 's/^v//')
          # This uses the Docker `latest` tag convention.
          [ "$VERSION" == "main" ] && VERSION=latest
          echo IMAGE_ID=$IMAGE_ID
          echo VERSION=$VERSION
          docker tag $IMAGE_NAME $IMAGE_ID:$VERSION
          docker push $IMAGE_ID:$VERSION
```

{% endif %}
