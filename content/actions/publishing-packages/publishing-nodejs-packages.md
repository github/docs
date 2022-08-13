---
title: Publishing Node.js packages
intro: You can publish Node.js packages to a registry as part of your continuous integration (CI) workflow.
redirect_from:
  - /actions/automating-your-workflow-with-github-actions/publishing-nodejs-packages
  - /actions/language-and-framework-guides/publishing-nodejs-packages
  - /actions/guides/publishing-nodejs-packages
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Packaging
  - Publishing
  - Node
  - JavaScript
shortTitle: Node.js packages
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## Introduction

This guide shows you how to create a workflow that publishes Node.js packages to the {% data variables.product.prodname_registry %} and npm registries after continuous integration (CI) tests pass.

## Prerequisites

We recommend that you have a basic understanding of workflow configuration options and how to create a workflow file. For more information, see "[Learn {% data variables.product.prodname_actions %}](/actions/learn-github-actions)."

For more information about creating a CI workflow for your Node.js project, see "[Using Node.js with {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/using-nodejs-with-github-actions)."

You may also find it helpful to have a basic understanding of the following:

- "[Working with the npm registry](/packages/working-with-a-github-packages-registry/working-with-the-npm-registry)"
- "[Environment variables](/actions/reference/environment-variables)"
- "[Encrypted secrets](/actions/reference/encrypted-secrets)"
- "[Authentication in a workflow](/actions/reference/authentication-in-a-workflow)"

## About package configuration

 The `name` and `version` fields in the *package.json* file create a unique identifier that registries use to link your package to a registry. You can add a summary for the package listing page by including a `description` field in the *package.json* file. For more information, see "[Creating a package.json file](https://docs.npmjs.com/creating-a-package-json-file)" and "[Creating Node.js modules](https://docs.npmjs.com/creating-node-js-modules)" in the npm documentation.

When a local *.npmrc* file exists and has a `registry` value specified, the `npm publish` command uses the registry configured in the *.npmrc* file. {% data reusables.actions.setup-node-intro %}

You can specify the Node.js version installed on the runner using the `setup-node` action.

If you add steps in your workflow to configure the `publishConfig` fields in your *package.json* file, you don't need to specify the registry-url using the `setup-node` action, but you will be limited to publishing the package to one registry. For more information, see "[publishConfig](https://docs.npmjs.com/files/package.json#publishconfig)" in the npm documentation.

## Publishing packages to the npm registry

Each time you create a new release, you can trigger a workflow to publish your package. The workflow in the example below runs when the `release` event triggers with type `created`. The workflow publishes the package to the npm registry if CI tests pass.

To perform authenticated operations against the npm registry in your workflow, you'll need to store your npm authentication token as a secret. For example, create a repository secret called `NPM_TOKEN`. For more information, see "[Creating and using encrypted secrets](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)."

By default, npm uses the `name` field of the *package.json* file to determine the name of your published package. When publishing to a global namespace, you only need to include the package name. For example, you would publish a package named `npm-hello-world-test` to `https://www.npmjs.com/package/npm-hello-world-test`.

If you're publishing a package that includes a scope prefix, include the scope in the name of your *package.json* file. For example, if your npm scope prefix is octocat and the package name is hello-world, the `name` in your *package.json* file should be `@octocat/hello-world`. If your npm package uses a scope prefix and the package is public, you need to use the option `npm publish --access public`. This is an option that npm requires to prevent someone from publishing a private package unintentionally.

This example stores the `NPM_TOKEN` secret in the `NODE_AUTH_TOKEN` environment variable. When the `setup-node` action creates an *.npmrc* file, it references the token from the `NODE_AUTH_TOKEN` environment variable.

```yaml{:copy}
name: Publish Package to npmjs
on:
  release:
    types: [created]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      # Setup .npmrc file to publish to npm
      - uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: '16.x'
          registry-url: 'https://registry.npmjs.org'
      - run: npm ci
      - run: npm publish
        env:
          NODE_AUTH_TOKEN: {% raw %}${{ secrets.NPM_TOKEN }}{% endraw %}
```

In the example above, the `setup-node` action creates an *.npmrc* file on the runner with the following contents:

```ini
//registry.npmjs.org/:_authToken=${NODE_AUTH_TOKEN}
registry=https://registry.npmjs.org/
always-auth=true
```

Please note that you need to set the `registry-url` to `https://registry.npmjs.org/` in `setup-node` to properly configure your credentials.

## Publishing packages to {% data variables.product.prodname_registry %}

Each time you create a new release, you can trigger a workflow to publish your package. The workflow in the example below runs anytime the `release` event with type `created` occurs. The workflow publishes the package to {% data variables.product.prodname_registry %} if CI tests pass.

### Configuring the destination repository

If you don't provide the `repository` key in your *package.json* file, then {% data variables.product.prodname_registry %} publishes a package in the {% data variables.product.prodname_dotcom %} repository you specify in the `name` field of the *package.json* file. For example, a package named `@my-org/test` is published to the `my-org/test` {% data variables.product.prodname_dotcom %} repository.

However, if you do provide the `repository` key, then the repository in that key is used as the destination npm registry for {% data variables.product.prodname_registry %}. For example, publishing the below *package.json* results in a package named `my-amazing-package` published to the `octocat/my-other-repo` {% data variables.product.prodname_dotcom %} repository.

```json
{
  "name": "@octocat/my-amazing-package",
  "repository": {
    "type": "git",
    "url": "https://github.com/octocat/my-other-repo.git"
  },
```

### Authenticating to the destination repository

To perform authenticated operations against the {% data variables.product.prodname_registry %} registry in your workflow, you can use the `GITHUB_TOKEN`. {% data reusables.actions.github-token-permissions %}

If you want to publish your package to a different repository, you must use a personal access token (PAT) that has permission to write to packages in the destination repository. For more information, see "[Creating a personal access token](/github/authenticating-to-github/creating-a-personal-access-token)" and "[Encrypted secrets](/actions/reference/encrypted-secrets)."

### Example workflow

This example stores the `GITHUB_TOKEN` secret in the `NODE_AUTH_TOKEN` environment variable. When the `setup-node` action creates an *.npmrc* file, it references the token from the `NODE_AUTH_TOKEN` environment variable.

```yaml{:copy}
name: Publish package to GitHub Packages
on:
  release:
    types: [created]
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
          node-version: '16.x'
          registry-url: 'https://npm.pkg.github.com'
          # Defaults to the user or organization that owns the workflow file
          scope: '@octocat'
      - run: npm ci
      - run: npm publish
        env:
          NODE_AUTH_TOKEN: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
```

The `setup-node` action creates an *.npmrc* file on the runner. When you use the `scope` input to the `setup-node` action, the *.npmrc* file includes the scope prefix. By default, the `setup-node` action sets the scope in the *.npmrc* file to the account that contains that workflow file.

```ini
//npm.pkg.github.com/:_authToken=${NODE_AUTH_TOKEN}
@octocat:registry=https://npm.pkg.github.com
always-auth=true
```

## Publishing packages using yarn

If you use the Yarn package manager, you can install and publish packages using Yarn.

```yaml{:copy}
name: Publish Package to npmjs
on:
  release:
    types: [created]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      # Setup .npmrc file to publish to npm
      - uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: '16.x'
          registry-url: 'https://registry.npmjs.org'
          # Defaults to the user or organization that owns the workflow file
          scope: '@octocat'
      - run: yarn
      - run: yarn publish
        env:
          NODE_AUTH_TOKEN: {% raw %}${{ secrets.NPM_TOKEN }}{% endraw %}
```
