---
title: Publishing Node.js packages
shortTitle: Publish Node.js packages
intro: You can publish Node.js packages to a registry as part of your continuous integration (CI) workflow.
redirect_from:
  - /actions/automating-your-workflow-with-github-actions/publishing-nodejs-packages
  - /actions/language-and-framework-guides/publishing-nodejs-packages
  - /actions/guides/publishing-nodejs-packages
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
type: tutorial
topics:
  - Packaging
  - Publishing
  - Node
  - JavaScript
---

{% data reusables.actions.enterprise-github-hosted-runners %}

## Introduction

This guide shows you how to create a workflow that publishes Node.js packages to the {% data variables.product.prodname_registry %} and npm registries after continuous integration (CI) tests pass.

## Prerequisites

We recommend that you have a basic understanding of workflow configuration options and how to create a workflow file. For more information, see "[AUTOTITLE](/actions/learn-github-actions)."

For more information about creating a CI workflow for your Node.js project, see "[AUTOTITLE](/actions/automating-builds-and-tests/building-and-testing-nodejs)."

You may also find it helpful to have a basic understanding of the following:

- "[AUTOTITLE](/packages/working-with-a-github-packages-registry/working-with-the-npm-registry)"
- "[AUTOTITLE](/actions/learn-github-actions/variables)"
- "[AUTOTITLE](/actions/security-guides/using-secrets-in-github-actions)"
- "[AUTOTITLE](/actions/security-guides/automatic-token-authentication)"

## About package configuration

 The `name` and `version` fields in the `package.json` file create a unique identifier that registries use to link your package to a registry. You can add a summary for the package listing page by including a `description` field in the `package.json` file. For more information, see "[Creating a package.json file](https://docs.npmjs.com/creating-a-package-json-file)" and "[Creating Node.js modules](https://docs.npmjs.com/creating-node-js-modules)" in the npm documentation.

When a local `.npmrc` file exists and has a `registry` value specified, the `npm publish` command uses the registry configured in the `.npmrc` file. {% data reusables.actions.setup-node-intro %}

You can specify the Node.js version installed on the runner using the `setup-node` action.

If you add steps in your workflow to configure the `publishConfig` fields in your `package.json` file, you don't need to specify the registry-url using the `setup-node` action, but you will be limited to publishing the package to one registry. For more information, see "[publishConfig](https://docs.npmjs.com/cli/v9/configuring-npm/package-json#publishconfig)" in the npm documentation.

## Publishing packages to the npm registry

You can trigger a workflow to publish your package every time you publish a new release. The process in the following example is executed when the release event of type `published` is triggered. If the CI tests pass, the process uploads the package to the npm registry. For more information, see "[AUTOTITLE](/repositories/releasing-projects-on-github/managing-releases-in-a-repository#creating-a-release)."

To perform authenticated operations against the npm registry in your workflow, you'll need to store your npm authentication token as a secret. For example, create a repository secret called `NPM_TOKEN`. For more information, see "[AUTOTITLE](/actions/security-guides/using-secrets-in-github-actions)."

By default, npm uses the `name` field of the `package.json` file to determine the name of your published package. When publishing to a global namespace, you only need to include the package name. For example, you would publish a package named `my-package` to `https://www.npmjs.com/package/my-package`.

If you're publishing a package that includes a scope prefix, include the scope in the name of your `package.json` file. For example, if your npm scope prefix is "octocat" and the package name is "hello-world", the `name` in your `package.json` file should be `@octocat/hello-world`. If your npm package uses a scope prefix and the package is public, you need to use the option `npm publish --access public`. This is an option that npm requires to prevent someone from publishing a private package unintentionally.

