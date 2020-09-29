---
title: Building and testing Node.js
intro: You can create a continuous integration (CI) workflow to build and test your Node.js project.
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /actions/automating-your-workflow-with-github-actions/using-nodejs-with-github-actions
  - /actions/language-and-framework-guides/using-nodejs-with-github-actions
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### Introduction

This guide shows you how to create a continuous integration (CI) workflow that builds and tests Node.js code. If your CI tests pass, you may want to deploy your code or publish a package.

### Prerequisites

We recommend that you have a basic understanding of Node.js, YAML, workflow configuration options, and how to create a workflow file. For more information, see:

- "[Learn {% data variables.product.prodname_actions %}](/actions/learn-github-actions)"
- "[Getting started with Node.js](https://nodejs.org/en/docs/guides/getting-started-guide/)"

{% data reusables.actions.enterprise-setup-prereq %}

### Starting with the Node.js workflow template

{% data variables.product.prodname_dotcom %} provides a Node.js workflow template that will work for most Node.js projects. This guide includes npm and Yarn examples that you can use to customize the template. For more information, see the [Node.js workflow template](https://github.com/actions/starter-workflows/blob/master/ci/node.js.yml).

To get started quickly, add the template to the `.github/workflows` directory of your repository.

{% raw %}
```yaml
name: Node.js CI

on: [push]

jobs:
  build:

    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [8.x, 10.x, 12.x]

    steps:
    - uses: actions/checkout@v2
    - name: Use Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v1
      with:
        node-version: ${{ matrix.node-version }}
    - run: npm install
    - run: npm run build --if-present
    - run: npm test
      env:
        CI: true
```
{% endraw %}

{% data reusables.github-actions.example-github-runner %}

### Specifying the Node.js version

The easiest way to specify a Node.js version is by using the `setup-node` action provided by {% data variables.product.prodname_dotcom %}. For more information see, [`setup-node`](https://github.com/actions/setup-node/).

The `setup-node` action takes a Node.js version as an input and configures that version on the runner. The `setup-node` action finds a specific version of Node.js from the tools cache on each runner and adds the necessary binaries to `PATH`, which persists for the rest of the job. Using the `setup-node` action is the recommended way of using Node.js with {% data variables.product.prodname_actions %} because it ensures consistent behavior across different runners and different versions of Node.js. If you are using a self-hosted runner, you must install Node.js and add it to `PATH`.

The template includes a matrix strategy that builds and tests your code with three Node.js versions: 8.x, 10.x, and 12.x. The 'x' is a wildcard character that matches the latest minor and patch release available for a version. Each version of Node.js specified in the `node-version` array creates a job that runs the same steps.

Each job can access the value defined in the matrix `node-version` array using the `matrix` context. The `setup-node` action uses the context as the `node-version` input. The `setup-node` action configures each job with a different Node.js version before building and testing code. For more information about matrix strategies and contexts, see "[Workflow syntax for {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idstrategymatrix)" and "[Context and expression syntax for {% data variables.product.prodname_actions %}](/actions/reference/context-and-expression-syntax-for-github-actions)."

{% raw %}
```yaml
strategy:
  matrix:
    node-version: [8.x, 10.x, 12.x]

steps:
- uses: actions/checkout@v2
- name: Use Node.js ${{ matrix.node-version }}
  uses: actions/setup-node@v1
  with:
    node-version: ${{ matrix.node-version }}
```
{% endraw %}

Alternatively, you can build and test with exact Node.js versions.

```yaml
strategy:
  matrix:
    node-version: [8.16.2, 10.17.0]
```

Or, you can build and test using a single version of Node.js too.

{% raw %}
```yaml
name: Node.js CI

on: [push]

jobs:
  build:

    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v2
    - name: Use Node.js
      uses: actions/setup-node@v1
      with:
        node-version: '12.x'
    - run: npm install
    - run: npm run build --if-present
    - run: npm test
      env:
        CI: true
```
{% endraw %}

If you don't specify a Node.js version, {% data variables.product.prodname_dotcom %} uses the environment's default Node.js version. For more information, see "[Specifications for {% data variables.product.prodname_dotcom %}-hosted runners](/actions/reference/specifications-for-github-hosted-runners/#supported-software)".

### Installing dependencies

{% data variables.product.prodname_dotcom %}-hosted runners have npm and Yarn dependency managers installed. You can use npm and Yarn to install dependencies in your workflow before building and testing your code. The Windows and Linux {% data variables.product.prodname_dotcom %}-hosted runners also have Grunt, Gulp, and Bower installed.

You can also cache dependencies to speed up your workflow. For more information, see "[Caching dependencies to speed up your workflow](/actions/automating-your-workflow-with-github-actions/caching-dependencies-to-speed-up-workflows)."

#### Example using npm

This example installs the dependencies defined in the *package.json* file. For more information, see [`npm install`](https://docs.npmjs.com/cli/install).

```yaml
steps:
- uses: actions/checkout@v2
- name: Use Node.js
  uses: actions/setup-node@v1
  with:
    node-version: '12.x'
- name: Install dependencies
  run: npm install
```

Using `npm ci` installs the versions in the *package-lock.json* or *npm-shrinkwrap.json* file and prevents updates to the lock file. Using `npm ci` is generally faster than running `npm install`. For more information, see [`npm ci`](https://docs.npmjs.com/cli/ci.html) and "[Introducing `npm ci` for faster, more reliable builds](https://blog.npmjs.org/post/171556855892/introducing-npm-ci-for-faster-more-reliable)."

{% raw %}
```yaml
steps:
- uses: actions/checkout@v2
- name: Use Node.js
  uses: actions/setup-node@v1
  with:
    node-version: '12.x'
- name: Install dependencies
  run: npm ci
```
{% endraw %}

#### Example using Yarn

This example installs the dependencies defined in the *package.json* file. For more information, see [`yarn install`](https://yarnpkg.com/en/docs/cli/install).

```yaml
steps:
- uses: actions/checkout@v2
- name: Use Node.js
  uses: actions/setup-node@v1
  with:
    node-version: '12.x'
- name: Install dependencies
  run: yarn
```

Alternatively, you can pass `--frozen-lockfile` to install the versions in the *yarn.lock* file and prevent updates to the *yarn.lock* file.

```yaml
steps:
- uses: actions/checkout@v2
- name: Use Node.js
  uses: actions/setup-node@v1
  with:
    node-version: '12.x'
- name: Install dependencies
  run: yarn --frozen-lockfile
```

#### Example using a private registry and creating the .npmrc file

{% data reusables.github-actions.setup-node-intro %}

To authenticate to your private registry, you'll need to store your npm authentication token as a secret in your repository settings. For example, create a secret called `NPM_TOKEN`. For more information, see "[Creating and using encrypted secrets](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)."

In the example below, the secret `NPM_TOKEN` stores the npm authentication token. The `setup-node` action configures the *.npmrc* file to read the npm authentication token from the `NODE_AUTH_TOKEN` environment variable. When using the `setup-node` action to create an *.npmrc* file, you must set the `NPM_AUTH_TOKEN` environment variable with the secret that contains your npm authentication token.

Before installing dependencies, use the `setup-node` action to create the *.npmrc* file. The action has two input parameters. The `node-version` parameter sets the Node.js version, and the `registry-url` parameter sets the default registry. If your package registry uses scopes, you must use the `scope` parameter. For more information, see [`npm-scope`](https://docs.npmjs.com/misc/scope).

{% raw %}
```yaml
steps:
- uses: actions/checkout@v2
- name: Use Node.js
  uses: actions/setup-node@v1
  with:
    always-auth: true
    node-version: '12.x'
    registry-url: https://registry.npmjs.org
    scope: '@octocat'
- name: Install dependencies
  run: npm ci
  env:
    NODE_AUTH_TOKEN: ${{secrets.NPM_TOKEN}}
```
{% endraw %}

The example above creates an *.npmrc* file with the following contents:

```
//registry.npmjs.org/:_authToken=${NODE_AUTH_TOKEN}
@octocat:registry=https://registry.npmjs.org/
always-auth=true
```

#### Example caching dependencies

You can cache dependencies using a unique key, and restore the dependencies when you run future workflows using the `cache` action. For more information, see "[Caching dependencies to speed up workflows](/actions/automating-your-workflow-with-github-actions/caching-dependencies-to-speed-up-workflows)" and the [`cache` action](https://github.com/marketplace/actions/cache).

{% raw %}
```yaml
steps:
- uses: actions/checkout@v2
- name: Use Node.js
  uses: actions/setup-node@v1
  with:
    node-version: '12.x'
- name: Cache Node.js modules
  uses: actions/cache@v2
  with:
    # npm cache files are stored in `~/.npm` on Linux/macOS
    path: ~/.npm 
    key: ${{ runner.OS }}-node-${{ hashFiles('**/package-lock.json') }}
    restore-keys: |
      ${{ runner.OS }}-node-
      ${{ runner.OS }}-
- name: Install dependencies
  run: npm ci
```
{% endraw %}

### Building and testing your code

You can use the same commands that you use locally to build and test your code. For example, if you run `npm run build` to run build steps defined in your *package.json* file and `npm test` to run your test suite, you would add those commands in your workflow file.

```yaml
steps:
- uses: actions/checkout@v2
- name: Use Node.js
  uses: actions/setup-node@v1
  with:
    node-version: '12.x'
- run: npm install
- run: npm run build --if-present
- run: npm test
```

### Packaging workflow data as artifacts

You can save artifacts from your build and test steps to view after a job completes. For example, you may need to save log files, core dumps, test results, or screenshots. For more information, see "[Persisting workflow data using artifacts](/actions/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts)."

### Publishing to package registries

You can configure your workflow to publish your Node.js package to a package registry after your CI tests pass. For more information about publishing to npm and {% data variables.product.prodname_registry %}, see "[Publishing Node.js packages](/actions/automating-your-workflow-with-github-actions/publishing-nodejs-packages)."