{% ifversion artifact-attestations %}If you would like to publish your package with provenance, include the `--provenance` flag with your `npm publish` command. This allows you to publicly and verifiably establish where and how your package was built, which increases supply chain security for people who consume your package. For more information, see [Generating provenance statements](https://docs.npmjs.com/generating-provenance-statements) in the npm documentation.{% endif %}

This example stores the `NPM_TOKEN` secret in the `NODE_AUTH_TOKEN` environment variable. When the `setup-node` action creates an `.npmrc` file, it references the token from the `NODE_AUTH_TOKEN` environment variable.

```yaml copy
name: Publish Package to npmjs
on:
  release:
    types: [published]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      # Setup .npmrc file to publish to npm
      - uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: {% ifversion actions-node20-support %}'20.x'{% else %}'16.x'{% endif %}
          registry-url: 'https://registry.npmjs.org'
      - run: npm ci
      - run: npm publish {% ifversion artifact-attestations %}--provenance --access public{% endif %}
        env:
          NODE_AUTH_TOKEN: {% raw %}${{ secrets.NPM_TOKEN }}{% endraw %}
```

In the example above, the `setup-node` action creates an `.npmrc` file on the runner with the following contents:

```shell
//registry.npmjs.org/:_authToken=${NODE_AUTH_TOKEN}
registry=https://registry.npmjs.org/
always-auth=true
```

Please note that you need to set the `registry-url` to `https://registry.npmjs.org/` in `setup-node` to properly configure your credentials.

## Publishing packages to {% data variables.product.prodname_registry %}

You can trigger a workflow to publish your package every time you publish a new release. The process in the following example is executed when the release event of type `published` is triggered. If the CI tests pass, the process uploads the package to {% data variables.product.prodname_registry %}. For more information, see "[AUTOTITLE](/repositories/releasing-projects-on-github/managing-releases-in-a-repository#creating-a-release)."

### Configuring the destination repository

Linking your package to {% data variables.product.prodname_registry %} using the `repository` key is optional. If you choose not to provide the `repository` key in your `package.json` file, then {% ifversion packages-npm-v2 %}your package will not be linked to a repository when it is published, but you can choose to connect the package to a repository later.{% else %}{% data variables.product.prodname_registry %} publishes a package in the {% data variables.product.prodname_dotcom %} repository you specify in the `name` field of the `package.json` file. For example, a package named `@my-org/test` is published to the `my-org/test` {% data variables.product.prodname_dotcom %} repository. If the `url` specified in the `repository` key is invalid, your package may still be published however it won't be linked to the repository source as intended.{% endif %}

If you do provide the `repository` key in your `package.json` file, then the repository in that key is used as the destination npm registry for {% data variables.product.prodname_registry %}. For example, publishing the below `package.json` results in a package named `my-package` published to the `octocat/my-other-repo` {% data variables.product.prodname_dotcom %} repository.{% ifversion packages-npm-v2 %}{% else %} Once published, only the repository source is updated, and the package doesn't inherit any permissions from the destination repository.{% endif %}

```json
{
  "name": "@octocat/my-package",
  "repository": {
    "type": "git",
    "url": "https://github.com/octocat/my-other-repo.git"
  },
```

### Authenticating to the destination repository

To perform authenticated operations against the {% data variables.product.prodname_registry %} registry in your workflow, you can use the `GITHUB_TOKEN`. {% data reusables.actions.github-token-permissions %}

If you want to publish your package to a different repository, you must use a {% data variables.product.pat_v1 %} that has permission to write to packages in the destination repository. For more information, see "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)" and "[AUTOTITLE](/actions/security-guides/using-secrets-in-github-actions)."

### Example workflow

This example stores the `GITHUB_TOKEN` secret in the `NODE_AUTH_TOKEN` environment variable. When the `setup-node` action creates an `.npmrc` file, it references the token from the `NODE_AUTH_TOKEN` environment variable.

```yaml copy
name: Publish package to GitHub Packages
on:
  release:
    types: [published]
jobs:
  build:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      packages: write
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      # Setup .npmrc file to publish to GitHub Packages
      - uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: {% ifversion actions-node20-support %}'20.x'{% else %}'16.x'{% endif %}
          registry-url: 'https://npm.pkg.github.com'
          # Defaults to the user or organization that owns the workflow file
          scope: '@octocat'
      - run: npm ci
      - run: npm publish
        env:
          NODE_AUTH_TOKEN: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
```

The `setup-node` action creates an `.npmrc` file on the runner. When you use the `scope` input to the `setup-node` action, the `.npmrc` file includes the scope prefix. By default, the `setup-node` action sets the scope in the `.npmrc` file to the account that contains that workflow file.

```shell
//npm.pkg.github.com/:_authToken=${NODE_AUTH_TOKEN}
@octocat:registry=https://npm.pkg.github.com
always-auth=true
```

## Publishing packages using Yarn

If you use the Yarn package manager, you can install and publish packages using Yarn.

```yaml copy
name: Publish Package to npmjs
on:
  release:
    types: [published]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      # Setup .npmrc file to publish to npm
      - uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: {% ifversion actions-node20-support %}'20.x'{% else %}'16.x'{% endif %}
          registry-url: 'https://registry.npmjs.org'
          # Defaults to the user or organization that owns the workflow file
          scope: '@octocat'
      - run: yarn
      - run: yarn npm publish // for Yarn version 1, use `yarn publish` instead
        env:
          NODE_AUTH_TOKEN: {% raw %}${{ secrets.NPM_TOKEN }}{% endraw %}
```

To authenticate with the registry during publishing, ensure your authentication token is also defined in your `yarnrc.yml` file. For more information, see the [Settings](https://yarnpkg.com/configuration/yarnrc#npmAuthToken) article in the Yarn documentation.
